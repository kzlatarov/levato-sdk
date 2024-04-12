import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface IAaveOracleInterface extends Interface {
    getFunction(nameOrSignature: "ADDRESSES_PROVIDER" | "BASE_CURRENCY" | "BASE_CURRENCY_UNIT" | "getAssetPrice" | "getAssetsPrices" | "getFallbackOracle" | "getSourceOfAsset" | "setAssetSources" | "setFallbackOracle"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AssetSourceUpdated" | "BaseCurrencySet" | "FallbackOracleUpdated"): EventFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "BASE_CURRENCY", values?: undefined): string;
    encodeFunctionData(functionFragment: "BASE_CURRENCY_UNIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetsPrices", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "getFallbackOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSourceOfAsset", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setAssetSources", values: [AddressLike[], AddressLike[]]): string;
    encodeFunctionData(functionFragment: "setFallbackOracle", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BASE_CURRENCY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BASE_CURRENCY_UNIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFallbackOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSourceOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetSources", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFallbackOracle", data: BytesLike): Result;
}
export declare namespace AssetSourceUpdatedEvent {
    type InputTuple = [asset: AddressLike, source: AddressLike];
    type OutputTuple = [asset: string, source: string];
    interface OutputObject {
        asset: string;
        source: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BaseCurrencySetEvent {
    type InputTuple = [
        baseCurrency: AddressLike,
        baseCurrencyUnit: BigNumberish
    ];
    type OutputTuple = [baseCurrency: string, baseCurrencyUnit: bigint];
    interface OutputObject {
        baseCurrency: string;
        baseCurrencyUnit: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FallbackOracleUpdatedEvent {
    type InputTuple = [fallbackOracle: AddressLike];
    type OutputTuple = [fallbackOracle: string];
    interface OutputObject {
        fallbackOracle: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IAaveOracle extends BaseContract {
    connect(runner?: ContractRunner | null): IAaveOracle;
    waitForDeployment(): Promise<this>;
    interface: IAaveOracleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ADDRESSES_PROVIDER: TypedContractMethod<[], [string], "view">;
    BASE_CURRENCY: TypedContractMethod<[], [string], "view">;
    BASE_CURRENCY_UNIT: TypedContractMethod<[], [bigint], "view">;
    getAssetPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getAssetsPrices: TypedContractMethod<[
        assets: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    getFallbackOracle: TypedContractMethod<[], [string], "view">;
    getSourceOfAsset: TypedContractMethod<[asset: AddressLike], [string], "view">;
    setAssetSources: TypedContractMethod<[
        assets: AddressLike[],
        sources: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    setFallbackOracle: TypedContractMethod<[
        fallbackOracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "ADDRESSES_PROVIDER"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "BASE_CURRENCY"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "BASE_CURRENCY_UNIT"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPrice"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetsPrices"): TypedContractMethod<[assets: AddressLike[]], [bigint[]], "view">;
    getFunction(nameOrSignature: "getFallbackOracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getSourceOfAsset"): TypedContractMethod<[asset: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "setAssetSources"): TypedContractMethod<[
        assets: AddressLike[],
        sources: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setFallbackOracle"): TypedContractMethod<[fallbackOracle: AddressLike], [void], "nonpayable">;
    getEvent(key: "AssetSourceUpdated"): TypedContractEvent<AssetSourceUpdatedEvent.InputTuple, AssetSourceUpdatedEvent.OutputTuple, AssetSourceUpdatedEvent.OutputObject>;
    getEvent(key: "BaseCurrencySet"): TypedContractEvent<BaseCurrencySetEvent.InputTuple, BaseCurrencySetEvent.OutputTuple, BaseCurrencySetEvent.OutputObject>;
    getEvent(key: "FallbackOracleUpdated"): TypedContractEvent<FallbackOracleUpdatedEvent.InputTuple, FallbackOracleUpdatedEvent.OutputTuple, FallbackOracleUpdatedEvent.OutputObject>;
    filters: {
        "AssetSourceUpdated(address,address)": TypedContractEvent<AssetSourceUpdatedEvent.InputTuple, AssetSourceUpdatedEvent.OutputTuple, AssetSourceUpdatedEvent.OutputObject>;
        AssetSourceUpdated: TypedContractEvent<AssetSourceUpdatedEvent.InputTuple, AssetSourceUpdatedEvent.OutputTuple, AssetSourceUpdatedEvent.OutputObject>;
        "BaseCurrencySet(address,uint256)": TypedContractEvent<BaseCurrencySetEvent.InputTuple, BaseCurrencySetEvent.OutputTuple, BaseCurrencySetEvent.OutputObject>;
        BaseCurrencySet: TypedContractEvent<BaseCurrencySetEvent.InputTuple, BaseCurrencySetEvent.OutputTuple, BaseCurrencySetEvent.OutputObject>;
        "FallbackOracleUpdated(address)": TypedContractEvent<FallbackOracleUpdatedEvent.InputTuple, FallbackOracleUpdatedEvent.OutputTuple, FallbackOracleUpdatedEvent.OutputObject>;
        FallbackOracleUpdated: TypedContractEvent<FallbackOracleUpdatedEvent.InputTuple, FallbackOracleUpdatedEvent.OutputTuple, FallbackOracleUpdatedEvent.OutputObject>;
    };
}
