import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBalancerVault, IBalancerVaultInterface } from "../IBalancerVault";
export declare class IBalancerVault__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "exitPool";
        readonly inputs: readonly [{
            readonly name: "poolId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "request";
            readonly type: "tuple";
            readonly internalType: "struct ExitPoolRequest";
            readonly components: readonly [{
                readonly name: "assets";
                readonly type: "address[]";
                readonly internalType: "contract IERC20Upgradeable[]";
            }, {
                readonly name: "minAmountsOut";
                readonly type: "uint256[]";
                readonly internalType: "uint256[]";
            }, {
                readonly name: "userData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "toInternalBalance";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getPoolTokens";
        readonly inputs: readonly [{
            readonly name: "poolId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "tokens";
            readonly type: "address[]";
            readonly internalType: "contract IERC20Upgradeable[]";
        }, {
            readonly name: "balances";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "lastChangeBlock";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "manageUserBalance";
        readonly inputs: readonly [{
            readonly name: "ops";
            readonly type: "tuple[]";
            readonly internalType: "struct UserBalanceOp[]";
            readonly components: readonly [{
                readonly name: "kind";
                readonly type: "uint8";
                readonly internalType: "enum UserBalanceOpKind";
            }, {
                readonly name: "asset";
                readonly type: "address";
                readonly internalType: "contract IAsset";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "singleSwap";
            readonly type: "tuple";
            readonly internalType: "struct SingleSwap";
            readonly components: readonly [{
                readonly name: "poolId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "kind";
                readonly type: "uint8";
                readonly internalType: "enum SwapKind";
            }, {
                readonly name: "assetIn";
                readonly type: "address";
                readonly internalType: "contract IAsset";
            }, {
                readonly name: "assetOut";
                readonly type: "address";
                readonly internalType: "contract IAsset";
            }, {
                readonly name: "amount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "userData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "funds";
            readonly type: "tuple";
            readonly internalType: "struct FundManagement";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromInternalBalance";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "recipient";
                readonly type: "address";
                readonly internalType: "address payable";
            }, {
                readonly name: "toInternalBalance";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "limit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "amountCalculated";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IBalancerVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBalancerVault;
}
