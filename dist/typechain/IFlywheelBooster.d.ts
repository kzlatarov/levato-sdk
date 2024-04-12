import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IFlywheelBoosterInterface extends Interface {
    getFunction(nameOrSignature: "boostedBalanceOf" | "boostedTotalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "boostedBalanceOf", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "boostedTotalSupply", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "boostedBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "boostedTotalSupply", data: BytesLike): Result;
}
export interface IFlywheelBooster extends BaseContract {
    connect(runner?: ContractRunner | null): IFlywheelBooster;
    waitForDeployment(): Promise<this>;
    interface: IFlywheelBoosterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    boostedBalanceOf: TypedContractMethod<[
        strategy: AddressLike,
        user: AddressLike
    ], [
        bigint
    ], "view">;
    boostedTotalSupply: TypedContractMethod<[
        strategy: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "boostedBalanceOf"): TypedContractMethod<[
        strategy: AddressLike,
        user: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "boostedTotalSupply"): TypedContractMethod<[strategy: AddressLike], [bigint], "view">;
    filters: {};
}
