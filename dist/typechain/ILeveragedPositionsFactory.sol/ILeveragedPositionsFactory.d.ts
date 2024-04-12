import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface ILeveragedPositionsFactoryInterface extends Interface {
    getFunction(nameOrSignature: "_listExtensions" | "_registerExtension" | "_replaceExtensions" | "_setIonicPairWhitelisted" | "_setPairWhitelisted" | "closeAndRemoveUserPosition" | "createAavePosition" | "createAndFundDelegatedPosition" | "createAndFundDelegatedPositionAtRatio" | "createAndFundIonicPosition" | "createAndFundIonicPositionAtRatio" | "createAndFundPosition" | "createAndFundPositionAtRatio" | "createDelegatedPosition" | "createIonicPosition" | "createPosition" | "creditDelegator" | "deregisterVault" | "flashloanRouter" | "fundPosition" | "fundersRegistry" | "getAaveMaxLeverageRatio" | "getAccountsWithOpenPositions" | "getAssetBorrowRate" | "getAssetPrice" | "getBorrowableMarketsByCollateral" | "getLeverageRatioAfterBorrow" | "getLeverageRatioAfterRepay" | "getLiquidationThreshold" | "getMinBorrowNative" | "getPositionsByAccount" | "getPositionsExtension" | "getPositionsTotalCollateralValue" | "getRegisteredVaults" | "getWhitelistedCollateralMarkets" | "initialize" | "isFactoryPosition" | "isVaultRegistered" | "minBorrowNative" | "oracle" | "owner" | "registerVault" | "reinitialize" | "removeClosedPosition" | "swap" | "vaultOfPosition"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "_setIonicPairWhitelisted", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_setPairWhitelisted", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "closeAndRemoveUserPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "createAavePosition", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPosition", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPositionAtRatio", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPosition", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPositionAtRatio", values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
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
    encodeFunctionData(functionFragment: "createIonicPosition", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "createPosition", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "deregisterVault", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundPosition", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAaveMaxLeverageRatio", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "getAccountsWithOpenPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getBorrowableMarketsByCollateral", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterBorrow", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterRepay", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [AddressLike, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMinBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionsByAccount", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionsExtension", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getPositionsTotalCollateralValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRegisteredVaults", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedCollateralMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isFactoryPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isVaultRegistered", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerVault", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "removeClosedPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "swap", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "vaultOfPosition", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setIonicPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeAndRemoveUserPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAavePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deregisterVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAaveMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountsWithOpenPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowableMarketsByCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterRepay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsByAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsTotalCollateralValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRegisteredVaults", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedCollateralMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFactoryPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isVaultRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeClosedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultOfPosition", data: BytesLike): Result;
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
export interface ILeveragedPositionsFactory extends BaseContract {
    connect(runner?: ContractRunner | null): ILeveragedPositionsFactory;
    waitForDeployment(): Promise<this>;
    interface: ILeveragedPositionsFactoryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _listExtensions: TypedContractMethod<[], [string[]], "view">;
    _registerExtension: TypedContractMethod<[
        extensionToAdd: AddressLike,
        extensionToReplace: AddressLike
    ], [
        void
    ], "nonpayable">;
    _replaceExtensions: TypedContractMethod<[
        extensions: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    _setIonicPairWhitelisted: TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    _setPairWhitelisted: TypedContractMethod<[
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
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
    createIonicPosition: TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike
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
    fundPosition: TypedContractMethod<[
        position: AddressLike,
        fundingAsset: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    fundersRegistry: TypedContractMethod<[], [string], "view">;
    getAaveMaxLeverageRatio: TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike
    ], [
        bigint
    ], "view">;
    getAccountsWithOpenPositions: TypedContractMethod<[], [string[]], "view">;
    getAssetBorrowRate: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getAssetPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getBorrowableMarketsByCollateral: TypedContractMethod<[
        _collateralMarket: AddressLike
    ], [
        string[]
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
    getMinBorrowNative: TypedContractMethod<[], [bigint], "view">;
    getPositionsByAccount: TypedContractMethod<[
        account: AddressLike
    ], [
        [string[], boolean[]]
    ], "view">;
    getPositionsExtension: TypedContractMethod<[
        msgSig: BytesLike
    ], [
        string
    ], "view">;
    getPositionsTotalCollateralValue: TypedContractMethod<[], [bigint], "view">;
    getRegisteredVaults: TypedContractMethod<[], [string[]], "view">;
    getWhitelistedCollateralMarkets: TypedContractMethod<[], [string[]], "view">;
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
    isVaultRegistered: TypedContractMethod<[
        vault: AddressLike
    ], [
        boolean
    ], "view">;
    minBorrowNative: TypedContractMethod<[], [bigint], "view">;
    oracle: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    registerVault: TypedContractMethod<[
        vault: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    reinitialize: TypedContractMethod<[
        _oracle: AddressLike
    ], [
        void
    ], "nonpayable">;
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
    vaultOfPosition: TypedContractMethod<[
        position: AddressLike
    ], [
        string
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_listExtensions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "_registerExtension"): TypedContractMethod<[
        extensionToAdd: AddressLike,
        extensionToReplace: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_replaceExtensions"): TypedContractMethod<[extensions: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "_setIonicPairWhitelisted"): TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setPairWhitelisted"): TypedContractMethod<[
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike,
        _whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "closeAndRemoveUserPosition"): TypedContractMethod<[position: AddressLike], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "createAavePosition"): TypedContractMethod<[
        user: AddressLike,
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike
    ], [
        string
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
    getFunction(nameOrSignature: "createIonicPosition"): TypedContractMethod<[
        _collateralMarket: AddressLike,
        _stableMarket: AddressLike
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
    getFunction(nameOrSignature: "fundPosition"): TypedContractMethod<[
        position: AddressLike,
        fundingAsset: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "fundersRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAaveMaxLeverageRatio"): TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getAccountsWithOpenPositions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getAssetBorrowRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPrice"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getBorrowableMarketsByCollateral"): TypedContractMethod<[_collateralMarket: AddressLike], [string[]], "view">;
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
    getFunction(nameOrSignature: "getMinBorrowNative"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPositionsByAccount"): TypedContractMethod<[
        account: AddressLike
    ], [
        [string[], boolean[]]
    ], "view">;
    getFunction(nameOrSignature: "getPositionsExtension"): TypedContractMethod<[msgSig: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getPositionsTotalCollateralValue"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getRegisteredVaults"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getWhitelistedCollateralMarkets"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _delegator: AddressLike,
        _oracle: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isFactoryPosition"): TypedContractMethod<[position: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "isVaultRegistered"): TypedContractMethod<[vault: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "minBorrowNative"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "oracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "registerVault"): TypedContractMethod<[vault: AddressLike], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "reinitialize"): TypedContractMethod<[_oracle: AddressLike], [void], "nonpayable">;
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
    getFunction(nameOrSignature: "vaultOfPosition"): TypedContractMethod<[position: AddressLike], [string], "view">;
    getEvent(key: "PositionCreated"): TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    filters: {
        "PositionCreated(address,address,address,address,uint16)": TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
        PositionCreated: TypedContractEvent<PositionCreatedEvent.InputTuple, PositionCreatedEvent.OutputTuple, PositionCreatedEvent.OutputObject>;
    };
}
