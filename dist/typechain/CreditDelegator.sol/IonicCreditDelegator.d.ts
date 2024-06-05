import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IonicCreditDelegatorInterface extends utils.Interface {
    functions: {
        "_listExtensions()": FunctionFragment;
        "_registerExtension(address,address)": FunctionFragment;
        "_replaceExtensions(address[])": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "borrowAllowance(address,address)": FunctionFragment;
        "borrowBalance(address,address)": FunctionFragment;
        "defaultRateModel()": FunctionFragment;
        "delegatedDebtAssetData(address)": FunctionFragment;
        "factory()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "positionBorrowIndex(address,address)": FunctionFragment;
        "positionBorrowIndexLastUpdate(address,address)": FunctionFragment;
        "positionScaledATokens(address,address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_listExtensions" | "_registerExtension" | "_replaceExtensions" | "acceptOwnership" | "borrowAllowance" | "borrowBalance" | "defaultRateModel" | "delegatedDebtAssetData" | "factory" | "owner" | "pendingOwner" | "positionBorrowIndex" | "positionBorrowIndexLastUpdate" | "positionScaledATokens" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [string, string]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [string[]]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "borrowBalance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "defaultRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegatedDebtAssetData", values: [string]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionBorrowIndex", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positionBorrowIndexLastUpdate", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positionScaledATokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedDebtAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndexLastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionScaledATokens", data: BytesLike): Result;
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
export interface IonicCreditDelegator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IonicCreditDelegatorInterface;
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
        borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        defaultRateModel(overrides?: CallOverrides): Promise<[string]>;
        delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            string,
            string,
            string,
            BigNumber,
            BigNumber
        ] & {
            levatoCurrentBorrowRate: BigNumber;
            borrowIndex: BigNumber;
            lastTotalDebt: BigNumber;
            lastUpdateTimestamp: number;
            lpToken: string;
            debtToken: string;
            irm: string;
            accruedToTreasury: BigNumber;
            reserveFactor: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[number]>;
        positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
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
    borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    defaultRateModel(overrides?: CallOverrides): Promise<string>;
    delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        levatoCurrentBorrowRate: BigNumber;
        borrowIndex: BigNumber;
        lastTotalDebt: BigNumber;
        lastUpdateTimestamp: number;
        lpToken: string;
        debtToken: string;
        irm: string;
        accruedToTreasury: BigNumber;
        reserveFactor: BigNumber;
    }>;
    factory(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<number>;
    positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _listExtensions(overrides?: CallOverrides): Promise<string[]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: CallOverrides): Promise<void>;
        _replaceExtensions(extensions: string[], overrides?: CallOverrides): Promise<void>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        defaultRateModel(overrides?: CallOverrides): Promise<string>;
        delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            string,
            string,
            string,
            BigNumber,
            BigNumber
        ] & {
            levatoCurrentBorrowRate: BigNumber;
            borrowIndex: BigNumber;
            lastTotalDebt: BigNumber;
            lastUpdateTimestamp: number;
            lpToken: string;
            debtToken: string;
            irm: string;
            accruedToTreasury: BigNumber;
            reserveFactor: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<number>;
        positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
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
        borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        defaultRateModel(overrides?: CallOverrides): Promise<BigNumber>;
        delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
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
        borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
