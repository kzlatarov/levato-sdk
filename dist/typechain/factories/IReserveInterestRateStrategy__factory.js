"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReserveInterestRateStrategy__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "unbacked",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liquidityAdded",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "liquidityTaken",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "totalStableDebt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "totalVariableDebt",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "averageStableBorrowRate",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "reserveFactor",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "reserve",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "aToken",
                        type: "address",
                    },
                ],
                internalType: "struct DataTypes.CalculateInterestRatesParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "calculateInterestRates",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IReserveInterestRateStrategy__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IReserveInterestRateStrategy__factory = IReserveInterestRateStrategy__factory;
