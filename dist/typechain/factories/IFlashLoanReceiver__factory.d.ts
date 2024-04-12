import { type ContractRunner } from "ethers";
import type { IFlashLoanReceiver, IFlashLoanReceiverInterface } from "../IFlashLoanReceiver";
export declare class IFlashLoanReceiver__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "borrowedAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrowedAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "premium";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "receiveFlashLoan";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFlashLoanReceiverInterface;
    static connect(address: string, runner?: ContractRunner | null): IFlashLoanReceiver;
}
