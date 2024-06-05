/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "function",
        name: "exitPool",
        inputs: [
            {
                name: "poolAmountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "minAmountsOut",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "exitswapExternAmountOut",
        inputs: [
            {
                name: "tokenOut",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "maxPoolAmountIn",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "poolAmountIn",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getBalance",
        inputs: [
            {
                name: "token",
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
        name: "getFinalTokens",
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
        name: "getNormalizedWeight",
        inputs: [
            {
                name: "token",
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
        name: "getNormalizedWeights",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getNumTokens",
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
        name: "getPoolId",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getSwapFee",
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
        name: "getVault",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IBalancerVault",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "joinPool",
        inputs: [
            {
                name: "poolAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "maxAmountsIn",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "joinswapExternAmountIn",
        inputs: [
            {
                name: "tokenIn",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenAmountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "minPoolAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "poolAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapExactAmountIn",
        inputs: [
            {
                name: "tokenIn",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenAmountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "tokenOut",
                type: "address",
                internalType: "address",
            },
            {
                name: "minAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "maxPrice",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "tokenAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "spotPriceAfter",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swapExactAmountOut",
        inputs: [
            {
                name: "tokenIn",
                type: "address",
                internalType: "address",
            },
            {
                name: "maxAmountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "tokenOut",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenAmountOut",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "maxPrice",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "tokenAmountIn",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "spotPriceAfter",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "totalSupply",
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
];
export class IBalancerPool__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
IBalancerPool__factory.abi = _abi;
