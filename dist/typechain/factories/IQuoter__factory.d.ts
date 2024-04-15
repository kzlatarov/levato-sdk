import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IQuoter, IQuoterInterface } from "../IQuoter";
export declare class IQuoter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "estimateMaxSwapUniswapV3";
        readonly inputs: readonly [{
            readonly name: "_fromToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_toToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_poolFee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "estimateMinSwapUniswapV3";
        readonly inputs: readonly [{
            readonly name: "_fromToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_toToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_poolFee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IQuoterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IQuoter;
}
