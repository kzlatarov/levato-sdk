import { type ContractRunner } from "ethers";
import type { IUniswapV2Callee, IUniswapV2CalleeInterface } from "../IUniswapV2Callee";
export declare class IUniswapV2Callee__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount0";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount1";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "uniswapV2Call";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV2CalleeInterface;
    static connect(address: string, runner?: ContractRunner | null): IUniswapV2Callee;
}
