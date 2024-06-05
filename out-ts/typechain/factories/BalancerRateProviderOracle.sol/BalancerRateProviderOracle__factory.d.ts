import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BalancerRateProviderOracle, BalancerRateProviderOracleInterface } from "../../BalancerRateProviderOracle.sol/BalancerRateProviderOracle";
type BalancerRateProviderOracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BalancerRateProviderOracle__factory extends ContractFactory {
    constructor(...args: BalancerRateProviderOracleConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<BalancerRateProviderOracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): BalancerRateProviderOracle;
    connect(signer: Signer): BalancerRateProviderOracle__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610d61806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b14610160578063aea9107814610171578063c3f80bc414610192578063cea0252e146101a7578063e30c3978146101ba578063f2fde38b146101cb57600080fd5b806302eba094146100b957806319e4d3a3146100ff578063435356d114610128578063708019c41461013d578063715018a61461015057806379ba509714610158575b600080fd5b6100e26100c7366004610a5d565b6098602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e261010d366004610a5d565b6097602052600090815260409020546001600160a01b031681565b61013b610136366004610b37565b6101de565b005b61013b61014b366004610bbf565b610481565b61013b610586565b61013b61059a565b6033546001600160a01b03166100e2565b61018461017f366004610a5d565b610614565b6040519081526020016100f6565b61019a610625565b6040516100f69190610c02565b6100e26101b5366004610c4f565b610687565b6065546001600160a01b03166100e2565b61013b6101d9366004610a5d565b6106b1565b600054610100900460ff16158080156101fe5750600054600160ff909116105b806102185750303b158015610218575060005460ff166001145b6102805760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156102a3576000805461ff0019166101001790555b6102ab610722565b825184511480156102bd575081518351145b6103095760405162461bcd60e51b815260206004820152601860248201527f4172726179206c656e67746873206e6f7420657175616c2e00000000000000006044820152606401610277565b815161031c9060999060208501906109c7565b5060005b84518110156104345784818151811061033b5761033b610c68565b60200260200101516097600085848151811061035957610359610c68565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508381815181106103b7576103b7610c68565b6020026020010151609860008584815181106103d5576103d5610c68565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550808061042c90610c94565b915050610320565b50801561047b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b610489610751565b6000805b6099548110156104ea57826001600160a01b0316609982815481106104b4576104b4610c68565b6000918252602090912001546001600160a01b031614156104d857600191506104ea565b806104e281610c94565b91505061048d565b508061053c57609980546001810182556000919091527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000180546001600160a01b0319166001600160a01b0384161790555b506001600160a01b03908116600090815260986020908152604080832080549585166001600160a01b03199687161790556097909152902080549390911692909116919091179055565b61058e610751565b61059860006107ab565b565b60655433906001600160a01b031681146106085760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b6064820152608401610277565b610611816107ab565b50565b600061061f826107c4565b92915050565b6060609980548060200260200160405190810160405280929190818152602001828054801561067d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161065f575b5050505050905090565b6099818154811061069757600080fd5b6000918252602090912001546001600160a01b0316905081565b6106b9610751565b606580546001600160a01b0383166001600160a01b031990911681179091556106ea6033546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600054610100900460ff166107495760405162461bcd60e51b815260040161027790610caf565b610598610945565b6033546001600160a01b031633146105985760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610277565b606580546001600160a01b031916905561061181610975565b6001600160a01b038181166000908152609860205260408120549091166108265760405162461bcd60e51b8152602060048201526016602482015275556e737570706f7274656420756e6465726c79696e6760501b6044820152606401610277565b6001600160a01b0380831660009081526097602090815260408083205481516333cd77e760e11b815291519394169263679aefce926004808401939192918290030181865afa15801561087d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a19190610cfa565b6001600160a01b038481166000908152609860205260408082205490516315d5220f60e31b815292166004830152919250339063aea9107890602401602060405180830381865afa1580156108fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091e9190610cfa565b9050670de0b6b3a76400006109338284610d13565b61093d9190610d32565b949350505050565b600054610100900460ff1661096c5760405162461bcd60e51b815260040161027790610caf565b610598336107ab565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054828255906000526020600020908101928215610a1c579160200282015b82811115610a1c57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906109e7565b50610a28929150610a2c565b5090565b5b80821115610a285760008155600101610a2d565b80356001600160a01b0381168114610a5857600080fd5b919050565b600060208284031215610a6f57600080fd5b610a7882610a41565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610aa657600080fd5b8135602067ffffffffffffffff80831115610ac357610ac3610a7f565b8260051b604051601f19603f83011681018181108482111715610ae857610ae8610a7f565b604052938452858101830193838101925087851115610b0657600080fd5b83870191505b84821015610b2c57610b1d82610a41565b83529183019190830190610b0c565b979650505050505050565b600080600060608486031215610b4c57600080fd5b833567ffffffffffffffff80821115610b6457600080fd5b610b7087838801610a95565b94506020860135915080821115610b8657600080fd5b610b9287838801610a95565b93506040860135915080821115610ba857600080fd5b50610bb586828701610a95565b9150509250925092565b600080600060608486031215610bd457600080fd5b610bdd84610a41565b9250610beb60208501610a41565b9150610bf960408501610a41565b90509250925092565b6020808252825182820181905260009190848201906040850190845b81811015610c435783516001600160a01b031683529284019291840191600101610c1e565b50909695505050505050565b600060208284031215610c6157600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610ca857610ca8610c7e565b5060010190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600060208284031215610d0c57600080fd5b5051919050565b6000816000190483118215151615610d2d57610d2d610c7e565b500290565b600082610d4f57634e487b7160e01b600052601260045260246000fd5b50049056fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "acceptOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "baseTokens";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAllUnderlyings";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_rateProviders";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_baseTokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_underlyings";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "price";
        readonly inputs: readonly [{
            readonly name: "underlying";
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
        readonly name: "rateProviders";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IRateProvider";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "registerToken";
        readonly inputs: readonly [{
            readonly name: "_rateProvider";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_baseToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "underlyings";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
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
    }];
    static createInterface(): BalancerRateProviderOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BalancerRateProviderOracle;
}
export {};
