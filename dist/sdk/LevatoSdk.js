import { BigNumber, ethers } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import { getBuiltGraphSDK } from '../.graphclient';
import { FlashloanRouter__factory, ICreditDelegator__factory, ILeveragedPositionsFactory__factory, LeveragedPosition__factory, LeveragedPositionsLens__factory } from '../typechain';
export default class LevatoSDK {
    // Private variables
    #signer;
    #lensContract;
    #factoryContract;
    #creditDelegatorContract;
    #flashLoanRouterContract;
    constructor({ signer, lensContractAddress, factoryContractAddress, creditDelegatorContractAddress, flashLoanRouterContractAddress }) {
        this.#signer = signer;
        this.#lensContract = LeveragedPositionsLens__factory.connect(lensContractAddress, signer);
        this.#factoryContract = ILeveragedPositionsFactory__factory.connect(factoryContractAddress, signer);
        this.#creditDelegatorContract = ICreditDelegator__factory.connect(creditDelegatorContractAddress, signer);
        this.#flashLoanRouterContract = FlashloanRouter__factory.connect(flashLoanRouterContractAddress, signer);
    }
    // Getters
    get signer() {
        return this.#signer;
    }
    get factoryContract() {
        return this.#factoryContract;
    }
    get lensContract() {
        return this.#lensContract;
    }
    get creditDelegatorContract() {
        return this.#creditDelegatorContract;
    }
    get flashLoanRouterContract() {
        return this.#flashLoanRouterContract;
    }
    // Public get methods
    /**
     * Get borrow rates for underlying assets
     * @param assetsUnderlying
     * @returns A map with addresses as keys and percentages as values
     */
    async getAssetsBorrowRates(assetsUnderlying) {
        const rates = await this.#lensContract.getAssetsBorrowRates(assetsUnderlying);
        const ratesMap = new Map();
        if (rates && rates.length) {
            for (let i = 0; i < rates.length; i++) {
                ratesMap.set(assetsUnderlying[i], `${Number(formatEther(rates[i].mul(BigNumber.from(100)))).toFixed(3)}%`);
            }
        }
        return ratesMap;
    }
    /**
     * Get the max leverage ratio
     * for a given collateral
     * @param { string } collateralUnderlying
     * @param { string } collateralAmount
     * @param { string } borrowAssetUnderlying
     * @returns BigNumber representing the max leverage value
     */
    async getMaxLeverageRatio(collateralUnderlying, collateralAmount, borrowAssetUnderlying) {
        const result = await this.#lensContract.getMaxLeverageRatio(collateralUnderlying, collateralAmount, borrowAssetUnderlying);
        return result;
    }
    /**
     * Get liquidation threshold
     * @param collateralAsset
     * @param collateralAmount
     * @param borrowedAsset
     * @param leverageRatio
     * @returns BigNumber representing the liquidation threshold
     */
    async getLiquidationThreshold(collateralAsset, collateralAmount, borrowedAsset, leverageRatio) {
        const result = await this.#lensContract.getLiquidationThreshold(collateralAsset, collateralAmount.toString(), borrowedAsset, leverageRatio.toString());
        return result;
    }
    /**
     * Get positions info
     * @param { string } address
     * @returns Opened and closed positions info in descending order
     */
    async getPositionsInfo(address) {
        const [positions] = await this.#factoryContract.getPositionsByAccount(address);
        const apys = positions.map(() => '0');
        const positionsData = await this.#lensContract.callStatic.getPositionsInfo(JSON.parse(JSON.stringify(positions)), apys);
        const openPositions = [];
        const closedPositions = [];
        for (let i = 0; i < positionsData.length; i++) {
            positionsData[i].closed
                ? closedPositions.push(positionsData[i])
                : openPositions.push(positionsData[i]);
        }
        // Reverse to sort them in descending order
        return [openPositions.reverse(), closedPositions.reverse()];
    }
    /**
     * Get graph positions info
     * @param { string[] } positionsAddresses
     * @returns An array containing graph position info
     */
    async getGraphPositionsInfo(positionsAddresses) {
        const sdk = getBuiltGraphSDK();
        const fundedQuery = sdk.FundingQuery({
            positionAddresses: positionsAddresses
        });
        const adjustedQuery = sdk.AdjustedRatioQuery({
            positionAddresses: positionsAddresses
        });
        const createdQuery = sdk.PositionCreatedQuery({
            positionAddresses: positionsAddresses
        });
        const closedQuery = sdk.PositionClosedQuery({
            positionAddresses: positionsAddresses
        });
        if (!fundedQuery || !adjustedQuery || !createdQuery || !closedQuery) {
            console.log(`broken graph calls`);
            throw new Error('Broken graph calls');
        }
        const graphData = await Promise.all([
            fundedQuery,
            adjustedQuery,
            createdQuery,
            closedQuery
        ]);
        return graphData;
    }
    /**
     * Get positions PnL
     * @param { string } address
     * @returns A map with positions addresses as keys and PnL data
     */
    async getPositionsPnl(account) {
        const sdk = getBuiltGraphSDK();
        const query = sdk.PnlQuery({ trader: account });
        if (!query) {
            console.log(`TODO fix the queries`);
        }
        else {
            const result = await query;
            console.log(`result is ${JSON.stringify(result)}`);
            const pnlData = result?.positions;
            if (pnlData) {
                const newMap = new Map();
                for (let i = 0; i < pnlData.length; i++) {
                    const positionPnLData = pnlData[i];
                    positionPnLData.id = ethers.utils.getAddress(positionPnLData.id);
                    newMap.set(positionPnLData.id, positionPnLData);
                }
                return newMap;
            }
            else {
                console.error(`missing PnL data for ${account} ${pnlData}`);
            }
        }
        return null;
    }
    // Public mutations
    /**
     * Open a position
     * @param { string } collateralUnderlying
     * @param { string } stableTokenUnderlying
     * @param { BigNumber } amount
     * @param { string } fundingTokenUnderlying
     * @param { string } leverage
     * @param { type }
     * @returns The transaction hash
     */
    async openPosition(collateralUnderlying, stableTokenUnderlying, amount, fundingTokenUnderlying, leverage, isShort) {
        const tx = await this.#factoryContract.createAndFundPositionAtRatio(collateralUnderlying, ethers.constants.AddressZero, stableTokenUnderlying, isShort, fundingTokenUnderlying, amount, leverage ?? '1');
        return tx;
    }
    /**
     * Close a position
     * @param { string } contractAddress
     * @returns The transaction hash
     */
    async closePosition(contractAddress) {
        const leveragedPositionContract = LeveragedPosition__factory.connect(contractAddress, this.#signer);
        const tx = await leveragedPositionContract['closePosition()']();
        return tx;
    }
}
