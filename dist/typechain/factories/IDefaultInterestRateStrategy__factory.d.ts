import { type ContractRunner } from "ethers";
import type { IDefaultInterestRateStrategy, IDefaultInterestRateStrategyInterface } from "../IDefaultInterestRateStrategy";
export declare class IDefaultInterestRateStrategy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_EXCESS_USAGE_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OPTIMAL_USAGE_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "availableLiqudity";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidityAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidityTaken";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalStableDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalVariableDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "averageStableBorrowRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveFactor";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveLiquidity";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CalculateInterestRatesParams";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "calculateInterestRates";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBaseStableBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBaseVariableBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMaxVariableBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStableRateExcessOffset";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStableRateSlope1";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStableRateSlope2";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVariableRateSlope1";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVariableRateSlope2";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IDefaultInterestRateStrategyInterface;
    static connect(address: string, runner?: ContractRunner | null): IDefaultInterestRateStrategy;
}
