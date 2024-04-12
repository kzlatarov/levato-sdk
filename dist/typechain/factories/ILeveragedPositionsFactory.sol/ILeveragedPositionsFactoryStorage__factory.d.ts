import { type ContractRunner } from "ethers";
import type { ILeveragedPositionsFactoryStorage, ILeveragedPositionsFactoryStorageInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactoryStorage";
export declare class ILeveragedPositionsFactoryStorage__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "creditDelegator";
        readonly outputs: readonly [{
            readonly internalType: "contract ICreditDelegator";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "flashloanRouter";
        readonly outputs: readonly [{
            readonly internalType: "contract IFlashloanRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "fundersRegistry";
        readonly outputs: readonly [{
            readonly internalType: "contract IFundersRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minBorrowNative";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "oracle";
        readonly outputs: readonly [{
            readonly internalType: "contract MasterPriceOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
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
            readonly name: "position";
            readonly type: "address";
        }];
        readonly name: "vaultOfPosition";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ILeveragedPositionsFactoryStorageInterface;
    static connect(address: string, runner?: ContractRunner | null): ILeveragedPositionsFactoryStorage;
}
