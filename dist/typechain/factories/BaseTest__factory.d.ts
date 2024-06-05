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
    static readonly bytecode = "0x60806040526000805460ff199081166001908117909255600480549091169091179055602680546001600160a01b0319908116730d500b1d8e8ef31e21c99d1db9a6444d3adf127017909155602780548216732791bca1f2de4661ed88a30c99a7a9449aa84174179055602880548216738f3cf7ad23cd3cadbd9735aff958023239c6a06317905560298054821673fa68fb4628dff1028cfec22b4162fccd0d45efb6179055602a80548216731bfd67037b42cf73acf2047067bd4f2c47d9bfd6179055602b8054821673c2132d05d31c914a87c6611c10748aeb04b58e8f179055602c80548216737ceb23fd6bc0add59e62ac25578270cff1b9f619179055602d80548216733a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4179055602e805482167303b54a6e9a984069379fae1a4fc4dbae93b3bccd179055602f8054821673d17cb0f162f133e339c0bbfc18c36c357e681d6b17905560308054821673420000000000000000000000000000000000000690811790915560318054831673833589fcd6edb6e08f4c7c32d4f71b54bda0291317905560328054831673628ff693426583d9a7fb391e54366292f509d457179055603380548316909117905560348054821673d988097fb8612cc24eec14542bc03424c656005f17905560358054821673cdd475325d6f564d27247d1dddbb0dac6fa0a5cf17905560368054821673f0f161fda2712db8b566946122a5af183995e2ed17905560378054821673fb3323e24743caf4add0fdccfb268565c068555617905560388054821673ba12222222228d8ba445958a75a0704d566bf2c817905560398054821673d60dd6981ec336fda40820f8ca5e99cd17dd25a0179055603a805482167334b83a3759ba4c9f99c339604181bf6bbded4c79179055603b8054821673bd8ccf3ebe4cc2d57962cdc2756b143ce0135a6b179055603c805482167371ef7eda2be775e5a7aa8afd02c45f059833e9d2179055603d80548216732be717340023c9e14c1bb12cb3ecbcfd3c3fb038179055603e8054821673d70254c3bad29504789714a7c69d60ec1127375c179055603f80549091167394812f2eea03a49869f95e1b5868c6f3206ee3d317905534801561033657600080fd5b506112a3806103466000396000f3fe608060405234801561001057600080fd5b50600436106102a05760003560e01c8063839c51b811610167578063ce9b7930116100ce578063f603124011610087578063f6031240146105b4578063f887ea40146105c7578063f8bbc875146105da578063fa6c4ea6146105ed578063fa7626d414610600578063fb41be161461060d57600080fd5b8063ce9b79301461054d578063cf2b962314610560578063d1d8bce714610573578063e20c9f7114610586578063eae245a41461058e578063f4b9fa75146105a157600080fd5b80639f73b4b6116101205780639f73b4b6146104e1578063a093a342146104f4578063b44f605214610507578063b5508aa91461051a578063ba414fa614610522578063c18035df1461053a57600080fd5b8063839c51b81461047857806385226c811461048b5780638c5c8726146104a0578063916a17c6146104b357806395ff4075146104bb5780639a574de6146104ce57600080fd5b80633e47158c1161020b57806366d9a9a0116101c457806366d9a9a01461040457806369f5352b14610419578063751f74561461042c578063773101c31461043f5780637b10399914610452578063827906a91461046557600080fd5b80633e47158c146103a85780633e5e3c23146103bb5780633f7286f4146103c35780633fc8cef3146103cb57806344e8cb74146103de5780635b3027c9146103f157600080fd5b806328e8fe7d1161025d57806328e8fe7d146103365780632a7848d1146103495780632f48ab7d1461035c5780633cdc53891461036f5780633d3b6f35146103825780633e413bee1461039557600080fd5b80630c08af4a146102a55780631028e5b8146102d557806310e8ef47146102e8578063112666b7146102fb5780631ed7831c1461030e578063243a919714610323575b600080fd5b6034546102b8906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6039546102b8906001600160a01b031681565b6037546102b8906001600160a01b031681565b6021546102b8906001600160a01b031681565b610316610620565b6040516102cc9190610f18565b6038546102b8906001600160a01b031681565b6022546102b8906001600160a01b031681565b602d546102b8906001600160a01b031681565b602b546102b8906001600160a01b031681565b602a546102b8906001600160a01b031681565b6020546102b8906001600160a01b031681565b6027546102b8906001600160a01b031681565b6023546102b8906001600160a01b031681565b610316610682565b6103166106e2565b602c546102b8906001600160a01b031681565b603c546102b8906001600160a01b031681565b6030546102b8906001600160a01b031681565b61040c610742565b6040516102cc9190610f65565b6031546102b8906001600160a01b031681565b601c546102b8906001600160a01b031681565b6036546102b8906001600160a01b031681565b601d546102b8906001600160a01b031681565b6029546102b8906001600160a01b031681565b6033546102b8906001600160a01b031681565b610493610831565b6040516102cc9190611048565b603a546102b8906001600160a01b031681565b61040c610901565b6103166104c93660046110d9565b6109e7565b6103166104dc36600461113e565b610b15565b603d546102b8906001600160a01b031681565b603b546102b8906001600160a01b031681565b610316610515366004611181565b610bd8565b610493610c65565b61052a610d35565b60405190151581526020016102cc565b603f546102b8906001600160a01b031681565b601f546102b8906001600160a01b031681565b6035546102b8906001600160a01b031681565b602e546102b8906001600160a01b031681565b610316610e60565b6032546102b8906001600160a01b031681565b6028546102b8906001600160a01b031681565b603e546102b8906001600160a01b031681565b601e546102b8906001600160a01b031681565b602f546102b8906001600160a01b031681565b6103166105fb3660046111b4565b610ec0565b60005461052a9060ff1681565b6026546102b8906001600160a01b031681565b6060600d80548060200260200160405190810160405280929190818152602001828054801561067857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161065a575b5050505050905090565b6060600f805480602002602001604051908101604052809291908181526020018280548015610678576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161065a575050505050905090565b6060600e805480602002602001604051908101604052809291908181526020018280548015610678576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161065a575050505050905090565b60606012805480602002602001604051908101604052809291908181526020016000905b828210156108285760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561081057602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116107d25790505b50505050508152505081526020019060010190610766565b50505050905090565b60606011805480602002602001604051908101604052809291908181526020016000905b82821015610828578382906000526020600020018054610874906111d6565b80601f01602080910402602001604051908101604052809291908181526020018280546108a0906111d6565b80156108ed5780601f106108c2576101008083540402835291602001916108ed565b820191906000526020600020905b8154815290600101906020018083116108d057829003601f168201915b505050505081526020019060010190610855565b60606013805480602002602001604051908101604052809291908181526020016000905b828210156108285760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156109cf57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116109915790505b50505050508152505081526020019060010190610925565b60408051600580825260c08201909252606091600091906020820160a0803683370190505090508681600081518110610a2257610a22611211565b60200260200101906001600160a01b031690816001600160a01b0316815250508581600181518110610a5657610a56611211565b60200260200101906001600160a01b031690816001600160a01b0316815250508481600281518110610a8a57610a8a611211565b60200260200101906001600160a01b031690816001600160a01b0316815250508381600381518110610abe57610abe611211565b60200260200101906001600160a01b031690816001600160a01b0316815250508281600481518110610af257610af2611211565b6001600160a01b0390921660209283029190910190910152905095945050505050565b60408051600380825260808201909252606091600091906020820184803683370190505090508481600081518110610b4f57610b4f611211565b60200260200101906001600160a01b031690816001600160a01b0316815250508381600181518110610b8357610b83611211565b60200260200101906001600160a01b031690816001600160a01b0316815250508281600281518110610bb757610bb7611211565b6001600160a01b039092166020928302919091019091015290509392505050565b604080516002808252606080830184529260009291906020830190803683370190505090508381600081518110610c1157610c11611211565b60200260200101906001600160a01b031690816001600160a01b0316815250508281600181518110610c4557610c45611211565b6001600160a01b0390921660209283029190910190910152905092915050565b60606010805480602002602001604051908101604052809291908181526020016000905b82821015610828578382906000526020600020018054610ca8906111d6565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd4906111d6565b8015610d215780601f10610cf657610100808354040283529160200191610d21565b820191906000526020600020905b815481529060010190602001808311610d0457829003601f168201915b505050505081526020019060010190610c89565b60008054610100900460ff1615610d555750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610e5b5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b82840152825180830384018152606083019093526000929091610de3917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611227565b60408051601f1981840301815290829052610dfd91611258565b6000604051808303816000865af19150503d8060008114610e3a576040519150601f19603f3d011682016040523d82523d6000602084013e610e3f565b606091505b5091505080806020019051810190610e579190611274565b9150505b919050565b6060600c805480602002602001604051908101604052809291908181526020018280548015610678576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161065a575050505050905090565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610efa57610efa611211565b6001600160a01b039092166020928302919091019091015292915050565b6020808252825182820181905260009190848201906040850190845b81811015610f595783516001600160a01b031683529284019291840191600101610f34565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101561100957898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b80831015610ff45783516001600160e01b0319168252928b019260019290920191908b0190610fca565b50978a01979550505091870191600101610f8d565b50919998505050505050505050565b60005b8381101561103357818101518382015260200161101b565b83811115611042576000848401525b50505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156110b557878503603f1901845281518051808752611096818989018a8501611018565b601f01601f19169590950186019450928501929085019060010161106f565b5092979650505050505050565b80356001600160a01b0381168114610e5b57600080fd5b600080600080600060a086880312156110f157600080fd5b6110fa866110c2565b9450611108602087016110c2565b9350611116604087016110c2565b9250611124606087016110c2565b9150611132608087016110c2565b90509295509295909350565b60008060006060848603121561115357600080fd5b61115c846110c2565b925061116a602085016110c2565b9150611178604085016110c2565b90509250925092565b6000806040838503121561119457600080fd5b61119d836110c2565b91506111ab602084016110c2565b90509250929050565b6000602082840312156111c657600080fd5b6111cf826110c2565b9392505050565b600181811c908216806111ea57607f821691505b6020821081141561120b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b6001600160e01b031983168152815160009061124a816004850160208701611018565b919091016004019392505050565b6000825161126a818460208701611018565b9190910192915050565b60006020828403121561128657600080fd5b815180151581146111cf57600080fdfea164736f6c634300080a000a";
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
        readonly name: "baseUsdcAddress";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "baseWethAddress";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "baseWethWhale";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "modeUsdt";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "modeWbtc";
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
        readonly name: "usdcModeMarket";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "usdcWhaleMode";
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
        readonly name: "usdtModeMarket";
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
        readonly name: "wbtcModeMarket";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "wbtcWhaleMode";
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
        readonly name: "wethModeMarket";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "wethWhaleMode";
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
        readonly name: "wmaticWhale";
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
