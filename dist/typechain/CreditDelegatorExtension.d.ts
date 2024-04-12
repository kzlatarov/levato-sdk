import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface CreditDelegatorExtensionInterface extends Interface {
    getFunction(nameOrSignature: "_getExtensionFunctions" | "_repayForPosition" | "aaveAddressesProvider" | "acceptOwnership" | "borrowAllowance" | "borrowAsPosition" | "borrowBalance" | "callLiquidation" | "callPartialLiquidation" | "changeBorrowAllowance" | "delegatedDebtAssetData" | "depositLevatoFunds" | "factory" | "getAavePool" | "getAccruedToTreasury" | "getAssetBorrowRate" | "getAssetPoolLtv" | "getAssetPrice" | "getBorrowingPowerUtilization" | "getLevatoCurrentBorrowRate" | "getLiquidationThreshold" | "getPositionAvailableBorrows" | "getPositionDebt" | "getPositionLiquidationThreshold" | "getPositionScaledATokens" | "getTotalAvailableBorrows" | "getUserBorrowAllowance" | "initialize" | "initializeReserve" | "isPoolSupportedAsset" | "isPositionLiquidateable" | "owner" | "pendingOwner" | "positionBorrowIndex" | "positionBorrowIndexLastUpdate" | "positionScaledATokens" | "reinitialize" | "renounceOwnership" | "repayAsPosition" | "transferOwnership"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowAsPosition" | "Initialized" | "Liquidation" | "OwnershipTransferStarted" | "OwnershipTransferred" | "RepayAsPosition"): EventFragment;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_repayForPosition", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "aaveAddressesProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowAsPosition", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowBalance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "callLiquidation", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "callPartialLiquidation", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeBorrowAllowance", values: [BigNumberish, BigNumberish, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "delegatedDebtAssetData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "depositLevatoFunds", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAavePool", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccruedToTreasury", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPoolLtv", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getBorrowingPowerUtilization", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLevatoCurrentBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionAvailableBorrows", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionDebt", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionLiquidationThreshold", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionScaledATokens", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTotalAvailableBorrows", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getUserBorrowAllowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initializeReserve", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isPoolSupportedAsset", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isPositionLiquidateable", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionBorrowIndex", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "positionBorrowIndexLastUpdate", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "positionScaledATokens", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "repayAsPosition", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_repayForPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aaveAddressesProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAsPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callPartialLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeBorrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedDebtAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositLevatoFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAavePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPoolLtv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPowerUtilization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLevatoCurrentBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionAvailableBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionScaledATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalAvailableBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserBorrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolSupportedAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPositionLiquidateable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndexLastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionScaledATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayAsPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
export declare namespace BorrowAsPositionEvent {
    type InputTuple = [
        position: AddressLike,
        asset: AddressLike,
        borrowAmount: BigNumberish,
        scaledATokensMinted: BigNumberish
    ];
    type OutputTuple = [
        position: string,
        asset: string,
        borrowAmount: bigint,
        scaledATokensMinted: bigint
    ];
    interface OutputObject {
        position: string;
        asset: string;
        borrowAmount: bigint;
        scaledATokensMinted: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
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
export declare namespace LiquidationEvent {
    type InputTuple = [
        liquidator: AddressLike,
        position: AddressLike,
        debtToRepay: BigNumberish,
        actualSeizedStableAmount: BigNumberish,
        collateralSeized: BigNumberish
    ];
    type OutputTuple = [
        liquidator: string,
        position: string,
        debtToRepay: bigint,
        actualSeizedStableAmount: bigint,
        collateralSeized: bigint
    ];
    interface OutputObject {
        liquidator: string;
        position: string;
        debtToRepay: bigint;
        actualSeizedStableAmount: bigint;
        collateralSeized: bigint;
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
export declare namespace RepayAsPositionEvent {
    type InputTuple = [
        position: AddressLike,
        asset: AddressLike,
        borrowAmount: BigNumberish,
        scaledATokensBurnt: BigNumberish
    ];
    type OutputTuple = [
        position: string,
        asset: string,
        borrowAmount: bigint,
        scaledATokensBurnt: bigint
    ];
    interface OutputObject {
        position: string;
        asset: string;
        borrowAmount: bigint;
        scaledATokensBurnt: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface CreditDelegatorExtension extends BaseContract {
    connect(runner?: ContractRunner | null): CreditDelegatorExtension;
    waitForDeployment(): Promise<this>;
    interface: CreditDelegatorExtensionInterface;
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
    _repayForPosition: TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike,
        repayAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    aaveAddressesProvider: TypedContractMethod<[], [string], "view">;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    borrowAllowance: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    borrowAsPosition: TypedContractMethod<[
        asset: AddressLike,
        borrowAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    borrowBalance: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    callLiquidation: TypedContractMethod<[
        position: AddressLike
    ], [
        void
    ], "nonpayable">;
    callPartialLiquidation: TypedContractMethod<[
        position: AddressLike,
        debtToRepay: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeBorrowAllowance: TypedContractMethod<[
        fromAllowance: BigNumberish,
        toAllowance: BigNumberish,
        user: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "nonpayable">;
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
    depositLevatoFunds: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    factory: TypedContractMethod<[], [string], "view">;
    getAavePool: TypedContractMethod<[], [string], "view">;
    getAccruedToTreasury: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getAssetBorrowRate: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getAssetPoolLtv: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getAssetPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getBorrowingPowerUtilization: TypedContractMethod<[], [bigint], "view">;
    getLevatoCurrentBorrowRate: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getLiquidationThreshold: TypedContractMethod<[
        collateralAsset: AddressLike,
        delegatedDebtValue: BigNumberish
    ], [
        bigint
    ], "view">;
    getPositionAvailableBorrows: TypedContractMethod<[
        positionAddress: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getPositionDebt: TypedContractMethod<[
        position: AddressLike
    ], [
        [bigint, bigint, string]
    ], "view">;
    getPositionLiquidationThreshold: TypedContractMethod<[
        position: AddressLike
    ], [
        bigint
    ], "view">;
    getPositionScaledATokens: TypedContractMethod<[
        position: AddressLike
    ], [
        bigint
    ], "view">;
    getTotalAvailableBorrows: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getUserBorrowAllowance: TypedContractMethod<[
        user: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    initialize: TypedContractMethod<[
        _addressesProvider: AddressLike,
        _factory: AddressLike,
        _irm: AddressLike
    ], [
        void
    ], "nonpayable">;
    initializeReserve: TypedContractMethod<[
        _asset: AddressLike,
        _lpToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    isPoolSupportedAsset: TypedContractMethod<[
        asset: AddressLike
    ], [
        boolean
    ], "view">;
    isPositionLiquidateable: TypedContractMethod<[
        position: AddressLike
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
    reinitialize: TypedContractMethod<[_irm: AddressLike], [void], "nonpayable">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    repayAsPosition: TypedContractMethod<[
        asset: AddressLike,
        repayAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_getExtensionFunctions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "_repayForPosition"): TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike,
        repayAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "aaveAddressesProvider"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "borrowAllowance"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "borrowAsPosition"): TypedContractMethod<[
        asset: AddressLike,
        borrowAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "borrowBalance"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "callLiquidation"): TypedContractMethod<[position: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "callPartialLiquidation"): TypedContractMethod<[
        position: AddressLike,
        debtToRepay: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeBorrowAllowance"): TypedContractMethod<[
        fromAllowance: BigNumberish,
        toAllowance: BigNumberish,
        user: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "depositLevatoFunds"): TypedContractMethod<[asset: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "factory"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAavePool"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAccruedToTreasury"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetBorrowRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPoolLtv"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPrice"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getBorrowingPowerUtilization"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getLevatoCurrentBorrowRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getLiquidationThreshold"): TypedContractMethod<[
        collateralAsset: AddressLike,
        delegatedDebtValue: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getPositionAvailableBorrows"): TypedContractMethod<[
        positionAddress: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getPositionDebt"): TypedContractMethod<[
        position: AddressLike
    ], [
        [bigint, bigint, string]
    ], "view">;
    getFunction(nameOrSignature: "getPositionLiquidationThreshold"): TypedContractMethod<[position: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getPositionScaledATokens"): TypedContractMethod<[position: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getTotalAvailableBorrows"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getUserBorrowAllowance"): TypedContractMethod<[
        user: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _addressesProvider: AddressLike,
        _factory: AddressLike,
        _irm: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initializeReserve"): TypedContractMethod<[
        _asset: AddressLike,
        _lpToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isPoolSupportedAsset"): TypedContractMethod<[asset: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "isPositionLiquidateable"): TypedContractMethod<[position: AddressLike], [boolean], "view">;
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
    getFunction(nameOrSignature: "reinitialize"): TypedContractMethod<[_irm: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "repayAsPosition"): TypedContractMethod<[
        asset: AddressLike,
        repayAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getEvent(key: "BorrowAsPosition"): TypedContractEvent<BorrowAsPositionEvent.InputTuple, BorrowAsPositionEvent.OutputTuple, BorrowAsPositionEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Liquidation"): TypedContractEvent<LiquidationEvent.InputTuple, LiquidationEvent.OutputTuple, LiquidationEvent.OutputObject>;
    getEvent(key: "OwnershipTransferStarted"): TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    getEvent(key: "RepayAsPosition"): TypedContractEvent<RepayAsPositionEvent.InputTuple, RepayAsPositionEvent.OutputTuple, RepayAsPositionEvent.OutputObject>;
    filters: {
        "BorrowAsPosition(address,address,uint256,uint256)": TypedContractEvent<BorrowAsPositionEvent.InputTuple, BorrowAsPositionEvent.OutputTuple, BorrowAsPositionEvent.OutputObject>;
        BorrowAsPosition: TypedContractEvent<BorrowAsPositionEvent.InputTuple, BorrowAsPositionEvent.OutputTuple, BorrowAsPositionEvent.OutputObject>;
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Liquidation(address,address,uint256,uint256,uint256)": TypedContractEvent<LiquidationEvent.InputTuple, LiquidationEvent.OutputTuple, LiquidationEvent.OutputObject>;
        Liquidation: TypedContractEvent<LiquidationEvent.InputTuple, LiquidationEvent.OutputTuple, LiquidationEvent.OutputObject>;
        "OwnershipTransferStarted(address,address)": TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        OwnershipTransferStarted: TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        "RepayAsPosition(address,address,uint256,uint256)": TypedContractEvent<RepayAsPositionEvent.InputTuple, RepayAsPositionEvent.OutputTuple, RepayAsPositionEvent.OutputObject>;
        RepayAsPosition: TypedContractEvent<RepayAsPositionEvent.InputTuple, RepayAsPositionEvent.OutputTuple, RepayAsPositionEvent.OutputObject>;
    };
}
