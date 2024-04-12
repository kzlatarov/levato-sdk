import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface MasterPriceOracleInterface extends Interface {
    getFunction(nameOrSignature: "add" | "admin" | "changeAdmin" | "defaultOracle" | "initialize" | "oracles" | "price" | "setDefaultOracle" | "wtoken"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "NewAdmin" | "NewDefaultOracle" | "NewOracle"): EventFragment;
    encodeFunctionData(functionFragment: "add", values: [AddressLike[], AddressLike[]]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "defaultOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        AddressLike[],
        AddressLike[],
        AddressLike,
        AddressLike,
        AddressLike
    ]): string;
    encodeFunctionData(functionFragment: "oracles", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "price", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setDefaultOracle", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "wtoken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wtoken", data: BytesLike): Result;
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
export declare namespace NewAdminEvent {
    type InputTuple = [oldAdmin: AddressLike, newAdmin: AddressLike];
    type OutputTuple = [oldAdmin: string, newAdmin: string];
    interface OutputObject {
        oldAdmin: string;
        newAdmin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewDefaultOracleEvent {
    type InputTuple = [oldOracle: AddressLike, newOracle: AddressLike];
    type OutputTuple = [oldOracle: string, newOracle: string];
    interface OutputObject {
        oldOracle: string;
        newOracle: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace NewOracleEvent {
    type InputTuple = [
        underlying: AddressLike,
        oldOracle: AddressLike,
        newOracle: AddressLike
    ];
    type OutputTuple = [
        underlying: string,
        oldOracle: string,
        newOracle: string
    ];
    interface OutputObject {
        underlying: string;
        oldOracle: string;
        newOracle: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface MasterPriceOracle extends BaseContract {
    connect(runner?: ContractRunner | null): MasterPriceOracle;
    waitForDeployment(): Promise<this>;
    interface: MasterPriceOracleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    add: TypedContractMethod<[
        underlyings: AddressLike[],
        _oracles: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    admin: TypedContractMethod<[], [string], "view">;
    changeAdmin: TypedContractMethod<[
        newAdmin: AddressLike
    ], [
        void
    ], "nonpayable">;
    defaultOracle: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        underlyings: AddressLike[],
        _oracles: AddressLike[],
        _defaultOracle: AddressLike,
        _admin: AddressLike,
        _wtoken: AddressLike
    ], [
        void
    ], "nonpayable">;
    oracles: TypedContractMethod<[arg0: AddressLike], [string], "view">;
    price: TypedContractMethod<[underlying: AddressLike], [bigint], "view">;
    setDefaultOracle: TypedContractMethod<[
        newOracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    wtoken: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "add"): TypedContractMethod<[
        underlyings: AddressLike[],
        _oracles: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "changeAdmin"): TypedContractMethod<[newAdmin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "defaultOracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        underlyings: AddressLike[],
        _oracles: AddressLike[],
        _defaultOracle: AddressLike,
        _admin: AddressLike,
        _wtoken: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "oracles"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "price"): TypedContractMethod<[underlying: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "setDefaultOracle"): TypedContractMethod<[newOracle: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "wtoken"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "NewAdmin"): TypedContractEvent<NewAdminEvent.InputTuple, NewAdminEvent.OutputTuple, NewAdminEvent.OutputObject>;
    getEvent(key: "NewDefaultOracle"): TypedContractEvent<NewDefaultOracleEvent.InputTuple, NewDefaultOracleEvent.OutputTuple, NewDefaultOracleEvent.OutputObject>;
    getEvent(key: "NewOracle"): TypedContractEvent<NewOracleEvent.InputTuple, NewOracleEvent.OutputTuple, NewOracleEvent.OutputObject>;
    filters: {
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "NewAdmin(address,address)": TypedContractEvent<NewAdminEvent.InputTuple, NewAdminEvent.OutputTuple, NewAdminEvent.OutputObject>;
        NewAdmin: TypedContractEvent<NewAdminEvent.InputTuple, NewAdminEvent.OutputTuple, NewAdminEvent.OutputObject>;
        "NewDefaultOracle(address,address)": TypedContractEvent<NewDefaultOracleEvent.InputTuple, NewDefaultOracleEvent.OutputTuple, NewDefaultOracleEvent.OutputObject>;
        NewDefaultOracle: TypedContractEvent<NewDefaultOracleEvent.InputTuple, NewDefaultOracleEvent.OutputTuple, NewDefaultOracleEvent.OutputObject>;
        "NewOracle(address,address,address)": TypedContractEvent<NewOracleEvent.InputTuple, NewOracleEvent.OutputTuple, NewOracleEvent.OutputObject>;
        NewOracle: TypedContractEvent<NewOracleEvent.InputTuple, NewOracleEvent.OutputTuple, NewOracleEvent.OutputObject>;
    };
}
