import { type ContractRunner } from "ethers";
import type { UnitrollerInterface, UnitrollerInterfaceInterface } from "../../IonicComptroller.sol/UnitrollerInterface";
export declare class UnitrollerInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "_acceptAdmin";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newPendingAdmin";
            readonly type: "address";
        }];
        readonly name: "_setPendingAdmin";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "hasRights";
            readonly type: "bool";
        }];
        readonly name: "_toggleAdminRights";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
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
        readonly name: "comptrollerImplementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): UnitrollerInterfaceInterface;
    static connect(address: string, runner?: ContractRunner | null): UnitrollerInterface;
}
