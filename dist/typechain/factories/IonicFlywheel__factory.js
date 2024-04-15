"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IonicFlywheel__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "accrue",
        inputs: [
            {
                name: "strategy",
                type: "address",
                internalType: "contract ERC20",
            },
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "addMarketForRewards",
        inputs: [
            {
                name: "strategy",
                type: "address",
                internalType: "contract ERC20",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "claimRewards",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "compAccrued",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
        ],
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
        name: "flywheelPreBorrowerAction",
        inputs: [
            {
                name: "market",
                type: "address",
                internalType: "address",
            },
            {
                name: "borrower",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "flywheelPreSupplierAction",
        inputs: [
            {
                name: "market",
                type: "address",
                internalType: "address",
            },
            {
                name: "supplier",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "flywheelPreTransferAction",
        inputs: [
            {
                name: "market",
                type: "address",
                internalType: "address",
            },
            {
                name: "src",
                type: "address",
                internalType: "address",
            },
            {
                name: "dst",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "isFlywheel",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "isRewardsDistributor",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "marketState",
        inputs: [
            {
                name: "strategy",
                type: "address",
                internalType: "contract ERC20",
            },
        ],
        outputs: [
            {
                name: "index",
                type: "uint224",
                internalType: "uint224",
            },
            {
                name: "lastUpdatedTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "rewardToken",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ERC20",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "rewardsAccrued",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
];
class IonicFlywheel__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IonicFlywheel__factory = IonicFlywheel__factory;
