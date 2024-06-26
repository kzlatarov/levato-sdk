import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IBalancerPoolInterface extends utils.Interface {
    functions: {
        "exitPool(uint256,uint256[])": FunctionFragment;
        "exitswapExternAmountOut(address,uint256,uint256)": FunctionFragment;
        "getBalance(address)": FunctionFragment;
        "getFinalTokens()": FunctionFragment;
        "getNormalizedWeight(address)": FunctionFragment;
        "getNormalizedWeights()": FunctionFragment;
        "getNumTokens()": FunctionFragment;
        "getPoolId()": FunctionFragment;
        "getSwapFee()": FunctionFragment;
        "getVault()": FunctionFragment;
        "joinPool(uint256,uint256[])": FunctionFragment;
        "joinswapExternAmountIn(address,uint256,uint256)": FunctionFragment;
        "swapExactAmountIn(address,uint256,address,uint256,uint256)": FunctionFragment;
        "swapExactAmountOut(address,uint256,address,uint256,uint256)": FunctionFragment;
        "totalSupply()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exitPool" | "exitswapExternAmountOut" | "getBalance" | "getFinalTokens" | "getNormalizedWeight" | "getNormalizedWeights" | "getNumTokens" | "getPoolId" | "getSwapFee" | "getVault" | "joinPool" | "joinswapExternAmountIn" | "swapExactAmountIn" | "swapExactAmountOut" | "totalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "exitPool", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "exitswapExternAmountOut", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "getFinalTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNormalizedWeight", values: [string]): string;
    encodeFunctionData(functionFragment: "getNormalizedWeights", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNumTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSwapFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "joinPool", values: [BigNumberish, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "joinswapExternAmountIn", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactAmountIn", values: [string, BigNumberish, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactAmountOut", values: [string, BigNumberish, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "exitPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitswapExternAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFinalTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNormalizedWeight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNormalizedWeights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinswapExternAmountIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactAmountIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    events: {};
}
export interface IBalancerPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBalancerPoolInterface;
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
        exitPool(poolAmountIn: BigNumberish, minAmountsOut: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exitswapExternAmountOut(tokenOut: string, tokenAmountOut: BigNumberish, maxPoolAmountIn: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getBalance(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getFinalTokens(overrides?: CallOverrides): Promise<[string[]]>;
        getNormalizedWeight(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getNormalizedWeights(overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getNumTokens(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPoolId(overrides?: CallOverrides): Promise<[string]>;
        getSwapFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        getVault(overrides?: CallOverrides): Promise<[string]>;
        joinPool(poolAmountOut: BigNumberish, maxAmountsIn: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        joinswapExternAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, minPoolAmountOut: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, tokenOut: string, minAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactAmountOut(tokenIn: string, maxAmountIn: BigNumberish, tokenOut: string, tokenAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    exitPool(poolAmountIn: BigNumberish, minAmountsOut: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exitswapExternAmountOut(tokenOut: string, tokenAmountOut: BigNumberish, maxPoolAmountIn: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    getFinalTokens(overrides?: CallOverrides): Promise<string[]>;
    getNormalizedWeight(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    getNormalizedWeights(overrides?: CallOverrides): Promise<BigNumber[]>;
    getNumTokens(overrides?: CallOverrides): Promise<BigNumber>;
    getPoolId(overrides?: CallOverrides): Promise<string>;
    getSwapFee(overrides?: CallOverrides): Promise<BigNumber>;
    getVault(overrides?: CallOverrides): Promise<string>;
    joinPool(poolAmountOut: BigNumberish, maxAmountsIn: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    joinswapExternAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, minPoolAmountOut: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, tokenOut: string, minAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactAmountOut(tokenIn: string, maxAmountIn: BigNumberish, tokenOut: string, tokenAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        exitPool(poolAmountIn: BigNumberish, minAmountsOut: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        exitswapExternAmountOut(tokenOut: string, tokenAmountOut: BigNumberish, maxPoolAmountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getFinalTokens(overrides?: CallOverrides): Promise<string[]>;
        getNormalizedWeight(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getNormalizedWeights(overrides?: CallOverrides): Promise<BigNumber[]>;
        getNumTokens(overrides?: CallOverrides): Promise<BigNumber>;
        getPoolId(overrides?: CallOverrides): Promise<string>;
        getSwapFee(overrides?: CallOverrides): Promise<BigNumber>;
        getVault(overrides?: CallOverrides): Promise<string>;
        joinPool(poolAmountOut: BigNumberish, maxAmountsIn: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        joinswapExternAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, minPoolAmountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        swapExactAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, tokenOut: string, minAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            tokenAmountOut: BigNumber;
            spotPriceAfter: BigNumber;
        }>;
        swapExactAmountOut(tokenIn: string, maxAmountIn: BigNumberish, tokenOut: string, tokenAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            tokenAmountIn: BigNumber;
            spotPriceAfter: BigNumber;
        }>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        exitPool(poolAmountIn: BigNumberish, minAmountsOut: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exitswapExternAmountOut(tokenOut: string, tokenAmountOut: BigNumberish, maxPoolAmountIn: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getBalance(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getFinalTokens(overrides?: CallOverrides): Promise<BigNumber>;
        getNormalizedWeight(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        getNormalizedWeights(overrides?: CallOverrides): Promise<BigNumber>;
        getNumTokens(overrides?: CallOverrides): Promise<BigNumber>;
        getPoolId(overrides?: CallOverrides): Promise<BigNumber>;
        getSwapFee(overrides?: CallOverrides): Promise<BigNumber>;
        getVault(overrides?: CallOverrides): Promise<BigNumber>;
        joinPool(poolAmountOut: BigNumberish, maxAmountsIn: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        joinswapExternAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, minPoolAmountOut: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, tokenOut: string, minAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactAmountOut(tokenIn: string, maxAmountIn: BigNumberish, tokenOut: string, tokenAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        exitPool(poolAmountIn: BigNumberish, minAmountsOut: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exitswapExternAmountOut(tokenOut: string, tokenAmountOut: BigNumberish, maxPoolAmountIn: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getBalance(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFinalTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNormalizedWeight(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNormalizedWeights(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNumTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        joinPool(poolAmountOut: BigNumberish, maxAmountsIn: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        joinswapExternAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, minPoolAmountOut: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactAmountIn(tokenIn: string, tokenAmountIn: BigNumberish, tokenOut: string, minAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactAmountOut(tokenIn: string, maxAmountIn: BigNumberish, tokenOut: string, tokenAmountOut: BigNumberish, maxPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
