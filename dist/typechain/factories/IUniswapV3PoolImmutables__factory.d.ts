import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3PoolImmutables, IUniswapV3PoolImmutablesInterface } from "../IUniswapV3PoolImmutables";
export declare class IUniswapV3PoolImmutables__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "fee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxLiquidityPerTick";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "tickSpacing";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int24";
            readonly internalType: "int24";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "token0";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "token1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IUniswapV3PoolImmutablesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3PoolImmutables;
}
