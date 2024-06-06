import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAuthRegistry, IAuthRegistryInterface } from "../../DevTesting.t.sol/IAuthRegistry";
export declare class IAuthRegistry__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setUserRole";
        readonly inputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "role";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "enabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IAuthRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAuthRegistry;
}
