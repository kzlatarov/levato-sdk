import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IFlywheelBoosterInterface extends utils.Interface {
    functions: {
        "boostedBalanceOf(address,address)": FunctionFragment;
        "boostedTotalSupply(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "boostedBalanceOf" | "boostedTotalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "boostedBalanceOf", values: [string, string]): string;
    encodeFunctionData(functionFragment: "boostedTotalSupply", values: [string]): string;
    decodeFunctionResult(functionFragment: "boostedBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "boostedTotalSupply", data: BytesLike): Result;
    events: {};
}
export interface IFlywheelBooster extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFlywheelBoosterInterface;
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
        boostedBalanceOf(strategy: string, user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        boostedTotalSupply(strategy: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    boostedBalanceOf(strategy: string, user: string, overrides?: CallOverrides): Promise<BigNumber>;
    boostedTotalSupply(strategy: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        boostedBalanceOf(strategy: string, user: string, overrides?: CallOverrides): Promise<BigNumber>;
        boostedTotalSupply(strategy: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        boostedBalanceOf(strategy: string, user: string, overrides?: CallOverrides): Promise<BigNumber>;
        boostedTotalSupply(strategy: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        boostedBalanceOf(strategy: string, user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        boostedTotalSupply(strategy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
