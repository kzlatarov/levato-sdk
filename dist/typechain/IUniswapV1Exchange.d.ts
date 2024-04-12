import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IUniswapV1ExchangeInterface extends Interface {
    getFunction(nameOrSignature: "tokenToEthSwapInput"): FunctionFragment;
    encodeFunctionData(functionFragment: "tokenToEthSwapInput", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "tokenToEthSwapInput", data: BytesLike): Result;
}
export interface IUniswapV1Exchange extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV1Exchange;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV1ExchangeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    tokenToEthSwapInput: TypedContractMethod<[
        tokens_sold: BigNumberish,
        min_eth: BigNumberish,
        deadline: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "tokenToEthSwapInput"): TypedContractMethod<[
        tokens_sold: BigNumberish,
        min_eth: BigNumberish,
        deadline: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    filters: {};
}
