import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IUniswapV3PoolInterface extends Interface {
    getFunction(nameOrSignature: "fee" | "increaseObservationCardinalityNext" | "liquidity" | "observations" | "observe" | "positions" | "slot0" | "tickBitmap" | "ticks" | "token0" | "token1"): FunctionFragment;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseObservationCardinalityNext", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "observations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "observe", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "positions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "slot0", values?: undefined): string;
    encodeFunctionData(functionFragment: "tickBitmap", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseObservationCardinalityNext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tickBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
}
export interface IUniswapV3Pool extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV3Pool;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV3PoolInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    fee: TypedContractMethod<[], [bigint], "view">;
    increaseObservationCardinalityNext: TypedContractMethod<[
        observationCardinalityNext: BigNumberish
    ], [
        void
    ], "nonpayable">;
    liquidity: TypedContractMethod<[], [bigint], "view">;
    observations: TypedContractMethod<[
        index: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            blockTimestamp: bigint;
            tickCumulative: bigint;
            liquidityCumulative: bigint;
            initialized: boolean;
        }
    ], "view">;
    observe: TypedContractMethod<[
        secondsAgos: BigNumberish[]
    ], [
        [
            bigint[],
            bigint[]
        ] & {
            tickCumulatives: bigint[];
            liquidityCumulatives: bigint[];
        }
    ], "view">;
    positions: TypedContractMethod<[
        key: BytesLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            _liquidity: bigint;
            feeGrowthInside0LastX128: bigint;
            feeGrowthInside1LastX128: bigint;
            tokensOwed0: bigint;
            tokensOwed1: bigint;
        }
    ], "view">;
    slot0: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            sqrtPriceX96: bigint;
            tick: bigint;
            observationIndex: bigint;
            observationCardinality: bigint;
            observationCardinalityNext: bigint;
            feeProtocol: bigint;
            unlocked: boolean;
        }
    ], "view">;
    tickBitmap: TypedContractMethod<[
        wordPosition: BigNumberish
    ], [
        bigint
    ], "view">;
    ticks: TypedContractMethod<[
        tick: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            liquidityGross: bigint;
            liquidityNet: bigint;
            feeGrowthOutside0X128: bigint;
            feeGrowthOutside1X128: bigint;
            tickCumulativeOutside: bigint;
            secondsPerLiquidityOutsideX128: bigint;
            secondsOutside: bigint;
            initialized: boolean;
        }
    ], "view">;
    token0: TypedContractMethod<[], [string], "view">;
    token1: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "fee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "increaseObservationCardinalityNext"): TypedContractMethod<[
        observationCardinalityNext: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "liquidity"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "observations"): TypedContractMethod<[
        index: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            blockTimestamp: bigint;
            tickCumulative: bigint;
            liquidityCumulative: bigint;
            initialized: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "observe"): TypedContractMethod<[
        secondsAgos: BigNumberish[]
    ], [
        [
            bigint[],
            bigint[]
        ] & {
            tickCumulatives: bigint[];
            liquidityCumulatives: bigint[];
        }
    ], "view">;
    getFunction(nameOrSignature: "positions"): TypedContractMethod<[
        key: BytesLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            _liquidity: bigint;
            feeGrowthInside0LastX128: bigint;
            feeGrowthInside1LastX128: bigint;
            tokensOwed0: bigint;
            tokensOwed1: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "slot0"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            sqrtPriceX96: bigint;
            tick: bigint;
            observationIndex: bigint;
            observationCardinality: bigint;
            observationCardinalityNext: bigint;
            feeProtocol: bigint;
            unlocked: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "tickBitmap"): TypedContractMethod<[wordPosition: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "ticks"): TypedContractMethod<[
        tick: BigNumberish
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean
        ] & {
            liquidityGross: bigint;
            liquidityNet: bigint;
            feeGrowthOutside0X128: bigint;
            feeGrowthOutside1X128: bigint;
            tickCumulativeOutside: bigint;
            secondsPerLiquidityOutsideX128: bigint;
            secondsOutside: bigint;
            initialized: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "token0"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "token1"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
