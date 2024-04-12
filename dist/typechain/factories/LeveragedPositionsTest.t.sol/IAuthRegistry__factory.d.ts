import { type ContractRunner } from "ethers";
import type { IAuthRegistry, IAuthRegistryInterface } from "../../LeveragedPositionsTest.t.sol/IAuthRegistry";
export declare class IAuthRegistry__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "uint8";
            readonly name: "role";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "setUserRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IAuthRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): IAuthRegistry;
}
