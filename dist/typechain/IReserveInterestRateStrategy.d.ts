import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export declare namespace DataTypes {
    type CalculateInterestRatesParamsStruct = {
        unbacked: BigNumberish;
        liquidityAdded: BigNumberish;
        liquidityTaken: BigNumberish;
        totalStableDebt: BigNumberish;
        totalVariableDebt: BigNumberish;
        averageStableBorrowRate: BigNumberish;
        reserveFactor: BigNumberish;
        reserve: AddressLike;
        aToken: AddressLike;
    };
    type CalculateInterestRatesParamsStructOutput = [
        unbacked: bigint,
        liquidityAdded: bigint,
        liquidityTaken: bigint,
        totalStableDebt: bigint,
        totalVariableDebt: bigint,
        averageStableBorrowRate: bigint,
        reserveFactor: bigint,
        reserve: string,
        aToken: string
    ] & {
        unbacked: bigint;
        liquidityAdded: bigint;
        liquidityTaken: bigint;
        totalStableDebt: bigint;
        totalVariableDebt: bigint;
        averageStableBorrowRate: bigint;
        reserveFactor: bigint;
        reserve: string;
        aToken: string;
    };
}
export interface IReserveInterestRateStrategyInterface extends Interface {
    getFunction(nameOrSignature: "calculateInterestRates"): FunctionFragment;
    encodeFunctionData(functionFragment: "calculateInterestRates", values: [DataTypes.CalculateInterestRatesParamsStruct]): string;
    decodeFunctionResult(functionFragment: "calculateInterestRates", data: BytesLike): Result;
}
export interface IReserveInterestRateStrategy extends BaseContract {
    connect(runner?: ContractRunner | null): IReserveInterestRateStrategy;
    waitForDeployment(): Promise<this>;
    interface: IReserveInterestRateStrategyInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    calculateInterestRates: TypedContractMethod<[
        params: DataTypes.CalculateInterestRatesParamsStruct
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "calculateInterestRates"): TypedContractMethod<[
        params: DataTypes.CalculateInterestRatesParamsStruct
    ], [
        [bigint, bigint, bigint]
    ], "view">;
    filters: {};
}
