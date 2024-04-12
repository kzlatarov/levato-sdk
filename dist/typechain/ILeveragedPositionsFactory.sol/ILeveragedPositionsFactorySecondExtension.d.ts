import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface ILeveragedPositionsFactorySecondExtensionInterface extends Interface {
    getFunction(nameOrSignature: "closeAndRemoveUserPosition" | "createAavePosition" | "fundPosition" | "getAccountsWithOpenPositions" | "getBorrowableMarketsByCollateral" | "getMinBorrowNative" | "getPositionsExtension" | "getWhitelistedCollateralMarkets" | "removeClosedPosition" | "swap"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
    encodeFunctionData(functionFragment: "closeAndRemoveUserPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "createAavePosition", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "fundPosition", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAccountsWithOpenPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowableMarketsByCollateral", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getMinBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionsExtension", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getWhitelistedCollateralMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeClosedPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "swap", values: [AddressLike, BigNumberish, AddressLike]): string;
    decodeFunctionResult(functionFragment: "closeAndRemoveUserPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAavePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountsWithOpenPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowableMarketsByCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedCollateralMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeClosedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
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
export interface ILeveragedPositionsFactorySecondExtension extends BaseContract {
    connect(runner?: ContractRunner | null): ILeveragedPositionsFactorySecondExtension;
    waitForDeployment(): Promise<this>;
    interface: ILeveragedPositionsFactorySecondExtensionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
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
    fundPosition: TypedContractMethod<[
        position: AddressLike,
        fundingAsset: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
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
    removeClosedPosition: TypedContractMethod<[
        closedPosition: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    swap: TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "closeAndRemoveUserPosition"): TypedContractMethod<[position: AddressLike], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "createAavePosition"): TypedContractMethod<[
        user: AddressLike,
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "fundPosition"): TypedContractMethod<[
        position: AddressLike,
        fundingAsset: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAccountsWithOpenPositions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getBorrowableMarketsByCollateral"): TypedContractMethod<[_collateralMarket: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "getMinBorrowNative"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPositionsExtension"): TypedContractMethod<[msgSig: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getWhitelistedCollateralMarkets"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "removeClosedPosition"): TypedContractMethod<[
        closedPosition: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        inputToken: AddressLike,
        inputAmount: BigNumberish,
        outputToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getEvent(key: "PositionCreated"): TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    filters: {
        "PositionCreated(address,address,address,address,uint16)": TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
        PositionCreated: TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    };
}
