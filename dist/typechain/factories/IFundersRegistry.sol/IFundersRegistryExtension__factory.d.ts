import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFundersRegistryExtension, IFundersRegistryExtensionInterface } from "../../IFundersRegistry.sol/IFundersRegistryExtension";
export declare class IFundersRegistryExtension__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_removeFundingStrategyForPair";
        readonly inputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract IFundingStrategy";
        }, {
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setBalancerPoolForTokens";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setBestSwapPath";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "bestPath";
            readonly type: "address[]";
            readonly internalType: "contract IERC20Upgradeable[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setFundingStrategy";
        readonly inputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract IFundingStrategy";
        }, {
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_setUniV3PoolFee";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "amountOutAndSlippageOfSwap";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "outputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "slippage";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getBestSwapPath";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "contract IERC20Upgradeable[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getFundingStrategies";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "strategies";
            readonly type: "address[]";
            readonly internalType: "contract IFundingStrategy[]";
        }, {
            readonly name: "strategiesData";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getFundingStrategy";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract IFundingStrategy";
        }, {
            readonly name: "strategyData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getSlippage";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "slippage";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_wnative";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "reinitialize";
        readonly inputs: readonly [{
            readonly name: "_creditDelegator";
            readonly type: "address";
            readonly internalType: "contract ICreditDelegator";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swap";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }];
        readonly outputs: readonly [{
            readonly name: "outputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IFundersRegistryExtensionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFundersRegistryExtension;
}
