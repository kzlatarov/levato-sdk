"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const typechain_1 = require("../typechain");
const utils_1 = require("ethers/lib/utils");
const _graphclient_1 = require("../.graphclient");
class LevatoSDK {
    // Private variables
    #signer;
    #lensContract;
    #factoryContract;
    #creditDelegatorContract;
    #flashLoanRouterContract;
    constructor({ signer, lensContractAddress, factoryContractAddress, creditDelegatorContractAddress, flashLoanRouterContractAddress }) {
        this.#signer = signer;
        this.#lensContract = typechain_1.LeveragedPositionsLens__factory.connect(lensContractAddress, signer);
        this.#factoryContract = typechain_1.ILeveragedPositionsFactory__factory.connect(factoryContractAddress, signer);
        this.#creditDelegatorContract = typechain_1.ICreditDelegator__factory.connect(creditDelegatorContractAddress, signer);
        this.#flashLoanRouterContract = typechain_1.FlashloanRouter__factory.connect(flashLoanRouterContractAddress, signer);
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
                ratesMap.set(assetsUnderlying[i], `${Number((0, utils_1.formatEther)(rates[i].mul(ethers_1.BigNumber.from(100)))).toFixed(3)}%`);
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
     * Get positions PnL
     * @param { string } address
     * @returns A map with positions addresses as keys and PnL data
     */
    async getPositionsPnl(account) {
        const query = (0, _graphclient_1.execute)(_graphclient_1.PnlQueryDocument, { trader: account });
        if (!query) {
            console.log(`TODO fix the queries`);
        }
        else {
            const result = await query;
            console.log(`result is ${JSON.stringify(result)}`);
            const pnlData = result?.data?.positions;
            if (pnlData) {
                const newMap = new Map();
                for (let i = 0; i < pnlData.length; i++) {
                    const positionPnLData = pnlData[i];
                    positionPnLData.id = ethers_1.ethers.utils.getAddress(positionPnLData.id);
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
        const tx = await this.#factoryContract.createAndFundPositionAtRatio(collateralUnderlying, ethers_1.ethers.constants.AddressZero, stableTokenUnderlying, isShort, fundingTokenUnderlying, amount, leverage ?? '1');
        return tx;
    }
    /**
     * Close a position
     * @param { string } contractAddress
     * @returns The transaction hash
     */
    async closePosition(contractAddress) {
        const leveragedPositionContract = typechain_1.LeveragedPosition__factory.connect(contractAddress, this.#signer);
        const tx = await leveragedPositionContract['closePosition()']();
        return tx;
    }
}
exports.default = LevatoSDK;
