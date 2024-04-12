import { type ContractRunner } from "ethers";
import type { ComptrollerInterface, ComptrollerInterfaceInterface } from "../../IonicComptroller.sol/ComptrollerInterface";
export declare class ComptrollerInterface__factory {
    static readonly abi: readonly [{
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
    }];
    static createInterface(): ComptrollerInterfaceInterface;
    static connect(address: string, runner?: ContractRunner | null): ComptrollerInterface;
}
