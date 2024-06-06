/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        type: "fallback",
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "_listExtensions",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_registerExtension",
        inputs: [
            {
                name: "extensionToAdd",
                type: "address",
                internalType: "contract DiamondExtension",
            },
            {
                name: "extensionToReplace",
                type: "address",
                internalType: "contract DiamondExtension",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "_replaceExtensions",
        inputs: [
            {
                name: "extensions",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "acceptOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "ionicMarketOfAsset",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IonicCErc20",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "owner",
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
        name: "pendingOwner",
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
        name: "renounceOwnership",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "Initialized",
        inputs: [
            {
                name: "version",
                type: "uint8",
                indexed: false,
                internalType: "uint8",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferStarted",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "FunctionAlreadyAdded",
        inputs: [
            {
                name: "_functionSelector",
                type: "bytes4",
                internalType: "bytes4",
            },
            {
                name: "_currentImpl",
                type: "address",
                internalType: "address",
            },
        ],
    },
    {
        type: "error",
        name: "FunctionNotFound",
        inputs: [
            {
                name: "_functionSelector",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610096565b600180546001600160a01b031916905561004381610046602090811b6103b017901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610f07806100a56000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806389cd98551161006657806389cd98551461014d5780638da5cb5b14610160578063d09e8b9b14610185578063e30c3978146101ae578063f2fde38b146101bf57610093565b80636333d0011461010a578063715018a6146101285780637454a0d41461013257806379ba509714610145575b60006100aa6000356001600160e01b0319166101d2565b90506001600160a01b0381166100e657604051630a82dd7360e31b81526001600160e01b03196000351660048201526024015b60405180910390fd5b3660008037600080366000845af43d6000803e808015610105573d6000f35b3d6000fd5b6101126101f2565b60405161011f9190610ba8565b60405180910390f35b610130610201565b005b610130610140366004610c75565b610215565b6101306102af565b61013061015b366004610d14565b610329565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161011f565b61016d610193366004610d4d565b6003602052600090815260409020546001600160a01b031681565b6001546001600160a01b031661016d565b6101306101cd366004610d4d565b61033f565b60006101ec82600080516020610edb833981519152610400565b92915050565b60606101fc6104a6565b905090565b610209610518565b6102136000610572565b565b61021d610518565b60006102276104a6565b905060005b81518110156102695761025782828151811061024a5761024a610d71565b602002602001015161058b565b8061026181610d9d565b91505061022c565b5060005b82518110156102aa5761029883828151811061028b5761028b610d71565b60200260200101516106bb565b806102a281610d9d565b91505061026d565b505050565b60015433906001600160a01b0316811461031d5760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b60648201526084016100dd565b61032681610572565b50565b610331610518565b61033b82826107b3565b5050565b610347610518565b600180546001600160a01b0383166001600160a01b031990911681179091556103786000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8054600090815b8181101561049b57846001600160e01b03191684600001828154811061042f5761042f610d71565b600091825260209091200154600160a01b900460e01b6001600160e01b03191614156104895783600001818154811061046a5761046a610d71565b6000918252602090912001546001600160a01b031692506101ec915050565b8061049381610d9d565b915050610407565b506000949350505050565b6060600080516020610edb83398151915260010180548060200260200160405190810160405280929190818152602001828054801561050e57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104f0575b5050505050905090565b6000546001600160a01b031633146102135760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016100dd565b600180546001600160a01b0319169055610326816103b0565b600080516020610edb8339815191526105a3826107d4565b60005b600182015460ff821610156102aa57826001600160a01b0316826001018260ff16815481106105d7576105d7610d71565b6000918252602090912001546001600160a01b031614156106a95760018083018054909161060491610db8565b8154811061061457610614610d71565b6000918252602090912001546001830180546001600160a01b039092169160ff841690811061064557610645610d71565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508160010180548061068657610686610dcf565b600082815260209020810160001990810180546001600160a01b03191690550190555b806106b381610de5565b9150506105a6565b600080516020610edb83398151915260005b600182015460ff8216101561077357826001600160a01b0316826001018260ff16815481106106fe576106fe610d71565b6000918252602090912001546001600160a01b031614156107615760405162461bcd60e51b815260206004820152601760248201527f657874656e73696f6e20616c726561647920616464656400000000000000000060448201526064016100dd565b8061076b81610de5565b9150506106cd565b5061077d82610999565b6001908101805491820181556000908152602090200180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038116156107cb576107cb8161058b565b61033b826106bb565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610814573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261083c9190810190610e05565b9050600080516020610edb83398151915260005b82518161ffff161015610993576000838261ffff168151811061087557610875610d71565b602002602001015190506108898184610400565b6001600160a01b0316856001600160a01b0316146108a9576108a9610ea2565b60006108b58285610b20565b845490915084906108c890600190610db8565b815481106108d8576108d8610d71565b90600052602060002001846000018261ffff16815481106108fb576108fb610d71565b600091825260209091208254910180546001600160a01b039092166001600160a01b031983168117825592546001600160c01b0319909216909217600160a01b9182900463ffffffff16909102179055835484908061095c5761095c610dcf565b600082815260209020810160001990810180546001600160c01b03191690550190555081905061098b81610eb8565b915050610850565b50505050565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156109d9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a019190810190610e05565b600080516020610edb83398151915280549192509060005b8351811015610b19576000848281518110610a3657610a36610d71565b602002602001015190506000610a4c8286610400565b90506001600160a01b03811615610a9157604051632c18df3360e01b81526001600160e01b0319831660048201526001600160a01b03821660248201526044016100dd565b604080518082019091526001600160a01b0380891682526001600160e01b0319841660208084019182528854600181018a5560008a815291909120935193018054915160e01c600160a01b026001600160c01b0319909216939092169290921791909117905583610b0181610eb8565b94505050508080610b1190610d9d565b915050610a19565b5050505050565b8054600090815b8161ffff168161ffff161015610b9c57846001600160e01b031916846000018261ffff1681548110610b5b57610b5b610d71565b600091825260209091200154600160a01b900460e01b6001600160e01b0319161415610b8a5791506101ec9050565b80610b9481610eb8565b915050610b27565b5061ffff949350505050565b6020808252825182820181905260009190848201906040850190845b81811015610be95783516001600160a01b031683529284019291840191600101610bc4565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610c3457610c34610bf5565b604052919050565b600067ffffffffffffffff821115610c5657610c56610bf5565b5060051b60200190565b6001600160a01b038116811461032657600080fd5b60006020808385031215610c8857600080fd5b823567ffffffffffffffff811115610c9f57600080fd5b8301601f81018513610cb057600080fd5b8035610cc3610cbe82610c3c565b610c0b565b81815260059190911b82018301908381019087831115610ce257600080fd5b928401925b82841015610d09578335610cfa81610c60565b82529284019290840190610ce7565b979650505050505050565b60008060408385031215610d2757600080fd5b8235610d3281610c60565b91506020830135610d4281610c60565b809150509250929050565b600060208284031215610d5f57600080fd5b8135610d6a81610c60565b9392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610db157610db1610d87565b5060010190565b600082821015610dca57610dca610d87565b500390565b634e487b7160e01b600052603160045260246000fd5b600060ff821660ff811415610dfc57610dfc610d87565b60010192915050565b60006020808385031215610e1857600080fd5b825167ffffffffffffffff811115610e2f57600080fd5b8301601f81018513610e4057600080fd5b8051610e4e610cbe82610c3c565b81815260059190911b82018301908381019087831115610e6d57600080fd5b928401925b82841015610d095783516001600160e01b031981168114610e935760008081fd5b82529284019290840190610e72565b634e487b7160e01b600052600160045260246000fd5b600061ffff80831681811415610ed057610ed0610d87565b600101939250505056fe234c809385eaba7c8e68b2a08341f3988117f4f9fae0fac38df439aa440b2615a164736f6c634300080a000a";
const isSuperArgs = (xs) => xs.length > 1;
export class FlashloanRouter__factory extends ContractFactory {
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
