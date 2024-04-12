import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export declare namespace StdInvariant {
    type FuzzSelectorStruct = {
        addr: AddressLike;
        selectors: BytesLike[];
    };
    type FuzzSelectorStructOutput = [addr: string, selectors: string[]] & {
        addr: string;
        selectors: string[];
    };
}
export interface BaseTestInterface extends Interface {
    getFunction(nameOrSignature: "IS_TEST" | "asArray(address,address,address,address,address)" | "asArray(address,address,address)" | "asArray(address,address)" | "asArray(address)" | "dai" | "delegator" | "excludeArtifacts" | "excludeContracts" | "excludeSenders" | "failed" | "irm" | "lens" | "lpf" | "maticx" | "mpo" | "proxyAdmin" | "registry" | "router" | "sammUsdrUsdc" | "stmatic" | "targetArtifactSelectors" | "targetArtifacts" | "targetContracts" | "targetSelectors" | "targetSenders" | "usdc" | "usdt" | "wbtc" | "weth" | "wmatic" | "wsteth"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "log" | "log_address" | "log_array(uint256[])" | "log_array(int256[])" | "log_array(address[])" | "log_bytes" | "log_bytes32" | "log_int" | "log_named_address" | "log_named_array(string,uint256[])" | "log_named_array(string,int256[])" | "log_named_array(string,address[])" | "log_named_bytes" | "log_named_bytes32" | "log_named_decimal_int" | "log_named_decimal_uint" | "log_named_int" | "log_named_string" | "log_named_uint" | "log_string" | "log_uint" | "logs"): EventFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "asArray(address,address,address,address,address)", values: [AddressLike, AddressLike, AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "asArray(address,address,address)", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "asArray(address,address)", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "asArray(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "dai", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "excludeArtifacts", values?: undefined): string;
    encodeFunctionData(functionFragment: "excludeContracts", values?: undefined): string;
    encodeFunctionData(functionFragment: "excludeSenders", values?: undefined): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "irm", values?: undefined): string;
    encodeFunctionData(functionFragment: "lens", values?: undefined): string;
    encodeFunctionData(functionFragment: "lpf", values?: undefined): string;
    encodeFunctionData(functionFragment: "maticx", values?: undefined): string;
    encodeFunctionData(functionFragment: "mpo", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxyAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "registry", values?: undefined): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "sammUsdrUsdc", values?: undefined): string;
    encodeFunctionData(functionFragment: "stmatic", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetArtifactSelectors", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetArtifacts", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetContracts", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetSelectors", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetSenders", values?: undefined): string;
    encodeFunctionData(functionFragment: "usdc", values?: undefined): string;
    encodeFunctionData(functionFragment: "usdt", values?: undefined): string;
    encodeFunctionData(functionFragment: "wbtc", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "wmatic", values?: undefined): string;
    encodeFunctionData(functionFragment: "wsteth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address,address,address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "excludeArtifacts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "excludeContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "excludeSenders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "irm", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lpf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maticx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mpo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sammUsdrUsdc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stmatic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetArtifactSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetArtifacts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetSenders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wbtc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wmatic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wsteth", data: BytesLike): Result;
}
export declare namespace logEvent {
    type InputTuple = [arg0: string];
    type OutputTuple = [arg0: string];
    interface OutputObject {
        arg0: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_addressEvent {
    type InputTuple = [arg0: AddressLike];
    type OutputTuple = [arg0: string];
    interface OutputObject {
        arg0: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_array_uint256_array_Event {
    type InputTuple = [val: BigNumberish[]];
    type OutputTuple = [val: bigint[]];
    interface OutputObject {
        val: bigint[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_array_int256_array_Event {
    type InputTuple = [val: BigNumberish[]];
    type OutputTuple = [val: bigint[]];
    interface OutputObject {
        val: bigint[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_array_address_array_Event {
    type InputTuple = [val: AddressLike[]];
    type OutputTuple = [val: string[]];
    interface OutputObject {
        val: string[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_bytesEvent {
    type InputTuple = [arg0: BytesLike];
    type OutputTuple = [arg0: string];
    interface OutputObject {
        arg0: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_bytes32Event {
    type InputTuple = [arg0: BytesLike];
    type OutputTuple = [arg0: string];
    interface OutputObject {
        arg0: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_intEvent {
    type InputTuple = [arg0: BigNumberish];
    type OutputTuple = [arg0: bigint];
    interface OutputObject {
        arg0: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_addressEvent {
    type InputTuple = [key: string, val: AddressLike];
    type OutputTuple = [key: string, val: string];
    interface OutputObject {
        key: string;
        val: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_array_string_uint256_array_Event {
    type InputTuple = [key: string, val: BigNumberish[]];
    type OutputTuple = [key: string, val: bigint[]];
    interface OutputObject {
        key: string;
        val: bigint[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_array_string_int256_array_Event {
    type InputTuple = [key: string, val: BigNumberish[]];
    type OutputTuple = [key: string, val: bigint[]];
    interface OutputObject {
        key: string;
        val: bigint[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_array_string_address_array_Event {
    type InputTuple = [key: string, val: AddressLike[]];
    type OutputTuple = [key: string, val: string[]];
    interface OutputObject {
        key: string;
        val: string[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_bytesEvent {
    type InputTuple = [key: string, val: BytesLike];
    type OutputTuple = [key: string, val: string];
    interface OutputObject {
        key: string;
        val: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_bytes32Event {
    type InputTuple = [key: string, val: BytesLike];
    type OutputTuple = [key: string, val: string];
    interface OutputObject {
        key: string;
        val: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_decimal_intEvent {
    type InputTuple = [
        key: string,
        val: BigNumberish,
        decimals: BigNumberish
    ];
    type OutputTuple = [key: string, val: bigint, decimals: bigint];
    interface OutputObject {
        key: string;
        val: bigint;
        decimals: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_decimal_uintEvent {
    type InputTuple = [
        key: string,
        val: BigNumberish,
        decimals: BigNumberish
    ];
    type OutputTuple = [key: string, val: bigint, decimals: bigint];
    interface OutputObject {
        key: string;
        val: bigint;
        decimals: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_intEvent {
    type InputTuple = [key: string, val: BigNumberish];
    type OutputTuple = [key: string, val: bigint];
    interface OutputObject {
        key: string;
        val: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_stringEvent {
    type InputTuple = [key: string, val: string];
    type OutputTuple = [key: string, val: string];
    interface OutputObject {
        key: string;
        val: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_named_uintEvent {
    type InputTuple = [key: string, val: BigNumberish];
    type OutputTuple = [key: string, val: bigint];
    interface OutputObject {
        key: string;
        val: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_stringEvent {
    type InputTuple = [arg0: string];
    type OutputTuple = [arg0: string];
    interface OutputObject {
        arg0: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace log_uintEvent {
    type InputTuple = [arg0: BigNumberish];
    type OutputTuple = [arg0: bigint];
    interface OutputObject {
        arg0: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace logsEvent {
    type InputTuple = [arg0: BytesLike];
    type OutputTuple = [arg0: string];
    interface OutputObject {
        arg0: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface BaseTest extends BaseContract {
    connect(runner?: ContractRunner | null): BaseTest;
    waitForDeployment(): Promise<this>;
    interface: BaseTestInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    IS_TEST: TypedContractMethod<[], [boolean], "view">;
    "asArray(address,address,address,address,address)": TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike,
        value2: AddressLike,
        value3: AddressLike,
        value4: AddressLike
    ], [
        string[]
    ], "view">;
    "asArray(address,address,address)": TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike,
        value2: AddressLike
    ], [
        string[]
    ], "view">;
    "asArray(address,address)": TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike
    ], [
        string[]
    ], "view">;
    "asArray(address)": TypedContractMethod<[
        value: AddressLike
    ], [
        string[]
    ], "view">;
    dai: TypedContractMethod<[], [string], "view">;
    delegator: TypedContractMethod<[], [string], "view">;
    excludeArtifacts: TypedContractMethod<[], [string[]], "view">;
    excludeContracts: TypedContractMethod<[], [string[]], "view">;
    excludeSenders: TypedContractMethod<[], [string[]], "view">;
    failed: TypedContractMethod<[], [boolean], "nonpayable">;
    irm: TypedContractMethod<[], [string], "view">;
    lens: TypedContractMethod<[], [string], "view">;
    lpf: TypedContractMethod<[], [string], "view">;
    maticx: TypedContractMethod<[], [string], "view">;
    mpo: TypedContractMethod<[], [string], "view">;
    proxyAdmin: TypedContractMethod<[], [string], "view">;
    registry: TypedContractMethod<[], [string], "view">;
    router: TypedContractMethod<[], [string], "view">;
    sammUsdrUsdc: TypedContractMethod<[], [string], "view">;
    stmatic: TypedContractMethod<[], [string], "view">;
    targetArtifactSelectors: TypedContractMethod<[
    ], [
        StdInvariant.FuzzSelectorStructOutput[]
    ], "view">;
    targetArtifacts: TypedContractMethod<[], [string[]], "view">;
    targetContracts: TypedContractMethod<[], [string[]], "view">;
    targetSelectors: TypedContractMethod<[
    ], [
        StdInvariant.FuzzSelectorStructOutput[]
    ], "view">;
    targetSenders: TypedContractMethod<[], [string[]], "view">;
    usdc: TypedContractMethod<[], [string], "view">;
    usdt: TypedContractMethod<[], [string], "view">;
    wbtc: TypedContractMethod<[], [string], "view">;
    weth: TypedContractMethod<[], [string], "view">;
    wmatic: TypedContractMethod<[], [string], "view">;
    wsteth: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "IS_TEST"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "asArray(address,address,address,address,address)"): TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike,
        value2: AddressLike,
        value3: AddressLike,
        value4: AddressLike
    ], [
        string[]
    ], "view">;
    getFunction(nameOrSignature: "asArray(address,address,address)"): TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike,
        value2: AddressLike
    ], [
        string[]
    ], "view">;
    getFunction(nameOrSignature: "asArray(address,address)"): TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike
    ], [
        string[]
    ], "view">;
    getFunction(nameOrSignature: "asArray(address)"): TypedContractMethod<[value: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "dai"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "delegator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "excludeArtifacts"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "excludeContracts"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "excludeSenders"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "failed"): TypedContractMethod<[], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "irm"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "lens"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "lpf"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "maticx"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "mpo"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "proxyAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "registry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "router"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "sammUsdrUsdc"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "stmatic"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "targetArtifactSelectors"): TypedContractMethod<[], [StdInvariant.FuzzSelectorStructOutput[]], "view">;
    getFunction(nameOrSignature: "targetArtifacts"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "targetContracts"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "targetSelectors"): TypedContractMethod<[], [StdInvariant.FuzzSelectorStructOutput[]], "view">;
    getFunction(nameOrSignature: "targetSenders"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "usdc"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "usdt"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "wbtc"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "weth"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "wmatic"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "wsteth"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "log"): TypedContractEvent<logEvent.InputTuple, logEvent.OutputTuple, logEvent.OutputObject>;
    getEvent(key: "log_address"): TypedContractEvent<log_addressEvent.InputTuple, log_addressEvent.OutputTuple, log_addressEvent.OutputObject>;
    getEvent(key: "log_array(uint256[])"): TypedContractEvent<log_array_uint256_array_Event.InputTuple, log_array_uint256_array_Event.OutputTuple, log_array_uint256_array_Event.OutputObject>;
    getEvent(key: "log_array(int256[])"): TypedContractEvent<log_array_int256_array_Event.InputTuple, log_array_int256_array_Event.OutputTuple, log_array_int256_array_Event.OutputObject>;
    getEvent(key: "log_array(address[])"): TypedContractEvent<log_array_address_array_Event.InputTuple, log_array_address_array_Event.OutputTuple, log_array_address_array_Event.OutputObject>;
    getEvent(key: "log_bytes"): TypedContractEvent<log_bytesEvent.InputTuple, log_bytesEvent.OutputTuple, log_bytesEvent.OutputObject>;
    getEvent(key: "log_bytes32"): TypedContractEvent<log_bytes32Event.InputTuple, log_bytes32Event.OutputTuple, log_bytes32Event.OutputObject>;
    getEvent(key: "log_int"): TypedContractEvent<log_intEvent.InputTuple, log_intEvent.OutputTuple, log_intEvent.OutputObject>;
    getEvent(key: "log_named_address"): TypedContractEvent<log_named_addressEvent.InputTuple, log_named_addressEvent.OutputTuple, log_named_addressEvent.OutputObject>;
    getEvent(key: "log_named_array(string,uint256[])"): TypedContractEvent<log_named_array_string_uint256_array_Event.InputTuple, log_named_array_string_uint256_array_Event.OutputTuple, log_named_array_string_uint256_array_Event.OutputObject>;
    getEvent(key: "log_named_array(string,int256[])"): TypedContractEvent<log_named_array_string_int256_array_Event.InputTuple, log_named_array_string_int256_array_Event.OutputTuple, log_named_array_string_int256_array_Event.OutputObject>;
    getEvent(key: "log_named_array(string,address[])"): TypedContractEvent<log_named_array_string_address_array_Event.InputTuple, log_named_array_string_address_array_Event.OutputTuple, log_named_array_string_address_array_Event.OutputObject>;
    getEvent(key: "log_named_bytes"): TypedContractEvent<log_named_bytesEvent.InputTuple, log_named_bytesEvent.OutputTuple, log_named_bytesEvent.OutputObject>;
    getEvent(key: "log_named_bytes32"): TypedContractEvent<log_named_bytes32Event.InputTuple, log_named_bytes32Event.OutputTuple, log_named_bytes32Event.OutputObject>;
    getEvent(key: "log_named_decimal_int"): TypedContractEvent<log_named_decimal_intEvent.InputTuple, log_named_decimal_intEvent.OutputTuple, log_named_decimal_intEvent.OutputObject>;
    getEvent(key: "log_named_decimal_uint"): TypedContractEvent<log_named_decimal_uintEvent.InputTuple, log_named_decimal_uintEvent.OutputTuple, log_named_decimal_uintEvent.OutputObject>;
    getEvent(key: "log_named_int"): TypedContractEvent<log_named_intEvent.InputTuple, log_named_intEvent.OutputTuple, log_named_intEvent.OutputObject>;
    getEvent(key: "log_named_string"): TypedContractEvent<log_named_stringEvent.InputTuple, log_named_stringEvent.OutputTuple, log_named_stringEvent.OutputObject>;
    getEvent(key: "log_named_uint"): TypedContractEvent<log_named_uintEvent.InputTuple, log_named_uintEvent.OutputTuple, log_named_uintEvent.OutputObject>;
    getEvent(key: "log_string"): TypedContractEvent<log_stringEvent.InputTuple, log_stringEvent.OutputTuple, log_stringEvent.OutputObject>;
    getEvent(key: "log_uint"): TypedContractEvent<log_uintEvent.InputTuple, log_uintEvent.OutputTuple, log_uintEvent.OutputObject>;
    getEvent(key: "logs"): TypedContractEvent<logsEvent.InputTuple, logsEvent.OutputTuple, logsEvent.OutputObject>;
    filters: {
        "log(string)": TypedContractEvent<logEvent.InputTuple, logEvent.OutputTuple, logEvent.OutputObject>;
        log: TypedContractEvent<logEvent.InputTuple, logEvent.OutputTuple, logEvent.OutputObject>;
        "log_address(address)": TypedContractEvent<log_addressEvent.InputTuple, log_addressEvent.OutputTuple, log_addressEvent.OutputObject>;
        log_address: TypedContractEvent<log_addressEvent.InputTuple, log_addressEvent.OutputTuple, log_addressEvent.OutputObject>;
        "log_array(uint256[])": TypedContractEvent<log_array_uint256_array_Event.InputTuple, log_array_uint256_array_Event.OutputTuple, log_array_uint256_array_Event.OutputObject>;
        "log_array(int256[])": TypedContractEvent<log_array_int256_array_Event.InputTuple, log_array_int256_array_Event.OutputTuple, log_array_int256_array_Event.OutputObject>;
        "log_array(address[])": TypedContractEvent<log_array_address_array_Event.InputTuple, log_array_address_array_Event.OutputTuple, log_array_address_array_Event.OutputObject>;
        "log_bytes(bytes)": TypedContractEvent<log_bytesEvent.InputTuple, log_bytesEvent.OutputTuple, log_bytesEvent.OutputObject>;
        log_bytes: TypedContractEvent<log_bytesEvent.InputTuple, log_bytesEvent.OutputTuple, log_bytesEvent.OutputObject>;
        "log_bytes32(bytes32)": TypedContractEvent<log_bytes32Event.InputTuple, log_bytes32Event.OutputTuple, log_bytes32Event.OutputObject>;
        log_bytes32: TypedContractEvent<log_bytes32Event.InputTuple, log_bytes32Event.OutputTuple, log_bytes32Event.OutputObject>;
        "log_int(int256)": TypedContractEvent<log_intEvent.InputTuple, log_intEvent.OutputTuple, log_intEvent.OutputObject>;
        log_int: TypedContractEvent<log_intEvent.InputTuple, log_intEvent.OutputTuple, log_intEvent.OutputObject>;
        "log_named_address(string,address)": TypedContractEvent<log_named_addressEvent.InputTuple, log_named_addressEvent.OutputTuple, log_named_addressEvent.OutputObject>;
        log_named_address: TypedContractEvent<log_named_addressEvent.InputTuple, log_named_addressEvent.OutputTuple, log_named_addressEvent.OutputObject>;
        "log_named_array(string,uint256[])": TypedContractEvent<log_named_array_string_uint256_array_Event.InputTuple, log_named_array_string_uint256_array_Event.OutputTuple, log_named_array_string_uint256_array_Event.OutputObject>;
        "log_named_array(string,int256[])": TypedContractEvent<log_named_array_string_int256_array_Event.InputTuple, log_named_array_string_int256_array_Event.OutputTuple, log_named_array_string_int256_array_Event.OutputObject>;
        "log_named_array(string,address[])": TypedContractEvent<log_named_array_string_address_array_Event.InputTuple, log_named_array_string_address_array_Event.OutputTuple, log_named_array_string_address_array_Event.OutputObject>;
        "log_named_bytes(string,bytes)": TypedContractEvent<log_named_bytesEvent.InputTuple, log_named_bytesEvent.OutputTuple, log_named_bytesEvent.OutputObject>;
        log_named_bytes: TypedContractEvent<log_named_bytesEvent.InputTuple, log_named_bytesEvent.OutputTuple, log_named_bytesEvent.OutputObject>;
        "log_named_bytes32(string,bytes32)": TypedContractEvent<log_named_bytes32Event.InputTuple, log_named_bytes32Event.OutputTuple, log_named_bytes32Event.OutputObject>;
        log_named_bytes32: TypedContractEvent<log_named_bytes32Event.InputTuple, log_named_bytes32Event.OutputTuple, log_named_bytes32Event.OutputObject>;
        "log_named_decimal_int(string,int256,uint256)": TypedContractEvent<log_named_decimal_intEvent.InputTuple, log_named_decimal_intEvent.OutputTuple, log_named_decimal_intEvent.OutputObject>;
        log_named_decimal_int: TypedContractEvent<log_named_decimal_intEvent.InputTuple, log_named_decimal_intEvent.OutputTuple, log_named_decimal_intEvent.OutputObject>;
        "log_named_decimal_uint(string,uint256,uint256)": TypedContractEvent<log_named_decimal_uintEvent.InputTuple, log_named_decimal_uintEvent.OutputTuple, log_named_decimal_uintEvent.OutputObject>;
        log_named_decimal_uint: TypedContractEvent<log_named_decimal_uintEvent.InputTuple, log_named_decimal_uintEvent.OutputTuple, log_named_decimal_uintEvent.OutputObject>;
        "log_named_int(string,int256)": TypedContractEvent<log_named_intEvent.InputTuple, log_named_intEvent.OutputTuple, log_named_intEvent.OutputObject>;
        log_named_int: TypedContractEvent<log_named_intEvent.InputTuple, log_named_intEvent.OutputTuple, log_named_intEvent.OutputObject>;
        "log_named_string(string,string)": TypedContractEvent<log_named_stringEvent.InputTuple, log_named_stringEvent.OutputTuple, log_named_stringEvent.OutputObject>;
        log_named_string: TypedContractEvent<log_named_stringEvent.InputTuple, log_named_stringEvent.OutputTuple, log_named_stringEvent.OutputObject>;
        "log_named_uint(string,uint256)": TypedContractEvent<log_named_uintEvent.InputTuple, log_named_uintEvent.OutputTuple, log_named_uintEvent.OutputObject>;
        log_named_uint: TypedContractEvent<log_named_uintEvent.InputTuple, log_named_uintEvent.OutputTuple, log_named_uintEvent.OutputObject>;
        "log_string(string)": TypedContractEvent<log_stringEvent.InputTuple, log_stringEvent.OutputTuple, log_stringEvent.OutputObject>;
        log_string: TypedContractEvent<log_stringEvent.InputTuple, log_stringEvent.OutputTuple, log_stringEvent.OutputObject>;
        "log_uint(uint256)": TypedContractEvent<log_uintEvent.InputTuple, log_uintEvent.OutputTuple, log_uintEvent.OutputObject>;
        log_uint: TypedContractEvent<log_uintEvent.InputTuple, log_uintEvent.OutputTuple, log_uintEvent.OutputObject>;
        "logs(bytes)": TypedContractEvent<logsEvent.InputTuple, logsEvent.OutputTuple, logsEvent.OutputObject>;
        logs: TypedContractEvent<logsEvent.InputTuple, logsEvent.OutputTuple, logsEvent.OutputObject>;
    };
}
