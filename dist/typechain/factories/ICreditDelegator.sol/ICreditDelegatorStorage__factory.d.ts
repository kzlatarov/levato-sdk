import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICreditDelegatorStorage, ICreditDelegatorStorageInterface } from "../../ICreditDelegator.sol/ICreditDelegatorStorage";
export declare class ICreditDelegatorStorage__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "borrowAllowance";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "asset";
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
        readonly name: "borrowBalance";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "asset";
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
        readonly name: "delegatedDebtAssetData";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct CreditDelegatorStorageBase.DelegatedDebtAssetData";
            readonly components: readonly [{
                readonly name: "levatoCurrentBorrowRate";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "borrowIndex";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lastTotalDebt";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lastUpdateTimestamp";
                readonly type: "uint40";
                readonly internalType: "uint40";
            }, {
                readonly name: "lpToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "debtToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "irm";
                readonly type: "address";
                readonly internalType: "contract IDefaultInterestRateStrategy";
            }, {
                readonly name: "accruedToTreasury";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "reserveFactor";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDefaultRateModel";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract DefaultInterestRateStrategy";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "positionBorrowIndex";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "asset";
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
        readonly name: "positionBorrowIndexLastUpdate";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "positionScaledATokens";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ICreditDelegatorStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICreditDelegatorStorage;
}
