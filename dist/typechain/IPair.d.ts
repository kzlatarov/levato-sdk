import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export type ObservationStruct = {
    timestamp: BigNumberish;
    reserve0Cumulative: BigNumberish;
    reserve1Cumulative: BigNumberish;
};
export type ObservationStructOutput = [
    timestamp: bigint,
    reserve0Cumulative: bigint,
    reserve1Cumulative: bigint
] & {
    timestamp: bigint;
    reserve0Cumulative: bigint;
    reserve1Cumulative: bigint;
};
export interface IPairInterface extends Interface {
    getFunction(nameOrSignature: "balanceOf" | "burn" | "claimFees" | "current" | "currentCumulativePrices" | "decimals" | "factory" | "getAmountOut" | "getReserves" | "lastObservation" | "metadata" | "mint" | "name" | "observationLength" | "observations" | "permit" | "stable" | "swap" | "symbol" | "sync" | "token0" | "token1" | "tokens" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "current", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentCumulativePrices", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastObservation", values?: undefined): string;
    encodeFunctionData(functionFragment: "metadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "observationLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "observations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "stable", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [BigNumberish, BigNumberish, AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "sync", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "current", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentCumulativePrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastObservation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observationLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
export interface IPair extends BaseContract {
    connect(runner?: ContractRunner | null): IPair;
    waitForDeployment(): Promise<this>;
    interface: IPairInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    burn: TypedContractMethod<[
        to: AddressLike
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    claimFees: TypedContractMethod<[], [[bigint, bigint]], "nonpayable">;
    current: TypedContractMethod<[
        tokenIn: AddressLike,
        amountIn: BigNumberish
    ], [
        bigint
    ], "view">;
    currentCumulativePrices: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            reserve0Cumulative: bigint;
            reserve1Cumulative: bigint;
            blockTimestamp: bigint;
        }
    ], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    factory: TypedContractMethod<[], [string], "view">;
    getAmountOut: TypedContractMethod<[
        arg0: BigNumberish,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getReserves: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            _reserve0: bigint;
            _reserve1: bigint;
            _blockTimestampLast: bigint;
        }
    ], "view">;
    lastObservation: TypedContractMethod<[], [ObservationStructOutput], "view">;
    metadata: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            boolean,
            string,
            string
        ] & {
            dec0: bigint;
            dec1: bigint;
            r0: bigint;
            r1: bigint;
            st: boolean;
            t0: string;
            t1: string;
        }
    ], "view">;
    mint: TypedContractMethod<[to: AddressLike], [bigint], "nonpayable">;
    name: TypedContractMethod<[], [string], "view">;
    observationLength: TypedContractMethod<[], [bigint], "view">;
    observations: TypedContractMethod<[
        index: BigNumberish
    ], [
        ObservationStructOutput
    ], "view">;
    permit: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    stable: TypedContractMethod<[], [boolean], "view">;
    swap: TypedContractMethod<[
        amount0Out: BigNumberish,
        amount1Out: BigNumberish,
        to: AddressLike,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    symbol: TypedContractMethod<[], [string], "view">;
    sync: TypedContractMethod<[], [void], "nonpayable">;
    token0: TypedContractMethod<[], [string], "view">;
    token1: TypedContractMethod<[], [string], "view">;
    tokens: TypedContractMethod<[], [[string, string]], "nonpayable">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        dst: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        to: AddressLike
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "claimFees"): TypedContractMethod<[], [[bigint, bigint]], "nonpayable">;
    getFunction(nameOrSignature: "current"): TypedContractMethod<[
        tokenIn: AddressLike,
        amountIn: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "currentCumulativePrices"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            reserve0Cumulative: bigint;
            reserve1Cumulative: bigint;
            blockTimestamp: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "factory"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAmountOut"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getReserves"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            _reserve0: bigint;
            _reserve1: bigint;
            _blockTimestampLast: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "lastObservation"): TypedContractMethod<[], [ObservationStructOutput], "view">;
    getFunction(nameOrSignature: "metadata"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            boolean,
            string,
            string
        ] & {
            dec0: bigint;
            dec1: bigint;
            r0: bigint;
            r1: bigint;
            st: boolean;
            t0: string;
            t1: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[to: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "observationLength"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "observations"): TypedContractMethod<[
        index: BigNumberish
    ], [
        ObservationStructOutput
    ], "view">;
    getFunction(nameOrSignature: "permit"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "stable"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        amount0Out: BigNumberish,
        amount1Out: BigNumberish,
        to: AddressLike,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "sync"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "token0"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "token1"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tokens"): TypedContractMethod<[], [[string, string]], "nonpayable">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        dst: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    filters: {};
}
