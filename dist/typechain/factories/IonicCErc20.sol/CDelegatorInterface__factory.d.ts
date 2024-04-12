import { type ContractRunner } from "ethers";
import type { CDelegatorInterface, CDelegatorInterfaceInterface } from "../../IonicCErc20.sol/CDelegatorInterface";
export declare class CDelegatorInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "implementation_";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "becomeImplementationData";
            readonly type: "bytes";
        }];
        readonly name: "_setImplementationSafe";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_upgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): CDelegatorInterfaceInterface;
    static connect(address: string, runner?: ContractRunner | null): CDelegatorInterface;
}
