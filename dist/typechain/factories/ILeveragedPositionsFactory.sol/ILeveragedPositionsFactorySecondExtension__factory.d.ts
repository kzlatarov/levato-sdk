import { type ContractRunner } from "ethers";
import type { ILeveragedPositionsFactorySecondExtension, ILeveragedPositionsFactorySecondExtensionInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactorySecondExtension";
export declare class ILeveragedPositionsFactorySecondExtension__factory {
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
    }];
    static createInterface(): ILeveragedPositionsFactorySecondExtensionInterface;
    static connect(address: string, runner?: ContractRunner | null): ILeveragedPositionsFactorySecondExtension;
}
