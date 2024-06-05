import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILeveragedPositionsFactoryThirdExtension, ILeveragedPositionsFactoryThirdExtensionInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactoryThirdExtension";
export declare class ILeveragedPositionsFactoryThirdExtension__factory {
    static readonly abi: readonly [{
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
            readonly name: "_isShort";
            readonly type: "bool";
            readonly internalType: "bool";
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
            readonly name: "_isShort";
            readonly type: "bool";
            readonly internalType: "bool";
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
            readonly name: "_isShort";
            readonly type: "bool";
            readonly internalType: "bool";
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
            readonly name: "_isShort";
            readonly type: "bool";
            readonly internalType: "bool";
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
        }, {
            readonly name: "_isShort";
            readonly type: "bool";
            readonly internalType: "bool";
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
        }, {
            readonly name: "_isShort";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly stateMutability: "nonpayable";
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
        readonly name: "getBorrowedPriceOnPositionCreated";
        readonly inputs: readonly [{
            readonly name: "positionAddress";
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
        readonly name: "getCollateralPriceOnPositionCreated";
        readonly inputs: readonly [{
            readonly name: "positionAddress";
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
        readonly name: "getNondelegatedMaxLeverageRatio";
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
    static createInterface(): ILeveragedPositionsFactoryThirdExtensionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILeveragedPositionsFactoryThirdExtension;
}
