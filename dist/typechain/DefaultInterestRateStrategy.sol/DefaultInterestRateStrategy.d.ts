import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export type CalculateInterestRatesParamsStruct = {
    availableLiqudity: BigNumberish;
    liquidityAdded: BigNumberish;
    liquidityTaken: BigNumberish;
    totalStableDebt: BigNumberish;
    totalVariableDebt: BigNumberish;
    averageStableBorrowRate: BigNumberish;
    reserveFactor: BigNumberish;
    reserveLiquidity: BigNumberish;
};
export type CalculateInterestRatesParamsStructOutput = [
    availableLiqudity: bigint,
    liquidityAdded: bigint,
    liquidityTaken: bigint,
    totalStableDebt: bigint,
    totalVariableDebt: bigint,
    averageStableBorrowRate: bigint,
    reserveFactor: bigint,
    reserveLiquidity: bigint
] & {
    availableLiqudity: bigint;
    liquidityAdded: bigint;
    liquidityTaken: bigint;
    totalStableDebt: bigint;
    totalVariableDebt: bigint;
    averageStableBorrowRate: bigint;
    reserveFactor: bigint;
    reserveLiquidity: bigint;
};
export interface DefaultInterestRateStrategyInterface extends Interface {
    getFunction(nameOrSignature: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO" | "MAX_EXCESS_USAGE_RATIO" | "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO" | "OPTIMAL_USAGE_RATIO" | "calculateInterestRates" | "getBaseStableBorrowRate" | "getBaseVariableBorrowRate" | "getMaxVariableBorrowRate" | "getStableRateExcessOffset" | "getStableRateSlope1" | "getStableRateSlope2" | "getVariableRateSlope1" | "getVariableRateSlope2"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_EXCESS_USAGE_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPTIMAL_USAGE_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateInterestRates", values: [CalculateInterestRatesParamsStruct]): string;
    encodeFunctionData(functionFragment: "getBaseStableBorrowRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBaseVariableBorrowRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaxVariableBorrowRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStableRateExcessOffset", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStableRateSlope1", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStableRateSlope2", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVariableRateSlope1", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVariableRateSlope2", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_EXCESS_USAGE_RATIO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "OPTIMAL_USAGE_RATIO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateInterestRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBaseStableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBaseVariableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxVariableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStableRateExcessOffset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStableRateSlope1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStableRateSlope2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVariableRateSlope1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVariableRateSlope2", data: BytesLike): Result;
}
export interface DefaultInterestRateStrategy extends BaseContract {
    connect(runner?: ContractRunner | null): DefaultInterestRateStrategy;
    waitForDeployment(): Promise<this>;
    interface: DefaultInterestRateStrategyInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO: TypedContractMethod<[
    ], [
        bigint
    ], "view">;
    MAX_EXCESS_USAGE_RATIO: TypedContractMethod<[], [bigint], "view">;
    OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO: TypedContractMethod<[], [bigint], "view">;
    OPTIMAL_USAGE_RATIO: TypedContractMethod<[], [bigint], "view">;
    calculateInterestRates: TypedContractMethod<[
        params: CalculateInterestRatesParamsStruct
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    getBaseStableBorrowRate: TypedContractMethod<[], [bigint], "view">;
    getBaseVariableBorrowRate: TypedContractMethod<[], [bigint], "view">;
    getMaxVariableBorrowRate: TypedContractMethod<[], [bigint], "view">;
    getStableRateExcessOffset: TypedContractMethod<[], [bigint], "view">;
    getStableRateSlope1: TypedContractMethod<[], [bigint], "view">;
    getStableRateSlope2: TypedContractMethod<[], [bigint], "view">;
    getVariableRateSlope1: TypedContractMethod<[], [bigint], "view">;
    getVariableRateSlope2: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "MAX_EXCESS_USAGE_RATIO"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "OPTIMAL_USAGE_RATIO"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "calculateInterestRates"): TypedContractMethod<[
        params: CalculateInterestRatesParamsStruct
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "getBaseStableBorrowRate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getBaseVariableBorrowRate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMaxVariableBorrowRate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getStableRateExcessOffset"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getStableRateSlope1"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getStableRateSlope2"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getVariableRateSlope1"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getVariableRateSlope2"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
