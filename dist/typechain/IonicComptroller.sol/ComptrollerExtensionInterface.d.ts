import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface ComptrollerExtensionInterfaceInterface extends utils.Interface {
    functions: {
        "_blacklistBorrowingAgainstCollateral(address,address,bool)": FunctionFragment;
        "_blacklistBorrowingAgainstCollateralWhitelist(address,address,address,bool)": FunctionFragment;
        "_borrowCapWhitelist(address,address,bool)": FunctionFragment;
        "_removeFlywheel(address)": FunctionFragment;
        "_setBorrowCapForCollateral(address,address,uint256)": FunctionFragment;
        "_setBorrowCapForCollateralWhitelist(address,address,address,bool)": FunctionFragment;
        "_setBorrowCapGuardian(address)": FunctionFragment;
        "_setBorrowPaused(address,bool)": FunctionFragment;
        "_setMarketBorrowCaps(address[],uint256[])": FunctionFragment;
        "_setMarketSupplyCaps(address[],uint256[])": FunctionFragment;
        "_setMintPaused(address,bool)": FunctionFragment;
        "_setPauseGuardian(address)": FunctionFragment;
        "_setSeizePaused(bool)": FunctionFragment;
        "_setTransferPaused(bool)": FunctionFragment;
        "_supplyCapWhitelist(address,address,bool)": FunctionFragment;
        "_unsupportMarket(address)": FunctionFragment;
        "addNonAccruingFlywheel(address)": FunctionFragment;
        "getAccruingFlywheels()": FunctionFragment;
        "getAllBorrowers()": FunctionFragment;
        "getAllMarkets()": FunctionFragment;
        "getAssetAsCollateralValueCap(address,address,bool,address)": FunctionFragment;
        "getRewardsDistributors()": FunctionFragment;
        "getWhitelist()": FunctionFragment;
        "getWhitelistedBorrowersBorrows(address)": FunctionFragment;
        "getWhitelistedSuppliersSupply(address)": FunctionFragment;
        "isBlacklistBorrowingAgainstCollateralWhitelisted(address,address,address)": FunctionFragment;
        "isBorrowCapForCollateralWhitelisted(address,address,address)": FunctionFragment;
        "isBorrowCapWhitelisted(address,address)": FunctionFragment;
        "isSupplyCapWhitelisted(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_blacklistBorrowingAgainstCollateral" | "_blacklistBorrowingAgainstCollateralWhitelist" | "_borrowCapWhitelist" | "_removeFlywheel" | "_setBorrowCapForCollateral" | "_setBorrowCapForCollateralWhitelist" | "_setBorrowCapGuardian" | "_setBorrowPaused" | "_setMarketBorrowCaps" | "_setMarketSupplyCaps" | "_setMintPaused" | "_setPauseGuardian" | "_setSeizePaused" | "_setTransferPaused" | "_supplyCapWhitelist" | "_unsupportMarket" | "addNonAccruingFlywheel" | "getAccruingFlywheels" | "getAllBorrowers" | "getAllMarkets" | "getAssetAsCollateralValueCap" | "getRewardsDistributors" | "getWhitelist" | "getWhitelistedBorrowersBorrows" | "getWhitelistedSuppliersSupply" | "isBlacklistBorrowingAgainstCollateralWhitelisted" | "isBorrowCapForCollateralWhitelisted" | "isBorrowCapWhitelisted" | "isSupplyCapWhitelisted"): FunctionFragment;
    encodeFunctionData(functionFragment: "_blacklistBorrowingAgainstCollateral", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_blacklistBorrowingAgainstCollateralWhitelist", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_borrowCapWhitelist", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_removeFlywheel", values: [string]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapForCollateral", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapForCollateralWhitelist", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "_setBorrowPaused", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "_setMarketBorrowCaps", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setMarketSupplyCaps", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setMintPaused", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "_setPauseGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "_setSeizePaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setTransferPaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_supplyCapWhitelist", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_unsupportMarket", values: [string]): string;
    encodeFunctionData(functionFragment: "addNonAccruingFlywheel", values: [string]): string;
    encodeFunctionData(functionFragment: "getAccruingFlywheels", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllBorrowers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetAsCollateralValueCap", values: [string, string, boolean, string]): string;
    encodeFunctionData(functionFragment: "getRewardsDistributors", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelist", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedBorrowersBorrows", values: [string]): string;
    encodeFunctionData(functionFragment: "getWhitelistedSuppliersSupply", values: [string]): string;
    encodeFunctionData(functionFragment: "isBlacklistBorrowingAgainstCollateralWhitelisted", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "isBorrowCapForCollateralWhitelisted", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "isBorrowCapWhitelisted", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isSupplyCapWhitelisted", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "_blacklistBorrowingAgainstCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_blacklistBorrowingAgainstCollateralWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_borrowCapWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_removeFlywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowCapForCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowCapForCollateralWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowCapGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMarketBorrowCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMarketSupplyCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMintPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPauseGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setSeizePaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setTransferPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_supplyCapWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_unsupportMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addNonAccruingFlywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruingFlywheels", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllBorrowers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetAsCollateralValueCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsDistributors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedBorrowersBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedSuppliersSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBlacklistBorrowingAgainstCollateralWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBorrowCapForCollateralWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBorrowCapWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSupplyCapWhitelisted", data: BytesLike): Result;
    events: {};
}
export interface ComptrollerExtensionInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ComptrollerExtensionInterfaceInterface;
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
        _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _removeFlywheel(flywheelAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setBorrowCapForCollateral(cTokenBorrow: string, cTokenCollateral: string, borrowCap: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setBorrowCapForCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setBorrowCapGuardian(newBorrowCapGuardian: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setBorrowPaused(cToken: string, state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setMarketBorrowCaps(cTokens: string[], newBorrowCaps: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setMarketSupplyCaps(cTokens: string[], newSupplyCaps: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setMintPaused(cToken: string, state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setPauseGuardian(newPauseGuardian: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setSeizePaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setTransferPaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _unsupportMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addNonAccruingFlywheel(flywheelAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAccruingFlywheels(overrides?: CallOverrides): Promise<[string[]]>;
        getAllBorrowers(overrides?: CallOverrides): Promise<[string[]]>;
        getAllMarkets(overrides?: CallOverrides): Promise<[string[]]>;
        getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRewardsDistributors(overrides?: CallOverrides): Promise<[string[]]>;
        getWhitelist(overrides?: CallOverrides): Promise<[string[]]>;
        getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            borrowed: BigNumber;
        }>;
        getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            supplied: BigNumber;
        }>;
        isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _removeFlywheel(flywheelAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setBorrowCapForCollateral(cTokenBorrow: string, cTokenCollateral: string, borrowCap: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setBorrowCapForCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setBorrowCapGuardian(newBorrowCapGuardian: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setBorrowPaused(cToken: string, state: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setMarketBorrowCaps(cTokens: string[], newBorrowCaps: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setMarketSupplyCaps(cTokens: string[], newSupplyCaps: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setMintPaused(cToken: string, state: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setPauseGuardian(newPauseGuardian: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setSeizePaused(state: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setTransferPaused(state: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _unsupportMarket(cToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addNonAccruingFlywheel(flywheelAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAccruingFlywheels(overrides?: CallOverrides): Promise<string[]>;
    getAllBorrowers(overrides?: CallOverrides): Promise<string[]>;
    getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
    getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<BigNumber>;
    getRewardsDistributors(overrides?: CallOverrides): Promise<string[]>;
    getWhitelist(overrides?: CallOverrides): Promise<string[]>;
    getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<boolean>;
    isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<boolean>;
    isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<boolean>;
    isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: CallOverrides): Promise<void>;
        _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        _removeFlywheel(flywheelAddress: string, overrides?: CallOverrides): Promise<boolean>;
        _setBorrowCapForCollateral(cTokenBorrow: string, cTokenCollateral: string, borrowCap: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setBorrowCapForCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        _setBorrowCapGuardian(newBorrowCapGuardian: string, overrides?: CallOverrides): Promise<void>;
        _setBorrowPaused(cToken: string, state: boolean, overrides?: CallOverrides): Promise<boolean>;
        _setMarketBorrowCaps(cTokens: string[], newBorrowCaps: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        _setMarketSupplyCaps(cTokens: string[], newSupplyCaps: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        _setMintPaused(cToken: string, state: boolean, overrides?: CallOverrides): Promise<boolean>;
        _setPauseGuardian(newPauseGuardian: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setSeizePaused(state: boolean, overrides?: CallOverrides): Promise<boolean>;
        _setTransferPaused(state: boolean, overrides?: CallOverrides): Promise<boolean>;
        _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        _unsupportMarket(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        addNonAccruingFlywheel(flywheelAddress: string, overrides?: CallOverrides): Promise<boolean>;
        getAccruingFlywheels(overrides?: CallOverrides): Promise<string[]>;
        getAllBorrowers(overrides?: CallOverrides): Promise<string[]>;
        getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
        getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsDistributors(overrides?: CallOverrides): Promise<string[]>;
        getWhitelist(overrides?: CallOverrides): Promise<string[]>;
        getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<boolean>;
        isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<boolean>;
        isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<boolean>;
        isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _removeFlywheel(flywheelAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setBorrowCapForCollateral(cTokenBorrow: string, cTokenCollateral: string, borrowCap: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setBorrowCapForCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setBorrowCapGuardian(newBorrowCapGuardian: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setBorrowPaused(cToken: string, state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setMarketBorrowCaps(cTokens: string[], newBorrowCaps: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setMarketSupplyCaps(cTokens: string[], newSupplyCaps: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setMintPaused(cToken: string, state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setPauseGuardian(newPauseGuardian: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setSeizePaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setTransferPaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _unsupportMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addNonAccruingFlywheel(flywheelAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAccruingFlywheels(overrides?: CallOverrides): Promise<BigNumber>;
        getAllBorrowers(overrides?: CallOverrides): Promise<BigNumber>;
        getAllMarkets(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsDistributors(overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelist(overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _removeFlywheel(flywheelAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setBorrowCapForCollateral(cTokenBorrow: string, cTokenCollateral: string, borrowCap: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setBorrowCapForCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setBorrowCapGuardian(newBorrowCapGuardian: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setBorrowPaused(cToken: string, state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setMarketBorrowCaps(cTokens: string[], newBorrowCaps: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setMarketSupplyCaps(cTokens: string[], newSupplyCaps: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setMintPaused(cToken: string, state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setPauseGuardian(newPauseGuardian: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setSeizePaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setTransferPaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _unsupportMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addNonAccruingFlywheel(flywheelAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAccruingFlywheels(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllBorrowers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsDistributors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
