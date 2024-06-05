import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUniswapV3PoolInterface extends utils.Interface {
    functions: {
        "fee()": FunctionFragment;
        "increaseObservationCardinalityNext(uint16)": FunctionFragment;
        "liquidity()": FunctionFragment;
        "observations(uint256)": FunctionFragment;
        "observe(uint32[])": FunctionFragment;
        "positions(bytes32)": FunctionFragment;
        "slot0()": FunctionFragment;
        "tickBitmap(int16)": FunctionFragment;
        "ticks(int24)": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "fee" | "increaseObservationCardinalityNext" | "liquidity" | "observations" | "observe" | "positions" | "slot0" | "tickBitmap" | "ticks" | "token0" | "token1"): FunctionFragment;
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
    events: {};
}
export interface IUniswapV3Pool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV3PoolInterface;
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
        fee(overrides?: CallOverrides): Promise<[number]>;
        increaseObservationCardinalityNext(observationCardinalityNext: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            blockTimestamp: number;
            tickCumulative: BigNumber;
            liquidityCumulative: BigNumber;
            initialized: boolean;
        }>;
        observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            tickCumulatives: BigNumber[];
            liquidityCumulatives: BigNumber[];
        }>;
        positions(key: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _liquidity: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        slot0(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            number,
            number,
            boolean
        ] & {
            sqrtPriceX96: BigNumber;
            tick: number;
            observationIndex: number;
            observationCardinality: number;
            observationCardinalityNext: number;
            feeProtocol: number;
            unlocked: boolean;
        }>;
        tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            boolean
        ] & {
            liquidityGross: BigNumber;
            liquidityNet: BigNumber;
            feeGrowthOutside0X128: BigNumber;
            feeGrowthOutside1X128: BigNumber;
            tickCumulativeOutside: BigNumber;
            secondsPerLiquidityOutsideX128: BigNumber;
            secondsOutside: number;
            initialized: boolean;
        }>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
    };
    fee(overrides?: CallOverrides): Promise<number>;
    increaseObservationCardinalityNext(observationCardinalityNext: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liquidity(overrides?: CallOverrides): Promise<BigNumber>;
    observations(index: BigNumberish, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        liquidityCumulative: BigNumber;
        initialized: boolean;
    }>;
    observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<[
        BigNumber[],
        BigNumber[]
    ] & {
        tickCumulatives: BigNumber[];
        liquidityCumulatives: BigNumber[];
    }>;
    positions(key: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _liquidity: BigNumber;
        feeGrowthInside0LastX128: BigNumber;
        feeGrowthInside1LastX128: BigNumber;
        tokensOwed0: BigNumber;
        tokensOwed1: BigNumber;
    }>;
    slot0(overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number,
        number,
        number,
        number,
        boolean
    ] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        observationIndex: number;
        observationCardinality: number;
        observationCardinalityNext: number;
        feeProtocol: number;
        unlocked: boolean;
    }>;
    tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
    ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
    }>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        fee(overrides?: CallOverrides): Promise<number>;
        increaseObservationCardinalityNext(observationCardinalityNext: BigNumberish, overrides?: CallOverrides): Promise<void>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            blockTimestamp: number;
            tickCumulative: BigNumber;
            liquidityCumulative: BigNumber;
            initialized: boolean;
        }>;
        observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            tickCumulatives: BigNumber[];
            liquidityCumulatives: BigNumber[];
        }>;
        positions(key: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _liquidity: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        slot0(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            number,
            number,
            boolean
        ] & {
            sqrtPriceX96: BigNumber;
            tick: number;
            observationIndex: number;
            observationCardinality: number;
            observationCardinalityNext: number;
            feeProtocol: number;
            unlocked: boolean;
        }>;
        tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            boolean
        ] & {
            liquidityGross: BigNumber;
            liquidityNet: BigNumber;
            feeGrowthOutside0X128: BigNumber;
            feeGrowthOutside1X128: BigNumber;
            tickCumulativeOutside: BigNumber;
            secondsPerLiquidityOutsideX128: BigNumber;
            secondsOutside: number;
            initialized: boolean;
        }>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        increaseObservationCardinalityNext(observationCardinalityNext: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        positions(key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        slot0(overrides?: CallOverrides): Promise<BigNumber>;
        tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseObservationCardinalityNext(observationCardinalityNext: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observe(secondsAgos: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slot0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tickBitmap(wordPosition: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
