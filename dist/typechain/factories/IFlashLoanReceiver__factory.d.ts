import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFlashLoanReceiver, IFlashLoanReceiverInterface } from "../IFlashLoanReceiver";
export declare class IFlashLoanReceiver__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "receiveFlashLoan";
        readonly inputs: readonly [{
            readonly name: "borrowedAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrowedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "premium";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IFlashLoanReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlashLoanReceiver;
}
