import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface IPoolAddressesProviderInterface extends Interface {
    getFunction(nameOrSignature: "getACLAdmin" | "getACLManager" | "getAddress" | "getMarketId" | "getPool" | "getPoolConfigurator" | "getPoolDataProvider" | "getPriceOracle" | "getPriceOracleSentinel" | "setACLAdmin" | "setACLManager" | "setAddress" | "setAddressAsProxy" | "setMarketId" | "setPoolConfiguratorImpl" | "setPoolDataProvider" | "setPoolImpl" | "setPriceOracle" | "setPriceOracleSentinel"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ACLAdminUpdated" | "ACLManagerUpdated" | "AddressSet" | "AddressSetAsProxy" | "MarketIdSet" | "PoolConfiguratorUpdated" | "PoolDataProviderUpdated" | "PoolUpdated" | "PriceOracleSentinelUpdated" | "PriceOracleUpdated" | "ProxyCreated"): EventFragment;
    encodeFunctionData(functionFragment: "getACLAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getACLManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getMarketId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolConfigurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolDataProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceOracleSentinel", values?: undefined): string;
    encodeFunctionData(functionFragment: "setACLAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setACLManager", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setAddress", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setAddressAsProxy", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setMarketId", values: [string]): string;
    encodeFunctionData(functionFragment: "setPoolConfiguratorImpl", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setPoolDataProvider", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setPoolImpl", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setPriceOracle", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setPriceOracleSentinel", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "getACLAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getACLManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolDataProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceOracleSentinel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setACLAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setACLManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressAsProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolConfiguratorImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolDataProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceOracleSentinel", data: BytesLike): Result;
}
export declare namespace ACLAdminUpdatedEvent {
    type InputTuple = [oldAddress: AddressLike, newAddress: AddressLike];
    type OutputTuple = [oldAddress: string, newAddress: string];
    interface OutputObject {
        oldAddress: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ACLManagerUpdatedEvent {
    type InputTuple = [oldAddress: AddressLike, newAddress: AddressLike];
    type OutputTuple = [oldAddress: string, newAddress: string];
    interface OutputObject {
        oldAddress: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AddressSetEvent {
    type InputTuple = [
        id: BytesLike,
        oldAddress: AddressLike,
        newAddress: AddressLike
    ];
    type OutputTuple = [
        id: string,
        oldAddress: string,
        newAddress: string
    ];
    interface OutputObject {
        id: string;
        oldAddress: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AddressSetAsProxyEvent {
    type InputTuple = [
        id: BytesLike,
        proxyAddress: AddressLike,
        oldImplementationAddress: AddressLike,
        newImplementationAddress: AddressLike
    ];
    type OutputTuple = [
        id: string,
        proxyAddress: string,
        oldImplementationAddress: string,
        newImplementationAddress: string
    ];
    interface OutputObject {
        id: string;
        proxyAddress: string;
        oldImplementationAddress: string;
        newImplementationAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketIdSetEvent {
    type InputTuple = [oldMarketId: string, newMarketId: string];
    type OutputTuple = [oldMarketId: string, newMarketId: string];
    interface OutputObject {
        oldMarketId: string;
        newMarketId: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PoolConfiguratorUpdatedEvent {
    type InputTuple = [oldAddress: AddressLike, newAddress: AddressLike];
    type OutputTuple = [oldAddress: string, newAddress: string];
    interface OutputObject {
        oldAddress: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PoolDataProviderUpdatedEvent {
    type InputTuple = [oldAddress: AddressLike, newAddress: AddressLike];
    type OutputTuple = [oldAddress: string, newAddress: string];
    interface OutputObject {
        oldAddress: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PoolUpdatedEvent {
    type InputTuple = [oldAddress: AddressLike, newAddress: AddressLike];
    type OutputTuple = [oldAddress: string, newAddress: string];
    interface OutputObject {
        oldAddress: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceOracleSentinelUpdatedEvent {
    type InputTuple = [oldAddress: AddressLike, newAddress: AddressLike];
    type OutputTuple = [oldAddress: string, newAddress: string];
    interface OutputObject {
        oldAddress: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceOracleUpdatedEvent {
    type InputTuple = [oldAddress: AddressLike, newAddress: AddressLike];
    type OutputTuple = [oldAddress: string, newAddress: string];
    interface OutputObject {
        oldAddress: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProxyCreatedEvent {
    type InputTuple = [
        id: BytesLike,
        proxyAddress: AddressLike,
        implementationAddress: AddressLike
    ];
    type OutputTuple = [
        id: string,
        proxyAddress: string,
        implementationAddress: string
    ];
    interface OutputObject {
        id: string;
        proxyAddress: string;
        implementationAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IPoolAddressesProvider extends BaseContract {
    connect(runner?: ContractRunner | null): IPoolAddressesProvider;
    waitForDeployment(): Promise<this>;
    interface: IPoolAddressesProviderInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getACLAdmin: TypedContractMethod<[], [string], "view">;
    getACLManager: TypedContractMethod<[], [string], "view">;
    getAddress: TypedContractMethod<[id: BytesLike], [string], "view">;
    getMarketId: TypedContractMethod<[], [string], "view">;
    getPool: TypedContractMethod<[], [string], "view">;
    getPoolConfigurator: TypedContractMethod<[], [string], "view">;
    getPoolDataProvider: TypedContractMethod<[], [string], "view">;
    getPriceOracle: TypedContractMethod<[], [string], "view">;
    getPriceOracleSentinel: TypedContractMethod<[], [string], "view">;
    setACLAdmin: TypedContractMethod<[
        newAclAdmin: AddressLike
    ], [
        void
    ], "nonpayable">;
    setACLManager: TypedContractMethod<[
        newAclManager: AddressLike
    ], [
        void
    ], "nonpayable">;
    setAddress: TypedContractMethod<[
        id: BytesLike,
        newAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    setAddressAsProxy: TypedContractMethod<[
        id: BytesLike,
        newImplementationAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    setMarketId: TypedContractMethod<[newMarketId: string], [void], "nonpayable">;
    setPoolConfiguratorImpl: TypedContractMethod<[
        newPoolConfiguratorImpl: AddressLike
    ], [
        void
    ], "nonpayable">;
    setPoolDataProvider: TypedContractMethod<[
        newDataProvider: AddressLike
    ], [
        void
    ], "nonpayable">;
    setPoolImpl: TypedContractMethod<[
        newPoolImpl: AddressLike
    ], [
        void
    ], "nonpayable">;
    setPriceOracle: TypedContractMethod<[
        newPriceOracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    setPriceOracleSentinel: TypedContractMethod<[
        newPriceOracleSentinel: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getACLAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getACLManager"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAddress"): TypedContractMethod<[id: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getMarketId"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPool"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPoolConfigurator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPoolDataProvider"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPriceOracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPriceOracleSentinel"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setACLAdmin"): TypedContractMethod<[newAclAdmin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setACLManager"): TypedContractMethod<[newAclManager: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setAddress"): TypedContractMethod<[
        id: BytesLike,
        newAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setAddressAsProxy"): TypedContractMethod<[
        id: BytesLike,
        newImplementationAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setMarketId"): TypedContractMethod<[newMarketId: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "setPoolConfiguratorImpl"): TypedContractMethod<[
        newPoolConfiguratorImpl: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setPoolDataProvider"): TypedContractMethod<[newDataProvider: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setPoolImpl"): TypedContractMethod<[newPoolImpl: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setPriceOracle"): TypedContractMethod<[newPriceOracle: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setPriceOracleSentinel"): TypedContractMethod<[
        newPriceOracleSentinel: AddressLike
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "ACLAdminUpdated"): TypedContractEvent<ACLAdminUpdatedEvent.InputTuple, ACLAdminUpdatedEvent.OutputTuple, ACLAdminUpdatedEvent.OutputObject>;
    getEvent(key: "ACLManagerUpdated"): TypedContractEvent<ACLManagerUpdatedEvent.InputTuple, ACLManagerUpdatedEvent.OutputTuple, ACLManagerUpdatedEvent.OutputObject>;
    getEvent(key: "AddressSet"): TypedContractEvent<AddressSetEvent.InputTuple, AddressSetEvent.OutputTuple, AddressSetEvent.OutputObject>;
    getEvent(key: "AddressSetAsProxy"): TypedContractEvent<AddressSetAsProxyEvent.InputTuple, AddressSetAsProxyEvent.OutputTuple, AddressSetAsProxyEvent.OutputObject>;
    getEvent(key: "MarketIdSet"): TypedContractEvent<MarketIdSetEvent.InputTuple, MarketIdSetEvent.OutputTuple, MarketIdSetEvent.OutputObject>;
    getEvent(key: "PoolConfiguratorUpdated"): TypedContractEvent<PoolConfiguratorUpdatedEvent.InputTuple, PoolConfiguratorUpdatedEvent.OutputTuple, PoolConfiguratorUpdatedEvent.OutputObject>;
    getEvent(key: "PoolDataProviderUpdated"): TypedContractEvent<PoolDataProviderUpdatedEvent.InputTuple, PoolDataProviderUpdatedEvent.OutputTuple, PoolDataProviderUpdatedEvent.OutputObject>;
    getEvent(key: "PoolUpdated"): TypedContractEvent<PoolUpdatedEvent.InputTuple, PoolUpdatedEvent.OutputTuple, PoolUpdatedEvent.OutputObject>;
    getEvent(key: "PriceOracleSentinelUpdated"): TypedContractEvent<PriceOracleSentinelUpdatedEvent.InputTuple, PriceOracleSentinelUpdatedEvent.OutputTuple, PriceOracleSentinelUpdatedEvent.OutputObject>;
    getEvent(key: "PriceOracleUpdated"): TypedContractEvent<PriceOracleUpdatedEvent.InputTuple, PriceOracleUpdatedEvent.OutputTuple, PriceOracleUpdatedEvent.OutputObject>;
    getEvent(key: "ProxyCreated"): TypedContractEvent<ProxyCreatedEvent.InputTuple, ProxyCreatedEvent.OutputTuple, ProxyCreatedEvent.OutputObject>;
    filters: {
        "ACLAdminUpdated(address,address)": TypedContractEvent<ACLAdminUpdatedEvent.InputTuple, ACLAdminUpdatedEvent.OutputTuple, ACLAdminUpdatedEvent.OutputObject>;
        ACLAdminUpdated: TypedContractEvent<ACLAdminUpdatedEvent.InputTuple, ACLAdminUpdatedEvent.OutputTuple, ACLAdminUpdatedEvent.OutputObject>;
        "ACLManagerUpdated(address,address)": TypedContractEvent<ACLManagerUpdatedEvent.InputTuple, ACLManagerUpdatedEvent.OutputTuple, ACLManagerUpdatedEvent.OutputObject>;
        ACLManagerUpdated: TypedContractEvent<ACLManagerUpdatedEvent.InputTuple, ACLManagerUpdatedEvent.OutputTuple, ACLManagerUpdatedEvent.OutputObject>;
        "AddressSet(bytes32,address,address)": TypedContractEvent<AddressSetEvent.InputTuple, AddressSetEvent.OutputTuple, AddressSetEvent.OutputObject>;
        AddressSet: TypedContractEvent<AddressSetEvent.InputTuple, AddressSetEvent.OutputTuple, AddressSetEvent.OutputObject>;
        "AddressSetAsProxy(bytes32,address,address,address)": TypedContractEvent<AddressSetAsProxyEvent.InputTuple, AddressSetAsProxyEvent.OutputTuple, AddressSetAsProxyEvent.OutputObject>;
        AddressSetAsProxy: TypedContractEvent<AddressSetAsProxyEvent.InputTuple, AddressSetAsProxyEvent.OutputTuple, AddressSetAsProxyEvent.OutputObject>;
        "MarketIdSet(string,string)": TypedContractEvent<MarketIdSetEvent.InputTuple, MarketIdSetEvent.OutputTuple, MarketIdSetEvent.OutputObject>;
        MarketIdSet: TypedContractEvent<MarketIdSetEvent.InputTuple, MarketIdSetEvent.OutputTuple, MarketIdSetEvent.OutputObject>;
        "PoolConfiguratorUpdated(address,address)": TypedContractEvent<PoolConfiguratorUpdatedEvent.InputTuple, PoolConfiguratorUpdatedEvent.OutputTuple, PoolConfiguratorUpdatedEvent.OutputObject>;
        PoolConfiguratorUpdated: TypedContractEvent<PoolConfiguratorUpdatedEvent.InputTuple, PoolConfiguratorUpdatedEvent.OutputTuple, PoolConfiguratorUpdatedEvent.OutputObject>;
        "PoolDataProviderUpdated(address,address)": TypedContractEvent<PoolDataProviderUpdatedEvent.InputTuple, PoolDataProviderUpdatedEvent.OutputTuple, PoolDataProviderUpdatedEvent.OutputObject>;
        PoolDataProviderUpdated: TypedContractEvent<PoolDataProviderUpdatedEvent.InputTuple, PoolDataProviderUpdatedEvent.OutputTuple, PoolDataProviderUpdatedEvent.OutputObject>;
        "PoolUpdated(address,address)": TypedContractEvent<PoolUpdatedEvent.InputTuple, PoolUpdatedEvent.OutputTuple, PoolUpdatedEvent.OutputObject>;
        PoolUpdated: TypedContractEvent<PoolUpdatedEvent.InputTuple, PoolUpdatedEvent.OutputTuple, PoolUpdatedEvent.OutputObject>;
        "PriceOracleSentinelUpdated(address,address)": TypedContractEvent<PriceOracleSentinelUpdatedEvent.InputTuple, PriceOracleSentinelUpdatedEvent.OutputTuple, PriceOracleSentinelUpdatedEvent.OutputObject>;
        PriceOracleSentinelUpdated: TypedContractEvent<PriceOracleSentinelUpdatedEvent.InputTuple, PriceOracleSentinelUpdatedEvent.OutputTuple, PriceOracleSentinelUpdatedEvent.OutputObject>;
        "PriceOracleUpdated(address,address)": TypedContractEvent<PriceOracleUpdatedEvent.InputTuple, PriceOracleUpdatedEvent.OutputTuple, PriceOracleUpdatedEvent.OutputObject>;
        PriceOracleUpdated: TypedContractEvent<PriceOracleUpdatedEvent.InputTuple, PriceOracleUpdatedEvent.OutputTuple, PriceOracleUpdatedEvent.OutputObject>;
        "ProxyCreated(bytes32,address,address)": TypedContractEvent<ProxyCreatedEvent.InputTuple, ProxyCreatedEvent.OutputTuple, ProxyCreatedEvent.OutputObject>;
        ProxyCreated: TypedContractEvent<ProxyCreatedEvent.InputTuple, ProxyCreatedEvent.OutputTuple, ProxyCreatedEvent.OutputObject>;
    };
}
