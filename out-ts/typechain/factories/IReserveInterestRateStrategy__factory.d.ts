import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IReserveInterestRateStrategy, IReserveInterestRateStrategyInterface } from "../IReserveInterestRateStrategy";
export declare class IReserveInterestRateStrategy__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "calculateInterestRates";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct DataTypes.CalculateInterestRatesParams";
            readonly components: readonly [{
                readonly name: "unbacked";
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
                readonly name: "reserve";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "aToken";
                readonly type: "address";
                readonly internalType: "address";
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
    }];
    static createInterface(): IReserveInterestRateStrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IReserveInterestRateStrategy;
}
