import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICreditDelegatorExtensionBase, ICreditDelegatorExtensionBaseInterface } from "../../ICreditDelegator.sol/ICreditDelegatorExtensionBase";
export declare class ICreditDelegatorExtensionBase__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "borrowAsPosition";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrowAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "callLiquidation";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "callPartialLiquidation";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }, {
            readonly name: "debtToRepay";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "changeBorrowAllowance";
        readonly inputs: readonly [{
            readonly name: "fromAllowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "toAllowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "fairAllowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositLevatoFunds";
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
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getAccruedToTreasury";
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
        readonly name: "getAssetPoolLtv";
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
        readonly name: "getBorrowingPowerUtilization";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDelegatedPositions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLevatoCurrentBorrowRate";
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
        readonly name: "getLiquidationThreshold";
        readonly inputs: readonly [{
            readonly name: "collateralAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "delegatedDebtValue";
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
        readonly name: "getPositionDebt";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly outputs: readonly [{
            readonly name: "internalDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "externalDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowedAsset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPositionLiquidationThreshold";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getTotalAvailableBorrows";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "availableBorrowsETH";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getUserBorrowAllowance";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
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
        readonly name: "initializeReserve";
        readonly inputs: readonly [{
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_lpToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isDelegatedPosition";
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
        readonly name: "isPoolSupportedAsset";
        readonly inputs: readonly [{
            readonly name: "asset";
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
        readonly name: "isPositionLiquidateable";
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
        readonly name: "registerDelegatedPosition";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly internalType: "contract LeveragedPosition";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayAsPosition";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "repayAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "BorrowAsPosition";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "borrowAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "scaledATokensMinted";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Liquidation";
        readonly inputs: readonly [{
            readonly name: "liquidator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "position";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract LeveragedPosition";
        }, {
            readonly name: "debtToRepay";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "actualSeizedStableAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "collateralSeized";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RepayAsPosition";
        readonly inputs: readonly [{
            readonly name: "position";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "borrowAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "scaledATokensBurnt";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ICreditDelegatorExtensionBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICreditDelegatorExtensionBase;
}
