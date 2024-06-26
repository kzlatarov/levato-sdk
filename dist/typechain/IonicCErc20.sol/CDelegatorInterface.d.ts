import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface CDelegatorInterfaceInterface extends utils.Interface {
    functions: {
        "_setImplementationSafe(address,bytes)": FunctionFragment;
        "_upgrade()": FunctionFragment;
        "implementation()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_setImplementationSafe" | "_upgrade" | "implementation"): FunctionFragment;
    encodeFunctionData(functionFragment: "_setImplementationSafe", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "_upgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_setImplementationSafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    events: {};
}
export interface CDelegatorInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CDelegatorInterfaceInterface;
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
        _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
    };
    _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _upgrade(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    implementation(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: CallOverrides): Promise<void>;
        _upgrade(overrides?: CallOverrides): Promise<void>;
        implementation(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
