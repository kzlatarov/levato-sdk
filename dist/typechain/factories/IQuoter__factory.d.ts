import { type ContractRunner } from "ethers";
import type { IQuoter, IQuoterInterface } from "../IQuoter";
export declare class IQuoter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_fromToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_toToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint24";
            readonly name: "_poolFee";
            readonly type: "uint24";
        }];
        readonly name: "estimateMaxSwapUniswapV3";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_fromToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_toToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint24";
            readonly name: "_poolFee";
            readonly type: "uint24";
        }];
        readonly name: "estimateMinSwapUniswapV3";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IQuoterInterface;
    static connect(address: string, runner?: ContractRunner | null): IQuoter;
}
