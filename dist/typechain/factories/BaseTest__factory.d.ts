import { ContractFactory } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { BaseTest, BaseTestInterface } from "../BaseTest";
type BaseTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BaseTest__factory extends ContractFactory {
    constructor(...args: BaseTestConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BaseTest & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BaseTest__factory;
    static readonly bytecode = "0x60806040526000805460ff199081166001908117909255600480549091169091179055602480546001600160a01b0319908116730d500b1d8e8ef31e21c99d1db9a6444d3adf127017909155602580548216732791bca1f2de4661ed88a30c99a7a9449aa84174179055602680548216738f3cf7ad23cd3cadbd9735aff958023239c6a06317905560278054821673fa68fb4628dff1028cfec22b4162fccd0d45efb6179055602880548216731bfd67037b42cf73acf2047067bd4f2c47d9bfd617905560298054821673c2132d05d31c914a87c6611c10748aeb04b58e8f179055602a80548216737ceb23fd6bc0add59e62ac25578270cff1b9f619179055602b80548216733a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4179055602c805482167303b54a6e9a984069379fae1a4fc4dbae93b3bccd179055602d805490911673d17cb0f162f133e339c0bbfc18c36c357e681d6b17905534801561016657600080fd5b506110c3806101766000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806385226c811161010f578063d1d8bce7116100a2578063f8bbc87511610071578063f8bbc875146103fa578063fa6c4ea61461040d578063fa7626d414610420578063fb41be161461042d57600080fd5b8063d1d8bce7146103b9578063e20c9f71146103cc578063f4b9fa75146103d4578063f887ea40146103e757600080fd5b8063b44f6052116100de578063b44f605214610373578063b5508aa914610386578063ba414fa61461038e578063ce9b7930146103a657600080fd5b806385226c8114610330578063916a17c61461034557806395ff40751461034d5780639a574de61461036057600080fd5b80633e47158c1161018757806366d9a9a01161015657806366d9a9a0146102e2578063751f7456146102f75780637b1039991461030a578063827906a91461031d57600080fd5b80633e47158c146102ac5780633e5e3c23146102bf5780633f7286f4146102c75780633fc8cef3146102cf57600080fd5b80632f48ab7d116101c35780632f48ab7d146102605780633cdc5389146102735780633d3b6f35146102865780633e413bee1461029957600080fd5b8063112666b7146101f55780631ed7831c1461022557806328e8fe7d1461023a5780632a7848d11461024d575b600080fd5b602154610208906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61022d610440565b60405161021c9190610d38565b602254610208906001600160a01b031681565b602b54610208906001600160a01b031681565b602954610208906001600160a01b031681565b602854610208906001600160a01b031681565b602054610208906001600160a01b031681565b602554610208906001600160a01b031681565b602354610208906001600160a01b031681565b61022d6104a2565b61022d610502565b602a54610208906001600160a01b031681565b6102ea610562565b60405161021c9190610d85565b601c54610208906001600160a01b031681565b601d54610208906001600160a01b031681565b602754610208906001600160a01b031681565b610338610651565b60405161021c9190610e68565b6102ea610721565b61022d61035b366004610ef9565b610807565b61022d61036e366004610f5e565b610935565b61022d610381366004610fa1565b6109f8565b610338610a85565b610396610b55565b604051901515815260200161021c565b601f54610208906001600160a01b031681565b602c54610208906001600160a01b031681565b61022d610c80565b602654610208906001600160a01b031681565b601e54610208906001600160a01b031681565b602d54610208906001600160a01b031681565b61022d61041b366004610fd4565b610ce0565b6000546103969060ff1681565b602454610208906001600160a01b031681565b6060600d80548060200260200160405190810160405280929190818152602001828054801561049857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161047a575b5050505050905090565b6060600f805480602002602001604051908101604052809291908181526020018280548015610498576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161047a575050505050905090565b6060600e805480602002602001604051908101604052809291908181526020018280548015610498576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161047a575050505050905090565b60606012805480602002602001604051908101604052809291908181526020016000905b828210156106485760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561063057602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116105f25790505b50505050508152505081526020019060010190610586565b50505050905090565b60606011805480602002602001604051908101604052809291908181526020016000905b8282101561064857838290600052602060002001805461069490610ff6565b80601f01602080910402602001604051908101604052809291908181526020018280546106c090610ff6565b801561070d5780601f106106e25761010080835404028352916020019161070d565b820191906000526020600020905b8154815290600101906020018083116106f057829003601f168201915b505050505081526020019060010190610675565b60606013805480602002602001604051908101604052809291908181526020016000905b828210156106485760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156107ef57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116107b15790505b50505050508152505081526020019060010190610745565b60408051600580825260c08201909252606091600091906020820160a080368337019050509050868160008151811061084257610842611031565b60200260200101906001600160a01b031690816001600160a01b031681525050858160018151811061087657610876611031565b60200260200101906001600160a01b031690816001600160a01b03168152505084816002815181106108aa576108aa611031565b60200260200101906001600160a01b031690816001600160a01b03168152505083816003815181106108de576108de611031565b60200260200101906001600160a01b031690816001600160a01b031681525050828160048151811061091257610912611031565b6001600160a01b0390921660209283029190910190910152905095945050505050565b6040805160038082526080820190925260609160009190602082018480368337019050509050848160008151811061096f5761096f611031565b60200260200101906001600160a01b031690816001600160a01b03168152505083816001815181106109a3576109a3611031565b60200260200101906001600160a01b031690816001600160a01b03168152505082816002815181106109d7576109d7611031565b6001600160a01b039092166020928302919091019091015290509392505050565b604080516002808252606080830184529260009291906020830190803683370190505090508381600081518110610a3157610a31611031565b60200260200101906001600160a01b031690816001600160a01b0316815250508281600181518110610a6557610a65611031565b6001600160a01b0390921660209283029190910190910152905092915050565b60606010805480602002602001604051908101604052809291908181526020016000905b82821015610648578382906000526020600020018054610ac890610ff6565b80601f0160208091040260200160405190810160405280929190818152602001828054610af490610ff6565b8015610b415780601f10610b1657610100808354040283529160200191610b41565b820191906000526020600020905b815481529060010190602001808311610b2457829003601f168201915b505050505081526020019060010190610aa9565b60008054610100900460ff1615610b755750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610c7b5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b82840152825180830384018152606083019093526000929091610c03917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611047565b60408051601f1981840301815290829052610c1d91611078565b6000604051808303816000865af19150503d8060008114610c5a576040519150601f19603f3d011682016040523d82523d6000602084013e610c5f565b606091505b5091505080806020019051810190610c779190611094565b9150505b919050565b6060600c805480602002602001604051908101604052809291908181526020018280548015610498576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161047a575050505050905090565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610d1a57610d1a611031565b6001600160a01b039092166020928302919091019091015292915050565b6020808252825182820181905260009190848201906040850190845b81811015610d795783516001600160a01b031683529284019291840191600101610d54565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015610e2957898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b80831015610e145783516001600160e01b0319168252928b019260019290920191908b0190610dea565b50978a01979550505091870191600101610dad565b50919998505050505050505050565b60005b83811015610e53578181015183820152602001610e3b565b83811115610e62576000848401525b50505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610ed557878503603f1901845281518051808752610eb6818989018a8501610e38565b601f01601f191695909501860194509285019290850190600101610e8f565b5092979650505050505050565b80356001600160a01b0381168114610c7b57600080fd5b600080600080600060a08688031215610f1157600080fd5b610f1a86610ee2565b9450610f2860208701610ee2565b9350610f3660408701610ee2565b9250610f4460608701610ee2565b9150610f5260808701610ee2565b90509295509295909350565b600080600060608486031215610f7357600080fd5b610f7c84610ee2565b9250610f8a60208501610ee2565b9150610f9860408501610ee2565b90509250925092565b60008060408385031215610fb457600080fd5b610fbd83610ee2565b9150610fcb60208401610ee2565b90509250929050565b600060208284031215610fe657600080fd5b610fef82610ee2565b9392505050565b600181811c9082168061100a57607f821691505b6020821081141561102b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b6001600160e01b031983168152815160009061106a816004850160208701610e38565b919091016004019392505050565b6000825161108a818460208701610e38565b9190910192915050565b6000602082840312156110a657600080fd5b81518015158114610fef57600080fdfea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "log";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "log_address";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "val";
            readonly type: "uint256[]";
        }];
        readonly name: "log_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "int256[]";
            readonly name: "val";
            readonly type: "int256[]";
        }];
        readonly name: "log_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "val";
            readonly type: "address[]";
        }];
        readonly name: "log_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "log_bytes";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "log_bytes32";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly name: "log_int";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "val";
            readonly type: "address";
        }];
        readonly name: "log_named_address";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "val";
            readonly type: "uint256[]";
        }];
        readonly name: "log_named_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "int256[]";
            readonly name: "val";
            readonly type: "int256[]";
        }];
        readonly name: "log_named_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "val";
            readonly type: "address[]";
        }];
        readonly name: "log_named_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "val";
            readonly type: "bytes";
        }];
        readonly name: "log_named_bytes";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "val";
            readonly type: "bytes32";
        }];
        readonly name: "log_named_bytes32";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "val";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "decimals";
            readonly type: "uint256";
        }];
        readonly name: "log_named_decimal_int";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "val";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "decimals";
            readonly type: "uint256";
        }];
        readonly name: "log_named_decimal_uint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "val";
            readonly type: "int256";
        }];
        readonly name: "log_named_int";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "val";
            readonly type: "string";
        }];
        readonly name: "log_named_string";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "val";
            readonly type: "uint256";
        }];
        readonly name: "log_named_uint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "log_string";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "log_uint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "logs";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "IS_TEST";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "value0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "value1";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "value2";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "value3";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "value4";
            readonly type: "address";
        }];
        readonly name: "asArray";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "value0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "value1";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "value2";
            readonly type: "address";
        }];
        readonly name: "asArray";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "value0";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "value1";
            readonly type: "address";
        }];
        readonly name: "asArray";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "asArray";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "dai";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "delegator";
        readonly outputs: readonly [{
            readonly internalType: "contract ICreditDelegator";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeArtifacts";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "excludedArtifacts_";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeContracts";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "excludedContracts_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeSenders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "excludedSenders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "failed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "irm";
        readonly outputs: readonly [{
            readonly internalType: "contract DefaultInterestRateStrategy";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lens";
        readonly outputs: readonly [{
            readonly internalType: "contract LeveragedPositionsLens";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lpf";
        readonly outputs: readonly [{
            readonly internalType: "contract ILeveragedPositionsFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maticx";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "mpo";
        readonly outputs: readonly [{
            readonly internalType: "contract MasterPriceOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxyAdmin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "registry";
        readonly outputs: readonly [{
            readonly internalType: "contract IFundersRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "router";
        readonly outputs: readonly [{
            readonly internalType: "contract IFlashloanRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "sammUsdrUsdc";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stmatic";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetArtifactSelectors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "selectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly name: "targetedArtifactSelectors_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetArtifacts";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "targetedArtifacts_";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetContracts";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targetedContracts_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetSelectors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "selectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly name: "targetedSelectors_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetSenders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targetedSenders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "usdc";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "usdt";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wbtc";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "weth";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wmatic";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wsteth";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BaseTestInterface;
    static connect(address: string, runner?: ContractRunner | null): BaseTest;
}
export {};
