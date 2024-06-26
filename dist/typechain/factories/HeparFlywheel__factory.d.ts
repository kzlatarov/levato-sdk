import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HeparFlywheel, HeparFlywheelInterface } from "../HeparFlywheel";
type HeparFlywheelConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HeparFlywheel__factory extends ContractFactory {
    constructor(...args: HeparFlywheelConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<HeparFlywheel>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): HeparFlywheel;
    connect(signer: Signer): HeparFlywheel__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001961001e565b6100dd565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116146100db576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b611964806100ec6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80638da5cb5b116100b8578063c96679fe1161007c578063c96679fe146102c6578063e30c3978146102f1578063ef5cfb8c14610302578063f046ee5c14610315578063f2fde38b14610328578063f7c618c11461033b57600080fd5b80638da5cb5b146102545780638fb0091314610265578063a8c62e7614610278578063ab5497d71461028b578063b9be44ac1461029e57600080fd5b80636680ac0b1161010a5780636680ac0b146101de578063715018a6146101ff578063798ced741461020757806379ba50971461021a5780637fb5ad3814610222578063877887821461024b57600080fd5b806310509aa91461014757806311b4e2531461015c5780631459457a1461018d57806346904840146101a05780635a826df3146101cb575b600080fd5b61015a61015536600461157b565b61034e565b005b609e54604080516001600160e01b0383168152600160e01b90920463ffffffff166020830152015b60405180910390f35b61015a61019b3660046115ab565b610364565b6098546101b3906001600160a01b031681565b6040516001600160a01b039091168152602001610184565b61015a6101d936600461161c565b6104ec565b6101f16101ec36600461161c565b61053e565b604051908152602001610184565b61015a610598565b61015a61021536600461161c565b6105ac565b61015a6105c0565b6101f161023036600461161c565b6001600160a01b03166000908152609d602052604090205490565b6101f160975481565b6033546001600160a01b03166101b3565b61015a61027336600461161c565b610637565b609a546101b3906001600160a01b031681565b609c546101b3906001600160a01b031681565b6102b16102ac366004611639565b610737565b60408051928352602083019190915201610184565b6102d96102d436600461161c565b6107a6565b6040516001600160e01b039091168152602001610184565b6065546001600160a01b03166101b3565b61015a61031036600461161c565b6107ca565b609b546101b3906001600160a01b031681565b61015a61033636600461161c565b610860565b6099546101b3906001600160a01b031681565b6103566108d1565b610360828261092b565b5050565b600054610100900460ff16158080156103845750600054600160ff909116105b8061039e5750303b15801561039e575060005460ff166001145b6104065760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610429576000805461ff0019166101001790555b610431610a14565b609980546001600160a01b038089166001600160a01b031992831617909255609b8054888416908316179055609c80549287169290911691909117905561047783610a43565b67016345785d8a0000609755609880546001600160a01b0319166001600160a01b03851617905580156104e4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b6104f46108d1565b609c80546001600160a01b0319166001600160a01b0383169081179091556040517ff2fb4350e8466c152b500f8e58c0c23f01bbc332dc82f5375267e70b5f50f19990600090a250565b60408051808201909152609e546001600160e01b038116808352600160e01b90910463ffffffff1660208301526000919061057c5750600092915050565b61058581610a5c565b90506105918382610d84565b9392505050565b6105a06108d1565b6105aa6000610a43565b565b6105b46108d1565b6105bd816110af565b50565b60655433906001600160a01b0316811461062e5760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b60648201526084016103fd565b6105bd81610a43565b61063f6108d1565b609b546001600160a01b0316156106ed57609954609b546040516370a0823160e01b81526001600160a01b03918216600482015260009291909116906370a0823190602401602060405180830381865afa1580156106a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c59190611667565b905080156106eb57609b546099546106eb916001600160a01b03918216911684846111f4565b505b609b80546001600160a01b0319166001600160a01b0383169081179091556040517ff1ba364f52e65f08563196b608289b1da2a923cdd0aa7e20dfe664c4ad294c9590600090a250565b60408051808201909152609e546001600160e01b038116808352600160e01b90910463ffffffff166020830152600091829161077a57600080925092505061079f565b61078381610a5c565b905061078f8582610d84565b6107998583610d84565b92509250505b9250929050565b6001600160a01b03166000908152609f60205260409020546001600160e01b031690565b6001600160a01b0381166000908152609d60205260409020548015610360576001600160a01b038083166000908152609d6020526040812055609b5460995461081992908116911684846111f4565b816001600160a01b03167f1f89f96333d3133000ee447473151fa9606543368f02271c9d95ae14f13bcc678260405161085491815260200190565b60405180910390a25050565b6108686108d1565b606580546001600160a01b0383166001600160a01b031990911681179091556108996033546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b6033546001600160a01b031633146105aa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103fd565b60975460985460408051928352602083018590526001600160a01b0391821690830152821660608201527fb3b62da5184b9e7e2f5d280014bb485d4444b66738025e5fb5738bbddcb6b8489060800160405180910390a16098546001600160a01b038281169116146109ed576098546001600160a01b039081166000908152609d6020526040808220549284168252812080549091906109cc908490611696565b90915550506098546001600160a01b03166000908152609d60205260408120555b609791909155609880546001600160a01b0319166001600160a01b03909216919091179055565b600054610100900460ff16610a3b5760405162461bcd60e51b81526004016103fd906116ae565b6105aa611254565b606580546001600160a01b03191690556105bd81611284565b6040805180820190915260008082526020820152609b54609a54602084015160405163b334db7b60e01b81526001600160a01b03928316600482015263ffffffff9091166024820152600092919091169063b334db7b906044016020604051808303816000875af1158015610ad5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af99190611667565b83925090508015610d7e57609c546000906001600160a01b0316610b9357609a60009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8e9190611667565b610c03565b609c54609a54604051631e1932fb60e01b81526001600160a01b039182166004820152911690631e1932fb90602401602060405180830381865afa158015610bdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c039190611667565b90506000670de0b6b3a76400006001600160e01b031660975484610c2791906116f9565b610c319190611718565b6098546001600160a01b03166000908152609d6020526040812080549293508392909190610c60908490611696565b90915550610c709050818461173a565b925060008215610d1c57610d1983609a60009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf59190611751565b610d0090600a611858565b610d0a90876116f9565b610d149190611718565b6112d6565b90505b6040518060400160405280828860000151610d379190611867565b6001600160e01b03168152602001610d4e426112ec565b63ffffffff90811690915281516020830151909116600160e01b026001600160e01b0390911617609e5594505050505b50919050565b805160009081610d93856107a6565b6001600160a01b0386166000908152609f6020526040902080546001600160e01b0319166001600160e01b03858116919091179091559091508116610e4f576099546040805163313ce56760e01b81529051610e4c926001600160a01b03169163313ce5679160048083019260209291908290030181865afa158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e419190611751565b610d1490600a611858565b90505b6000610e5b8284611892565b609c549091506000906001600160a01b0316610ee457609a546040516370a0823160e01b81526001600160a01b038981166004830152909116906370a0823190602401602060405180830381865afa158015610ebb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edf9190611667565b610f5c565b609c54609a54604051631a50ef2f60e01b81526001600160a01b0391821660048201528982166024820152911690631a50ef2f90604401602060405180830381865afa158015610f38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5c9190611667565b90506000609a60009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd79190611751565b610fe290600a611858565b610ff5836001600160e01b0386166116f9565b610fff9190611718565b90506000816110238a6001600160a01b03166000908152609d602052604090205490565b61102d9190611696565b6001600160a01b03808b166000818152609d602052604090819020849055609a54905193945090929116907f35a61f3c719e8f59f636c336e563ba74f667fadafcc80d709231ca8bb59eecce906110999086908b909182526001600160e01b0316602082015260400190565b60405180910390a3955050505050505b92915050565b60408051808201909152609e546001600160e01b038116808352600160e01b90910463ffffffff166020830152156111145760405162461bcd60e51b8152602060048201526008602482015267737472617465677960c01b60448201526064016103fd565b6040805180820180835260995463313ce56760e01b909152915190918291611168916001600160a01b03169063313ce567906044808601916020918188030181865afa158015610e1d573d6000803e3d6000fd5b6001600160e01b0316815260200161117f426112ec565b63ffffffff908116909152815160209092015116600160e01b026001600160e01b0390911617609e55609a80546001600160a01b0384166001600160a01b031990911681179091556040517f3412691e1ea2503d6eec15597247048016213c19646b73d4320a20c790b67ee290600090a25050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261124e9085906112ff565b50505050565b600054610100900460ff1661127b5760405162461bcd60e51b81526004016103fd906116ae565b6105aa33610a43565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000600160e01b82106112e857600080fd5b5090565b600064010000000082106112e857600080fd5b6000611354826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113d99092919063ffffffff16565b905080516000148061137557508080602001905181019061137591906118ba565b6113d45760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103fd565b505050565b60606113e884846000856113f0565b949350505050565b6060824710156114515760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016103fd565b600080866001600160a01b0316858760405161146d9190611908565b60006040518083038185875af1925050503d80600081146114aa576040519150601f19603f3d011682016040523d82523d6000602084013e6114af565b606091505b50915091506114c0878383876114cb565b979650505050505050565b60608315611537578251611530576001600160a01b0385163b6115305760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103fd565b50816113e8565b6113e8838381511561154c5781518083602001fd5b8060405162461bcd60e51b81526004016103fd9190611924565b6001600160a01b03811681146105bd57600080fd5b6000806040838503121561158e57600080fd5b8235915060208301356115a081611566565b809150509250929050565b600080600080600060a086880312156115c357600080fd5b85356115ce81611566565b945060208601356115de81611566565b935060408601356115ee81611566565b925060608601356115fe81611566565b9150608086013561160e81611566565b809150509295509295909350565b60006020828403121561162e57600080fd5b813561059181611566565b6000806040838503121561164c57600080fd5b823561165781611566565b915060208301356115a081611566565b60006020828403121561167957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156116a9576116a9611680565b500190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600081600019048311821515161561171357611713611680565b500290565b60008261173557634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561174c5761174c611680565b500390565b60006020828403121561176357600080fd5b815160ff8116811461059157600080fd5b600181815b808511156117af57816000190482111561179557611795611680565b808516156117a257918102915b93841c9390800290611779565b509250929050565b6000826117c6575060016110a9565b816117d3575060006110a9565b81600181146117e957600281146117f35761180f565b60019150506110a9565b60ff84111561180457611804611680565b50506001821b6110a9565b5060208310610133831016604e8410600b8410161715611832575081810a6110a9565b61183c8383611774565b806000190482111561185057611850611680565b029392505050565b600061059160ff8416836117b7565b60006001600160e01b0382811684821680830382111561188957611889611680565b01949350505050565b60006001600160e01b03838116908316818110156118b2576118b2611680565b039392505050565b6000602082840312156118cc57600080fd5b8151801515811461059157600080fd5b60005b838110156118f75781810151838201526020016118df565b8381111561124e5750506000910152565b6000825161191a8184602087016118dc565b9190910192915050565b60208152600082518060208401526119438160408501602087016118dc565b601f01601f1916919091016040019291505056fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ERC20Upgradeable";
            readonly name: "strategy";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardsDelta";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardsIndex";
            readonly type: "uint256";
        }];
        readonly name: "AccrueRewards";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "ClaimRewards";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newBooster";
            readonly type: "address";
        }];
        readonly name: "FlywheelBoosterUpdate";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newFlywheelRewards";
            readonly type: "address";
        }];
        readonly name: "FlywheelRewardsUpdate";
        readonly type: "event";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newStrategy";
            readonly type: "address";
        }];
        readonly name: "SetStrategy";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oldPerformanceFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newPerformanceFee";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldFeeRecipient";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newFeeRecipient";
            readonly type: "address";
        }];
        readonly name: "UpdatedFeeSettings";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "acceptOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "accrue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "secondUser";
            readonly type: "address";
        }];
        readonly name: "accrue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "claimRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feeRecipient";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "flywheelBooster";
        readonly outputs: readonly [{
            readonly internalType: "contract IFlywheelBooster";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "flywheelRewards";
        readonly outputs: readonly [{
            readonly internalType: "contract IFlywheelRewards";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20Upgradeable";
            readonly name: "_rewardToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IFlywheelRewards";
            readonly name: "_flywheelRewards";
            readonly type: "address";
        }, {
            readonly internalType: "contract IFlywheelBooster";
            readonly name: "_flywheelBooster";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_owner";
            readonly type: "address";
        }, {
            readonly internalType: "contract ERC20Upgradeable";
            readonly name: "_strategy";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "performanceFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
        readonly inputs: readonly [];
        readonly name: "rewardToken";
        readonly outputs: readonly [{
            readonly internalType: "contract ERC20Upgradeable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "rewardsAccrued";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IFlywheelBooster";
            readonly name: "newBooster";
            readonly type: "address";
        }];
        readonly name: "setBooster";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IFlywheelRewards";
            readonly name: "newFlywheelRewards";
            readonly type: "address";
        }];
        readonly name: "setFlywheelRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20Upgradeable";
            readonly name: "_strategy";
            readonly type: "address";
        }];
        readonly name: "setStrategyForRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "strategy";
        readonly outputs: readonly [{
            readonly internalType: "contract ERC20Upgradeable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "strategyState";
        readonly outputs: readonly [{
            readonly internalType: "uint224";
            readonly name: "index";
            readonly type: "uint224";
        }, {
            readonly internalType: "uint32";
            readonly name: "lastUpdatedTimestamp";
            readonly type: "uint32";
        }];
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_performanceFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_feeRecipient";
            readonly type: "address";
        }];
        readonly name: "updateFeeSettings";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "userIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint224";
            readonly name: "";
            readonly type: "uint224";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): HeparFlywheelInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HeparFlywheel;
}
export {};
