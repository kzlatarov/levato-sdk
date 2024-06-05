/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        type: "event",
        name: "ReserveDataUpdated",
        inputs: [
            {
                name: "reserve",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "liquidityRate",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "stableBorrowRate",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "variableBorrowRate",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "liquidityIndex",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "variableBorrowIndex",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
];
const _bytecode = "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080a000a";
const isSuperArgs = (xs) => xs.length > 1;
export class ReserveLogic__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
ReserveLogic__factory.bytecode = _bytecode;
ReserveLogic__factory.abi = _abi;
