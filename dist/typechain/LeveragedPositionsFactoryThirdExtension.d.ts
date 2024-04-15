import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LeveragedPositionsFactoryThirdExtensionInterface extends utils.Interface {
    functions: {
        "AAVE()": FunctionFragment;
        "DELEGATED()": FunctionFragment;
        "IONIC()": FunctionFragment;
        "_getExtensionFunctions()": FunctionFragment;
        "_setPairWhitelisted(address,address,bool)": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "blocksPerYear()": FunctionFragment;
        "createAndFundDelegatedPosition(address,address,address,address,uint256)": FunctionFragment;
        "createAndFundDelegatedPositionAtRatio(address,address,address,address,uint256,uint256)": FunctionFragment;
        "createAndFundPosition(address,address,address,address,uint256)": FunctionFragment;
        "createAndFundPositionAtRatio(address,address,address,address,uint256,uint256)": FunctionFragment;
        "createDelegatedPosition(address,address,address)": FunctionFragment;
        "createPosition(address,address,address)": FunctionFragment;
        "creditDelegator()": FunctionFragment;
        "deregisterVault(address)": FunctionFragment;
        "flashloanRouter()": FunctionFragment;
        "fundersRegistry()": FunctionFragment;
        "getAaveMaxLeverageRatio(address,uint256,address)": FunctionFragment;
        "getLeverageRatioAfterBorrow(address,address,uint256,uint256,uint256)": FunctionFragment;
        "getLeverageRatioAfterRepay(address,address,uint256,uint256,uint256)": FunctionFragment;
        "getLiquidationThreshold(address,uint256,address,uint256)": FunctionFragment;
        "getRegisteredVaults()": FunctionFragment;
        "isVaultRegistered(address)": FunctionFragment;
        "minBorrowNative()": FunctionFragment;
        "oracle()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "rebalanceBorrowRate(address)": FunctionFragment;
        "registerVault(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "vaultOfPosition(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "AAVE" | "DELEGATED" | "IONIC" | "_getExtensionFunctions" | "_setPairWhitelisted" | "acceptOwnership" | "blocksPerYear" | "createAndFundDelegatedPosition" | "createAndFundDelegatedPositionAtRatio" | "createAndFundPosition" | "createAndFundPositionAtRatio" | "createDelegatedPosition" | "createPosition" | "creditDelegator" | "deregisterVault" | "flashloanRouter" | "fundersRegistry" | "getAaveMaxLeverageRatio" | "getLeverageRatioAfterBorrow" | "getLeverageRatioAfterRepay" | "getLiquidationThreshold" | "getRegisteredVaults" | "isVaultRegistered" | "minBorrowNative" | "oracle" | "owner" | "pendingOwner" | "rebalanceBorrowRate" | "registerVault" | "renounceOwnership" | "transferOwnership" | "vaultOfPosition"): FunctionFragment;
    encodeFunctionData(functionFragment: "AAVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DELEGATED", values?: undefined): string;
    encodeFunctionData(functionFragment: "IONIC", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setPairWhitelisted", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "blocksPerYear", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPosition", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPositionAtRatio", values: [string, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundPosition", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundPositionAtRatio", values: [string, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createDelegatedPosition", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "createPosition", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "deregisterVault", values: [string]): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAaveMaxLeverageRatio", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterBorrow", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterRepay", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRegisteredVaults", values?: undefined): string;
    encodeFunctionData(functionFragment: "isVaultRegistered", values: [string]): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalanceBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "registerVault", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "vaultOfPosition", values: [string]): string;
    decodeFunctionResult(functionFragment: "AAVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DELEGATED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "IONIC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerYear", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deregisterVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAaveMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterRepay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRegisteredVaults", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isVaultRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalanceBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultOfPosition", data: BytesLike): Result;
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
export interface LeveragedPositionsFactoryThirdExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LeveragedPositionsFactoryThirdExtensionInterface;
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
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<[BigNumber]>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<[string]>;
        deregisterVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flashloanRouter(overrides?: CallOverrides): Promise<[string]>;
        fundersRegistry(overrides?: CallOverrides): Promise<[string]>;
        getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            maxLeverageRatio: BigNumber;
        }>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<[string[]]>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<[boolean]>;
        minBorrowNative(overrides?: CallOverrides): Promise<[BigNumber]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        rebalanceBorrowRate(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        registerVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<[string]>;
    };
    AAVE(overrides?: CallOverrides): Promise<number>;
    DELEGATED(overrides?: CallOverrides): Promise<number>;
    IONIC(overrides?: CallOverrides): Promise<number>;
    _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
    _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
    createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    creditDelegator(overrides?: CallOverrides): Promise<string>;
    deregisterVault(vault: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flashloanRouter(overrides?: CallOverrides): Promise<string>;
    fundersRegistry(overrides?: CallOverrides): Promise<string>;
    getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getRegisteredVaults(overrides?: CallOverrides): Promise<string[]>;
    isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<boolean>;
    minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
    oracle(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    rebalanceBorrowRate(position: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    registerVault(vault: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vaultOfPosition(position: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        AAVE(overrides?: CallOverrides): Promise<number>;
        DELEGATED(overrides?: CallOverrides): Promise<number>;
        IONIC(overrides?: CallOverrides): Promise<number>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: CallOverrides): Promise<string>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: CallOverrides): Promise<string>;
        creditDelegator(overrides?: CallOverrides): Promise<string>;
        deregisterVault(vault: string, overrides?: CallOverrides): Promise<boolean>;
        flashloanRouter(overrides?: CallOverrides): Promise<string>;
        fundersRegistry(overrides?: CallOverrides): Promise<string>;
        getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<string[]>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<boolean>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        rebalanceBorrowRate(position: string, overrides?: CallOverrides): Promise<void>;
        registerVault(vault: string, overrides?: CallOverrides): Promise<boolean>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<string>;
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
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        creditDelegator(overrides?: CallOverrides): Promise<BigNumber>;
        deregisterVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flashloanRouter(overrides?: CallOverrides): Promise<BigNumber>;
        fundersRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<BigNumber>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<BigNumber>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        rebalanceBorrowRate(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        registerVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        AAVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DELEGATED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        IONIC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _getExtensionFunctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deregisterVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flashloanRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundersRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minBorrowNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalanceBorrowRate(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        registerVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
