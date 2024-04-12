import { type ContractRunner } from "ethers";
import type { IBalancerVault, IBalancerVaultInterface } from "../IBalancerVault";
export declare class IBalancerVault__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20Upgradeable[]";
                readonly name: "assets";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "minAmountsOut";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "bytes";
                readonly name: "userData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "toInternalBalance";
                readonly type: "bool";
            }];
            readonly internalType: "struct ExitPoolRequest";
            readonly name: "request";
            readonly type: "tuple";
        }];
        readonly name: "exitPool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }];
        readonly name: "getPoolTokens";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "balances";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastChangeBlock";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "enum UserBalanceOpKind";
                readonly name: "kind";
                readonly type: "uint8";
            }, {
                readonly internalType: "contract IAsset";
                readonly name: "asset";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "address payable";
                readonly name: "recipient";
                readonly type: "address";
            }];
            readonly internalType: "struct UserBalanceOp[]";
            readonly name: "ops";
            readonly type: "tuple[]";
        }];
        readonly name: "manageUserBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "poolId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "enum SwapKind";
                readonly name: "kind";
                readonly type: "uint8";
            }, {
                readonly internalType: "contract IAsset";
                readonly name: "assetIn";
                readonly type: "address";
            }, {
                readonly internalType: "contract IAsset";
                readonly name: "assetOut";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "userData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SingleSwap";
            readonly name: "singleSwap";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "fromInternalBalance";
                readonly type: "bool";
            }, {
                readonly internalType: "address payable";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "toInternalBalance";
                readonly type: "bool";
            }];
            readonly internalType: "struct FundManagement";
            readonly name: "funds";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "limit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "swap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amountCalculated";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IBalancerVaultInterface;
    static connect(address: string, runner?: ContractRunner | null): IBalancerVault;
}
