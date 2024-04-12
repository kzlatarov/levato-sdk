import { Signer } from 'ethers';
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
  get signer(): Signer {
    return this.#signer;
  }
}
