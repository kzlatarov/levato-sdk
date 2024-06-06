import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BasePriceOracleInterface extends utils.Interface {
    functions: {
        "getUnderlyingPrice(address)": FunctionFragment;
        "price(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getUnderlyingPrice" | "price"): FunctionFragment;
    encodeFunctionData(functionFragment: "getUnderlyingPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "price", values: [string]): string;
    decodeFunctionResult(functionFragment: "getUnderlyingPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    events: {};
}
export interface BasePriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BasePriceOracleInterface;
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
        getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        price(underlying: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getUnderlyingPrice(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price(underlying: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
