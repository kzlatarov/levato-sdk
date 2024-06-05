import { BigNumber, ContractTransaction, Signer } from 'ethers';
import { FlashloanRouter, ICreditDelegator, ILeveragedPositionsFactory, LeveragedPositionsLens } from '../typechain';
export type LevatoSDKContructor = {
    signer: Signer;
    lensContractAddress: string;
    factoryContractAddress: string;
    creditDelegatorContractAddress: string;
    flashLoanRouterContractAddress: string;
};
export default class LevatoSDK {
    #private;
    constructor({ signer, lensContractAddress, factoryContractAddress, creditDelegatorContractAddress, flashLoanRouterContractAddress }: LevatoSDKContructor);
    get signer(): Signer;
    get factoryContract(): ILeveragedPositionsFactory;
    get lensContract(): LeveragedPositionsLens;
    get creditDelegatorContract(): ICreditDelegator;
    get flashLoanRouterContract(): FlashloanRouter;
    /**
     * Get borrow rates for underlying assets
     * @param assetsUnderlying
     * @returns A map with addresses as keys and percentages as values
     */
    getAssetsBorrowRates(assetsUnderlying: string[]): Promise<Map<string, string> | undefined>;
    /**
     * Get the max leverage ratio
     * for a given collateral
     * @param { string } collateralUnderlying
     * @param { string } collateralAmount
     * @param { string } borrowAssetUnderlying
     * @returns BigNumber representing the max leverage value
     */
    getMaxLeverageRatio(collateralUnderlying: string, collateralAmount: string, borrowAssetUnderlying: string): Promise<BigNumber>;
    /**
     * Get liquidation threshold
     * @param collateralAsset
     * @param collateralAmount
     * @param borrowedAsset
     * @param leverageRatio
     * @returns BigNumber representing the liquidation threshold
     */
    getLiquidationThreshold(collateralAsset: string, collateralAmount: string, borrowedAsset: string, leverageRatio: string): Promise<BigNumber | undefined>;
    /**
     * Get positions info
     * @param { string } address
     * @returns Opened and closed positions info in descending order
     */
    getPositionsInfo(address: string): Promise<[
        LeveragedPositionsLens.PositionInfoStructOutput[],
        LeveragedPositionsLens.PositionInfoStructOutput[]
    ]>;
    /**
     * Get positions PnL
     * @param { string } address
     * @returns A map with positions addresses as keys and PnL data
     */
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
    openPosition(collateralUnderlying: string, stableTokenUnderlying: string, amount: BigNumber, fundingTokenUnderlying: string, leverage: string, isShort: boolean): Promise<ContractTransaction>;
    /**
     * Close a position
     * @param { string } contractAddress
     * @returns The transaction hash
     */
    closePosition(contractAddress: string): Promise<ContractTransaction>;
}
