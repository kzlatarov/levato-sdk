import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface IFundersRegistryInterface extends Interface {
    getFunction(nameOrSignature: "WNATIVE" | "_listExtensions" | "_registerExtension" | "_removeFundingStrategyForPair" | "_replaceExtensions" | "_setBalancerPoolForTokens" | "_setBestSwapPath" | "_setFundingStrategy" | "_setUniV3PoolFee" | "amountOutAndSlippageOfSwap" | "balancerPoolForTokens" | "bestSwapPath" | "customUniV3Router" | "defaultOutputToken" | "fundingStrategiesByName" | "fundingStrategiesByTokens" | "getBestSwapPath" | "getFundingStrategies" | "getFundingStrategy" | "getSlippage" | "initialize" | "owner" | "reinitialize" | "swap" | "uniswapV3Fees"): FunctionFragment;
    encodeFunctionData(functionFragment: "WNATIVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_removeFundingStrategyForPair", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "_setBalancerPoolForTokens", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBestSwapPath", values: [AddressLike, AddressLike, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "_setFundingStrategy", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_setUniV3PoolFee", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "amountOutAndSlippageOfSwap", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "balancerPoolForTokens", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "bestSwapPath", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "customUniV3Router", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultOutputToken", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByName", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByTokens", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getBestSwapPath", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getFundingStrategies", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getFundingStrategy", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getSlippage", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "swap", values: [AddressLike, BigNumberish, AddressLike]): string;
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
}
export interface IFundersRegistry extends BaseContract {
    connect(runner?: ContractRunner | null): IFundersRegistry;
    waitForDeployment(): Promise<this>;
    interface: IFundersRegistryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    WNATIVE: TypedContractMethod<[], [string], "view">;
    _listExtensions: TypedContractMethod<[], [string[]], "view">;
    _registerExtension: TypedContractMethod<[
        extensionToAdd: AddressLike,
        extensionToReplace: AddressLike
    ], [
        void
    ], "nonpayable">;
    _removeFundingStrategyForPair: TypedContractMethod<[
        strategy: AddressLike,
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    _replaceExtensions: TypedContractMethod<[
        extensions: AddressLike[]
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
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string
    ], "view">;
    bestSwapPath: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string[]
    ], "nonpayable">;
    customUniV3Router: TypedContractMethod<[], [string], "nonpayable">;
    defaultOutputToken: TypedContractMethod<[
        inputToken: AddressLike
    ], [
        string
    ], "view">;
    fundingStrategiesByName: TypedContractMethod<[
        name: string
    ], [
        string
    ], "view">;
    fundingStrategiesByTokens: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
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
    reinitialize: TypedContractMethod<[
        _creditDelegator: AddressLike
    ], [
        void
    ], "nonpayable">;
    swap: TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    uniswapV3Fees: TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "WNATIVE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "_listExtensions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "_registerExtension"): TypedContractMethod<[
        extensionToAdd: AddressLike,
        extensionToReplace: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_removeFundingStrategyForPair"): TypedContractMethod<[
        strategy: AddressLike,
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_replaceExtensions"): TypedContractMethod<[extensions: AddressLike[]], [void], "nonpayable">;
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
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "bestSwapPath"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "customUniV3Router"): TypedContractMethod<[], [string], "nonpayable">;
    getFunction(nameOrSignature: "defaultOutputToken"): TypedContractMethod<[inputToken: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "fundingStrategiesByName"): TypedContractMethod<[name: string], [string], "view">;
    getFunction(nameOrSignature: "fundingStrategiesByTokens"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
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
    getFunction(nameOrSignature: "reinitialize"): TypedContractMethod<[_creditDelegator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "uniswapV3Fees"): TypedContractMethod<[], [bigint], "nonpayable">;
    filters: {};
}
