import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface ICreditDelegatorStorageInterface extends Interface {
    getFunction(nameOrSignature: "aaveAddressesProvider" | "borrowAllowance" | "owner" | "positionScaledATokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "aaveAddressesProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionScaledATokens", values: [AddressLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "aaveAddressesProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionScaledATokens", data: BytesLike): Result;
}
export interface ICreditDelegatorStorage extends BaseContract {
    connect(runner?: ContractRunner | null): ICreditDelegatorStorage;
    waitForDeployment(): Promise<this>;
    interface: ICreditDelegatorStorageInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    aaveAddressesProvider: TypedContractMethod<[], [string], "view">;
    borrowAllowance: TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    positionScaledATokens: TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "aaveAddressesProvider"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "borrowAllowance"): TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "positionScaledATokens"): TypedContractMethod<[
        position: AddressLike,
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    filters: {};
}
