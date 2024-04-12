import { ContractFactory } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { LeveragedPositionsFactory, LeveragedPositionsFactoryInterface } from "../LeveragedPositionsFactory";
type LeveragedPositionsFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LeveragedPositionsFactory__factory extends ContractFactory {
    constructor(...args: LeveragedPositionsFactoryConstructorParams);
    getDeployTransaction(_registry: AddressLike, _flashloanRouter: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_registry: AddressLike, _flashloanRouter: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<LeveragedPositionsFactory & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): LeveragedPositionsFactory__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516200112e3803806200112e833981016040819052610031916100f7565b61003a3361006b565b600880546001600160a01b039384166001600160a01b03199182161790915560098054929093169116179055610131565b600180546001600160a01b031916905561008f81610092602090811b61049617901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461008f57600080fd5b6000806040838503121561010a57600080fd5b8251610115816100e2565b6020840151909250610126816100e2565b809150509250929050565b610fed80620001416000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80637cd7b6ce116100a25780639c6e06c0116100715780639c6e06c014610270578063a385fb9614610278578063e30c397814610281578063f2fde38b14610292578063f61dcbae146102a55761010b565b80637cd7b6ce146102225780637dc0d1d01461023957806389cd98551461024c5780638da5cb5b1461025f5761010b565b80636333d001116100de5780636333d001146101e8578063715018a6146101fd5780637454a0d41461020757806379ba50971461021a5761010b565b80630c04f1831461018257806348ccda3c146101b25780634f9b5404146101cd5780635dcb6c60146101e0575b60006101226000356001600160e01b0319166102b8565b90506001600160a01b03811661015e57604051630a82dd7360e31b81526001600160e01b03196000351660048201526024015b60405180910390fd5b3660008037600080366000845af43d6000803e80801561017d573d6000f35b3d6000fd5b600c54610195906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6101ba600281565b60405161ffff90911681526020016101a9565b600954610195906001600160a01b031681565b6101ba600381565b6101f06102d8565b6040516101a99190610c8e565b6102056102e7565b005b610205610215366004610d5b565b6102fb565b610205610395565b61022b600b5481565b6040519081526020016101a9565b600d54610195906001600160a01b031681565b61020561025a366004610dfa565b61040f565b6000546001600160a01b0316610195565b6101ba600181565b61022b600a5481565b6001546001600160a01b0316610195565b6102056102a0366004610e33565b610425565b600854610195906001600160a01b031681565b60006102d282600080516020610fc18339815191526104e6565b92915050565b60606102e261058c565b905090565b6102ef6105fe565b6102f96000610658565b565b6103036105fe565b600061030d61058c565b905060005b815181101561034f5761033d82828151811061033057610330610e57565b6020026020010151610671565b8061034781610e83565b915050610312565b5060005b82518110156103905761037e83828151811061037157610371610e57565b60200260200101516107a1565b8061038881610e83565b915050610353565b505050565b60015433906001600160a01b031681146104035760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b6064820152608401610155565b61040c81610658565b50565b6104176105fe565b6104218282610899565b5050565b61042d6105fe565b600180546001600160a01b0383166001600160a01b0319909116811790915561045e6000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8054600090815b8181101561058157846001600160e01b03191684600001828154811061051557610515610e57565b600091825260209091200154600160a01b900460e01b6001600160e01b031916141561056f5783600001818154811061055057610550610e57565b6000918252602090912001546001600160a01b031692506102d2915050565b8061057981610e83565b9150506104ed565b506000949350505050565b6060600080516020610fc18339815191526001018054806020026020016040519081016040528092919081815260200182805480156105f457602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116105d6575b5050505050905090565b6000546001600160a01b031633146102f95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610155565b600180546001600160a01b031916905561040c81610496565b600080516020610fc1833981519152610689826108ba565b60005b600182015460ff8216101561039057826001600160a01b0316826001018260ff16815481106106bd576106bd610e57565b6000918252602090912001546001600160a01b0316141561078f576001808301805490916106ea91610e9e565b815481106106fa576106fa610e57565b6000918252602090912001546001830180546001600160a01b039092169160ff841690811061072b5761072b610e57565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508160010180548061076c5761076c610eb5565b600082815260209020810160001990810180546001600160a01b03191690550190555b8061079981610ecb565b91505061068c565b600080516020610fc183398151915260005b600182015460ff8216101561085957826001600160a01b0316826001018260ff16815481106107e4576107e4610e57565b6000918252602090912001546001600160a01b031614156108475760405162461bcd60e51b815260206004820152601760248201527f657874656e73696f6e20616c72656164792061646465640000000000000000006044820152606401610155565b8061085181610ecb565b9150506107b3565b5061086382610a7f565b6001908101805491820181556000908152602090200180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038116156108b1576108b181610671565b610421826107a1565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156108fa573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109229190810190610eeb565b9050600080516020610fc183398151915260005b82518161ffff161015610a79576000838261ffff168151811061095b5761095b610e57565b6020026020010151905061096f81846104e6565b6001600160a01b0316856001600160a01b03161461098f5761098f610f88565b600061099b8285610c06565b845490915084906109ae90600190610e9e565b815481106109be576109be610e57565b90600052602060002001846000018261ffff16815481106109e1576109e1610e57565b600091825260209091208254910180546001600160a01b039092166001600160a01b031983168117825592546001600160c01b0319909216909217600160a01b9182900463ffffffff169091021790558354849080610a4257610a42610eb5565b600082815260209020810160001990810180546001600160c01b031916905501905550819050610a7181610f9e565b915050610936565b50505050565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610abf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ae79190810190610eeb565b600080516020610fc183398151915280549192509060005b8351811015610bff576000848281518110610b1c57610b1c610e57565b602002602001015190506000610b3282866104e6565b90506001600160a01b03811615610b7757604051632c18df3360e01b81526001600160e01b0319831660048201526001600160a01b0382166024820152604401610155565b604080518082019091526001600160a01b0380891682526001600160e01b0319841660208084019182528854600181018a5560008a815291909120935193018054915160e01c600160a01b026001600160c01b0319909216939092169290921791909117905583610be781610f9e565b94505050508080610bf790610e83565b915050610aff565b5050505050565b8054600090815b8161ffff168161ffff161015610c8257846001600160e01b031916846000018261ffff1681548110610c4157610c41610e57565b600091825260209091200154600160a01b900460e01b6001600160e01b0319161415610c705791506102d29050565b80610c7a81610f9e565b915050610c0d565b5061ffff949350505050565b6020808252825182820181905260009190848201906040850190845b81811015610ccf5783516001600160a01b031683529284019291840191600101610caa565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610d1a57610d1a610cdb565b604052919050565b600067ffffffffffffffff821115610d3c57610d3c610cdb565b5060051b60200190565b6001600160a01b038116811461040c57600080fd5b60006020808385031215610d6e57600080fd5b823567ffffffffffffffff811115610d8557600080fd5b8301601f81018513610d9657600080fd5b8035610da9610da482610d22565b610cf1565b81815260059190911b82018301908381019087831115610dc857600080fd5b928401925b82841015610def578335610de081610d46565b82529284019290840190610dcd565b979650505050505050565b60008060408385031215610e0d57600080fd5b8235610e1881610d46565b91506020830135610e2881610d46565b809150509250929050565b600060208284031215610e4557600080fd5b8135610e5081610d46565b9392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610e9757610e97610e6d565b5060010190565b600082821015610eb057610eb0610e6d565b500390565b634e487b7160e01b600052603160045260246000fd5b600060ff821660ff811415610ee257610ee2610e6d565b60010192915050565b60006020808385031215610efe57600080fd5b825167ffffffffffffffff811115610f1557600080fd5b8301601f81018513610f2657600080fd5b8051610f34610da482610d22565b81815260059190911b82018301908381019087831115610f5357600080fd5b928401925b82841015610def5783516001600160e01b031981168114610f795760008081fd5b82529284019290840190610f58565b634e487b7160e01b600052600160045260246000fd5b600061ffff80831681811415610fb657610fb6610e6d565b600101939250505056fe234c809385eaba7c8e68b2a08341f3988117f4f9fae0fac38df439aa440b2615a164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IFundersRegistry";
            readonly name: "_registry";
            readonly type: "address";
        }, {
            readonly internalType: "contract IFlashloanRouter";
            readonly name: "_flashloanRouter";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "_functionSelector";
            readonly type: "bytes4";
        }, {
            readonly internalType: "address";
            readonly name: "_currentImpl";
            readonly type: "address";
        }];
        readonly name: "FunctionAlreadyAdded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "_functionSelector";
            readonly type: "bytes4";
        }];
        readonly name: "FunctionNotFound";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferStarted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "AAVE";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DELEGATED";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "IONIC";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_listExtensions";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract DiamondExtension";
            readonly name: "extensionToAdd";
            readonly type: "address";
        }, {
            readonly internalType: "contract DiamondExtension";
            readonly name: "extensionToReplace";
            readonly type: "address";
        }];
        readonly name: "_registerExtension";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "extensions";
            readonly type: "address[]";
        }];
        readonly name: "_replaceExtensions";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "acceptOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "blocksPerYear";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "creditDelegator";
        readonly outputs: readonly [{
            readonly internalType: "contract ICreditDelegator";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "flashloanRouter";
        readonly outputs: readonly [{
            readonly internalType: "contract IFlashloanRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "fundersRegistry";
        readonly outputs: readonly [{
            readonly internalType: "contract IFundersRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minBorrowNative";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oracle";
        readonly outputs: readonly [{
            readonly internalType: "contract MasterPriceOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pendingOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): LeveragedPositionsFactoryInterface;
    static connect(address: string, runner?: ContractRunner | null): LeveragedPositionsFactory;
}
export {};
