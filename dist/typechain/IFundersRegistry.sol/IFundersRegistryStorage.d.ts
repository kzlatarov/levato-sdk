import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IFundersRegistryStorageInterface extends utils.Interface {
    functions: {
        "WNATIVE()": FunctionFragment;
        "balancerPoolForTokens(address,address)": FunctionFragment;
        "bestSwapPath(address,address)": FunctionFragment;
        "customUniV3Router()": FunctionFragment;
        "defaultOutputToken(address)": FunctionFragment;
        "fundingStrategiesByName(string)": FunctionFragment;
        "fundingStrategiesByTokens(address,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "uniswapV3Fees()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WNATIVE" | "balancerPoolForTokens" | "bestSwapPath" | "customUniV3Router" | "defaultOutputToken" | "fundingStrategiesByName" | "fundingStrategiesByTokens" | "owner" | "uniswapV3Fees"): FunctionFragment;
    encodeFunctionData(functionFragment: "WNATIVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "balancerPoolForTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "bestSwapPath", values: [string, string]): string;
    encodeFunctionData(functionFragment: "customUniV3Router", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultOutputToken", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByName", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "uniswapV3Fees", values?: undefined): string;
    decodeFunctionResult(functionFragment: "WNATIVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balancerPoolForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "customUniV3Router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultOutputToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingStrategiesByName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingStrategiesByTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3Fees", data: BytesLike): Result;
    events: {};
}
export interface IFundersRegistryStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFundersRegistryStorageInterface;
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
        WNATIVE(overrides?: CallOverrides): Promise<[string]>;
        balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[string]>;
        bestSwapPath(inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        customUniV3Router(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<[string]>;
        fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<[string]>;
        fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        uniswapV3Fees(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    WNATIVE(overrides?: CallOverrides): Promise<string>;
    balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string>;
    bestSwapPath(inputToken: string, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    customUniV3Router(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<string>;
    fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<string>;
    fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    uniswapV3Fees(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        WNATIVE(overrides?: CallOverrides): Promise<string>;
        balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string>;
        bestSwapPath(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string[]>;
        customUniV3Router(overrides?: CallOverrides): Promise<string>;
        defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<string>;
        fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<string>;
        fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        uniswapV3Fees(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        WNATIVE(overrides?: CallOverrides): Promise<BigNumber>;
        balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        bestSwapPath(inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        customUniV3Router(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        uniswapV3Fees(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WNATIVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balancerPoolForTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bestSwapPath(inputToken: string, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        customUniV3Router(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        defaultOutputToken(inputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingStrategiesByName(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingStrategiesByTokens(inputToken: string, outputToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uniswapV3Fees(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
