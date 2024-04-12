import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IBalancerPoolInterface extends Interface {
    getFunction(nameOrSignature: "exitPool" | "exitswapExternAmountOut" | "getBalance" | "getFinalTokens" | "getNormalizedWeight" | "getNormalizedWeights" | "getNumTokens" | "getPoolId" | "getSwapFee" | "getVault" | "joinPool" | "joinswapExternAmountIn" | "swapExactAmountIn" | "swapExactAmountOut" | "totalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "exitPool", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "exitswapExternAmountOut", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBalance", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getFinalTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNormalizedWeight", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getNormalizedWeights", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNumTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSwapFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "joinPool", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "joinswapExternAmountIn", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactAmountIn", values: [AddressLike, BigNumberish, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactAmountOut", values: [AddressLike, BigNumberish, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "exitPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitswapExternAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFinalTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNormalizedWeight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNormalizedWeights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinswapExternAmountIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactAmountIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
}
export interface IBalancerPool extends BaseContract {
    connect(runner?: ContractRunner | null): IBalancerPool;
    waitForDeployment(): Promise<this>;
    interface: IBalancerPoolInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    exitPool: TypedContractMethod<[
        poolAmountIn: BigNumberish,
        minAmountsOut: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    exitswapExternAmountOut: TypedContractMethod<[
        tokenOut: AddressLike,
        tokenAmountOut: BigNumberish,
        maxPoolAmountIn: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getBalance: TypedContractMethod<[token: AddressLike], [bigint], "view">;
    getFinalTokens: TypedContractMethod<[], [string[]], "view">;
    getNormalizedWeight: TypedContractMethod<[
        token: AddressLike
    ], [
        bigint
    ], "view">;
    getNormalizedWeights: TypedContractMethod<[], [bigint[]], "view">;
    getNumTokens: TypedContractMethod<[], [bigint], "view">;
    getPoolId: TypedContractMethod<[], [string], "view">;
    getSwapFee: TypedContractMethod<[], [bigint], "view">;
    getVault: TypedContractMethod<[], [string], "view">;
    joinPool: TypedContractMethod<[
        poolAmountOut: BigNumberish,
        maxAmountsIn: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    joinswapExternAmountIn: TypedContractMethod<[
        tokenIn: AddressLike,
        tokenAmountIn: BigNumberish,
        minPoolAmountOut: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    swapExactAmountIn: TypedContractMethod<[
        tokenIn: AddressLike,
        tokenAmountIn: BigNumberish,
        tokenOut: AddressLike,
        minAmountOut: BigNumberish,
        maxPrice: BigNumberish
    ], [
        [bigint, bigint] & {
            tokenAmountOut: bigint;
            spotPriceAfter: bigint;
        }
    ], "nonpayable">;
    swapExactAmountOut: TypedContractMethod<[
        tokenIn: AddressLike,
        maxAmountIn: BigNumberish,
        tokenOut: AddressLike,
        tokenAmountOut: BigNumberish,
        maxPrice: BigNumberish
    ], [
        [bigint, bigint] & {
            tokenAmountIn: bigint;
            spotPriceAfter: bigint;
        }
    ], "nonpayable">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "exitPool"): TypedContractMethod<[
        poolAmountIn: BigNumberish,
        minAmountsOut: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "exitswapExternAmountOut"): TypedContractMethod<[
        tokenOut: AddressLike,
        tokenAmountOut: BigNumberish,
        maxPoolAmountIn: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "getBalance"): TypedContractMethod<[token: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getFinalTokens"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getNormalizedWeight"): TypedContractMethod<[token: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getNormalizedWeights"): TypedContractMethod<[], [bigint[]], "view">;
    getFunction(nameOrSignature: "getNumTokens"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getPoolId"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getSwapFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getVault"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "joinPool"): TypedContractMethod<[
        poolAmountOut: BigNumberish,
        maxAmountsIn: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "joinswapExternAmountIn"): TypedContractMethod<[
        tokenIn: AddressLike,
        tokenAmountIn: BigNumberish,
        minPoolAmountOut: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "swapExactAmountIn"): TypedContractMethod<[
        tokenIn: AddressLike,
        tokenAmountIn: BigNumberish,
        tokenOut: AddressLike,
        minAmountOut: BigNumberish,
        maxPrice: BigNumberish
    ], [
        [bigint, bigint] & {
            tokenAmountOut: bigint;
            spotPriceAfter: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "swapExactAmountOut"): TypedContractMethod<[
        tokenIn: AddressLike,
        maxAmountIn: BigNumberish,
        tokenOut: AddressLike,
        tokenAmountOut: BigNumberish,
        maxPrice: BigNumberish
    ], [
        [bigint, bigint] & {
            tokenAmountIn: bigint;
            spotPriceAfter: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
