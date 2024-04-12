import { ContractFactory } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { StdStorageSafe, StdStorageSafeInterface } from "../../StdStorage.sol/StdStorageSafe";
type StdStorageSafeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StdStorageSafe__factory extends ContractFactory {
    constructor(...args: StdStorageSafeConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<StdStorageSafe & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): StdStorageSafe__factory;
    static readonly bytecode = "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "who";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "fsig";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "keysHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "slot";
            readonly type: "uint256";
        }];
        readonly name: "SlotFound";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "who";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "slot";
            readonly type: "uint256";
        }];
        readonly name: "WARNING_UninitedSlot";
        readonly type: "event";
    }];
    static createInterface(): StdStorageSafeInterface;
    static connect(address: string, runner?: ContractRunner | null): StdStorageSafe;
}
export {};
