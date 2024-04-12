import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface JumpRateModelInterface extends Interface {
    getFunction(nameOrSignature: "baseRate" | "blocksPerYear" | "getBorrowRate" | "getSupplyRate" | "jumpMultiplier" | "kink" | "multiplier" | "utilizationRate"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "NewInterestParams"): EventFragment;
    encodeFunctionData(functionFragment: "baseRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyRate", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "jumpMultiplier", values?: undefined): string;
    encodeFunctionData(functionFragment: "kink", values?: undefined): string;
    encodeFunctionData(functionFragment: "multiplier", values?: undefined): string;
    encodeFunctionData(functionFragment: "utilizationRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "baseRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "jumpMultiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "utilizationRate", data: BytesLike): Result;
}
export declare namespace NewInterestParamsEvent {
    type InputTuple = [
        baseRate: BigNumberish,
        multiplier: BigNumberish,
        jumpMultiplier: BigNumberish,
        kink: BigNumberish
    ];
    type OutputTuple = [
        baseRate: bigint,
        multiplier: bigint,
        jumpMultiplier: bigint,
        kink: bigint
    ];
    interface OutputObject {
        baseRate: bigint;
        multiplier: bigint;
        jumpMultiplier: bigint;
        kink: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface JumpRateModel extends BaseContract {
    connect(runner?: ContractRunner | null): JumpRateModel;
    waitForDeployment(): Promise<this>;
    interface: JumpRateModelInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    baseRate: TypedContractMethod<[], [bigint], "view">;
    blocksPerYear: TypedContractMethod<[], [bigint], "view">;
    getBorrowRate: TypedContractMethod<[
        cash: BigNumberish,
        borrows: BigNumberish,
        reserves: BigNumberish
    ], [
        bigint
    ], "view">;
    getSupplyRate: TypedContractMethod<[
        cash: BigNumberish,
        borrows: BigNumberish,
        reserves: BigNumberish,
        reserveFactorMantissa: BigNumberish
    ], [
        bigint
    ], "view">;
    jumpMultiplier: TypedContractMethod<[], [bigint], "view">;
    kink: TypedContractMethod<[], [bigint], "view">;
    multiplier: TypedContractMethod<[], [bigint], "view">;
    utilizationRate: TypedContractMethod<[
        cash: BigNumberish,
        borrows: BigNumberish,
        reserves: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "baseRate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "blocksPerYear"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getBorrowRate"): TypedContractMethod<[
        cash: BigNumberish,
        borrows: BigNumberish,
        reserves: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getSupplyRate"): TypedContractMethod<[
        cash: BigNumberish,
        borrows: BigNumberish,
        reserves: BigNumberish,
        reserveFactorMantissa: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "jumpMultiplier"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "kink"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "multiplier"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "utilizationRate"): TypedContractMethod<[
        cash: BigNumberish,
        borrows: BigNumberish,
        reserves: BigNumberish
    ], [
        bigint
    ], "view">;
    getEvent(key: "NewInterestParams"): TypedContractEvent<NewInterestParamsEvent.InputTuple, NewInterestParamsEvent.OutputTuple, NewInterestParamsEvent.OutputObject>;
    filters: {
        "NewInterestParams(uint256,uint256,uint256,uint256)": TypedContractEvent<NewInterestParamsEvent.InputTuple, NewInterestParamsEvent.OutputTuple, NewInterestParamsEvent.OutputObject>;
        NewInterestParams: TypedContractEvent<NewInterestParamsEvent.InputTuple, NewInterestParamsEvent.OutputTuple, NewInterestParamsEvent.OutputObject>;
    };
}
