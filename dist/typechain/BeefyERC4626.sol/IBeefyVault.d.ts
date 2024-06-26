import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IBeefyVaultInterface extends utils.Interface {
    functions: {
        "balance()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "deposit(uint256)": FunctionFragment;
        "earn()": FunctionFragment;
        "getPricePerFullShare()": FunctionFragment;
        "strategy()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "want()": FunctionFragment;
        "withdraw(uint256)": FunctionFragment;
        "withdrawAll()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balance" | "balanceOf" | "deposit" | "earn" | "getPricePerFullShare" | "strategy" | "totalSupply" | "want" | "withdraw" | "withdrawAll"): FunctionFragment;
    encodeFunctionData(functionFragment: "balance", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "earn", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPricePerFullShare", values?: undefined): string;
    encodeFunctionData(functionFragment: "strategy", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "want", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values?: undefined): string;
    decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPricePerFullShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "want", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {};
}
export interface IBeefyVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBeefyVaultInterface;
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
        balance(overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        earn(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getPricePerFullShare(overrides?: CallOverrides): Promise<[BigNumber]>;
        strategy(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        want(overrides?: CallOverrides): Promise<[string]>;
        withdraw(_shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    balance(overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    earn(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;
    strategy(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    want(overrides?: CallOverrides): Promise<string>;
    withdraw(_shares: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawAll(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        balance(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        earn(overrides?: CallOverrides): Promise<void>;
        getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;
        strategy(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        want(overrides?: CallOverrides): Promise<string>;
        withdraw(_shares: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawAll(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        balance(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        earn(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;
        strategy(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        want(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(_shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawAll(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        earn(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getPricePerFullShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        strategy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        want(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(_shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawAll(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
