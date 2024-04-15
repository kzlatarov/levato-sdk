import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LeveragedPositionsFactoryFirstExtensionInterface extends utils.Interface {
    functions: {
        "AAVE()": FunctionFragment;
        "DELEGATED()": FunctionFragment;
        "IONIC()": FunctionFragment;
        "_getExtensionFunctions()": FunctionFragment;
        "_setIonicPairWhitelisted(address,address,bool)": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "blocksPerYear()": FunctionFragment;
        "createAndFundIonicPosition(address,address,address,uint256)": FunctionFragment;
        "createAndFundIonicPositionAtRatio(address,address,address,uint256,uint256)": FunctionFragment;
        "createIonicPosition(address,address)": FunctionFragment;
        "creditDelegator()": FunctionFragment;
        "flashloanRouter()": FunctionFragment;
        "fundersRegistry()": FunctionFragment;
        "getAssetBorrowRate(address)": FunctionFragment;
        "getAssetPrice(address)": FunctionFragment;
        "getPositionsByAccount(address)": FunctionFragment;
        "getPositionsTotalCollateralValue()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isFactoryPosition(address)": FunctionFragment;
        "minBorrowNative()": FunctionFragment;
        "oracle()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "reinitialize(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "AAVE" | "DELEGATED" | "IONIC" | "_getExtensionFunctions" | "_setIonicPairWhitelisted" | "acceptOwnership" | "blocksPerYear" | "createAndFundIonicPosition" | "createAndFundIonicPositionAtRatio" | "createIonicPosition" | "creditDelegator" | "flashloanRouter" | "fundersRegistry" | "getAssetBorrowRate" | "getAssetPrice" | "getPositionsByAccount" | "getPositionsTotalCollateralValue" | "initialize" | "isFactoryPosition" | "minBorrowNative" | "oracle" | "owner" | "pendingOwner" | "reinitialize" | "renounceOwnership" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DELEGATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "IONIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setIonicPairWhitelisted", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPosition", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPositionAtRatio", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createIonicPosition", values: [string, string]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionsByAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionsTotalCollateralValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isFactoryPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DELEGATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IONIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setIonicPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsByAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsTotalCollateralValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFactoryPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
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
export interface LeveragedPositionsFactoryFirstExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LeveragedPositionsFactoryFirstExtensionInterface;
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
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<[BigNumber]>;
        createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<[string]>;
        flashloanRouter(overrides?: CallOverrides): Promise<[string]>;
        fundersRegistry(overrides?: CallOverrides): Promise<[string]>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<[
            string[],
            boolean[]
        ] & {
            positions: string[];
            closed: boolean[];
        }>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<[boolean]>;
        minBorrowNative(overrides?: CallOverrides): Promise<[BigNumber]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        reinitialize(_oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
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
    _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
    createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    creditDelegator(overrides?: CallOverrides): Promise<string>;
    flashloanRouter(overrides?: CallOverrides): Promise<string>;
    fundersRegistry(overrides?: CallOverrides): Promise<string>;
    getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<[
        string[],
        boolean[]
    ] & {
        positions: string[];
        closed: boolean[];
    }>;
    getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isFactoryPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
    minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
    oracle(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    reinitialize(_oracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
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
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: CallOverrides): Promise<string>;
        creditDelegator(overrides?: CallOverrides): Promise<string>;
        flashloanRouter(overrides?: CallOverrides): Promise<string>;
        fundersRegistry(overrides?: CallOverrides): Promise<string>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<[
            string[],
            boolean[]
        ] & {
            positions: string[];
            closed: boolean[];
        }>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_delegator: string, _oracle: string, overrides?: CallOverrides): Promise<void>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        reinitialize(_oracle: string, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
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
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        creditDelegator(overrides?: CallOverrides): Promise<BigNumber>;
        flashloanRouter(overrides?: CallOverrides): Promise<BigNumber>;
        fundersRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        reinitialize(_oracle: string, overrides?: Overrides & {
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
        AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DELEGATED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IONIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flashloanRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundersRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minBorrowNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reinitialize(_oracle: string, overrides?: Overrides & {
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
