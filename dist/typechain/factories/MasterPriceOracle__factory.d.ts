import { ContractFactory } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { MasterPriceOracle, MasterPriceOracleInterface } from "../MasterPriceOracle";
type MasterPriceOracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MasterPriceOracle__factory extends ContractFactory {
    constructor(...args: MasterPriceOracleConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<MasterPriceOracle & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): MasterPriceOracle__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610ba0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063addd509911610066578063addd509914610103578063aea910781461012c578063c44014d21461014d578063ee693af114610160578063f851a4401461017357600080fd5b806380dce169146100985780638f283970146100c85780639c0591c8146100dd5780639c9192c6146100f0575b600080fd5b6002546100ab906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100db6100d636600461085c565b610186565b005b6004546100ab906001600160a01b031681565b6100db6100fe3660046108c5565b61021b565b6100ab61011136600461085c565b6001602052600090815260409020546001600160a01b031681565b61013f61013a36600461085c565b6103d1565b6040519081526020016100bf565b6100db61015b36600461085c565b61053d565b6100db61016e366004610a10565b6105c1565b6003546100ab906001600160a01b031681565b6003546001600160a01b031633146101b95760405162461bcd60e51b81526004016101b090610b04565b60405180910390fd5b600380546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527ff9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc91015b60405180910390a15050565b6003546001600160a01b031633146102455760405162461bcd60e51b81526004016101b090610b04565b821580159061025357508281145b6102c55760405162461bcd60e51b815260206004820152603860248201527f4c656e67746873206f6620626f746820617272617973206d757374206265206560448201527f7175616c20616e642067726561746572207468616e20302e000000000000000060648201526084016101b0565b60005b838110156103ca5760008585838181106102e4576102e4610b3b565b90506020020160208101906102f9919061085c565b6001600160a01b0380821660009081526001602052604081205492935091169085858581811061032b5761032b610b3b565b9050602002016020810190610340919061085c565b6001600160a01b0384811660008181526001602090815260409182902080546001600160a01b0319168686169081179091558251938452938716908301528101919091529091507f10e7c87bebf274db4de1b5f9fc731d6f83096e550bd871b681314578404d31269060600160405180910390a150505080806103c290610b51565b9150506102c8565b5050505050565b6004546000906001600160a01b03838116911614156103f95750670de0b6b3a7640000919050565b6001600160a01b0380831660009081526001602052604090205416801561048c576040516315d5220f60e31b81526001600160a01b03848116600483015282169063aea91078906024015b602060405180830381865afa158015610461573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104859190610b7a565b9392505050565b6002546001600160a01b0316156104cf576002546040516315d5220f60e31b81526001600160a01b0385811660048301529091169063aea9107890602401610444565b60405162461bcd60e51b815260206004820152603960248201527f5072696365206f7261636c65206e6f7420666f756e6420666f7220746869732060448201527f756e6465726c79696e6720746f6b656e20616464726573732e0000000000000060648201526084016101b0565b6003546001600160a01b031633146105675760405162461bcd60e51b81526004016101b090610b04565b600280546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f0df2d61fdd201e9633368dca495e2c469e36c48039263448dd8a2a954c19ef1a910161020f565b600054610100900460ff16158080156105e15750600054600160ff909116105b806105fb5750303b1580156105fb575060005460ff166001145b61065e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016101b0565b6000805460ff191660011790558015610681576000805461ff0019166101001790555b84518651146106e05760405162461bcd60e51b815260206004820152602560248201527f4c656e67746873206f6620626f746820617272617973206d757374206265206560448201526438bab0b61760d91b60648201526084016101b0565b60005b86518110156107a857600087828151811061070057610700610b3b565b60200260200101519050600087838151811061071e5761071e610b3b565b6020908102919091018101516001600160a01b03848116600081815260018552604080822080546001600160a01b03191694861694851790558051928352948201529283015291507f10e7c87bebf274db4de1b5f9fc731d6f83096e550bd871b681314578404d31269060600160405180910390a1505080806107a090610b51565b9150506106e3565b50600280546001600160a01b038087166001600160a01b031992831617909255600380548684169083161790556004805492851692909116919091179055801561082c576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b6001600160a01b038116811461084957600080fd5b50565b803561085781610834565b919050565b60006020828403121561086e57600080fd5b813561048581610834565b60008083601f84011261088b57600080fd5b50813567ffffffffffffffff8111156108a357600080fd5b6020830191508360208260051b85010111156108be57600080fd5b9250929050565b600080600080604085870312156108db57600080fd5b843567ffffffffffffffff808211156108f357600080fd5b6108ff88838901610879565b9096509450602087013591508082111561091857600080fd5b5061092587828801610879565b95989497509550505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561097057610970610931565b604052919050565b600067ffffffffffffffff82111561099257610992610931565b5060051b60200190565b600082601f8301126109ad57600080fd5b813560206109c26109bd83610978565b610947565b82815260059290921b840181019181810190868411156109e157600080fd5b8286015b84811015610a055780356109f881610834565b83529183019183016109e5565b509695505050505050565b600080600080600060a08688031215610a2857600080fd5b853567ffffffffffffffff80821115610a4057600080fd5b818801915088601f830112610a5457600080fd5b81356020610a646109bd83610978565b82815260059290921b8401810191818101908c841115610a8357600080fd5b948201945b83861015610aaa578535610a9b81610834565b82529482019490820190610a88565b99505089013592505080821115610ac057600080fd5b50610acd8882890161099c565b945050610adc6040870161084c565b9250610aea6060870161084c565b9150610af86080870161084c565b90509295509295909350565b60208082526018908201527f53656e646572206973206e6f74207468652061646d696e2e0000000000000000604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415610b7357634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610b8c57600080fd5b505191905056fea164736f6c634300080a000a";
    static readonly abi: readonly [{
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
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "NewAdmin";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldOracle";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newOracle";
            readonly type: "address";
        }];
        readonly name: "NewDefaultOracle";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "underlying";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldOracle";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newOracle";
            readonly type: "address";
        }];
        readonly name: "NewOracle";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "underlyings";
            readonly type: "address[]";
        }, {
            readonly internalType: "contract IPriceOracle[]";
            readonly name: "_oracles";
            readonly type: "address[]";
        }];
        readonly name: "add";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "changeAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultOracle";
        readonly outputs: readonly [{
            readonly internalType: "contract IPriceOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "underlyings";
            readonly type: "address[]";
        }, {
            readonly internalType: "contract IPriceOracle[]";
            readonly name: "_oracles";
            readonly type: "address[]";
        }, {
            readonly internalType: "contract IPriceOracle";
            readonly name: "_defaultOracle";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_admin";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_wtoken";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "oracles";
        readonly outputs: readonly [{
            readonly internalType: "contract IPriceOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "underlying";
            readonly type: "address";
        }];
        readonly name: "price";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IPriceOracle";
            readonly name: "newOracle";
            readonly type: "address";
        }];
        readonly name: "setDefaultOracle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wtoken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): MasterPriceOracleInterface;
    static connect(address: string, runner?: ContractRunner | null): MasterPriceOracle;
}
export {};
