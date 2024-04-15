import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IonicCreditDelegator, IonicCreditDelegatorInterface } from "../../CreditDelegator.sol/IonicCreditDelegator";
type IonicCreditDelegatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IonicCreditDelegator__factory extends ContractFactory {
    constructor(...args: IonicCreditDelegatorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<IonicCreditDelegator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): IonicCreditDelegator;
    connect(signer: Signer): IonicCreditDelegator__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610096565b600180546001600160a01b031916905561004381610046602090811b6105f117901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611148806100a56000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806389cd985511610097578063ccdbe8b111610066578063ccdbe8b114610399578063e30c3978146103c4578063f094a36d146103d5578063f2fde38b1461040057610100565b806389cd98551461033b5780638da5cb5b1461034e578063bb7349cc14610373578063c45a01551461038657610100565b80636bd76d24116100d35780636bd76d24146102eb578063715018a6146103165780637454a0d41461032057806379ba50971461033357610100565b806315a55135146101775780632b3d042b146102555780636333d0011461029d57806363e5cafc146102b2575b60006101176000356001600160e01b031916610413565b90506001600160a01b03811661015357604051630a82dd7360e31b81526001600160e01b03196000351660048201526024015b60405180910390fd5b3660008037600080366000845af43d6000803e808015610172573d6000f35b3d6000fd5b6101f2610185366004610dfe565b60076020819052600091825260409091208054600182015460028301546003840154600485015460058601546006870154969097015494969395929464ffffffffff8316946001600160a01b0365010000000000909404841694928416931691906001600160801b031689565b60408051998a5260208a01989098529688019590955264ffffffffff90931660608701526001600160a01b039182166080870152811660a08601521660c084015260e08301526001600160801b0316610100820152610120015b60405180910390f35b610287610263366004610e22565b600960209081526000928352604080842090915290825290205464ffffffffff1681565b60405164ffffffffff909116815260200161024c565b6102a5610433565b60405161024c9190610e5b565b6102dd6102c0366004610e22565b600560209081526000928352604080842090915290825290205481565b60405190815260200161024c565b6102dd6102f9366004610e22565b600460209081526000928352604080842090915290825290205481565b61031e610442565b005b61031e61032e366004610f13565b610456565b61031e6104f0565b61031e610349366004610e22565b61056a565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161024c565b60065461035b906001600160a01b031681565b60035461035b906001600160a01b031681565b6102dd6103a7366004610e22565b600a60209081526000928352604080842090915290825290205481565b6001546001600160a01b031661035b565b6102dd6103e3366004610e22565b600860209081526000928352604080842090915290825290205481565b61031e61040e366004610dfe565b610580565b600061042d8260008051602061111c833981519152610641565b92915050565b606061043d6106e7565b905090565b61044a610759565b61045460006107b3565b565b61045e610759565b60006104686106e7565b905060005b81518110156104aa5761049882828151811061048b5761048b610fb2565b60200260200101516107cc565b806104a281610fde565b91505061046d565b5060005b82518110156104eb576104d98382815181106104cc576104cc610fb2565b60200260200101516108fc565b806104e381610fde565b9150506104ae565b505050565b60015433906001600160a01b0316811461055e5760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b606482015260840161014a565b610567816107b3565b50565b610572610759565b61057c82826109f4565b5050565b610588610759565b600180546001600160a01b0383166001600160a01b031990911681179091556105b96000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8054600090815b818110156106dc57846001600160e01b03191684600001828154811061067057610670610fb2565b600091825260209091200154600160a01b900460e01b6001600160e01b03191614156106ca578360000181815481106106ab576106ab610fb2565b6000918252602090912001546001600160a01b0316925061042d915050565b806106d481610fde565b915050610648565b506000949350505050565b606060008051602061111c83398151915260010180548060200260200160405190810160405280929190818152602001828054801561074f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610731575b5050505050905090565b6000546001600160a01b031633146104545760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161014a565b600180546001600160a01b0319169055610567816105f1565b60008051602061111c8339815191526107e482610a15565b60005b600182015460ff821610156104eb57826001600160a01b0316826001018260ff168154811061081857610818610fb2565b6000918252602090912001546001600160a01b031614156108ea5760018083018054909161084591610ff9565b8154811061085557610855610fb2565b6000918252602090912001546001830180546001600160a01b039092169160ff841690811061088657610886610fb2565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816001018054806108c7576108c7611010565b600082815260209020810160001990810180546001600160a01b03191690550190555b806108f481611026565b9150506107e7565b60008051602061111c83398151915260005b600182015460ff821610156109b457826001600160a01b0316826001018260ff168154811061093f5761093f610fb2565b6000918252602090912001546001600160a01b031614156109a25760405162461bcd60e51b815260206004820152601760248201527f657874656e73696f6e20616c7265616479206164646564000000000000000000604482015260640161014a565b806109ac81611026565b91505061090e565b506109be82610bda565b6001908101805491820181556000908152602090200180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811615610a0c57610a0c816107cc565b61057c826108fc565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a55573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a7d9190810190611046565b905060008051602061111c83398151915260005b82518161ffff161015610bd4576000838261ffff1681518110610ab657610ab6610fb2565b60200260200101519050610aca8184610641565b6001600160a01b0316856001600160a01b031614610aea57610aea6110e3565b6000610af68285610d61565b84549091508490610b0990600190610ff9565b81548110610b1957610b19610fb2565b90600052602060002001846000018261ffff1681548110610b3c57610b3c610fb2565b600091825260209091208254910180546001600160a01b039092166001600160a01b031983168117825592546001600160c01b0319909216909217600160a01b9182900463ffffffff169091021790558354849080610b9d57610b9d611010565b600082815260209020810160001990810180546001600160c01b031916905501905550819050610bcc816110f9565b915050610a91565b50505050565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610c1a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c429190810190611046565b60008051602061111c83398151915280549192509060005b8351811015610d5a576000848281518110610c7757610c77610fb2565b602002602001015190506000610c8d8286610641565b90506001600160a01b03811615610cd257604051632c18df3360e01b81526001600160e01b0319831660048201526001600160a01b038216602482015260440161014a565b604080518082019091526001600160a01b0380891682526001600160e01b0319841660208084019182528854600181018a5560008a815291909120935193018054915160e01c600160a01b026001600160c01b0319909216939092169290921791909117905583610d42816110f9565b94505050508080610d5290610fde565b915050610c5a565b5050505050565b8054600090815b8161ffff168161ffff161015610ddd57846001600160e01b031916846000018261ffff1681548110610d9c57610d9c610fb2565b600091825260209091200154600160a01b900460e01b6001600160e01b0319161415610dcb57915061042d9050565b80610dd5816110f9565b915050610d68565b5061ffff949350505050565b6001600160a01b038116811461056757600080fd5b600060208284031215610e1057600080fd5b8135610e1b81610de9565b9392505050565b60008060408385031215610e3557600080fd5b8235610e4081610de9565b91506020830135610e5081610de9565b809150509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610e9c5783516001600160a01b031683529284019291840191600101610e77565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610ee757610ee7610ea8565b604052919050565b600067ffffffffffffffff821115610f0957610f09610ea8565b5060051b60200190565b60006020808385031215610f2657600080fd5b823567ffffffffffffffff811115610f3d57600080fd5b8301601f81018513610f4e57600080fd5b8035610f61610f5c82610eef565b610ebe565b81815260059190911b82018301908381019087831115610f8057600080fd5b928401925b82841015610fa7578335610f9881610de9565b82529284019290840190610f85565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610ff257610ff2610fc8565b5060010190565b60008282101561100b5761100b610fc8565b500390565b634e487b7160e01b600052603160045260246000fd5b600060ff821660ff81141561103d5761103d610fc8565b60010192915050565b6000602080838503121561105957600080fd5b825167ffffffffffffffff81111561107057600080fd5b8301601f8101851361108157600080fd5b805161108f610f5c82610eef565b81815260059190911b820183019083810190878311156110ae57600080fd5b928401925b82841015610fa75783516001600160e01b0319811681146110d45760008081fd5b825292840192908401906110b3565b634e487b7160e01b600052600160045260246000fd5b600061ffff8083168181141561111157611111610fc8565b600101939250505056fe234c809385eaba7c8e68b2a08341f3988117f4f9fae0fac38df439aa440b2615a164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly type: "fallback";
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_listExtensions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_registerExtension";
        readonly inputs: readonly [{
            readonly name: "extensionToAdd";
            readonly type: "address";
            readonly internalType: "contract DiamondExtension";
        }, {
            readonly name: "extensionToReplace";
            readonly type: "address";
            readonly internalType: "contract DiamondExtension";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_replaceExtensions";
        readonly inputs: readonly [{
            readonly name: "extensions";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "acceptOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "borrowAllowance";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "borrowBalance";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "defaultRateModel";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract DefaultInterestRateStrategy";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "delegatedDebtAssetData";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "levatoCurrentBorrowRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "borrowIndex";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lastTotalDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lastUpdateTimestamp";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "lpToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "debtToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "irm";
            readonly type: "address";
            readonly internalType: "contract IDefaultInterestRateStrategy";
        }, {
            readonly name: "accruedToTreasury";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveFactor";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ILeveragedPositionsFactory";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "positionBorrowIndex";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "positionBorrowIndexLastUpdate";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "positionScaledATokens";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "renounceOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "uint8";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferStarted";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "FunctionAlreadyAdded";
        readonly inputs: readonly [{
            readonly name: "_functionSelector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }, {
            readonly name: "_currentImpl";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "FunctionNotFound";
        readonly inputs: readonly [{
            readonly name: "_functionSelector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
    }];
    static createInterface(): IonicCreditDelegatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IonicCreditDelegator;
}
export {};