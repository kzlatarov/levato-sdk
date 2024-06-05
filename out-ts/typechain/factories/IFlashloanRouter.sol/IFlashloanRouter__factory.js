"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFlashloanRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "_listExtensions",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_registerExtension",
        inputs: [
            {
                name: "extensionToAdd",
                type: "address",
                internalType: "contract DiamondExtension",
            },
            {
                name: "extensionToReplace",
                type: "address",
                internalType: "contract DiamondExtension",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "_replaceExtensions",
        inputs: [
            {
                name: "extensions",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "_setIonicMarketOfAsset",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "market",
                type: "address",
                internalType: "contract IonicCErc20",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "flashloan",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "amount",
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
    {
        type: "function",
        name: "ionicMarketOfAsset",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IonicCErc20",
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
class IFlashloanRouter__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IFlashloanRouter__factory = IFlashloanRouter__factory;