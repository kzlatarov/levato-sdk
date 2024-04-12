import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface CDelegateInterfaceInterface extends Interface {
    getFunction(nameOrSignature: "_becomeImplementation" | "contractType" | "delegateType"): FunctionFragment;
    encodeFunctionData(functionFragment: "_becomeImplementation", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegateType", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_becomeImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateType", data: BytesLike): Result;
}
export interface CDelegateInterface extends BaseContract {
    connect(runner?: ContractRunner | null): CDelegateInterface;
    waitForDeployment(): Promise<this>;
    interface: CDelegateInterfaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _becomeImplementation: TypedContractMethod<[
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    contractType: TypedContractMethod<[], [string], "view">;
    delegateType: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_becomeImplementation"): TypedContractMethod<[data: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "contractType"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "delegateType"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
