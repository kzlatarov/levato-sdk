import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface FlashloanRouterExtensionInterface extends Interface {
    getFunction(nameOrSignature: "_getExtensionFunctions" | "_setIonicMarketOfAsset" | "acceptOwnership" | "asArray(address,address,address)" | "asArray(uint256)" | "asArray(address,address)" | "asArray(address)" | "executeOperation" | "flashloan" | "ionicMarketOfAsset" | "owner" | "pendingOwner" | "receiveFlashLoan(address,uint256,uint256,bytes)" | "receiveFlashLoan(address,uint256,bytes)" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Flash" | "Initialized" | "OwnershipTransferStarted" | "OwnershipTransferred"): EventFragment;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setIonicMarketOfAsset", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "asArray(address,address,address)", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "asArray(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "asArray(address,address)", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "asArray(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "executeOperation", values: [
        AddressLike[],
        BigNumberish[],
        BigNumberish[],
        AddressLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "flashloan", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "ionicMarketOfAsset", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan(address,uint256,uint256,bytes)", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan(address,uint256,bytes)", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setIonicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan(address,uint256,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan(address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
}
export declare namespace FlashEvent {
    type InputTuple = [
        receiver: AddressLike,
        borrowedAsset: AddressLike,
        amount: BigNumberish
    ];
    type OutputTuple = [
        receiver: string,
        borrowedAsset: string,
        amount: bigint
    ];
    interface OutputObject {
        receiver: string;
        borrowedAsset: string;
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
export interface FlashloanRouterExtension extends BaseContract {
    connect(runner?: ContractRunner | null): FlashloanRouterExtension;
    waitForDeployment(): Promise<this>;
    interface: FlashloanRouterExtensionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _getExtensionFunctions: TypedContractMethod<[], [string[]], "view">;
    _setIonicMarketOfAsset: TypedContractMethod<[
        asset: AddressLike,
        market: AddressLike
    ], [
        void
    ], "nonpayable">;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    "asArray(address,address,address)": TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike,
        value2: AddressLike
    ], [
        string[]
    ], "view">;
    "asArray(uint256)": TypedContractMethod<[
        value: BigNumberish
    ], [
        bigint[]
    ], "view">;
    "asArray(address,address)": TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike
    ], [
        string[]
    ], "view">;
    "asArray(address)": TypedContractMethod<[
        value: AddressLike
    ], [
        string[]
    ], "view">;
    executeOperation: TypedContractMethod<[
        assets: AddressLike[],
        amounts: BigNumberish[],
        premiums: BigNumberish[],
        initiator: AddressLike,
        params: BytesLike
    ], [
        boolean
    ], "nonpayable">;
    flashloan: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    ionicMarketOfAsset: TypedContractMethod<[
        arg0: AddressLike
    ], [
        string
    ], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    pendingOwner: TypedContractMethod<[], [string], "view">;
    "receiveFlashLoan(address,uint256,uint256,bytes)": TypedContractMethod<[
        borrowedAsset: AddressLike,
        amount: BigNumberish,
        premium: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    "receiveFlashLoan(address,uint256,bytes)": TypedContractMethod<[
        borrowedAsset: AddressLike,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_getExtensionFunctions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "_setIonicMarketOfAsset"): TypedContractMethod<[
        asset: AddressLike,
        market: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "asArray(address,address,address)"): TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike,
        value2: AddressLike
    ], [
        string[]
    ], "view">;
    getFunction(nameOrSignature: "asArray(uint256)"): TypedContractMethod<[value: BigNumberish], [bigint[]], "view">;
    getFunction(nameOrSignature: "asArray(address,address)"): TypedContractMethod<[
        value0: AddressLike,
        value1: AddressLike
    ], [
        string[]
    ], "view">;
    getFunction(nameOrSignature: "asArray(address)"): TypedContractMethod<[value: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "executeOperation"): TypedContractMethod<[
        assets: AddressLike[],
        amounts: BigNumberish[],
        premiums: BigNumberish[],
        initiator: AddressLike,
        params: BytesLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "flashloan"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "ionicMarketOfAsset"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "receiveFlashLoan(address,uint256,uint256,bytes)"): TypedContractMethod<[
        borrowedAsset: AddressLike,
        amount: BigNumberish,
        premium: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "receiveFlashLoan(address,uint256,bytes)"): TypedContractMethod<[
        borrowedAsset: AddressLike,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getEvent(key: "Flash"): TypedContractEvent<FlashEvent.InputTuple, FlashEvent.OutputTuple, FlashEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferStarted"): TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    filters: {
        "Flash(address,address,uint256)": TypedContractEvent<FlashEvent.InputTuple, FlashEvent.OutputTuple, FlashEvent.OutputObject>;
        Flash: TypedContractEvent<FlashEvent.InputTuple, FlashEvent.OutputTuple, FlashEvent.OutputObject>;
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "OwnershipTransferStarted(address,address)": TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        OwnershipTransferStarted: TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    };
}
