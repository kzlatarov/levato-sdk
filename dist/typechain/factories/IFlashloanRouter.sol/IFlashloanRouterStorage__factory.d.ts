import { type ContractRunner } from "ethers";
import type { IFlashloanRouterStorage, IFlashloanRouterStorageInterface } from "../../IFlashloanRouter.sol/IFlashloanRouterStorage";
export declare class IFlashloanRouterStorage__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "ionicMarketOfAsset";
        readonly outputs: readonly [{
            readonly internalType: "contract IonicCErc20";
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
    }];
    static createInterface(): IFlashloanRouterStorageInterface;
    static connect(address: string, runner?: ContractRunner | null): IFlashloanRouterStorage;
}
