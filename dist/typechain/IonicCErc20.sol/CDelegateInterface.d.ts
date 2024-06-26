import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface CDelegateInterfaceInterface extends utils.Interface {
    functions: {
        "_becomeImplementation(bytes)": FunctionFragment;
        "contractType()": FunctionFragment;
        "delegateType()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_becomeImplementation" | "contractType" | "delegateType"): FunctionFragment;
    encodeFunctionData(functionFragment: "_becomeImplementation", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegateType", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_becomeImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateType", data: BytesLike): Result;
    events: {};
}
export interface CDelegateInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CDelegateInterfaceInterface;
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
        _becomeImplementation(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        contractType(overrides?: CallOverrides): Promise<[string]>;
        delegateType(overrides?: CallOverrides): Promise<[number]>;
    };
    _becomeImplementation(data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    contractType(overrides?: CallOverrides): Promise<string>;
    delegateType(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        _becomeImplementation(data: BytesLike, overrides?: CallOverrides): Promise<void>;
        contractType(overrides?: CallOverrides): Promise<string>;
        delegateType(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        _becomeImplementation(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        contractType(overrides?: CallOverrides): Promise<BigNumber>;
        delegateType(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _becomeImplementation(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegateType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
