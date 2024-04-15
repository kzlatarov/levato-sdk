import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBalancerPool, IBalancerPoolInterface } from "../IBalancerPool";
export declare class IBalancerPool__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "exitPool";
        readonly inputs: readonly [{
            readonly name: "poolAmountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "exitswapExternAmountOut";
        readonly inputs: readonly [{
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPoolAmountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "poolAmountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getBalance";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getFinalTokens";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNormalizedWeight";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNormalizedWeights";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNumTokens";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPoolId";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getSwapFee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IBalancerVault";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "joinPool";
        readonly inputs: readonly [{
            readonly name: "poolAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "joinswapExternAmountIn";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenAmountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minPoolAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "poolAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapExactAmountIn";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenAmountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "tokenAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "spotPriceAfter";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapExactAmountOut";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "maxAmountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "tokenAmountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "spotPriceAfter";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IBalancerPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBalancerPool;
}
