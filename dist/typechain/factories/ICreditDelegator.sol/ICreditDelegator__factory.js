"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICreditDelegator__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "_listExtensions",
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
        name: "_registerExtension",
        inputs: [
            {
                name: "extensionToAdd",
                type: "address",
                internalType: "contract DiamondExtension",
            },
            {
                name: "extensionToReplace",
                type: "address",
                internalType: "contract DiamondExtension",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "_replaceExtensions",
        inputs: [
            {
                name: "extensions",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
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
        name: "borrowAsPosition",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address",
            },
            {
                name: "borrowAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "callLiquidation",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "contract LeveragedPosition",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "callPartialLiquidation",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "contract LeveragedPosition",
            },
            {
                name: "debtToRepay",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "changeBorrowAllowance",
        inputs: [
            {
                name: "fromAllowance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "toAllowance",
                type: "uint256",
                internalType: "uint256",
            },
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
                name: "fairAllowance",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "defaultRateModel",
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
        name: "depositLevatoFunds",
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
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getAccruedToTreasury",
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
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getAssetBorrowRate",
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
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getAssetPoolLtv",
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
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getAssetPrice",
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
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getBorrowingPowerUtilization",
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
        name: "getLevatoCurrentBorrowRate",
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
                name: "delegatedDebtValue",
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
        name: "getPositionDebt",
        inputs: [
            {
                name: "position",
                type: "address",
                internalType: "contract LeveragedPosition",
            },
        ],
        outputs: [
            {
                name: "internalDebt",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "externalDebt",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "borrowedAsset",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getPositionLiquidationThreshold",
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
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getTotalAvailableBorrows",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "availableBorrowsETH",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getUserBorrowAllowance",
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
        name: "initializeReserve",
        inputs: [
            {
                name: "_asset",
                type: "address",
                internalType: "address",
            },
            {
                name: "_lpToken",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "isPoolSupportedAsset",
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
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isPositionLiquidateable",
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
    {
        type: "function",
        name: "repayAsPosition",
        inputs: [
            {
                name: "asset",
                type: "address",
                internalType: "address",
            },
            {
                name: "repayAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "BorrowAsPosition",
        inputs: [
            {
                name: "position",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "asset",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "borrowAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "scaledATokensMinted",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Liquidation",
        inputs: [
            {
                name: "liquidator",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "position",
                type: "address",
                indexed: true,
                internalType: "contract LeveragedPosition",
            },
            {
                name: "debtToRepay",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "actualSeizedStableAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "collateralSeized",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RepayAsPosition",
        inputs: [
            {
                name: "position",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "asset",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "borrowAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "scaledATokensBurnt",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
];
class ICreditDelegator__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICreditDelegator__factory = ICreditDelegator__factory;
