import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { InterestRateModel, InterestRateModelInterface } from "../InterestRateModel";
export declare class InterestRateModel__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getBorrowRate";
        readonly inputs: readonly [{
            readonly name: "cash";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrows";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserves";
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
        readonly name: "getSupplyRate";
        readonly inputs: readonly [{
            readonly name: "cash";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrows";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserves";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveFactorMantissa";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): InterestRateModelInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InterestRateModel;
}
