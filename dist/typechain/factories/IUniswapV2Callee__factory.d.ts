import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV2Callee, IUniswapV2CalleeInterface } from "../IUniswapV2Callee";
export declare class IUniswapV2Callee__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "uniswapV2Call";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount0";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amount1";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IUniswapV2CalleeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV2Callee;
}
