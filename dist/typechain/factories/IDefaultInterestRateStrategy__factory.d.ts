import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDefaultInterestRateStrategy, IDefaultInterestRateStrategyInterface } from "../IDefaultInterestRateStrategy";
export declare class IDefaultInterestRateStrategy__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MAX_EXCESS_USAGE_RATIO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "OPTIMAL_USAGE_RATIO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "calculateInterestRates";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct CalculateInterestRatesParams";
            readonly components: readonly [{
                readonly name: "availableLiqudity";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liquidityAdded";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liquidityTaken";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "totalStableDebt";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "totalVariableDebt";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "averageStableBorrowRate";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "reserveFactor";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "reserveLiquidity";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
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
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBaseStableBorrowRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBaseVariableBorrowRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getMaxVariableBorrowRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getStableRateExcessOffset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getStableRateSlope1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getStableRateSlope2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getVariableRateSlope1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getVariableRateSlope2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IDefaultInterestRateStrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDefaultInterestRateStrategy;
}
