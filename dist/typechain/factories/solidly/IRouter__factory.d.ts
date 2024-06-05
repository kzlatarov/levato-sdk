import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRouter, IRouterInterface } from "../../solidly/IRouter";
export declare class IRouter__factory {
    static readonly abi: readonly [{
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
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "getAmountsOut";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IRouter.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getReserves";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "reserveA";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveB";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isPair";
        readonly inputs: readonly [{
            readonly name: "pair";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pairFor";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "pair";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quoteAddLiquidity";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "amountADesired";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountBDesired";
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
        readonly stateMutability: "view";
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
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
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
            readonly name: "routes";
            readonly type: "tuple[]";
            readonly internalType: "struct IRouter.Route[]";
            readonly components: readonly [{
                readonly name: "from";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stable";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
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
        readonly name: "swapExactTokensForTokensSimple";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenFrom";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenTo";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "bool";
            readonly internalType: "bool";
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
    static createInterface(): IRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRouter;
}
