import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IFlashLoanReceiverInterface extends Interface {
    getFunction(nameOrSignature: "receiveFlashLoan"): FunctionFragment;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
}
export interface IFlashLoanReceiver extends BaseContract {
    connect(runner?: ContractRunner | null): IFlashLoanReceiver;
    waitForDeployment(): Promise<this>;
    interface: IFlashLoanReceiverInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    receiveFlashLoan: TypedContractMethod<[
        borrowedAsset: AddressLike,
        borrowedAmount: BigNumberish,
        premium: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "receiveFlashLoan"): TypedContractMethod<[
        borrowedAsset: AddressLike,
        borrowedAmount: BigNumberish,
        premium: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
