import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FundersRegistryExtensionInterface extends utils.Interface {
    functions: {
        "MAX_SLIPPAGE()": FunctionFragment;
        "SOLIDLY_SWAP_ROUTER()": FunctionFragment;
        "UNISWAP_V2_ROUTER()": FunctionFragment;
        "UNISWAP_V3_QUOTER()": FunctionFragment;
        "UNISWAP_V3_ROUTER()": FunctionFragment;
        "WNATIVE()": FunctionFragment;
        "_getExtensionFunctions()": FunctionFragment;
        "_removeFundingStrategyForPair(address,address,address)": FunctionFragment;
        "_setBalancerPoolForTokens(address,address,address)": FunctionFragment;
        "_setBestSwapPath(address,address,address[])": FunctionFragment;
        "_setFundingStrategy(address,address,address)": FunctionFragment;
        "_setUniV3PoolFee(address,address,uint24)": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "amountOutAndSlippageOfSwap(address,uint256,address)": FunctionFragment;
        "balancerPoolForTokens(address,address)": FunctionFragment;
        "bestSwapPath(address,address,uint256)": FunctionFragment;
        "creditDelegator()": FunctionFragment;
        "customUniV3Router(address,address)": FunctionFragment;
        "defaultOutputToken(address)": FunctionFragment;
        "fundingStrategiesByName(string)": FunctionFragment;
        "fundingStrategiesByTokens(address,address)": FunctionFragment;
        "getBestSwapPath(address,address)": FunctionFragment;
        "getFundingStrategies(address,address)": FunctionFragment;
        "getFundingStrategy(address,address)": FunctionFragment;
        "getSlippage(address,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "quoteAmountOut(address,address,uint256)": FunctionFragment;
        "reinitialize(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "swap(address,uint256,address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "uniswapV3Fees(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_SLIPPAGE" | "SOLIDLY_SWAP_ROUTER" | "UNISWAP_V2_ROUTER" | "UNISWAP_V3_QUOTER" | "UNISWAP_V3_ROUTER" | "WNATIVE" | "_getExtensionFunctions" | "_removeFundingStrategyForPair" | "_setBalancerPoolForTokens" | "_setBestSwapPath" | "_setFundingStrategy" | "_setUniV3PoolFee" | "acceptOwnership" | "amountOutAndSlippageOfSwap" | "balancerPoolForTokens" | "bestSwapPath" | "creditDelegator" | "customUniV3Router" | "defaultOutputToken" | "fundingStrategiesByName" | "fundingStrategiesByTokens" | "getBestSwapPath" | "getFundingStrategies" | "getFundingStrategy" | "getSlippage" | "initialize" | "owner" | "pendingOwner" | "quoteAmountOut" | "reinitialize" | "renounceOwnership" | "swap" | "transferOwnership" | "uniswapV3Fees"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_SLIPPAGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SOLIDLY_SWAP_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V2_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V3_QUOTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V3_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "WNATIVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_removeFundingStrategyForPair", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_setBalancerPoolForTokens", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_setBestSwapPath", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "_setFundingStrategy", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "_setUniV3PoolFee", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "amountOutAndSlippageOfSwap", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "balancerPoolForTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "bestSwapPath", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "customUniV3Router", values: [string, string]): string;
    encodeFunctionData(functionFragment: "defaultOutputToken", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByName", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getBestSwapPath", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getFundingStrategies", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getFundingStrategy", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getSlippage", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteAmountOut", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "uniswapV3Fees", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "MAX_SLIPPAGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SOLIDLY_SWAP_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_V2_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_V3_QUOTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNISWAP_V3_ROUTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WNATIVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_removeFundingStrategyForPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBalancerPoolForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setFundingStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setUniV3PoolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "amountOutAndSlippageOfSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balancerPoolForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3Fees", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferStarted(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "SlippageUpdated(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SlippageUpdated"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferStartedEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferStartedEventObject>;
export type OwnershipTransferStartedEventFilter = TypedEventFilter<OwnershipTransferStartedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface SlippageUpdatedEventObject {
    inputToken: string;
    outputToken: string;
    prevValue: BigNumber;
    slippage: BigNumber;
}
export type SlippageUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], SlippageUpdatedEventObject>;
export type SlippageUpdatedEventFilter = TypedEventFilter<SlippageUpdatedEvent>;
export interface FundersRegistryExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FundersRegistryExtensionInterface;
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
        MAX_SLIPPAGE(overrides?: CallOverrides): Promise<[BigNumber]>;
        SOLIDLY_SWAP_ROUTER(overrides?: CallOverrides): Promise<[string]>;
        UNISWAP_V2_ROUTER(overrides?: CallOverrides): Promise<[string]>;
        UNISWAP_V3_QUOTER(overrides?: CallOverrides): Promise<[string]>;
        UNISWAP_V3_ROUTER(overrides?: CallOverrides): Promise<[string]>;
        WNATIVE(overrides?: CallOverrides): Promise<[string]>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<[string[]]>;
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
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[string]>;
        bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        creditDelegator(overrides?: CallOverrides): Promise<[string]>;
        customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[string]>;
        defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[string]>;
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
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        quoteAmountOut(inputToken: string, outputToken: string, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        reinitialize(_creditDelegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[number]>;
    };
    MAX_SLIPPAGE(overrides?: CallOverrides): Promise<BigNumber>;
    SOLIDLY_SWAP_ROUTER(overrides?: CallOverrides): Promise<string>;
    UNISWAP_V2_ROUTER(overrides?: CallOverrides): Promise<string>;
    UNISWAP_V3_QUOTER(overrides?: CallOverrides): Promise<string>;
    UNISWAP_V3_ROUTER(overrides?: CallOverrides): Promise<string>;
    WNATIVE(overrides?: CallOverrides): Promise<string>;
    _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
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
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
    bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<string>;
    creditDelegator(overrides?: CallOverrides): Promise<string>;
    customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
    defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<string>;
    fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<string>;
    fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
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
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    quoteAmountOut(inputToken: string, outputToken: string, amountIn: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    reinitialize(_creditDelegator: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<number>;
    callStatic: {
        MAX_SLIPPAGE(overrides?: CallOverrides): Promise<BigNumber>;
        SOLIDLY_SWAP_ROUTER(overrides?: CallOverrides): Promise<string>;
        UNISWAP_V2_ROUTER(overrides?: CallOverrides): Promise<string>;
        UNISWAP_V3_QUOTER(overrides?: CallOverrides): Promise<string>;
        UNISWAP_V3_ROUTER(overrides?: CallOverrides): Promise<string>;
        WNATIVE(overrides?: CallOverrides): Promise<string>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
        _removeFundingStrategyForPair(strategy: string, inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<void>;
        _setBalancerPoolForTokens(inputToken: string, outputToken: string, pool: string, overrides?: CallOverrides): Promise<void>;
        _setBestSwapPath(inputToken: string, outputToken: string, bestPath: string[], overrides?: CallOverrides): Promise<void>;
        _setFundingStrategy(strategy: string, inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<void>;
        _setUniV3PoolFee(inputToken: string, outputToken: string, fee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            outputAmount: BigNumber;
            slippage: BigNumber;
        }>;
        balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
        bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<string>;
        creditDelegator(overrides?: CallOverrides): Promise<string>;
        customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
        defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<string>;
        fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<string>;
        fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
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
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        quoteAmountOut(inputToken: string, outputToken: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        reinitialize(_creditDelegator: string, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<number>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferStarted(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        OwnershipTransferStarted(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "SlippageUpdated(address,address,uint256,uint256)"(inputToken?: string | null, outputToken?: string | null, prevValue?: null, slippage?: null): SlippageUpdatedEventFilter;
        SlippageUpdated(inputToken?: string | null, outputToken?: string | null, prevValue?: null, slippage?: null): SlippageUpdatedEventFilter;
    };
    estimateGas: {
        MAX_SLIPPAGE(overrides?: CallOverrides): Promise<BigNumber>;
        SOLIDLY_SWAP_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_V2_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_V3_QUOTER(overrides?: CallOverrides): Promise<BigNumber>;
        UNISWAP_V3_ROUTER(overrides?: CallOverrides): Promise<BigNumber>;
        WNATIVE(overrides?: CallOverrides): Promise<BigNumber>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<BigNumber>;
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
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        creditDelegator(overrides?: CallOverrides): Promise<BigNumber>;
        customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingStrategies(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getFundingStrategy(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSlippage(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_wnative: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        quoteAmountOut(inputToken: string, outputToken: string, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        reinitialize(_creditDelegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_SLIPPAGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SOLIDLY_SWAP_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_V2_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_V3_QUOTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNISWAP_V3_ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WNATIVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        amountOutAndSlippageOfSwap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFundingStrategies(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFundingStrategy(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSlippage(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_wnative: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteAmountOut(inputToken: string, outputToken: string, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        reinitialize(_creditDelegator: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
