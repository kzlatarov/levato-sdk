import { type ContractRunner } from "ethers";
import type { ILeveragedPositionsFactory, ILeveragedPositionsFactoryInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactory";
export declare class ILeveragedPositionsFactory__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "contract LeveragedPosition";
            readonly name: "position";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "collateral";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "stable";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "lendingProtocol";
            readonly type: "uint16";
        }];
        readonly name: "PositionCreated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "_listExtensions";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract DiamondExtension";
            readonly name: "extensionToAdd";
            readonly type: "address";
        }, {
            readonly internalType: "contract DiamondExtension";
            readonly name: "extensionToReplace";
            readonly type: "address";
        }];
        readonly name: "_registerExtension";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "extensions";
            readonly type: "address[]";
        }];
        readonly name: "_replaceExtensions";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "_collateralMarket";
            readonly type: "address";
        }, {
            readonly internalType: "contract IonicCErc20";
            readonly name: "_stableMarket";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "_whitelisted";
            readonly type: "bool";
        }];
        readonly name: "_setIonicPairWhitelisted";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stableAsset";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "_whitelisted";
            readonly type: "bool";
        }];
        readonly name: "_setPairWhitelisted";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "position";
            readonly type: "address";
        }];
        readonly name: "closeAndRemoveUserPosition";
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
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stableAsset";
            readonly type: "address";
        }];
        readonly name: "createAavePosition";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_collateralVault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stableAsset";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "_fundingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fundingAmount";
            readonly type: "uint256";
        }];
        readonly name: "createAndFundDelegatedPosition";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_collateralVault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stableAsset";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "_fundingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fundingAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_leverageRatio";
            readonly type: "uint256";
        }];
        readonly name: "createAndFundDelegatedPositionAtRatio";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "_collateralMarket";
            readonly type: "address";
        }, {
            readonly internalType: "contract IonicCErc20";
            readonly name: "_stableMarket";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "_fundingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fundingAmount";
            readonly type: "uint256";
        }];
        readonly name: "createAndFundIonicPosition";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "_collateralMarket";
            readonly type: "address";
        }, {
            readonly internalType: "contract IonicCErc20";
            readonly name: "_stableMarket";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "_fundingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fundingAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_leverageRatio";
            readonly type: "uint256";
        }];
        readonly name: "createAndFundIonicPositionAtRatio";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_collateralVault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stableAsset";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "_fundingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fundingAmount";
            readonly type: "uint256";
        }];
        readonly name: "createAndFundPosition";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_collateralVault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stableAsset";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "_fundingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fundingAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_leverageRatio";
            readonly type: "uint256";
        }];
        readonly name: "createAndFundPositionAtRatio";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_collateralVault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stableAsset";
            readonly type: "address";
        }];
        readonly name: "createDelegatedPosition";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "_collateralMarket";
            readonly type: "address";
        }, {
            readonly internalType: "contract IonicCErc20";
            readonly name: "_stableMarket";
            readonly type: "address";
        }];
        readonly name: "createIonicPosition";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_collateralVault";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stableAsset";
            readonly type: "address";
        }];
        readonly name: "createPosition";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "creditDelegator";
        readonly outputs: readonly [{
            readonly internalType: "contract ICreditDelegator";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "vault";
            readonly type: "address";
        }];
        readonly name: "deregisterVault";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "flashloanRouter";
        readonly outputs: readonly [{
            readonly internalType: "contract IFlashloanRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "position";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "fundingAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "fundPosition";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "fundersRegistry";
        readonly outputs: readonly [{
            readonly internalType: "contract IFundersRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "collateralAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "borrowedAsset";
            readonly type: "address";
        }];
        readonly name: "getAaveMaxLeverageRatio";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxLeverageRatio";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAccountsWithOpenPositions";
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
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getAssetBorrowRate";
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
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getAssetPrice";
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
            readonly name: "_collateralMarket";
            readonly type: "address";
        }];
        readonly name: "getBorrowableMarketsByCollateral";
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
            readonly name: "collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "borrowedAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "newBorrowsAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionSupplyAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionBorrowAmount";
            readonly type: "uint256";
        }];
        readonly name: "getLeverageRatioAfterBorrow";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "r";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "borrowedAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "repaidBorrowsAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionSupplyAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "positionBorrowAmount";
            readonly type: "uint256";
        }];
        readonly name: "getLeverageRatioAfterRepay";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "r";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "collateralAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "collateralAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "borrowedAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "leverageRatio";
            readonly type: "uint256";
        }];
        readonly name: "getLiquidationThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMinBorrowNative";
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
        readonly name: "getPositionsByAccount";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }, {
            readonly internalType: "bool[]";
            readonly name: "";
            readonly type: "bool[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "msgSig";
            readonly type: "bytes4";
        }];
        readonly name: "getPositionsExtension";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getPositionsTotalCollateralValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRegisteredVaults";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getWhitelistedCollateralMarkets";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ICreditDelegator";
            readonly name: "_delegator";
            readonly type: "address";
        }, {
            readonly internalType: "contract MasterPriceOracle";
            readonly name: "_oracle";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract LeveragedPosition";
            readonly name: "position";
            readonly type: "address";
        }];
        readonly name: "isFactoryPosition";
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
            readonly name: "vault";
            readonly type: "address";
        }];
        readonly name: "isVaultRegistered";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minBorrowNative";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oracle";
        readonly outputs: readonly [{
            readonly internalType: "contract MasterPriceOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
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
            readonly name: "vault";
            readonly type: "address";
        }];
        readonly name: "registerVault";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract MasterPriceOracle";
            readonly name: "_oracle";
            readonly type: "address";
        }];
        readonly name: "reinitialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "closedPosition";
            readonly type: "address";
        }];
        readonly name: "removeClosedPosition";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "removed";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "inputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }];
        readonly name: "swap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "outputAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "position";
            readonly type: "address";
        }];
        readonly name: "vaultOfPosition";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ILeveragedPositionsFactoryInterface;
    static connect(address: string, runner?: ContractRunner | null): ILeveragedPositionsFactory;
}
