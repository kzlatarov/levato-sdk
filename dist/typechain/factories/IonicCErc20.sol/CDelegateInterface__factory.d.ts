import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CDelegateInterface, CDelegateInterfaceInterface } from "../../IonicCErc20.sol/CDelegateInterface";
export declare class CDelegateInterface__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_becomeImplementation";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "contractType";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "delegateType";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "pure";
    }];
    static createInterface(): CDelegateInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CDelegateInterface;
}
