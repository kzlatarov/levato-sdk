import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FlywheelERC4626Interface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "asset()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "claimRewards()": FunctionFragment;
        "claimUserRewards()": FunctionFragment;
        "convertToAssets(uint256)": FunctionFragment;
        "convertToShares(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "deposit(uint256,address)": FunctionFragment;
        "emergencyWithdrawAndPause()": FunctionFragment;
        "feeRecipient()": FunctionFragment;
        "flywheel()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "maxDeposit(address)": FunctionFragment;
        "maxMint(address)": FunctionFragment;
        "maxRedeem(address)": FunctionFragment;
        "maxWithdraw(address)": FunctionFragment;
        "mint(uint256,address)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "paused()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "performanceFee()": FunctionFragment;
        "previewDeposit(uint256)": FunctionFragment;
        "previewMint(uint256)": FunctionFragment;
        "previewRedeem(uint256)": FunctionFragment;
        "previewWithdraw(uint256)": FunctionFragment;
        "redeem(uint256,address,address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rewardDestination()": FunctionFragment;
        "rewardTokens(uint256)": FunctionFragment;
        "setRewardDestination(address)": FunctionFragment;
        "shutdown(address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "takePerformanceFee()": FunctionFragment;
        "totalAssets()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unpause()": FunctionFragment;
        "updateFeeSettings(uint256,address)": FunctionFragment;
        "vaultShareHWM()": FunctionFragment;
        "withdraw(uint256,address,address)": FunctionFragment;
        "withdrawAccruedFees()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "allowance" | "approve" | "asset" | "balanceOf" | "claimRewards" | "claimUserRewards" | "convertToAssets" | "convertToShares" | "decimals" | "decreaseAllowance" | "deposit" | "emergencyWithdrawAndPause" | "feeRecipient" | "flywheel" | "increaseAllowance" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "owner" | "paused" | "pendingOwner" | "performanceFee" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "renounceOwnership" | "rewardDestination" | "rewardTokens" | "setRewardDestination" | "shutdown" | "symbol" | "takePerformanceFee" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "unpause" | "updateFeeSettings" | "vaultShareHWM" | "withdraw" | "withdrawAccruedFees"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "claimRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimUserRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "convertToAssets", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "convertToShares", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "emergencyWithdrawAndPause", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "flywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "maxDeposit", values: [string]): string;
    encodeFunctionData(functionFragment: "maxMint", values: [string]): string;
    encodeFunctionData(functionFragment: "maxRedeem", values: [string]): string;
    encodeFunctionData(functionFragment: "maxWithdraw", values: [string]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "performanceFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "previewDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewMint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewRedeem", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardDestination", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRewardDestination", values: [string]): string;
    encodeFunctionData(functionFragment: "shutdown", values: [string]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "takePerformanceFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateFeeSettings", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "vaultShareHWM", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "withdrawAccruedFees", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimUserRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdrawAndPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "performanceFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardDestination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRewardDestination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shutdown", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takePerformanceFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeSettings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultShareHWM", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAccruedFees", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ClaimTokenRewards(address,uint256)": EventFragment;
        "Deposit(address,address,uint256,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferStarted(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "RewardDestinationUpdate(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "UpdatedFeeSettings(uint256,uint256,address,address)": EventFragment;
        "Withdraw(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimTokenRewards"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardDestinationUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedFeeSettings"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ClaimTokenRewardsEventObject {
    rewardToken: string;
    amount: BigNumber;
}
export type ClaimTokenRewardsEvent = TypedEvent<[
    string,
    BigNumber
], ClaimTokenRewardsEventObject>;
export type ClaimTokenRewardsEventFilter = TypedEventFilter<ClaimTokenRewardsEvent>;
export interface DepositEventObject {
    sender: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export type DepositEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], DepositEventObject>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
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
export interface PausedEventObject {
    account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface RewardDestinationUpdateEventObject {
    newDestination: string;
}
export type RewardDestinationUpdateEvent = TypedEvent<[
    string
], RewardDestinationUpdateEventObject>;
export type RewardDestinationUpdateEventFilter = TypedEventFilter<RewardDestinationUpdateEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UnpausedEventObject {
    account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
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
export interface WithdrawEventObject {
    sender: string;
    receiver: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface FlywheelERC4626 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FlywheelERC4626Interface;
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
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        asset(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        claimRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimUserRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        emergencyWithdrawAndPause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        feeRecipient(overrides?: CallOverrides): Promise<[string]>;
        flywheel(overrides?: CallOverrides): Promise<[string]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        maxDeposit(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxMint(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        performanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardDestination(overrides?: CallOverrides): Promise<[string]>;
        rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setRewardDestination(newDestination: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        shutdown(market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        takePerformanceFee(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateFeeSettings(newPerformanceFee: BigNumberish, newFeeRecipient: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vaultShareHWM(overrides?: CallOverrides): Promise<[BigNumber]>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawAccruedFees(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    asset(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    claimRewards(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimUserRewards(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    emergencyWithdrawAndPause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    feeRecipient(overrides?: CallOverrides): Promise<string>;
    flywheel(overrides?: CallOverrides): Promise<string>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    performanceFee(overrides?: CallOverrides): Promise<BigNumber>;
    previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardDestination(overrides?: CallOverrides): Promise<string>;
    rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setRewardDestination(newDestination: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    shutdown(market: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    takePerformanceFee(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateFeeSettings(newPerformanceFee: BigNumberish, newFeeRecipient: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vaultShareHWM(overrides?: CallOverrides): Promise<BigNumber>;
    withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawAccruedFees(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        asset(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(overrides?: CallOverrides): Promise<void>;
        claimUserRewards(overrides?: CallOverrides): Promise<BigNumber>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        deposit(assets: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdrawAndPause(overrides?: CallOverrides): Promise<void>;
        feeRecipient(overrides?: CallOverrides): Promise<string>;
        flywheel(overrides?: CallOverrides): Promise<string>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        performanceFee(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rewardDestination(overrides?: CallOverrides): Promise<string>;
        rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setRewardDestination(newDestination: string, overrides?: CallOverrides): Promise<void>;
        shutdown(market: string, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        takePerformanceFee(overrides?: CallOverrides): Promise<void>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        updateFeeSettings(newPerformanceFee: BigNumberish, newFeeRecipient: string, overrides?: CallOverrides): Promise<void>;
        vaultShareHWM(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawAccruedFees(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "ClaimTokenRewards(address,uint256)"(rewardToken?: string | null, amount?: null): ClaimTokenRewardsEventFilter;
        ClaimTokenRewards(rewardToken?: string | null, amount?: null): ClaimTokenRewardsEventFilter;
        "Deposit(address,address,uint256,uint256)"(sender?: string | null, owner?: string | null, assets?: null, shares?: null): DepositEventFilter;
        Deposit(sender?: string | null, owner?: string | null, assets?: null, shares?: null): DepositEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferStarted(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        OwnershipTransferStarted(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RewardDestinationUpdate(address)"(newDestination?: string | null): RewardDestinationUpdateEventFilter;
        RewardDestinationUpdate(newDestination?: string | null): RewardDestinationUpdateEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "UpdatedFeeSettings(uint256,uint256,address,address)"(oldPerformanceFee?: null, newPerformanceFee?: null, oldFeeRecipient?: null, newFeeRecipient?: null): UpdatedFeeSettingsEventFilter;
        UpdatedFeeSettings(oldPerformanceFee?: null, newPerformanceFee?: null, oldFeeRecipient?: null, newFeeRecipient?: null): UpdatedFeeSettingsEventFilter;
        "Withdraw(address,address,address,uint256,uint256)"(sender?: string | null, receiver?: string | null, owner?: string | null, assets?: null, shares?: null): WithdrawEventFilter;
        Withdraw(sender?: string | null, receiver?: string | null, owner?: string | null, assets?: null, shares?: null): WithdrawEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        asset(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        claimRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimUserRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        emergencyWithdrawAndPause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        feeRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        flywheel(overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        performanceFee(overrides?: CallOverrides): Promise<BigNumber>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardDestination(overrides?: CallOverrides): Promise<BigNumber>;
        rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setRewardDestination(newDestination: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        shutdown(market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        takePerformanceFee(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        totalAssets(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateFeeSettings(newPerformanceFee: BigNumberish, newFeeRecipient: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vaultShareHWM(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawAccruedFees(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimUserRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deposit(assets: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        emergencyWithdrawAndPause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        feeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flywheel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        maxDeposit(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMint(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxRedeem(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxWithdraw(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(shares: BigNumberish, receiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        performanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardDestination(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRewardDestination(newDestination: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        shutdown(market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        takePerformanceFee(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateFeeSettings(newPerformanceFee: BigNumberish, newFeeRecipient: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vaultShareHWM(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawAccruedFees(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
