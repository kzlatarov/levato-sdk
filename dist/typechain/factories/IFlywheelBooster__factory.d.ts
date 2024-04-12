import { type ContractRunner } from "ethers";
import type { IFlywheelBooster, IFlywheelBoosterInterface } from "../IFlywheelBooster";
export declare class IFlywheelBooster__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20";
            readonly name: "strategy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "boostedBalanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ERC20";
            readonly name: "strategy";
            readonly type: "address";
        }];
        readonly name: "boostedTotalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IFlywheelBoosterInterface;
    static connect(address: string, runner?: ContractRunner | null): IFlywheelBooster;
}
