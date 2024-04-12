import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export declare namespace ISwapRouter {
    type ExactInputParamsStruct = {
        path: BytesLike;
        recipient: AddressLike;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
    };
    type ExactInputParamsStructOutput = [
        path: string,
        recipient: string,
        deadline: bigint,
        amountIn: bigint,
        amountOutMinimum: bigint
    ] & {
        path: string;
        recipient: string;
        deadline: bigint;
        amountIn: bigint;
        amountOutMinimum: bigint;
    };
    type ExactInputSingleParamsStruct = {
        tokenIn: AddressLike;
        tokenOut: AddressLike;
        fee: BigNumberish;
        recipient: AddressLike;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactInputSingleParamsStructOutput = [
        tokenIn: string,
        tokenOut: string,
        fee: bigint,
        recipient: string,
        deadline: bigint,
        amountIn: bigint,
        amountOutMinimum: bigint,
        sqrtPriceLimitX96: bigint
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: bigint;
        recipient: string;
        deadline: bigint;
        amountIn: bigint;
        amountOutMinimum: bigint;
        sqrtPriceLimitX96: bigint;
    };
    type ExactOutputParamsStruct = {
        path: BytesLike;
        recipient: AddressLike;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
    };
    type ExactOutputParamsStructOutput = [
        path: string,
        recipient: string,
        deadline: bigint,
        amountOut: bigint,
        amountInMaximum: bigint
    ] & {
        path: string;
        recipient: string;
        deadline: bigint;
        amountOut: bigint;
        amountInMaximum: bigint;
    };
    type ExactOutputSingleParamsStruct = {
        tokenIn: AddressLike;
        tokenOut: AddressLike;
        fee: BigNumberish;
        recipient: AddressLike;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactOutputSingleParamsStructOutput = [
        tokenIn: string,
        tokenOut: string,
        fee: bigint,
        recipient: string,
        deadline: bigint,
        amountOut: bigint,
        amountInMaximum: bigint,
        sqrtPriceLimitX96: bigint
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: bigint;
        recipient: string;
        deadline: bigint;
        amountOut: bigint;
        amountInMaximum: bigint;
        sqrtPriceLimitX96: bigint;
    };
}
export interface ISwapRouterInterface extends Interface {
    getFunction(nameOrSignature: "exactInput" | "exactInputSingle" | "exactOutput" | "exactOutputSingle" | "factory" | "multicall"): FunctionFragment;
    encodeFunctionData(functionFragment: "exactInput", values: [ISwapRouter.ExactInputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactInputSingle", values: [ISwapRouter.ExactInputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutput", values: [ISwapRouter.ExactOutputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutputSingle", values: [ISwapRouter.ExactOutputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "multicall", values: [BigNumberish, BytesLike[]]): string;
    decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
}
export interface ISwapRouter extends BaseContract {
    connect(runner?: ContractRunner | null): ISwapRouter;
    waitForDeployment(): Promise<this>;
    interface: ISwapRouterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    exactInput: TypedContractMethod<[
        params: ISwapRouter.ExactInputParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    exactInputSingle: TypedContractMethod<[
        params: ISwapRouter.ExactInputSingleParamsStruct
    ], [
        bigint
    ], "payable">;
    exactOutput: TypedContractMethod<[
        params: ISwapRouter.ExactOutputParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    exactOutputSingle: TypedContractMethod<[
        params: ISwapRouter.ExactOutputSingleParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    factory: TypedContractMethod<[], [string], "nonpayable">;
    multicall: TypedContractMethod<[
        deadline: BigNumberish,
        data: BytesLike[]
    ], [
        string[]
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "exactInput"): TypedContractMethod<[
        params: ISwapRouter.ExactInputParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "exactInputSingle"): TypedContractMethod<[
        params: ISwapRouter.ExactInputSingleParamsStruct
    ], [
        bigint
    ], "payable">;
    getFunction(nameOrSignature: "exactOutput"): TypedContractMethod<[
        params: ISwapRouter.ExactOutputParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "exactOutputSingle"): TypedContractMethod<[
        params: ISwapRouter.ExactOutputSingleParamsStruct
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "factory"): TypedContractMethod<[], [string], "nonpayable">;
    getFunction(nameOrSignature: "multicall"): TypedContractMethod<[
        deadline: BigNumberish,
        data: BytesLike[]
    ], [
        string[]
    ], "payable">;
    filters: {};
}
