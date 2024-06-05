import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CreditDelegator, CreditDelegatorInterface } from "../../CreditDelegator.sol/CreditDelegator";
type CreditDelegatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CreditDelegator__factory extends ContractFactory {
    constructor(...args: CreditDelegatorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<CreditDelegator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): CreditDelegator;
    connect(signer: Signer): CreditDelegator__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610096565b600180546001600160a01b031916905561004381610046602090811b6105f517901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61114c806100a56000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806379ba509711610097578063ccdbe8b111610066578063ccdbe8b11461039d578063e30c3978146103c8578063f094a36d146103d9578063f2fde38b1461040457610100565b806379ba50971461035e57806389cd9855146103665780638da5cb5b14610379578063c45a01551461038a57610100565b806363e5cafc116100d357806363e5cafc146102dd5780636bd76d2414610316578063715018a6146103415780637454a0d41461034b57610100565b806308bfa40a1461017757806315a55135146101a75780632b3d042b146102805780636333d001146102c8575b60006101176000356001600160e01b031916610417565b90506001600160a01b03811661015357604051630a82dd7360e31b81526001600160e01b03196000351660048201526024015b60405180910390fd5b3660008037600080366000845af43d6000803e808015610172573d6000f35b3d6000fd5b60025461018a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6102226101b5366004610e02565b60076020819052600091825260409091208054600182015460028301546003840154600485015460058601546006870154969097015494969395929464ffffffffff8316946001600160a01b0365010000000000909404841694928416931691906001600160801b031689565b60408051998a5260208a01989098529688019590955264ffffffffff90931660608701526001600160a01b039182166080870152811660a08601521660c084015260e08301526001600160801b03166101008201526101200161019e565b6102b261028e366004610e26565b600960209081526000928352604080842090915290825290205464ffffffffff1681565b60405164ffffffffff909116815260200161019e565b6102d0610437565b60405161019e9190610e5f565b6103086102eb366004610e26565b600560209081526000928352604080842090915290825290205481565b60405190815260200161019e565b610308610324366004610e26565b600460209081526000928352604080842090915290825290205481565b610349610446565b005b610349610359366004610f17565b61045a565b6103496104f4565b610349610374366004610e26565b61056e565b6000546001600160a01b031661018a565b60035461018a906001600160a01b031681565b6103086103ab366004610e26565b600a60209081526000928352604080842090915290825290205481565b6001546001600160a01b031661018a565b6103086103e7366004610e26565b600860209081526000928352604080842090915290825290205481565b610349610412366004610e02565b610584565b600061043182600080516020611120833981519152610645565b92915050565b60606104416106eb565b905090565b61044e61075d565b61045860006107b7565b565b61046261075d565b600061046c6106eb565b905060005b81518110156104ae5761049c82828151811061048f5761048f610fb6565b60200260200101516107d0565b806104a681610fe2565b915050610471565b5060005b82518110156104ef576104dd8382815181106104d0576104d0610fb6565b6020026020010151610900565b806104e781610fe2565b9150506104b2565b505050565b60015433906001600160a01b031681146105625760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b606482015260840161014a565b61056b816107b7565b50565b61057661075d565b61058082826109f8565b5050565b61058c61075d565b600180546001600160a01b0383166001600160a01b031990911681179091556105bd6000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8054600090815b818110156106e057846001600160e01b03191684600001828154811061067457610674610fb6565b600091825260209091200154600160a01b900460e01b6001600160e01b03191614156106ce578360000181815481106106af576106af610fb6565b6000918252602090912001546001600160a01b03169250610431915050565b806106d881610fe2565b91505061064c565b506000949350505050565b606060008051602061112083398151915260010180548060200260200160405190810160405280929190818152602001828054801561075357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610735575b5050505050905090565b6000546001600160a01b031633146104585760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161014a565b600180546001600160a01b031916905561056b816105f5565b6000805160206111208339815191526107e882610a19565b60005b600182015460ff821610156104ef57826001600160a01b0316826001018260ff168154811061081c5761081c610fb6565b6000918252602090912001546001600160a01b031614156108ee5760018083018054909161084991610ffd565b8154811061085957610859610fb6565b6000918252602090912001546001830180546001600160a01b039092169160ff841690811061088a5761088a610fb6565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816001018054806108cb576108cb611014565b600082815260209020810160001990810180546001600160a01b03191690550190555b806108f88161102a565b9150506107eb565b60008051602061112083398151915260005b600182015460ff821610156109b857826001600160a01b0316826001018260ff168154811061094357610943610fb6565b6000918252602090912001546001600160a01b031614156109a65760405162461bcd60e51b815260206004820152601760248201527f657874656e73696f6e20616c7265616479206164646564000000000000000000604482015260640161014a565b806109b08161102a565b915050610912565b506109c282610bde565b6001908101805491820181556000908152602090200180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811615610a1057610a10816107d0565b61058082610900565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a59573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a81919081019061104a565b905060008051602061112083398151915260005b82518161ffff161015610bd8576000838261ffff1681518110610aba57610aba610fb6565b60200260200101519050610ace8184610645565b6001600160a01b0316856001600160a01b031614610aee57610aee6110e7565b6000610afa8285610d65565b84549091508490610b0d90600190610ffd565b81548110610b1d57610b1d610fb6565b90600052602060002001846000018261ffff1681548110610b4057610b40610fb6565b600091825260209091208254910180546001600160a01b039092166001600160a01b031983168117825592546001600160c01b0319909216909217600160a01b9182900463ffffffff169091021790558354849080610ba157610ba1611014565b600082815260209020810160001990810180546001600160c01b031916905501905550819050610bd0816110fd565b915050610a95565b50505050565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610c1e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c46919081019061104a565b60008051602061112083398151915280549192509060005b8351811015610d5e576000848281518110610c7b57610c7b610fb6565b602002602001015190506000610c918286610645565b90506001600160a01b03811615610cd657604051632c18df3360e01b81526001600160e01b0319831660048201526001600160a01b038216602482015260440161014a565b604080518082019091526001600160a01b0380891682526001600160e01b0319841660208084019182528854600181018a5560008a815291909120935193018054915160e01c600160a01b026001600160c01b0319909216939092169290921791909117905583610d46816110fd565b94505050508080610d5690610fe2565b915050610c5e565b5050505050565b8054600090815b8161ffff168161ffff161015610de157846001600160e01b031916846000018261ffff1681548110610da057610da0610fb6565b600091825260209091200154600160a01b900460e01b6001600160e01b0319161415610dcf5791506104319050565b80610dd9816110fd565b915050610d6c565b5061ffff949350505050565b6001600160a01b038116811461056b57600080fd5b600060208284031215610e1457600080fd5b8135610e1f81610ded565b9392505050565b60008060408385031215610e3957600080fd5b8235610e4481610ded565b91506020830135610e5481610ded565b809150509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610ea05783516001600160a01b031683529284019291840191600101610e7b565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610eeb57610eeb610eac565b604052919050565b600067ffffffffffffffff821115610f0d57610f0d610eac565b5060051b60200190565b60006020808385031215610f2a57600080fd5b823567ffffffffffffffff811115610f4157600080fd5b8301601f81018513610f5257600080fd5b8035610f65610f6082610ef3565b610ec2565b81815260059190911b82018301908381019087831115610f8457600080fd5b928401925b82841015610fab578335610f9c81610ded565b82529284019290840190610f89565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610ff657610ff6610fcc565b5060010190565b60008282101561100f5761100f610fcc565b500390565b634e487b7160e01b600052603160045260246000fd5b600060ff821660ff81141561104157611041610fcc565b60010192915050565b6000602080838503121561105d57600080fd5b825167ffffffffffffffff81111561107457600080fd5b8301601f8101851361108557600080fd5b8051611093610f6082610ef3565b81815260059190911b820183019083810190878311156110b257600080fd5b928401925b82841015610fab5783516001600160e01b0319811681146110d85760008081fd5b825292840192908401906110b7565b634e487b7160e01b600052600160045260246000fd5b600061ffff8083168181141561111557611115610fcc565b600101939250505056fe234c809385eaba7c8e68b2a08341f3988117f4f9fae0fac38df439aa440b2615a164736f6c634300080a000a";
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
    static createInterface(): CreditDelegatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CreditDelegator;
}
export {};
