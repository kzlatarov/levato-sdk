import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FlywheelDynamicRewards, FlywheelDynamicRewardsInterface } from "../FlywheelDynamicRewards";
export declare class FlywheelDynamicRewards__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "flywheel";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract FlywheelCore";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAccruedRewards";
        readonly inputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "lastUpdatedTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rewardToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rewardsCycle";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }];
        readonly outputs: readonly [{
            readonly name: "start";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "end";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "reward";
            readonly type: "uint192";
            readonly internalType: "uint192";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rewardsCycleLength";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "NewRewardsCycle";
        readonly inputs: readonly [{
            readonly name: "start";
            readonly type: "uint32";
            readonly indexed: true;
            readonly internalType: "uint32";
        }, {
            readonly name: "end";
            readonly type: "uint32";
            readonly indexed: true;
            readonly internalType: "uint32";
        }, {
            readonly name: "reward";
            readonly type: "uint192";
            readonly indexed: false;
            readonly internalType: "uint192";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "FlywheelError";
        readonly inputs: readonly [];
    }];
    static createInterface(): FlywheelDynamicRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FlywheelDynamicRewards;
}
