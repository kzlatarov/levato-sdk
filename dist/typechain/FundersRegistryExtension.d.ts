import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface FundersRegistryExtensionInterface extends Interface {
    getFunction(nameOrSignature: "MAX_SLIPPAGE" | "SOLIDLY_SWAP_ROUTER" | "UNISWAP_V2_ROUTER" | "UNISWAP_V3_QUOTER" | "UNISWAP_V3_ROUTER" | "WNATIVE" | "_getExtensionFunctions" | "_removeFundingStrategyForPair" | "_setBalancerPoolForTokens" | "_setBestSwapPath" | "_setFundingStrategy" | "_setUniV3PoolFee" | "acceptOwnership" | "amountOutAndSlippageOfSwap" | "balancerPoolForTokens" | "bestSwapPath" | "creditDelegator" | "customUniV3Router" | "defaultOutputToken" | "fundingStrategiesByName" | "fundingStrategiesByTokens" | "getBestSwapPath" | "getFundingStrategies" | "getFundingStrategy" | "getSlippage" | "initialize" | "owner" | "pendingOwner" | "quoteAmountOut" | "reinitialize" | "renounceOwnership" | "swap" | "transferOwnership" | "uniswapV3Fees"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferStarted" | "OwnershipTransferred" | "SlippageUpdated"): EventFragment;
    encodeFunctionData(functionFragment: "MAX_SLIPPAGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SOLIDLY_SWAP_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V2_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V3_QUOTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNISWAP_V3_ROUTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "WNATIVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_removeFundingStrategyForPair", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBalancerPoolForTokens", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBestSwapPath", values: [AddressLike, AddressLike, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "_setFundingStrategy", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_setUniV3PoolFee", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "amountOutAndSlippageOfSwap", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "balancerPoolForTokens", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "bestSwapPath", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "customUniV3Router", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "defaultOutputToken", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByName", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByTokens", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getBestSwapPath", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getFundingStrategies", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getFundingStrategy", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getSlippage", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteAmountOut", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "uniswapV3Fees", values: [AddressLike, AddressLike]): string;
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
}
export declare namespace InitializedEvent {
    type InputTuple = [version: BigNumberish];
    type OutputTuple = [version: bigint];
    interface OutputObject {
        version: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferStartedEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferredEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SlippageUpdatedEvent {
    type InputTuple = [
        inputToken: AddressLike,
        outputToken: AddressLike,
        prevValue: BigNumberish,
        slippage: BigNumberish
    ];
    type OutputTuple = [
        inputToken: string,
        outputToken: string,
        prevValue: bigint,
        slippage: bigint
    ];
    interface OutputObject {
        inputToken: string;
        outputToken: string;
        prevValue: bigint;
        slippage: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface FundersRegistryExtension extends BaseContract {
    connect(runner?: ContractRunner | null): FundersRegistryExtension;
    waitForDeployment(): Promise<this>;
    interface: FundersRegistryExtensionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    MAX_SLIPPAGE: TypedContractMethod<[], [bigint], "view">;
    SOLIDLY_SWAP_ROUTER: TypedContractMethod<[], [string], "view">;
    UNISWAP_V2_ROUTER: TypedContractMethod<[], [string], "view">;
    UNISWAP_V3_QUOTER: TypedContractMethod<[], [string], "view">;
    UNISWAP_V3_ROUTER: TypedContractMethod<[], [string], "view">;
    WNATIVE: TypedContractMethod<[], [string], "view">;
    _getExtensionFunctions: TypedContractMethod<[], [string[]], "view">;
    _removeFundingStrategyForPair: TypedContractMethod<[
        strategy: AddressLike,
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    _setBalancerPoolForTokens: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike,
        pool: AddressLike
    ], [
        void
    ], "nonpayable">;
    _setBestSwapPath: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike,
        bestPath: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    _setFundingStrategy: TypedContractMethod<[
        strategy: AddressLike,
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    _setUniV3PoolFee: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike,
        fee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    amountOutAndSlippageOfSwap: TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        [bigint, bigint] & {
            outputAmount: bigint;
            slippage: bigint;
        }
    ], "nonpayable">;
    balancerPoolForTokens: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        string
    ], "view">;
    bestSwapPath: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish
    ], [
        string
    ], "view">;
    creditDelegator: TypedContractMethod<[], [string], "view">;
    customUniV3Router: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        string
    ], "view">;
    defaultOutputToken: TypedContractMethod<[
        arg0: AddressLike
    ], [
        string
    ], "view">;
    fundingStrategiesByName: TypedContractMethod<[
        arg0: string
    ], [
        string
    ], "view">;
    fundingStrategiesByTokens: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        string
    ], "view">;
    getBestSwapPath: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string[]
    ], "view">;
    getFundingStrategies: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        [string[], string[]] & {
            strategies: string[];
            strategiesData: string[];
        }
    ], "view">;
    getFundingStrategy: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        [string, string] & {
            strategy: string;
            strategyData: string;
        }
    ], "view">;
    getSlippage: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        bigint
    ], "view">;
    initialize: TypedContractMethod<[
        _wnative: AddressLike
    ], [
        void
    ], "nonpayable">;
    owner: TypedContractMethod<[], [string], "view">;
    pendingOwner: TypedContractMethod<[], [string], "view">;
    quoteAmountOut: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike,
        amountIn: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    reinitialize: TypedContractMethod<[
        _creditDelegator: AddressLike
    ], [
        void
    ], "nonpayable">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    swap: TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    uniswapV3Fees: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "MAX_SLIPPAGE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "SOLIDLY_SWAP_ROUTER"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UNISWAP_V2_ROUTER"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UNISWAP_V3_QUOTER"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UNISWAP_V3_ROUTER"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "WNATIVE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "_getExtensionFunctions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "_removeFundingStrategyForPair"): TypedContractMethod<[
        strategy: AddressLike,
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setBalancerPoolForTokens"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike,
        pool: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setBestSwapPath"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike,
        bestPath: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setFundingStrategy"): TypedContractMethod<[
        strategy: AddressLike,
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setUniV3PoolFee"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike,
        fee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "amountOutAndSlippageOfSwap"): TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        [bigint, bigint] & {
            outputAmount: bigint;
            slippage: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "balancerPoolForTokens"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "bestSwapPath"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "creditDelegator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "customUniV3Router"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "defaultOutputToken"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "fundingStrategiesByName"): TypedContractMethod<[arg0: string], [string], "view">;
    getFunction(nameOrSignature: "fundingStrategiesByTokens"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getBestSwapPath"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string[]
    ], "view">;
    getFunction(nameOrSignature: "getFundingStrategies"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        [string[], string[]] & {
            strategies: string[];
            strategiesData: string[];
        }
    ], "view">;
    getFunction(nameOrSignature: "getFundingStrategy"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        [string, string] & {
            strategy: string;
            strategyData: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "getSlippage"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[_wnative: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "quoteAmountOut"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike,
        amountIn: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "reinitialize"): TypedContractMethod<[_creditDelegator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "uniswapV3Fees"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferStarted"): TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    getEvent(key: "SlippageUpdated"): TypedContractEvent<SlippageUpdatedEvent.InputTuple, SlippageUpdatedEvent.OutputTuple, SlippageUpdatedEvent.OutputObject>;
    filters: {
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "OwnershipTransferStarted(address,address)": TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        OwnershipTransferStarted: TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        "SlippageUpdated(address,address,uint256,uint256)": TypedContractEvent<SlippageUpdatedEvent.InputTuple, SlippageUpdatedEvent.OutputTuple, SlippageUpdatedEvent.OutputObject>;
        SlippageUpdated: TypedContractEvent<SlippageUpdatedEvent.InputTuple, SlippageUpdatedEvent.OutputTuple, SlippageUpdatedEvent.OutputObject>;
    };
}
