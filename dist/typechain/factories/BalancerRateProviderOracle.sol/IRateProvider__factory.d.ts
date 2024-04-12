import { type ContractRunner } from "ethers";
import type { IRateProvider, IRateProviderInterface } from "../../BalancerRateProviderOracle.sol/IRateProvider";
export declare class IRateProvider__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "getRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IRateProviderInterface;
    static connect(address: string, runner?: ContractRunner | null): IRateProvider;
}
