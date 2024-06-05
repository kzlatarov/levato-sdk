import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRateProvider, IRateProviderInterface } from "../../BalancerRateProviderOracle.sol/IRateProvider";
export declare class IRateProvider__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IRateProviderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRateProvider;
}
