import { type ContractRunner } from "ethers";
import type { IonicComptroller, IonicComptrollerInterface } from "../../IonicComptroller.sol/IonicComptroller";
export declare class IonicComptroller__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "_acceptAdmin";
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
            readonly name: "distributor";
            readonly type: "address";
        }];
        readonly name: "_addRewardsDistributor";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_afterNonReentrant";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_becomeImplementation";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_beforeNonReentrant";
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
            readonly internalType: "uint8";
            readonly name: "delegateType";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "constructorData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "becomeImplData";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "collateralFactorMantissa";
            readonly type: "uint256";
        }];
        readonly name: "_deployMarket";
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
            readonly internalType: "uint256";
            readonly name: "newCloseFactorMantissa";
            readonly type: "uint256";
        }];
        readonly name: "_setCloseFactor";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "market";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "newCollateralFactorMantissa";
            readonly type: "uint256";
        }];
        readonly name: "_setCollateralFactor";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newLiquidationIncentiveMantissa";
            readonly type: "uint256";
        }];
        readonly name: "_setLiquidationIncentive";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly internalType: "address";
            readonly name: "newPendingAdmin";
            readonly type: "address";
        }];
        readonly name: "_setPendingAdmin";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "newOracle";
            readonly type: "address";
        }];
        readonly name: "_setPriceOracle";
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
            readonly internalType: "bool";
            readonly name: "enforce";
            readonly type: "bool";
        }];
        readonly name: "_setWhitelistEnforcement";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_suppliers";
            readonly type: "address[]";
        }, {
            readonly internalType: "bool[]";
            readonly name: "statuses";
            readonly type: "bool[]";
        }];
        readonly name: "_setWhitelistStatuses";
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
            readonly internalType: "bool";
            readonly name: "hasRights";
            readonly type: "bool";
        }];
        readonly name: "_toggleAdminRights";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
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
        readonly inputs: readonly [];
        readonly name: "_upgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "accountAssets";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "adminHasRights";
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
            readonly name: "borrower";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrowAmount";
            readonly type: "uint256";
        }];
        readonly name: "borrowAllowed";
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
            readonly name: "borrowed";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "collateral";
            readonly type: "address";
        }];
        readonly name: "borrowCapForCollateral";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
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
        readonly name: "borrowCaps";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
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
        readonly name: "borrowGuardianPaused";
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
            readonly internalType: "uint256";
            readonly name: "accountBorrowsNew";
            readonly type: "uint256";
        }];
        readonly name: "borrowWithinLimits";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "borrowed";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "collateral";
            readonly type: "address";
        }];
        readonly name: "borrowingAgainstCollateralBlacklist";
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
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "cTokensByUnderlying";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "contract IonicCErc20";
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "checkMembership";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "closeFactorMantissa";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "comptrollerImplementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "enforceWhitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "cTokens";
            readonly type: "address[]";
        }];
        readonly name: "enterMarkets";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "exitMarket";
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
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAccountLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getAssetsIn";
        readonly outputs: readonly [{
            readonly internalType: "contract IonicCErc20[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenModify";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "redeemTokens";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrowAmount";
            readonly type: "uint256";
        }];
        readonly name: "getHypotheticalAccountLiquidity";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "contract IonicCErc20";
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isBorrow";
            readonly type: "bool";
        }];
        readonly name: "getMaxRedeemOrBorrow";
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
        readonly inputs: readonly [];
        readonly name: "ionicAdmin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ionicAdminHasRights";
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
            readonly internalType: "contract IonicCErc20";
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "isDeprecated";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "isUserOfPool";
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
            readonly name: "cTokenBorrowed";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "liquidator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "borrower";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "repayAmount";
            readonly type: "uint256";
        }];
        readonly name: "liquidateBorrowAllowed";
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
            readonly name: "cTokenBorrowed";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "repayAmount";
            readonly type: "uint256";
        }];
        readonly name: "liquidateCalculateSeizeTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "liquidationIncentiveMantissa";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
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
        readonly name: "markets";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly name: "minter";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "mintAmount";
            readonly type: "uint256";
        }];
        readonly name: "mintAllowed";
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
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "mintGuardianPaused";
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
            readonly name: "minter";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "actualMintAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mintTokens";
            readonly type: "uint256";
        }];
        readonly name: "mintVerify";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oracle";
        readonly outputs: readonly [{
            readonly internalType: "contract BasePriceOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pauseGuardian";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingAdmin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
            readonly name: "redeemer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "redeemTokens";
            readonly type: "uint256";
        }];
        readonly name: "redeemAllowed";
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
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "redeemer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "redeemAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "redeemTokens";
            readonly type: "uint256";
        }];
        readonly name: "redeemVerify";
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
            readonly name: "payer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "borrower";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "repayAmount";
            readonly type: "uint256";
        }];
        readonly name: "repayBorrowAllowed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "rewardsDistributors";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "cTokenCollateral";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "cTokenBorrowed";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "liquidator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "borrower";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "seizeTokens";
            readonly type: "uint256";
        }];
        readonly name: "seizeAllowed";
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
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "suppliers";
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
        }];
        readonly name: "supplyCaps";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "transferTokens";
            readonly type: "uint256";
        }];
        readonly name: "transferAllowed";
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
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "whitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IonicComptrollerInterface;
    static connect(address: string, runner?: ContractRunner | null): IonicComptroller;
}
