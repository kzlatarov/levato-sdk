import { type ContractRunner } from "ethers";
import type { BaseFlywheelRewards, BaseFlywheelRewardsInterface } from "../BaseFlywheelRewards";
export declare class BaseFlywheelRewards__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "FlywheelError";
        readonly type: "error";
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
            readonly name: "rewards";
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
    }];
    static createInterface(): BaseFlywheelRewardsInterface;
    static connect(address: string, runner?: ContractRunner | null): BaseFlywheelRewards;
}
