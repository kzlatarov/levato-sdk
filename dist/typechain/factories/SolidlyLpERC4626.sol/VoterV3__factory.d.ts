import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { VoterV3, VoterV3Interface } from "../../SolidlyLpERC4626.sol/VoterV3";
export declare class VoterV3__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "gauges";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract GaugeV2";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): VoterV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): VoterV3;
}
