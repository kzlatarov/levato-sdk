"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComptrollerExtensionInterface__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "cTokenBorrow",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "bool",
                name: "blacklisted",
                type: "bool",
            },
        ],
        name: "_blacklistBorrowingAgainstCollateral",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cTokenBorrow",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bool",
                name: "whitelisted",
                type: "bool",
            },
        ],
        name: "_blacklistBorrowingAgainstCollateralWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bool",
                name: "whitelisted",
                type: "bool",
            },
        ],
        name: "_borrowCapWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "flywheelAddress",
                type: "address",
            },
        ],
        name: "_removeFlywheel",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cTokenBorrow",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "borrowCap",
                type: "uint256",
            },
        ],
        name: "_setBorrowCapForCollateral",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cTokenBorrow",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bool",
                name: "whitelisted",
                type: "bool",
            },
        ],
        name: "_setBorrowCapForCollateralWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newBorrowCapGuardian",
                type: "address",
            },
        ],
        name: "_setBorrowCapGuardian",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IonicCErc20",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "_setBorrowPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IonicCErc20[]",
                name: "cTokens",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "newBorrowCaps",
                type: "uint256[]",
            },
        ],
        name: "_setMarketBorrowCaps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IonicCErc20[]",
                name: "cTokens",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "newSupplyCaps",
                type: "uint256[]",
            },
        ],
        name: "_setMarketSupplyCaps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IonicCErc20",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "_setMintPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newPauseGuardian",
                type: "address",
            },
        ],
        name: "_setPauseGuardian",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "_setSeizePaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "_setTransferPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bool",
                name: "whitelisted",
                type: "bool",
            },
        ],
        name: "_supplyCapWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IonicCErc20",
                name: "cToken",
                type: "address",
            },
        ],
        name: "_unsupportMarket",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "flywheelAddress",
                type: "address",
            },
        ],
        name: "addNonAccruingFlywheel",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAccruingFlywheels",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllBorrowers",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllMarkets",
        outputs: [
            {
                internalType: "contract IonicCErc20[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IonicCErc20",
                name: "collateral",
                type: "address",
            },
            {
                internalType: "contract IonicCErc20",
                name: "cTokenModify",
                type: "address",
            },
            {
                internalType: "bool",
                name: "redeeming",
                type: "bool",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "getAssetAsCollateralValueCap",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRewardsDistributors",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getWhitelist",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
        ],
        name: "getWhitelistedBorrowersBorrows",
        outputs: [
            {
                internalType: "uint256",
                name: "borrowed",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
        ],
        name: "getWhitelistedSuppliersSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "supplied",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cTokenBorrow",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isBlacklistBorrowingAgainstCollateralWhitelisted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cTokenBorrow",
                type: "address",
            },
            {
                internalType: "address",
                name: "cTokenCollateral",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isBorrowCapForCollateralWhitelisted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isBorrowCapWhitelisted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "cToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isSupplyCapWhitelisted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class ComptrollerExtensionInterface__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.ComptrollerExtensionInterface__factory = ComptrollerExtensionInterface__factory;
