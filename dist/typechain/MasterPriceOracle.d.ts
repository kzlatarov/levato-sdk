import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MasterPriceOracleInterface extends utils.Interface {
    functions: {
        "add(address[],address[])": FunctionFragment;
        "admin()": FunctionFragment;
        "changeAdmin(address)": FunctionFragment;
        "defaultOracle()": FunctionFragment;
        "initialize(address[],address[],address,address,address)": FunctionFragment;
        "oracles(address)": FunctionFragment;
        "price(address)": FunctionFragment;
        "setDefaultOracle(address)": FunctionFragment;
        "wtoken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "add" | "admin" | "changeAdmin" | "defaultOracle" | "initialize" | "oracles" | "price" | "setDefaultOracle" | "wtoken"): FunctionFragment;
    encodeFunctionData(functionFragment: "add", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "defaultOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string[], string[], string, string, string]): string;
    encodeFunctionData(functionFragment: "oracles", values: [string]): string;
    encodeFunctionData(functionFragment: "price", values: [string]): string;
    encodeFunctionData(functionFragment: "setDefaultOracle", values: [string]): string;
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
    events: {
        "Initialized(uint8)": EventFragment;
        "NewAdmin(address,address)": EventFragment;
        "NewDefaultOracle(address,address)": EventFragment;
        "NewOracle(address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewDefaultOracle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewOracle"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface NewAdminEventObject {
    oldAdmin: string;
    newAdmin: string;
}
export type NewAdminEvent = TypedEvent<[string, string], NewAdminEventObject>;
export type NewAdminEventFilter = TypedEventFilter<NewAdminEvent>;
export interface NewDefaultOracleEventObject {
    oldOracle: string;
    newOracle: string;
}
export type NewDefaultOracleEvent = TypedEvent<[
    string,
    string
], NewDefaultOracleEventObject>;
export type NewDefaultOracleEventFilter = TypedEventFilter<NewDefaultOracleEvent>;
export interface NewOracleEventObject {
    underlying: string;
    oldOracle: string;
    newOracle: string;
}
export type NewOracleEvent = TypedEvent<[
    string,
    string,
    string
], NewOracleEventObject>;
export type NewOracleEventFilter = TypedEventFilter<NewOracleEvent>;
export interface MasterPriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MasterPriceOracleInterface;
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
        add(underlyings: string[], _oracles: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        changeAdmin(newAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        defaultOracle(overrides?: CallOverrides): Promise<[string]>;
        initialize(underlyings: string[], _oracles: string[], _defaultOracle: string, _admin: string, _wtoken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        oracles(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        price(underlying: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        setDefaultOracle(newOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        wtoken(overrides?: CallOverrides): Promise<[string]>;
    };
    add(underlyings: string[], _oracles: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    changeAdmin(newAdmin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    defaultOracle(overrides?: CallOverrides): Promise<string>;
    initialize(underlyings: string[], _oracles: string[], _defaultOracle: string, _admin: string, _wtoken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    oracles(arg0: string, overrides?: CallOverrides): Promise<string>;
    price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
    setDefaultOracle(newOracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    wtoken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        add(underlyings: string[], _oracles: string[], overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        changeAdmin(newAdmin: string, overrides?: CallOverrides): Promise<void>;
        defaultOracle(overrides?: CallOverrides): Promise<string>;
        initialize(underlyings: string[], _oracles: string[], _defaultOracle: string, _admin: string, _wtoken: string, overrides?: CallOverrides): Promise<void>;
        oracles(arg0: string, overrides?: CallOverrides): Promise<string>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        setDefaultOracle(newOracle: string, overrides?: CallOverrides): Promise<void>;
        wtoken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "NewAdmin(address,address)"(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        NewAdmin(oldAdmin?: null, newAdmin?: null): NewAdminEventFilter;
        "NewDefaultOracle(address,address)"(oldOracle?: null, newOracle?: null): NewDefaultOracleEventFilter;
        NewDefaultOracle(oldOracle?: null, newOracle?: null): NewDefaultOracleEventFilter;
        "NewOracle(address,address,address)"(underlying?: null, oldOracle?: null, newOracle?: null): NewOracleEventFilter;
        NewOracle(underlying?: null, oldOracle?: null, newOracle?: null): NewOracleEventFilter;
    };
    estimateGas: {
        add(underlyings: string[], _oracles: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        changeAdmin(newAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        defaultOracle(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(underlyings: string[], _oracles: string[], _defaultOracle: string, _admin: string, _wtoken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        oracles(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        setDefaultOracle(newOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        wtoken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        add(underlyings: string[], _oracles: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeAdmin(newAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        defaultOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(underlyings: string[], _oracles: string[], _defaultOracle: string, _admin: string, _wtoken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        oracles(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price(underlying: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDefaultOracle(newOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        wtoken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
