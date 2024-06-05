"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICreditDelegatorStorage__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "borrowAllowance",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "address",
            },
            {
                name: "asset",
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
        name: "borrowBalance",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "asset",
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
        name: "delegatedDebtAssetData",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "tuple",
                internalType: "struct CreditDelegatorStorageBase.DelegatedDebtAssetData",
                components: [
                    {
                        name: "levatoCurrentBorrowRate",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "borrowIndex",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lastTotalDebt",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "lastUpdateTimestamp",
                        type: "uint40",
                        internalType: "uint40",
                    },
                    {
                        name: "lpToken",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "debtToken",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "irm",
                        type: "address",
                        internalType: "contract IDefaultInterestRateStrategy",
                    },
                    {
                        name: "accruedToTreasury",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "reserveFactor",
                        type: "uint128",
                        internalType: "uint128",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getDefaultRateModel",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract DefaultInterestRateStrategy",
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
        name: "positionBorrowIndex",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "address",
            },
            {
                name: "asset",
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
        name: "positionBorrowIndexLastUpdate",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "address",
            },
            {
                name: "asset",
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
        name: "positionScaledATokens",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "address",
            },
            {
                name: "asset",
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
];
class ICreditDelegatorStorage__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICreditDelegatorStorage__factory = ICreditDelegatorStorage__factory;
