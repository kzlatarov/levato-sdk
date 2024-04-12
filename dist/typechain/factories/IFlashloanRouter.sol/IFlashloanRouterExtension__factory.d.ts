import { type ContractRunner } from "ethers";
import type { IFlashloanRouterExtension, IFlashloanRouterExtensionInterface } from "../../IFlashloanRouter.sol/IFlashloanRouterExtension";
export declare class IFlashloanRouterExtension__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "contract IonicCErc20";
            readonly name: "market";
            readonly type: "address";
        }];
        readonly name: "_setIonicMarketOfAsset";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "flashloan";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "borrowedAsset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "borrowedAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "premium";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "receiveFlashLoan";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFlashloanRouterExtensionInterface;
    static connect(address: string, runner?: ContractRunner | null): IFlashloanRouterExtension;
}
