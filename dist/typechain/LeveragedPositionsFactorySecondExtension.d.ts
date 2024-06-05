import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LeveragedPositionsFactorySecondExtensionInterface extends utils.Interface {
    functions: {
        "AAVE()": FunctionFragment;
        "DELEGATED()": FunctionFragment;
        "IONIC()": FunctionFragment;
        "_getExtensionFunctions()": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "blocksPerYear()": FunctionFragment;
        "closeAndRemoveUserPosition(address)": FunctionFragment;
        "createAavePosition(address,address,address,bool)": FunctionFragment;
        "creditDelegator()": FunctionFragment;
        "flashloanRouter()": FunctionFragment;
        "fundPosition(address,address,uint256)": FunctionFragment;
        "fundersRegistry()": FunctionFragment;
        "getAccountsWithOpenPositions()": FunctionFragment;
        "getBorrowableMarketsByCollateral(address)": FunctionFragment;
        "getMinBorrowNative()": FunctionFragment;
        "getPositionsExtension(bytes4)": FunctionFragment;
        "getWhitelistedCollateralMarkets()": FunctionFragment;
        "minBorrowNative()": FunctionFragment;
        "oracle()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "removeClosedPosition(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "swap(address,uint256,address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "AAVE" | "DELEGATED" | "IONIC" | "_getExtensionFunctions" | "acceptOwnership" | "blocksPerYear" | "closeAndRemoveUserPosition" | "createAavePosition" | "creditDelegator" | "flashloanRouter" | "fundPosition" | "fundersRegistry" | "getAccountsWithOpenPositions" | "getBorrowableMarketsByCollateral" | "getMinBorrowNative" | "getPositionsExtension" | "getWhitelistedCollateralMarkets" | "minBorrowNative" | "oracle" | "owner" | "pendingOwner" | "removeClosedPosition" | "renounceOwnership" | "swap" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DELEGATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "IONIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "closeAndRemoveUserPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "createAavePosition", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundPosition", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountsWithOpenPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowableMarketsByCollateral", values: [string]): string;
    encodeFunctionData(functionFragment: "getMinBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionsExtension", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getWhitelistedCollateralMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeClosedPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "swap", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DELEGATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IONIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeAndRemoveUserPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAavePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountsWithOpenPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowableMarketsByCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedCollateralMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeClosedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferStarted(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PositionCreated(address,address,address,address,uint16)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
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
export interface PositionCreatedEventObject {
    user: string;
    position: string;
    collateral: string;
    stable: string;
    lendingProtocol: number;
}
export type PositionCreatedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    number
], PositionCreatedEventObject>;
export type PositionCreatedEventFilter = TypedEventFilter<PositionCreatedEvent>;
export interface LeveragedPositionsFactorySecondExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LeveragedPositionsFactorySecondExtensionInterface;
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
        AAVE(overrides?: CallOverrides): Promise<[number]>;
        DELEGATED(overrides?: CallOverrides): Promise<[number]>;
        IONIC(overrides?: CallOverrides): Promise<[number]>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<[string[]]>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<[BigNumber]>;
        closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<[string]>;
        flashloanRouter(overrides?: CallOverrides): Promise<[string]>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fundersRegistry(overrides?: CallOverrides): Promise<[string]>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<[string[]]>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<[string[]]>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<[string[]]>;
        minBorrowNative(overrides?: CallOverrides): Promise<[BigNumber]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        removeClosedPosition(closedPosition: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    AAVE(overrides?: CallOverrides): Promise<number>;
    DELEGATED(overrides?: CallOverrides): Promise<number>;
    IONIC(overrides?: CallOverrides): Promise<number>;
    _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
    closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    creditDelegator(overrides?: CallOverrides): Promise<string>;
    flashloanRouter(overrides?: CallOverrides): Promise<string>;
    fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fundersRegistry(overrides?: CallOverrides): Promise<string>;
    getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<string[]>;
    getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<string[]>;
    getMinBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
    getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<string>;
    getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<string[]>;
    minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
    oracle(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    removeClosedPosition(closedPosition: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        AAVE(overrides?: CallOverrides): Promise<number>;
        DELEGATED(overrides?: CallOverrides): Promise<number>;
        IONIC(overrides?: CallOverrides): Promise<number>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        closeAndRemoveUserPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: CallOverrides): Promise<string>;
        creditDelegator(overrides?: CallOverrides): Promise<string>;
        flashloanRouter(overrides?: CallOverrides): Promise<string>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fundersRegistry(overrides?: CallOverrides): Promise<string>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<string[]>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<string[]>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<string>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<string[]>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        removeClosedPosition(closedPosition: string, overrides?: CallOverrides): Promise<boolean>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferStarted(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        OwnershipTransferStarted(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PositionCreated(address,address,address,address,uint16)"(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
        PositionCreated(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
    };
    estimateGas: {
        AAVE(overrides?: CallOverrides): Promise<BigNumber>;
        DELEGATED(overrides?: CallOverrides): Promise<BigNumber>;
        IONIC(overrides?: CallOverrides): Promise<BigNumber>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        creditDelegator(overrides?: CallOverrides): Promise<BigNumber>;
        flashloanRouter(overrides?: CallOverrides): Promise<BigNumber>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fundersRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<BigNumber>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        removeClosedPosition(closedPosition: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DELEGATED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IONIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flashloanRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fundersRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minBorrowNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeClosedPosition(closedPosition: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
