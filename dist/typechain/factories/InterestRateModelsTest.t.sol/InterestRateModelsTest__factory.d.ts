import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { InterestRateModelsTest, InterestRateModelsTestInterface } from "../../InterestRateModelsTest.t.sol/InterestRateModelsTest";
type InterestRateModelsTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class InterestRateModelsTest__factory extends ContractFactory {
    constructor(...args: InterestRateModelsTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<InterestRateModelsTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): InterestRateModelsTest;
    connect(signer: Signer): InterestRateModelsTest__factory;
    static readonly bytecode = "0x608060405260008054600160ff19918216811790925560048054909116909117905534801561002d57600080fd5b50610fda8061003d6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806385226c811161007157806385226c81146100fb578063916a17c614610110578063b5508aa914610118578063ba414fa614610120578063e20c9f7114610138578063fa7626d41461014057600080fd5b80631ed7831c146100ae5780633e5e3c23146100cc5780633f7286f4146100d4578063522c6c5e146100dc57806366d9a9a0146100e6575b600080fd5b6100b661014d565b6040516100c391906108f8565b60405180910390f35b6100b66101af565b6100b661020f565b6100e461026f565b005b6100ee6103eb565b6040516100c39190610945565b6101036104da565b6040516100c39190610a28565b6100ee6105aa565b610103610690565b610128610760565b60405190151581526020016100c3565b6100b661088b565b6000546101289060ff1681565b6060600d8054806020026020016040519081016040528092919081815260200182805480156101a557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610187575b5050505050905090565b6060600f8054806020026020016040519081016040528092919081815260200182805480156101a5576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610187575050505050905090565b6060600e8054806020026020016040519081016040528092919081815260200182805480156101a5576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610187575050505050905090565b6040516301e133809066470de4df820000906701aa535d3d0c000090670429d069189e000090670b1a2bc2ec5000009060009085908590859085906102b3906108eb565b938452602084019290925260408301526060820152608001604051809103906000f0801580156102e7573d6000803e3d6000fd5b506040516315f2405360e01b815268056bc75e2d63100000600482018190526802b5e3af16b1880000602483018190526000604484018190529394509092909181906001600160a01b038616906315f2405390606401602060405180830381865afa15801561035a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037e9190610aa2565b90507fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a8816040516103d791906040808252600b908201526a626f72726f77207261746560a81b6060820152602081019190915260800190565b60405180910390a150505050505050505050565b60606012805480602002602001604051908101604052809291908181526020016000905b828210156104d15760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156104b957602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161047b5790505b5050505050815250508152602001906001019061040f565b50505050905090565b60606011805480602002602001604051908101604052809291908181526020016000905b828210156104d157838290600052602060002001805461051d90610abb565b80601f016020809104026020016040519081016040528092919081815260200182805461054990610abb565b80156105965780601f1061056b57610100808354040283529160200191610596565b820191906000526020600020905b81548152906001019060200180831161057957829003601f168201915b5050505050815260200190600101906104fe565b60606013805480602002602001604051908101604052809291908181526020016000905b828210156104d15760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561067857602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161063a5790505b505050505081525050815260200190600101906105ce565b60606010805480602002602001604051908101604052809291908181526020016000905b828210156104d15783829060005260206000200180546106d390610abb565b80601f01602080910402602001604051908101604052809291908181526020018280546106ff90610abb565b801561074c5780601f106107215761010080835404028352916020019161074c565b820191906000526020600020905b81548152906001019060200180831161072f57829003601f168201915b5050505050815260200190600101906106b4565b60008054610100900460ff16156107805750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156108865760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909161080e917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001610af6565b60408051601f198184030181529082905261082891610b27565b6000604051808303816000865af19150503d8060008114610865576040519150601f19603f3d011682016040523d82523d6000602084013e61086a565b606091505b50915050808060200190518101906108829190610b43565b9150505b919050565b6060600c8054806020026020016040519081016040528092919081815260200182805480156101a5576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610187575050505050905090565b61046180610b6d83390190565b6020808252825182820181905260009190848201906040850190845b818110156109395783516001600160a01b031683529284019291840191600101610914565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156109e957898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b808310156109d45783516001600160e01b0319168252928b019260019290920191908b01906109aa565b50978a0197955050509187019160010161096d565b50919998505050505050505050565b60005b83811015610a135781810151838201526020016109fb565b83811115610a22576000848401525b50505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610a9557878503603f1901845281518051808752610a76818989018a85016109f8565b601f01601f191695909501860194509285019290850190600101610a4f565b5092979650505050505050565b600060208284031215610ab457600080fd5b5051919050565b600181811c90821680610acf57607f821691505b60208210811415610af057634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160e01b0319831681528151600090610b198160048501602087016109f8565b919091016004019392505050565b60008251610b398184602087016109f8565b9190910192915050565b600060208284031215610b5557600080fd5b81518015158114610b6557600080fd5b939250505056fe608060405234801561001057600080fd5b5060405161046138038061046183398101604081905261002f91610094565b60028490556001839055600382905560048190556040805185815260208101859052908101839052606081018290527f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d9060800160405180910390a1505050506100ca565b600080600080608085870312156100aa57600080fd5b505082516020840151604085015160609095015191969095509092509050565b610388806100d96000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80636e71e2d81161005b5780636e71e2d8146100cd578063a385fb96146100e0578063b8168816146100e9578063fd2da339146100fc57600080fd5b806315f240531461008d5780631b3ed722146100b25780631f68f20a146100bb57806337525928146100c4575b600080fd5b6100a061009b366004610297565b610105565b60405190815260200160405180910390f35b6100a060015481565b6100a060025481565b6100a060035481565b6100a06100db366004610297565b6101d3565b6100a060005481565b6100a06100f73660046102c3565b61021b565b6100a060045481565b6000806101138585856101d3565b9050600454811161015457600254670de0b6b3a764000060015483610138919061030b565b610142919061032a565b61014c919061034c565b9150506101cc565b6000600254670de0b6b3a7640000600154600454610172919061030b565b61017c919061032a565b610186919061034c565b90506000600454836101989190610364565b905081670de0b6b3a7640000600354836101b2919061030b565b6101bc919061032a565b6101c6919061034c565b93505050505b9392505050565b6000826101e2575060006101cc565b816101ed848661034c565b6101f79190610364565b61020984670de0b6b3a764000061030b565b610213919061032a565b949350505050565b60008061023083670de0b6b3a7640000610364565b9050600061023f878787610105565b90506000670de0b6b3a7640000610256848461030b565b610260919061032a565b9050670de0b6b3a7640000816102778a8a8a6101d3565b610281919061030b565b61028b919061032a565b98975050505050505050565b6000806000606084860312156102ac57600080fd5b505081359360208301359350604090920135919050565b600080600080608085870312156102d957600080fd5b5050823594602084013594506040840135936060013592509050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610325576103256102f5565b500290565b60008261034757634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561035f5761035f6102f5565b500190565b600082821015610376576103766102f5565b50039056fea164736f6c634300080a000aa164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "IS_TEST";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "excludeArtifacts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedArtifacts_";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "excludeContracts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedContracts_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "excludeSenders";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedSenders_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "failed";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "targetArtifactSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedArtifactSelectors_";
            readonly type: "tuple[]";
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "selectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetArtifacts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedArtifacts_";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetContracts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedContracts_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedSelectors_";
            readonly type: "tuple[]";
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "selectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetSenders";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedSenders_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "testJumpRateModel";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "log";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_address";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_array";
        readonly inputs: readonly [{
            readonly name: "val";
            readonly type: "uint256[]";
            readonly indexed: false;
            readonly internalType: "uint256[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_array";
        readonly inputs: readonly [{
            readonly name: "val";
            readonly type: "int256[]";
            readonly indexed: false;
            readonly internalType: "int256[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_array";
        readonly inputs: readonly [{
            readonly name: "val";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_bytes";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_bytes32";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_int";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_address";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_array";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "uint256[]";
            readonly indexed: false;
            readonly internalType: "uint256[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_array";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "int256[]";
            readonly indexed: false;
            readonly internalType: "int256[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_array";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_bytes";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_bytes32";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_decimal_int";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_decimal_uint";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_int";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_string";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_uint";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_string";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_uint";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "logs";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): InterestRateModelsTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InterestRateModelsTest;
}
export {};
