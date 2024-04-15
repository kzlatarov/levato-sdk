import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDiamondBase, IDiamondBaseInterface } from "../../DiamondLib.sol/IDiamondBase";
export declare class IDiamondBase__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_listExtensions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_registerExtension";
        readonly inputs: readonly [{
            readonly name: "extensionToAdd";
            readonly type: "address";
            readonly internalType: "contract DiamondExtension";
        }, {
            readonly name: "extensionToReplace";
            readonly type: "address";
            readonly internalType: "contract DiamondExtension";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_replaceExtensions";
        readonly inputs: readonly [{
            readonly name: "extensions";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IDiamondBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDiamondBase;
}
