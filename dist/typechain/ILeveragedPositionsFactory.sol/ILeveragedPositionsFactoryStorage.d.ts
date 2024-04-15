import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface ILeveragedPositionsFactoryStorageInterface extends utils.Interface {
    functions: {
        "creditDelegator()": FunctionFragment;
        "flashloanRouter()": FunctionFragment;
        "fundersRegistry()": FunctionFragment;
        "minBorrowNative()": FunctionFragment;
        "oracle()": FunctionFragment;
        "owner()": FunctionFragment;
        "vaultOfPosition(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "creditDelegator" | "flashloanRouter" | "fundersRegistry" | "minBorrowNative" | "oracle" | "owner" | "vaultOfPosition"): FunctionFragment;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "vaultOfPosition", values: [string]): string;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultOfPosition", data: BytesLike): Result;
    events: {};
}
export interface ILeveragedPositionsFactoryStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILeveragedPositionsFactoryStorageInterface;
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
        creditDelegator(overrides?: CallOverrides): Promise<[string]>;
        flashloanRouter(overrides?: CallOverrides): Promise<[string]>;
        fundersRegistry(overrides?: CallOverrides): Promise<[string]>;
        minBorrowNative(overrides?: CallOverrides): Promise<[BigNumber]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<[string]>;
    };
    creditDelegator(overrides?: CallOverrides): Promise<string>;
    flashloanRouter(overrides?: CallOverrides): Promise<string>;
    fundersRegistry(overrides?: CallOverrides): Promise<string>;
    minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
    oracle(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    vaultOfPosition(position: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        creditDelegator(overrides?: CallOverrides): Promise<string>;
        flashloanRouter(overrides?: CallOverrides): Promise<string>;
        fundersRegistry(overrides?: CallOverrides): Promise<string>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        creditDelegator(overrides?: CallOverrides): Promise<BigNumber>;
        flashloanRouter(overrides?: CallOverrides): Promise<BigNumber>;
        fundersRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        creditDelegator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flashloanRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundersRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minBorrowNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
