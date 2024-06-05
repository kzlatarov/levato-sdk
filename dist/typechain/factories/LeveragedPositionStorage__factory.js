/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
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
];
export class LeveragedPositionStorage__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
LeveragedPositionStorage__factory.abi = _abi;
