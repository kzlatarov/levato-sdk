import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILeveragedPositionsFactory, ILeveragedPositionsFactoryInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactory";
export declare class ILeveragedPositionsFactory__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_listExtensions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_registerExtension";
        readonly inputs: readonly [{
            readonly name: "extensionToAdd";
            readonly type: "address";
            readonly internalType: "contract DiamondExtension";
        }, {
            readonly name: "extensionToReplace";
            readonly type: "address";
            readonly internalType: "contract DiamondExtension";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_replaceExtensions";
        readonly inputs: readonly [{
            readonly name: "extensions";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setIonicPairWhitelisted";
        readonly inputs: readonly [{
            readonly name: "_collateralMarket";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "_stableMarket";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "_whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setPairWhitelisted";
        readonly inputs: readonly [{
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_whitelisted";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "closeAndRemoveUserPosition";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createAavePosition";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createAndFundDelegatedPosition";
        readonly inputs: readonly [{
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_fundingAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "_fundingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createAndFundDelegatedPositionAtRatio";
        readonly inputs: readonly [{
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_fundingAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "_fundingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_leverageRatio";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createAndFundIonicPosition";
        readonly inputs: readonly [{
            readonly name: "_collateralMarket";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "_stableMarket";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "_fundingAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "_fundingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createAndFundIonicPositionAtRatio";
        readonly inputs: readonly [{
            readonly name: "_collateralMarket";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "_stableMarket";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "_fundingAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "_fundingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_leverageRatio";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createAndFundPosition";
        readonly inputs: readonly [{
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_fundingAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "_fundingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createAndFundPositionAtRatio";
        readonly inputs: readonly [{
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_fundingAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "_fundingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_leverageRatio";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createDelegatedPosition";
        readonly inputs: readonly [{
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createIonicPosition";
        readonly inputs: readonly [{
            readonly name: "_collateralMarket";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }, {
            readonly name: "_stableMarket";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createPosition";
        readonly inputs: readonly [{
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "creditDelegator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ICreditDelegator";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deregisterVault";
        readonly inputs: readonly [{
            readonly name: "vault";
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
        readonly name: "flashloanRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IFlashloanRouter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "fundPosition";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }, {
            readonly name: "fundingAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "fundersRegistry";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IFundersRegistry";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAaveMaxLeverageRatio";
        readonly inputs: readonly [{
            readonly name: "collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "collateralAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowedAsset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxLeverageRatio";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAccountsWithOpenPositions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAssetBorrowRate";
        readonly inputs: readonly [{
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
        readonly name: "getAssetPrice";
        readonly inputs: readonly [{
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
        readonly name: "getBorrowableMarketsByCollateral";
        readonly inputs: readonly [{
            readonly name: "_collateralMarket";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLeverageRatioAfterBorrow";
        readonly inputs: readonly [{
            readonly name: "collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrowedAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newBorrowsAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "positionSupplyAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "positionBorrowAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "r";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLeverageRatioAfterRepay";
        readonly inputs: readonly [{
            readonly name: "collateralAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "borrowedAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "repaidBorrowsAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "positionSupplyAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "positionBorrowAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "r";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLiquidationThreshold";
        readonly inputs: readonly [{
            readonly name: "collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "collateralAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowedAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "leverageRatio";
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
        readonly name: "getMinBorrowNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPositionsByAccount";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPositionsExtension";
        readonly inputs: readonly [{
            readonly name: "msgSig";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPositionsTotalCollateralValue";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getRegisteredVaults";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWhitelistedCollateralMarkets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_delegator";
            readonly type: "address";
            readonly internalType: "contract ICreditDelegator";
        }, {
            readonly name: "_oracle";
            readonly type: "address";
            readonly internalType: "contract MasterPriceOracle";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isFactoryPosition";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isVaultRegistered";
        readonly inputs: readonly [{
            readonly name: "vault";
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
        readonly name: "minBorrowNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "oracle";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract MasterPriceOracle";
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
        readonly name: "registerVault";
        readonly inputs: readonly [{
            readonly name: "vault";
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
        readonly name: "reinitialize";
        readonly inputs: readonly [{
            readonly name: "_oracle";
            readonly type: "address";
            readonly internalType: "contract MasterPriceOracle";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeClosedPosition";
        readonly inputs: readonly [{
            readonly name: "closedPosition";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "removed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "outputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "vaultOfPosition";
        readonly inputs: readonly [{
            readonly name: "position";
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
        readonly type: "event";
        readonly name: "PositionCreated";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "position";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract LeveragedPosition";
        }, {
            readonly name: "collateral";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "lendingProtocol";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ILeveragedPositionsFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILeveragedPositionsFactory;
}
