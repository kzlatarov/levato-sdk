import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ComptrollerExtensionInterface, ComptrollerExtensionInterfaceInterface } from "../../IonicComptroller.sol/ComptrollerExtensionInterface";
export declare class ComptrollerExtensionInterface__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_blacklistBorrowingAgainstCollateral";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrow";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "blacklisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_blacklistBorrowingAgainstCollateralWhitelist";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrow";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_borrowCapWhitelist";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_removeFlywheel";
        readonly inputs: readonly [{
            readonly name: "flywheelAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setBorrowCapForCollateral";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrow";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrowCap";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setBorrowCapForCollateralWhitelist";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrow";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setBorrowCapGuardian";
        readonly inputs: readonly [{
            readonly name: "newBorrowCapGuardian";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setBorrowPaused";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "state";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setMarketBorrowCaps";
        readonly inputs: readonly [{
            readonly name: "cTokens";
            readonly type: "address[]";
            readonly internalType: "contract IonicCErc20[]";
        }, {
            readonly name: "newBorrowCaps";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setMarketSupplyCaps";
        readonly inputs: readonly [{
            readonly name: "cTokens";
            readonly type: "address[]";
            readonly internalType: "contract IonicCErc20[]";
        }, {
            readonly name: "newSupplyCaps";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setMintPaused";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "state";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setPauseGuardian";
        readonly inputs: readonly [{
            readonly name: "newPauseGuardian";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setSeizePaused";
        readonly inputs: readonly [{
            readonly name: "state";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setTransferPaused";
        readonly inputs: readonly [{
            readonly name: "state";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_supplyCapWhitelist";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_unsupportMarket";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addNonAccruingFlywheel";
        readonly inputs: readonly [{
            readonly name: "flywheelAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getAccruingFlywheels";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAllBorrowers";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAllMarkets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "contract IonicCErc20[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAssetAsCollateralValueCap";
        readonly inputs: readonly [{
            readonly name: "collateral";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "cTokenModify";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "redeeming";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "account";
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
        readonly name: "getRewardsDistributors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWhitelist";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWhitelistedBorrowersBorrows";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "borrowed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWhitelistedSuppliersSupply";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "supplied";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isBlacklistBorrowingAgainstCollateralWhitelisted";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrow";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account";
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
        readonly name: "isBorrowCapForCollateralWhitelisted";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrow";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account";
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
        readonly name: "isBorrowCapWhitelisted";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account";
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
        readonly name: "isSupplyCapWhitelisted";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ComptrollerExtensionInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ComptrollerExtensionInterface;
}
