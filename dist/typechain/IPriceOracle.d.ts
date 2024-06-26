import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IPriceOracleInterface extends utils.Interface {
    functions: {
        "price(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "price"): FunctionFragment;
    encodeFunctionData(functionFragment: "price", values: [string]): string;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    events: {};
}
export interface IPriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceOracleInterface;
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
        price(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    price(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        price(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        price(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        price(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
