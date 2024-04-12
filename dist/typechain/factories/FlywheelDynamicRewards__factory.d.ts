import { type ContractRunner } from "ethers";
import type { FlywheelDynamicRewards, FlywheelDynamicRewardsInterface } from "../FlywheelDynamicRewards";
export declare class FlywheelDynamicRewards__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "FlywheelError";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "start";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "end";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint192";
            readonly name: "reward";
            readonly type: "uint192";
        }];
        readonly name: "NewRewardsCycle";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "flywheel";
        readonly outputs: readonly [{
            readonly internalType: "contract FlywheelCore";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20";
            readonly name: "strategy";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "lastUpdatedTimestamp";
            readonly type: "uint32";
        }];
        readonly name: "getAccruedRewards";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
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
            readonly internalType: "contract ERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "rewardsCycle";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "start";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "end";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint192";
            readonly name: "reward";
            readonly type: "uint192";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rewardsCycleLength";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): FlywheelDynamicRewardsInterface;
    static connect(address: string, runner?: ContractRunner | null): FlywheelDynamicRewards;
}
