import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LeveragedPositionStorageInterface extends utils.Interface {
    functions: {
        "collateralAsset()": FunctionFragment;
        "factory()": FunctionFragment;
        "isShort()": FunctionFragment;
        "positionOwner()": FunctionFragment;
        "stableAsset()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "collateralAsset" | "factory" | "isShort" | "positionOwner" | "stableAsset"): FunctionFragment;
    encodeFunctionData(functionFragment: "collateralAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "isShort", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableAsset", values?: undefined): string;
    decodeFunctionResult(functionFragment: "collateralAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isShort", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableAsset", data: BytesLike): Result;
    events: {};
}
export interface LeveragedPositionStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LeveragedPositionStorageInterface;
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
        collateralAsset(overrides?: CallOverrides): Promise<[string]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        isShort(overrides?: CallOverrides): Promise<[boolean]>;
        positionOwner(overrides?: CallOverrides): Promise<[string]>;
        stableAsset(overrides?: CallOverrides): Promise<[string]>;
    };
    collateralAsset(overrides?: CallOverrides): Promise<string>;
    factory(overrides?: CallOverrides): Promise<string>;
    isShort(overrides?: CallOverrides): Promise<boolean>;
    positionOwner(overrides?: CallOverrides): Promise<string>;
    stableAsset(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        collateralAsset(overrides?: CallOverrides): Promise<string>;
        factory(overrides?: CallOverrides): Promise<string>;
        isShort(overrides?: CallOverrides): Promise<boolean>;
        positionOwner(overrides?: CallOverrides): Promise<string>;
        stableAsset(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        collateralAsset(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        isShort(overrides?: CallOverrides): Promise<BigNumber>;
        positionOwner(overrides?: CallOverrides): Promise<BigNumber>;
        stableAsset(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        collateralAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isShort(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stableAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
