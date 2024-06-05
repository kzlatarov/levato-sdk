import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface BalancerRateProviderOracleInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "baseTokens(address)": FunctionFragment;
        "getAllUnderlyings()": FunctionFragment;
        "initialize(address[],address[],address[])": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "price(address)": FunctionFragment;
        "rateProviders(address)": FunctionFragment;
        "registerToken(address,address,address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "underlyings(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "baseTokens" | "getAllUnderlyings" | "initialize" | "owner" | "pendingOwner" | "price" | "rateProviders" | "registerToken" | "renounceOwnership" | "transferOwnership" | "underlyings"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "getAllUnderlyings", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string[], string[], string[]]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "price", values: [string]): string;
    encodeFunctionData(functionFragment: "rateProviders", values: [string]): string;
    encodeFunctionData(functionFragment: "registerToken", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "underlyings", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllUnderlyings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rateProviders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyings", data: BytesLike): Result;
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
export interface BalancerRateProviderOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BalancerRateProviderOracleInterface;
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
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        baseTokens(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        getAllUnderlyings(overrides?: CallOverrides): Promise<[string[]]>;
        initialize(_rateProviders: string[], _baseTokens: string[], _underlyings: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        price(underlying: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        rateProviders(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        registerToken(_rateProvider: string, _baseToken: string, _underlying: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        underlyings(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    baseTokens(arg0: string, overrides?: CallOverrides): Promise<string>;
    getAllUnderlyings(overrides?: CallOverrides): Promise<string[]>;
    initialize(_rateProviders: string[], _baseTokens: string[], _underlyings: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
    rateProviders(arg0: string, overrides?: CallOverrides): Promise<string>;
    registerToken(_rateProvider: string, _baseToken: string, _underlying: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    underlyings(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        baseTokens(arg0: string, overrides?: CallOverrides): Promise<string>;
        getAllUnderlyings(overrides?: CallOverrides): Promise<string[]>;
        initialize(_rateProviders: string[], _baseTokens: string[], _underlyings: string[], overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        rateProviders(arg0: string, overrides?: CallOverrides): Promise<string>;
        registerToken(_rateProvider: string, _baseToken: string, _underlying: string, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        underlyings(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
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
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        baseTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAllUnderlyings(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_rateProviders: string[], _baseTokens: string[], _underlyings: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        rateProviders(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        registerToken(_rateProvider: string, _baseToken: string, _underlying: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        underlyings(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        baseTokens(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllUnderlyings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_rateProviders: string[], _baseTokens: string[], _underlyings: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price(underlying: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rateProviders(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerToken(_rateProvider: string, _baseToken: string, _underlying: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        underlyings(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
