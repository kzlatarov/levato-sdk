import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IUniswapV2CalleeInterface extends Interface {
    getFunction(nameOrSignature: "uniswapV2Call"): FunctionFragment;
    encodeFunctionData(functionFragment: "uniswapV2Call", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "uniswapV2Call", data: BytesLike): Result;
}
export interface IUniswapV2Callee extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV2Callee;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV2CalleeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    uniswapV2Call: TypedContractMethod<[
        sender: AddressLike,
        amount0: BigNumberish,
        amount1: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "uniswapV2Call"): TypedContractMethod<[
        sender: AddressLike,
        amount0: BigNumberish,
        amount1: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
