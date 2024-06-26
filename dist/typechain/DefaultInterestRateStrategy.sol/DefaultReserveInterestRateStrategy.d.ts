import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace IDefaultInterestRateStrategy {
    type CalculateInterestRatesParamsStruct = {
        unbacked: BigNumberish;
        liquidityAdded: BigNumberish;
        liquidityTaken: BigNumberish;
        totalStableDebt: BigNumberish;
        totalVariableDebt: BigNumberish;
        averageStableBorrowRate: BigNumberish;
        reserveFactor: BigNumberish;
        reserve: string;
        aToken: string;
    };
    type CalculateInterestRatesParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        unbacked: BigNumber;
        liquidityAdded: BigNumber;
        liquidityTaken: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        averageStableBorrowRate: BigNumber;
        reserveFactor: BigNumber;
        reserve: string;
        aToken: string;
    };
}
export interface DefaultReserveInterestRateStrategyInterface extends utils.Interface {
    functions: {
        "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO()": FunctionFragment;
        "MAX_EXCESS_USAGE_RATIO()": FunctionFragment;
        "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO()": FunctionFragment;
        "OPTIMAL_USAGE_RATIO()": FunctionFragment;
        "calculateInterestRates((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,address))": FunctionFragment;
        "getBaseStableBorrowRate()": FunctionFragment;
        "getBaseVariableBorrowRate()": FunctionFragment;
        "getMaxVariableBorrowRate()": FunctionFragment;
        "getStableRateExcessOffset()": FunctionFragment;
        "getStableRateSlope1()": FunctionFragment;
        "getStableRateSlope2()": FunctionFragment;
        "getVariableRateSlope1()": FunctionFragment;
        "getVariableRateSlope2()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO" | "MAX_EXCESS_USAGE_RATIO" | "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO" | "OPTIMAL_USAGE_RATIO" | "calculateInterestRates" | "getBaseStableBorrowRate" | "getBaseVariableBorrowRate" | "getMaxVariableBorrowRate" | "getStableRateExcessOffset" | "getStableRateSlope1" | "getStableRateSlope2" | "getVariableRateSlope1" | "getVariableRateSlope2"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_EXCESS_USAGE_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "OPTIMAL_USAGE_RATIO", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateInterestRates", values: [IDefaultInterestRateStrategy.CalculateInterestRatesParamsStruct]): string;
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
    events: {};
}
export interface DefaultReserveInterestRateStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DefaultReserveInterestRateStrategyInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_EXCESS_USAGE_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;
        OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;
        OPTIMAL_USAGE_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateInterestRates(params: IDefaultInterestRateStrategy.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getBaseStableBorrowRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getBaseVariableBorrowRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getStableRateExcessOffset(overrides?: CallOverrides): Promise<[BigNumber]>;
        getStableRateSlope1(overrides?: CallOverrides): Promise<[BigNumber]>;
        getStableRateSlope2(overrides?: CallOverrides): Promise<[BigNumber]>;
        getVariableRateSlope1(overrides?: CallOverrides): Promise<[BigNumber]>;
        getVariableRateSlope2(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_EXCESS_USAGE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
    OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
    OPTIMAL_USAGE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
    calculateInterestRates(params: IDefaultInterestRateStrategy.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    getBaseStableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
    getBaseVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
    getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
    getStableRateExcessOffset(overrides?: CallOverrides): Promise<BigNumber>;
    getStableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;
    getStableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;
    getVariableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;
    getVariableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_EXCESS_USAGE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        OPTIMAL_USAGE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        calculateInterestRates(params: IDefaultInterestRateStrategy.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        getBaseStableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getBaseVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getStableRateExcessOffset(overrides?: CallOverrides): Promise<BigNumber>;
        getStableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;
        getStableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;
        getVariableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;
        getVariableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_EXCESS_USAGE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        OPTIMAL_USAGE_RATIO(overrides?: CallOverrides): Promise<BigNumber>;
        calculateInterestRates(params: IDefaultInterestRateStrategy.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getBaseStableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getBaseVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<BigNumber>;
        getStableRateExcessOffset(overrides?: CallOverrides): Promise<BigNumber>;
        getStableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;
        getStableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;
        getVariableRateSlope1(overrides?: CallOverrides): Promise<BigNumber>;
        getVariableRateSlope2(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_EXCESS_USAGE_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        OPTIMAL_USAGE_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateInterestRates(params: IDefaultInterestRateStrategy.CalculateInterestRatesParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBaseStableBorrowRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBaseVariableBorrowRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxVariableBorrowRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStableRateExcessOffset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStableRateSlope1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStableRateSlope2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVariableRateSlope1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVariableRateSlope2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
