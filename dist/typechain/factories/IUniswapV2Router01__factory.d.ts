import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV2Router01, IUniswapV2Router01Interface } from "../IUniswapV2Router01";
export declare class IUniswapV2Router01__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "WETH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "addLiquidity";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountADesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBDesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountAMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addLiquidityETH";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountTokenDesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountTokenMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETHMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountToken";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETH";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getAmountIn";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getAmountOut";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "getAmountsIn";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAmountsOut";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quote";
        readonly inputs: readonly [{
            readonly name: "amountA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidity";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountAMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidityETH";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountTokenMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETHMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountToken";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETH";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidityETHWithPermit";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountTokenMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETHMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "approveMax";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "amountToken";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountETH";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeLiquidityWithPermit";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountAMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "approveMax";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "amountA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapETHForExactTokens";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapExactETHForTokens";
        readonly inputs: readonly [{
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapExactTokensForETH";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapExactTokensForTokens";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensForExactETH";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInMax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensForExactTokens";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInMax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IUniswapV2Router01Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV2Router01;
}
