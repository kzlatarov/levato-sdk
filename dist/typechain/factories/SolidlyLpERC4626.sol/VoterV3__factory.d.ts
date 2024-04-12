import { type ContractRunner } from "ethers";
import type { VoterV3, VoterV3Interface } from "../../SolidlyLpERC4626.sol/VoterV3";
export declare class VoterV3__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20Upgradeable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "gauges";
        readonly outputs: readonly [{
            readonly internalType: "contract GaugeV2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): VoterV3Interface;
    static connect(address: string, runner?: ContractRunner | null): VoterV3;
}
