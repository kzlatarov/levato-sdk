import { type ContractRunner } from "ethers";
import type { IBalancerPool, IBalancerPoolInterface } from "../IBalancerPool";
export declare class IBalancerPool__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "poolAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
        }];
        readonly name: "exitPool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPoolAmountIn";
            readonly type: "uint256";
        }];
        readonly name: "exitswapExternAmountOut";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "poolAmountIn";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getFinalTokens";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getNormalizedWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNormalizedWeights";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNumTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPoolId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSwapFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVault";
        readonly outputs: readonly [{
            readonly internalType: "contract IBalancerVault";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "poolAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }];
        readonly name: "joinPool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minPoolAmountOut";
            readonly type: "uint256";
        }];
        readonly name: "joinswapExternAmountIn";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "poolAmountOut";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPrice";
            readonly type: "uint256";
        }];
        readonly name: "swapExactAmountIn";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "spotPriceAfter";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPrice";
            readonly type: "uint256";
        }];
        readonly name: "swapExactAmountOut";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "spotPriceAfter";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IBalancerPoolInterface;
    static connect(address: string, runner?: ContractRunner | null): IBalancerPool;
}
