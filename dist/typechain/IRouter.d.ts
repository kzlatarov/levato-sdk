import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export declare namespace IRouter {
    type RouteStruct = {
        from: AddressLike;
        to: AddressLike;
        stable: boolean;
    };
    type RouteStructOutput = [
        from: string,
        to: string,
        stable: boolean
    ] & {
        from: string;
        to: string;
        stable: boolean;
    };
}
export interface IRouterInterface extends Interface {
    getFunction(nameOrSignature: "addLiquidity" | "getAmountsOut" | "getReserves" | "isPair" | "pairFor" | "quoteAddLiquidity" | "removeLiquidity" | "swapExactTokensForTokens" | "swapExactTokensForTokensSimple"): FunctionFragment;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        AddressLike,
        AddressLike,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        AddressLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [BigNumberish, IRouter.RouteStruct[]]): string;
    encodeFunctionData(functionFragment: "getReserves", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "isPair", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "pairFor", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "quoteAddLiquidity", values: [AddressLike, AddressLike, boolean, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        AddressLike,
        AddressLike,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        AddressLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        BigNumberish,
        BigNumberish,
        IRouter.RouteStruct[],
        AddressLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokensSimple", values: [
        BigNumberish,
        BigNumberish,
        AddressLike,
        AddressLike,
        boolean,
        AddressLike,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAddLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokensSimple", data: BytesLike): Result;
}
export interface IRouter extends BaseContract {
    connect(runner?: ContractRunner | null): IRouter;
    waitForDeployment(): Promise<this>;
    interface: IRouterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addLiquidity: TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean,
        amountADesired: BigNumberish,
        amountBDesired: BigNumberish,
        amountAMin: BigNumberish,
        amountBMin: BigNumberish,
        to: AddressLike,
        deadline: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            amountA: bigint;
            amountB: bigint;
            liquidity: bigint;
        }
    ], "nonpayable">;
    getAmountsOut: TypedContractMethod<[
        amountIn: BigNumberish,
        routes: IRouter.RouteStruct[]
    ], [
        bigint[]
    ], "view">;
    getReserves: TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean
    ], [
        [bigint, bigint] & {
            reserveA: bigint;
            reserveB: bigint;
        }
    ], "view">;
    isPair: TypedContractMethod<[pair: AddressLike], [boolean], "view">;
    pairFor: TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean
    ], [
        string
    ], "view">;
    quoteAddLiquidity: TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean,
        amountADesired: BigNumberish,
        amountBDesired: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            amountA: bigint;
            amountB: bigint;
            liquidity: bigint;
        }
    ], "view">;
    removeLiquidity: TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean,
        liquidity: BigNumberish,
        amountAMin: BigNumberish,
        amountBMin: BigNumberish,
        to: AddressLike,
        deadline: BigNumberish
    ], [
        [bigint, bigint] & {
            amountA: bigint;
            amountB: bigint;
        }
    ], "nonpayable">;
    swapExactTokensForTokens: TypedContractMethod<[
        amountIn: BigNumberish,
        amountOutMin: BigNumberish,
        routes: IRouter.RouteStruct[],
        to: AddressLike,
        deadline: BigNumberish
    ], [
        bigint[]
    ], "nonpayable">;
    swapExactTokensForTokensSimple: TypedContractMethod<[
        amountIn: BigNumberish,
        amountOutMin: BigNumberish,
        tokenFrom: AddressLike,
        tokenTo: AddressLike,
        stable: boolean,
        to: AddressLike,
        deadline: BigNumberish
    ], [
        bigint[]
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addLiquidity"): TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean,
        amountADesired: BigNumberish,
        amountBDesired: BigNumberish,
        amountAMin: BigNumberish,
        amountBMin: BigNumberish,
        to: AddressLike,
        deadline: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            amountA: bigint;
            amountB: bigint;
            liquidity: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAmountsOut"): TypedContractMethod<[
        amountIn: BigNumberish,
        routes: IRouter.RouteStruct[]
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "getReserves"): TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean
    ], [
        [bigint, bigint] & {
            reserveA: bigint;
            reserveB: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "isPair"): TypedContractMethod<[pair: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "pairFor"): TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "quoteAddLiquidity"): TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean,
        amountADesired: BigNumberish,
        amountBDesired: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            amountA: bigint;
            amountB: bigint;
            liquidity: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "removeLiquidity"): TypedContractMethod<[
        tokenA: AddressLike,
        tokenB: AddressLike,
        stable: boolean,
        liquidity: BigNumberish,
        amountAMin: BigNumberish,
        amountBMin: BigNumberish,
        to: AddressLike,
        deadline: BigNumberish
    ], [
        [bigint, bigint] & {
            amountA: bigint;
            amountB: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "swapExactTokensForTokens"): TypedContractMethod<[
        amountIn: BigNumberish,
        amountOutMin: BigNumberish,
        routes: IRouter.RouteStruct[],
        to: AddressLike,
        deadline: BigNumberish
    ], [
        bigint[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "swapExactTokensForTokensSimple"): TypedContractMethod<[
        amountIn: BigNumberish,
        amountOutMin: BigNumberish,
        tokenFrom: AddressLike,
        tokenTo: AddressLike,
        stable: boolean,
        to: AddressLike,
        deadline: BigNumberish
    ], [
        bigint[]
    ], "nonpayable">;
    filters: {};
}
