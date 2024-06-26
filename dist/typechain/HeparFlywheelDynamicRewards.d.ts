import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface HeparFlywheelDynamicRewardsInterface extends utils.Interface {
    functions: {
        "flywheel()": FunctionFragment;
        "getAccruedRewards(address,uint32)": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "rewardsCycle(address)": FunctionFragment;
        "rewardsCycleLength()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "flywheel" | "getAccruedRewards" | "rewardToken" | "rewardsCycle" | "rewardsCycleLength"): FunctionFragment;
    encodeFunctionData(functionFragment: "flywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccruedRewards", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsCycle", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardsCycleLength", values?: undefined): string;
    decodeFunctionResult(functionFragment: "flywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsCycle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsCycleLength", data: BytesLike): Result;
    events: {
        "NewRewardsCycle(uint32,uint32,uint192)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewRewardsCycle"): EventFragment;
}
export interface NewRewardsCycleEventObject {
    start: number;
    end: number;
    reward: BigNumber;
}
export type NewRewardsCycleEvent = TypedEvent<[
    number,
    number,
    BigNumber
], NewRewardsCycleEventObject>;
export type NewRewardsCycleEventFilter = TypedEventFilter<NewRewardsCycleEvent>;
export interface HeparFlywheelDynamicRewards extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: HeparFlywheelDynamicRewardsInterface;
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
        rewardsCycle(arg0: string, overrides?: CallOverrides): Promise<[
            number,
            number,
            BigNumber
        ] & {
            start: number;
            end: number;
            reward: BigNumber;
        }>;
        rewardsCycleLength(overrides?: CallOverrides): Promise<[number]>;
    };
    flywheel(overrides?: CallOverrides): Promise<string>;
    getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    rewardsCycle(arg0: string, overrides?: CallOverrides): Promise<[
        number,
        number,
        BigNumber
    ] & {
        start: number;
        end: number;
        reward: BigNumber;
    }>;
    rewardsCycleLength(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        flywheel(overrides?: CallOverrides): Promise<string>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        rewardsCycle(arg0: string, overrides?: CallOverrides): Promise<[
            number,
            number,
            BigNumber
        ] & {
            start: number;
            end: number;
            reward: BigNumber;
        }>;
        rewardsCycleLength(overrides?: CallOverrides): Promise<number>;
    };
    filters: {
        "NewRewardsCycle(uint32,uint32,uint192)"(start?: BigNumberish | null, end?: BigNumberish | null, reward?: null): NewRewardsCycleEventFilter;
        NewRewardsCycle(start?: BigNumberish | null, end?: BigNumberish | null, reward?: null): NewRewardsCycleEventFilter;
    };
    estimateGas: {
        flywheel(overrides?: CallOverrides): Promise<BigNumber>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsCycle(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsCycleLength(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        flywheel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccruedRewards(strategy: string, lastUpdatedTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsCycle(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsCycleLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
