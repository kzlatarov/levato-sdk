import { type ContractRunner } from "ethers";
import type { ComptrollerExtensionInterface, ComptrollerExtensionInterfaceInterface } from "../../IonicComptroller.sol/ComptrollerExtensionInterface";
export declare class ComptrollerExtensionInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cTokenBorrow";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "blacklisted";
            readonly type: "bool";
        }];
        readonly name: "_blacklistBorrowingAgainstCollateral";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cTokenBorrow";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "whitelisted";
            readonly type: "bool";
        }];
        readonly name: "_blacklistBorrowingAgainstCollateralWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "whitelisted";
            readonly type: "bool";
        }];
        readonly name: "_borrowCapWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flywheelAddress";
            readonly type: "address";
        }];
        readonly name: "_removeFlywheel";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cTokenBorrow";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrowCap";
            readonly type: "uint256";
        }];
        readonly name: "_setBorrowCapForCollateral";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cTokenBorrow";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "whitelisted";
            readonly type: "bool";
        }];
        readonly name: "_setBorrowCapForCollateralWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newBorrowCapGuardian";
            readonly type: "address";
        }];
        readonly name: "_setBorrowCapGuardian";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "state";
            readonly type: "bool";
        }];
        readonly name: "_setBorrowPaused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20[]";
            readonly name: "cTokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "newBorrowCaps";
            readonly type: "uint256[]";
        }];
        readonly name: "_setMarketBorrowCaps";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20[]";
            readonly name: "cTokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "newSupplyCaps";
            readonly type: "uint256[]";
        }];
        readonly name: "_setMarketSupplyCaps";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "state";
            readonly type: "bool";
        }];
        readonly name: "_setMintPaused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newPauseGuardian";
            readonly type: "address";
        }];
        readonly name: "_setPauseGuardian";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "state";
            readonly type: "bool";
        }];
        readonly name: "_setSeizePaused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "state";
            readonly type: "bool";
        }];
        readonly name: "_setTransferPaused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "whitelisted";
            readonly type: "bool";
        }];
        readonly name: "_supplyCapWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "_unsupportMarket";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "flywheelAddress";
            readonly type: "address";
        }];
        readonly name: "addNonAccruingFlywheel";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAccruingFlywheels";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllBorrowers";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllMarkets";
        readonly outputs: readonly [{
            readonly internalType: "contract IonicCErc20[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "collateral";
            readonly type: "address";
        }, {
            readonly internalType: "contract IonicCErc20";
            readonly name: "cTokenModify";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "redeeming";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAssetAsCollateralValueCap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRewardsDistributors";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getWhitelist";
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
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "getWhitelistedBorrowersBorrows";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "borrowed";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "getWhitelistedSuppliersSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "supplied";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cTokenBorrow";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isBlacklistBorrowingAgainstCollateralWhitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cTokenBorrow";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isBorrowCapForCollateralWhitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isBorrowCapWhitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isSupplyCapWhitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ComptrollerExtensionInterfaceInterface;
    static connect(address: string, runner?: ContractRunner | null): ComptrollerExtensionInterface;
}
