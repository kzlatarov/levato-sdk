"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFlashloanRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "_listExtensions",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract DiamondExtension",
                name: "extensionToAdd",
                type: "address",
            },
            {
                internalType: "contract DiamondExtension",
                name: "extensionToReplace",
                type: "address",
            },
        ],
        name: "_registerExtension",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "extensions",
                type: "address[]",
            },
        ],
        name: "_replaceExtensions",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "asset",
                type: "address",
            },
            {
                internalType: "contract IonicCErc20",
                name: "market",
                type: "address",
            },
        ],
        name: "_setIonicMarketOfAsset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "asset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "flashloan",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "asset",
                type: "address",
            },
        ],
        name: "ionicMarketOfAsset",
        outputs: [
            {
                internalType: "contract IonicCErc20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
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
                name: "borrowedAsset",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "borrowedAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "premium",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "receiveFlashLoan",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IFlashloanRouter__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IFlashloanRouter__factory = IFlashloanRouter__factory;
