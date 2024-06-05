import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface DeployScriptInterface extends utils.Interface {
    functions: {
        "IS_SCRIPT()": FunctionFragment;
        "POLYGON()": FunctionFragment;
        "run()": FunctionFragment;
        "setUp()": FunctionFragment;
        "wnative()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_SCRIPT" | "POLYGON" | "run" | "setUp" | "wnative"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
    encodeFunctionData(functionFragment: "POLYGON", values?: undefined): string;
    encodeFunctionData(functionFragment: "run", values?: undefined): string;
    encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
    encodeFunctionData(functionFragment: "wnative", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POLYGON", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wnative", data: BytesLike): Result;
    events: {};
}
export interface DeployScript extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DeployScriptInterface;
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
        IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;
        POLYGON(overrides?: CallOverrides): Promise<[BigNumber]>;
        run(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setUp(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        wnative(overrides?: CallOverrides): Promise<[string]>;
    };
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
    POLYGON(overrides?: CallOverrides): Promise<BigNumber>;
    run(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setUp(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    wnative(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
        POLYGON(overrides?: CallOverrides): Promise<BigNumber>;
        run(overrides?: CallOverrides): Promise<void>;
        setUp(overrides?: CallOverrides): Promise<void>;
        wnative(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;
        POLYGON(overrides?: CallOverrides): Promise<BigNumber>;
        run(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setUp(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        wnative(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POLYGON(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        run(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setUp(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        wnative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
