import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface LeveragedPositionsFactorySecondExtensionInterface extends Interface {
    getFunction(nameOrSignature: "AAVE" | "DELEGATED" | "IONIC" | "_getExtensionFunctions" | "acceptOwnership" | "blocksPerYear" | "closeAndRemoveUserPosition" | "createAavePosition" | "creditDelegator" | "flashloanRouter" | "fundPosition" | "fundersRegistry" | "getAccountsWithOpenPositions" | "getBorrowableMarketsByCollateral" | "getMinBorrowNative" | "getPositionsExtension" | "getWhitelistedCollateralMarkets" | "minBorrowNative" | "oracle" | "owner" | "pendingOwner" | "removeClosedPosition" | "renounceOwnership" | "swap" | "transferOwnership"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferStarted" | "OwnershipTransferred" | "PositionCreated"): EventFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DELEGATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "IONIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "closeAndRemoveUserPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "createAavePosition", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundPosition", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountsWithOpenPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowableMarketsByCollateral", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getMinBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionsExtension", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getWhitelistedCollateralMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeClosedPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DELEGATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IONIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeAndRemoveUserPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAavePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountsWithOpenPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowableMarketsByCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedCollateralMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeClosedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
export declare namespace InitializedEvent {
    type InputTuple = [version: BigNumberish];
    type OutputTuple = [version: bigint];
    interface OutputObject {
        version: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferStartedEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferredEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PositionCreatedEvent {
    type InputTuple = [
        user: AddressLike,
        position: AddressLike,
        collateral: AddressLike,
        stable: AddressLike,
        lendingProtocol: BigNumberish
    ];
    type OutputTuple = [
        user: string,
        position: string,
        collateral: string,
        stable: string,
        lendingProtocol: bigint
    ];
    interface OutputObject {
        user: string;
        position: string;
        collateral: string;
        stable: string;
        lendingProtocol: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface LeveragedPositionsFactorySecondExtension extends BaseContract {
    connect(runner?: ContractRunner | null): LeveragedPositionsFactorySecondExtension;
    waitForDeployment(): Promise<this>;
    interface: LeveragedPositionsFactorySecondExtensionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    AAVE: TypedContractMethod<[], [bigint], "view">;
    DELEGATED: TypedContractMethod<[], [bigint], "view">;
    IONIC: TypedContractMethod<[], [bigint], "view">;
    _getExtensionFunctions: TypedContractMethod<[], [string[]], "view">;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    blocksPerYear: TypedContractMethod<[], [bigint], "view">;
    closeAndRemoveUserPosition: TypedContractMethod<[
        position: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    createAavePosition: TypedContractMethod<[
        user: AddressLike,
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike
    ], [
        string
    ], "nonpayable">;
    creditDelegator: TypedContractMethod<[], [string], "view">;
    flashloanRouter: TypedContractMethod<[], [string], "view">;
    fundPosition: TypedContractMethod<[
        position: AddressLike,
        fundingAsset: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    fundersRegistry: TypedContractMethod<[], [string], "view">;
    getAccountsWithOpenPositions: TypedContractMethod<[], [string[]], "view">;
    getBorrowableMarketsByCollateral: TypedContractMethod<[
        _collateralMarket: AddressLike
    ], [
        string[]
    ], "view">;
    getMinBorrowNative: TypedContractMethod<[], [bigint], "view">;
    getPositionsExtension: TypedContractMethod<[
        msgSig: BytesLike
    ], [
        string
    ], "view">;
    getWhitelistedCollateralMarkets: TypedContractMethod<[], [string[]], "view">;
    minBorrowNative: TypedContractMethod<[], [bigint], "view">;
    oracle: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    pendingOwner: TypedContractMethod<[], [string], "view">;
    removeClosedPosition: TypedContractMethod<[
        closedPosition: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    swap: TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "AAVE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "DELEGATED"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "IONIC"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "_getExtensionFunctions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "blocksPerYear"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "closeAndRemoveUserPosition"): TypedContractMethod<[position: AddressLike], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "createAavePosition"): TypedContractMethod<[
        user: AddressLike,
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "creditDelegator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "flashloanRouter"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "fundPosition"): TypedContractMethod<[
        position: AddressLike,
        fundingAsset: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "fundersRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAccountsWithOpenPositions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getBorrowableMarketsByCollateral"): TypedContractMethod<[_collateralMarket: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "getMinBorrowNative"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPositionsExtension"): TypedContractMethod<[msgSig: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getWhitelistedCollateralMarkets"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "minBorrowNative"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "oracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "removeClosedPosition"): TypedContractMethod<[
        closedPosition: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferStarted"): TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    getEvent(key: "PositionCreated"): TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    filters: {
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "OwnershipTransferStarted(address,address)": TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        OwnershipTransferStarted: TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        "PositionCreated(address,address,address,address,uint16)": TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
        PositionCreated: TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    };
}
