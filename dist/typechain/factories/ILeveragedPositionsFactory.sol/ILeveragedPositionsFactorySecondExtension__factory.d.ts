import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILeveragedPositionsFactorySecondExtension, ILeveragedPositionsFactorySecondExtensionInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactorySecondExtension";
export declare class ILeveragedPositionsFactorySecondExtension__factory {
    static readonly abi: readonly [{
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
    static createInterface(): ILeveragedPositionsFactorySecondExtensionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILeveragedPositionsFactorySecondExtension;
}
