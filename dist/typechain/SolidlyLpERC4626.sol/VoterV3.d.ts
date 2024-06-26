import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface VoterV3Interface extends utils.Interface {
    functions: {
        "gauges(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "gauges"): FunctionFragment;
    encodeFunctionData(functionFragment: "gauges", values: [string]): string;
    decodeFunctionResult(functionFragment: "gauges", data: BytesLike): Result;
    events: {};
}
export interface VoterV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VoterV3Interface;
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
        gauges(arg0: string, overrides?: CallOverrides): Promise<[string]>;
    };
    gauges(arg0: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        gauges(arg0: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        gauges(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        gauges(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
