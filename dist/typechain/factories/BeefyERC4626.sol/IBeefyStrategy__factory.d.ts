import { type ContractRunner } from "ethers";
import type { IBeefyStrategy, IBeefyStrategyInterface } from "../../BeefyERC4626.sol/IBeefyStrategy";
export declare class IBeefyStrategy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "harvestOnDeposit";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "keeper";
        readonly outputs: readonly [{
            readonly internalType: "address";
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
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly name: "setHarvestOnDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IBeefyStrategyInterface;
    static connect(address: string, runner?: ContractRunner | null): IBeefyStrategy;
}
