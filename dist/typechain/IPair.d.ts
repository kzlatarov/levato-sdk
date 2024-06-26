import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type ObservationStruct = {
    timestamp: BigNumberish;
    reserve0Cumulative: BigNumberish;
    reserve1Cumulative: BigNumberish;
};
export type ObservationStructOutput = [BigNumber, BigNumber, BigNumber] & {
    timestamp: BigNumber;
    reserve0Cumulative: BigNumber;
    reserve1Cumulative: BigNumber;
};
export interface IPairInterface extends utils.Interface {
    functions: {
        "balanceOf(address)": FunctionFragment;
        "burn(address)": FunctionFragment;
        "claimFees()": FunctionFragment;
        "current(address,uint256)": FunctionFragment;
        "currentCumulativePrices()": FunctionFragment;
        "decimals()": FunctionFragment;
        "factory()": FunctionFragment;
        "getAmountOut(uint256,address)": FunctionFragment;
        "getReserves()": FunctionFragment;
        "lastObservation()": FunctionFragment;
        "metadata()": FunctionFragment;
        "mint(address)": FunctionFragment;
        "name()": FunctionFragment;
        "observationLength()": FunctionFragment;
        "observations(uint256)": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "stable()": FunctionFragment;
        "swap(uint256,uint256,address,bytes)": FunctionFragment;
        "symbol()": FunctionFragment;
        "sync()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
        "tokens()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balanceOf" | "burn" | "claimFees" | "current" | "currentCumulativePrices" | "decimals" | "factory" | "getAmountOut" | "getReserves" | "lastObservation" | "metadata" | "mint" | "name" | "observationLength" | "observations" | "permit" | "stable" | "swap" | "symbol" | "sync" | "token0" | "token1" | "tokens" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [string]): string;
    encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "current", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "currentCumulativePrices", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastObservation", values?: undefined): string;
    encodeFunctionData(functionFragment: "metadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "observationLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "observations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "stable", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "sync", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
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
    events: {};
}
export interface IPair extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPairInterface;
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
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimFees(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        current(tokenIn: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
            blockTimestamp: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        lastObservation(overrides?: CallOverrides): Promise<[ObservationStructOutput]>;
        metadata(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string
        ] & {
            dec0: BigNumber;
            dec1: BigNumber;
            r0: BigNumber;
            r1: BigNumber;
            st: boolean;
            t0: string;
            t1: string;
        }>;
        mint(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        observationLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<[ObservationStructOutput]>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stable(overrides?: CallOverrides): Promise<[boolean]>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        sync(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
        tokens(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimFees(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    current(tokenIn: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    currentCumulativePrices(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        reserve0Cumulative: BigNumber;
        reserve1Cumulative: BigNumber;
        blockTimestamp: BigNumber;
    }>;
    decimals(overrides?: CallOverrides): Promise<number>;
    factory(overrides?: CallOverrides): Promise<string>;
    getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    getReserves(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _reserve0: BigNumber;
        _reserve1: BigNumber;
        _blockTimestampLast: BigNumber;
    }>;
    lastObservation(overrides?: CallOverrides): Promise<ObservationStructOutput>;
    metadata(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
    ] & {
        dec0: BigNumber;
        dec1: BigNumber;
        r0: BigNumber;
        r1: BigNumber;
        st: boolean;
        t0: string;
        t1: string;
    }>;
    mint(to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    observationLength(overrides?: CallOverrides): Promise<BigNumber>;
    observations(index: BigNumberish, overrides?: CallOverrides): Promise<ObservationStructOutput>;
    permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stable(overrides?: CallOverrides): Promise<boolean>;
    swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    sync(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    tokens(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
        claimFees(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        current(tokenIn: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reserve0Cumulative: BigNumber;
            reserve1Cumulative: BigNumber;
            blockTimestamp: BigNumber;
        }>;
        decimals(overrides?: CallOverrides): Promise<number>;
        factory(overrides?: CallOverrides): Promise<string>;
        getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
        lastObservation(overrides?: CallOverrides): Promise<ObservationStructOutput>;
        metadata(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean,
            string,
            string
        ] & {
            dec0: BigNumber;
            dec1: BigNumber;
            r0: BigNumber;
            r1: BigNumber;
            st: boolean;
            t0: string;
            t1: string;
        }>;
        mint(to: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        observationLength(overrides?: CallOverrides): Promise<BigNumber>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<ObservationStructOutput>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        stable(overrides?: CallOverrides): Promise<boolean>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        sync(overrides?: CallOverrides): Promise<void>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
        tokens(overrides?: CallOverrides): Promise<[string, string]>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimFees(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        current(tokenIn: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(overrides?: CallOverrides): Promise<BigNumber>;
        lastObservation(overrides?: CallOverrides): Promise<BigNumber>;
        metadata(overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        observationLength(overrides?: CallOverrides): Promise<BigNumber>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stable(overrides?: CallOverrides): Promise<BigNumber>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        sync(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
        tokens(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimFees(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        current(tokenIn: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentCumulativePrices(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastObservation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        metadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observationLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observations(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(amount0Out: BigNumberish, amount1Out: BigNumberish, to: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sync(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokens(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
