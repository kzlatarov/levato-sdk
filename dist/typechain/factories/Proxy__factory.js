/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "fallback",
        stateMutability: "payable",
    },
    {
        type: "receive",
        stateMutability: "payable",
    },
];
export class Proxy__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
Proxy__factory.abi = _abi;
