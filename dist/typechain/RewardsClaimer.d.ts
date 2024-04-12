import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface RewardsClaimerInterface extends Interface {
    getFunction(nameOrSignature: "claimRewards" | "rewardDestination" | "rewardTokens" | "setRewardDestination"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimTokenRewards" | "Initialized" | "RewardDestinationUpdate"): EventFragment;
    encodeFunctionData(functionFragment: "claimRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardDestination", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRewardDestination", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardDestination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardDestination", data: BytesLike): Result;
}
export declare namespace ClaimTokenRewardsEvent {
    type InputTuple = [rewardToken: AddressLike, amount: BigNumberish];
    type OutputTuple = [rewardToken: string, amount: bigint];
    interface OutputObject {
        rewardToken: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InitializedEvent {
    type InputTuple = [version: BigNumberish];
    type OutputTuple = [version: bigint];
    interface OutputObject {
        version: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RewardDestinationUpdateEvent {
    type InputTuple = [newDestination: AddressLike];
    type OutputTuple = [newDestination: string];
    interface OutputObject {
        newDestination: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface RewardsClaimer extends BaseContract {
    connect(runner?: ContractRunner | null): RewardsClaimer;
    waitForDeployment(): Promise<this>;
    interface: RewardsClaimerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    claimRewards: TypedContractMethod<[], [void], "nonpayable">;
    rewardDestination: TypedContractMethod<[], [string], "view">;
    rewardTokens: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    setRewardDestination: TypedContractMethod<[
        newDestination: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "claimRewards"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "rewardDestination"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rewardTokens"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "setRewardDestination"): TypedContractMethod<[newDestination: AddressLike], [void], "nonpayable">;
    getEvent(key: "ClaimTokenRewards"): TypedContractEvent<ClaimTokenRewardsEvent.InputTuple, ClaimTokenRewardsEvent.OutputTuple, ClaimTokenRewardsEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "RewardDestinationUpdate"): TypedContractEvent<RewardDestinationUpdateEvent.InputTuple, RewardDestinationUpdateEvent.OutputTuple, RewardDestinationUpdateEvent.OutputObject>;
    filters: {
        "ClaimTokenRewards(address,uint256)": TypedContractEvent<ClaimTokenRewardsEvent.InputTuple, ClaimTokenRewardsEvent.OutputTuple, ClaimTokenRewardsEvent.OutputObject>;
        ClaimTokenRewards: TypedContractEvent<ClaimTokenRewardsEvent.InputTuple, ClaimTokenRewardsEvent.OutputTuple, ClaimTokenRewardsEvent.OutputObject>;
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "RewardDestinationUpdate(address)": TypedContractEvent<RewardDestinationUpdateEvent.InputTuple, RewardDestinationUpdateEvent.OutputTuple, RewardDestinationUpdateEvent.OutputObject>;
        RewardDestinationUpdate: TypedContractEvent<RewardDestinationUpdateEvent.InputTuple, RewardDestinationUpdateEvent.OutputTuple, RewardDestinationUpdateEvent.OutputObject>;
    };
}
