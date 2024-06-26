"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoterV3__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "gauges",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ERC20Upgradeable",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract GaugeV2",
            },
        ],
        stateMutability: "view",
    },
];
class VoterV3__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.VoterV3__factory = VoterV3__factory;
