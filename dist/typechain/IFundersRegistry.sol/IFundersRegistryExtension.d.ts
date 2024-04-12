import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface IFundersRegistryExtensionInterface extends Interface {
    getFunction(nameOrSignature: "_removeFundingStrategyForPair" | "_setBalancerPoolForTokens" | "_setBestSwapPath" | "_setFundingStrategy" | "_setUniV3PoolFee" | "amountOutAndSlippageOfSwap" | "getBestSwapPath" | "getFundingStrategies" | "getFundingStrategy" | "getSlippage" | "initialize" | "reinitialize" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "_removeFundingStrategyForPair", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBalancerPoolForTokens", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBestSwapPath", values: [AddressLike, AddressLike, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "_setFundingStrategy", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_setUniV3PoolFee", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "amountOutAndSlippageOfSwap", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "getBestSwapPath", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getFundingStrategies", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getFundingStrategy", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getSlippage", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "swap", values: [AddressLike, BigNumberish, AddressLike]): string;
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
}
export interface IFundersRegistryExtension extends BaseContract {
    connect(runner?: ContractRunner | null): IFundersRegistryExtension;
    waitForDeployment(): Promise<this>;
    interface: IFundersRegistryExtensionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
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
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
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
    getFunction(nameOrSignature: "reinitialize"): TypedContractMethod<[_creditDelegator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    filters: {};
}
