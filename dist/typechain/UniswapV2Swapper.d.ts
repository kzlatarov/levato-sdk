import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface UniswapV2SwapperInterface extends utils.Interface {
    functions: {
        "name()": FunctionFragment;
        "redeem(address,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "name" | "redeem"): FunctionFragment;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [string, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    events: {};
}
export interface UniswapV2Swapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapV2SwapperInterface;
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
        name(overrides?: CallOverrides): Promise<[string]>;
        redeem(inputToken: string, inputAmount: BigNumberish, strategyData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    name(overrides?: CallOverrides): Promise<string>;
    redeem(inputToken: string, inputAmount: BigNumberish, strategyData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        name(overrides?: CallOverrides): Promise<string>;
        redeem(inputToken: string, inputAmount: BigNumberish, strategyData: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            outputToken: string;
            outputAmount: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        name(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(inputToken: string, inputAmount: BigNumberish, strategyData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(inputToken: string, inputAmount: BigNumberish, strategyData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
