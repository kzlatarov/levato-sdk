import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface DSTestInterface extends Interface {
    getFunction(nameOrSignature: "IS_TEST" | "failed"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "log" | "log_address" | "log_bytes" | "log_bytes32" | "log_int" | "log_named_address" | "log_named_bytes" | "log_named_bytes32" | "log_named_decimal_int" | "log_named_decimal_uint" | "log_named_int" | "log_named_string" | "log_named_uint" | "log_string" | "log_uint" | "logs"): EventFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
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
export interface DSTest extends BaseContract {
    connect(runner?: ContractRunner | null): DSTest;
    waitForDeployment(): Promise<this>;
    interface: DSTestInterface;
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
    failed: TypedContractMethod<[], [boolean], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "IS_TEST"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "failed"): TypedContractMethod<[], [boolean], "nonpayable">;
    getEvent(key: "log"): TypedContractEvent<logEvent.InputTuple, logEvent.OutputTuple, logEvent.OutputObject>;
    getEvent(key: "log_address"): TypedContractEvent<log_addressEvent.InputTuple, log_addressEvent.OutputTuple, log_addressEvent.OutputObject>;
    getEvent(key: "log_bytes"): TypedContractEvent<log_bytesEvent.InputTuple, log_bytesEvent.OutputTuple, log_bytesEvent.OutputObject>;
    getEvent(key: "log_bytes32"): TypedContractEvent<log_bytes32Event.InputTuple, log_bytes32Event.OutputTuple, log_bytes32Event.OutputObject>;
    getEvent(key: "log_int"): TypedContractEvent<log_intEvent.InputTuple, log_intEvent.OutputTuple, log_intEvent.OutputObject>;
    getEvent(key: "log_named_address"): TypedContractEvent<log_named_addressEvent.InputTuple, log_named_addressEvent.OutputTuple, log_named_addressEvent.OutputObject>;
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
        "log_bytes(bytes)": TypedContractEvent<log_bytesEvent.InputTuple, log_bytesEvent.OutputTuple, log_bytesEvent.OutputObject>;
        log_bytes: TypedContractEvent<log_bytesEvent.InputTuple, log_bytesEvent.OutputTuple, log_bytesEvent.OutputObject>;
        "log_bytes32(bytes32)": TypedContractEvent<log_bytes32Event.InputTuple, log_bytes32Event.OutputTuple, log_bytes32Event.OutputObject>;
        log_bytes32: TypedContractEvent<log_bytes32Event.InputTuple, log_bytes32Event.OutputTuple, log_bytes32Event.OutputObject>;
        "log_int(int256)": TypedContractEvent<log_intEvent.InputTuple, log_intEvent.OutputTuple, log_intEvent.OutputObject>;
        log_int: TypedContractEvent<log_intEvent.InputTuple, log_intEvent.OutputTuple, log_intEvent.OutputObject>;
        "log_named_address(string,address)": TypedContractEvent<log_named_addressEvent.InputTuple, log_named_addressEvent.OutputTuple, log_named_addressEvent.OutputObject>;
        log_named_address: TypedContractEvent<log_named_addressEvent.InputTuple, log_named_addressEvent.OutputTuple, log_named_addressEvent.OutputObject>;
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
