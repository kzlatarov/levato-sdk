import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace SolidlyPriceOracle {
    type AssetConfigStruct = {
        poolAddress: string;
        baseToken: string;
    };
    type AssetConfigStructOutput = [string, string] & {
        poolAddress: string;
        baseToken: string;
    };
}
export interface SolidlyPriceOracleInterface extends utils.Interface {
    functions: {
        "SUPPORTED_BASE_TOKENS(uint256)": FunctionFragment;
        "WTOKEN()": FunctionFragment;
        "_setSupportedBaseTokens(address[])": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "getSupportedBaseTokens()": FunctionFragment;
        "initialize(address,address[])": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "poolFeeds(address)": FunctionFragment;
        "price(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setPoolFeeds(address[],(address,address)[])": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "SUPPORTED_BASE_TOKENS" | "WTOKEN" | "_setSupportedBaseTokens" | "acceptOwnership" | "getSupportedBaseTokens" | "initialize" | "owner" | "pendingOwner" | "poolFeeds" | "price" | "renounceOwnership" | "setPoolFeeds" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "SUPPORTED_BASE_TOKENS", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "WTOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setSupportedBaseTokens", values: [string[]]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSupportedBaseTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string[]]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolFeeds", values: [string]): string;
    encodeFunctionData(functionFragment: "price", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPoolFeeds", values: [string[], SolidlyPriceOracle.AssetConfigStruct[]]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "SUPPORTED_BASE_TOKENS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WTOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setSupportedBaseTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupportedBaseTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferStarted(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferStartedEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferStartedEventObject>;
export type OwnershipTransferStartedEventFilter = TypedEventFilter<OwnershipTransferStartedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface SolidlyPriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SolidlyPriceOracleInterface;
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
        SUPPORTED_BASE_TOKENS(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        WTOKEN(overrides?: CallOverrides): Promise<[string]>;
        _setSupportedBaseTokens(_supportedBaseTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getSupportedBaseTokens(overrides?: CallOverrides): Promise<[string[]]>;
        initialize(_wtoken: string, _supportedBaseTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        poolFeeds(arg0: string, overrides?: CallOverrides): Promise<[string, string] & {
            poolAddress: string;
            baseToken: string;
        }>;
        price(underlying: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPoolFeeds(underlyings: string[], assetConfig: SolidlyPriceOracle.AssetConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    SUPPORTED_BASE_TOKENS(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    WTOKEN(overrides?: CallOverrides): Promise<string>;
    _setSupportedBaseTokens(_supportedBaseTokens: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getSupportedBaseTokens(overrides?: CallOverrides): Promise<string[]>;
    initialize(_wtoken: string, _supportedBaseTokens: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    poolFeeds(arg0: string, overrides?: CallOverrides): Promise<[string, string] & {
        poolAddress: string;
        baseToken: string;
    }>;
    price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPoolFeeds(underlyings: string[], assetConfig: SolidlyPriceOracle.AssetConfigStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        SUPPORTED_BASE_TOKENS(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        WTOKEN(overrides?: CallOverrides): Promise<string>;
        _setSupportedBaseTokens(_supportedBaseTokens: string[], overrides?: CallOverrides): Promise<void>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        getSupportedBaseTokens(overrides?: CallOverrides): Promise<string[]>;
        initialize(_wtoken: string, _supportedBaseTokens: string[], overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        poolFeeds(arg0: string, overrides?: CallOverrides): Promise<[string, string] & {
            poolAddress: string;
            baseToken: string;
        }>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setPoolFeeds(underlyings: string[], assetConfig: SolidlyPriceOracle.AssetConfigStruct[], overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferStarted(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        OwnershipTransferStarted(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        SUPPORTED_BASE_TOKENS(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        WTOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        _setSupportedBaseTokens(_supportedBaseTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getSupportedBaseTokens(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_wtoken: string, _supportedBaseTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        poolFeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPoolFeeds(underlyings: string[], assetConfig: SolidlyPriceOracle.AssetConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        SUPPORTED_BASE_TOKENS(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WTOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setSupportedBaseTokens(_supportedBaseTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getSupportedBaseTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_wtoken: string, _supportedBaseTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolFeeds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price(underlying: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPoolFeeds(underlyings: string[], assetConfig: SolidlyPriceOracle.AssetConfigStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
