import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface ILeveragedPositionsFactoryInterface extends utils.Interface {
    functions: {
        "_listExtensions()": FunctionFragment;
        "_registerExtension(address,address)": FunctionFragment;
        "_replaceExtensions(address[])": FunctionFragment;
        "_setIonicPairWhitelisted(address,address,bool)": FunctionFragment;
        "_setPairWhitelisted(address,address,bool)": FunctionFragment;
        "closeAndRemoveUserPosition(address)": FunctionFragment;
        "createAavePosition(address,address,address,bool)": FunctionFragment;
        "createAndFundDelegatedPosition(address,address,address,bool,address,uint256)": FunctionFragment;
        "createAndFundDelegatedPositionAtRatio(address,address,address,bool,address,uint256,uint256)": FunctionFragment;
        "createAndFundIonicPosition(address,address,bool,address,uint256)": FunctionFragment;
        "createAndFundIonicPositionAtRatio(address,address,bool,address,uint256,uint256)": FunctionFragment;
        "createAndFundPosition(address,address,address,bool,address,uint256)": FunctionFragment;
        "createAndFundPositionAtRatio(address,address,address,bool,address,uint256,uint256)": FunctionFragment;
        "createDelegatedPosition(address,address,address,bool)": FunctionFragment;
        "createIonicPosition(address,address,address,bool)": FunctionFragment;
        "createPosition(address,address,address,bool)": FunctionFragment;
        "creditDelegator()": FunctionFragment;
        "deregisterVault(address)": FunctionFragment;
        "flashloanRouter()": FunctionFragment;
        "fundPosition(address,address,uint256)": FunctionFragment;
        "fundersRegistry()": FunctionFragment;
        "getAccountsWithOpenPositions()": FunctionFragment;
        "getAssetBorrowRate(address)": FunctionFragment;
        "getAssetPrice(address)": FunctionFragment;
        "getBorrowableMarketsByCollateral(address)": FunctionFragment;
        "getBorrowedPriceOnPositionCreated(address)": FunctionFragment;
        "getCollateralPriceOnPositionCreated(address)": FunctionFragment;
        "getLeverageRatioAfterBorrow(address,address,uint256,uint256,uint256)": FunctionFragment;
        "getLeverageRatioAfterRepay(address,address,uint256,uint256,uint256)": FunctionFragment;
        "getLiquidationThreshold(address,uint256,address,uint256)": FunctionFragment;
        "getMinBorrowNative()": FunctionFragment;
        "getNondelegatedMaxLeverageRatio(address,uint256,address)": FunctionFragment;
        "getPositionsByAccount(address)": FunctionFragment;
        "getPositionsExtension(bytes4)": FunctionFragment;
        "getPositionsTotalCollateralValue()": FunctionFragment;
        "getRegisteredVaults()": FunctionFragment;
        "getWhitelistedCollateralMarkets()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isFactoryPosition(address)": FunctionFragment;
        "isVaultRegistered(address)": FunctionFragment;
        "minBorrowNative()": FunctionFragment;
        "oracle()": FunctionFragment;
        "owner()": FunctionFragment;
        "registerVault(address)": FunctionFragment;
        "reinitialize(address)": FunctionFragment;
        "removeClosedPosition(address)": FunctionFragment;
        "swap(address,uint256,address)": FunctionFragment;
        "vaultOfPosition(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_listExtensions" | "_registerExtension" | "_replaceExtensions" | "_setIonicPairWhitelisted" | "_setPairWhitelisted" | "closeAndRemoveUserPosition" | "createAavePosition" | "createAndFundDelegatedPosition" | "createAndFundDelegatedPositionAtRatio" | "createAndFundIonicPosition" | "createAndFundIonicPositionAtRatio" | "createAndFundPosition" | "createAndFundPositionAtRatio" | "createDelegatedPosition" | "createIonicPosition" | "createPosition" | "creditDelegator" | "deregisterVault" | "flashloanRouter" | "fundPosition" | "fundersRegistry" | "getAccountsWithOpenPositions" | "getAssetBorrowRate" | "getAssetPrice" | "getBorrowableMarketsByCollateral" | "getBorrowedPriceOnPositionCreated" | "getCollateralPriceOnPositionCreated" | "getLeverageRatioAfterBorrow" | "getLeverageRatioAfterRepay" | "getLiquidationThreshold" | "getMinBorrowNative" | "getNondelegatedMaxLeverageRatio" | "getPositionsByAccount" | "getPositionsExtension" | "getPositionsTotalCollateralValue" | "getRegisteredVaults" | "getWhitelistedCollateralMarkets" | "initialize" | "isFactoryPosition" | "isVaultRegistered" | "minBorrowNative" | "oracle" | "owner" | "registerVault" | "reinitialize" | "removeClosedPosition" | "swap" | "vaultOfPosition"): FunctionFragment;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [string, string]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [string[]]): string;
    encodeFunctionData(functionFragment: "_setIonicPairWhitelisted", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_setPairWhitelisted", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "closeAndRemoveUserPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "createAavePosition", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPosition", values: [string, string, string, boolean, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPositionAtRatio", values: [
        string,
        string,
        string,
        boolean,
        string,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPosition", values: [string, string, boolean, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPositionAtRatio", values: [string, string, boolean, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundPosition", values: [string, string, string, boolean, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundPositionAtRatio", values: [
        string,
        string,
        string,
        boolean,
        string,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "createDelegatedPosition", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "createIonicPosition", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "createPosition", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "creditDelegator", values?: undefined): string;
    encodeFunctionData(functionFragment: "deregisterVault", values: [string]): string;
    encodeFunctionData(functionFragment: "flashloanRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundPosition", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fundersRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountsWithOpenPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getBorrowableMarketsByCollateral", values: [string]): string;
    encodeFunctionData(functionFragment: "getBorrowedPriceOnPositionCreated", values: [string]): string;
    encodeFunctionData(functionFragment: "getCollateralPriceOnPositionCreated", values: [string]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterBorrow", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterRepay", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMinBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNondelegatedMaxLeverageRatio", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getPositionsByAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionsExtension", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getPositionsTotalCollateralValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRegisteredVaults", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedCollateralMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isFactoryPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "isVaultRegistered", values: [string]): string;
    encodeFunctionData(functionFragment: "minBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerVault", values: [string]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [string]): string;
    encodeFunctionData(functionFragment: "removeClosedPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "swap", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "vaultOfPosition", values: [string]): string;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setIonicPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeAndRemoveUserPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAavePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditDelegator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deregisterVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloanRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundersRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountsWithOpenPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowableMarketsByCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowedPriceOnPositionCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralPriceOnPositionCreated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterRepay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNondelegatedMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsByAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsTotalCollateralValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRegisteredVaults", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedCollateralMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFactoryPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isVaultRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeClosedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vaultOfPosition", data: BytesLike): Result;
    events: {
        "PositionCreated(address,address,address,address,uint16)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
}
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
export interface ILeveragedPositionsFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILeveragedPositionsFactoryInterface;
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
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundIonicPosition(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundIonicPositionAtRatio(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createIonicPosition(posOwner: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<[string]>;
        deregisterVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flashloanRouter(overrides?: CallOverrides): Promise<[string]>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fundersRegistry(overrides?: CallOverrides): Promise<[string]>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<[string[]]>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<[string[]]>;
        getBorrowedPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getCollateralPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNondelegatedMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            maxLeverageRatio: BigNumber;
        }>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<[string[], boolean[]]>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<[string[]]>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<[string[]]>;
        initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<[boolean]>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<[boolean]>;
        minBorrowNative(overrides?: CallOverrides): Promise<[BigNumber]>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        registerVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        reinitialize(_oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeClosedPosition(closedPosition: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<[string]>;
    };
    _listExtensions(overrides?: CallOverrides): Promise<string[]>;
    _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _replaceExtensions(extensions: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundIonicPosition(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundIonicPositionAtRatio(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createIonicPosition(posOwner: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    creditDelegator(overrides?: CallOverrides): Promise<string>;
    deregisterVault(vault: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flashloanRouter(overrides?: CallOverrides): Promise<string>;
    fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fundersRegistry(overrides?: CallOverrides): Promise<string>;
    getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<string[]>;
    getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<string[]>;
    getBorrowedPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    getCollateralPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getMinBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
    getNondelegatedMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<[string[], boolean[]]>;
    getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<string>;
    getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<BigNumber>;
    getRegisteredVaults(overrides?: CallOverrides): Promise<string[]>;
    getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<string[]>;
    initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isFactoryPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
    isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<boolean>;
    minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
    oracle(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    registerVault(vault: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    reinitialize(_oracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeClosedPosition(closedPosition: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    vaultOfPosition(position: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _listExtensions(overrides?: CallOverrides): Promise<string[]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: CallOverrides): Promise<void>;
        _replaceExtensions(extensions: string[], overrides?: CallOverrides): Promise<void>;
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        closeAndRemoveUserPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: CallOverrides): Promise<string>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundIonicPosition(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundIonicPositionAtRatio(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: CallOverrides): Promise<string>;
        createIonicPosition(posOwner: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: CallOverrides): Promise<string>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: CallOverrides): Promise<string>;
        creditDelegator(overrides?: CallOverrides): Promise<string>;
        deregisterVault(vault: string, overrides?: CallOverrides): Promise<boolean>;
        flashloanRouter(overrides?: CallOverrides): Promise<string>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fundersRegistry(overrides?: CallOverrides): Promise<string>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<string[]>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<string[]>;
        getBorrowedPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCollateralPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        getNondelegatedMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<[string[], boolean[]]>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<string>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<BigNumber>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<string[]>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<string[]>;
        initialize(_delegator: string, _oracle: string, overrides?: CallOverrides): Promise<void>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<boolean>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        registerVault(vault: string, overrides?: CallOverrides): Promise<boolean>;
        reinitialize(_oracle: string, overrides?: CallOverrides): Promise<void>;
        removeClosedPosition(closedPosition: string, overrides?: CallOverrides): Promise<boolean>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "PositionCreated(address,address,address,address,uint16)"(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
        PositionCreated(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
    };
    estimateGas: {
        _listExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundIonicPosition(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundIonicPositionAtRatio(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createIonicPosition(posOwner: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        creditDelegator(overrides?: CallOverrides): Promise<BigNumber>;
        deregisterVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flashloanRouter(overrides?: CallOverrides): Promise<BigNumber>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fundersRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowedPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCollateralPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        getNondelegatedMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<BigNumber>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<BigNumber>;
        minBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        registerVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        reinitialize(_oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeClosedPosition(closedPosition: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _listExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundIonicPosition(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundIonicPositionAtRatio(_collateralAsset: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createIonicPosition(posOwner: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        creditDelegator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deregisterVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flashloanRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fundersRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowedPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollateralPriceOnPositionCreated(positionAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNondelegatedMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minBorrowNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        reinitialize(_oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeClosedPosition(closedPosition: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        vaultOfPosition(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
