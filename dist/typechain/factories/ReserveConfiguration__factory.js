/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        type: "function",
        name: "DEBT_CEILING_DECIMALS",
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
        name: "MAX_RESERVES_COUNT",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint16",
                internalType: "uint16",
            },
        ],
        stateMutability: "view",
    },
];
const _bytecode = "0x6082610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c8063280d5de914604257806331b561ba14605c575b600080fd5b6049600281565b6040519081526020015b60405180910390f35b6063608081565b60405161ffff9091168152602001605356fea164736f6c634300080a000a";
const isSuperArgs = (xs) => xs.length > 1;
export class ReserveConfiguration__factory extends ContractFactory {
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
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
