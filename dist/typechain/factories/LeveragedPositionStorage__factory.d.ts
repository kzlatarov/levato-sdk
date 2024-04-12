import { type ContractRunner } from "ethers";
import type { LeveragedPositionStorage, LeveragedPositionStorageInterface } from "../LeveragedPositionStorage";
export declare class LeveragedPositionStorage__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "collateralAsset";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "factory";
        readonly outputs: readonly [{
            readonly internalType: "contract ILeveragedPositionsFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "positionOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stableAsset";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): LeveragedPositionStorageInterface;
    static connect(address: string, runner?: ContractRunner | null): LeveragedPositionStorage;
}
