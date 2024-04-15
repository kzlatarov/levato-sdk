import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { LeveragedPositionStorage, LeveragedPositionStorageInterface } from "../LeveragedPositionStorage";
export declare class LeveragedPositionStorage__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "collateralAsset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ILeveragedPositionsFactory";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "positionOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "stableAsset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): LeveragedPositionStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LeveragedPositionStorage;
}
