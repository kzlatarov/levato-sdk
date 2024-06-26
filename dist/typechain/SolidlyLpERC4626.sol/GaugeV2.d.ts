import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface GaugeV2Interface extends utils.Interface {
    functions: {
        "TOKEN()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "deposit(uint256)": FunctionFragment;
        "depositAll()": FunctionFragment;
        "earned(address)": FunctionFragment;
        "getReward()": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
        "withdrawAll()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "TOKEN" | "balanceOf" | "deposit" | "depositAll" | "earned" | "getReward" | "rewardToken" | "withdraw" | "withdrawAll"): FunctionFragment;
    encodeFunctionData(functionFragment: "TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "earned", values: [string]): string;
    encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values?: undefined): string;
    decodeFunctionResult(functionFragment: "TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {};
}
export interface GaugeV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaugeV2Interface;
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
        TOKEN(overrides?: CallOverrides): Promise<[string]>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositAll(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        earned(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReward(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        withdraw(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    TOKEN(overrides?: CallOverrides): Promise<string>;
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    deposit(arg0: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositAll(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    earned(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    getReward(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    withdraw(arg0: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawAll(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        TOKEN(overrides?: CallOverrides): Promise<string>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositAll(overrides?: CallOverrides): Promise<void>;
        earned(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReward(overrides?: CallOverrides): Promise<void>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        withdraw(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawAll(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositAll(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        earned(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getReward(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawAll(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositAll(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        earned(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReward(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(arg0: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
