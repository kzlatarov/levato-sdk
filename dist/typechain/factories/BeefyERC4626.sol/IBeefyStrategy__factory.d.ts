import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBeefyStrategy, IBeefyStrategyInterface } from "../../BeefyERC4626.sol/IBeefyStrategy";
export declare class IBeefyStrategy__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "harvestOnDeposit";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "keeper";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setHarvestOnDeposit";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IBeefyStrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBeefyStrategy;
}
