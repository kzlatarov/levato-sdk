import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BaseTest, BaseTestInterface } from "../BaseTest";
type BaseTestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BaseTest__factory extends ContractFactory {
    constructor(...args: BaseTestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<BaseTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): BaseTest;
    connect(signer: Signer): BaseTest__factory;
    static readonly bytecode = "0x60806040526000805460ff199081166001908117909255600480549091169091179055602480546001600160a01b0319908116730d500b1d8e8ef31e21c99d1db9a6444d3adf127017909155602580548216732791bca1f2de4661ed88a30c99a7a9449aa84174179055602680548216738f3cf7ad23cd3cadbd9735aff958023239c6a06317905560278054821673fa68fb4628dff1028cfec22b4162fccd0d45efb6179055602880548216731bfd67037b42cf73acf2047067bd4f2c47d9bfd617905560298054821673c2132d05d31c914a87c6611c10748aeb04b58e8f179055602a80548216737ceb23fd6bc0add59e62ac25578270cff1b9f619179055602b80548216733a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4179055602c805482167303b54a6e9a984069379fae1a4fc4dbae93b3bccd179055602d8054821673d17cb0f162f133e339c0bbfc18c36c357e681d6b179055602e80548216734200000000000000000000000000000000000006179055602f8054821673d988097fb8612cc24eec14542bc03424c656005f1790556030805490911673fb3323e24743caf4add0fdccfb268565c06855561790553480156101c057600080fd5b5061111d806101d06000396000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c8063827906a911610125578063ce9b7930116100ad578063f887ea401161007c578063f887ea4014610441578063f8bbc87514610454578063fa6c4ea614610467578063fa7626d41461047a578063fb41be161461048757600080fd5b8063ce9b793014610400578063d1d8bce714610413578063e20c9f7114610426578063f4b9fa751461042e57600080fd5b806395ff4075116100f457806395ff4075146103a75780639a574de6146103ba578063b44f6052146103cd578063b5508aa9146103e0578063ba414fa6146103e857600080fd5b8063827906a914610364578063839c51b81461037757806385226c811461038a578063916a17c61461039f57600080fd5b80633d3b6f35116101a85780633f7286f4116101775780633f7286f41461030e5780633fc8cef31461031657806366d9a9a014610329578063751f74561461033e5780637b1039991461035157600080fd5b80633d3b6f35146102cd5780633e413bee146102e05780633e47158c146102f35780633e5e3c231461030657600080fd5b806328e8fe7d116101e457806328e8fe7d146102815780632a7848d1146102945780632f48ab7d146102a75780633cdc5389146102ba57600080fd5b80630c08af4a1461021657806310e8ef4714610246578063112666b7146102595780631ed7831c1461026c575b600080fd5b602f54610229906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b603054610229906001600160a01b031681565b602154610229906001600160a01b031681565b61027461049a565b60405161023d9190610d92565b602254610229906001600160a01b031681565b602b54610229906001600160a01b031681565b602954610229906001600160a01b031681565b602854610229906001600160a01b031681565b602054610229906001600160a01b031681565b602554610229906001600160a01b031681565b602354610229906001600160a01b031681565b6102746104fc565b61027461055c565b602a54610229906001600160a01b031681565b6103316105bc565b60405161023d9190610ddf565b601c54610229906001600160a01b031681565b601d54610229906001600160a01b031681565b602754610229906001600160a01b031681565b602e54610229906001600160a01b031681565b6103926106ab565b60405161023d9190610ec2565b61033161077b565b6102746103b5366004610f53565b610861565b6102746103c8366004610fb8565b61098f565b6102746103db366004610ffb565b610a52565b610392610adf565b6103f0610baf565b604051901515815260200161023d565b601f54610229906001600160a01b031681565b602c54610229906001600160a01b031681565b610274610cda565b602654610229906001600160a01b031681565b601e54610229906001600160a01b031681565b602d54610229906001600160a01b031681565b61027461047536600461102e565b610d3a565b6000546103f09060ff1681565b602454610229906001600160a01b031681565b6060600d8054806020026020016040519081016040528092919081815260200182805480156104f257602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104d4575b5050505050905090565b6060600f8054806020026020016040519081016040528092919081815260200182805480156104f2576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116104d4575050505050905090565b6060600e8054806020026020016040519081016040528092919081815260200182805480156104f2576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116104d4575050505050905090565b60606012805480602002602001604051908101604052809291908181526020016000905b828210156106a25760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561068a57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161064c5790505b505050505081525050815260200190600101906105e0565b50505050905090565b60606011805480602002602001604051908101604052809291908181526020016000905b828210156106a25783829060005260206000200180546106ee90611050565b80601f016020809104026020016040519081016040528092919081815260200182805461071a90611050565b80156107675780601f1061073c57610100808354040283529160200191610767565b820191906000526020600020905b81548152906001019060200180831161074a57829003601f168201915b5050505050815260200190600101906106cf565b60606013805480602002602001604051908101604052809291908181526020016000905b828210156106a25760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561084957602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161080b5790505b5050505050815250508152602001906001019061079f565b60408051600580825260c08201909252606091600091906020820160a080368337019050509050868160008151811061089c5761089c61108b565b60200260200101906001600160a01b031690816001600160a01b03168152505085816001815181106108d0576108d061108b565b60200260200101906001600160a01b031690816001600160a01b03168152505084816002815181106109045761090461108b565b60200260200101906001600160a01b031690816001600160a01b03168152505083816003815181106109385761093861108b565b60200260200101906001600160a01b031690816001600160a01b031681525050828160048151811061096c5761096c61108b565b6001600160a01b0390921660209283029190910190910152905095945050505050565b604080516003808252608082019092526060916000919060208201848036833701905050905084816000815181106109c9576109c961108b565b60200260200101906001600160a01b031690816001600160a01b03168152505083816001815181106109fd576109fd61108b565b60200260200101906001600160a01b031690816001600160a01b0316815250508281600281518110610a3157610a3161108b565b6001600160a01b039092166020928302919091019091015290509392505050565b604080516002808252606080830184529260009291906020830190803683370190505090508381600081518110610a8b57610a8b61108b565b60200260200101906001600160a01b031690816001600160a01b0316815250508281600181518110610abf57610abf61108b565b6001600160a01b0390921660209283029190910190910152905092915050565b60606010805480602002602001604051908101604052809291908181526020016000905b828210156106a2578382906000526020600020018054610b2290611050565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4e90611050565b8015610b9b5780601f10610b7057610100808354040283529160200191610b9b565b820191906000526020600020905b815481529060010190602001808311610b7e57829003601f168201915b505050505081526020019060010190610b03565b60008054610100900460ff1615610bcf5750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610cd55760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b82840152825180830384018152606083019093526000929091610c5d917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc4916080016110a1565b60408051601f1981840301815290829052610c77916110d2565b6000604051808303816000865af19150503d8060008114610cb4576040519150601f19603f3d011682016040523d82523d6000602084013e610cb9565b606091505b5091505080806020019051810190610cd191906110ee565b9150505b919050565b6060600c8054806020026020016040519081016040528092919081815260200182805480156104f2576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116104d4575050505050905090565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610d7457610d7461108b565b6001600160a01b039092166020928302919091019091015292915050565b6020808252825182820181905260009190848201906040850190845b81811015610dd35783516001600160a01b031683529284019291840191600101610dae565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015610e8357898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b80831015610e6e5783516001600160e01b0319168252928b019260019290920191908b0190610e44565b50978a01979550505091870191600101610e07565b50919998505050505050505050565b60005b83811015610ead578181015183820152602001610e95565b83811115610ebc576000848401525b50505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610f2f57878503603f1901845281518051808752610f10818989018a8501610e92565b601f01601f191695909501860194509285019290850190600101610ee9565b5092979650505050505050565b80356001600160a01b0381168114610cd557600080fd5b600080600080600060a08688031215610f6b57600080fd5b610f7486610f3c565b9450610f8260208701610f3c565b9350610f9060408701610f3c565b9250610f9e60608701610f3c565b9150610fac60808701610f3c565b90509295509295909350565b600080600060608486031215610fcd57600080fd5b610fd684610f3c565b9250610fe460208501610f3c565b9150610ff260408501610f3c565b90509250925092565b6000806040838503121561100e57600080fd5b61101783610f3c565b915061102560208401610f3c565b90509250929050565b60006020828403121561104057600080fd5b61104982610f3c565b9392505050565b600181811c9082168061106457607f821691505b6020821081141561108557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b6001600160e01b03198316815281516000906110c4816004850160208701610e92565b919091016004019392505050565b600082516110e4818460208701610e92565b9190910192915050565b60006020828403121561110057600080fd5b8151801515811461104957600080fdfea164736f6c634300080a000a";
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
        readonly name: "asArray";
        readonly inputs: readonly [{
            readonly name: "value0";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value1";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value2";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value3";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value4";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "asArray";
        readonly inputs: readonly [{
            readonly name: "value0";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value1";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value2";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "asArray";
        readonly inputs: readonly [{
            readonly name: "value0";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value1";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "asArray";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "dai";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "delegator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ICreditDelegator";
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
        readonly name: "irm";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract DefaultInterestRateStrategy";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "lens";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract LeveragedPositionsLens";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "lpf";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ILeveragedPositionsFactory";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maticx";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "modePool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "modeUsdc";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "modeWeth";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mpo";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract MasterPriceOracle";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proxyAdmin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "registry";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IFundersRegistry";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "router";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IFlashloanRouter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sammUsdrUsdc";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "stmatic";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "usdc";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "usdt";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "wbtc";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "weth";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "wmatic";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "wsteth";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
    static createInterface(): BaseTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseTest;
}
export {};
