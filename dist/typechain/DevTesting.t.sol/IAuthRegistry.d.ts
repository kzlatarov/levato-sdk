import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IAuthRegistryInterface extends utils.Interface {
    functions: {
        "owner()": FunctionFragment;
        "setUserRole(address,address,uint8,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "owner" | "setUserRole"): FunctionFragment;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setUserRole", values: [string, string, BigNumberish, boolean]): string;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserRole", data: BytesLike): Result;
    events: {};
}
export interface IAuthRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAuthRegistryInterface;
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
        owner(overrides?: CallOverrides): Promise<[string]>;
        setUserRole(pool: string, user: string, role: BigNumberish, enabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    owner(overrides?: CallOverrides): Promise<string>;
    setUserRole(pool: string, user: string, role: BigNumberish, enabled: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        owner(overrides?: CallOverrides): Promise<string>;
        setUserRole(pool: string, user: string, role: BigNumberish, enabled: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setUserRole(pool: string, user: string, role: BigNumberish, enabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setUserRole(pool: string, user: string, role: BigNumberish, enabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
