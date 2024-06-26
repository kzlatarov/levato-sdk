"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILeveragedPositionsFactorySecondExtension__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "closeAndRemoveUserPosition",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "contract LeveragedPosition",
            },
        ],
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
        name: "createAavePosition",
        inputs: [
            {
                name: "user",
                type: "address",
                internalType: "address",
            },
            {
                name: "_collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_stableAsset",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract LeveragedPosition",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "fundPosition",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "contract LeveragedPosition",
            },
            {
                name: "fundingAsset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getAccountsWithOpenPositions",
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
        name: "getBorrowableMarketsByCollateral",
        inputs: [
            {
                name: "_collateralMarket",
                type: "address",
                internalType: "contract IonicCErc20",
            },
        ],
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
        name: "getMinBorrowNative",
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
        name: "getPositionsExtension",
        inputs: [
            {
                name: "msgSig",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
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
        name: "getWhitelistedCollateralMarkets",
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
        name: "removeClosedPosition",
        inputs: [
            {
                name: "closedPosition",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "removed",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "swap",
        inputs: [
            {
                name: "inputToken",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "inputAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "outputToken",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
        ],
        outputs: [
            {
                name: "outputAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "PositionCreated",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "position",
                type: "address",
                indexed: false,
                internalType: "contract LeveragedPosition",
            },
            {
                name: "collateral",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "stable",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "lendingProtocol",
                type: "uint16",
                indexed: false,
                internalType: "uint16",
            },
        ],
        anonymous: false,
    },
];
class ILeveragedPositionsFactorySecondExtension__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ILeveragedPositionsFactorySecondExtension__factory = ILeveragedPositionsFactorySecondExtension__factory;
