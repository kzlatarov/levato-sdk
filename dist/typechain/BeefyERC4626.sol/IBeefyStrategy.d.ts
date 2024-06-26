import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IBeefyStrategyInterface extends utils.Interface {
    functions: {
        "harvestOnDeposit()": FunctionFragment;
        "keeper()": FunctionFragment;
        "owner()": FunctionFragment;
        "setHarvestOnDeposit(bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "harvestOnDeposit" | "keeper" | "owner" | "setHarvestOnDeposit"): FunctionFragment;
    encodeFunctionData(functionFragment: "harvestOnDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "keeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setHarvestOnDeposit", values: [boolean]): string;
    decodeFunctionResult(functionFragment: "harvestOnDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHarvestOnDeposit", data: BytesLike): Result;
    events: {};
}
export interface IBeefyStrategy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBeefyStrategyInterface;
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
        harvestOnDeposit(overrides?: CallOverrides): Promise<[boolean]>;
        keeper(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setHarvestOnDeposit(arg0: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    harvestOnDeposit(overrides?: CallOverrides): Promise<boolean>;
    keeper(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    setHarvestOnDeposit(arg0: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        harvestOnDeposit(overrides?: CallOverrides): Promise<boolean>;
        keeper(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        setHarvestOnDeposit(arg0: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        harvestOnDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        keeper(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setHarvestOnDeposit(arg0: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        harvestOnDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setHarvestOnDeposit(arg0: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
