import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export declare namespace LeveragedPositionsLens {
    type PositionInfoStruct = {
        positionAddress: AddressLike;
        closed: boolean;
        collateralAssetPrice: BigNumberish;
        borrowedAssetPrice: BigNumberish;
        positionSupplyAmount: BigNumberish;
        positionValue: BigNumberish;
        debtAmount: BigNumberish;
        debtValue: BigNumberish;
        equityAmount: BigNumberish;
        equityValue: BigNumberish;
        netApy: BigNumberish;
        rewardsApy: BigNumberish;
        debtRatio: BigNumberish;
        liquidationThreshold: BigNumberish;
        liquidationPrice: BigNumberish;
        safetyBuffer: BigNumberish;
        leverageRatio: BigNumberish;
        maxLeverageRatio: BigNumberish;
        positionCollateralAllowance: BigNumberish;
        healthRatio: BigNumberish;
        collateralAsset: AddressLike;
        stableAsset: AddressLike;
    };
    type PositionInfoStructOutput = [
        positionAddress: string,
        closed: boolean,
        collateralAssetPrice: bigint,
        borrowedAssetPrice: bigint,
        positionSupplyAmount: bigint,
        positionValue: bigint,
        debtAmount: bigint,
        debtValue: bigint,
        equityAmount: bigint,
        equityValue: bigint,
        netApy: bigint,
        rewardsApy: bigint,
        debtRatio: bigint,
        liquidationThreshold: bigint,
        liquidationPrice: bigint,
        safetyBuffer: bigint,
        leverageRatio: bigint,
        maxLeverageRatio: bigint,
        positionCollateralAllowance: bigint,
        healthRatio: bigint,
        collateralAsset: string,
        stableAsset: string
    ] & {
        positionAddress: string;
        closed: boolean;
        collateralAssetPrice: bigint;
        borrowedAssetPrice: bigint;
        positionSupplyAmount: bigint;
        positionValue: bigint;
        debtAmount: bigint;
        debtValue: bigint;
        equityAmount: bigint;
        equityValue: bigint;
        netApy: bigint;
        rewardsApy: bigint;
        debtRatio: bigint;
        liquidationThreshold: bigint;
        liquidationPrice: bigint;
        safetyBuffer: bigint;
        leverageRatio: bigint;
        maxLeverageRatio: bigint;
        positionCollateralAllowance: bigint;
        healthRatio: bigint;
        collateralAsset: string;
        stableAsset: string;
    };
}
export interface LeveragedPositionsLensInterface extends Interface {
    getFunction(nameOrSignature: "factory" | "getAssetBorrowRate" | "getAssetPrice" | "getAssetsBorrowRates" | "getErc20Balances" | "getErc20BalancesAndAllowances" | "getLiquidationThreshold" | "getMaxLeverageRatio" | "getNetAPY" | "getPositionInfo" | "getPositionLiquidationThreshold" | "getPositionNetAPY" | "getPositionRewardsSpeedPerSecond" | "getPositionsInfo" | "getRewardsAprForPosition" | "initialize"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetsBorrowRates", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "getErc20Balances", values: [AddressLike, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "getErc20BalancesAndAllowances", values: [AddressLike, AddressLike, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [AddressLike, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMaxLeverageRatio", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "getNetAPY", values: [BigNumberish, BigNumberish, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionInfo", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionLiquidationThreshold", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionNetAPY", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionRewardsSpeedPerSecond", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getPositionsInfo", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getRewardsAprForPosition", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsBorrowRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getErc20Balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getErc20BalancesAndAllowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetAPY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionNetAPY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionRewardsSpeedPerSecond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsAprForPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
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
export interface LeveragedPositionsLens extends BaseContract {
    connect(runner?: ContractRunner | null): LeveragedPositionsLens;
    waitForDeployment(): Promise<this>;
    interface: LeveragedPositionsLensInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    factory: TypedContractMethod<[], [string], "view">;
    getAssetBorrowRate: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getAssetPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getAssetsBorrowRates: TypedContractMethod<[
        assets: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    getErc20Balances: TypedContractMethod<[
        user: AddressLike,
        tokens: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    getErc20BalancesAndAllowances: TypedContractMethod<[
        user: AddressLike,
        spender: AddressLike,
        tokens: AddressLike[]
    ], [
        [bigint[], bigint[]] & {
            balances: bigint[];
            allowances: bigint[];
        }
    ], "view">;
    getLiquidationThreshold: TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike,
        leverageRatio: BigNumberish
    ], [
        bigint
    ], "view">;
    getMaxLeverageRatio: TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike
    ], [
        bigint
    ], "view">;
    getNetAPY: TypedContractMethod<[
        _supplyAPY: BigNumberish,
        _supplyAmount: BigNumberish,
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike,
        _leverageRatio: BigNumberish
    ], [
        bigint
    ], "view">;
    getPositionInfo: TypedContractMethod<[
        pos: AddressLike,
        supplyApy: BigNumberish
    ], [
        LeveragedPositionsLens.PositionInfoStructOutput
    ], "nonpayable">;
    getPositionLiquidationThreshold: TypedContractMethod<[
        position: AddressLike
    ], [
        bigint
    ], "view">;
    getPositionNetAPY: TypedContractMethod<[
        _supplyAPY: BigNumberish,
        position: AddressLike
    ], [
        bigint
    ], "view">;
    getPositionRewardsSpeedPerSecond: TypedContractMethod<[
        position: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getPositionsInfo: TypedContractMethod<[
        positions: AddressLike[],
        supplyApys: BigNumberish[]
    ], [
        LeveragedPositionsLens.PositionInfoStructOutput[]
    ], "nonpayable">;
    getRewardsAprForPosition: TypedContractMethod<[
        position: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    initialize: TypedContractMethod<[
        _factory: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "factory"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAssetBorrowRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPrice"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetsBorrowRates"): TypedContractMethod<[assets: AddressLike[]], [bigint[]], "view">;
    getFunction(nameOrSignature: "getErc20Balances"): TypedContractMethod<[
        user: AddressLike,
        tokens: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "getErc20BalancesAndAllowances"): TypedContractMethod<[
        user: AddressLike,
        spender: AddressLike,
        tokens: AddressLike[]
    ], [
        [bigint[], bigint[]] & {
            balances: bigint[];
            allowances: bigint[];
        }
    ], "view">;
    getFunction(nameOrSignature: "getLiquidationThreshold"): TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike,
        leverageRatio: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getMaxLeverageRatio"): TypedContractMethod<[
        collateralAsset: AddressLike,
        collateralAmount: BigNumberish,
        borrowedAsset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getNetAPY"): TypedContractMethod<[
        _supplyAPY: BigNumberish,
        _supplyAmount: BigNumberish,
        _collateralAsset: AddressLike,
        _stableAsset: AddressLike,
        _leverageRatio: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getPositionInfo"): TypedContractMethod<[
        pos: AddressLike,
        supplyApy: BigNumberish
    ], [
        LeveragedPositionsLens.PositionInfoStructOutput
    ], "nonpayable">;
    getFunction(nameOrSignature: "getPositionLiquidationThreshold"): TypedContractMethod<[position: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getPositionNetAPY"): TypedContractMethod<[
        _supplyAPY: BigNumberish,
        position: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getPositionRewardsSpeedPerSecond"): TypedContractMethod<[position: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "getPositionsInfo"): TypedContractMethod<[
        positions: AddressLike[],
        supplyApys: BigNumberish[]
    ], [
        LeveragedPositionsLens.PositionInfoStructOutput[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "getRewardsAprForPosition"): TypedContractMethod<[position: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[_factory: AddressLike], [void], "nonpayable">;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    filters: {
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    };
}
