/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "function",
        name: "_getExtensionFunctions",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes4[]",
                internalType: "bytes4[]",
            },
        ],
        stateMutability: "pure",
    },
];
export class DiamondExtension__factory {
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
