"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeparFlywheelDynamicRewards__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract FlywheelCore",
                name: "_flywheel",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "_rewardsCycleLength",
                type: "uint32",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "FlywheelError",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint32",
                name: "start",
                type: "uint32",
            },
            {
                indexed: true,
                internalType: "uint32",
                name: "end",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "uint192",
                name: "reward",
                type: "uint192",
            },
        ],
        name: "NewRewardsCycle",
        type: "event",
    },
    {
        inputs: [],
        name: "flywheel",
        outputs: [
            {
                internalType: "contract FlywheelCore",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20",
                name: "strategy",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "lastUpdatedTimestamp",
                type: "uint32",
            },
        ],
        name: "getAccruedRewards",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardToken",
        outputs: [
            {
                internalType: "contract ERC20",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20",
                name: "",
                type: "address",
            },
        ],
        name: "rewardsCycle",
        outputs: [
            {
                internalType: "uint32",
                name: "start",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "end",
                type: "uint32",
            },
            {
                internalType: "uint192",
                name: "reward",
                type: "uint192",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardsCycleLength",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60e060405234801561001057600080fd5b50604051610b4b380380610b4b83398101604081905261002f91610190565b818181806001600160a01b031660a0816001600160a01b0316815250506000816001600160a01b031663f7c618c16040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b091906101d3565b6001600160a01b03811660808190529091506100da90836000196100ee602090811b61048a17901c565b505063ffffffff1660c052506101f7915050565b600060405163095ea7b360e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806101725760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b604482015260640160405180910390fd5b50505050565b6001600160a01b038116811461018d57600080fd5b50565b600080604083850312156101a357600080fd5b82516101ae81610178565b602084015190925063ffffffff811681146101c857600080fd5b809150509250929050565b6000602082840312156101e557600080fd5b81516101f081610178565b9392505050565b60805160a05160c051610912610239600039600081816061015261030a01526000818160a2015281816101a2015261051a0152600061010201526109126000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80636fcf5e5f1461005c5780637acf5b921461009d578063b334db7b146100dc578063f7c618c1146100fd578063faa6c3c814610124575b600080fd5b6100837f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610094565b6100ef6100ea36600461074b565b610195565b604051908152602001610094565b6100c47f000000000000000000000000000000000000000000000000000000000000000081565b61016961013236600461078d565b60006020819052908152604090205463ffffffff80821691640100000000810490911690600160401b90046001600160c01b031683565b6040805163ffffffff94851681529390921660208401526001600160c01b031690820152606001610094565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101e05760405163739e221160e01b815260040160405180910390fd5b6001600160a01b0383166000908152602081815260408083208151606081018352905463ffffffff808216835264010000000082048116948301859052600160401b9091046001600160c01b031692820192909252924292909183161015610248578161024e565b82602001515b90506000836000015163ffffffff168663ffffffff1611156102705785610273565b83515b9050836020015163ffffffff166000146102ef578351602085015161029891906107c7565b63ffffffff166102a882846107c7565b63ffffffff1685604001516102bd91906107ec565b6102c79190610831565b6001600160c01b0316945083604001516001600160c01b03168511156102ef576102ef610857565b836020015163ffffffff168363ffffffff16106104805760007f000000000000000000000000000000000000000000000000000000000000000080610334818761086d565b61033e9190610895565b61034891906108ac565b9050600061035589610515565b905060405180606001604052808663ffffffff1681526020018363ffffffff168152602001826001600160c01b03168152506000808b6001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a81548163ffffffff021916908363ffffffff16021790555060408201518160000160086101000a8154816001600160c01b0302191690836001600160c01b031602179055509050508163ffffffff168563ffffffff167f2bc72eed7f7ea7cb3bf6969b33e204748849532a1f8e4ca68ba1bc97c4cf2e008360405161047591906001600160c01b0391909116815260200190565b60405180910390a350505b5050505092915050565b600060405163095ea7b360e01b81526001600160a01b0384166004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061050f5760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b60448201526064015b60405180910390fd5b50505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f7c618c16040518163ffffffff1660e01b8152600401602060405180830381865afa158015610576573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059a91906108cf565b6040516370a0823160e01b81526001600160a01b0385811660048301529192506000918316906370a0823190602401602060405180830381865afa1580156105e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060a91906108ec565b90508015610627576106276001600160a01b038316853084610697565b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa15801561066b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068f91906108ec565b949350505050565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061072c5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610506565b5050505050565b6001600160a01b038116811461074857600080fd5b50565b6000806040838503121561075e57600080fd5b823561076981610733565b9150602083013563ffffffff8116811461078257600080fd5b809150509250929050565b60006020828403121561079f57600080fd5b81356107aa81610733565b9392505050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff838116908316818110156107e4576107e46107b1565b039392505050565b60006001600160c01b0382811684821681151582840482111615610812576108126107b1565b02949350505050565b634e487b7160e01b600052601260045260246000fd5b60006001600160c01b038381168061084b5761084b61081b565b92169190910492915050565b634e487b7160e01b600052600160045260246000fd5b600063ffffffff80831681851680830382111561088c5761088c6107b1565b01949350505050565b600063ffffffff8084168061084b5761084b61081b565b600063ffffffff80831681851681830481118215151615610812576108126107b1565b6000602082840312156108e157600080fd5b81516107aa81610733565b6000602082840312156108fe57600080fd5b505191905056fea164736f6c634300080a000a";
const isSuperArgs = (xs) => xs.length > 1;
class HeparFlywheelDynamicRewards__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(_flywheel, _rewardsCycleLength, overrides) {
        return super.getDeployTransaction(_flywheel, _rewardsCycleLength, overrides || {});
    }
    deploy(_flywheel, _rewardsCycleLength, overrides) {
        return super.deploy(_flywheel, _rewardsCycleLength, overrides || {});
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
exports.HeparFlywheelDynamicRewards__factory = HeparFlywheelDynamicRewards__factory;
