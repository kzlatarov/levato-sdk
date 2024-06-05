import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IFlashloanRouterInterface extends utils.Interface {
    functions: {
        "_listExtensions()": FunctionFragment;
        "_registerExtension(address,address)": FunctionFragment;
        "_replaceExtensions(address[])": FunctionFragment;
        "_setIonicMarketOfAsset(address,address)": FunctionFragment;
        "flashloan(address,uint256,bytes)": FunctionFragment;
        "ionicMarketOfAsset(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "receiveFlashLoan(address,uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_listExtensions" | "_registerExtension" | "_replaceExtensions" | "_setIonicMarketOfAsset" | "flashloan" | "ionicMarketOfAsset" | "owner" | "receiveFlashLoan"): FunctionFragment;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [string, string]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [string[]]): string;
    encodeFunctionData(functionFragment: "_setIonicMarketOfAsset", values: [string, string]): string;
    encodeFunctionData(functionFragment: "flashloan", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "ionicMarketOfAsset", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setIonicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
    events: {};
}
export interface IFlashloanRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFlashloanRouterInterface;
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
        _listExtensions(overrides?: CallOverrides): Promise<[string[]]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _listExtensions(overrides?: CallOverrides): Promise<string[]>;
    _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _replaceExtensions(extensions: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _listExtensions(overrides?: CallOverrides): Promise<string[]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: CallOverrides): Promise<void>;
        _replaceExtensions(extensions: string[], overrides?: CallOverrides): Promise<void>;
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: CallOverrides): Promise<void>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _listExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _listExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
