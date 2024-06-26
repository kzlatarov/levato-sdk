import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface AuthorityInterface extends utils.Interface {
    functions: {
        "canCall(address,address,bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "canCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "canCall", values: [string, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
    events: {};
}
export interface Authority extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AuthorityInterface;
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
        canCall(user: string, target: string, functionSig: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    canCall(user: string, target: string, functionSig: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        canCall(user: string, target: string, functionSig: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        canCall(user: string, target: string, functionSig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        canCall(user: string, target: string, functionSig: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
