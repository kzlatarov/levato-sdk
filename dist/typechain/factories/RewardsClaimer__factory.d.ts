import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { RewardsClaimer, RewardsClaimerInterface } from "../RewardsClaimer";
export declare class RewardsClaimer__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "claimRewards";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rewardDestination";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rewardTokens";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20Upgradeable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setRewardDestination";
        readonly inputs: readonly [{
            readonly name: "newDestination";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "ClaimTokenRewards";
        readonly inputs: readonly [{
            readonly name: "rewardToken";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
        readonly name: "RewardDestinationUpdate";
        readonly inputs: readonly [{
            readonly name: "newDestination";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): RewardsClaimerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RewardsClaimer;
}
