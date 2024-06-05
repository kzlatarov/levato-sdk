import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AaveOracleAdapterInterface extends utils.Interface {
    functions: {
        "WNATIVE()": FunctionFragment;
        "aaveOracle()": FunctionFragment;
        "price(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WNATIVE" | "aaveOracle" | "price"): FunctionFragment;
    encodeFunctionData(functionFragment: "WNATIVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "aaveOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "price", values: [string]): string;
    decodeFunctionResult(functionFragment: "WNATIVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aaveOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    events: {};
}
export interface AaveOracleAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AaveOracleAdapterInterface;
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
        WNATIVE(overrides?: CallOverrides): Promise<[string]>;
        aaveOracle(overrides?: CallOverrides): Promise<[string]>;
        price(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    WNATIVE(overrides?: CallOverrides): Promise<string>;
    aaveOracle(overrides?: CallOverrides): Promise<string>;
    price(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        WNATIVE(overrides?: CallOverrides): Promise<string>;
        aaveOracle(overrides?: CallOverrides): Promise<string>;
        price(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        WNATIVE(overrides?: CallOverrides): Promise<BigNumber>;
        aaveOracle(overrides?: CallOverrides): Promise<BigNumber>;
        price(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        WNATIVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        aaveOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
