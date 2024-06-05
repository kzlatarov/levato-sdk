import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace IRouter {
    type RouteStruct = {
        from: string;
        to: string;
        stable: boolean;
    };
    type RouteStructOutput = [string, string, boolean] & {
        from: string;
        to: string;
        stable: boolean;
    };
}
export interface IRouterInterface extends utils.Interface {
    functions: {
        "addLiquidity(address,address,bool,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "getAmountsOut(uint256,(address,address,bool)[])": FunctionFragment;
        "getReserves(address,address,bool)": FunctionFragment;
        "isPair(address)": FunctionFragment;
        "pairFor(address,address,bool)": FunctionFragment;
        "quoteAddLiquidity(address,address,bool,uint256,uint256)": FunctionFragment;
        "removeLiquidity(address,address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,(address,address,bool)[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokensSimple(uint256,uint256,address,address,bool,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addLiquidity" | "getAmountsOut" | "getReserves" | "isPair" | "pairFor" | "quoteAddLiquidity" | "removeLiquidity" | "swapExactTokensForTokens" | "swapExactTokensForTokensSimple"): FunctionFragment;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        string,
        string,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [BigNumberish, IRouter.RouteStruct[]]): string;
    encodeFunctionData(functionFragment: "getReserves", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "isPair", values: [string]): string;
    encodeFunctionData(functionFragment: "pairFor", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "quoteAddLiquidity", values: [string, string, boolean, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        string,
        string,
        boolean,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [
        BigNumberish,
        BigNumberish,
        IRouter.RouteStruct[],
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokensSimple", values: [
        BigNumberish,
        BigNumberish,
        string,
        string,
        boolean,
        string,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPair", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAddLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokensSimple", data: BytesLike): Result;
    events: {};
}
export interface IRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRouterInterface;
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
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        isPair(pair: string, overrides?: CallOverrides): Promise<[boolean]>;
        pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<[string] & {
            pair: string;
        }>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        reserveA: BigNumber;
        reserveB: BigNumber;
    }>;
    isPair(pair: string, overrides?: CallOverrides): Promise<boolean>;
    pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<string>;
    quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
    }>;
    removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            reserveA: BigNumber;
            reserveB: BigNumber;
        }>;
        isPair(pair: string, overrides?: CallOverrides): Promise<boolean>;
        pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<string>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        isPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>;
        pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAmountsOut(amountIn: BigNumberish, routes: IRouter.RouteStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserves(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPair(pair: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pairFor(tokenA: string, tokenB: string, stable: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteAddLiquidity(tokenA: string, tokenB: string, stable: boolean, amountADesired: BigNumberish, amountBDesired: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeLiquidity(tokenA: string, tokenB: string, stable: boolean, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, routes: IRouter.RouteStruct[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokensSimple(amountIn: BigNumberish, amountOutMin: BigNumberish, tokenFrom: string, tokenTo: string, stable: boolean, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
