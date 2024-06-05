import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IFundersRegistryExtensionInterface extends utils.Interface {
    functions: {
        "_removeFundingStrategyForPair(address,address,address)": FunctionFragment;
        "_setBalancerPoolForTokens(address,address,address)": FunctionFragment;
        "_setBestSwapPath(address,address,address[])": FunctionFragment;
        "_setFundingStrategy(address,address,address)": FunctionFragment;
        "_setUniV3PoolFee(address,address,uint24)": FunctionFragment;
        "amountOutAndSlippageOfSwap(address,uint256,address)": FunctionFragment;
        "getBestSwapPath(address,address)": FunctionFragment;
        "getFundingStrategies(address,address)": FunctionFragment;
        "getFundingStrategy(address,address)": FunctionFragment;
        "getSlippage(address,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "reinitialize(address)": FunctionFragment;
        "swap(address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_removeFundingStrategyForPair" | "_setBalancerPoolForTokens" | "_setBestSwapPath" | "_setFundingStrategy" | "_setUniV3PoolFee" | "amountOutAndSlippageOfSwap" | "getBestSwapPath" | "getFundingStrategies" | "getFundingStrategy" | "getSlippage" | "initialize" | "reinitialize" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "_removeFundingStrategyForPair", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_setBalancerPoolForTokens", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_setBestSwapPath", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "_setFundingStrategy", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_setUniV3PoolFee", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "amountOutAndSlippageOfSwap", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getBestSwapPath", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getFundingStrategies", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getFundingStrategy", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getSlippage", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [string]): string;
    encodeFunctionData(functionFragment: "swap", values: [string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "_removeFundingStrategyForPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBalancerPoolForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setFundingStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setUniV3PoolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amountOutAndSlippageOfSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFundingStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFundingStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSlippage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface IFundersRegistryExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFundersRegistryExtensionInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setBalancerPoolForTokens(inputToken: string, outputToken: string, pool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setBestSwapPath(inputToken: string, outputToken: string, bestPath: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setFundingStrategy(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setUniV3PoolFee(inputToken: string, outputToken: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getBestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[string[]]>;
        getFundingStrategies(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[
            string[],
            string[]
        ] & {
            strategies: string[];
            strategiesData: string[];
        }>;
        getFundingStrategy(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[string, string] & {
            strategy: string;
            strategyData: string;
        }>;
        getSlippage(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            slippage: BigNumber;
        }>;
        initialize(_wnative: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        reinitialize(_creditDelegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setBalancerPoolForTokens(inputToken: string, outputToken: string, pool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setBestSwapPath(inputToken: string, outputToken: string, bestPath: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setFundingStrategy(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setUniV3PoolFee(inputToken: string, outputToken: string, fee: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getBestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string[]>;
    getFundingStrategies(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[
        string[],
        string[]
    ] & {
        strategies: string[];
        strategiesData: string[];
    }>;
    getFundingStrategy(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[string, string] & {
        strategy: string;
        strategyData: string;
    }>;
    getSlippage(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_wnative: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    reinitialize(_creditDelegator: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<void>;
        _setBalancerPoolForTokens(inputToken: string, outputToken: string, pool: string, overrides?: CallOverrides): Promise<void>;
        _setBestSwapPath(inputToken: string, outputToken: string, bestPath: string[], overrides?: CallOverrides): Promise<void>;
        _setFundingStrategy(strategy: string, inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<void>;
        _setUniV3PoolFee(inputToken: string, outputToken: string, fee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            outputAmount: BigNumber;
            slippage: BigNumber;
        }>;
        getBestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string[]>;
        getFundingStrategies(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[
            string[],
            string[]
        ] & {
            strategies: string[];
            strategiesData: string[];
        }>;
        getFundingStrategy(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[string, string] & {
            strategy: string;
            strategyData: string;
        }>;
        getSlippage(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_wnative: string, overrides?: CallOverrides): Promise<void>;
        reinitialize(_creditDelegator: string, overrides?: CallOverrides): Promise<void>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setBalancerPoolForTokens(inputToken: string, outputToken: string, pool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setBestSwapPath(inputToken: string, outputToken: string, bestPath: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setFundingStrategy(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setUniV3PoolFee(inputToken: string, outputToken: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getBestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingStrategies(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingStrategy(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSlippage(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_wnative: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        reinitialize(_creditDelegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setBalancerPoolForTokens(inputToken: string, outputToken: string, pool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setBestSwapPath(inputToken: string, outputToken: string, bestPath: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setFundingStrategy(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setUniV3PoolFee(inputToken: string, outputToken: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getBestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFundingStrategies(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFundingStrategy(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSlippage(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_wnative: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        reinitialize(_creditDelegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
