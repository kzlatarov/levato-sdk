/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "fallback",
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "SUPPLY_DELTA_ERROR",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "uint8",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "SUPPLY_DELTA_NO_ERROR",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint8",
                internalType: "uint8",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "adjustLeverageRatio",
        inputs: [
            {
                name: "targetRatioMantissa",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "realizedRatio",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "claimRewards",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "claimRewards",
        inputs: [
            {
                name: "withdrawTo",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "closePosition",
        inputs: [
            {
                name: "withdrawTo",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "withdrawAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "closePosition",
        inputs: [],
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
        name: "collateralAsset",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "factory",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ILeveragedPositionsFactory",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "fundPosition",
        inputs: [
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
        name: "getAccruedRewards",
        inputs: [],
        outputs: [
            {
                name: "rewardTokens",
                type: "address[]",
                internalType: "contract ERC20Upgradeable[]",
            },
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
        name: "getBorrowRate",
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
        name: "getCurrentLeverageRatio",
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
        name: "getEquityAmount",
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
        name: "getEquityValue",
        inputs: [],
        outputs: [
            {
                name: "equityValue",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getMaxLeverageRatio",
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
        name: "getMinLeverageRatio",
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
        name: "getPositionBorrowAmount",
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
        name: "getPositionSupplyAmount",
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
        name: "getPrice",
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
        name: "getSupplyAmountDelta",
        inputs: [
            {
                name: "targetRatio",
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
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getSupplyRate",
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
        name: "isPositionClosed",
        inputs: [],
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
        name: "isShort",
        inputs: [],
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
        name: "positionOwner",
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
        name: "seizeOnLiquidation",
        inputs: [
            {
                name: "stablesToSeize",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "seizedStableAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "seizedCollateralAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "stableAsset",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "withdrawStableLeftovers",
        inputs: [
            {
                name: "withdrawTo",
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
        type: "event",
        name: "PositionClosed",
        inputs: [
            {
                name: "position",
                type: "address",
                indexed: true,
                internalType: "contract LeveragedPosition",
            },
            {
                name: "withdrawAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "equityAmountBefore",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "PositionFunded",
        inputs: [
            {
                name: "position",
                type: "address",
                indexed: true,
                internalType: "contract LeveragedPosition",
            },
            {
                name: "fundingAsset",
                type: "address",
                indexed: true,
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "fundingAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "totalCollateralAmountAfter",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "collateralAmountFunded",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "PositionRatioAdjusted",
        inputs: [
            {
                name: "position",
                type: "address",
                indexed: true,
                internalType: "contract LeveragedPosition",
            },
            {
                name: "targetRatio",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "realizedRatio",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "ratioBefore",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "equityAmountBefore",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "BorrowStablesFailed",
        inputs: [
            {
                name: "errorCode",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "ExtNotFound",
        inputs: [
            {
                name: "_functionSelector",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
    },
    {
        type: "error",
        name: "NoFundingStrategies",
        inputs: [],
    },
    {
        type: "error",
        name: "NotPositionOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "OnlyWhenClosed",
        inputs: [],
    },
    {
        type: "error",
        name: "RedeemCollateralFailed",
        inputs: [
            {
                name: "errorCode",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "RedeemFailed",
        inputs: [
            {
                name: "errorCode",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "SupplyCollateralFailed",
        inputs: [
            {
                name: "errorCode",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
];
export class LeveragedPosition__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
LeveragedPosition__factory.abi = _abi;
