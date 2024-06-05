/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "function",
        name: "creditDelegator",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ICreditDelegator",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "flashloanRouter",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IFlashloanRouter",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "fundersRegistry",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IFundersRegistry",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "minBorrowNative",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "oracle",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract MasterPriceOracle",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "vaultOfPosition",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
];
export class ILeveragedPositionsFactoryStorage__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
ILeveragedPositionsFactoryStorage__factory.abi = _abi;
