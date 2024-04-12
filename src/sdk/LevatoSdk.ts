import { Signer, formatEther } from 'ethers';
import {
  FlashloanRouter,
  FlashloanRouter__factory,
  ICreditDelegator,
  ICreditDelegator__factory,
  ILeveragedPositionsFactory,
  ILeveragedPositionsFactory__factory,
  LeveragedPositionsLens,
  LeveragedPositionsLens__factory
} from '../typechain';

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
  get getSigner(): Signer {
    return this.#signer;
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
    const rates = await this.#lensContract.getAssetsBorrowRates.staticCall(
      assetsUnderlying
    );
    const ratesMap: Map<string, string> = new Map();

    if (rates && rates.length) {
      for (let i = 0; i < rates.length; i++) {
        ratesMap.set(
          assetsUnderlying[i],
          `${Number(formatEther(rates[i] * 100n)).toFixed(3)}%`
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
   */
  async getMaxLeverageRatio(
    collateralUnderlying: string,
    collateralAmount: string,
    borrowAssetUnderlying: string
  ): Promise<bigint> {
    const result = await this.#lensContract.getMaxLeverageRatio.staticCall(
      collateralUnderlying,
      collateralAmount,
      borrowAssetUnderlying
    );

    return result;
  }
}
