import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IFundersRegistryInterface extends utils.Interface {
    functions: {
        "WNATIVE()": FunctionFragment;
        "_listExtensions()": FunctionFragment;
        "_registerExtension(address,address)": FunctionFragment;
        "_removeFundingStrategyForPair(address,address,address)": FunctionFragment;
        "_replaceExtensions(address[])": FunctionFragment;
        "_setBalancerPoolForTokens(address,address,address)": FunctionFragment;
        "_setBestSwapPath(address,address,address[])": FunctionFragment;
        "_setFundingStrategy(address,address,address)": FunctionFragment;
        "_setUniV3PoolFee(address,address,uint24)": FunctionFragment;
        "amountOutAndSlippageOfSwap(address,uint256,address)": FunctionFragment;
        "balancerPoolForTokens(address,address)": FunctionFragment;
        "bestSwapPath(address,address)": FunctionFragment;
        "customUniV3Router()": FunctionFragment;
        "defaultOutputToken(address)": FunctionFragment;
        "fundingStrategiesByName(string)": FunctionFragment;
        "fundingStrategiesByTokens(address,address)": FunctionFragment;
        "getBestSwapPath(address,address)": FunctionFragment;
        "getFundingStrategies(address,address)": FunctionFragment;
        "getFundingStrategy(address,address)": FunctionFragment;
        "getSlippage(address,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "reinitialize(address)": FunctionFragment;
        "swap(address,uint256,address)": FunctionFragment;
        "uniswapV3Fees()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WNATIVE" | "_listExtensions" | "_registerExtension" | "_removeFundingStrategyForPair" | "_replaceExtensions" | "_setBalancerPoolForTokens" | "_setBestSwapPath" | "_setFundingStrategy" | "_setUniV3PoolFee" | "amountOutAndSlippageOfSwap" | "balancerPoolForTokens" | "bestSwapPath" | "customUniV3Router" | "defaultOutputToken" | "fundingStrategiesByName" | "fundingStrategiesByTokens" | "getBestSwapPath" | "getFundingStrategies" | "getFundingStrategy" | "getSlippage" | "initialize" | "owner" | "reinitialize" | "swap" | "uniswapV3Fees"): FunctionFragment;
    encodeFunctionData(functionFragment: "WNATIVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [string, string]): string;
    encodeFunctionData(functionFragment: "_removeFundingStrategyForPair", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [string[]]): string;
    encodeFunctionData(functionFragment: "_setBalancerPoolForTokens", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_setBestSwapPath", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "_setFundingStrategy", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_setUniV3PoolFee", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "amountOutAndSlippageOfSwap", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "balancerPoolForTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "bestSwapPath", values: [string, string]): string;
    encodeFunctionData(functionFragment: "customUniV3Router", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultOutputToken", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByName", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getBestSwapPath", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getFundingStrategies", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getFundingStrategy", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getSlippage", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [string]): string;
    encodeFunctionData(functionFragment: "swap", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "uniswapV3Fees", values?: undefined): string;
    decodeFunctionResult(functionFragment: "WNATIVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_removeFundingStrategyForPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBalancerPoolForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setFundingStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setUniV3PoolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amountOutAndSlippageOfSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balancerPoolForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "customUniV3Router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultOutputToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingStrategiesByName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingStrategiesByTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFundingStrategies", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFundingStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSlippage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3Fees", data: BytesLike): Result;
    events: {};
}
export interface IFundersRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFundersRegistryInterface;
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
        WNATIVE(overrides?: CallOverrides): Promise<[string]>;
        _listExtensions(overrides?: CallOverrides): Promise<[string[]]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
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
        balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[string]>;
        bestSwapPath(inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        customUniV3Router(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<[string]>;
        fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<[string]>;
        fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[string]>;
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
        owner(overrides?: CallOverrides): Promise<[string]>;
        reinitialize(_creditDelegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        uniswapV3Fees(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    WNATIVE(overrides?: CallOverrides): Promise<string>;
    _listExtensions(overrides?: CallOverrides): Promise<string[]>;
    _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _replaceExtensions(extensions: string[], overrides?: Overrides & {
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
    balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string>;
    bestSwapPath(inputToken: string, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    customUniV3Router(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<string>;
    fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<string>;
    fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string>;
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
    owner(overrides?: CallOverrides): Promise<string>;
    reinitialize(_creditDelegator: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    uniswapV3Fees(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        WNATIVE(overrides?: CallOverrides): Promise<string>;
        _listExtensions(overrides?: CallOverrides): Promise<string[]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: CallOverrides): Promise<void>;
        _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<void>;
        _replaceExtensions(extensions: string[], overrides?: CallOverrides): Promise<void>;
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
        balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string>;
        bestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string[]>;
        customUniV3Router(overrides?: CallOverrides): Promise<string>;
        defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<string>;
        fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<string>;
        fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string>;
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
        owner(overrides?: CallOverrides): Promise<string>;
        reinitialize(_creditDelegator: string, overrides?: CallOverrides): Promise<void>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV3Fees(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        WNATIVE(overrides?: CallOverrides): Promise<BigNumber>;
        _listExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
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
        balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        bestSwapPath(inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        customUniV3Router(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingStrategies(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingStrategy(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSlippage(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_wnative: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        reinitialize(_creditDelegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        uniswapV3Fees(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WNATIVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _listExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
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
        balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bestSwapPath(inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        customUniV3Router(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFundingStrategies(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFundingStrategy(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSlippage(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_wnative: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reinitialize(_creditDelegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        uniswapV3Fees(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
