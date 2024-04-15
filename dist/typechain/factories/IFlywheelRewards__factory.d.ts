import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFlywheelRewards, IFlywheelRewardsInterface } from "../IFlywheelRewards";
export declare class IFlywheelRewards__factory {
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
    }];
    static createInterface(): IFlywheelRewardsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlywheelRewards;
}
