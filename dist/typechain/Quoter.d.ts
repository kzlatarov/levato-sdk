import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface QuoterInterface extends Interface {
    getFunction(nameOrSignature: "doesPoolExist" | "estimateMaxSwapUniswapV3" | "estimateMinSwapUniswapV3"): FunctionFragment;
    encodeFunctionData(functionFragment: "doesPoolExist", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "estimateMaxSwapUniswapV3", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "estimateMinSwapUniswapV3", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "doesPoolExist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateMaxSwapUniswapV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateMinSwapUniswapV3", data: BytesLike): Result;
}
export interface Quoter extends BaseContract {
    connect(runner?: ContractRunner | null): Quoter;
    waitForDeployment(): Promise<this>;
    interface: QuoterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    doesPoolExist: TypedContractMethod<[
        _token0: AddressLike,
        _token1: AddressLike
    ], [
        boolean
    ], "view">;
    estimateMaxSwapUniswapV3: TypedContractMethod<[
        _fromToken: AddressLike,
        _toToken: AddressLike,
        _amount: BigNumberish,
        _poolFee: BigNumberish
    ], [
        bigint
    ], "view">;
    estimateMinSwapUniswapV3: TypedContractMethod<[
        _fromToken: AddressLike,
        _toToken: AddressLike,
        _amount: BigNumberish,
        _poolFee: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "doesPoolExist"): TypedContractMethod<[
        _token0: AddressLike,
        _token1: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "estimateMaxSwapUniswapV3"): TypedContractMethod<[
        _fromToken: AddressLike,
        _toToken: AddressLike,
        _amount: BigNumberish,
        _poolFee: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "estimateMinSwapUniswapV3"): TypedContractMethod<[
        _fromToken: AddressLike,
        _toToken: AddressLike,
        _amount: BigNumberish,
        _poolFee: BigNumberish
    ], [
        bigint
    ], "view">;
    filters: {};
}
