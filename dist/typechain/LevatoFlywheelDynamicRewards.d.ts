import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface LevatoFlywheelDynamicRewardsInterface extends Interface {
    getFunction(nameOrSignature: "flywheel" | "getAccruedRewards" | "rewardToken" | "rewardsCycle" | "rewardsCycleLength"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "NewRewardsCycle"): EventFragment;
    encodeFunctionData(functionFragment: "flywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccruedRewards", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsCycle", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "rewardsCycleLength", values?: undefined): string;
    decodeFunctionResult(functionFragment: "flywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsCycle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsCycleLength", data: BytesLike): Result;
}
export declare namespace NewRewardsCycleEvent {
    type InputTuple = [
        start: BigNumberish,
        end: BigNumberish,
        reward: BigNumberish
    ];
    type OutputTuple = [start: bigint, end: bigint, reward: bigint];
    interface OutputObject {
        start: bigint;
        end: bigint;
        reward: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface LevatoFlywheelDynamicRewards extends BaseContract {
    connect(runner?: ContractRunner | null): LevatoFlywheelDynamicRewards;
    waitForDeployment(): Promise<this>;
    interface: LevatoFlywheelDynamicRewardsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    flywheel: TypedContractMethod<[], [string], "view">;
    getAccruedRewards: TypedContractMethod<[
        strategy: AddressLike,
        lastUpdatedTimestamp: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    rewardToken: TypedContractMethod<[], [string], "view">;
    rewardsCycle: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint, bigint] & {
            start: bigint;
            end: bigint;
            reward: bigint;
        }
    ], "view">;
    rewardsCycleLength: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "flywheel"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAccruedRewards"): TypedContractMethod<[
        strategy: AddressLike,
        lastUpdatedTimestamp: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rewardsCycle"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint, bigint] & {
            start: bigint;
            end: bigint;
            reward: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "rewardsCycleLength"): TypedContractMethod<[], [bigint], "view">;
    getEvent(key: "NewRewardsCycle"): TypedContractEvent<NewRewardsCycleEvent.InputTuple, NewRewardsCycleEvent.OutputTuple, NewRewardsCycleEvent.OutputObject>;
    filters: {
        "NewRewardsCycle(uint32,uint32,uint192)": TypedContractEvent<NewRewardsCycleEvent.InputTuple, NewRewardsCycleEvent.OutputTuple, NewRewardsCycleEvent.OutputObject>;
        NewRewardsCycle: TypedContractEvent<NewRewardsCycleEvent.InputTuple, NewRewardsCycleEvent.OutputTuple, NewRewardsCycleEvent.OutputObject>;
    };
}
