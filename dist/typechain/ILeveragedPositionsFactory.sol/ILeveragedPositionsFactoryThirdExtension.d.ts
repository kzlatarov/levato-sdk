import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface ILeveragedPositionsFactoryThirdExtensionInterface extends Interface {
    getFunction(nameOrSignature: "_setPairWhitelisted" | "createAndFundDelegatedPosition" | "createAndFundDelegatedPositionAtRatio" | "createAndFundPosition" | "createAndFundPositionAtRatio" | "createDelegatedPosition" | "createPosition" | "deregisterVault" | "getAaveMaxLeverageRatio" | "getLeverageRatioAfterBorrow" | "getLeverageRatioAfterRepay" | "getLiquidationThreshold" | "getRegisteredVaults" | "isVaultRegistered" | "registerVault"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
    encodeFunctionData(functionFragment: "_setPairWhitelisted", values: [AddressLike, AddressLike, boolean]): string;
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
    encodeFunctionData(functionFragment: "deregisterVault", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAaveMaxLeverageRatio", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterBorrow", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterRepay", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [AddressLike, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRegisteredVaults", values?: undefined): string;
    encodeFunctionData(functionFragment: "isVaultRegistered", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "registerVault", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "_setPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deregisterVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAaveMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterRepay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRegisteredVaults", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isVaultRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerVault", data: BytesLike): Result;
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
export interface ILeveragedPositionsFactoryThirdExtension extends BaseContract {
    connect(runner?: ContractRunner | null): ILeveragedPositionsFactoryThirdExtension;
    waitForDeployment(): Promise<this>;
    interface: ILeveragedPositionsFactoryThirdExtensionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _setPairWhitelisted: TypedContractMethod<[
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
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
    deregisterVault: TypedContractMethod<[
        vault: AddressLike
    ], [
        boolean
    ], "nonpayable">;
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
    registerVault: TypedContractMethod<[
        vault: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_setPairWhitelisted"): TypedContractMethod<[
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "deregisterVault"): TypedContractMethod<[vault: AddressLike], [boolean], "nonpayable">;
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
    getFunction(nameOrSignature: "registerVault"): TypedContractMethod<[vault: AddressLike], [boolean], "nonpayable">;
    getEvent(key: "PositionCreated"): TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    filters: {
        "PositionCreated(address,address,address,address,uint16)": TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
        PositionCreated: TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    };
}
