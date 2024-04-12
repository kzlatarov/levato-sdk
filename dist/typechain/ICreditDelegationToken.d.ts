import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface ICreditDelegationTokenInterface extends Interface {
    getFunction(nameOrSignature: "approveDelegation" | "borrowAllowance" | "delegationWithSig"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowAllowanceDelegated"): EventFragment;
    encodeFunctionData(functionFragment: "approveDelegation", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "delegationWithSig", values: [
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "approveDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegationWithSig", data: BytesLike): Result;
}
export declare namespace BorrowAllowanceDelegatedEvent {
    type InputTuple = [
        fromUser: AddressLike,
        toUser: AddressLike,
        asset: AddressLike,
        amount: BigNumberish
    ];
    type OutputTuple = [
        fromUser: string,
        toUser: string,
        asset: string,
        amount: bigint
    ];
    interface OutputObject {
        fromUser: string;
        toUser: string;
        asset: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ICreditDelegationToken extends BaseContract {
    connect(runner?: ContractRunner | null): ICreditDelegationToken;
    waitForDeployment(): Promise<this>;
    interface: ICreditDelegationTokenInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    approveDelegation: TypedContractMethod<[
        delegatee: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    borrowAllowance: TypedContractMethod<[
        fromUser: AddressLike,
        toUser: AddressLike
    ], [
        bigint
    ], "view">;
    delegationWithSig: TypedContractMethod<[
        delegator: AddressLike,
        delegatee: AddressLike,
        value: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "approveDelegation"): TypedContractMethod<[
        delegatee: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "borrowAllowance"): TypedContractMethod<[
        fromUser: AddressLike,
        toUser: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "delegationWithSig"): TypedContractMethod<[
        delegator: AddressLike,
        delegatee: AddressLike,
        value: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "BorrowAllowanceDelegated"): TypedContractEvent<BorrowAllowanceDelegatedEvent.InputTuple, BorrowAllowanceDelegatedEvent.OutputTuple, BorrowAllowanceDelegatedEvent.OutputObject>;
    filters: {
        "BorrowAllowanceDelegated(address,address,address,uint256)": TypedContractEvent<BorrowAllowanceDelegatedEvent.InputTuple, BorrowAllowanceDelegatedEvent.OutputTuple, BorrowAllowanceDelegatedEvent.OutputObject>;
        BorrowAllowanceDelegated: TypedContractEvent<BorrowAllowanceDelegatedEvent.InputTuple, BorrowAllowanceDelegatedEvent.OutputTuple, BorrowAllowanceDelegatedEvent.OutputObject>;
    };
}
