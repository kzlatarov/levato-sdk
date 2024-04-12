import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface HeparFlywheelInterface extends Interface {
    getFunction(nameOrSignature: "acceptOwnership" | "accrue(address)" | "accrue(address,address)" | "claimRewards" | "feeRecipient" | "flywheelBooster" | "flywheelRewards" | "initialize" | "owner" | "pendingOwner" | "performanceFee" | "renounceOwnership" | "rewardToken" | "rewardsAccrued" | "setBooster" | "setFlywheelRewards" | "setStrategyForRewards" | "strategy" | "strategyState" | "transferOwnership" | "updateFeeSettings" | "userIndex"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AccrueRewards" | "ClaimRewards" | "FlywheelBoosterUpdate" | "FlywheelRewardsUpdate" | "Initialized" | "OwnershipTransferStarted" | "OwnershipTransferred" | "SetStrategy" | "UpdatedFeeSettings"): EventFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrue(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "accrue(address,address)", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "feeRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "flywheelBooster", values?: undefined): string;
    encodeFunctionData(functionFragment: "flywheelRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike, AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "performanceFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsAccrued", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setBooster", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setFlywheelRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setStrategyForRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "strategy", values?: undefined): string;
    encodeFunctionData(functionFragment: "strategyState", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateFeeSettings", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "userIndex", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrue(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrue(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelBooster", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "performanceFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBooster", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlywheelRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStrategyForRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategyState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeSettings", data: BytesLike): Result;
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
export declare namespace OwnershipTransferStartedEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferredEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SetStrategyEvent {
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
export declare namespace UpdatedFeeSettingsEvent {
    type InputTuple = [
        oldPerformanceFee: BigNumberish,
        newPerformanceFee: BigNumberish,
        oldFeeRecipient: AddressLike,
        newFeeRecipient: AddressLike
    ];
    type OutputTuple = [
        oldPerformanceFee: bigint,
        newPerformanceFee: bigint,
        oldFeeRecipient: string,
        newFeeRecipient: string
    ];
    interface OutputObject {
        oldPerformanceFee: bigint;
        newPerformanceFee: bigint;
        oldFeeRecipient: string;
        newFeeRecipient: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface HeparFlywheel extends BaseContract {
    connect(runner?: ContractRunner | null): HeparFlywheel;
    waitForDeployment(): Promise<this>;
    interface: HeparFlywheelInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    "accrue(address)": TypedContractMethod<[
        user: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    "accrue(address,address)": TypedContractMethod<[
        user: AddressLike,
        secondUser: AddressLike
    ], [
        [bigint, bigint]
    ], "nonpayable">;
    claimRewards: TypedContractMethod<[user: AddressLike], [void], "nonpayable">;
    feeRecipient: TypedContractMethod<[], [string], "view">;
    flywheelBooster: TypedContractMethod<[], [string], "view">;
    flywheelRewards: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        _rewardToken: AddressLike,
        _flywheelRewards: AddressLike,
        _flywheelBooster: AddressLike,
        _owner: AddressLike,
        _strategy: AddressLike
    ], [
        void
    ], "nonpayable">;
    owner: TypedContractMethod<[], [string], "view">;
    pendingOwner: TypedContractMethod<[], [string], "view">;
    performanceFee: TypedContractMethod<[], [bigint], "view">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    rewardToken: TypedContractMethod<[], [string], "view">;
    rewardsAccrued: TypedContractMethod<[
        user: AddressLike
    ], [
        bigint
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
    setStrategyForRewards: TypedContractMethod<[
        _strategy: AddressLike
    ], [
        void
    ], "nonpayable">;
    strategy: TypedContractMethod<[], [string], "view">;
    strategyState: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            index: bigint;
            lastUpdatedTimestamp: bigint;
        }
    ], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateFeeSettings: TypedContractMethod<[
        _performanceFee: BigNumberish,
        _feeRecipient: AddressLike
    ], [
        void
    ], "nonpayable">;
    userIndex: TypedContractMethod<[user: AddressLike], [bigint], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "accrue(address)"): TypedContractMethod<[user: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "accrue(address,address)"): TypedContractMethod<[
        user: AddressLike,
        secondUser: AddressLike
    ], [
        [bigint, bigint]
    ], "nonpayable">;
    getFunction(nameOrSignature: "claimRewards"): TypedContractMethod<[user: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "feeRecipient"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "flywheelBooster"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "flywheelRewards"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        _rewardToken: AddressLike,
        _flywheelRewards: AddressLike,
        _flywheelBooster: AddressLike,
        _owner: AddressLike,
        _strategy: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "performanceFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rewardsAccrued"): TypedContractMethod<[user: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "setBooster"): TypedContractMethod<[newBooster: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setFlywheelRewards"): TypedContractMethod<[
        newFlywheelRewards: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setStrategyForRewards"): TypedContractMethod<[_strategy: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "strategy"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "strategyState"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            index: bigint;
            lastUpdatedTimestamp: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateFeeSettings"): TypedContractMethod<[
        _performanceFee: BigNumberish,
        _feeRecipient: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "userIndex"): TypedContractMethod<[user: AddressLike], [bigint], "nonpayable">;
    getEvent(key: "AccrueRewards"): TypedContractEvent<AccrueRewardsEvent.InputTuple, AccrueRewardsEvent.OutputTuple, AccrueRewardsEvent.OutputObject>;
    getEvent(key: "ClaimRewards"): TypedContractEvent<ClaimRewardsEvent.InputTuple, ClaimRewardsEvent.OutputTuple, ClaimRewardsEvent.OutputObject>;
    getEvent(key: "FlywheelBoosterUpdate"): TypedContractEvent<FlywheelBoosterUpdateEvent.InputTuple, FlywheelBoosterUpdateEvent.OutputTuple, FlywheelBoosterUpdateEvent.OutputObject>;
    getEvent(key: "FlywheelRewardsUpdate"): TypedContractEvent<FlywheelRewardsUpdateEvent.InputTuple, FlywheelRewardsUpdateEvent.OutputTuple, FlywheelRewardsUpdateEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferStarted"): TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    getEvent(key: "SetStrategy"): TypedContractEvent<SetStrategyEvent.InputTuple, SetStrategyEvent.OutputTuple, SetStrategyEvent.OutputObject>;
    getEvent(key: "UpdatedFeeSettings"): TypedContractEvent<UpdatedFeeSettingsEvent.InputTuple, UpdatedFeeSettingsEvent.OutputTuple, UpdatedFeeSettingsEvent.OutputObject>;
    filters: {
        "AccrueRewards(address,address,uint256,uint256)": TypedContractEvent<AccrueRewardsEvent.InputTuple, AccrueRewardsEvent.OutputTuple, AccrueRewardsEvent.OutputObject>;
        AccrueRewards: TypedContractEvent<AccrueRewardsEvent.InputTuple, AccrueRewardsEvent.OutputTuple, AccrueRewardsEvent.OutputObject>;
        "ClaimRewards(address,uint256)": TypedContractEvent<ClaimRewardsEvent.InputTuple, ClaimRewardsEvent.OutputTuple, ClaimRewardsEvent.OutputObject>;
        ClaimRewards: TypedContractEvent<ClaimRewardsEvent.InputTuple, ClaimRewardsEvent.OutputTuple, ClaimRewardsEvent.OutputObject>;
        "FlywheelBoosterUpdate(address)": TypedContractEvent<FlywheelBoosterUpdateEvent.InputTuple, FlywheelBoosterUpdateEvent.OutputTuple, FlywheelBoosterUpdateEvent.OutputObject>;
        FlywheelBoosterUpdate: TypedContractEvent<FlywheelBoosterUpdateEvent.InputTuple, FlywheelBoosterUpdateEvent.OutputTuple, FlywheelBoosterUpdateEvent.OutputObject>;
        "FlywheelRewardsUpdate(address)": TypedContractEvent<FlywheelRewardsUpdateEvent.InputTuple, FlywheelRewardsUpdateEvent.OutputTuple, FlywheelRewardsUpdateEvent.OutputObject>;
        FlywheelRewardsUpdate: TypedContractEvent<FlywheelRewardsUpdateEvent.InputTuple, FlywheelRewardsUpdateEvent.OutputTuple, FlywheelRewardsUpdateEvent.OutputObject>;
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "OwnershipTransferStarted(address,address)": TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        OwnershipTransferStarted: TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        "SetStrategy(address)": TypedContractEvent<SetStrategyEvent.InputTuple, SetStrategyEvent.OutputTuple, SetStrategyEvent.OutputObject>;
        SetStrategy: TypedContractEvent<SetStrategyEvent.InputTuple, SetStrategyEvent.OutputTuple, SetStrategyEvent.OutputObject>;
        "UpdatedFeeSettings(uint256,uint256,address,address)": TypedContractEvent<UpdatedFeeSettingsEvent.InputTuple, UpdatedFeeSettingsEvent.OutputTuple, UpdatedFeeSettingsEvent.OutputObject>;
        UpdatedFeeSettings: TypedContractEvent<UpdatedFeeSettingsEvent.InputTuple, UpdatedFeeSettingsEvent.OutputTuple, UpdatedFeeSettingsEvent.OutputObject>;
    };
}
