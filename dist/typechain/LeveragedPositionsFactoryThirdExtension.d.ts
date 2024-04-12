import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface LeveragedPositionsFactoryThirdExtensionInterface extends Interface {
    getFunction(nameOrSignature: "AAVE" | "DELEGATED" | "IONIC" | "_getExtensionFunctions" | "_setPairWhitelisted" | "acceptOwnership" | "blocksPerYear" | "createAndFundDelegatedPosition" | "createAndFundDelegatedPositionAtRatio" | "createAndFundPosition" | "createAndFundPositionAtRatio" | "createDelegatedPosition" | "createPosition" | "creditDelegator" | "deregisterVault" | "flashloanRouter" | "fundersRegistry" | "getAaveMaxLeverageRatio" | "getLeverageRatioAfterBorrow" | "getLeverageRatioAfterRepay" | "getLiquidationThreshold" | "getRegisteredVaults" | "isVaultRegistered" | "minBorrowNative" | "oracle" | "owner" | "pendingOwner" | "rebalanceBorrowRate" | "registerVault" | "renounceOwnership" | "transferOwnership" | "vaultOfPosition"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferStarted" | "OwnershipTransferred" | "PositionCreated"): EventFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DELEGATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "IONIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setPairWhitelisted", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPosition", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPositionAtRatio", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "createAndFundPosition", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundPositionAtRatio", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "createDelegatedPosition", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "createPosition", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "deregisterVault", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAaveMaxLeverageRatio", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterBorrow", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterRepay", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [AddressLike, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRegisteredVaults", values?: undefined): string;
    encodeFunctionData(functionFragment: "isVaultRegistered", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalanceBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "registerVault", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "vaultOfPosition", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DELEGATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IONIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deregisterVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAaveMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterRepay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRegisteredVaults", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isVaultRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalanceBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultOfPosition", data: BytesLike): Result;
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
export interface LeveragedPositionsFactoryThirdExtension extends BaseContract {
    connect(runner?: ContractRunner | null): LeveragedPositionsFactoryThirdExtension;
    waitForDeployment(): Promise<this>;
    interface: LeveragedPositionsFactoryThirdExtensionInterface;
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
    _setPairWhitelisted: TypedContractMethod<[
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    blocksPerYear: TypedContractMethod<[], [bigint], "view">;
    createAndFundDelegatedPosition: TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish
    ], [
        string
    ], "nonpayable">;
    createAndFundDelegatedPositionAtRatio: TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish,
        _leverageRatio: BigNumberish
    ], [
        string
    ], "nonpayable">;
    createAndFundPosition: TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish
    ], [
        string
    ], "nonpayable">;
    createAndFundPositionAtRatio: TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish,
        _leverageRatio: BigNumberish
    ], [
        string
    ], "nonpayable">;
    createDelegatedPosition: TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike
    ], [
        string
    ], "nonpayable">;
    createPosition: TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike
    ], [
        string
    ], "nonpayable">;
    creditDelegator: TypedContractMethod<[], [string], "view">;
    deregisterVault: TypedContractMethod<[
        vault: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    flashloanRouter: TypedContractMethod<[], [string], "view">;
    fundersRegistry: TypedContractMethod<[], [string], "view">;
    getAaveMaxLeverageRatio: TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike
    ], [
        bigint
    ], "view">;
    getLeverageRatioAfterBorrow: TypedContractMethod<[
        collateralAsset: AddressLike,
        borrowedAsset: AddressLike,
        newBorrowsAmount: BigNumberish,
        positionSupplyAmount: BigNumberish,
        positionBorrowAmount: BigNumberish
    ], [
        bigint
    ], "view">;
    getLeverageRatioAfterRepay: TypedContractMethod<[
        collateralAsset: AddressLike,
        borrowedAsset: AddressLike,
        repaidBorrowsAmount: BigNumberish,
        positionSupplyAmount: BigNumberish,
        positionBorrowAmount: BigNumberish
    ], [
        bigint
    ], "view">;
    getLiquidationThreshold: TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike,
        leverageRatio: BigNumberish
    ], [
        bigint
    ], "view">;
    getRegisteredVaults: TypedContractMethod<[], [string[]], "view">;
    isVaultRegistered: TypedContractMethod<[
        vault: AddressLike
    ], [
        boolean
    ], "view">;
    minBorrowNative: TypedContractMethod<[], [bigint], "view">;
    oracle: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    pendingOwner: TypedContractMethod<[], [string], "view">;
    rebalanceBorrowRate: TypedContractMethod<[
        position: AddressLike
    ], [
        void
    ], "nonpayable">;
    registerVault: TypedContractMethod<[
        vault: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    vaultOfPosition: TypedContractMethod<[
        position: AddressLike
    ], [
        string
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "AAVE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "DELEGATED"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "IONIC"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "_getExtensionFunctions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "_setPairWhitelisted"): TypedContractMethod<[
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "blocksPerYear"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "createAndFundDelegatedPosition"): TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createAndFundDelegatedPositionAtRatio"): TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish,
        _leverageRatio: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createAndFundPosition"): TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createAndFundPositionAtRatio"): TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike,
        _fundingAsset: AddressLike,
        _fundingAmount: BigNumberish,
        _leverageRatio: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createDelegatedPosition"): TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "createPosition"): TypedContractMethod<[
        _collateralAsset: AddressLike,
        _collateralVault: AddressLike,
        _stableAsset: AddressLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "creditDelegator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "deregisterVault"): TypedContractMethod<[vault: AddressLike], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "flashloanRouter"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "fundersRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAaveMaxLeverageRatio"): TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getLeverageRatioAfterBorrow"): TypedContractMethod<[
        collateralAsset: AddressLike,
        borrowedAsset: AddressLike,
        newBorrowsAmount: BigNumberish,
        positionSupplyAmount: BigNumberish,
        positionBorrowAmount: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getLeverageRatioAfterRepay"): TypedContractMethod<[
        collateralAsset: AddressLike,
        borrowedAsset: AddressLike,
        repaidBorrowsAmount: BigNumberish,
        positionSupplyAmount: BigNumberish,
        positionBorrowAmount: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getLiquidationThreshold"): TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike,
        leverageRatio: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getRegisteredVaults"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "isVaultRegistered"): TypedContractMethod<[vault: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "minBorrowNative"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "oracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rebalanceBorrowRate"): TypedContractMethod<[position: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "registerVault"): TypedContractMethod<[vault: AddressLike], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "vaultOfPosition"): TypedContractMethod<[position: AddressLike], [string], "view">;
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
