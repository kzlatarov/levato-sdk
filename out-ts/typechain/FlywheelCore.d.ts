import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FlywheelCoreInterface extends utils.Interface {
    functions: {
        "ONE()": FunctionFragment;
        "accrue(address,address)": FunctionFragment;
        "accrue(address,address,address)": FunctionFragment;
        "addStrategyForRewards(address)": FunctionFragment;
        "authority()": FunctionFragment;
        "claimRewards(address)": FunctionFragment;
        "flywheelBooster()": FunctionFragment;
        "flywheelRewards()": FunctionFragment;
        "owner()": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "rewardsAccrued(address)": FunctionFragment;
        "setAuthority(address)": FunctionFragment;
        "setBooster(address)": FunctionFragment;
        "setFlywheelRewards(address)": FunctionFragment;
        "strategyState(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "userIndex(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ONE" | "accrue(address,address)" | "accrue(address,address,address)" | "addStrategyForRewards" | "authority" | "claimRewards" | "flywheelBooster" | "flywheelRewards" | "owner" | "rewardToken" | "rewardsAccrued" | "setAuthority" | "setBooster" | "setFlywheelRewards" | "strategyState" | "transferOwnership" | "userIndex"): FunctionFragment;
    encodeFunctionData(functionFragment: "ONE", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrue(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "accrue(address,address,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "addStrategyForRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "authority", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "flywheelBooster", values?: undefined): string;
    encodeFunctionData(functionFragment: "flywheelRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsAccrued", values: [string]): string;
    encodeFunctionData(functionFragment: "setAuthority", values: [string]): string;
    encodeFunctionData(functionFragment: "setBooster", values: [string]): string;
    encodeFunctionData(functionFragment: "setFlywheelRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "strategyState", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "userIndex", values: [string, string]): string;
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
    events: {
        "AccrueRewards(address,address,uint256,uint256)": EventFragment;
        "AddStrategy(address)": EventFragment;
        "AuthorityUpdated(address,address)": EventFragment;
        "ClaimRewards(address,uint256)": EventFragment;
        "FlywheelBoosterUpdate(address)": EventFragment;
        "FlywheelRewardsUpdate(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccrueRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddStrategy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlywheelBoosterUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlywheelRewardsUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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
export interface AddStrategyEventObject {
    newStrategy: string;
}
export type AddStrategyEvent = TypedEvent<[string], AddStrategyEventObject>;
export type AddStrategyEventFilter = TypedEventFilter<AddStrategyEvent>;
export interface AuthorityUpdatedEventObject {
    user: string;
    newAuthority: string;
}
export type AuthorityUpdatedEvent = TypedEvent<[
    string,
    string
], AuthorityUpdatedEventObject>;
export type AuthorityUpdatedEventFilter = TypedEventFilter<AuthorityUpdatedEvent>;
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
export interface OwnershipTransferredEventObject {
    user: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface FlywheelCore extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FlywheelCoreInterface;
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
        ONE(overrides?: CallOverrides): Promise<[BigNumber]>;
        "accrue(address,address)"(strategy: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addStrategyForRewards(strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        authority(overrides?: CallOverrides): Promise<[string]>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flywheelBooster(overrides?: CallOverrides): Promise<[string]>;
        flywheelRewards(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        setAuthority(newAuthority: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setBooster(newBooster: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        strategyState(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            index: BigNumber;
            lastUpdatedTimestamp: number;
        }>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    ONE(overrides?: CallOverrides): Promise<BigNumber>;
    "accrue(address,address)"(strategy: string, user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addStrategyForRewards(strategy: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    authority(overrides?: CallOverrides): Promise<string>;
    claimRewards(user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flywheelBooster(overrides?: CallOverrides): Promise<string>;
    flywheelRewards(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    setAuthority(newAuthority: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setBooster(newBooster: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    strategyState(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        number
    ] & {
        index: BigNumber;
        lastUpdatedTimestamp: number;
    }>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        ONE(overrides?: CallOverrides): Promise<BigNumber>;
        "accrue(address,address)"(strategy: string, user: string, overrides?: CallOverrides): Promise<BigNumber>;
        "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        addStrategyForRewards(strategy: string, overrides?: CallOverrides): Promise<void>;
        authority(overrides?: CallOverrides): Promise<string>;
        claimRewards(user: string, overrides?: CallOverrides): Promise<void>;
        flywheelBooster(overrides?: CallOverrides): Promise<string>;
        flywheelRewards(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(newAuthority: string, overrides?: CallOverrides): Promise<void>;
        setBooster(newBooster: string, overrides?: CallOverrides): Promise<void>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: CallOverrides): Promise<void>;
        strategyState(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            index: BigNumber;
            lastUpdatedTimestamp: number;
        }>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AccrueRewards(address,address,uint256,uint256)"(strategy?: string | null, user?: string | null, rewardsDelta?: null, rewardsIndex?: null): AccrueRewardsEventFilter;
        AccrueRewards(strategy?: string | null, user?: string | null, rewardsDelta?: null, rewardsIndex?: null): AccrueRewardsEventFilter;
        "AddStrategy(address)"(newStrategy?: string | null): AddStrategyEventFilter;
        AddStrategy(newStrategy?: string | null): AddStrategyEventFilter;
        "AuthorityUpdated(address,address)"(user?: string | null, newAuthority?: string | null): AuthorityUpdatedEventFilter;
        AuthorityUpdated(user?: string | null, newAuthority?: string | null): AuthorityUpdatedEventFilter;
        "ClaimRewards(address,uint256)"(user?: string | null, amount?: null): ClaimRewardsEventFilter;
        ClaimRewards(user?: string | null, amount?: null): ClaimRewardsEventFilter;
        "FlywheelBoosterUpdate(address)"(newBooster?: string | null): FlywheelBoosterUpdateEventFilter;
        FlywheelBoosterUpdate(newBooster?: string | null): FlywheelBoosterUpdateEventFilter;
        "FlywheelRewardsUpdate(address)"(newFlywheelRewards?: string | null): FlywheelRewardsUpdateEventFilter;
        FlywheelRewardsUpdate(newFlywheelRewards?: string | null): FlywheelRewardsUpdateEventFilter;
        "OwnershipTransferred(address,address)"(user?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(user?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        ONE(overrides?: CallOverrides): Promise<BigNumber>;
        "accrue(address,address)"(strategy: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addStrategyForRewards(strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        authority(overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flywheelBooster(overrides?: CallOverrides): Promise<BigNumber>;
        flywheelRewards(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setAuthority(newAuthority: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setBooster(newBooster: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        strategyState(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ONE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "accrue(address,address)"(strategy: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "accrue(address,address,address)"(strategy: string, user: string, secondUser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addStrategyForRewards(strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flywheelBooster(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flywheelRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsAccrued(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAuthority(newAuthority: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setBooster(newBooster: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setFlywheelRewards(newFlywheelRewards: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        strategyState(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        userIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
