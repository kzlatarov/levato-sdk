import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LeveragedPositionsFactoryInterface extends utils.Interface {
    functions: {
        "AAVE()": FunctionFragment;
        "DELEGATED()": FunctionFragment;
        "IONIC()": FunctionFragment;
        "_listExtensions()": FunctionFragment;
        "_registerExtension(address,address)": FunctionFragment;
        "_replaceExtensions(address[])": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "blocksPerYear()": FunctionFragment;
        "creditDelegator()": FunctionFragment;
        "flashloanRouter()": FunctionFragment;
        "fundersRegistry()": FunctionFragment;
        "minBorrowNative()": FunctionFragment;
        "oracle()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "AAVE" | "DELEGATED" | "IONIC" | "_listExtensions" | "_registerExtension" | "_replaceExtensions" | "acceptOwnership" | "blocksPerYear" | "creditDelegator" | "flashloanRouter" | "fundersRegistry" | "minBorrowNative" | "oracle" | "owner" | "pendingOwner" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DELEGATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "IONIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [string, string]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [string[]]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DELEGATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IONIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
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
export interface LeveragedPositionsFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LeveragedPositionsFactoryInterface;
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
        AAVE(overrides?: CallOverrides): Promise<[number]>;
        DELEGATED(overrides?: CallOverrides): Promise<[number]>;
        IONIC(overrides?: CallOverrides): Promise<[number]>;
        _listExtensions(overrides?: CallOverrides): Promise<[string[]]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<[BigNumber]>;
        creditDelegator(overrides?: CallOverrides): Promise<[string]>;
        flashloanRouter(overrides?: CallOverrides): Promise<[string]>;
        fundersRegistry(overrides?: CallOverrides): Promise<[string]>;
        minBorrowNative(overrides?: CallOverrides): Promise<[BigNumber]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    AAVE(overrides?: CallOverrides): Promise<number>;
    DELEGATED(overrides?: CallOverrides): Promise<number>;
    IONIC(overrides?: CallOverrides): Promise<number>;
    _listExtensions(overrides?: CallOverrides): Promise<string[]>;
    _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _replaceExtensions(extensions: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
    creditDelegator(overrides?: CallOverrides): Promise<string>;
    flashloanRouter(overrides?: CallOverrides): Promise<string>;
    fundersRegistry(overrides?: CallOverrides): Promise<string>;
    minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
    oracle(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        AAVE(overrides?: CallOverrides): Promise<number>;
        DELEGATED(overrides?: CallOverrides): Promise<number>;
        IONIC(overrides?: CallOverrides): Promise<number>;
        _listExtensions(overrides?: CallOverrides): Promise<string[]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: CallOverrides): Promise<void>;
        _replaceExtensions(extensions: string[], overrides?: CallOverrides): Promise<void>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        creditDelegator(overrides?: CallOverrides): Promise<string>;
        flashloanRouter(overrides?: CallOverrides): Promise<string>;
        fundersRegistry(overrides?: CallOverrides): Promise<string>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
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
        AAVE(overrides?: CallOverrides): Promise<BigNumber>;
        DELEGATED(overrides?: CallOverrides): Promise<BigNumber>;
        IONIC(overrides?: CallOverrides): Promise<BigNumber>;
        _listExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        creditDelegator(overrides?: CallOverrides): Promise<BigNumber>;
        flashloanRouter(overrides?: CallOverrides): Promise<BigNumber>;
        fundersRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DELEGATED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IONIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _listExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flashloanRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundersRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minBorrowNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
