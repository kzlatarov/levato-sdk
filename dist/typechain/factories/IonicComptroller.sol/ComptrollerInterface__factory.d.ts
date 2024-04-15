import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ComptrollerInterface, ComptrollerInterfaceInterface } from "../../IonicComptroller.sol/ComptrollerInterface";
export declare class ComptrollerInterface__factory {
    static readonly abi: readonly [{
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
    }];
    static createInterface(): ComptrollerInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ComptrollerInterface;
}
