import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface ILeveragedPositionsFactoryStorageInterface extends Interface {
    getFunction(nameOrSignature: "creditDelegator" | "flashloanRouter" | "fundersRegistry" | "minBorrowNative" | "oracle" | "owner" | "vaultOfPosition"): FunctionFragment;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "vaultOfPosition", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultOfPosition", data: BytesLike): Result;
}
export interface ILeveragedPositionsFactoryStorage extends BaseContract {
    connect(runner?: ContractRunner | null): ILeveragedPositionsFactoryStorage;
    waitForDeployment(): Promise<this>;
    interface: ILeveragedPositionsFactoryStorageInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    creditDelegator: TypedContractMethod<[], [string], "view">;
    flashloanRouter: TypedContractMethod<[], [string], "view">;
    fundersRegistry: TypedContractMethod<[], [string], "view">;
    minBorrowNative: TypedContractMethod<[], [bigint], "view">;
    oracle: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    vaultOfPosition: TypedContractMethod<[
        position: AddressLike
    ], [
        string
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "creditDelegator"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "flashloanRouter"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "fundersRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "minBorrowNative"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "oracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "vaultOfPosition"): TypedContractMethod<[position: AddressLike], [string], "view">;
    filters: {};
}
