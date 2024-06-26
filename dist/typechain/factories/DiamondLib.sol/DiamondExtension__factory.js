"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiamondExtension__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "_getExtensionFunctions",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes4[]",
                internalType: "bytes4[]",
            },
        ],
        stateMutability: "pure",
    },
];
class DiamondExtension__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DiamondExtension__factory = DiamondExtension__factory;
