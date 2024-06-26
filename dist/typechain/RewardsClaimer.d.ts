import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RewardsClaimerInterface extends utils.Interface {
    functions: {
        "claimRewards()": FunctionFragment;
        "rewardDestination()": FunctionFragment;
        "rewardTokens(uint256)": FunctionFragment;
        "setRewardDestination(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimRewards" | "rewardDestination" | "rewardTokens" | "setRewardDestination"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardDestination", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRewardDestination", values: [string]): string;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardDestination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardDestination", data: BytesLike): Result;
    events: {
        "ClaimTokenRewards(address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "RewardDestinationUpdate(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimTokenRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardDestinationUpdate"): EventFragment;
}
export interface ClaimTokenRewardsEventObject {
    rewardToken: string;
    amount: BigNumber;
}
export type ClaimTokenRewardsEvent = TypedEvent<[
    string,
    BigNumber
], ClaimTokenRewardsEventObject>;
export type ClaimTokenRewardsEventFilter = TypedEventFilter<ClaimTokenRewardsEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface RewardDestinationUpdateEventObject {
    newDestination: string;
}
export type RewardDestinationUpdateEvent = TypedEvent<[
    string
], RewardDestinationUpdateEventObject>;
export type RewardDestinationUpdateEventFilter = TypedEventFilter<RewardDestinationUpdateEvent>;
export interface RewardsClaimer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardsClaimerInterface;
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
        claimRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardDestination(overrides?: CallOverrides): Promise<[string]>;
        rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setRewardDestination(newDestination: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    claimRewards(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardDestination(overrides?: CallOverrides): Promise<string>;
    rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setRewardDestination(newDestination: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        claimRewards(overrides?: CallOverrides): Promise<void>;
        rewardDestination(overrides?: CallOverrides): Promise<string>;
        rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setRewardDestination(newDestination: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimTokenRewards(address,uint256)"(rewardToken?: string | null, amount?: null): ClaimTokenRewardsEventFilter;
        ClaimTokenRewards(rewardToken?: string | null, amount?: null): ClaimTokenRewardsEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "RewardDestinationUpdate(address)"(newDestination?: string | null): RewardDestinationUpdateEventFilter;
        RewardDestinationUpdate(newDestination?: string | null): RewardDestinationUpdateEventFilter;
    };
    estimateGas: {
        claimRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardDestination(overrides?: CallOverrides): Promise<BigNumber>;
        rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setRewardDestination(newDestination: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claimRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardDestination(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRewardDestination(newDestination: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
