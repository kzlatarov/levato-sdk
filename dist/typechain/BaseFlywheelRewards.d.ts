import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BaseFlywheelRewardsInterface extends utils.Interface {
    functions: {
        "flywheel()": FunctionFragment;
        "getAccruedRewards(address,uint32)": FunctionFragment;
        "rewardToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "flywheel" | "getAccruedRewards" | "rewardToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "flywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccruedRewards", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "flywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    events: {};
}
export interface BaseFlywheelRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BaseFlywheelRewardsInterface;
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
        flywheel(overrides?: CallOverrides): Promise<[string]>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
    };
    flywheel(overrides?: CallOverrides): Promise<string>;
    getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        flywheel(overrides?: CallOverrides): Promise<string>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        flywheel(overrides?: CallOverrides): Promise<BigNumber>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        flywheel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
