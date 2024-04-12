import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface HeparERC4626Interface extends Interface {
    getFunction(nameOrSignature: "acceptOwnership" | "allowance" | "approve" | "asset" | "balanceOf" | "convertToAssets" | "convertToShares" | "decimals" | "decreaseAllowance" | "deposit" | "emergencyWithdrawAndPause" | "feeRecipient" | "increaseAllowance" | "maxDeposit" | "maxMint" | "maxRedeem" | "maxWithdraw" | "mint" | "name" | "owner" | "paused" | "pendingOwner" | "performanceFee" | "previewDeposit" | "previewMint" | "previewRedeem" | "previewWithdraw" | "redeem" | "renounceOwnership" | "shutdown" | "symbol" | "takePerformanceFee" | "totalAssets" | "totalSupply" | "transfer" | "transferFrom" | "transferOwnership" | "unpause" | "updateFeeSettings" | "vaultShareHWM" | "withdraw" | "withdrawAccruedFees"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Approval" | "Deposit" | "Initialized" | "OwnershipTransferStarted" | "OwnershipTransferred" | "Paused" | "Transfer" | "Unpaused" | "UpdatedFeeSettings" | "Withdraw"): EventFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "asset", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "convertToAssets", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "convertToShares", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "emergencyWithdrawAndPause", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "maxDeposit", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "maxMint", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "maxRedeem", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "maxWithdraw", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "performanceFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "previewDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewMint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewRedeem", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "previewWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "shutdown", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "takePerformanceFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateFeeSettings", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "vaultShareHWM", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "withdrawAccruedFees", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdrawAndPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRecipient", data: BytesLike): Result;
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
}
export declare namespace ApprovalEvent {
    type InputTuple = [
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [owner: string, spender: string, value: bigint];
    interface OutputObject {
        owner: string;
        spender: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DepositEvent {
    type InputTuple = [
        sender: AddressLike,
        owner: AddressLike,
        assets: BigNumberish,
        shares: BigNumberish
    ];
    type OutputTuple = [
        sender: string,
        owner: string,
        assets: bigint,
        shares: bigint
    ];
    interface OutputObject {
        sender: string;
        owner: string;
        assets: bigint;
        shares: bigint;
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
export declare namespace PausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferEvent {
    type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [from: string, to: string, value: bigint];
    interface OutputObject {
        from: string;
        to: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
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
export declare namespace WithdrawEvent {
    type InputTuple = [
        sender: AddressLike,
        receiver: AddressLike,
        owner: AddressLike,
        assets: BigNumberish,
        shares: BigNumberish
    ];
    type OutputTuple = [
        sender: string,
        receiver: string,
        owner: string,
        assets: bigint,
        shares: bigint
    ];
    interface OutputObject {
        sender: string;
        receiver: string;
        owner: string;
        assets: bigint;
        shares: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface HeparERC4626 extends BaseContract {
    connect(runner?: ContractRunner | null): HeparERC4626;
    waitForDeployment(): Promise<this>;
    interface: HeparERC4626Interface;
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
    allowance: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    asset: TypedContractMethod<[], [string], "view">;
    balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    convertToAssets: TypedContractMethod<[
        shares: BigNumberish
    ], [
        bigint
    ], "view">;
    convertToShares: TypedContractMethod<[
        assets: BigNumberish
    ], [
        bigint
    ], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    decreaseAllowance: TypedContractMethod<[
        spender: AddressLike,
        subtractedValue: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    deposit: TypedContractMethod<[
        assets: BigNumberish,
        receiver: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    emergencyWithdrawAndPause: TypedContractMethod<[], [void], "nonpayable">;
    feeRecipient: TypedContractMethod<[], [string], "view">;
    increaseAllowance: TypedContractMethod<[
        spender: AddressLike,
        addedValue: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    maxDeposit: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    maxMint: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    maxRedeem: TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    maxWithdraw: TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    mint: TypedContractMethod<[
        shares: BigNumberish,
        receiver: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    name: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    paused: TypedContractMethod<[], [boolean], "view">;
    pendingOwner: TypedContractMethod<[], [string], "view">;
    performanceFee: TypedContractMethod<[], [bigint], "view">;
    previewDeposit: TypedContractMethod<[assets: BigNumberish], [bigint], "view">;
    previewMint: TypedContractMethod<[shares: BigNumberish], [bigint], "view">;
    previewRedeem: TypedContractMethod<[shares: BigNumberish], [bigint], "view">;
    previewWithdraw: TypedContractMethod<[
        assets: BigNumberish
    ], [
        bigint
    ], "view">;
    redeem: TypedContractMethod<[
        shares: BigNumberish,
        receiver: AddressLike,
        owner: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    shutdown: TypedContractMethod<[market: AddressLike], [bigint], "nonpayable">;
    symbol: TypedContractMethod<[], [string], "view">;
    takePerformanceFee: TypedContractMethod<[], [void], "nonpayable">;
    totalAssets: TypedContractMethod<[], [bigint], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    updateFeeSettings: TypedContractMethod<[
        newPerformanceFee: BigNumberish,
        newFeeRecipient: AddressLike
    ], [
        void
    ], "nonpayable">;
    vaultShareHWM: TypedContractMethod<[], [bigint], "view">;
    withdraw: TypedContractMethod<[
        assets: BigNumberish,
        receiver: AddressLike,
        owner: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    withdrawAccruedFees: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "asset"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "convertToAssets"): TypedContractMethod<[shares: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "convertToShares"): TypedContractMethod<[assets: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "decreaseAllowance"): TypedContractMethod<[
        spender: AddressLike,
        subtractedValue: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
        assets: BigNumberish,
        receiver: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "emergencyWithdrawAndPause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "feeRecipient"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "increaseAllowance"): TypedContractMethod<[
        spender: AddressLike,
        addedValue: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "maxDeposit"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "maxMint"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "maxRedeem"): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "maxWithdraw"): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        shares: BigNumberish,
        receiver: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "pendingOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "performanceFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "previewDeposit"): TypedContractMethod<[assets: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "previewMint"): TypedContractMethod<[shares: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "previewRedeem"): TypedContractMethod<[shares: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "previewWithdraw"): TypedContractMethod<[assets: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "redeem"): TypedContractMethod<[
        shares: BigNumberish,
        receiver: AddressLike,
        owner: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "shutdown"): TypedContractMethod<[market: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "takePerformanceFee"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "totalAssets"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateFeeSettings"): TypedContractMethod<[
        newPerformanceFee: BigNumberish,
        newFeeRecipient: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "vaultShareHWM"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
        assets: BigNumberish,
        receiver: AddressLike,
        owner: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "withdrawAccruedFees"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "Deposit"): TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferStarted"): TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "UpdatedFeeSettings"): TypedContractEvent<UpdatedFeeSettingsEvent.InputTuple, UpdatedFeeSettingsEvent.OutputTuple, UpdatedFeeSettingsEvent.OutputObject>;
    getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    filters: {
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "Deposit(address,address,uint256,uint256)": TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
        Deposit: TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "OwnershipTransferStarted(address,address)": TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        OwnershipTransferStarted: TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "UpdatedFeeSettings(uint256,uint256,address,address)": TypedContractEvent<UpdatedFeeSettingsEvent.InputTuple, UpdatedFeeSettingsEvent.OutputTuple, UpdatedFeeSettingsEvent.OutputObject>;
        UpdatedFeeSettings: TypedContractEvent<UpdatedFeeSettingsEvent.InputTuple, UpdatedFeeSettingsEvent.OutputTuple, UpdatedFeeSettingsEvent.OutputObject>;
        "Withdraw(address,address,address,uint256,uint256)": TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
        Withdraw: TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    };
}
