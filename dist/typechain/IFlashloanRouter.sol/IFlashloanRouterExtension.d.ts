import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IFlashloanRouterExtensionInterface extends utils.Interface {
    functions: {
        "_setIonicMarketOfAsset(address,address)": FunctionFragment;
        "flashloan(address,uint256,bytes)": FunctionFragment;
        "receiveFlashLoan(address,uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_setIonicMarketOfAsset" | "flashloan" | "receiveFlashLoan"): FunctionFragment;
    encodeFunctionData(functionFragment: "_setIonicMarketOfAsset", values: [string, string]): string;
    encodeFunctionData(functionFragment: "flashloan", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "_setIonicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
    events: {};
}
export interface IFlashloanRouterExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFlashloanRouterExtensionInterface;
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
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: CallOverrides): Promise<void>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        receiveFlashLoan(borrowedAsset: string, borrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
