import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface CDelegatorInterfaceInterface extends Interface {
    getFunction(nameOrSignature: "_setImplementationSafe" | "_upgrade" | "implementation"): FunctionFragment;
    encodeFunctionData(functionFragment: "_setImplementationSafe", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "_upgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_setImplementationSafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
}
export interface CDelegatorInterface extends BaseContract {
    connect(runner?: ContractRunner | null): CDelegatorInterface;
    waitForDeployment(): Promise<this>;
    interface: CDelegatorInterfaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _setImplementationSafe: TypedContractMethod<[
        implementation_: AddressLike,
        becomeImplementationData: BytesLike
    ], [
        void
    ], "nonpayable">;
    _upgrade: TypedContractMethod<[], [void], "nonpayable">;
    implementation: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_setImplementationSafe"): TypedContractMethod<[
        implementation_: AddressLike,
        becomeImplementationData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_upgrade"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "implementation"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
