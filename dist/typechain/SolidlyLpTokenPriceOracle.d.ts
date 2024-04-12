import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface SolidlyLpTokenPriceOracleInterface extends Interface {
    getFunction(nameOrSignature: "_sqrt4k" | "price" | "wtoken"): FunctionFragment;
    encodeFunctionData(functionFragment: "_sqrt4k", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "price", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "wtoken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_sqrt4k", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wtoken", data: BytesLike): Result;
}
export interface SolidlyLpTokenPriceOracle extends BaseContract {
    connect(runner?: ContractRunner | null): SolidlyLpTokenPriceOracle;
    waitForDeployment(): Promise<this>;
    interface: SolidlyLpTokenPriceOracleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _sqrt4k: TypedContractMethod<[
        r0: BigNumberish,
        r1: BigNumberish,
        t_s: BigNumberish
    ], [
        bigint
    ], "view">;
    price: TypedContractMethod<[underlying: AddressLike], [bigint], "view">;
    wtoken: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_sqrt4k"): TypedContractMethod<[
        r0: BigNumberish,
        r1: BigNumberish,
        t_s: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "price"): TypedContractMethod<[underlying: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "wtoken"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
