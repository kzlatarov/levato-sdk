"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRouter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "addLiquidity",
        inputs: [
            {
                name: "tokenA",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenB",
                type: "address",
                internalType: "address",
            },
            {
                name: "stable",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "amountADesired",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountBDesired",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountAMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountBMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amountA",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountB",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "liquidity",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getAmountsOut",
        inputs: [
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "routes",
                type: "tuple[]",
                internalType: "struct IRouter.Route[]",
                components: [
                    {
                        name: "from",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "to",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "stable",
                        type: "bool",
                        internalType: "bool",
                    },
                ],
            },
        ],
        outputs: [
            {
                name: "amounts",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getReserves",
        inputs: [
            {
                name: "tokenA",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenB",
                type: "address",
                internalType: "address",
            },
            {
                name: "stable",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [
            {
                name: "reserveA",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "reserveB",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isPair",
        inputs: [
            {
                name: "pair",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "pairFor",
        inputs: [
            {
                name: "tokenA",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenB",
                type: "address",
                internalType: "address",
            },
            {
                name: "stable",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [
            {
                name: "pair",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "quoteAddLiquidity",
        inputs: [
            {
                name: "tokenA",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenB",
                type: "address",
                internalType: "address",
            },
            {
                name: "stable",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "amountADesired",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountBDesired",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amountA",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountB",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "liquidity",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "removeLiquidity",
        inputs: [
            {
                name: "tokenA",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenB",
                type: "address",
                internalType: "address",
            },
            {
                name: "stable",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "liquidity",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountAMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountBMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amountA",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountB",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapExactTokensForTokens",
        inputs: [
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "routes",
                type: "tuple[]",
                internalType: "struct IRouter.Route[]",
                components: [
                    {
                        name: "from",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "to",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "stable",
                        type: "bool",
                        internalType: "bool",
                    },
                ],
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amounts",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapExactTokensForTokensSimple",
        inputs: [
            {
                name: "amountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "amountOutMin",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "tokenFrom",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenTo",
                type: "address",
                internalType: "address",
            },
            {
                name: "stable",
                type: "bool",
                internalType: "bool",
            },
            {
                name: "to",
                type: "address",
                internalType: "address",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "amounts",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "nonpayable",
    },
];
class IRouter__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IRouter__factory = IRouter__factory;