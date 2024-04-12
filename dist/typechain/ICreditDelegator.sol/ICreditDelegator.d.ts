import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface ICreditDelegatorInterface extends Interface {
    getFunction(nameOrSignature: "_listExtensions" | "_registerExtension" | "_replaceExtensions" | "aaveAddressesProvider" | "borrowAllowance" | "borrowAsPosition" | "callLiquidation" | "callPartialLiquidation" | "changeBorrowAllowance" | "depositLevatoFunds" | "getAavePool" | "getAccruedToTreasury" | "getAssetBorrowRate" | "getAssetPoolLtv" | "getAssetPrice" | "getBorrowingPowerUtilization" | "getLevatoCurrentBorrowRate" | "getLiquidationThreshold" | "getPositionAvailableBorrows" | "getPositionDebt" | "getPositionLiquidationThreshold" | "getPositionScaledATokens" | "getTotalAvailableBorrows" | "getUserBorrowAllowance" | "initialize(address,address,address)" | "initialize(address)" | "initializeReserve" | "isPoolSupportedAsset" | "isPositionLiquidateable" | "owner" | "positionScaledATokens" | "reinitialize" | "repayAsPosition"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowAsPosition" | "Liquidation" | "RepayAsPosition"): EventFragment;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "aaveAddressesProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowAsPosition", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "callLiquidation", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "callPartialLiquidation", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeBorrowAllowance", values: [BigNumberish, BigNumberish, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "depositLevatoFunds", values: [AddressLike]): string;
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
    encodeFunctionData(functionFragment: "initialize(address,address,address)", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initializeReserve", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isPoolSupportedAsset", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isPositionLiquidateable", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionScaledATokens", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "repayAsPosition", values: [AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aaveAddressesProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAsPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callPartialLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeBorrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositLevatoFunds", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "initialize(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolSupportedAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPositionLiquidateable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionScaledATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayAsPosition", data: BytesLike): Result;
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
export interface ICreditDelegator extends BaseContract {
    connect(runner?: ContractRunner | null): ICreditDelegator;
    waitForDeployment(): Promise<this>;
    interface: ICreditDelegatorInterface;
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
    aaveAddressesProvider: TypedContractMethod<[], [string], "view">;
    borrowAllowance: TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    borrowAsPosition: TypedContractMethod<[
        asset: AddressLike,
        borrowAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
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
    depositLevatoFunds: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "nonpayable">;
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
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getPositionDebt: TypedContractMethod<[
        position: AddressLike
    ], [
        [
            bigint,
            bigint,
            string
        ] & {
            internalDebt: bigint;
            externalDebt: bigint;
            borrowedAsset: string;
        }
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
    "initialize(address,address,address)": TypedContractMethod<[
        _addressesProvider: AddressLike,
        _factory: AddressLike,
        _irm: AddressLike
    ], [
        void
    ], "nonpayable">;
    "initialize(address)": TypedContractMethod<[
        _factory: AddressLike
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
    positionScaledATokens: TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    reinitialize: TypedContractMethod<[_irm: AddressLike], [void], "nonpayable">;
    repayAsPosition: TypedContractMethod<[
        asset: AddressLike,
        repayAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_listExtensions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "_registerExtension"): TypedContractMethod<[
        extensionToAdd: AddressLike,
        extensionToReplace: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_replaceExtensions"): TypedContractMethod<[extensions: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "aaveAddressesProvider"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "borrowAllowance"): TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "borrowAsPosition"): TypedContractMethod<[
        asset: AddressLike,
        borrowAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "depositLevatoFunds"): TypedContractMethod<[asset: AddressLike], [bigint], "nonpayable">;
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
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getPositionDebt"): TypedContractMethod<[
        position: AddressLike
    ], [
        [
            bigint,
            bigint,
            string
        ] & {
            internalDebt: bigint;
            externalDebt: bigint;
            borrowedAsset: string;
        }
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
    getFunction(nameOrSignature: "initialize(address,address,address)"): TypedContractMethod<[
        _addressesProvider: AddressLike,
        _factory: AddressLike,
        _irm: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initialize(address)"): TypedContractMethod<[_factory: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "initializeReserve"): TypedContractMethod<[
        _asset: AddressLike,
        _lpToken: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isPoolSupportedAsset"): TypedContractMethod<[asset: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "isPositionLiquidateable"): TypedContractMethod<[position: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "positionScaledATokens"): TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "reinitialize"): TypedContractMethod<[_irm: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "repayAsPosition"): TypedContractMethod<[
        asset: AddressLike,
        repayAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "BorrowAsPosition"): TypedContractEvent<BorrowAsPositionEvent.InputTuple, BorrowAsPositionEvent.OutputTuple, BorrowAsPositionEvent.OutputObject>;
    getEvent(key: "Liquidation"): TypedContractEvent<LiquidationEvent.InputTuple, LiquidationEvent.OutputTuple, LiquidationEvent.OutputObject>;
    getEvent(key: "RepayAsPosition"): TypedContractEvent<RepayAsPositionEvent.InputTuple, RepayAsPositionEvent.OutputTuple, RepayAsPositionEvent.OutputObject>;
    filters: {
        "BorrowAsPosition(address,address,uint256,uint256)": TypedContractEvent<BorrowAsPositionEvent.InputTuple, BorrowAsPositionEvent.OutputTuple, BorrowAsPositionEvent.OutputObject>;
        BorrowAsPosition: TypedContractEvent<BorrowAsPositionEvent.InputTuple, BorrowAsPositionEvent.OutputTuple, BorrowAsPositionEvent.OutputObject>;
        "Liquidation(address,address,uint256,uint256,uint256)": TypedContractEvent<LiquidationEvent.InputTuple, LiquidationEvent.OutputTuple, LiquidationEvent.OutputObject>;
        Liquidation: TypedContractEvent<LiquidationEvent.InputTuple, LiquidationEvent.OutputTuple, LiquidationEvent.OutputObject>;
        "RepayAsPosition(address,address,uint256,uint256)": TypedContractEvent<RepayAsPositionEvent.InputTuple, RepayAsPositionEvent.OutputTuple, RepayAsPositionEvent.OutputObject>;
        RepayAsPosition: TypedContractEvent<RepayAsPositionEvent.InputTuple, RepayAsPositionEvent.OutputTuple, RepayAsPositionEvent.OutputObject>;
    };
}
