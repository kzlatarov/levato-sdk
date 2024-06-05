import { BigNumber, ContractTransaction, Signer, ethers } from 'ethers';
import {
  FlashloanRouter,
  FlashloanRouter__factory,
  ICreditDelegator,
  ICreditDelegator__factory,
  ILeveragedPositionsFactory,
  ILeveragedPositionsFactory__factory,
  LeveragedPosition__factory,
  LeveragedPositionsLens,
  LeveragedPositionsLens__factory
} from '../typechain';
import { formatEther } from 'ethers/lib/utils';

export type LevatoSDKContructor = {
  signer: Signer;
  lensContractAddress: string;
  factoryContractAddress: string;
  creditDelegatorContractAddress: string;
  flashLoanRouterContractAddress: string;
};

export default class LevatoSDK {
  // Private variables
  #signer: Signer;
  #lensContract: LeveragedPositionsLens;
  #factoryContract: ILeveragedPositionsFactory;
  #creditDelegatorContract: ICreditDelegator;
  #flashLoanRouterContract: FlashloanRouter;

  constructor({
    signer,
    lensContractAddress,
    factoryContractAddress,
    creditDelegatorContractAddress,
    flashLoanRouterContractAddress
  }: LevatoSDKContructor) {
    this.#signer = signer;
    this.#lensContract = LeveragedPositionsLens__factory.connect(
      lensContractAddress,
      signer
    );
    this.#factoryContract = ILeveragedPositionsFactory__factory.connect(
      factoryContractAddress,
      signer
    );
    this.#creditDelegatorContract = ICreditDelegator__factory.connect(
      creditDelegatorContractAddress,
      signer
    );
    this.#flashLoanRouterContract = FlashloanRouter__factory.connect(
      flashLoanRouterContractAddress,
      signer
    );
  }

  // Getters
  get signer(): Signer {
    return this.#signer;
  }

  get factoryContract(): ILeveragedPositionsFactory {
    return this.#factoryContract;
  }

  get lensContract(): LeveragedPositionsLens {
    return this.#lensContract;
  }

  get creditDelegatorContract(): ICreditDelegator {
    return this.#creditDelegatorContract;
  }

  get flashLoanRouterContract(): FlashloanRouter {
    return this.#flashLoanRouterContract;
  }

  // Public get methods

  /**
   * Get borrow rates for underlying assets
   * @param assetsUnderlying
   * @returns A map with addresses as keys and percentages as values
   */
  async getAssetsBorrowRates(
    assetsUnderlying: string[]
  ): Promise<Map<string, string> | undefined> {
    const rates = await this.#lensContract.getAssetsBorrowRates(
      assetsUnderlying
    );
    const ratesMap: Map<string, string> = new Map();

    if (rates && rates.length) {
      for (let i = 0; i < rates.length; i++) {
        ratesMap.set(
          assetsUnderlying[i],
          `${Number(formatEther(rates[i].mul(BigNumber.from(100)))).toFixed(
            3
          )}%`
        );
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
  async getMaxLeverageRatio(
    collateralUnderlying: string,
    collateralAmount: string,
    borrowAssetUnderlying: string
  ): Promise<BigNumber> {
    const result = await this.#lensContract.getMaxLeverageRatio(
      collateralUnderlying,
      collateralAmount,
      borrowAssetUnderlying
    );

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
  async getLiquidationThreshold(
    collateralAsset: string,
    collateralAmount: string,
    borrowedAsset: string,
    leverageRatio: string
  ): Promise<BigNumber | undefined> {
    const result = await this.#lensContract.getLiquidationThreshold(
      collateralAsset,
      collateralAmount.toString(),
      borrowedAsset,
      leverageRatio.toString()
    );

    return result;
  }

  /**
   * Get positions info
   * @param { string } address
   * @returns Opened and closed positions info in descending order
   */
  async getPositionsInfo(
    address: string
  ): Promise<
    [
      LeveragedPositionsLens.PositionInfoStructOutput[],
      LeveragedPositionsLens.PositionInfoStructOutput[]
    ]
  > {
    const [positions] = await this.#factoryContract.getPositionsByAccount(
      address
    );

    const apys = positions.map(() => '0');
    const positionsData = await this.#lensContract.callStatic.getPositionsInfo(
      JSON.parse(JSON.stringify(positions)),
      apys
    );
    const openPositions: LeveragedPositionsLens.PositionInfoStructOutput[] = [];
    const closedPositions: LeveragedPositionsLens.PositionInfoStructOutput[] =
      [];

    for (let i = 0; i < positionsData.length; i++) {
      positionsData[i].closed
        ? closedPositions.push(positionsData[i])
        : openPositions.push(positionsData[i]);
    }

    // Reverse to sort them in descending order
    return [openPositions.reverse(), closedPositions.reverse()];
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
  async openPosition(
    collateralUnderlying: string,
    stableTokenUnderlying: string,
    amount: BigNumber,
    fundingTokenUnderlying: string,
    leverage: string,
    isShort: boolean
  ): Promise<ContractTransaction> {
    const tx = await this.#factoryContract.createAndFundPositionAtRatio(
      collateralUnderlying,
      ethers.constants.AddressZero,
      stableTokenUnderlying,
      isShort,
      fundingTokenUnderlying,
      amount,
      leverage ?? '1'
    );

    return tx;
  }

  /**
   * Close a position
   * @param { string } contractAddress
   * @returns The transaction hash
   */
  async closePosition(contractAddress: string): Promise<ContractTransaction> {
    const leveragedPositionContract = LeveragedPosition__factory.connect(
      contractAddress,
      this.#signer
    );

    const tx = await leveragedPositionContract['closePosition()']();

    return tx;
  }
}
