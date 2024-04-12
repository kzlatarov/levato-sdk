import { type ContractRunner } from "ethers";
import type { IReserveInterestRateStrategy, IReserveInterestRateStrategyInterface } from "../IReserveInterestRateStrategy";
export declare class IReserveInterestRateStrategy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "unbacked";
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
                readonly internalType: "address";
                readonly name: "reserve";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "aToken";
                readonly type: "address";
            }];
            readonly internalType: "struct DataTypes.CalculateInterestRatesParams";
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
    }];
    static createInterface(): IReserveInterestRateStrategyInterface;
    static connect(address: string, runner?: ContractRunner | null): IReserveInterestRateStrategy;
}
