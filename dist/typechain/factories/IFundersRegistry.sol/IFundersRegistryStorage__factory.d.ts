import { type ContractRunner } from "ethers";
import type { IFundersRegistryStorage, IFundersRegistryStorageInterface } from "../../IFundersRegistry.sol/IFundersRegistryStorage";
export declare class IFundersRegistryStorage__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "WNATIVE";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }];
        readonly name: "balancerPoolForTokens";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }];
        readonly name: "bestSwapPath";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "customUniV3Router";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }];
        readonly name: "defaultOutputToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "fundingStrategiesByName";
        readonly outputs: readonly [{
            readonly internalType: "contract IFundingStrategy";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }];
        readonly name: "fundingStrategiesByTokens";
        readonly outputs: readonly [{
            readonly internalType: "contract IFundingStrategy";
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
        readonly inputs: readonly [];
        readonly name: "uniswapV3Fees";
        readonly outputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFundersRegistryStorageInterface;
    static connect(address: string, runner?: ContractRunner | null): IFundersRegistryStorage;
}
