import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface ComptrollerExtensionInterfaceInterface extends Interface {
    getFunction(nameOrSignature: "_blacklistBorrowingAgainstCollateral" | "_blacklistBorrowingAgainstCollateralWhitelist" | "_borrowCapWhitelist" | "_removeFlywheel" | "_setBorrowCapForCollateral" | "_setBorrowCapForCollateralWhitelist" | "_setBorrowCapGuardian" | "_setBorrowPaused" | "_setMarketBorrowCaps" | "_setMarketSupplyCaps" | "_setMintPaused" | "_setPauseGuardian" | "_setSeizePaused" | "_setTransferPaused" | "_supplyCapWhitelist" | "_unsupportMarket" | "addNonAccruingFlywheel" | "getAccruingFlywheels" | "getAllBorrowers" | "getAllMarkets" | "getAssetAsCollateralValueCap" | "getRewardsDistributors" | "getWhitelist" | "getWhitelistedBorrowersBorrows" | "getWhitelistedSuppliersSupply" | "isBlacklistBorrowingAgainstCollateralWhitelisted" | "isBorrowCapForCollateralWhitelisted" | "isBorrowCapWhitelisted" | "isSupplyCapWhitelisted"): FunctionFragment;
    encodeFunctionData(functionFragment: "_blacklistBorrowingAgainstCollateral", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_blacklistBorrowingAgainstCollateralWhitelist", values: [AddressLike, AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_borrowCapWhitelist", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_removeFlywheel", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapForCollateral", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapForCollateralWhitelist", values: [AddressLike, AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapGuardian", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBorrowPaused", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_setMarketBorrowCaps", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setMarketSupplyCaps", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setMintPaused", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_setPauseGuardian", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setSeizePaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setTransferPaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_supplyCapWhitelist", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_unsupportMarket", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "addNonAccruingFlywheel", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAccruingFlywheels", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllBorrowers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetAsCollateralValueCap", values: [AddressLike, AddressLike, boolean, AddressLike]): string;
    encodeFunctionData(functionFragment: "getRewardsDistributors", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelist", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedBorrowersBorrows", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getWhitelistedSuppliersSupply", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isBlacklistBorrowingAgainstCollateralWhitelisted", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isBorrowCapForCollateralWhitelisted", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isBorrowCapWhitelisted", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isSupplyCapWhitelisted", values: [AddressLike, AddressLike]): string;
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
}
export interface ComptrollerExtensionInterface extends BaseContract {
    connect(runner?: ContractRunner | null): ComptrollerExtensionInterface;
    waitForDeployment(): Promise<this>;
    interface: ComptrollerExtensionInterfaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _blacklistBorrowingAgainstCollateral: TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        blacklisted: boolean
    ], [
        void
    ], "nonpayable">;
    _blacklistBorrowingAgainstCollateralWhitelist: TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    _borrowCapWhitelist: TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    _removeFlywheel: TypedContractMethod<[
        flywheelAddress: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    _setBorrowCapForCollateral: TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        borrowCap: BigNumberish
    ], [
        void
    ], "nonpayable">;
    _setBorrowCapForCollateralWhitelist: TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    _setBorrowCapGuardian: TypedContractMethod<[
        newBorrowCapGuardian: AddressLike
    ], [
        void
    ], "nonpayable">;
    _setBorrowPaused: TypedContractMethod<[
        cToken: AddressLike,
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    _setMarketBorrowCaps: TypedContractMethod<[
        cTokens: AddressLike[],
        newBorrowCaps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    _setMarketSupplyCaps: TypedContractMethod<[
        cTokens: AddressLike[],
        newSupplyCaps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    _setMintPaused: TypedContractMethod<[
        cToken: AddressLike,
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    _setPauseGuardian: TypedContractMethod<[
        newPauseGuardian: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    _setSeizePaused: TypedContractMethod<[
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    _setTransferPaused: TypedContractMethod<[
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    _supplyCapWhitelist: TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    _unsupportMarket: TypedContractMethod<[
        cToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    addNonAccruingFlywheel: TypedContractMethod<[
        flywheelAddress: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    getAccruingFlywheels: TypedContractMethod<[], [string[]], "view">;
    getAllBorrowers: TypedContractMethod<[], [string[]], "view">;
    getAllMarkets: TypedContractMethod<[], [string[]], "view">;
    getAssetAsCollateralValueCap: TypedContractMethod<[
        collateral: AddressLike,
        cTokenModify: AddressLike,
        redeeming: boolean,
        account: AddressLike
    ], [
        bigint
    ], "view">;
    getRewardsDistributors: TypedContractMethod<[], [string[]], "view">;
    getWhitelist: TypedContractMethod<[], [string[]], "view">;
    getWhitelistedBorrowersBorrows: TypedContractMethod<[
        cToken: AddressLike
    ], [
        bigint
    ], "view">;
    getWhitelistedSuppliersSupply: TypedContractMethod<[
        cToken: AddressLike
    ], [
        bigint
    ], "view">;
    isBlacklistBorrowingAgainstCollateralWhitelisted: TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    isBorrowCapForCollateralWhitelisted: TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    isBorrowCapWhitelisted: TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    isSupplyCapWhitelisted: TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_blacklistBorrowingAgainstCollateral"): TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        blacklisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_blacklistBorrowingAgainstCollateralWhitelist"): TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_borrowCapWhitelist"): TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_removeFlywheel"): TypedContractMethod<[
        flywheelAddress: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setBorrowCapForCollateral"): TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        borrowCap: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setBorrowCapForCollateralWhitelist"): TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setBorrowCapGuardian"): TypedContractMethod<[
        newBorrowCapGuardian: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setBorrowPaused"): TypedContractMethod<[
        cToken: AddressLike,
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setMarketBorrowCaps"): TypedContractMethod<[
        cTokens: AddressLike[],
        newBorrowCaps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setMarketSupplyCaps"): TypedContractMethod<[
        cTokens: AddressLike[],
        newSupplyCaps: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setMintPaused"): TypedContractMethod<[
        cToken: AddressLike,
        state: boolean
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setPauseGuardian"): TypedContractMethod<[
        newPauseGuardian: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setSeizePaused"): TypedContractMethod<[state: boolean], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "_setTransferPaused"): TypedContractMethod<[state: boolean], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "_supplyCapWhitelist"): TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_unsupportMarket"): TypedContractMethod<[cToken: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "addNonAccruingFlywheel"): TypedContractMethod<[
        flywheelAddress: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAccruingFlywheels"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getAllBorrowers"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getAllMarkets"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getAssetAsCollateralValueCap"): TypedContractMethod<[
        collateral: AddressLike,
        cTokenModify: AddressLike,
        redeeming: boolean,
        account: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getRewardsDistributors"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getWhitelist"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getWhitelistedBorrowersBorrows"): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getWhitelistedSuppliersSupply"): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "isBlacklistBorrowingAgainstCollateralWhitelisted"): TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "isBorrowCapForCollateralWhitelisted"): TypedContractMethod<[
        cTokenBorrow: AddressLike,
        cTokenCollateral: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "isBorrowCapWhitelisted"): TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "isSupplyCapWhitelisted"): TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    filters: {};
}
