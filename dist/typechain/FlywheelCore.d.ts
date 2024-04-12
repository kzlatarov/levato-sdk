import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface FlywheelCoreInterface extends Interface {
    getFunction(nameOrSignature: "ONE" | "accrue(address,address)" | "accrue(address,address,address)" | "addStrategyForRewards" | "authority" | "claimRewards" | "flywheelBooster" | "flywheelRewards" | "owner" | "rewardToken" | "rewardsAccrued" | "setAuthority" | "setBooster" | "setFlywheelRewards" | "strategyState" | "transferOwnership" | "userIndex"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AccrueRewards" | "AddStrategy" | "AuthorityUpdated" | "ClaimRewards" | "FlywheelBoosterUpdate" | "FlywheelRewardsUpdate" | "OwnershipTransferred"): EventFragment;
    encodeFunctionData(functionFragment: "ONE", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrue(address,address)", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "accrue(address,address,address)", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "addStrategyForRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "flywheelBooster", values?: undefined): string;
    encodeFunctionData(functionFragment: "flywheelRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsAccrued", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setBooster", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setFlywheelRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "strategyState", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "userIndex", values: [AddressLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "ONE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrue(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrue(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStrategyForRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelBooster", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBooster", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlywheelRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategyState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userIndex", data: BytesLike): Result;
}
export declare namespace AccrueRewardsEvent {
    type InputTuple = [
        strategy: AddressLike,
        user: AddressLike,
        rewardsDelta: BigNumberish,
        rewardsIndex: BigNumberish
    ];
    type OutputTuple = [
        strategy: string,
        user: string,
        rewardsDelta: bigint,
        rewardsIndex: bigint
    ];
    interface OutputObject {
        strategy: string;
        user: string;
        rewardsDelta: bigint;
        rewardsIndex: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AddStrategyEvent {
    type InputTuple = [newStrategy: AddressLike];
    type OutputTuple = [newStrategy: string];
    interface OutputObject {
        newStrategy: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AuthorityUpdatedEvent {
    type InputTuple = [user: AddressLike, newAuthority: AddressLike];
    type OutputTuple = [user: string, newAuthority: string];
    interface OutputObject {
        user: string;
        newAuthority: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ClaimRewardsEvent {
    type InputTuple = [user: AddressLike, amount: BigNumberish];
    type OutputTuple = [user: string, amount: bigint];
    interface OutputObject {
        user: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FlywheelBoosterUpdateEvent {
    type InputTuple = [newBooster: AddressLike];
    type OutputTuple = [newBooster: string];
    interface OutputObject {
        newBooster: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FlywheelRewardsUpdateEvent {
    type InputTuple = [newFlywheelRewards: AddressLike];
    type OutputTuple = [newFlywheelRewards: string];
    interface OutputObject {
        newFlywheelRewards: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferredEvent {
    type InputTuple = [user: AddressLike, newOwner: AddressLike];
    type OutputTuple = [user: string, newOwner: string];
    interface OutputObject {
        user: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface FlywheelCore extends BaseContract {
    connect(runner?: ContractRunner | null): FlywheelCore;
    waitForDeployment(): Promise<this>;
    interface: FlywheelCoreInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ONE: TypedContractMethod<[], [bigint], "view">;
    "accrue(address,address)": TypedContractMethod<[
        strategy: AddressLike,
        user: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    "accrue(address,address,address)": TypedContractMethod<[
        strategy: AddressLike,
        user: AddressLike,
        secondUser: AddressLike
    ], [
        [bigint, bigint]
    ], "nonpayable">;
    addStrategyForRewards: TypedContractMethod<[
        strategy: AddressLike
    ], [
        void
    ], "nonpayable">;
    authority: TypedContractMethod<[], [string], "view">;
    claimRewards: TypedContractMethod<[user: AddressLike], [void], "nonpayable">;
    flywheelBooster: TypedContractMethod<[], [string], "view">;
    flywheelRewards: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    rewardToken: TypedContractMethod<[], [string], "view">;
    rewardsAccrued: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    setAuthority: TypedContractMethod<[
        newAuthority: AddressLike
    ], [
        void
    ], "nonpayable">;
    setBooster: TypedContractMethod<[
        newBooster: AddressLike
    ], [
        void
    ], "nonpayable">;
    setFlywheelRewards: TypedContractMethod<[
        newFlywheelRewards: AddressLike
    ], [
        void
    ], "nonpayable">;
    strategyState: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint] & {
            index: bigint;
            lastUpdatedTimestamp: bigint;
        }
    ], "view">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    userIndex: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "ONE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "accrue(address,address)"): TypedContractMethod<[
        strategy: AddressLike,
        user: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "accrue(address,address,address)"): TypedContractMethod<[
        strategy: AddressLike,
        user: AddressLike,
        secondUser: AddressLike
    ], [
        [bigint, bigint]
    ], "nonpayable">;
    getFunction(nameOrSignature: "addStrategyForRewards"): TypedContractMethod<[strategy: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "authority"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "claimRewards"): TypedContractMethod<[user: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "flywheelBooster"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "flywheelRewards"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rewardsAccrued"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "setAuthority"): TypedContractMethod<[newAuthority: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setBooster"): TypedContractMethod<[newBooster: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setFlywheelRewards"): TypedContractMethod<[
        newFlywheelRewards: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "strategyState"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, bigint] & {
            index: bigint;
            lastUpdatedTimestamp: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "userIndex"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getEvent(key: "AccrueRewards"): TypedContractEvent<AccrueRewardsEvent.InputTuple, AccrueRewardsEvent.OutputTuple, AccrueRewardsEvent.OutputObject>;
    getEvent(key: "AddStrategy"): TypedContractEvent<AddStrategyEvent.InputTuple, AddStrategyEvent.OutputTuple, AddStrategyEvent.OutputObject>;
    getEvent(key: "AuthorityUpdated"): TypedContractEvent<AuthorityUpdatedEvent.InputTuple, AuthorityUpdatedEvent.OutputTuple, AuthorityUpdatedEvent.OutputObject>;
    getEvent(key: "ClaimRewards"): TypedContractEvent<ClaimRewardsEvent.InputTuple, ClaimRewardsEvent.OutputTuple, ClaimRewardsEvent.OutputObject>;
    getEvent(key: "FlywheelBoosterUpdate"): TypedContractEvent<FlywheelBoosterUpdateEvent.InputTuple, FlywheelBoosterUpdateEvent.OutputTuple, FlywheelBoosterUpdateEvent.OutputObject>;
    getEvent(key: "FlywheelRewardsUpdate"): TypedContractEvent<FlywheelRewardsUpdateEvent.InputTuple, FlywheelRewardsUpdateEvent.OutputTuple, FlywheelRewardsUpdateEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    filters: {
        "AccrueRewards(address,address,uint256,uint256)": TypedContractEvent<AccrueRewardsEvent.InputTuple, AccrueRewardsEvent.OutputTuple, AccrueRewardsEvent.OutputObject>;
        AccrueRewards: TypedContractEvent<AccrueRewardsEvent.InputTuple, AccrueRewardsEvent.OutputTuple, AccrueRewardsEvent.OutputObject>;
        "AddStrategy(address)": TypedContractEvent<AddStrategyEvent.InputTuple, AddStrategyEvent.OutputTuple, AddStrategyEvent.OutputObject>;
        AddStrategy: TypedContractEvent<AddStrategyEvent.InputTuple, AddStrategyEvent.OutputTuple, AddStrategyEvent.OutputObject>;
        "AuthorityUpdated(address,address)": TypedContractEvent<AuthorityUpdatedEvent.InputTuple, AuthorityUpdatedEvent.OutputTuple, AuthorityUpdatedEvent.OutputObject>;
        AuthorityUpdated: TypedContractEvent<AuthorityUpdatedEvent.InputTuple, AuthorityUpdatedEvent.OutputTuple, AuthorityUpdatedEvent.OutputObject>;
        "ClaimRewards(address,uint256)": TypedContractEvent<ClaimRewardsEvent.InputTuple, ClaimRewardsEvent.OutputTuple, ClaimRewardsEvent.OutputObject>;
        ClaimRewards: TypedContractEvent<ClaimRewardsEvent.InputTuple, ClaimRewardsEvent.OutputTuple, ClaimRewardsEvent.OutputObject>;
        "FlywheelBoosterUpdate(address)": TypedContractEvent<FlywheelBoosterUpdateEvent.InputTuple, FlywheelBoosterUpdateEvent.OutputTuple, FlywheelBoosterUpdateEvent.OutputObject>;
        FlywheelBoosterUpdate: TypedContractEvent<FlywheelBoosterUpdateEvent.InputTuple, FlywheelBoosterUpdateEvent.OutputTuple, FlywheelBoosterUpdateEvent.OutputObject>;
        "FlywheelRewardsUpdate(address)": TypedContractEvent<FlywheelRewardsUpdateEvent.InputTuple, FlywheelRewardsUpdateEvent.OutputTuple, FlywheelRewardsUpdateEvent.OutputObject>;
        FlywheelRewardsUpdate: TypedContractEvent<FlywheelRewardsUpdateEvent.InputTuple, FlywheelRewardsUpdateEvent.OutputTuple, FlywheelRewardsUpdateEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    };
}
