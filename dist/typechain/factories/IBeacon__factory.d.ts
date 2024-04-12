import { type ContractRunner } from "ethers";
import type { IBeacon, IBeaconInterface } from "../IBeacon";
export declare class IBeacon__factory {
    static readonly abi: readonly [{
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
    static createInterface(): IBeaconInterface;
    static connect(address: string, runner?: ContractRunner | null): IBeacon;
}
