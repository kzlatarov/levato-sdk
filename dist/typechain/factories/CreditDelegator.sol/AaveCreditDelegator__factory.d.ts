import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AaveCreditDelegator, AaveCreditDelegatorInterface } from "../../CreditDelegator.sol/AaveCreditDelegator";
type AaveCreditDelegatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AaveCreditDelegator__factory extends ContractFactory {
    constructor(...args: AaveCreditDelegatorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<AaveCreditDelegator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): AaveCreditDelegator;
    connect(signer: Signer): AaveCreditDelegator__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610096565b600180546001600160a01b031916905561004381610046602090811b61061317901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61116a806100a56000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806379ba5097116100a2578063c45a015511610071578063c45a0155146103a8578063ccdbe8b1146103bb578063e30c3978146103e6578063f094a36d146103f7578063f2fde38b146104225761010b565b806379ba50971461036957806389cd9855146103715780638da5cb5b14610384578063bb7349cc146103955761010b565b806363e5cafc116100de57806363e5cafc146102e85780636bd76d2414610321578063715018a61461034c5780637454a0d4146103565761010b565b806308bfa40a1461018257806315a55135146101b25780632b3d042b1461028b5780636333d001146102d3575b60006101226000356001600160e01b031916610435565b90506001600160a01b03811661015e57604051630a82dd7360e31b81526001600160e01b03196000351660048201526024015b60405180910390fd5b3660008037600080366000845af43d6000803e80801561017d573d6000f35b3d6000fd5b600254610195906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61022d6101c0366004610e20565b60076020819052600091825260409091208054600182015460028301546003840154600485015460058601546006870154969097015494969395929464ffffffffff8316946001600160a01b0365010000000000909404841694928416931691906001600160801b031689565b60408051998a5260208a01989098529688019590955264ffffffffff90931660608701526001600160a01b039182166080870152811660a08601521660c084015260e08301526001600160801b0316610100820152610120016101a9565b6102bd610299366004610e44565b600960209081526000928352604080842090915290825290205464ffffffffff1681565b60405164ffffffffff90911681526020016101a9565b6102db610455565b6040516101a99190610e7d565b6103136102f6366004610e44565b600560209081526000928352604080842090915290825290205481565b6040519081526020016101a9565b61031361032f366004610e44565b600460209081526000928352604080842090915290825290205481565b610354610464565b005b610354610364366004610f35565b610478565b610354610512565b61035461037f366004610e44565b61058c565b6000546001600160a01b0316610195565b600654610195906001600160a01b031681565b600354610195906001600160a01b031681565b6103136103c9366004610e44565b600a60209081526000928352604080842090915290825290205481565b6001546001600160a01b0316610195565b610313610405366004610e44565b600860209081526000928352604080842090915290825290205481565b610354610430366004610e20565b6105a2565b600061044f8260008051602061113e833981519152610663565b92915050565b606061045f610709565b905090565b61046c61077b565b61047660006107d5565b565b61048061077b565b600061048a610709565b905060005b81518110156104cc576104ba8282815181106104ad576104ad610fd4565b60200260200101516107ee565b806104c481611000565b91505061048f565b5060005b825181101561050d576104fb8382815181106104ee576104ee610fd4565b602002602001015161091e565b8061050581611000565b9150506104d0565b505050565b60015433906001600160a01b031681146105805760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b6064820152608401610155565b610589816107d5565b50565b61059461077b565b61059e8282610a16565b5050565b6105aa61077b565b600180546001600160a01b0383166001600160a01b031990911681179091556105db6000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8054600090815b818110156106fe57846001600160e01b03191684600001828154811061069257610692610fd4565b600091825260209091200154600160a01b900460e01b6001600160e01b03191614156106ec578360000181815481106106cd576106cd610fd4565b6000918252602090912001546001600160a01b0316925061044f915050565b806106f681611000565b91505061066a565b506000949350505050565b606060008051602061113e83398151915260010180548060200260200160405190810160405280929190818152602001828054801561077157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610753575b5050505050905090565b6000546001600160a01b031633146104765760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610155565b600180546001600160a01b031916905561058981610613565b60008051602061113e83398151915261080682610a37565b60005b600182015460ff8216101561050d57826001600160a01b0316826001018260ff168154811061083a5761083a610fd4565b6000918252602090912001546001600160a01b0316141561090c576001808301805490916108679161101b565b8154811061087757610877610fd4565b6000918252602090912001546001830180546001600160a01b039092169160ff84169081106108a8576108a8610fd4565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816001018054806108e9576108e9611032565b600082815260209020810160001990810180546001600160a01b03191690550190555b8061091681611048565b915050610809565b60008051602061113e83398151915260005b600182015460ff821610156109d657826001600160a01b0316826001018260ff168154811061096157610961610fd4565b6000918252602090912001546001600160a01b031614156109c45760405162461bcd60e51b815260206004820152601760248201527f657874656e73696f6e20616c72656164792061646465640000000000000000006044820152606401610155565b806109ce81611048565b915050610930565b506109e082610bfc565b6001908101805491820181556000908152602090200180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811615610a2e57610a2e816107ee565b61059e8261091e565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a77573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a9f9190810190611068565b905060008051602061113e83398151915260005b82518161ffff161015610bf6576000838261ffff1681518110610ad857610ad8610fd4565b60200260200101519050610aec8184610663565b6001600160a01b0316856001600160a01b031614610b0c57610b0c611105565b6000610b188285610d83565b84549091508490610b2b9060019061101b565b81548110610b3b57610b3b610fd4565b90600052602060002001846000018261ffff1681548110610b5e57610b5e610fd4565b600091825260209091208254910180546001600160a01b039092166001600160a01b031983168117825592546001600160c01b0319909216909217600160a01b9182900463ffffffff169091021790558354849080610bbf57610bbf611032565b600082815260209020810160001990810180546001600160c01b031916905501905550819050610bee8161111b565b915050610ab3565b50505050565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610c3c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c649190810190611068565b60008051602061113e83398151915280549192509060005b8351811015610d7c576000848281518110610c9957610c99610fd4565b602002602001015190506000610caf8286610663565b90506001600160a01b03811615610cf457604051632c18df3360e01b81526001600160e01b0319831660048201526001600160a01b0382166024820152604401610155565b604080518082019091526001600160a01b0380891682526001600160e01b0319841660208084019182528854600181018a5560008a815291909120935193018054915160e01c600160a01b026001600160c01b0319909216939092169290921791909117905583610d648161111b565b94505050508080610d7490611000565b915050610c7c565b5050505050565b8054600090815b8161ffff168161ffff161015610dff57846001600160e01b031916846000018261ffff1681548110610dbe57610dbe610fd4565b600091825260209091200154600160a01b900460e01b6001600160e01b0319161415610ded57915061044f9050565b80610df78161111b565b915050610d8a565b5061ffff949350505050565b6001600160a01b038116811461058957600080fd5b600060208284031215610e3257600080fd5b8135610e3d81610e0b565b9392505050565b60008060408385031215610e5757600080fd5b8235610e6281610e0b565b91506020830135610e7281610e0b565b809150509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610ebe5783516001600160a01b031683529284019291840191600101610e99565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610f0957610f09610eca565b604052919050565b600067ffffffffffffffff821115610f2b57610f2b610eca565b5060051b60200190565b60006020808385031215610f4857600080fd5b823567ffffffffffffffff811115610f5f57600080fd5b8301601f81018513610f7057600080fd5b8035610f83610f7e82610f11565b610ee0565b81815260059190911b82018301908381019087831115610fa257600080fd5b928401925b82841015610fc9578335610fba81610e0b565b82529284019290840190610fa7565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561101457611014610fea565b5060010190565b60008282101561102d5761102d610fea565b500390565b634e487b7160e01b600052603160045260246000fd5b600060ff821660ff81141561105f5761105f610fea565b60010192915050565b6000602080838503121561107b57600080fd5b825167ffffffffffffffff81111561109257600080fd5b8301601f810185136110a357600080fd5b80516110b1610f7e82610f11565b81815260059190911b820183019083810190878311156110d057600080fd5b928401925b82841015610fc95783516001600160e01b0319811681146110f65760008081fd5b825292840192908401906110d5565b634e487b7160e01b600052600160045260246000fd5b600061ffff8083168181141561113357611133610fea565b600101939250505056fe234c809385eaba7c8e68b2a08341f3988117f4f9fae0fac38df439aa440b2615a164736f6c634300080a000a";
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
        readonly name: "aaveAddressesProvider";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPoolAddressesProvider";
        }];
        readonly stateMutability: "view";
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
    static createInterface(): AaveCreditDelegatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AaveCreditDelegator;
}
export {};
