import { type ContractRunner } from "ethers";
import type { ILeveragedPositionsFactoryFirstExtension, ILeveragedPositionsFactoryFirstExtensionInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactoryFirstExtension";
export declare class ILeveragedPositionsFactoryFirstExtension__factory {
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
            readonly internalType: "contract MasterPriceOracle";
            readonly name: "_oracle";
            readonly type: "address";
        }];
        readonly name: "reinitialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ILeveragedPositionsFactoryFirstExtensionInterface;
    static connect(address: string, runner?: ContractRunner | null): ILeveragedPositionsFactoryFirstExtension;
}
