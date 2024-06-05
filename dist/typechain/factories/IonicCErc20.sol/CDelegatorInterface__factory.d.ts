import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CDelegatorInterface, CDelegatorInterfaceInterface } from "../../IonicCErc20.sol/CDelegatorInterface";
export declare class CDelegatorInterface__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_setImplementationSafe";
        readonly inputs: readonly [{
            readonly name: "implementation_";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "becomeImplementationData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_upgrade";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "implementation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): CDelegatorInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CDelegatorInterface;
}
