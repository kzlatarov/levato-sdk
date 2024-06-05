import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IonicComptroller, IonicComptrollerInterface } from "../../IonicComptroller.sol/IonicComptroller";
export declare class IonicComptroller__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_acceptAdmin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_addRewardsDistributor";
        readonly inputs: readonly [{
            readonly name: "distributor";
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
        readonly name: "_afterNonReentrant";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_becomeImplementation";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_beforeNonReentrant";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
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
        readonly name: "_deployMarket";
        readonly inputs: readonly [{
            readonly name: "delegateType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "constructorData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "becomeImplData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "collateralFactorMantissa";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        readonly name: "_setCloseFactor";
        readonly inputs: readonly [{
            readonly name: "newCloseFactorMantissa";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setCollateralFactor";
        readonly inputs: readonly [{
            readonly name: "market";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "newCollateralFactorMantissa";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setLiquidationIncentive";
        readonly inputs: readonly [{
            readonly name: "newLiquidationIncentiveMantissa";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "_setPendingAdmin";
        readonly inputs: readonly [{
            readonly name: "newPendingAdmin";
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
        readonly name: "_setPriceOracle";
        readonly inputs: readonly [{
            readonly name: "newOracle";
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
        readonly name: "_setWhitelistEnforcement";
        readonly inputs: readonly [{
            readonly name: "enforce";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setWhitelistStatuses";
        readonly inputs: readonly [{
            readonly name: "_suppliers";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "statuses";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "_toggleAdminRights";
        readonly inputs: readonly [{
            readonly name: "hasRights";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
        readonly name: "_upgrade";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "accountAssets";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "admin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "adminHasRights";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "borrowAllowed";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrowAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "borrowCapForCollateral";
        readonly inputs: readonly [{
            readonly name: "borrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "collateral";
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
        readonly name: "borrowCaps";
        readonly inputs: readonly [{
            readonly name: "cToken";
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
        readonly name: "borrowGuardianPaused";
        readonly inputs: readonly [{
            readonly name: "cToken";
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
        readonly name: "borrowWithinLimits";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "accountBorrowsNew";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "borrowingAgainstCollateralBlacklist";
        readonly inputs: readonly [{
            readonly name: "borrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "collateral";
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
        readonly name: "cTokensByUnderlying";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "checkMembership";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "closeFactorMantissa";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "comptrollerImplementation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "enforceWhitelist";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "enterMarkets";
        readonly inputs: readonly [{
            readonly name: "cTokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "exitMarket";
        readonly inputs: readonly [{
            readonly name: "cToken";
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
        readonly name: "getAccountLiquidity";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "error";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "collateralValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "shortfall";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly name: "getAssetsIn";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "contract IonicCErc20[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getHypotheticalAccountLiquidity";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenModify";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getMaxRedeemOrBorrow";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "isBorrow";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "ionicAdmin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "ionicAdminHasRights";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "isDeprecated";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
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
    }, {
        readonly type: "function";
        readonly name: "isUserOfPool";
        readonly inputs: readonly [{
            readonly name: "user";
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
        readonly name: "liquidateBorrowAllowed";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "repayAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "liquidateCalculateSeizeTokens";
        readonly inputs: readonly [{
            readonly name: "cTokenBorrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "repayAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "liquidationIncentiveMantissa";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "markets";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mintAllowed";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "mintAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mintGuardianPaused";
        readonly inputs: readonly [{
            readonly name: "cToken";
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
        readonly name: "mintVerify";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "actualMintAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "mintTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "oracle";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract BasePriceOracle";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pauseGuardian";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingAdmin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "redeemAllowed";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "redeemVerify";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "redeemAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "redeemTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayBorrowAllowed";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "payer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "repayAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rewardsDistributors";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "seizeAllowed";
        readonly inputs: readonly [{
            readonly name: "cTokenCollateral";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "cTokenBorrowed";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrower";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "seizeTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "suppliers";
        readonly inputs: readonly [{
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
        readonly name: "supplyCaps";
        readonly inputs: readonly [{
            readonly name: "cToken";
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
        readonly name: "transferAllowed";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "src";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dst";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "transferTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "whitelist";
        readonly inputs: readonly [{
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
    static createInterface(): IonicComptrollerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IonicComptroller;
}
