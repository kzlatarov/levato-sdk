"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IStableDebtToken__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "UNDERLYING_ASSET_ADDRESS",
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
        name: "burn",
        inputs: [
            {
                name: "from",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
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
        name: "getAverageStableRate",
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
        name: "getSupplyData",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "uint40",
                internalType: "uint40",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getTotalSupplyAndAvgRate",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
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
        name: "getTotalSupplyLastUpdated",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint40",
                internalType: "uint40",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getUserLastUpdated",
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
                type: "uint40",
                internalType: "uint40",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getUserStableRate",
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
        type: "function",
        name: "mint",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "onBehalfOf",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "rate",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
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
        name: "principalBalanceOf",
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
        type: "event",
        name: "Burn",
        inputs: [
            {
                name: "from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "currentBalance",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "balanceIncrease",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "avgStableRate",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "newTotalSupply",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
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
    {
        type: "event",
        name: "Mint",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "onBehalfOf",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "currentBalance",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "balanceIncrease",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "newRate",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "avgStableRate",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "newTotalSupply",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
];
class IStableDebtToken__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IStableDebtToken__factory = IStableDebtToken__factory;