import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFlashloanRouterExtension, IFlashloanRouterExtensionInterface } from "../../IFlashloanRouter.sol/IFlashloanRouterExtension";
export declare class IFlashloanRouterExtension__factory {
    static readonly abi: readonly [{
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
    static createInterface(): IFlashloanRouterExtensionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFlashloanRouterExtension;
}
