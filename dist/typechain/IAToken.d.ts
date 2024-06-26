import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IATokenInterface extends utils.Interface {
    functions: {
        "POOL()": FunctionFragment;
        "UNDERLYING_ASSET_ADDRESS()": FunctionFragment;
        "burn(address,address,uint256,uint256)": FunctionFragment;
        "getPreviousIndex(address)": FunctionFragment;
        "handleRepayment(address,address,uint256)": FunctionFragment;
        "mint(address,address,uint256,uint256)": FunctionFragment;
        "mintToTreasury(uint256,uint256)": FunctionFragment;
        "transferOnLiquidation(address,address,uint256)": FunctionFragment;
        "transferUnderlyingTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "POOL" | "UNDERLYING_ASSET_ADDRESS" | "burn" | "getPreviousIndex" | "handleRepayment" | "mint" | "mintToTreasury" | "transferOnLiquidation" | "transferUnderlyingTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNDERLYING_ASSET_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPreviousIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "handleRepayment", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintToTreasury", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOnLiquidation", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferUnderlyingTo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNDERLYING_ASSET_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPreviousIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleRepayment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOnLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferUnderlyingTo", data: BytesLike): Result;
    events: {};
}
export interface IAToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IATokenInterface;
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
        POOL(overrides?: CallOverrides): Promise<[string]>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        burn(from: string, receiverOfUnderlying: string, amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getPreviousIndex(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        handleRepayment(user: string, onBehalfOf: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mint(caller: string, onBehalfOf: string, amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mintToTreasury(amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOnLiquidation(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferUnderlyingTo(target: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    POOL(overrides?: CallOverrides): Promise<string>;
    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
    burn(from: string, receiverOfUnderlying: string, amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getPreviousIndex(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    handleRepayment(user: string, onBehalfOf: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mint(caller: string, onBehalfOf: string, amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mintToTreasury(amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOnLiquidation(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferUnderlyingTo(target: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        POOL(overrides?: CallOverrides): Promise<string>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
        burn(from: string, receiverOfUnderlying: string, amount: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getPreviousIndex(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        handleRepayment(user: string, onBehalfOf: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mint(caller: string, onBehalfOf: string, amount: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        mintToTreasury(amount: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOnLiquidation(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferUnderlyingTo(target: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        POOL(overrides?: CallOverrides): Promise<BigNumber>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        burn(from: string, receiverOfUnderlying: string, amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getPreviousIndex(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        handleRepayment(user: string, onBehalfOf: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mint(caller: string, onBehalfOf: string, amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mintToTreasury(amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOnLiquidation(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferUnderlyingTo(target: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(from: string, receiverOfUnderlying: string, amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getPreviousIndex(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleRepayment(user: string, onBehalfOf: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mint(caller: string, onBehalfOf: string, amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mintToTreasury(amount: BigNumberish, index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOnLiquidation(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferUnderlyingTo(target: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
