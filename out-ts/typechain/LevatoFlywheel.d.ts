import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LevatoFlywheelInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "accrue(address)": FunctionFragment;
        "accrue(address,address)": FunctionFragment;
        "claimRewards(address)": FunctionFragment;
        "feeRecipient()": FunctionFragment;
        "flywheelBooster()": FunctionFragment;
        "flywheelRewards()": FunctionFragment;
        "initialize(address,address,address,address,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "performanceFee()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "rewardsAccrued(address)": FunctionFragment;
        "setBooster(address)": FunctionFragment;
        "setFlywheelRewards(address)": FunctionFragment;
        "setStrategyForRewards(address)": FunctionFragment;
        "strategy()": FunctionFragment;
        "strategyState()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateFeeSettings(uint256,address)": FunctionFragment;
        "userIndex(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "accrue(address)" | "accrue(address,address)" | "claimRewards" | "feeRecipient" | "flywheelBooster" | "flywheelRewards" | "initialize" | "owner" | "pendingOwner" | "performanceFee" | "renounceOwnership" | "rewardToken" | "rewardsAccrued" | "setBooster" | "setFlywheelRewards" | "setStrategyForRewards" | "strategy" | "strategyState" | "transferOwnership" | "updateFeeSettings" | "userIndex"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrue(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "accrue(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "feeRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "flywheelBooster", values?: undefined): string;
    encodeFunctionData(functionFragment: "flywheelRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "performanceFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsAccrued", values: [string]): string;
    encodeFunctionData(functionFragment: "setBooster", values: [string]): string;
    encodeFunctionData(functionFragment: "setFlywheelRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "setStrategyForRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "strategy", values?: undefined): string;
    encodeFunctionData(functionFragment: "strategyState", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateFeeSettings", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "userIndex", values: [string]): string;
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
    events: {
        "AccrueRewards(address,address,uint256,uint256)": EventFragment;
        "ClaimRewards(address,uint256)": EventFragment;
        "FlywheelBoosterUpdate(address)": EventFragment;
        "FlywheelRewardsUpdate(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferStarted(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "SetStrategy(address)": EventFragment;
        "UpdatedFeeSettings(uint256,uint256,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccrueRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlywheelBoosterUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlywheelRewardsUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetStrategy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedFeeSettings"): EventFragment;
}
export interface AccrueRewardsEventObject {
    strategy: string;
    user: string;
    rewardsDelta: BigNumber;
    rewardsIndex: BigNumber;
}
export type AccrueRewardsEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], AccrueRewardsEventObject>;
export type AccrueRewardsEventFilter = TypedEventFilter<AccrueRewardsEvent>;
export interface ClaimRewardsEventObject {
    user: string;
    amount: BigNumber;
}
export type ClaimRewardsEvent = TypedEvent<[
    string,
    BigNumber
], ClaimRewardsEventObject>;
export type ClaimRewardsEventFilter = TypedEventFilter<ClaimRewardsEvent>;
export interface FlywheelBoosterUpdateEventObject {
    newBooster: string;
}
export type FlywheelBoosterUpdateEvent = TypedEvent<[
    string
], FlywheelBoosterUpdateEventObject>;
export type FlywheelBoosterUpdateEventFilter = TypedEventFilter<FlywheelBoosterUpdateEvent>;
export interface FlywheelRewardsUpdateEventObject {
    newFlywheelRewards: string;
}
export type FlywheelRewardsUpdateEvent = TypedEvent<[
    string
], FlywheelRewardsUpdateEventObject>;
export type FlywheelRewardsUpdateEventFilter = TypedEventFilter<FlywheelRewardsUpdateEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferStartedEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferStartedEventObject>;
export type OwnershipTransferStartedEventFilter = TypedEventFilter<OwnershipTransferStartedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface SetStrategyEventObject {
    newStrategy: string;
}
export type SetStrategyEvent = TypedEvent<[string], SetStrategyEventObject>;
export type SetStrategyEventFilter = TypedEventFilter<SetStrategyEvent>;
export interface UpdatedFeeSettingsEventObject {
    oldPerformanceFee: BigNumber;
    newPerformanceFee: BigNumber;
    oldFeeRecipient: string;
    newFeeRecipient: string;
}
export type UpdatedFeeSettingsEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    string
], UpdatedFeeSettingsEventObject>;
export type UpdatedFeeSettingsEventFilter = TypedEventFilter<UpdatedFeeSettingsEvent>;
export interface LevatoFlywheel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LevatoFlywheelInterface;
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
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "accrue(address)"(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "accrue(address,address)"(user: string, secondUser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        feeRecipient(overrides?: CallOverrides): Promise<[string]>;
        flywheelBooster(overrides?: CallOverrides): Promise<[string]>;
        flywheelRewards(overrides?: CallOverrides): Promise<[string]>;
        initialize(_rewardToken: string, _flywheelRewards: string, _flywheelBooster: string, _owner: string, _strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        performanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        rewardsAccrued(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setBooster(newBooster: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setStrategyForRewards(_strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        strategy(overrides?: CallOverrides): Promise<[string]>;
        strategyState(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateFeeSettings(_performanceFee: BigNumberish, _feeRecipient: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        userIndex(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "accrue(address)"(user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "accrue(address,address)"(user: string, secondUser: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimRewards(user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    feeRecipient(overrides?: CallOverrides): Promise<string>;
    flywheelBooster(overrides?: CallOverrides): Promise<string>;
    flywheelRewards(overrides?: CallOverrides): Promise<string>;
    initialize(_rewardToken: string, _flywheelRewards: string, _flywheelBooster: string, _owner: string, _strategy: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    performanceFee(overrides?: CallOverrides): Promise<BigNumber>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    rewardsAccrued(user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setBooster(newBooster: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setStrategyForRewards(_strategy: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    strategy(overrides?: CallOverrides): Promise<string>;
    strategyState(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateFeeSettings(_performanceFee: BigNumberish, _feeRecipient: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    userIndex(user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        "accrue(address)"(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        "accrue(address,address)"(user: string, secondUser: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        claimRewards(user: string, overrides?: CallOverrides): Promise<void>;
        feeRecipient(overrides?: CallOverrides): Promise<string>;
        flywheelBooster(overrides?: CallOverrides): Promise<string>;
        flywheelRewards(overrides?: CallOverrides): Promise<string>;
        initialize(_rewardToken: string, _flywheelRewards: string, _flywheelBooster: string, _owner: string, _strategy: string, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        performanceFee(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        rewardsAccrued(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        setBooster(newBooster: string, overrides?: CallOverrides): Promise<void>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: CallOverrides): Promise<void>;
        setStrategyForRewards(_strategy: string, overrides?: CallOverrides): Promise<void>;
        strategy(overrides?: CallOverrides): Promise<string>;
        strategyState(overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            index: BigNumber;
            lastUpdatedTimestamp: number;
        }>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateFeeSettings(_performanceFee: BigNumberish, _feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        userIndex(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AccrueRewards(address,address,uint256,uint256)"(strategy?: string | null, user?: string | null, rewardsDelta?: null, rewardsIndex?: null): AccrueRewardsEventFilter;
        AccrueRewards(strategy?: string | null, user?: string | null, rewardsDelta?: null, rewardsIndex?: null): AccrueRewardsEventFilter;
        "ClaimRewards(address,uint256)"(user?: string | null, amount?: null): ClaimRewardsEventFilter;
        ClaimRewards(user?: string | null, amount?: null): ClaimRewardsEventFilter;
        "FlywheelBoosterUpdate(address)"(newBooster?: string | null): FlywheelBoosterUpdateEventFilter;
        FlywheelBoosterUpdate(newBooster?: string | null): FlywheelBoosterUpdateEventFilter;
        "FlywheelRewardsUpdate(address)"(newFlywheelRewards?: string | null): FlywheelRewardsUpdateEventFilter;
        FlywheelRewardsUpdate(newFlywheelRewards?: string | null): FlywheelRewardsUpdateEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferStarted(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        OwnershipTransferStarted(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "SetStrategy(address)"(newStrategy?: string | null): SetStrategyEventFilter;
        SetStrategy(newStrategy?: string | null): SetStrategyEventFilter;
        "UpdatedFeeSettings(uint256,uint256,address,address)"(oldPerformanceFee?: null, newPerformanceFee?: null, oldFeeRecipient?: null, newFeeRecipient?: null): UpdatedFeeSettingsEventFilter;
        UpdatedFeeSettings(oldPerformanceFee?: null, newPerformanceFee?: null, oldFeeRecipient?: null, newFeeRecipient?: null): UpdatedFeeSettingsEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "accrue(address)"(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "accrue(address,address)"(user: string, secondUser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        feeRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        flywheelBooster(overrides?: CallOverrides): Promise<BigNumber>;
        flywheelRewards(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_rewardToken: string, _flywheelRewards: string, _flywheelBooster: string, _owner: string, _strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        performanceFee(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsAccrued(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setBooster(newBooster: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setStrategyForRewards(_strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        strategy(overrides?: CallOverrides): Promise<BigNumber>;
        strategyState(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateFeeSettings(_performanceFee: BigNumberish, _feeRecipient: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        userIndex(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "accrue(address)"(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "accrue(address,address)"(user: string, secondUser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        feeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flywheelBooster(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flywheelRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_rewardToken: string, _flywheelRewards: string, _flywheelBooster: string, _owner: string, _strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        performanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsAccrued(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setBooster(newBooster: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setStrategyForRewards(_strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        strategy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        strategyState(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateFeeSettings(_performanceFee: BigNumberish, _feeRecipient: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        userIndex(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
