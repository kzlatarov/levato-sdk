import { type ContractRunner } from "ethers";
import type { CDelegateInterface, CDelegateInterfaceInterface } from "../../IonicCErc20.sol/CDelegateInterface";
export declare class CDelegateInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "_becomeImplementation";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "contractType";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "delegateType";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): CDelegateInterfaceInterface;
    static connect(address: string, runner?: ContractRunner | null): CDelegateInterface;
}
