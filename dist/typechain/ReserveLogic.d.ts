import type { BaseContract, BigNumberish, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "./common";
export interface ReserveLogicInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "ReserveDataUpdated"): EventFragment;
}
export declare namespace ReserveDataUpdatedEvent {
    type InputTuple = [
        reserve: AddressLike,
        liquidityRate: BigNumberish,
        stableBorrowRate: BigNumberish,
        variableBorrowRate: BigNumberish,
        liquidityIndex: BigNumberish,
        variableBorrowIndex: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        liquidityRate: bigint,
        stableBorrowRate: bigint,
        variableBorrowRate: bigint,
        liquidityIndex: bigint,
        variableBorrowIndex: bigint
    ];
    interface OutputObject {
        reserve: string;
        liquidityRate: bigint;
        stableBorrowRate: bigint;
        variableBorrowRate: bigint;
        liquidityIndex: bigint;
        variableBorrowIndex: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ReserveLogic extends BaseContract {
    connect(runner?: ContractRunner | null): ReserveLogic;
    waitForDeployment(): Promise<this>;
    interface: ReserveLogicInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getEvent(key: "ReserveDataUpdated"): TypedContractEvent<ReserveDataUpdatedEvent.InputTuple, ReserveDataUpdatedEvent.OutputTuple, ReserveDataUpdatedEvent.OutputObject>;
    filters: {
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<ReserveDataUpdatedEvent.InputTuple, ReserveDataUpdatedEvent.OutputTuple, ReserveDataUpdatedEvent.OutputObject>;
        ReserveDataUpdated: TypedContractEvent<ReserveDataUpdatedEvent.InputTuple, ReserveDataUpdatedEvent.OutputTuple, ReserveDataUpdatedEvent.OutputObject>;
    };
}
