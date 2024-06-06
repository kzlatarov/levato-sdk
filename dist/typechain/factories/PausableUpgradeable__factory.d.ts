import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PausableUpgradeable, PausableUpgradeableInterface } from "../PausableUpgradeable";
export declare class PausableUpgradeable__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "paused";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "uint8";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Paused";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Unpaused";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): PausableUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PausableUpgradeable;
}
