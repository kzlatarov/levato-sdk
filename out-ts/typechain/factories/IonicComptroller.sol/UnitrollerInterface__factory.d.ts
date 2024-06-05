import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UnitrollerInterface, UnitrollerInterfaceInterface } from "../../IonicComptroller.sol/UnitrollerInterface";
export declare class UnitrollerInterface__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_acceptAdmin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setPendingAdmin";
        readonly inputs: readonly [{
            readonly name: "newPendingAdmin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_toggleAdminRights";
        readonly inputs: readonly [{
            readonly name: "hasRights";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_upgrade";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "comptrollerImplementation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): UnitrollerInterfaceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnitrollerInterface;
}
