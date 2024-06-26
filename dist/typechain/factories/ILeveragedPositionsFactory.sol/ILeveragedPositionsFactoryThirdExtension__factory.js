"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILeveragedPositionsFactoryThirdExtension__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "_setPairWhitelisted",
        inputs: [
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
            {
                name: "_whitelisted",
                type: "bool",
                internalType: "bool",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "createAndFundDelegatedPosition",
        inputs: [
            {
                name: "_collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_collateralVault",
                type: "address",
                internalType: "address",
            },
            {
                name: "_stableAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_fundingAsset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "_fundingAmount",
                type: "uint256",
                internalType: "uint256",
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
        name: "createAndFundDelegatedPositionAtRatio",
        inputs: [
            {
                name: "_collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_collateralVault",
                type: "address",
                internalType: "address",
            },
            {
                name: "_stableAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_fundingAsset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "_fundingAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_leverageRatio",
                type: "uint256",
                internalType: "uint256",
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
        name: "createAndFundPosition",
        inputs: [
            {
                name: "_collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_collateralVault",
                type: "address",
                internalType: "address",
            },
            {
                name: "_stableAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_fundingAsset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "_fundingAmount",
                type: "uint256",
                internalType: "uint256",
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
        name: "createAndFundPositionAtRatio",
        inputs: [
            {
                name: "_collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_collateralVault",
                type: "address",
                internalType: "address",
            },
            {
                name: "_stableAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_fundingAsset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "_fundingAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_leverageRatio",
                type: "uint256",
                internalType: "uint256",
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
        name: "createDelegatedPosition",
        inputs: [
            {
                name: "_collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_collateralVault",
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
        name: "createPosition",
        inputs: [
            {
                name: "_collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_collateralVault",
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
        name: "deregisterVault",
        inputs: [
            {
                name: "vault",
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
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getAaveMaxLeverageRatio",
        inputs: [
            {
                name: "collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "collateralAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "borrowedAsset",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "maxLeverageRatio",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getLeverageRatioAfterBorrow",
        inputs: [
            {
                name: "collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "borrowedAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "newBorrowsAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "positionSupplyAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "positionBorrowAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "r",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getLeverageRatioAfterRepay",
        inputs: [
            {
                name: "collateralAsset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "borrowedAsset",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "repaidBorrowsAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "positionSupplyAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "positionBorrowAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "r",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getLiquidationThreshold",
        inputs: [
            {
                name: "collateralAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "collateralAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "borrowedAsset",
                type: "address",
                internalType: "address",
            },
            {
                name: "leverageRatio",
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
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRegisteredVaults",
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
        name: "isVaultRegistered",
        inputs: [
            {
                name: "vault",
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
        name: "registerVault",
        inputs: [
            {
                name: "vault",
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
class ILeveragedPositionsFactoryThirdExtension__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ILeveragedPositionsFactoryThirdExtension__factory = ILeveragedPositionsFactoryThirdExtension__factory;
