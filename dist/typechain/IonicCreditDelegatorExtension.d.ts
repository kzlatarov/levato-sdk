import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface IonicCreditDelegatorExtensionInterface extends Interface {
    getFunction(nameOrSignature: "_getExtensionFunctions" | "aaveAddressesProvider" | "acceptOwnership" | "borrowAllowance" | "borrowBalance" | "delegatedDebtAssetData" | "factory" | "getAssetBorrowRate" | "getAssetPoolLtv" | "getAssetPrice" | "initialize" | "isPoolSupportedAsset" | "owner" | "pendingOwner" | "positionBorrowIndex" | "positionBorrowIndexLastUpdate" | "positionScaledATokens" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferStarted" | "OwnershipTransferred"): EventFragment;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "aaveAddressesProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowBalance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "delegatedDebtAssetData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPoolLtv", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isPoolSupportedAsset", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionBorrowIndex", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "positionBorrowIndexLastUpdate", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "positionScaledATokens", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aaveAddressesProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedDebtAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPoolLtv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolSupportedAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndexLastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionScaledATokens", data: BytesLike): Result;
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
export interface IonicCreditDelegatorExtension extends BaseContract {
    connect(runner?: ContractRunner | null): IonicCreditDelegatorExtension;
    waitForDeployment(): Promise<this>;
    interface: IonicCreditDelegatorExtensionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _getExtensionFunctions: TypedContractMethod<[], [string[]], "view">;
    aaveAddressesProvider: TypedContractMethod<[], [string], "view">;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    borrowAllowance: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    borrowBalance: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    delegatedDebtAssetData: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            string,
            string,
            string,
            bigint,
            bigint
        ] & {
            levatoCurrentBorrowRate: bigint;
            borrowIndex: bigint;
            lastTotalDebt: bigint;
            lastUpdateTimestamp: bigint;
            lpToken: string;
            debtToken: string;
            irm: string;
            accruedToTreasury: bigint;
            reserveFactor: bigint;
        }
    ], "view">;
    factory: TypedContractMethod<[], [string], "view">;
    getAssetBorrowRate: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getAssetPoolLtv: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getAssetPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    initialize: TypedContractMethod<[
        _factory: AddressLike
    ], [
        void
    ], "nonpayable">;
    isPoolSupportedAsset: TypedContractMethod<[
        asset: AddressLike
    ], [
        boolean
    ], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    pendingOwner: TypedContractMethod<[], [string], "view">;
    positionBorrowIndex: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    positionBorrowIndexLastUpdate: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    positionScaledATokens: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_getExtensionFunctions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "aaveAddressesProvider"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "borrowAllowance"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "borrowBalance"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "delegatedDebtAssetData"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            string,
            string,
            string,
            bigint,
            bigint
        ] & {
            levatoCurrentBorrowRate: bigint;
            borrowIndex: bigint;
            lastTotalDebt: bigint;
            lastUpdateTimestamp: bigint;
            lpToken: string;
            debtToken: string;
            irm: string;
            accruedToTreasury: bigint;
            reserveFactor: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "factory"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAssetBorrowRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPoolLtv"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPrice"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[_factory: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "isPoolSupportedAsset"): TypedContractMethod<[asset: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "positionBorrowIndex"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "positionBorrowIndexLastUpdate"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "positionScaledATokens"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferStarted"): TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    filters: {
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "OwnershipTransferStarted(address,address)": TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        OwnershipTransferStarted: TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    };
}
