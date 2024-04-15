import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DiamondExtension, DiamondExtensionInterface } from "../../DiamondLib.sol/DiamondExtension";
export declare class DiamondExtension__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_getExtensionFunctions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4[]";
            readonly internalType: "bytes4[]";
        }];
        readonly stateMutability: "pure";
    }];
    static createInterface(): DiamondExtensionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DiamondExtension;
}
