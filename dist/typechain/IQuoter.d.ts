import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IQuoterInterface extends utils.Interface {
    functions: {
        "estimateMaxSwapUniswapV3(address,address,uint256,uint24)": FunctionFragment;
        "estimateMinSwapUniswapV3(address,address,uint256,uint24)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "estimateMaxSwapUniswapV3" | "estimateMinSwapUniswapV3"): FunctionFragment;
    encodeFunctionData(functionFragment: "estimateMaxSwapUniswapV3", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "estimateMinSwapUniswapV3", values: [string, string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "estimateMaxSwapUniswapV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateMinSwapUniswapV3", data: BytesLike): Result;
    events: {};
}
export interface IQuoter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IQuoterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
