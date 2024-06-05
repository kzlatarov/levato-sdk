import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FundersRegistryStorageInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "balancerPoolForTokens(address,address)": FunctionFragment;
        "bestSwapPath(address,address,uint256)": FunctionFragment;
        "creditDelegator()": FunctionFragment;
        "customUniV3Router(address,address)": FunctionFragment;
        "defaultOutputToken(address)": FunctionFragment;
        "fundingStrategiesByName(string)": FunctionFragment;
        "fundingStrategiesByTokens(address,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "uniswapV3Fees(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "balancerPoolForTokens" | "bestSwapPath" | "creditDelegator" | "customUniV3Router" | "defaultOutputToken" | "fundingStrategiesByName" | "fundingStrategiesByTokens" | "owner" | "pendingOwner" | "renounceOwnership" | "transferOwnership" | "uniswapV3Fees"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "balancerPoolForTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "bestSwapPath", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "customUniV3Router", values: [string, string]): string;
    encodeFunctionData(functionFragment: "defaultOutputToken", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByName", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByTokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "uniswapV3Fees", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balancerPoolForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "customUniV3Router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultOutputToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingStrategiesByName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingStrategiesByTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3Fees", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferStarted(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferStartedEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferStartedEventObject>;
export type OwnershipTransferStartedEventFilter = TypedEventFilter<OwnershipTransferStartedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface FundersRegistryStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FundersRegistryStorageInterface;
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
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[string]>;
        bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        creditDelegator(overrides?: CallOverrides): Promise<[string]>;
        customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[string]>;
        defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[number]>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
    bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<string>;
    creditDelegator(overrides?: CallOverrides): Promise<string>;
    customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
    defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<string>;
    fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<string>;
    fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<number>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
        bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<string>;
        creditDelegator(overrides?: CallOverrides): Promise<string>;
        customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
        defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<string>;
        fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<string>;
        fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<number>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferStarted(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        OwnershipTransferStarted(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        creditDelegator(overrides?: CallOverrides): Promise<BigNumber>;
        customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balancerPoolForTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bestSwapPath(arg0: string, arg1: string, arg2: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        customUniV3Router(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultOutputToken(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingStrategiesByName(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingStrategiesByTokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        uniswapV3Fees(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
