import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FlashloanRouterExtensionInterface extends utils.Interface {
    functions: {
        "_getExtensionFunctions()": FunctionFragment;
        "_setIonicMarketOfAsset(address,address)": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "asArray(address,address,address)": FunctionFragment;
        "asArray(uint256)": FunctionFragment;
        "asArray(address,address)": FunctionFragment;
        "asArray(address)": FunctionFragment;
        "executeOperation(address[],uint256[],uint256[],address,bytes)": FunctionFragment;
        "flashloan(address,uint256,bytes)": FunctionFragment;
        "ionicMarketOfAsset(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "receiveFlashLoan(address,uint256,uint256,bytes)": FunctionFragment;
        "receiveFlashLoan(address,uint256,bytes)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_getExtensionFunctions" | "_setIonicMarketOfAsset" | "acceptOwnership" | "asArray(address,address,address)" | "asArray(uint256)" | "asArray(address,address)" | "asArray(address)" | "executeOperation" | "flashloan" | "ionicMarketOfAsset" | "owner" | "pendingOwner" | "receiveFlashLoan(address,uint256,uint256,bytes)" | "receiveFlashLoan(address,uint256,bytes)" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setIonicMarketOfAsset", values: [string, string]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "asArray(address,address,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "asArray(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "asArray(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "asArray(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "executeOperation", values: [string[], BigNumberish[], BigNumberish[], string, BytesLike]): string;
    encodeFunctionData(functionFragment: "flashloan", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "ionicMarketOfAsset", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan(address,uint256,uint256,bytes)", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan(address,uint256,bytes)", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setIonicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "asArray(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan(address,uint256,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan(address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Flash(address,address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferStarted(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Flash"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface FlashEventObject {
    receiver: string;
    borrowedAsset: string;
    amount: BigNumber;
}
export type FlashEvent = TypedEvent<[
    string,
    string,
    BigNumber
], FlashEventObject>;
export type FlashEventFilter = TypedEventFilter<FlashEvent>;
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
export interface FlashloanRouterExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FlashloanRouterExtensionInterface;
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
        _getExtensionFunctions(overrides?: CallOverrides): Promise<[string[]]>;
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<[string[]]>;
        "asArray(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<[string[]]>;
        "asArray(address)"(value: string, overrides?: CallOverrides): Promise<[string[]]>;
        executeOperation(assets: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ionicMarketOfAsset(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        "receiveFlashLoan(address,uint256,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "receiveFlashLoan(address,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
    _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<string[]>;
    "asArray(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<string[]>;
    "asArray(address)"(value: string, overrides?: CallOverrides): Promise<string[]>;
    executeOperation(assets: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ionicMarketOfAsset(arg0: string, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    "receiveFlashLoan(address,uint256,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "receiveFlashLoan(address,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: CallOverrides): Promise<void>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<string[]>;
        "asArray(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<string[]>;
        "asArray(address)"(value: string, overrides?: CallOverrides): Promise<string[]>;
        executeOperation(assets: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        ionicMarketOfAsset(arg0: string, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        "receiveFlashLoan(address,uint256,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "receiveFlashLoan(address,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Flash(address,address,uint256)"(receiver?: string | null, borrowedAsset?: string | null, amount?: null): FlashEventFilter;
        Flash(receiver?: string | null, borrowedAsset?: string | null, amount?: null): FlashEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferStarted(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        OwnershipTransferStarted(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        _getExtensionFunctions(overrides?: CallOverrides): Promise<BigNumber>;
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<BigNumber>;
        "asArray(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<BigNumber>;
        "asArray(address)"(value: string, overrides?: CallOverrides): Promise<BigNumber>;
        executeOperation(assets: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ionicMarketOfAsset(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        "receiveFlashLoan(address,uint256,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "receiveFlashLoan(address,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _getExtensionFunctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setIonicMarketOfAsset(asset: string, market: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "asArray(address,address,address)"(value0: string, value1: string, value2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "asArray(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "asArray(address,address)"(value0: string, value1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "asArray(address)"(value: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeOperation(assets: string[], amounts: BigNumberish[], premiums: BigNumberish[], initiator: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flashloan(asset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ionicMarketOfAsset(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "receiveFlashLoan(address,uint256,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "receiveFlashLoan(address,uint256,bytes)"(borrowedAsset: string, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
