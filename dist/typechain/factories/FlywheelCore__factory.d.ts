import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FlywheelCore, FlywheelCoreInterface } from "../FlywheelCore";
type FlywheelCoreConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FlywheelCore__factory extends ContractFactory {
    constructor(...args: FlywheelCoreConstructorParams);
    deploy(_rewardToken: string, _flywheelRewards: string, _flywheelBooster: string, _owner: string, _authority: string, overrides?: Overrides & {
        from?: string;
    }): Promise<FlywheelCore>;
    getDeployTransaction(_rewardToken: string, _flywheelRewards: string, _flywheelBooster: string, _owner: string, _authority: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): FlywheelCore;
    connect(signer: Signer): FlywheelCore__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620011c7380380620011c7833981016040819052620000349162000119565b600080546001600160a01b03199081166001600160a01b0385811691821784556001805490931690851617909155604051849284929133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050506001600160a01b0393841660805250600280549284166001600160a01b03199384161790556003805491909316911617905562000199565b6001600160a01b03811681146200011657600080fd5b50565b600080600080600060a086880312156200013257600080fd5b85516200013f8162000100565b6020870151909550620001528162000100565b6040870151909450620001658162000100565b6060870151909350620001788162000100565b60808701519092506200018b8162000100565b809150509295509295909350565b60805161100b620001bc600039600081816103120152610770015261100b6000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063b9be44ac116100a2578063dde684a511610071578063dde684a514610278578063ef5cfb8c146102d4578063f046ee5c146102e7578063f2fde38b146102fa578063f7c618c11461030d57600080fd5b8063b9be44ac1461021b578063bf7e214f1461022e578063c2ee3a0814610241578063cc6bc1011461025057600080fd5b80637fb5ad38116100de5780637fb5ad381461019c5780638da5cb5b146101ca5780638fb00913146101f5578063ab5497d71461020857600080fd5b8063116139d3146101105780635a826df314610161578063715cad16146101765780637a9e5e4b14610189575b600080fd5b61014461011e366004610e06565b60066020908152600092835260408084209091529082529020546001600160e01b031681565b6040516001600160e01b0390911681526020015b60405180910390f35b61017461016f366004610e3f565b610334565b005b610174610184366004610e3f565b6103b9565b610174610197366004610e3f565b6104c9565b6101bc6101aa366004610e3f565b60046020526000908152604090205481565b604051908152602001610158565b6000546101dd906001600160a01b031681565b6040516001600160a01b039091168152602001610158565b610174610203366004610e3f565b6105b3565b6003546101dd906001600160a01b031681565b6101bc610229366004610e06565b61062f565b6001546101dd906001600160a01b031681565b610144670de0b6b3a764000081565b61026361025e366004610e63565b6106a5565b60408051928352602083019190915201610158565b6102b0610286366004610e3f565b6005602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b604080516001600160e01b03909316835263ffffffff909116602083015201610158565b6101746102e2366004610e3f565b61072e565b6002546101dd906001600160a01b031681565b610174610308366004610e3f565b6107e2565b6101dd7f000000000000000000000000000000000000000000000000000000000000000081565b61034a336000356001600160e01b03191661085f565b61036f5760405162461bcd60e51b815260040161036690610eae565b60405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517ff2fb4350e8466c152b500f8e58c0c23f01bbc332dc82f5375267e70b5f50f19990600090a250565b6103cf336000356001600160e01b03191661085f565b6103eb5760405162461bcd60e51b815260040161036690610eae565b6001600160a01b0381166000908152600560205260409020546001600160e01b0316156104455760405162461bcd60e51b8152602060048201526008602482015267737472617465677960c01b6044820152606401610366565b604080518082018252670de0b6b3a7640000815263ffffffff42811660208084019182526001600160a01b0386166000818152600590925285822094519251909316600160e01b026001600160e01b03929092169190911790925591517f69887873d46778fb35539b0a9992d9176ca03c1820b0afb538bc3a6f63326b109190a250565b6000546001600160a01b031633148061055e575060015460405163b700961360e01b81526001600160a01b039091169063b70096139061051d90339030906001600160e01b03196000351690600401610ed4565b602060405180830381865afa15801561053a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055e9190610f01565b61056757600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6105c9336000356001600160e01b03191661085f565b6105e55760405162461bcd60e51b815260040161036690610eae565b600280546001600160a01b0319166001600160a01b0383169081179091556040517ff1ba364f52e65f08563196b608289b1da2a923cdd0aa7e20dfe664c4ad294c9590600090a250565b6001600160a01b03821660009081526005602090815260408083208151808301909252546001600160e01b038116808352600160e01b90910463ffffffff16928201929092529061068457600091505061069f565b61068e8482610909565b905061069b848483610b23565b9150505b92915050565b6001600160a01b03831660009081526005602090815260408083208151808301909252546001600160e01b038116808352600160e01b90910463ffffffff169282019290925282916106fe576000809250925050610726565b6107088682610909565b9050610715868683610b23565b610720878684610b23565b92509250505b935093915050565b6001600160a01b03811660009081526004602052604090205480156107de576001600160a01b0380831660009081526004602052604081205560025461079a917f0000000000000000000000000000000000000000000000000000000000000000811691168484610d52565b816001600160a01b03167f1f89f96333d3133000ee447473151fa9606543368f02271c9d95ae14f13bcc67826040516107d591815260200190565b60405180910390a25b5050565b6107f8336000356001600160e01b03191661085f565b6108145760405162461bcd60e51b815260040161036690610eae565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6001546000906001600160a01b031680158015906108e9575060405163b700961360e01b81526001600160a01b0382169063b7009613906108a890879030908890600401610ed4565b602060405180830381865afa1580156108c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e99190610f01565b8061069b57506000546001600160a01b0385811691161491505092915050565b6040805180820190915260008082526020820152600254602083015160405163b334db7b60e01b81526001600160a01b03868116600483015263ffffffff9092166024820152600092919091169063b334db7b906044016020604051808303816000875af115801561097f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a39190610f23565b83925090508015610b1c576003546000906001600160a01b0316610a2857846001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a239190610f23565b610a96565b600354604051631e1932fb60e01b81526001600160a01b03878116600483015290911690631e1932fb90602401602060405180830381865afa158015610a72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a969190610f23565b604080518082019091529091508082610ab7670de0b6b3a764000086610f52565b610ac19190610f71565b8651610acd9190610f93565b6001600160e01b03908116825263ffffffff4281166020938401526001600160a01b03891660009081526005845260409020845193850151909116600160e01b02929091169190911790559250505b5092915050565b80516001600160a01b038481166000908152600660209081526040808320938716835292905290812080546001600160e01b038085166001600160e01b03198316179092559192911680610b7c5750670de0b6b3a76400005b6000610b888284610fbe565b6003549091506000906001600160a01b0316610c0d576040516370a0823160e01b81526001600160a01b0388811660048301528916906370a0823190602401602060405180830381865afa158015610be4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c089190610f23565b610c83565b600354604051631a50ef2f60e01b81526001600160a01b038a81166004830152898116602483015290911690631a50ef2f90604401602060405180830381865afa158015610c5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c839190610f23565b90506000670de0b6b3a7640000610ca36001600160e01b03851684610f52565b610cad9190610f71565b6001600160a01b03891660009081526004602052604081205491925090610cd5908390610fe6565b6001600160a01b03808b16600081815260046020526040908190208490555192935091908c16907f35a61f3c719e8f59f636c336e563ba74f667fadafcc80d709231ca8bb59eecce90610d3d9086908b909182526001600160e01b0316602082015260400190565b60405180910390a39998505050505050505050565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b03841660248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080610de75760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610366565b5050505050565b6001600160a01b0381168114610e0357600080fd5b50565b60008060408385031215610e1957600080fd5b8235610e2481610dee565b91506020830135610e3481610dee565b809150509250929050565b600060208284031215610e5157600080fd5b8135610e5c81610dee565b9392505050565b600080600060608486031215610e7857600080fd5b8335610e8381610dee565b92506020840135610e9381610dee565b91506040840135610ea381610dee565b809150509250925092565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215610f1357600080fd5b81518015158114610e5c57600080fd5b600060208284031215610f3557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610f6c57610f6c610f3c565b500290565b600082610f8e57634e487b7160e01b600052601260045260246000fd5b500490565b60006001600160e01b03828116848216808303821115610fb557610fb5610f3c565b01949350505050565b60006001600160e01b0383811690831681811015610fde57610fde610f3c565b039392505050565b60008219821115610ff957610ff9610f3c565b50019056fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_rewardToken";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "_flywheelRewards";
            readonly type: "address";
            readonly internalType: "contract IFlywheelRewards";
        }, {
            readonly name: "_flywheelBooster";
            readonly type: "address";
            readonly internalType: "contract IFlywheelBooster";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_authority";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ONE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint224";
            readonly internalType: "uint224";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "accrue";
        readonly inputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "accrue";
        readonly inputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "secondUser";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addStrategyForRewards";
        readonly inputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "authority";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "claimRewards";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "flywheelBooster";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IFlywheelBooster";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "flywheelRewards";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IFlywheelRewards";
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
        readonly name: "rewardToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rewardsAccrued";
        readonly inputs: readonly [{
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
        readonly name: "setAuthority";
        readonly inputs: readonly [{
            readonly name: "newAuthority";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setBooster";
        readonly inputs: readonly [{
            readonly name: "newBooster";
            readonly type: "address";
            readonly internalType: "contract IFlywheelBooster";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setFlywheelRewards";
        readonly inputs: readonly [{
            readonly name: "newFlywheelRewards";
            readonly type: "address";
            readonly internalType: "contract IFlywheelRewards";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "strategyState";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }];
        readonly outputs: readonly [{
            readonly name: "index";
            readonly type: "uint224";
            readonly internalType: "uint224";
        }, {
            readonly name: "lastUpdatedTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly stateMutability: "view";
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
        readonly name: "userIndex";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint224";
            readonly internalType: "uint224";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "AccrueRewards";
        readonly inputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "rewardsDelta";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "rewardsIndex";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AddStrategy";
        readonly inputs: readonly [{
            readonly name: "newStrategy";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AuthorityUpdated";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAuthority";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract Authority";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ClaimRewards";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FlywheelBoosterUpdate";
        readonly inputs: readonly [{
            readonly name: "newBooster";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FlywheelRewardsUpdate";
        readonly inputs: readonly [{
            readonly name: "newFlywheelRewards";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "user";
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
    }];
    static createInterface(): FlywheelCoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FlywheelCore;
}
export {};
