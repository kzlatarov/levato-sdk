"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAuthRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "role",
                type: "uint8",
            },
            {
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "setUserRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IAuthRegistry__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IAuthRegistry__factory = IAuthRegistry__factory;