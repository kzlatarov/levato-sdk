import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BaseFlywheelRewards, BaseFlywheelRewardsInterface } from "../BaseFlywheelRewards";
export declare class BaseFlywheelRewards__factory {
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
            readonly name: "rewards";
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
        readonly type: "error";
        readonly name: "FlywheelError";
        readonly inputs: readonly [];
    }];
    static createInterface(): BaseFlywheelRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseFlywheelRewards;
}
