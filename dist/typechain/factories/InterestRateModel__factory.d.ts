import { type ContractRunner } from "ethers";
import type { InterestRateModel, InterestRateModelInterface } from "../InterestRateModel";
export declare class InterestRateModel__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "cash";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrows";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "reserves";
            readonly type: "uint256";
        }];
        readonly name: "getBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "cash";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrows";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "reserves";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "reserveFactorMantissa";
            readonly type: "uint256";
        }];
        readonly name: "getSupplyRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): InterestRateModelInterface;
    static connect(address: string, runner?: ContractRunner | null): InterestRateModel;
}
