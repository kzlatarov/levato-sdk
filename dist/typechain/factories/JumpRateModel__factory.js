/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory, } from "ethers";
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "baseRatePerYear",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "multiplierPerYear",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "jumpMultiplierPerYear",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "kink_",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "baseRate",
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
        name: "blocksPerYear",
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
        name: "getBorrowRate",
        inputs: [
            {
                name: "cash",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "borrows",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "reserves",
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
        name: "getSupplyRate",
        inputs: [
            {
                name: "cash",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "borrows",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "reserves",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "reserveFactorMantissa",
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
        name: "jumpMultiplier",
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
        name: "kink",
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
        name: "multiplier",
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
        name: "utilizationRate",
        inputs: [
            {
                name: "cash",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "borrows",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "reserves",
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
        stateMutability: "pure",
    },
    {
        type: "event",
        name: "NewInterestParams",
        inputs: [
            {
                name: "baseRate",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "multiplier",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "jumpMultiplier",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "kink",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405161046138038061046183398101604081905261002f91610094565b60028490556001839055600382905560048190556040805185815260208101859052908101839052606081018290527f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d9060800160405180910390a1505050506100ca565b600080600080608085870312156100aa57600080fd5b505082516020840151604085015160609095015191969095509092509050565b610388806100d96000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80636e71e2d81161005b5780636e71e2d8146100cd578063a385fb96146100e0578063b8168816146100e9578063fd2da339146100fc57600080fd5b806315f240531461008d5780631b3ed722146100b25780631f68f20a146100bb57806337525928146100c4575b600080fd5b6100a061009b366004610297565b610105565b60405190815260200160405180910390f35b6100a060015481565b6100a060025481565b6100a060035481565b6100a06100db366004610297565b6101d3565b6100a060005481565b6100a06100f73660046102c3565b61021b565b6100a060045481565b6000806101138585856101d3565b9050600454811161015457600254670de0b6b3a764000060015483610138919061030b565b610142919061032a565b61014c919061034c565b9150506101cc565b6000600254670de0b6b3a7640000600154600454610172919061030b565b61017c919061032a565b610186919061034c565b90506000600454836101989190610364565b905081670de0b6b3a7640000600354836101b2919061030b565b6101bc919061032a565b6101c6919061034c565b93505050505b9392505050565b6000826101e2575060006101cc565b816101ed848661034c565b6101f79190610364565b61020984670de0b6b3a764000061030b565b610213919061032a565b949350505050565b60008061023083670de0b6b3a7640000610364565b9050600061023f878787610105565b90506000670de0b6b3a7640000610256848461030b565b610260919061032a565b9050670de0b6b3a7640000816102778a8a8a6101d3565b610281919061030b565b61028b919061032a565b98975050505050505050565b6000806000606084860312156102ac57600080fd5b505081359360208301359350604090920135919050565b600080600080608085870312156102d957600080fd5b5050823594602084013594506040840135936060013592509050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610325576103256102f5565b500290565b60008261034757634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561035f5761035f6102f5565b500190565b600082821015610376576103766102f5565b50039056fea164736f6c634300080a000a";
const isSuperArgs = (xs) => xs.length > 1;
export class JumpRateModel__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(baseRatePerYear, multiplierPerYear, jumpMultiplierPerYear, kink_, overrides) {
        return super.deploy(baseRatePerYear, multiplierPerYear, jumpMultiplierPerYear, kink_, overrides || {});
    }
    getDeployTransaction(baseRatePerYear, multiplierPerYear, jumpMultiplierPerYear, kink_, overrides) {
        return super.getDeployTransaction(baseRatePerYear, multiplierPerYear, jumpMultiplierPerYear, kink_, overrides || {});
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
JumpRateModel__factory.bytecode = _bytecode;
JumpRateModel__factory.abi = _abi;
