import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ISwapRouter {
    type ExactInputParamsStruct = {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
    };
    type ExactInputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        deadline: BigNumber;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
    };
    type ExactInputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactInputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
    type ExactInputSingleParamsWithDeadlineStruct = {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactInputSingleParamsWithDeadlineStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        deadline: BigNumber;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
    type ExactOutputParamsStruct = {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
    };
    type ExactOutputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        deadline: BigNumber;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
    };
    type ExactOutputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactOutputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        deadline: BigNumber;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
}
export interface ISwapRouterInterface extends utils.Interface {
    functions: {
        "exactInput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
        "exactOutput((bytes,address,uint256,uint256,uint256))": FunctionFragment;
        "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))": FunctionFragment;
        "factory()": FunctionFragment;
        "multicall(uint256,bytes[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exactInput" | "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))" | "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))" | "exactOutput" | "exactOutputSingle" | "factory" | "multicall"): FunctionFragment;
    encodeFunctionData(functionFragment: "exactInput", values: [ISwapRouter.ExactInputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))", values: [ISwapRouter.ExactInputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))", values: [ISwapRouter.ExactInputSingleParamsWithDeadlineStruct]): string;
    encodeFunctionData(functionFragment: "exactOutput", values: [ISwapRouter.ExactOutputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutputSingle", values: [ISwapRouter.ExactOutputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "multicall", values: [BigNumberish, BytesLike[]]): string;
    decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    events: {};
}
export interface ISwapRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISwapRouterInterface;
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
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsWithDeadlineStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        factory(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        multicall(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsWithDeadlineStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    factory(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    multicall(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsWithDeadlineStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        multicall(deadline: BigNumberish, data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {};
    estimateGas: {
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsWithDeadlineStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        factory(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        multicall(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exactInput(params: ISwapRouter.ExactInputParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))"(params: ISwapRouter.ExactInputSingleParamsWithDeadlineStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exactOutput(params: ISwapRouter.ExactOutputParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exactOutputSingle(params: ISwapRouter.ExactOutputSingleParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        multicall(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
