/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "function",
        name: "initialize",
        inputs: [
            {
                name: "pool",
                type: "address",
                internalType: "contract IPool",
            },
            {
                name: "underlyingAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "incentivesController",
                type: "address",
                internalType: "contract IAaveIncentivesController",
            },
            {
                name: "debtTokenDecimals",
                type: "uint8",
                internalType: "uint8",
            },
            {
                name: "debtTokenName",
                type: "string",
                internalType: "string",
            },
            {
                name: "debtTokenSymbol",
                type: "string",
                internalType: "string",
            },
            {
                name: "params",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Initialized",
        inputs: [
            {
                name: "underlyingAsset",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "pool",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "incentivesController",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "debtTokenDecimals",
                type: "uint8",
                indexed: false,
                internalType: "uint8",
            },
            {
                name: "debtTokenName",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "debtTokenSymbol",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "params",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
];
export class IInitializableDebtToken__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
IInitializableDebtToken__factory.abi = _abi;
