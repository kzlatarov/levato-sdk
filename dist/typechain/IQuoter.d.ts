import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IQuoterInterface extends Interface {
    getFunction(nameOrSignature: "estimateMaxSwapUniswapV3" | "estimateMinSwapUniswapV3"): FunctionFragment;
    encodeFunctionData(functionFragment: "estimateMaxSwapUniswapV3", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "estimateMinSwapUniswapV3", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "estimateMaxSwapUniswapV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateMinSwapUniswapV3", data: BytesLike): Result;
}
export interface IQuoter extends BaseContract {
    connect(runner?: ContractRunner | null): IQuoter;
    waitForDeployment(): Promise<this>;
    interface: IQuoterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
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
