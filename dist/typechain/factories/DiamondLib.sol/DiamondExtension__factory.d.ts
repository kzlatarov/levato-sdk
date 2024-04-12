import { type ContractRunner } from "ethers";
import type { DiamondExtension, DiamondExtensionInterface } from "../../DiamondLib.sol/DiamondExtension";
export declare class DiamondExtension__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "_getExtensionFunctions";
        readonly outputs: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "";
            readonly type: "bytes4[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): DiamondExtensionInterface;
    static connect(address: string, runner?: ContractRunner | null): DiamondExtension;
}
