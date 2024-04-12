import { type ContractRunner } from "ethers";
import type { IFundingStrategy, IFundingStrategyInterface } from "../IFundingStrategy";
export declare class IFundingStrategy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "inputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "strategyData";
            readonly type: "bytes";
        }];
        readonly name: "redeem";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "outputAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFundingStrategyInterface;
    static connect(address: string, runner?: ContractRunner | null): IFundingStrategy;
}
