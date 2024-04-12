import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface ILeveragedPositionsFactoryFirstExtensionInterface extends Interface {
    getFunction(nameOrSignature: "_setIonicPairWhitelisted" | "createAndFundIonicPosition" | "createAndFundIonicPositionAtRatio" | "createIonicPosition" | "getAssetBorrowRate" | "getAssetPrice" | "getPositionsByAccount" | "getPositionsTotalCollateralValue" | "initialize" | "isFactoryPosition" | "reinitialize"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
    encodeFunctionData(functionFragment: "_setIonicPairWhitelisted", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPosition", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPositionAtRatio", values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createIonicPosition", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionsByAccount", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionsTotalCollateralValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isFactoryPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "_setIonicPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsByAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsTotalCollateralValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFactoryPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
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
export interface ILeveragedPositionsFactoryFirstExtension extends BaseContract {
    connect(runner?: ContractRunner | null): ILeveragedPositionsFactoryFirstExtension;
    waitForDeployment(): Promise<this>;
    interface: ILeveragedPositionsFactoryFirstExtensionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _setIonicPairWhitelisted: TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
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
    getAssetBorrowRate: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getAssetPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getPositionsByAccount: TypedContractMethod<[
        account: AddressLike
    ], [
        [string[], boolean[]]
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
    reinitialize: TypedContractMethod<[
        _oracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_setIonicPairWhitelisted"): TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "getAssetBorrowRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPrice"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getPositionsByAccount"): TypedContractMethod<[
        account: AddressLike
    ], [
        [string[], boolean[]]
    ], "view">;
    getFunction(nameOrSignature: "getPositionsTotalCollateralValue"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _delegator: AddressLike,
        _oracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isFactoryPosition"): TypedContractMethod<[position: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "reinitialize"): TypedContractMethod<[_oracle: AddressLike], [void], "nonpayable">;
    getEvent(key: "PositionCreated"): TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    filters: {
        "PositionCreated(address,address,address,address,uint16)": TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
        PositionCreated: TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    };
}
