import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface QuoterInterface extends utils.Interface {
    functions: {
        "doesPoolExist(address,address)": FunctionFragment;
        "estimateMaxSwapUniswapV3(address,address,uint256,uint24)": FunctionFragment;
        "estimateMinSwapUniswapV3(address,address,uint256,uint24)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "doesPoolExist" | "estimateMaxSwapUniswapV3" | "estimateMinSwapUniswapV3"): FunctionFragment;
    encodeFunctionData(functionFragment: "doesPoolExist", values: [string, string]): string;
    encodeFunctionData(functionFragment: "estimateMaxSwapUniswapV3", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "estimateMinSwapUniswapV3", values: [string, string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "doesPoolExist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateMaxSwapUniswapV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateMinSwapUniswapV3", data: BytesLike): Result;
    events: {};
}
export interface Quoter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: QuoterInterface;
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
        doesPoolExist(_token0: string, _token1: string, overrides?: CallOverrides): Promise<[boolean]>;
        estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    doesPoolExist(_token0: string, _token1: string, overrides?: CallOverrides): Promise<boolean>;
    estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        doesPoolExist(_token0: string, _token1: string, overrides?: CallOverrides): Promise<boolean>;
        estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        doesPoolExist(_token0: string, _token1: string, overrides?: CallOverrides): Promise<BigNumber>;
        estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        doesPoolExist(_token0: string, _token1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateMaxSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateMinSwapUniswapV3(_fromToken: string, _toToken: string, _amount: BigNumberish, _poolFee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
