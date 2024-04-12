import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface DelegatedAaveLeveragedPositionInterface extends Interface {
    getFunction(nameOrSignature: "SUPPLY_DELTA_ERROR" | "SUPPLY_DELTA_NO_ERROR" | "adjustLeverageRatio" | "claimRewards()" | "claimRewards(address)" | "closePosition(address)" | "closePosition()" | "collateralAsset" | "factory" | "fundPosition" | "getAccruedRewards" | "getBorrowRate" | "getCurrentLeverageRatio" | "getEquityAmount" | "getEquityValue" | "getMaxLeverageRatio" | "getMinLeverageRatio" | "getPositionBorrowAmount" | "getPositionSupplyAmount" | "getPrice" | "getSupplyAmountDelta" | "getSupplyRate" | "isPositionClosed" | "positionOwner" | "seizeOnLiquidation" | "stableAsset" | "withdrawStableLeftovers"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "PositionClosed" | "PositionFunded" | "PositionRatioAdjusted"): EventFragment;
    encodeFunctionData(functionFragment: "SUPPLY_DELTA_ERROR", values?: undefined): string;
    encodeFunctionData(functionFragment: "SUPPLY_DELTA_NO_ERROR", values?: undefined): string;
    encodeFunctionData(functionFragment: "adjustLeverageRatio", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimRewards()", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "closePosition(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "closePosition()", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundPosition", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAccruedRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getCurrentLeverageRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEquityAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEquityValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaxLeverageRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinLeverageRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionBorrowAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionSupplyAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getSupplyAmountDelta", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isPositionClosed", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "seizeOnLiquidation", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stableAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawStableLeftovers", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "SUPPLY_DELTA_ERROR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SUPPLY_DELTA_NO_ERROR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adjustLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEquityAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEquityValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionBorrowAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionSupplyAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyAmountDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPositionClosed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeOnLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStableLeftovers", data: BytesLike): Result;
}
export declare namespace PositionClosedEvent {
    type InputTuple = [
        position: AddressLike,
        withdrawAmount: BigNumberish,
        equityAmountBefore: BigNumberish
    ];
    type OutputTuple = [
        position: string,
        withdrawAmount: bigint,
        equityAmountBefore: bigint
    ];
    interface OutputObject {
        position: string;
        withdrawAmount: bigint;
        equityAmountBefore: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PositionFundedEvent {
    type InputTuple = [
        position: AddressLike,
        fundingAsset: AddressLike,
        fundingAmount: BigNumberish,
        totalCollateralAmountAfter: BigNumberish,
        collateralAmountFunded: BigNumberish
    ];
    type OutputTuple = [
        position: string,
        fundingAsset: string,
        fundingAmount: bigint,
        totalCollateralAmountAfter: bigint,
        collateralAmountFunded: bigint
    ];
    interface OutputObject {
        position: string;
        fundingAsset: string;
        fundingAmount: bigint;
        totalCollateralAmountAfter: bigint;
        collateralAmountFunded: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PositionRatioAdjustedEvent {
    type InputTuple = [
        position: AddressLike,
        targetRatio: BigNumberish,
        realizedRatio: BigNumberish,
        ratioBefore: BigNumberish,
        equityAmountBefore: BigNumberish
    ];
    type OutputTuple = [
        position: string,
        targetRatio: bigint,
        realizedRatio: bigint,
        ratioBefore: bigint,
        equityAmountBefore: bigint
    ];
    interface OutputObject {
        position: string;
        targetRatio: bigint;
        realizedRatio: bigint;
        ratioBefore: bigint;
        equityAmountBefore: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface DelegatedAaveLeveragedPosition extends BaseContract {
    connect(runner?: ContractRunner | null): DelegatedAaveLeveragedPosition;
    waitForDeployment(): Promise<this>;
    interface: DelegatedAaveLeveragedPositionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    SUPPLY_DELTA_ERROR: TypedContractMethod<[], [bigint], "view">;
    SUPPLY_DELTA_NO_ERROR: TypedContractMethod<[], [bigint], "view">;
    adjustLeverageRatio: TypedContractMethod<[
        targetRatioMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    "claimRewards()": TypedContractMethod<[], [void], "nonpayable">;
    "claimRewards(address)": TypedContractMethod<[
        withdrawTo: AddressLike
    ], [
        void
    ], "nonpayable">;
    "closePosition(address)": TypedContractMethod<[
        withdrawTo: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    "closePosition()": TypedContractMethod<[], [bigint], "nonpayable">;
    collateralAsset: TypedContractMethod<[], [string], "view">;
    factory: TypedContractMethod<[], [string], "view">;
    fundPosition: TypedContractMethod<[
        fundingAsset: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getAccruedRewards: TypedContractMethod<[
    ], [
        [string[], bigint[]] & {
            rewardTokens: string[];
            amounts: bigint[];
        }
    ], "nonpayable">;
    getBorrowRate: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getCurrentLeverageRatio: TypedContractMethod<[], [bigint], "view">;
    getEquityAmount: TypedContractMethod<[], [bigint], "view">;
    getEquityValue: TypedContractMethod<[], [bigint], "view">;
    getMaxLeverageRatio: TypedContractMethod<[], [bigint], "view">;
    getMinLeverageRatio: TypedContractMethod<[], [bigint], "view">;
    getPositionBorrowAmount: TypedContractMethod<[], [bigint], "view">;
    getPositionSupplyAmount: TypedContractMethod<[], [bigint], "view">;
    getPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getSupplyAmountDelta: TypedContractMethod<[
        targetRatio: BigNumberish
    ], [
        [bigint, bigint]
    ], "view">;
    getSupplyRate: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    isPositionClosed: TypedContractMethod<[], [boolean], "view">;
    positionOwner: TypedContractMethod<[], [string], "view">;
    seizeOnLiquidation: TypedContractMethod<[
        stablesToSeize: BigNumberish
    ], [
        [
            bigint,
            bigint
        ] & {
            seizedStableAmount: bigint;
            seizedCollateralAmount: bigint;
        }
    ], "nonpayable">;
    stableAsset: TypedContractMethod<[], [string], "view">;
    withdrawStableLeftovers: TypedContractMethod<[
        withdrawTo: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "SUPPLY_DELTA_ERROR"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "SUPPLY_DELTA_NO_ERROR"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "adjustLeverageRatio"): TypedContractMethod<[
        targetRatioMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "claimRewards()"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "claimRewards(address)"): TypedContractMethod<[withdrawTo: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "closePosition(address)"): TypedContractMethod<[withdrawTo: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "closePosition()"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "collateralAsset"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "factory"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "fundPosition"): TypedContractMethod<[
        fundingAsset: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAccruedRewards"): TypedContractMethod<[
    ], [
        [string[], bigint[]] & {
            rewardTokens: string[];
            amounts: bigint[];
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "getBorrowRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getCurrentLeverageRatio"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getEquityAmount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getEquityValue"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMaxLeverageRatio"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMinLeverageRatio"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPositionBorrowAmount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPositionSupplyAmount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPrice"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getSupplyAmountDelta"): TypedContractMethod<[
        targetRatio: BigNumberish
    ], [
        [bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "getSupplyRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "isPositionClosed"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "positionOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "seizeOnLiquidation"): TypedContractMethod<[
        stablesToSeize: BigNumberish
    ], [
        [
            bigint,
            bigint
        ] & {
            seizedStableAmount: bigint;
            seizedCollateralAmount: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "stableAsset"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdrawStableLeftovers"): TypedContractMethod<[withdrawTo: AddressLike], [bigint], "nonpayable">;
    getEvent(key: "PositionClosed"): TypedContractEvent<PositionClosedEvent.InputTuple, PositionClosedEvent.OutputTuple, PositionClosedEvent.OutputObject>;
    getEvent(key: "PositionFunded"): TypedContractEvent<PositionFundedEvent.InputTuple, PositionFundedEvent.OutputTuple, PositionFundedEvent.OutputObject>;
    getEvent(key: "PositionRatioAdjusted"): TypedContractEvent<PositionRatioAdjustedEvent.InputTuple, PositionRatioAdjustedEvent.OutputTuple, PositionRatioAdjustedEvent.OutputObject>;
    filters: {
        "PositionClosed(address,uint256,uint256)": TypedContractEvent<PositionClosedEvent.InputTuple, PositionClosedEvent.OutputTuple, PositionClosedEvent.OutputObject>;
        PositionClosed: TypedContractEvent<PositionClosedEvent.InputTuple, PositionClosedEvent.OutputTuple, PositionClosedEvent.OutputObject>;
        "PositionFunded(address,address,uint256,uint256,uint256)": TypedContractEvent<PositionFundedEvent.InputTuple, PositionFundedEvent.OutputTuple, PositionFundedEvent.OutputObject>;
        PositionFunded: TypedContractEvent<PositionFundedEvent.InputTuple, PositionFundedEvent.OutputTuple, PositionFundedEvent.OutputObject>;
        "PositionRatioAdjusted(address,uint256,uint256,uint256,uint256)": TypedContractEvent<PositionRatioAdjustedEvent.InputTuple, PositionRatioAdjustedEvent.OutputTuple, PositionRatioAdjustedEvent.OutputObject>;
        PositionRatioAdjusted: TypedContractEvent<PositionRatioAdjustedEvent.InputTuple, PositionRatioAdjustedEvent.OutputTuple, PositionRatioAdjustedEvent.OutputObject>;
    };
}
