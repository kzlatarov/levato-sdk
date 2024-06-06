import { Signer, ContractFactory, PayableOverrides, BytesLike } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TransparentUpgradeableProxy, TransparentUpgradeableProxyInterface } from "../../TransparentUpgradeableProxy.sol/TransparentUpgradeableProxy";
type TransparentUpgradeableProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TransparentUpgradeableProxy__factory extends ContractFactory {
    constructor(...args: TransparentUpgradeableProxyConstructorParams);
    deploy(_logic: string, admin_: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<TransparentUpgradeableProxy>;
    getDeployTransaction(_logic: string, admin_: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): TransparentUpgradeableProxy;
    connect(signer: Signer): TransparentUpgradeableProxy__factory;
    static readonly bytecode = "0x608060405260405162000eb138038062000eb183398101604081905262000026916200049d565b828162000036828260006200004d565b50620000449050826200008a565b505050620005d0565b6200005883620000e5565b600082511180620000665750805b1562000085576200008383836200012760201b620001791760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000b562000156565b604080516001600160a01b03928316815291841660208301520160405180910390a1620000e2816200018f565b50565b620000f08162000244565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200014f838360405180606001604052806027815260200162000e8a60279139620002f8565b9392505050565b60006200018060008051602062000e6a83398151915260001b6200037760201b620001a51760201c565b546001600160a01b0316919050565b6001600160a01b038116620001fa5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b806200022360008051602062000e6a83398151915260001b6200037760201b620001a51760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6200025a816200037a60201b620001a81760201c565b620002be5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001f1565b80620002237f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6200037760201b620001a51760201c565b6060600080856001600160a01b0316856040516200031791906200057d565b600060405180830381855af49150503d806000811462000354576040519150601f19603f3d011682016040523d82523d6000602084013e62000359565b606091505b5090925090506200036d8683838762000389565b9695505050505050565b90565b6001600160a01b03163b151590565b60608315620003fa578251620003f2576001600160a01b0385163b620003f25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001f1565b508162000406565b6200040683836200040e565b949350505050565b8151156200041f5781518083602001fd5b8060405162461bcd60e51b8152600401620001f191906200059b565b80516001600160a01b03811681146200045357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200048b57818101518382015260200162000471565b83811115620000835750506000910152565b600080600060608486031215620004b357600080fd5b620004be846200043b565b9250620004ce602085016200043b565b60408501519092506001600160401b0380821115620004ec57600080fd5b818601915086601f8301126200050157600080fd5b81518181111562000516576200051662000458565b604051601f8201601f19908116603f0116810190838211818310171562000541576200054162000458565b816040528281528960208487010111156200055b57600080fd5b6200056e8360208301602088016200046e565b80955050505050509250925092565b60008251620005918184602087016200046e565b9190910192915050565b6020815260008251806020840152620005bc8160408501602087016200046e565b601f01601f19169190910160400192915050565b61088a80620005e06000396000f3fe60806040523661001357610011610017565b005b6100115b61001f6101b7565b6001600160a01b0316336001600160a01b0316141561016f5760606001600160e01b031960003516631b2ce7f360e11b8114156100655761005e6101ea565b9150610167565b6001600160e01b0319811663278f794360e11b14156100865761005e610241565b6001600160e01b031981166308f2839760e41b14156100a75761005e610287565b6001600160e01b031981166303e1469160e61b14156100c85761005e6102b8565b6001600160e01b03198116635c60da1b60e01b14156100e95761005e6102f8565b60405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b815160208301f35b61017761030c565b565b606061019e83836040518060600160405280602781526020016108576027913961031c565b9392505050565b90565b6001600160a01b03163b151590565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b60606101f4610394565b600061020336600481846106a2565b81019061021091906106e8565b905061022d8160405180602001604052806000815250600061039f565b505060408051602081019091526000815290565b606060008061025336600481846106a2565b8101906102609190610719565b915091506102708282600161039f565b604051806020016040528060008152509250505090565b6060610291610394565b60006102a036600481846106a2565b8101906102ad91906106e8565b905061022d816103cb565b60606102c2610394565b60006102cc6101b7565b604080516001600160a01b03831660208201529192500160405160208183030381529060405291505090565b6060610302610394565b60006102cc610422565b610177610317610422565b610431565b6060600080856001600160a01b0316856040516103399190610807565b600060405180830381855af49150503d8060008114610374576040519150601f19603f3d011682016040523d82523d6000602084013e610379565b606091505b509150915061038a86838387610455565b9695505050505050565b341561017757600080fd5b6103a8836104d3565b6000825111806103b55750805b156103c6576103c48383610179565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103f46101b7565b604080516001600160a01b03928316815291841660208301520160405180910390a161041f81610513565b50565b600061042c6105bc565b905090565b3660008037600080366000845af43d6000803e808015610450573d6000f35b3d6000fd5b606083156104c15782516104ba576001600160a01b0385163b6104ba5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161015e565b50816104cb565b6104cb83836105e4565b949350505050565b6104dc8161060e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166105785760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b606482015260840161015e565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80546001600160a01b0319166001600160a01b039290921691909117905550565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6101db565b8151156105f45781518083602001fd5b8060405162461bcd60e51b815260040161015e9190610823565b6001600160a01b0381163b61067b5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161015e565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc61059b565b600080858511156106b257600080fd5b838611156106bf57600080fd5b5050820193919092039150565b80356001600160a01b03811681146106e357600080fd5b919050565b6000602082840312156106fa57600080fd5b61019e826106cc565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561072c57600080fd5b610735836106cc565b9150602083013567ffffffffffffffff8082111561075257600080fd5b818501915085601f83011261076657600080fd5b81358181111561077857610778610703565b604051601f8201601f19908116603f011681019083821181831017156107a0576107a0610703565b816040528281528860208487010111156107b957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b838110156107f65781810151838201526020016107de565b838111156103c45750506000910152565b600082516108198184602087016107db565b9190910192915050565b60208152600082518060208401526108428160408501602087016107db565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c634300080a000ab53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_logic";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "admin_";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "fallback";
        readonly stateMutability: "payable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AdminChanged";
        readonly inputs: readonly [{
            readonly name: "previousAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "newAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BeaconUpgraded";
        readonly inputs: readonly [{
            readonly name: "beacon";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Upgraded";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): TransparentUpgradeableProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TransparentUpgradeableProxy;
}
export {};
