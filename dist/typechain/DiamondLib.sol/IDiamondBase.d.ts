import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface IDiamondBaseInterface extends Interface {
    getFunction(nameOrSignature: "_listExtensions" | "_registerExtension" | "_replaceExtensions"): FunctionFragment;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [AddressLike[]]): string;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
}
export interface IDiamondBase extends BaseContract {
    connect(runner?: ContractRunner | null): IDiamondBase;
    waitForDeployment(): Promise<this>;
    interface: IDiamondBaseInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _listExtensions: TypedContractMethod<[], [string[]], "view">;
    _registerExtension: TypedContractMethod<[
        extensionToAdd: AddressLike,
        extensionToReplace: AddressLike
    ], [
        void
    ], "nonpayable">;
    _replaceExtensions: TypedContractMethod<[
        extensions: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_listExtensions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "_registerExtension"): TypedContractMethod<[
        extensionToAdd: AddressLike,
        extensionToReplace: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_replaceExtensions"): TypedContractMethod<[extensions: AddressLike[]], [void], "nonpayable">;
    filters: {};
}
