import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFlashloanRouter, IFlashloanRouterInterface } from "../../IFlashloanRouter.sol/IFlashloanRouter";
export declare class IFlashloanRouter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_listExtensions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_registerExtension";
        readonly inputs: readonly [{
            readonly name: "extensionToAdd";
            readonly type: "address";
            readonly internalType: "contract DiamondExtension";
        }, {
            readonly name: "extensionToReplace";
            readonly type: "address";
            readonly internalType: "contract DiamondExtension";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_replaceExtensions";
        readonly inputs: readonly [{
            readonly name: "extensions";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setIonicMarketOfAsset";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "market";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "flashloan";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
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
    }, {
        readonly type: "function";
        readonly name: "receiveFlashLoan";
        readonly inputs: readonly [{
            readonly name: "borrowedAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "borrowedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "premium";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IFlashloanRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlashloanRouter;
}
