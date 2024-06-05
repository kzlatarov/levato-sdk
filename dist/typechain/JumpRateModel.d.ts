import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface JumpRateModelInterface extends utils.Interface {
    functions: {
        "baseRate()": FunctionFragment;
        "blocksPerYear()": FunctionFragment;
        "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
        "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
        "jumpMultiplier()": FunctionFragment;
        "kink()": FunctionFragment;
        "multiplier()": FunctionFragment;
        "utilizationRate(uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "baseRate" | "blocksPerYear" | "getBorrowRate" | "getSupplyRate" | "jumpMultiplier" | "kink" | "multiplier" | "utilizationRate"): FunctionFragment;
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
    events: {
        "NewInterestParams(uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewInterestParams"): EventFragment;
}
export interface NewInterestParamsEventObject {
    baseRate: BigNumber;
    multiplier: BigNumber;
    jumpMultiplier: BigNumber;
    kink: BigNumber;
}
export type NewInterestParamsEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], NewInterestParamsEventObject>;
export type NewInterestParamsEventFilter = TypedEventFilter<NewInterestParamsEvent>;
export interface JumpRateModel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: JumpRateModelInterface;
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
        baseRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        blocksPerYear(overrides?: CallOverrides): Promise<[BigNumber]>;
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        jumpMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;
        kink(overrides?: CallOverrides): Promise<[BigNumber]>;
        multiplier(overrides?: CallOverrides): Promise<[BigNumber]>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    baseRate(overrides?: CallOverrides): Promise<BigNumber>;
    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
    getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    jumpMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
    kink(overrides?: CallOverrides): Promise<BigNumber>;
    multiplier(overrides?: CallOverrides): Promise<BigNumber>;
    utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        baseRate(overrides?: CallOverrides): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        jumpMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
        kink(overrides?: CallOverrides): Promise<BigNumber>;
        multiplier(overrides?: CallOverrides): Promise<BigNumber>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "NewInterestParams(uint256,uint256,uint256,uint256)"(baseRate?: null, multiplier?: null, jumpMultiplier?: null, kink?: null): NewInterestParamsEventFilter;
        NewInterestParams(baseRate?: null, multiplier?: null, jumpMultiplier?: null, kink?: null): NewInterestParamsEventFilter;
    };
    estimateGas: {
        baseRate(overrides?: CallOverrides): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        jumpMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
        kink(overrides?: CallOverrides): Promise<BigNumber>;
        multiplier(overrides?: CallOverrides): Promise<BigNumber>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        baseRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        jumpMultiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kink(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        utilizationRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
