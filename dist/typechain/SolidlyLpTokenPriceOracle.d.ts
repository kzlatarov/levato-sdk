import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SolidlyLpTokenPriceOracleInterface extends utils.Interface {
    functions: {
        "_sqrt4k(uint256,uint256,uint256)": FunctionFragment;
        "price(address)": FunctionFragment;
        "wtoken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_sqrt4k" | "price" | "wtoken"): FunctionFragment;
    encodeFunctionData(functionFragment: "_sqrt4k", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "price", values: [string]): string;
    encodeFunctionData(functionFragment: "wtoken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_sqrt4k", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wtoken", data: BytesLike): Result;
    events: {};
}
export interface SolidlyLpTokenPriceOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SolidlyLpTokenPriceOracleInterface;
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
        _sqrt4k(r0: BigNumberish, r1: BigNumberish, t_s: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        price(underlying: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        wtoken(overrides?: CallOverrides): Promise<[string]>;
    };
    _sqrt4k(r0: BigNumberish, r1: BigNumberish, t_s: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
    wtoken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _sqrt4k(r0: BigNumberish, r1: BigNumberish, t_s: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        wtoken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        _sqrt4k(r0: BigNumberish, r1: BigNumberish, t_s: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        wtoken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _sqrt4k(r0: BigNumberish, r1: BigNumberish, t_s: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        price(underlying: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wtoken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
