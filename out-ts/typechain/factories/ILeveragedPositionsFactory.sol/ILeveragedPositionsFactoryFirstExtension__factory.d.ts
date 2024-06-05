import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILeveragedPositionsFactoryFirstExtension, ILeveragedPositionsFactoryFirstExtensionInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactoryFirstExtension";
export declare class ILeveragedPositionsFactoryFirstExtension__factory {
    static readonly abi: readonly [{
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
        readonly name: "createAndFundIonicPosition";
        readonly inputs: readonly [{
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
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
        readonly name: "createAndFundIonicPositionAtRatio";
        readonly inputs: readonly [{
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
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
        readonly name: "createIonicPosition";
        readonly inputs: readonly [{
            readonly name: "posOwner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "_stableAsset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
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
        readonly name: "reinitialize";
        readonly inputs: readonly [{
            readonly name: "_oracle";
            readonly type: "address";
            readonly internalType: "contract MasterPriceOracle";
        }];
        readonly outputs: readonly [];
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
    static createInterface(): ILeveragedPositionsFactoryFirstExtensionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILeveragedPositionsFactoryFirstExtension;
}
