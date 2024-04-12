import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface ILendingPoolAddressesProviderInterface extends Interface {
    getFunction(nameOrSignature: "getAddress" | "getEmergencyAdmin" | "getLendingPool" | "getLendingPoolCollateralManager" | "getLendingPoolConfigurator" | "getLendingRateOracle" | "getMarketId" | "getPoolAdmin" | "getPriceOracle" | "setAddress" | "setAddressAsProxy" | "setEmergencyAdmin" | "setLendingPoolCollateralManager" | "setLendingPoolConfiguratorImpl" | "setLendingPoolImpl" | "setLendingRateOracle" | "setMarketId" | "setPoolAdmin" | "setPriceOracle"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AddressSet" | "ConfigurationAdminUpdated" | "EmergencyAdminUpdated" | "LendingPoolCollateralManagerUpdated" | "LendingPoolConfiguratorUpdated" | "LendingPoolUpdated" | "LendingRateOracleUpdated" | "MarketIdSet" | "PriceOracleUpdated" | "ProxyCreated"): EventFragment;
    encodeFunctionData(functionFragment: "getAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getEmergencyAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLendingPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLendingPoolCollateralManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLendingPoolConfigurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLendingRateOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMarketId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAddress", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setAddressAsProxy", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setEmergencyAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setLendingPoolCollateralManager", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setLendingPoolConfiguratorImpl", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setLendingPoolImpl", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setLendingRateOracle", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setMarketId", values: [string]): string;
    encodeFunctionData(functionFragment: "setPoolAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setPriceOracle", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEmergencyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLendingPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLendingPoolCollateralManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLendingPoolConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLendingRateOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressAsProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmergencyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLendingPoolCollateralManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLendingPoolConfiguratorImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLendingPoolImpl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLendingRateOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceOracle", data: BytesLike): Result;
}
export declare namespace AddressSetEvent {
    type InputTuple = [
        id: BytesLike,
        newAddress: AddressLike,
        hasProxy: boolean
    ];
    type OutputTuple = [id: string, newAddress: string, hasProxy: boolean];
    interface OutputObject {
        id: string;
        newAddress: string;
        hasProxy: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ConfigurationAdminUpdatedEvent {
    type InputTuple = [newAddress: AddressLike];
    type OutputTuple = [newAddress: string];
    interface OutputObject {
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace EmergencyAdminUpdatedEvent {
    type InputTuple = [newAddress: AddressLike];
    type OutputTuple = [newAddress: string];
    interface OutputObject {
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LendingPoolCollateralManagerUpdatedEvent {
    type InputTuple = [newAddress: AddressLike];
    type OutputTuple = [newAddress: string];
    interface OutputObject {
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LendingPoolConfiguratorUpdatedEvent {
    type InputTuple = [newAddress: AddressLike];
    type OutputTuple = [newAddress: string];
    interface OutputObject {
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LendingPoolUpdatedEvent {
    type InputTuple = [newAddress: AddressLike];
    type OutputTuple = [newAddress: string];
    interface OutputObject {
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LendingRateOracleUpdatedEvent {
    type InputTuple = [newAddress: AddressLike];
    type OutputTuple = [newAddress: string];
    interface OutputObject {
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MarketIdSetEvent {
    type InputTuple = [newMarketId: string];
    type OutputTuple = [newMarketId: string];
    interface OutputObject {
        newMarketId: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PriceOracleUpdatedEvent {
    type InputTuple = [newAddress: AddressLike];
    type OutputTuple = [newAddress: string];
    interface OutputObject {
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProxyCreatedEvent {
    type InputTuple = [id: BytesLike, newAddress: AddressLike];
    type OutputTuple = [id: string, newAddress: string];
    interface OutputObject {
        id: string;
        newAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ILendingPoolAddressesProvider extends BaseContract {
    connect(runner?: ContractRunner | null): ILendingPoolAddressesProvider;
    waitForDeployment(): Promise<this>;
    interface: ILendingPoolAddressesProviderInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getAddress: TypedContractMethod<[id: BytesLike], [string], "view">;
    getEmergencyAdmin: TypedContractMethod<[], [string], "view">;
    getLendingPool: TypedContractMethod<[], [string], "view">;
    getLendingPoolCollateralManager: TypedContractMethod<[], [string], "view">;
    getLendingPoolConfigurator: TypedContractMethod<[], [string], "view">;
    getLendingRateOracle: TypedContractMethod<[], [string], "view">;
    getMarketId: TypedContractMethod<[], [string], "view">;
    getPoolAdmin: TypedContractMethod<[], [string], "view">;
    getPriceOracle: TypedContractMethod<[], [string], "view">;
    setAddress: TypedContractMethod<[
        id: BytesLike,
        newAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    setAddressAsProxy: TypedContractMethod<[
        id: BytesLike,
        impl: AddressLike
    ], [
        void
    ], "nonpayable">;
    setEmergencyAdmin: TypedContractMethod<[
        admin: AddressLike
    ], [
        void
    ], "nonpayable">;
    setLendingPoolCollateralManager: TypedContractMethod<[
        manager: AddressLike
    ], [
        void
    ], "nonpayable">;
    setLendingPoolConfiguratorImpl: TypedContractMethod<[
        configurator: AddressLike
    ], [
        void
    ], "nonpayable">;
    setLendingPoolImpl: TypedContractMethod<[
        pool: AddressLike
    ], [
        void
    ], "nonpayable">;
    setLendingRateOracle: TypedContractMethod<[
        lendingRateOracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    setMarketId: TypedContractMethod<[marketId: string], [void], "nonpayable">;
    setPoolAdmin: TypedContractMethod<[admin: AddressLike], [void], "nonpayable">;
    setPriceOracle: TypedContractMethod<[
        priceOracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getAddress"): TypedContractMethod<[id: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getEmergencyAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getLendingPool"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getLendingPoolCollateralManager"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getLendingPoolConfigurator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getLendingRateOracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getMarketId"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPoolAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getPriceOracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setAddress"): TypedContractMethod<[
        id: BytesLike,
        newAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setAddressAsProxy"): TypedContractMethod<[
        id: BytesLike,
        impl: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setEmergencyAdmin"): TypedContractMethod<[admin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setLendingPoolCollateralManager"): TypedContractMethod<[manager: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setLendingPoolConfiguratorImpl"): TypedContractMethod<[configurator: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setLendingPoolImpl"): TypedContractMethod<[pool: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setLendingRateOracle"): TypedContractMethod<[
        lendingRateOracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setMarketId"): TypedContractMethod<[marketId: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "setPoolAdmin"): TypedContractMethod<[admin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setPriceOracle"): TypedContractMethod<[priceOracle: AddressLike], [void], "nonpayable">;
    getEvent(key: "AddressSet"): TypedContractEvent<AddressSetEvent.InputTuple, AddressSetEvent.OutputTuple, AddressSetEvent.OutputObject>;
    getEvent(key: "ConfigurationAdminUpdated"): TypedContractEvent<ConfigurationAdminUpdatedEvent.InputTuple, ConfigurationAdminUpdatedEvent.OutputTuple, ConfigurationAdminUpdatedEvent.OutputObject>;
    getEvent(key: "EmergencyAdminUpdated"): TypedContractEvent<EmergencyAdminUpdatedEvent.InputTuple, EmergencyAdminUpdatedEvent.OutputTuple, EmergencyAdminUpdatedEvent.OutputObject>;
    getEvent(key: "LendingPoolCollateralManagerUpdated"): TypedContractEvent<LendingPoolCollateralManagerUpdatedEvent.InputTuple, LendingPoolCollateralManagerUpdatedEvent.OutputTuple, LendingPoolCollateralManagerUpdatedEvent.OutputObject>;
    getEvent(key: "LendingPoolConfiguratorUpdated"): TypedContractEvent<LendingPoolConfiguratorUpdatedEvent.InputTuple, LendingPoolConfiguratorUpdatedEvent.OutputTuple, LendingPoolConfiguratorUpdatedEvent.OutputObject>;
    getEvent(key: "LendingPoolUpdated"): TypedContractEvent<LendingPoolUpdatedEvent.InputTuple, LendingPoolUpdatedEvent.OutputTuple, LendingPoolUpdatedEvent.OutputObject>;
    getEvent(key: "LendingRateOracleUpdated"): TypedContractEvent<LendingRateOracleUpdatedEvent.InputTuple, LendingRateOracleUpdatedEvent.OutputTuple, LendingRateOracleUpdatedEvent.OutputObject>;
    getEvent(key: "MarketIdSet"): TypedContractEvent<MarketIdSetEvent.InputTuple, MarketIdSetEvent.OutputTuple, MarketIdSetEvent.OutputObject>;
    getEvent(key: "PriceOracleUpdated"): TypedContractEvent<PriceOracleUpdatedEvent.InputTuple, PriceOracleUpdatedEvent.OutputTuple, PriceOracleUpdatedEvent.OutputObject>;
    getEvent(key: "ProxyCreated"): TypedContractEvent<ProxyCreatedEvent.InputTuple, ProxyCreatedEvent.OutputTuple, ProxyCreatedEvent.OutputObject>;
    filters: {
        "AddressSet(bytes32,address,bool)": TypedContractEvent<AddressSetEvent.InputTuple, AddressSetEvent.OutputTuple, AddressSetEvent.OutputObject>;
        AddressSet: TypedContractEvent<AddressSetEvent.InputTuple, AddressSetEvent.OutputTuple, AddressSetEvent.OutputObject>;
        "ConfigurationAdminUpdated(address)": TypedContractEvent<ConfigurationAdminUpdatedEvent.InputTuple, ConfigurationAdminUpdatedEvent.OutputTuple, ConfigurationAdminUpdatedEvent.OutputObject>;
        ConfigurationAdminUpdated: TypedContractEvent<ConfigurationAdminUpdatedEvent.InputTuple, ConfigurationAdminUpdatedEvent.OutputTuple, ConfigurationAdminUpdatedEvent.OutputObject>;
        "EmergencyAdminUpdated(address)": TypedContractEvent<EmergencyAdminUpdatedEvent.InputTuple, EmergencyAdminUpdatedEvent.OutputTuple, EmergencyAdminUpdatedEvent.OutputObject>;
        EmergencyAdminUpdated: TypedContractEvent<EmergencyAdminUpdatedEvent.InputTuple, EmergencyAdminUpdatedEvent.OutputTuple, EmergencyAdminUpdatedEvent.OutputObject>;
        "LendingPoolCollateralManagerUpdated(address)": TypedContractEvent<LendingPoolCollateralManagerUpdatedEvent.InputTuple, LendingPoolCollateralManagerUpdatedEvent.OutputTuple, LendingPoolCollateralManagerUpdatedEvent.OutputObject>;
        LendingPoolCollateralManagerUpdated: TypedContractEvent<LendingPoolCollateralManagerUpdatedEvent.InputTuple, LendingPoolCollateralManagerUpdatedEvent.OutputTuple, LendingPoolCollateralManagerUpdatedEvent.OutputObject>;
        "LendingPoolConfiguratorUpdated(address)": TypedContractEvent<LendingPoolConfiguratorUpdatedEvent.InputTuple, LendingPoolConfiguratorUpdatedEvent.OutputTuple, LendingPoolConfiguratorUpdatedEvent.OutputObject>;
        LendingPoolConfiguratorUpdated: TypedContractEvent<LendingPoolConfiguratorUpdatedEvent.InputTuple, LendingPoolConfiguratorUpdatedEvent.OutputTuple, LendingPoolConfiguratorUpdatedEvent.OutputObject>;
        "LendingPoolUpdated(address)": TypedContractEvent<LendingPoolUpdatedEvent.InputTuple, LendingPoolUpdatedEvent.OutputTuple, LendingPoolUpdatedEvent.OutputObject>;
        LendingPoolUpdated: TypedContractEvent<LendingPoolUpdatedEvent.InputTuple, LendingPoolUpdatedEvent.OutputTuple, LendingPoolUpdatedEvent.OutputObject>;
        "LendingRateOracleUpdated(address)": TypedContractEvent<LendingRateOracleUpdatedEvent.InputTuple, LendingRateOracleUpdatedEvent.OutputTuple, LendingRateOracleUpdatedEvent.OutputObject>;
        LendingRateOracleUpdated: TypedContractEvent<LendingRateOracleUpdatedEvent.InputTuple, LendingRateOracleUpdatedEvent.OutputTuple, LendingRateOracleUpdatedEvent.OutputObject>;
        "MarketIdSet(string)": TypedContractEvent<MarketIdSetEvent.InputTuple, MarketIdSetEvent.OutputTuple, MarketIdSetEvent.OutputObject>;
        MarketIdSet: TypedContractEvent<MarketIdSetEvent.InputTuple, MarketIdSetEvent.OutputTuple, MarketIdSetEvent.OutputObject>;
        "PriceOracleUpdated(address)": TypedContractEvent<PriceOracleUpdatedEvent.InputTuple, PriceOracleUpdatedEvent.OutputTuple, PriceOracleUpdatedEvent.OutputObject>;
        PriceOracleUpdated: TypedContractEvent<PriceOracleUpdatedEvent.InputTuple, PriceOracleUpdatedEvent.OutputTuple, PriceOracleUpdatedEvent.OutputObject>;
        "ProxyCreated(bytes32,address)": TypedContractEvent<ProxyCreatedEvent.InputTuple, ProxyCreatedEvent.OutputTuple, ProxyCreatedEvent.OutputObject>;
        ProxyCreated: TypedContractEvent<ProxyCreatedEvent.InputTuple, ProxyCreatedEvent.OutputTuple, ProxyCreatedEvent.OutputObject>;
    };
}
