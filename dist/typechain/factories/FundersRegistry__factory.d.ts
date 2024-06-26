import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FundersRegistry, FundersRegistryInterface } from "../FundersRegistry";
type FundersRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FundersRegistry__factory extends ContractFactory {
    constructor(...args: FundersRegistryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<FundersRegistry>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): FundersRegistry;
    connect(signer: Signer): FundersRegistry__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610096565b600180546001600160a01b031916905561004381610046602090811b61059c17901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6111c9806100a56000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638da5cb5b11610097578063c8ff6fee11610066578063c8ff6fee146102ed578063d51ed3b714610321578063e30c397814610355578063f2fde38b1461036657610100565b80638da5cb5b1461026c5780638db87c271461027d578063984d8655146102a6578063aa2482d8146102da57610100565b8063715018a6116100d3578063715018a6146102345780637454a0d41461023e57806379ba50971461025157806389cd98551461025957610100565b80630c04f183146101775780632a02024c146101a7578063398cd955146101db5780636333d0011461021f575b60006101176000356001600160e01b031916610379565b90506001600160a01b03811661015357604051630a82dd7360e31b81526001600160e01b03196000351660048201526024015b60405180910390fd5b3660008037600080366000845af43d6000803e808015610172573d6000f35b3d6000fd5b60115461018a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61018a6101b5366004610ddb565b80516020818301810180516004825292820191909301209152546001600160a01b031681565b61020b6101e9366004610e85565b600e60209081526000928352604080842090915290825290205462ffffff1681565b60405162ffffff909116815260200161019e565b610227610399565b60405161019e9190610ebe565b61023c6103a8565b005b61023c61024c366004610f2f565b6103bc565b61023c610456565b61023c610267366004610e85565b6104d0565b6000546001600160a01b031661018a565b61018a61028b366004610fce565b6006602052600090815260409020546001600160a01b031681565b61018a6102b4366004610e85565b600c6020908152600092835260408084209091529082529020546001600160a01b031681565b61018a6102e8366004610ff2565b6104e6565b61018a6102fb366004610e85565b600f6020908152600092835260408084209091529082529020546001600160a01b031681565b61018a61032f366004610e85565b60056020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b031661018a565b61023c610374366004610fce565b61052b565b60006103938260008051602061119d8339815191526105ec565b92915050565b60606103a3610692565b905090565b6103b0610704565b6103ba600061075e565b565b6103c4610704565b60006103ce610692565b905060005b8151811015610410576103fe8282815181106103f1576103f1611033565b6020026020010151610777565b806104088161105f565b9150506103d3565b5060005b82518110156104515761043f83828151811061043257610432611033565b60200260200101516108a7565b806104498161105f565b915050610414565b505050565b60015433906001600160a01b031681146104c45760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b606482015260840161014a565b6104cd8161075e565b50565b6104d8610704565b6104e2828261099f565b5050565b6010602052826000526040600020602052816000526040600020818154811061050e57600080fd5b6000918252602090912001546001600160a01b0316925083915050565b610533610704565b600180546001600160a01b0383166001600160a01b031990911681179091556105646000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8054600090815b8181101561068757846001600160e01b03191684600001828154811061061b5761061b611033565b600091825260209091200154600160a01b900460e01b6001600160e01b03191614156106755783600001818154811061065657610656611033565b6000918252602090912001546001600160a01b03169250610393915050565b8061067f8161105f565b9150506105f3565b506000949350505050565b606060008051602061119d8339815191526001018054806020026020016040519081016040528092919081815260200182805480156106fa57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116106dc575b5050505050905090565b6000546001600160a01b031633146103ba5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161014a565b600180546001600160a01b03191690556104cd8161059c565b60008051602061119d83398151915261078f826109c0565b60005b600182015460ff8216101561045157826001600160a01b0316826001018260ff16815481106107c3576107c3611033565b6000918252602090912001546001600160a01b03161415610895576001808301805490916107f09161107a565b8154811061080057610800611033565b6000918252602090912001546001830180546001600160a01b039092169160ff841690811061083157610831611033565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055508160010180548061087257610872611091565b600082815260209020810160001990810180546001600160a01b03191690550190555b8061089f816110a7565b915050610792565b60008051602061119d83398151915260005b600182015460ff8216101561095f57826001600160a01b0316826001018260ff16815481106108ea576108ea611033565b6000918252602090912001546001600160a01b0316141561094d5760405162461bcd60e51b815260206004820152601760248201527f657874656e73696f6e20616c7265616479206164646564000000000000000000604482015260640161014a565b80610957816110a7565b9150506108b9565b5061096982610b85565b6001908101805491820181556000908152602090200180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038116156109b7576109b781610777565b6104e2826108a7565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610a00573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a2891908101906110c7565b905060008051602061119d83398151915260005b82518161ffff161015610b7f576000838261ffff1681518110610a6157610a61611033565b60200260200101519050610a7581846105ec565b6001600160a01b0316856001600160a01b031614610a9557610a95611164565b6000610aa18285610d0c565b84549091508490610ab49060019061107a565b81548110610ac457610ac4611033565b90600052602060002001846000018261ffff1681548110610ae757610ae7611033565b600091825260209091208254910180546001600160a01b039092166001600160a01b031983168117825592546001600160c01b0319909216909217600160a01b9182900463ffffffff169091021790558354849080610b4857610b48611091565b600082815260209020810160001990810180546001600160c01b031916905501905550819050610b778161117a565b915050610a3c565b50505050565b6000816001600160a01b03166389f8132e6040518163ffffffff1660e01b8152600401600060405180830381865afa158015610bc5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bed91908101906110c7565b60008051602061119d83398151915280549192509060005b8351811015610d05576000848281518110610c2257610c22611033565b602002602001015190506000610c3882866105ec565b90506001600160a01b03811615610c7d57604051632c18df3360e01b81526001600160e01b0319831660048201526001600160a01b038216602482015260440161014a565b604080518082019091526001600160a01b0380891682526001600160e01b0319841660208084019182528854600181018a5560008a815291909120935193018054915160e01c600160a01b026001600160c01b0319909216939092169290921791909117905583610ced8161117a565b94505050508080610cfd9061105f565b915050610c05565b5050505050565b8054600090815b8161ffff168161ffff161015610d8857846001600160e01b031916846000018261ffff1681548110610d4757610d47611033565b600091825260209091200154600160a01b900460e01b6001600160e01b0319161415610d765791506103939050565b80610d808161117a565b915050610d13565b5061ffff949350505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610dd357610dd3610d94565b604052919050565b60006020808385031215610dee57600080fd5b823567ffffffffffffffff80821115610e0657600080fd5b818501915085601f830112610e1a57600080fd5b813581811115610e2c57610e2c610d94565b610e3e601f8201601f19168501610daa565b91508082528684828501011115610e5457600080fd5b8084840185840137600090820190930192909252509392505050565b6001600160a01b03811681146104cd57600080fd5b60008060408385031215610e9857600080fd5b8235610ea381610e70565b91506020830135610eb381610e70565b809150509250929050565b6020808252825182820181905260009190848201906040850190845b81811015610eff5783516001600160a01b031683529284019291840191600101610eda565b50909695505050505050565b600067ffffffffffffffff821115610f2557610f25610d94565b5060051b60200190565b60006020808385031215610f4257600080fd5b823567ffffffffffffffff811115610f5957600080fd5b8301601f81018513610f6a57600080fd5b8035610f7d610f7882610f0b565b610daa565b81815260059190911b82018301908381019087831115610f9c57600080fd5b928401925b82841015610fc3578335610fb481610e70565b82529284019290840190610fa1565b979650505050505050565b600060208284031215610fe057600080fd5b8135610feb81610e70565b9392505050565b60008060006060848603121561100757600080fd5b833561101281610e70565b9250602084013561102281610e70565b929592945050506040919091013590565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561107357611073611049565b5060010190565b60008282101561108c5761108c611049565b500390565b634e487b7160e01b600052603160045260246000fd5b600060ff821660ff8114156110be576110be611049565b60010192915050565b600060208083850312156110da57600080fd5b825167ffffffffffffffff8111156110f157600080fd5b8301601f8101851361110257600080fd5b8051611110610f7882610f0b565b81815260059190911b8201830190838101908783111561112f57600080fd5b928401925b82841015610fc35783516001600160e01b0319811681146111555760008081fd5b82529284019290840190611134565b634e487b7160e01b600052600160045260246000fd5b600061ffff8083168181141561119257611192611049565b600101939250505056fe234c809385eaba7c8e68b2a08341f3988117f4f9fae0fac38df439aa440b2615a164736f6c634300080a000a";
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
        readonly name: "balancerPoolForTokens";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "bestSwapPath";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "creditDelegator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ICreditDelegator";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "customUniV3Router";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "defaultOutputToken";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "fundingStrategiesByName";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IFundingStrategy";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "fundingStrategiesByTokens";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IFundingStrategy";
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
        readonly type: "function";
        readonly name: "uniswapV3Fees";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly stateMutability: "view";
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
    static createInterface(): FundersRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FundersRegistry;
}
export {};
