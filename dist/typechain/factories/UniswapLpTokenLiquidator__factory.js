"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapLpTokenLiquidator__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "inputToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "inputAmount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "strategyData",
                type: "bytes",
            },
        ],
        name: "redeem",
        outputs: [
            {
                internalType: "contract IERC20Upgradeable",
                name: "outputToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "outputAmount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610b17806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b57806310badf4e14610083575b600080fd5b604080518082018252601881527f556e69737761704c70546f6b656e4c697175696461746f7200000000000000006020820152905161007a91906106c3565b60405180910390f35b610096610091366004610777565b6100b5565b604080516001600160a01b03909316835260208301919091520161007a565b6000806000806000858060200190518101906100d191906108c0565b5092509250925060008890506000816001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa15801561011d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610141919061094a565b90506000826001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610183573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a7919061094a565b60405163a9059cbb60e01b81526001600160a01b03851660048201819052602482018d905291925063a9059cbb906044016020604051808303816000875af11580156101f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021b919061096e565b5060405163226bf2d160e21b815230600482015260009081906001600160a01b038616906389afcb449060240160408051808303816000875af1158015610266573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028a9190610990565b91509150600086511161029d57826102c5565b85600187516102ac91906109b4565b815181106102bc576102bc6109d9565b60200260200101515b6001600160a01b031660008851116102dd5784610305565b87600189516102ec91906109b4565b815181106102fc576102fc6109d9565b60200260200101515b6001600160a01b03161461038f5760405162461bcd60e51b815260206004820152604160248201527f4f7574707574206f6620746f6b656e3020737761702070617468206d7573742060448201527f657175616c206f7574707574206f6620746f6b656e31207377617020706174686064820152601760f91b608482015260a40160405180910390fd5b600087511180156103d85750836001600160a01b031687600189516103b491906109b4565b815181106103c4576103c46109d9565b60200260200101516001600160a01b031614155b156104cf5760405163095ea7b360e01b81526001600160a01b0389811660048301526024820184905285169063095ea7b3906044016020604051808303816000875af115801561042c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610450919061096e565b506040516338ed173960e01b81526001600160a01b038916906338ed1739906104869085906000908c90309042906004016109ef565b6000604051808303816000875af11580156104a5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104cd9190810190610a60565b505b600086511180156105185750826001600160a01b031686600188516104f491906109b4565b81518110610504576105046109d9565b60200260200101516001600160a01b031614155b1561060f5760405163095ea7b360e01b81526001600160a01b0389811660048301526024820183905284169063095ea7b3906044016020604051808303816000875af115801561056c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610590919061096e565b506040516338ed173960e01b81526001600160a01b038916906338ed1739906105c69084906000908b90309042906004016109ef565b6000604051808303816000875af11580156105e5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261060d9190810190610a60565b505b600087511161061e5783610646565b866001885161062d91906109b4565b8151811061063d5761063d6109d9565b60200260200101515b6040516370a0823160e01b8152306004820152909a506001600160a01b038b16906370a0823190602401602060405180830381865afa15801561068d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b19190610af1565b98505050505050505050935093915050565b600060208083528351808285015260005b818110156106f0578581018301518582016040015282016106d4565b81811115610702576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b038116811461072d57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561076f5761076f610730565b604052919050565b60008060006060848603121561078c57600080fd5b833561079781610718565b92506020848101359250604085013567ffffffffffffffff808211156107bc57600080fd5b818701915087601f8301126107d057600080fd5b8135818111156107e2576107e2610730565b6107f4601f8201601f19168501610746565b9150808252888482850101111561080a57600080fd5b80848401858401376000848284010152508093505050509250925092565b600067ffffffffffffffff82111561084257610842610730565b5060051b60200190565b600082601f83011261085d57600080fd5b8151602061087261086d83610828565b610746565b82815260059290921b8401810191818101908684111561089157600080fd5b8286015b848110156108b55780516108a881610718565b8352918301918301610895565b509695505050505050565b600080600080608085870312156108d657600080fd5b84516108e181610718565b602086015190945067ffffffffffffffff808211156108ff57600080fd5b61090b8883890161084c565b9450604087015191508082111561092157600080fd5b5061092e8782880161084c565b925050606085015161093f81610718565b939692955090935050565b60006020828403121561095c57600080fd5b815161096781610718565b9392505050565b60006020828403121561098057600080fd5b8151801515811461096757600080fd5b600080604083850312156109a357600080fd5b505080516020909101519092909150565b6000828210156109d457634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b600060a082018783526020878185015260a0604085015281875180845260c086019150828901935060005b81811015610a3f5784516001600160a01b031683529383019391830191600101610a1a565b50506001600160a01b03969096166060850152505050608001529392505050565b60006020808385031215610a7357600080fd5b825167ffffffffffffffff811115610a8a57600080fd5b8301601f81018513610a9b57600080fd5b8051610aa961086d82610828565b81815260059190911b82018301908381019087831115610ac857600080fd5b928401925b82841015610ae657835182529284019290840190610acd565b979650505050505050565b600060208284031215610b0357600080fd5b505191905056fea164736f6c634300080a000a";
const isSuperArgs = (xs) => xs.length > 1;
class UniswapLpTokenLiquidator__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.UniswapLpTokenLiquidator__factory = UniswapLpTokenLiquidator__factory;
