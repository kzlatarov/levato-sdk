import { type ContractRunner } from "ethers";
import type { IUniswapV3Pool, IUniswapV3PoolInterface } from "../IUniswapV3Pool";
export declare class IUniswapV3Pool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "fee";
        readonly outputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "observationCardinalityNext";
            readonly type: "uint16";
        }];
        readonly name: "increaseObservationCardinalityNext";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "liquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "observations";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "blockTimestamp";
            readonly type: "uint32";
        }, {
            readonly internalType: "int56";
            readonly name: "tickCumulative";
            readonly type: "int56";
        }, {
            readonly internalType: "uint160";
            readonly name: "liquidityCumulative";
            readonly type: "uint160";
        }, {
            readonly internalType: "bool";
            readonly name: "initialized";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32[]";
            readonly name: "secondsAgos";
            readonly type: "uint32[]";
        }];
        readonly name: "observe";
        readonly outputs: readonly [{
            readonly internalType: "int56[]";
            readonly name: "tickCumulatives";
            readonly type: "int56[]";
        }, {
            readonly internalType: "uint160[]";
            readonly name: "liquidityCumulatives";
            readonly type: "uint160[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "key";
            readonly type: "bytes32";
        }];
        readonly name: "positions";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "_liquidity";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthInside0LastX128";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthInside1LastX128";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "tokensOwed0";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "tokensOwed1";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "slot0";
        readonly outputs: readonly [{
            readonly internalType: "uint160";
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
        }, {
            readonly internalType: "int24";
            readonly name: "tick";
            readonly type: "int24";
        }, {
            readonly internalType: "uint16";
            readonly name: "observationIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "observationCardinality";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint16";
            readonly name: "observationCardinalityNext";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint8";
            readonly name: "feeProtocol";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "unlocked";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int16";
            readonly name: "wordPosition";
            readonly type: "int16";
        }];
        readonly name: "tickBitmap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int24";
            readonly name: "tick";
            readonly type: "int24";
        }];
        readonly name: "ticks";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "liquidityGross";
            readonly type: "uint128";
        }, {
            readonly internalType: "int128";
            readonly name: "liquidityNet";
            readonly type: "int128";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthOutside0X128";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "feeGrowthOutside1X128";
            readonly type: "uint256";
        }, {
            readonly internalType: "int56";
            readonly name: "tickCumulativeOutside";
            readonly type: "int56";
        }, {
            readonly internalType: "uint160";
            readonly name: "secondsPerLiquidityOutsideX128";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint32";
            readonly name: "secondsOutside";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "initialized";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token0";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token1";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV3PoolInterface;
    static connect(address: string, runner?: ContractRunner | null): IUniswapV3Pool;
}
