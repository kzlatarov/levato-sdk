import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFlashloanRouterStorage, IFlashloanRouterStorageInterface } from "../../IFlashloanRouter.sol/IFlashloanRouterStorage";
export declare class IFlashloanRouterStorage__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "ionicMarketOfAsset";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
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
    }];
    static createInterface(): IFlashloanRouterStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlashloanRouterStorage;
}
