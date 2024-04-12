import { ContractFactory } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { IonicCreditDelegatorExtension, IonicCreditDelegatorExtensionInterface } from "../IonicCreditDelegatorExtension";
type IonicCreditDelegatorExtensionConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class IonicCreditDelegatorExtension__factory extends ContractFactory {
    constructor(...args: IonicCreditDelegatorExtensionConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<IonicCreditDelegatorExtension & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): IonicCreditDelegatorExtension__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610096565b600180546001600160a01b031916905561004381610046602090811b6107e517901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6109ec806100a56000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806389f8132e116100ad578063ccdbe8b111610071578063ccdbe8b11461037b578063e30c3978146103a6578063e3b82eef146103b7578063f094a36d146103db578063f2fde38b1461040657600080fd5b806389f8132e1461031c5780638da5cb5b14610331578063b3596f0714610342578063c45a015514610355578063c4d66de81461036857600080fd5b8063442d751f116100f4578063442d751f1461029957806363e5cafc146102b45780636bd76d24146102df578063715018a61461030a57806379ba50971461031457600080fd5b806308bfa40a14610126578063132a29331461015657806315a55135146101785780632b3d042b14610251575b600080fd5b600254610139906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61016a6101643660046108bd565b50600090565b60405190815260200161014d565b6101f36101863660046108bd565b60076020819052600091825260409091208054600182015460028301546003840154600485015460058601546006870154969097015494969395929464ffffffffff8316946001600160a01b0365010000000000909404841694928416931691906001600160801b031689565b60408051998a5260208a01989098529688019590955264ffffffffff90931660608701526001600160a01b039182166080870152811660a08601521660c084015260e08301526001600160801b03166101008201526101200161014d565b61028361025f3660046108e1565b600960209081526000928352604080842090915290825290205464ffffffffff1681565b60405164ffffffffff909116815260200161014d565b61016a6102a73660046108bd565b506709b6e64a8ec6000090565b61016a6102c23660046108e1565b600560209081526000928352604080842090915290825290205481565b61016a6102ed3660046108e1565b600460209081526000928352604080842090915290825290205481565b610312610419565b005b61031261042d565b6103246104ac565b60405161014d919061091a565b6000546001600160a01b0316610139565b61016a6103503660046108bd565b610670565b600354610139906001600160a01b031681565b6103126103763660046108bd565b61074a565b61016a6103893660046108e1565b600a60209081526000928352604080842090915290825290205481565b6001546001600160a01b0316610139565b6103cb6103c53660046108bd565b50600190565b604051901515815260200161014d565b61016a6103e93660046108e1565b600860209081526000928352604080842090915290825290205481565b6103126104143660046108bd565b610774565b610421610835565b61042b600061088f565b565b60015433906001600160a01b031681146104a05760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b60648201526084015b60405180910390fd5b6104a98161088f565b50565b60408051600580825260c0820190925260609190600090826020820160a08036833701905050905063189acdbd60e31b816104e684610968565b93508360ff16815181106104fc576104fc610993565b6001600160e01b03199092166020928302919091019091015263b3596f0760e01b8161052784610968565b93508360ff168151811061053d5761053d610993565b6001600160e01b03199092166020928302919091019091015263132a293360e01b8161056884610968565b93508360ff168151811061057e5761057e610993565b6001600160e01b03199092166020928302919091019091015263442d751f60e01b816105a984610968565b93508360ff16815181106105bf576105bf610993565b6001600160e01b03199092166020928302919091019091015263e3b82eef60e01b816105ea84610968565b93508360ff168151811061060057610600610993565b6001600160e01b03199092166020928302919091019091015260ff82161561066a5760405162461bcd60e51b815260206004820152601c60248201527f7573652074686520636f7272656374206172726179206c656e677468000000006044820152606401610497565b92915050565b600354604080516307dc0d1d60e41b815290516000926001600160a01b031691637dc0d1d09160048083019260209291908290030181865afa1580156106ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106de91906109a9565b6040516315d5220f60e31b81526001600160a01b038481166004830152919091169063aea9107890602401602060405180830381865afa158015610726573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066a91906109c6565b610752610835565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b61077c610835565b600180546001600160a01b0383166001600160a01b031990911681179091556107ad6000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b0316331461042b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610497565b600180546001600160a01b03191690556104a9816107e5565b6001600160a01b03811681146104a957600080fd5b6000602082840312156108cf57600080fd5b81356108da816108a8565b9392505050565b600080604083850312156108f457600080fd5b82356108ff816108a8565b9150602083013561090f816108a8565b809150509250929050565b6020808252825182820181905260009190848201906040850190845b8181101561095c5783516001600160e01b03191683529284019291840191600101610936565b50909695505050505050565b600060ff82168061098957634e487b7160e01b600052601160045260246000fd5b6000190192915050565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156109bb57600080fd5b81516108da816108a8565b6000602082840312156109d857600080fd5b505191905056fea164736f6c634300080a000a";
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
        readonly inputs: readonly [];
        readonly name: "_getExtensionFunctions";
        readonly outputs: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "";
            readonly type: "bytes4[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "aaveAddressesProvider";
        readonly outputs: readonly [{
            readonly internalType: "contract IPoolAddressesProvider";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "acceptOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "borrowAllowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "borrowBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "delegatedDebtAssetData";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "levatoCurrentBorrowRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrowIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastTotalDebt";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint40";
            readonly name: "lastUpdateTimestamp";
            readonly type: "uint40";
        }, {
            readonly internalType: "address";
            readonly name: "lpToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "debtToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IDefaultInterestRateStrategy";
            readonly name: "irm";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "accruedToTreasury";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint128";
            readonly name: "reserveFactor";
            readonly type: "uint128";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "factory";
        readonly outputs: readonly [{
            readonly internalType: "contract ILeveragedPositionsFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getAssetBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getAssetPoolLtv";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getAssetPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ILeveragedPositionsFactory";
            readonly name: "_factory";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "isPoolSupportedAsset";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "positionBorrowIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "positionBorrowIndexLastUpdate";
        readonly outputs: readonly [{
            readonly internalType: "uint40";
            readonly name: "";
            readonly type: "uint40";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "positionScaledATokens";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IonicCreditDelegatorExtensionInterface;
    static connect(address: string, runner?: ContractRunner | null): IonicCreditDelegatorExtension;
}
export {};
