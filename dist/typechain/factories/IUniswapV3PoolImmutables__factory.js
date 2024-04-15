"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUniswapV3PoolImmutables__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "factory",
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
        name: "fee",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint24",
                internalType: "uint24",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "maxLiquidityPerTick",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint128",
                internalType: "uint128",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "tickSpacing",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "int24",
                internalType: "int24",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "token0",
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
        name: "token1",
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
];
class IUniswapV3PoolImmutables__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IUniswapV3PoolImmutables__factory = IUniswapV3PoolImmutables__factory;
