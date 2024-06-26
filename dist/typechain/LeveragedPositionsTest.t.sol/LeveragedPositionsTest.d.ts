import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace StdInvariant {
    type FuzzSelectorStruct = {
        addr: string;
        selectors: BytesLike[];
    };
    type FuzzSelectorStructOutput = [string, string[]] & {
        addr: string;
        selectors: string[];
    };
}
export interface LeveragedPositionsTestInterface extends utils.Interface {
    functions: {
        "IS_TEST()": FunctionFragment;
        "asArray(address,address,address,address,address)": FunctionFragment;
        "asArray(address,address,address)": FunctionFragment;
        "asArray(address,address)": FunctionFragment;
        "asArray(address)": FunctionFragment;
        "dai()": FunctionFragment;
        "delegator()": FunctionFragment;
        "excludeArtifacts()": FunctionFragment;
        "excludeContracts()": FunctionFragment;
        "excludeSenders()": FunctionFragment;
        "failed()": FunctionFragment;
        "irm()": FunctionFragment;
        "lens()": FunctionFragment;
        "lpf()": FunctionFragment;
        "maticx()": FunctionFragment;
        "modePool()": FunctionFragment;
        "modeUsdc()": FunctionFragment;
        "modeWeth()": FunctionFragment;
        "mpo()": FunctionFragment;
        "proxyAdmin()": FunctionFragment;
        "registry()": FunctionFragment;
        "router()": FunctionFragment;
        "sammUsdrUsdc()": FunctionFragment;
        "stmatic()": FunctionFragment;
        "targetArtifactSelectors()": FunctionFragment;
        "targetArtifacts()": FunctionFragment;
        "targetContracts()": FunctionFragment;
        "targetSelectors()": FunctionFragment;
        "targetSenders()": FunctionFragment;
        "testAllAaveLeveragedPositions()": FunctionFragment;
        "testBaseAaveLeveragedPosition()": FunctionFragment;
        "testFuzzAaveLeveragedPosition(uint64)": FunctionFragment;
        "testSomeAaveLeveragedPosition()": FunctionFragment;
        "testSomeIonicLeveragedPosition()": FunctionFragment;
        "testSpecificAaveLeveragedPosition()": FunctionFragment;
        "usdc()": FunctionFragment;
        "usdt()": FunctionFragment;
        "wbtc()": FunctionFragment;
        "weth()": FunctionFragment;
        "wmatic()": FunctionFragment;
        "wsteth()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_TEST" | "asArray(address,address,address,address,address)" | "asArray(address,address,address)" | "asArray(address,address)" | "asArray(address)" | "dai" | "delegator" | "excludeArtifacts" | "excludeContracts" | "excludeSenders" | "failed" | "irm" | "lens" | "lpf" | "maticx" | "modePool" | "modeUsdc" | "modeWeth" | "mpo" | "proxyAdmin" | "registry" | "router" | "sammUsdrUsdc" | "stmatic" | "targetArtifactSelectors" | "targetArtifacts" | "targetContracts" | "targetSelectors" | "targetSenders" | "testAllAaveLeveragedPositions" | "testBaseAaveLeveragedPosition" | "testFuzzAaveLeveragedPosition" | "testSomeAaveLeveragedPosition" | "testSomeIonicLeveragedPosition" | "testSpecificAaveLeveragedPosition" | "usdc" | "usdt" | "wbtc" | "weth" | "wmatic" | "wsteth"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "asArray(address,address,address,address,address)", values: [string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "asArray(address,address,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "asArray(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "asArray(address)", values: [string]): string;
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
    encodeFunctionData(functionFragment: "modePool", values?: undefined): string;
    encodeFunctionData(functionFragment: "modeUsdc", values?: undefined): string;
    encodeFunctionData(functionFragment: "modeWeth", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "testAllAaveLeveragedPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "testBaseAaveLeveragedPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "testFuzzAaveLeveragedPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "testSomeAaveLeveragedPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "testSomeIonicLeveragedPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "testSpecificAaveLeveragedPosition", values?: undefined): string;
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
    decodeFunctionResult(functionFragment: "modePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modeUsdc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modeWeth", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "testAllAaveLeveragedPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testBaseAaveLeveragedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testFuzzAaveLeveragedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testSomeAaveLeveragedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testSomeIonicLeveragedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testSpecificAaveLeveragedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wbtc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wmatic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wsteth", data: BytesLike): Result;
    events: {
        "log(string)": EventFragment;
        "log_address(address)": EventFragment;
        "log_array(uint256[])": EventFragment;
        "log_array(int256[])": EventFragment;
        "log_array(address[])": EventFragment;
        "log_bytes(bytes)": EventFragment;
        "log_bytes32(bytes32)": EventFragment;
        "log_int(int256)": EventFragment;
        "log_named_address(string,address)": EventFragment;
        "log_named_array(string,uint256[])": EventFragment;
        "log_named_array(string,int256[])": EventFragment;
        "log_named_array(string,address[])": EventFragment;
        "log_named_bytes(string,bytes)": EventFragment;
        "log_named_bytes32(string,bytes32)": EventFragment;
        "log_named_decimal_int(string,int256,uint256)": EventFragment;
        "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
        "log_named_int(string,int256)": EventFragment;
        "log_named_string(string,string)": EventFragment;
        "log_named_uint(string,uint256)": EventFragment;
        "log_string(string)": EventFragment;
        "log_uint(uint256)": EventFragment;
        "logs(bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_array(uint256[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_array(int256[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_array(address[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_array(string,uint256[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_array(string,int256[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_array(string,address[])"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}
export interface logEventObject {
    arg0: string;
}
export type logEvent = TypedEvent<[string], logEventObject>;
export type logEventFilter = TypedEventFilter<logEvent>;
export interface log_addressEventObject {
    arg0: string;
}
export type log_addressEvent = TypedEvent<[string], log_addressEventObject>;
export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;
export interface log_array_uint256_array_EventObject {
    val: BigNumber[];
}
export type log_array_uint256_array_Event = TypedEvent<[
    BigNumber[]
], log_array_uint256_array_EventObject>;
export type log_array_uint256_array_EventFilter = TypedEventFilter<log_array_uint256_array_Event>;
export interface log_array_int256_array_EventObject {
    val: BigNumber[];
}
export type log_array_int256_array_Event = TypedEvent<[
    BigNumber[]
], log_array_int256_array_EventObject>;
export type log_array_int256_array_EventFilter = TypedEventFilter<log_array_int256_array_Event>;
export interface log_array_address_array_EventObject {
    val: string[];
}
export type log_array_address_array_Event = TypedEvent<[
    string[]
], log_array_address_array_EventObject>;
export type log_array_address_array_EventFilter = TypedEventFilter<log_array_address_array_Event>;
export interface log_bytesEventObject {
    arg0: string;
}
export type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;
export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;
export interface log_bytes32EventObject {
    arg0: string;
}
export type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;
export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;
export interface log_intEventObject {
    arg0: BigNumber;
}
export type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;
export type log_intEventFilter = TypedEventFilter<log_intEvent>;
export interface log_named_addressEventObject {
    key: string;
    val: string;
}
export type log_named_addressEvent = TypedEvent<[
    string,
    string
], log_named_addressEventObject>;
export type log_named_addressEventFilter = TypedEventFilter<log_named_addressEvent>;
export interface log_named_array_string_uint256_array_EventObject {
    key: string;
    val: BigNumber[];
}
export type log_named_array_string_uint256_array_Event = TypedEvent<[
    string,
    BigNumber[]
], log_named_array_string_uint256_array_EventObject>;
export type log_named_array_string_uint256_array_EventFilter = TypedEventFilter<log_named_array_string_uint256_array_Event>;
export interface log_named_array_string_int256_array_EventObject {
    key: string;
    val: BigNumber[];
}
export type log_named_array_string_int256_array_Event = TypedEvent<[
    string,
    BigNumber[]
], log_named_array_string_int256_array_EventObject>;
export type log_named_array_string_int256_array_EventFilter = TypedEventFilter<log_named_array_string_int256_array_Event>;
export interface log_named_array_string_address_array_EventObject {
    key: string;
    val: string[];
}
export type log_named_array_string_address_array_Event = TypedEvent<[
    string,
    string[]
], log_named_array_string_address_array_EventObject>;
export type log_named_array_string_address_array_EventFilter = TypedEventFilter<log_named_array_string_address_array_Event>;
export interface log_named_bytesEventObject {
    key: string;
    val: string;
}
export type log_named_bytesEvent = TypedEvent<[
    string,
    string
], log_named_bytesEventObject>;
export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;
export interface log_named_bytes32EventObject {
    key: string;
    val: string;
}
export type log_named_bytes32Event = TypedEvent<[
    string,
    string
], log_named_bytes32EventObject>;
export type log_named_bytes32EventFilter = TypedEventFilter<log_named_bytes32Event>;
export interface log_named_decimal_intEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export type log_named_decimal_intEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_intEventObject>;
export type log_named_decimal_intEventFilter = TypedEventFilter<log_named_decimal_intEvent>;
export interface log_named_decimal_uintEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export type log_named_decimal_uintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_uintEventObject>;
export type log_named_decimal_uintEventFilter = TypedEventFilter<log_named_decimal_uintEvent>;
export interface log_named_intEventObject {
    key: string;
    val: BigNumber;
}
export type log_named_intEvent = TypedEvent<[
    string,
    BigNumber
], log_named_intEventObject>;
export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;
export interface log_named_stringEventObject {
    key: string;
    val: string;
}
export type log_named_stringEvent = TypedEvent<[
    string,
    string
], log_named_stringEventObject>;
export type log_named_stringEventFilter = TypedEventFilter<log_named_stringEvent>;
export interface log_named_uintEventObject {
    key: string;
    val: BigNumber;
}
export type log_named_uintEvent = TypedEvent<[
    string,
    BigNumber
], log_named_uintEventObject>;
export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;
export interface log_stringEventObject {
    arg0: string;
}
export type log_stringEvent = TypedEvent<[string], log_stringEventObject>;
export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;
export interface log_uintEventObject {
    arg0: BigNumber;
}
export type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;
export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;
export interface logsEventObject {
    arg0: string;
}
export type logsEvent = TypedEvent<[string], logsEventObject>;
export type logsEventFilter = TypedEventFilter<logsEvent>;
export interface LeveragedPositionsTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LeveragedPositionsTestInterface;
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
        IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;
        "asArray(address,address,address,address,address)"(value0: string, value1: string, value2: string, value3: string, value4: string, overrides?: CallOverrides): Promise<[string[]]>;
        "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<[string[]]>;
        "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<[string[]]>;
        "asArray(address)"(value: string, overrides?: CallOverrides): Promise<[string[]]>;
        dai(overrides?: CallOverrides): Promise<[string]>;
        delegator(overrides?: CallOverrides): Promise<[string]>;
        excludeArtifacts(overrides?: CallOverrides): Promise<[string[]] & {
            excludedArtifacts_: string[];
        }>;
        excludeContracts(overrides?: CallOverrides): Promise<[string[]] & {
            excludedContracts_: string[];
        }>;
        excludeSenders(overrides?: CallOverrides): Promise<[string[]] & {
            excludedSenders_: string[];
        }>;
        failed(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        irm(overrides?: CallOverrides): Promise<[string]>;
        lens(overrides?: CallOverrides): Promise<[string]>;
        lpf(overrides?: CallOverrides): Promise<[string]>;
        maticx(overrides?: CallOverrides): Promise<[string]>;
        modePool(overrides?: CallOverrides): Promise<[string]>;
        modeUsdc(overrides?: CallOverrides): Promise<[string]>;
        modeWeth(overrides?: CallOverrides): Promise<[string]>;
        mpo(overrides?: CallOverrides): Promise<[string]>;
        proxyAdmin(overrides?: CallOverrides): Promise<[string]>;
        registry(overrides?: CallOverrides): Promise<[string]>;
        router(overrides?: CallOverrides): Promise<[string]>;
        sammUsdrUsdc(overrides?: CallOverrides): Promise<[string]>;
        stmatic(overrides?: CallOverrides): Promise<[string]>;
        targetArtifactSelectors(overrides?: CallOverrides): Promise<[
            StdInvariant.FuzzSelectorStructOutput[]
        ] & {
            targetedArtifactSelectors_: StdInvariant.FuzzSelectorStructOutput[];
        }>;
        targetArtifacts(overrides?: CallOverrides): Promise<[string[]] & {
            targetedArtifacts_: string[];
        }>;
        targetContracts(overrides?: CallOverrides): Promise<[string[]] & {
            targetedContracts_: string[];
        }>;
        targetSelectors(overrides?: CallOverrides): Promise<[
            StdInvariant.FuzzSelectorStructOutput[]
        ] & {
            targetedSelectors_: StdInvariant.FuzzSelectorStructOutput[];
        }>;
        targetSenders(overrides?: CallOverrides): Promise<[string[]] & {
            targetedSenders_: string[];
        }>;
        testAllAaveLeveragedPositions(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        testBaseAaveLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        testFuzzAaveLeveragedPosition(random: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        testSomeAaveLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        testSomeIonicLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        testSpecificAaveLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        usdc(overrides?: CallOverrides): Promise<[string]>;
        usdt(overrides?: CallOverrides): Promise<[string]>;
        wbtc(overrides?: CallOverrides): Promise<[string]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
        wmatic(overrides?: CallOverrides): Promise<[string]>;
        wsteth(overrides?: CallOverrides): Promise<[string]>;
    };
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;
    "asArray(address,address,address,address,address)"(value0: string, value1: string, value2: string, value3: string, value4: string, overrides?: CallOverrides): Promise<string[]>;
    "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<string[]>;
    "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<string[]>;
    "asArray(address)"(value: string, overrides?: CallOverrides): Promise<string[]>;
    dai(overrides?: CallOverrides): Promise<string>;
    delegator(overrides?: CallOverrides): Promise<string>;
    excludeArtifacts(overrides?: CallOverrides): Promise<string[]>;
    excludeContracts(overrides?: CallOverrides): Promise<string[]>;
    excludeSenders(overrides?: CallOverrides): Promise<string[]>;
    failed(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    irm(overrides?: CallOverrides): Promise<string>;
    lens(overrides?: CallOverrides): Promise<string>;
    lpf(overrides?: CallOverrides): Promise<string>;
    maticx(overrides?: CallOverrides): Promise<string>;
    modePool(overrides?: CallOverrides): Promise<string>;
    modeUsdc(overrides?: CallOverrides): Promise<string>;
    modeWeth(overrides?: CallOverrides): Promise<string>;
    mpo(overrides?: CallOverrides): Promise<string>;
    proxyAdmin(overrides?: CallOverrides): Promise<string>;
    registry(overrides?: CallOverrides): Promise<string>;
    router(overrides?: CallOverrides): Promise<string>;
    sammUsdrUsdc(overrides?: CallOverrides): Promise<string>;
    stmatic(overrides?: CallOverrides): Promise<string>;
    targetArtifactSelectors(overrides?: CallOverrides): Promise<StdInvariant.FuzzSelectorStructOutput[]>;
    targetArtifacts(overrides?: CallOverrides): Promise<string[]>;
    targetContracts(overrides?: CallOverrides): Promise<string[]>;
    targetSelectors(overrides?: CallOverrides): Promise<StdInvariant.FuzzSelectorStructOutput[]>;
    targetSenders(overrides?: CallOverrides): Promise<string[]>;
    testAllAaveLeveragedPositions(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    testBaseAaveLeveragedPosition(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    testFuzzAaveLeveragedPosition(random: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    testSomeAaveLeveragedPosition(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    testSomeIonicLeveragedPosition(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    testSpecificAaveLeveragedPosition(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    usdc(overrides?: CallOverrides): Promise<string>;
    usdt(overrides?: CallOverrides): Promise<string>;
    wbtc(overrides?: CallOverrides): Promise<string>;
    weth(overrides?: CallOverrides): Promise<string>;
    wmatic(overrides?: CallOverrides): Promise<string>;
    wsteth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        IS_TEST(overrides?: CallOverrides): Promise<boolean>;
        "asArray(address,address,address,address,address)"(value0: string, value1: string, value2: string, value3: string, value4: string, overrides?: CallOverrides): Promise<string[]>;
        "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<string[]>;
        "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<string[]>;
        "asArray(address)"(value: string, overrides?: CallOverrides): Promise<string[]>;
        dai(overrides?: CallOverrides): Promise<string>;
        delegator(overrides?: CallOverrides): Promise<string>;
        excludeArtifacts(overrides?: CallOverrides): Promise<string[]>;
        excludeContracts(overrides?: CallOverrides): Promise<string[]>;
        excludeSenders(overrides?: CallOverrides): Promise<string[]>;
        failed(overrides?: CallOverrides): Promise<boolean>;
        irm(overrides?: CallOverrides): Promise<string>;
        lens(overrides?: CallOverrides): Promise<string>;
        lpf(overrides?: CallOverrides): Promise<string>;
        maticx(overrides?: CallOverrides): Promise<string>;
        modePool(overrides?: CallOverrides): Promise<string>;
        modeUsdc(overrides?: CallOverrides): Promise<string>;
        modeWeth(overrides?: CallOverrides): Promise<string>;
        mpo(overrides?: CallOverrides): Promise<string>;
        proxyAdmin(overrides?: CallOverrides): Promise<string>;
        registry(overrides?: CallOverrides): Promise<string>;
        router(overrides?: CallOverrides): Promise<string>;
        sammUsdrUsdc(overrides?: CallOverrides): Promise<string>;
        stmatic(overrides?: CallOverrides): Promise<string>;
        targetArtifactSelectors(overrides?: CallOverrides): Promise<StdInvariant.FuzzSelectorStructOutput[]>;
        targetArtifacts(overrides?: CallOverrides): Promise<string[]>;
        targetContracts(overrides?: CallOverrides): Promise<string[]>;
        targetSelectors(overrides?: CallOverrides): Promise<StdInvariant.FuzzSelectorStructOutput[]>;
        targetSenders(overrides?: CallOverrides): Promise<string[]>;
        testAllAaveLeveragedPositions(overrides?: CallOverrides): Promise<void>;
        testBaseAaveLeveragedPosition(overrides?: CallOverrides): Promise<void>;
        testFuzzAaveLeveragedPosition(random: BigNumberish, overrides?: CallOverrides): Promise<void>;
        testSomeAaveLeveragedPosition(overrides?: CallOverrides): Promise<void>;
        testSomeIonicLeveragedPosition(overrides?: CallOverrides): Promise<void>;
        testSpecificAaveLeveragedPosition(overrides?: CallOverrides): Promise<void>;
        usdc(overrides?: CallOverrides): Promise<string>;
        usdt(overrides?: CallOverrides): Promise<string>;
        wbtc(overrides?: CallOverrides): Promise<string>;
        weth(overrides?: CallOverrides): Promise<string>;
        wmatic(overrides?: CallOverrides): Promise<string>;
        wsteth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "log(string)"(arg0?: null): logEventFilter;
        log(arg0?: null): logEventFilter;
        "log_address(address)"(arg0?: null): log_addressEventFilter;
        log_address(arg0?: null): log_addressEventFilter;
        "log_array(uint256[])"(val?: null): log_array_uint256_array_EventFilter;
        "log_array(int256[])"(val?: null): log_array_int256_array_EventFilter;
        "log_array(address[])"(val?: null): log_array_address_array_EventFilter;
        "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
        log_bytes(arg0?: null): log_bytesEventFilter;
        "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
        log_bytes32(arg0?: null): log_bytes32EventFilter;
        "log_int(int256)"(arg0?: null): log_intEventFilter;
        log_int(arg0?: null): log_intEventFilter;
        "log_named_address(string,address)"(key?: null, val?: null): log_named_addressEventFilter;
        log_named_address(key?: null, val?: null): log_named_addressEventFilter;
        "log_named_array(string,uint256[])"(key?: null, val?: null): log_named_array_string_uint256_array_EventFilter;
        "log_named_array(string,int256[])"(key?: null, val?: null): log_named_array_string_int256_array_EventFilter;
        "log_named_array(string,address[])"(key?: null, val?: null): log_named_array_string_address_array_EventFilter;
        "log_named_bytes(string,bytes)"(key?: null, val?: null): log_named_bytesEventFilter;
        log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;
        "log_named_bytes32(string,bytes32)"(key?: null, val?: null): log_named_bytes32EventFilter;
        log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;
        "log_named_decimal_int(string,int256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        log_named_decimal_int(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        "log_named_decimal_uint(string,uint256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        log_named_decimal_uint(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        "log_named_int(string,int256)"(key?: null, val?: null): log_named_intEventFilter;
        log_named_int(key?: null, val?: null): log_named_intEventFilter;
        "log_named_string(string,string)"(key?: null, val?: null): log_named_stringEventFilter;
        log_named_string(key?: null, val?: null): log_named_stringEventFilter;
        "log_named_uint(string,uint256)"(key?: null, val?: null): log_named_uintEventFilter;
        log_named_uint(key?: null, val?: null): log_named_uintEventFilter;
        "log_string(string)"(arg0?: null): log_stringEventFilter;
        log_string(arg0?: null): log_stringEventFilter;
        "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
        log_uint(arg0?: null): log_uintEventFilter;
        "logs(bytes)"(arg0?: null): logsEventFilter;
        logs(arg0?: null): logsEventFilter;
    };
    estimateGas: {
        IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;
        "asArray(address,address,address,address,address)"(value0: string, value1: string, value2: string, value3: string, value4: string, overrides?: CallOverrides): Promise<BigNumber>;
        "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<BigNumber>;
        "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<BigNumber>;
        "asArray(address)"(value: string, overrides?: CallOverrides): Promise<BigNumber>;
        dai(overrides?: CallOverrides): Promise<BigNumber>;
        delegator(overrides?: CallOverrides): Promise<BigNumber>;
        excludeArtifacts(overrides?: CallOverrides): Promise<BigNumber>;
        excludeContracts(overrides?: CallOverrides): Promise<BigNumber>;
        excludeSenders(overrides?: CallOverrides): Promise<BigNumber>;
        failed(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        irm(overrides?: CallOverrides): Promise<BigNumber>;
        lens(overrides?: CallOverrides): Promise<BigNumber>;
        lpf(overrides?: CallOverrides): Promise<BigNumber>;
        maticx(overrides?: CallOverrides): Promise<BigNumber>;
        modePool(overrides?: CallOverrides): Promise<BigNumber>;
        modeUsdc(overrides?: CallOverrides): Promise<BigNumber>;
        modeWeth(overrides?: CallOverrides): Promise<BigNumber>;
        mpo(overrides?: CallOverrides): Promise<BigNumber>;
        proxyAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        registry(overrides?: CallOverrides): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        sammUsdrUsdc(overrides?: CallOverrides): Promise<BigNumber>;
        stmatic(overrides?: CallOverrides): Promise<BigNumber>;
        targetArtifactSelectors(overrides?: CallOverrides): Promise<BigNumber>;
        targetArtifacts(overrides?: CallOverrides): Promise<BigNumber>;
        targetContracts(overrides?: CallOverrides): Promise<BigNumber>;
        targetSelectors(overrides?: CallOverrides): Promise<BigNumber>;
        targetSenders(overrides?: CallOverrides): Promise<BigNumber>;
        testAllAaveLeveragedPositions(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        testBaseAaveLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        testFuzzAaveLeveragedPosition(random: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        testSomeAaveLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        testSomeIonicLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        testSpecificAaveLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        usdc(overrides?: CallOverrides): Promise<BigNumber>;
        usdt(overrides?: CallOverrides): Promise<BigNumber>;
        wbtc(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
        wmatic(overrides?: CallOverrides): Promise<BigNumber>;
        wsteth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "asArray(address,address,address,address,address)"(value0: string, value1: string, value2: string, value3: string, value4: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "asArray(address)"(value: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dai(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        excludeArtifacts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        excludeContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        excludeSenders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failed(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        irm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lpf(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maticx(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modeUsdc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modeWeth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mpo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxyAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sammUsdrUsdc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stmatic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetArtifactSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetArtifacts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetSenders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        testAllAaveLeveragedPositions(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        testBaseAaveLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        testFuzzAaveLeveragedPosition(random: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        testSomeAaveLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        testSomeIonicLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        testSpecificAaveLeveragedPosition(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        usdc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        usdt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wbtc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wmatic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wsteth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
