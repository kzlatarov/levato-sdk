/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "function",
        name: "receiveFlashLoan",
        inputs: [
            {
                name: "borrowedAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "borrowedAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "premium",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
];
export class IFlashLoanReceiver__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
IFlashLoanReceiver__factory.abi = _abi;
