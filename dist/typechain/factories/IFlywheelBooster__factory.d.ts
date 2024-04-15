import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFlywheelBooster, IFlywheelBoosterInterface } from "../IFlywheelBooster";
export declare class IFlywheelBooster__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "boostedBalanceOf";
        readonly inputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "boostedTotalSupply";
        readonly inputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IFlywheelBoosterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlywheelBooster;
}
