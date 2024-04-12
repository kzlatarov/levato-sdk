import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface ICreditDelegatorExtensionBaseInterface extends Interface {
    getFunction(nameOrSignature: "getAssetBorrowRate" | "getAssetPoolLtv" | "getAssetPrice" | "isPoolSupportedAsset"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPoolLtv", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isPoolSupportedAsset", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPoolLtv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolSupportedAsset", data: BytesLike): Result;
}
export interface ICreditDelegatorExtensionBase extends BaseContract {
    connect(runner?: ContractRunner | null): ICreditDelegatorExtensionBase;
    waitForDeployment(): Promise<this>;
    interface: ICreditDelegatorExtensionBaseInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getAssetBorrowRate: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getAssetPoolLtv: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getAssetPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    isPoolSupportedAsset: TypedContractMethod<[
        asset: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getAssetBorrowRate"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPoolLtv"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getAssetPrice"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "isPoolSupportedAsset"): TypedContractMethod<[asset: AddressLike], [boolean], "view">;
    filters: {};
}
