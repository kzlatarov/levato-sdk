import { type ContractRunner } from "ethers";
import type { DiamondBase, DiamondBaseInterface } from "../../DiamondLib.sol/DiamondBase";
export declare class DiamondBase__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "_functionSelector";
            readonly type: "bytes4";
        }];
        readonly name: "FunctionNotFound";
        readonly type: "error";
    }, {
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "_listExtensions";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract DiamondExtension";
            readonly name: "extensionToAdd";
            readonly type: "address";
        }, {
            readonly internalType: "contract DiamondExtension";
            readonly name: "extensionToReplace";
            readonly type: "address";
        }];
        readonly name: "_registerExtension";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "extensions";
            readonly type: "address[]";
        }];
        readonly name: "_replaceExtensions";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DiamondBaseInterface;
    static connect(address: string, runner?: ContractRunner | null): DiamondBase;
}
