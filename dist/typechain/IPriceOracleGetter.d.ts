import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IPriceOracleGetterInterface extends utils.Interface {
    functions: {
        "BASE_CURRENCY()": FunctionFragment;
        "BASE_CURRENCY_UNIT()": FunctionFragment;
        "getAssetPrice(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BASE_CURRENCY" | "BASE_CURRENCY_UNIT" | "getAssetPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "BASE_CURRENCY", values?: undefined): string;
    encodeFunctionData(functionFragment: "BASE_CURRENCY_UNIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [string]): string;
    decodeFunctionResult(functionFragment: "BASE_CURRENCY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BASE_CURRENCY_UNIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    events: {};
}
export interface IPriceOracleGetter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceOracleGetterInterface;
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
        BASE_CURRENCY(overrides?: CallOverrides): Promise<[string]>;
        BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;
    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;
        BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        BASE_CURRENCY(overrides?: CallOverrides): Promise<BigNumber>;
        BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BASE_CURRENCY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
