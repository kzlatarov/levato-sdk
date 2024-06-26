import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface DiamondExtensionInterface extends utils.Interface {
    functions: {
        "_getExtensionFunctions()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_getExtensionFunctions"): FunctionFragment;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    events: {};
}
export interface DiamondExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DiamondExtensionInterface;
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
        _getExtensionFunctions(overrides?: CallOverrides): Promise<[string[]]>;
    };
    _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
    callStatic: {
        _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {};
    estimateGas: {
        _getExtensionFunctions(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _getExtensionFunctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
