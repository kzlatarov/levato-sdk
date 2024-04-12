import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface LeveragedPositionsFactoryFirstExtensionInterface extends Interface {
    getFunction(nameOrSignature: "AAVE" | "DELEGATED" | "IONIC" | "_getExtensionFunctions" | "_setIonicPairWhitelisted" | "acceptOwnership" | "blocksPerYear" | "createAndFundIonicPosition" | "createAndFundIonicPositionAtRatio" | "createIonicPosition" | "creditDelegator" | "flashloanRouter" | "fundersRegistry" | "getAssetBorrowRate" | "getAssetPrice" | "getPositionsByAccount" | "getPositionsTotalCollateralValue" | "initialize" | "isFactoryPosition" | "minBorrowNative" | "oracle" | "owner" | "pendingOwner" | "reinitialize" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferStarted" | "OwnershipTransferred" | "PositionCreated"): EventFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DELEGATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "IONIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setIonicPairWhitelisted", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPosition", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPositionAtRatio", values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createIonicPosition", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionsByAccount", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionsTotalCollateralValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isFactoryPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DELEGATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IONIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setIonicPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsByAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsTotalCollateralValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFactoryPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
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
export interface LeveragedPositionsFactoryFirstExtension extends BaseContract {
    connect(runner?: ContractRunner | null): LeveragedPositionsFactoryFirstExtension;
    waitForDeployment(): Promise<this>;
    interface: LeveragedPositionsFactoryFirstExtensionInterface;
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
    _setIonicPairWhitelisted: TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    blocksPerYear: TypedContractMethod<[], [bigint], "view">;
    createAndFundIonicPosition: TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish
    ], [
        string
    ], "nonpayable">;
    createAndFundIonicPositionAtRatio: TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish,
        _leverageRatio: BigNumberish
    ], [
        string
    ], "nonpayable">;
    createIonicPosition: TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike
    ], [
        string
    ], "nonpayable">;
    creditDelegator: TypedContractMethod<[], [string], "view">;
    flashloanRouter: TypedContractMethod<[], [string], "view">;
    fundersRegistry: TypedContractMethod<[], [string], "view">;
    getAssetBorrowRate: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getAssetPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getPositionsByAccount: TypedContractMethod<[
        account: AddressLike
    ], [
        [string[], boolean[]] & {
            positions: string[];
            closed: boolean[];
        }
    ], "view">;
    getPositionsTotalCollateralValue: TypedContractMethod<[], [bigint], "view">;
    initialize: TypedContractMethod<[
        _delegator: AddressLike,
        _oracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    isFactoryPosition: TypedContractMethod<[
        position: AddressLike
    ], [
        boolean
    ], "view">;
    minBorrowNative: TypedContractMethod<[], [bigint], "view">;
    oracle: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    pendingOwner: TypedContractMethod<[], [string], "view">;
    reinitialize: TypedContractMethod<[
        _oracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
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
    getFunction(nameOrSignature: "_setIonicPairWhitelisted"): TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "blocksPerYear"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "createAndFundIonicPosition"): TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createAndFundIonicPositionAtRatio"): TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish,
        _leverageRatio: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createIonicPosition"): TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "creditDelegator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "flashloanRouter"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "fundersRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAssetBorrowRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPrice"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getPositionsByAccount"): TypedContractMethod<[
        account: AddressLike
    ], [
        [string[], boolean[]] & {
            positions: string[];
            closed: boolean[];
        }
    ], "view">;
    getFunction(nameOrSignature: "getPositionsTotalCollateralValue"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _delegator: AddressLike,
        _oracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isFactoryPosition"): TypedContractMethod<[position: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "minBorrowNative"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "oracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "reinitialize"): TypedContractMethod<[_oracle: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
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
