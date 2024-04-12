import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface UniswapLikeLpTokenPriceOracleInterface extends Interface {
    getFunction(nameOrSignature: "price" | "wtoken"): FunctionFragment;
    encodeFunctionData(functionFragment: "price", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "wtoken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wtoken", data: BytesLike): Result;
}
export interface UniswapLikeLpTokenPriceOracle extends BaseContract {
    connect(runner?: ContractRunner | null): UniswapLikeLpTokenPriceOracle;
    waitForDeployment(): Promise<this>;
    interface: UniswapLikeLpTokenPriceOracleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    price: TypedContractMethod<[underlying: AddressLike], [bigint], "view">;
    wtoken: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "price"): TypedContractMethod<[underlying: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "wtoken"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
