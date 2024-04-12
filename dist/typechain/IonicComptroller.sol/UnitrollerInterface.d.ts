import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface UnitrollerInterfaceInterface extends Interface {
    getFunction(nameOrSignature: "_acceptAdmin" | "_setPendingAdmin" | "_toggleAdminRights" | "_upgrade" | "comptrollerImplementation"): FunctionFragment;
    encodeFunctionData(functionFragment: "_acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_toggleAdminRights", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_upgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "comptrollerImplementation", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toggleAdminRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptrollerImplementation", data: BytesLike): Result;
}
export interface UnitrollerInterface extends BaseContract {
    connect(runner?: ContractRunner | null): UnitrollerInterface;
    waitForDeployment(): Promise<this>;
    interface: UnitrollerInterfaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _acceptAdmin: TypedContractMethod<[], [bigint], "nonpayable">;
    _setPendingAdmin: TypedContractMethod<[
        newPendingAdmin: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    _toggleAdminRights: TypedContractMethod<[
        hasRights: boolean
    ], [
        bigint
    ], "nonpayable">;
    _upgrade: TypedContractMethod<[], [void], "nonpayable">;
    comptrollerImplementation: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_acceptAdmin"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_setPendingAdmin"): TypedContractMethod<[
        newPendingAdmin: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_toggleAdminRights"): TypedContractMethod<[hasRights: boolean], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_upgrade"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "comptrollerImplementation"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
