"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAuthRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
        name: "setUserRole",
        inputs: [
            {
                name: "pool",
                type: "address",
                internalType: "address",
            },
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "role",
                type: "uint8",
                internalType: "uint8",
            },
            {
                name: "enabled",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
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
