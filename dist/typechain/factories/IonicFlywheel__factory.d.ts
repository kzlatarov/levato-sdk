import { type ContractRunner } from "ethers";
import type { IonicFlywheel, IonicFlywheelInterface } from "../IonicFlywheel";
export declare class IonicFlywheel__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20";
            readonly name: "strategy";
            readonly type: "address";
        }, {
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
            readonly internalType: "contract ERC20";
            readonly name: "strategy";
            readonly type: "address";
        }];
        readonly name: "addMarketForRewards";
        readonly outputs: readonly [];
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "compAccrued";
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
            readonly name: "market";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "borrower";
            readonly type: "address";
        }];
        readonly name: "flywheelPreBorrowerAction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "market";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "supplier";
            readonly type: "address";
        }];
        readonly name: "flywheelPreSupplierAction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "market";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "src";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "dst";
            readonly type: "address";
        }];
        readonly name: "flywheelPreTransferAction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isFlywheel";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isRewardsDistributor";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20";
            readonly name: "strategy";
            readonly type: "address";
        }];
        readonly name: "marketState";
        readonly outputs: readonly [{
            readonly internalType: "uint224";
            readonly name: "index";
            readonly type: "uint224";
        }, {
            readonly internalType: "uint32";
            readonly name: "lastUpdatedTimestamp";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rewardToken";
        readonly outputs: readonly [{
            readonly internalType: "contract ERC20";
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
    }];
    static createInterface(): IonicFlywheelInterface;
    static connect(address: string, runner?: ContractRunner | null): IonicFlywheel;
}
