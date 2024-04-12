import { type ContractRunner } from "ethers";
import type { IFundersRegistry, IFundersRegistryInterface } from "../../IFundersRegistry.sol/IFundersRegistry";
export declare class IFundersRegistry__factory {
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
        readonly inputs: readonly [];
        readonly name: "_listExtensions";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract DiamondExtension";
            readonly name: "extensionToAdd";
            readonly type: "address";
        }, {
            readonly internalType: "contract DiamondExtension";
            readonly name: "extensionToReplace";
            readonly type: "address";
        }];
        readonly name: "_registerExtension";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IFundingStrategy";
            readonly name: "strategy";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }];
        readonly name: "_removeFundingStrategyForPair";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "extensions";
            readonly type: "address[]";
        }];
        readonly name: "_replaceExtensions";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }];
        readonly name: "_setBalancerPoolForTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        }, {
            readonly internalType: "contract IERC20Upgradeable[]";
            readonly name: "bestPath";
            readonly type: "address[]";
        }];
        readonly name: "_setBestSwapPath";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IFundingStrategy";
            readonly name: "strategy";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }];
        readonly name: "_setFundingStrategy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        }, {
            readonly internalType: "uint24";
            readonly name: "fee";
            readonly type: "uint24";
        }];
        readonly name: "_setUniV3PoolFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "inputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }];
        readonly name: "amountOutAndSlippageOfSwap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "outputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "slippage";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }];
        readonly name: "getBestSwapPath";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable[]";
            readonly name: "";
            readonly type: "address[]";
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
        readonly name: "getFundingStrategies";
        readonly outputs: readonly [{
            readonly internalType: "contract IFundingStrategy[]";
            readonly name: "strategies";
            readonly type: "address[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "strategiesData";
            readonly type: "bytes[]";
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
        readonly name: "getFundingStrategy";
        readonly outputs: readonly [{
            readonly internalType: "contract IFundingStrategy";
            readonly name: "strategy";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "strategyData";
            readonly type: "bytes";
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
        readonly name: "getSlippage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "slippage";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "_wnative";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "contract ICreditDelegator";
            readonly name: "_creditDelegator";
            readonly type: "address";
        }];
        readonly name: "reinitialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "inputToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "inputAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "outputToken";
            readonly type: "address";
        }];
        readonly name: "swap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "outputAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
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
    static createInterface(): IFundersRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): IFundersRegistry;
}
