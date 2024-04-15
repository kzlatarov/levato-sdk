"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancerSwapper__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "redeem",
        inputs: [
            {
                name: "inputToken",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "inputAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "strategyData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "outputToken",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "outputAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506106ce806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b57806310badf4e14610075575b600080fd5b604080518082018252600f81526e2130b630b731b2b929bbb0b83832b960891b6020820152905161006c9190610400565b60405180910390f35b610088610083366004610448565b6100a7565b604080516001600160a01b03909316835260208301919091520161006c565b600080600080848060200190518101906100c19190610515565b915091506000816001600160a01b0316638d928af86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610105573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610129919061054f565b90506000826001600160a01b03166338fff2d06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561016b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018f919061056c565b905060006040518060c00160405280838152602001600060018111156101b7576101b7610585565b81526020018b6001600160a01b03168152602001866001600160a01b031681526020018a815260200160405180602001604052806000815250815250905060006040518060800160405280306001600160a01b03168152602001600015158152602001306001600160a01b031681526020016000151581525090508a6001600160a01b031663095ea7b3858c6040518363ffffffff1660e01b81526004016102749291906001600160a01b03929092168252602082015260400190565b6020604051808303816000875af1158015610293573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b7919061059b565b506001600160a01b0384166352bbbe29838360006102d642600a6105bd565b6040518563ffffffff1660e01b81526004016102f594939291906105e3565b6020604051808303816000875af1158015610314573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610338919061056c565b506040516370a0823160e01b81523060048201526001600160a01b038716906370a0823190602401602060405180830381865afa15801561037d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a1919061056c565b959b959a509498505050505050505050565b6000815180845260005b818110156103d9576020818501810151868301820152016103bd565b818111156103eb576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061041360208301846103b3565b9392505050565b6001600160a01b038116811461042f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561045d57600080fd5b83356104688161041a565b925060208401359150604084013567ffffffffffffffff8082111561048c57600080fd5b818601915086601f8301126104a057600080fd5b8135818111156104b2576104b2610432565b604051601f8201601f19908116603f011681019083821181831017156104da576104da610432565b816040528281528960208487010111156104f357600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6000806040838503121561052857600080fd5b82516105338161041a565b60208401519092506105448161041a565b809150509250929050565b60006020828403121561056157600080fd5b81516104138161041a565b60006020828403121561057e57600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b6000602082840312156105ad57600080fd5b8151801515811461041357600080fd5b600082198211156105de57634e487b7160e01b600052601160045260246000fd5b500190565b60e08152845160e0820152600060208601516002811061061357634e487b7160e01b600052602160045260246000fd5b61010083015260408601516001600160a01b031661012083015260608601516106486101408401826001600160a01b03169052565b50608086015161016083015260a086015160c061018084015261066f6101a08401826103b3565b9150506106af602083018680516001600160a01b039081168352602080830151151590840152604080830151909116908301526060908101511515910152565b60a082019390935260c001529291505056fea164736f6c634300080a000a";
const isSuperArgs = (xs) => xs.length > 1;
class BalancerSwapper__factory extends ethers_1.ContractFactory {
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
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.BalancerSwapper__factory = BalancerSwapper__factory;
