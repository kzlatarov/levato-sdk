import { type ContractRunner } from "ethers";
import type { ILeveragedPositionsFactoryThirdExtension, ILeveragedPositionsFactoryThirdExtensionInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactoryThirdExtension";
export declare class ILeveragedPositionsFactoryThirdExtension__factory {
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
        readonly name: "getRegisteredVaults";
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
    }];
    static createInterface(): ILeveragedPositionsFactoryThirdExtensionInterface;
    static connect(address: string, runner?: ContractRunner | null): ILeveragedPositionsFactoryThirdExtension;
}
