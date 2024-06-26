"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlywheelDynamicRewards__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "flywheel",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract FlywheelCore",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getAccruedRewards",
        inputs: [
            {
                name: "strategy",
                type: "address",
                internalType: "contract ERC20",
            },
            {
                name: "lastUpdatedTimestamp",
                type: "uint32",
                internalType: "uint32",
            },
        ],
        outputs: [
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
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
        name: "rewardsCycle",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ERC20",
            },
        ],
        outputs: [
            {
                name: "start",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "end",
                type: "uint32",
                internalType: "uint32",
            },
            {
                name: "reward",
                type: "uint192",
                internalType: "uint192",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "rewardsCycleLength",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint32",
                internalType: "uint32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "event",
        name: "NewRewardsCycle",
        inputs: [
            {
                name: "start",
                type: "uint32",
                indexed: true,
                internalType: "uint32",
            },
            {
                name: "end",
                type: "uint32",
                indexed: true,
                internalType: "uint32",
            },
            {
                name: "reward",
                type: "uint192",
                indexed: false,
                internalType: "uint192",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "FlywheelError",
        inputs: [],
    },
];
class FlywheelDynamicRewards__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FlywheelDynamicRewards__factory = FlywheelDynamicRewards__factory;
