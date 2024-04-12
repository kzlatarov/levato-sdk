import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface IonicComptrollerInterface extends Interface {
    getFunction(nameOrSignature: "_acceptAdmin" | "_addRewardsDistributor" | "_afterNonReentrant" | "_becomeImplementation" | "_beforeNonReentrant" | "_blacklistBorrowingAgainstCollateral" | "_blacklistBorrowingAgainstCollateralWhitelist" | "_borrowCapWhitelist" | "_deployMarket" | "_removeFlywheel" | "_setBorrowCapForCollateral" | "_setBorrowCapForCollateralWhitelist" | "_setBorrowCapGuardian" | "_setBorrowPaused" | "_setCloseFactor" | "_setCollateralFactor" | "_setLiquidationIncentive" | "_setMarketBorrowCaps" | "_setMarketSupplyCaps" | "_setMintPaused" | "_setPauseGuardian" | "_setPendingAdmin" | "_setPriceOracle" | "_setSeizePaused" | "_setTransferPaused" | "_setWhitelistEnforcement" | "_setWhitelistStatuses" | "_supplyCapWhitelist" | "_toggleAdminRights" | "_unsupportMarket" | "_upgrade" | "accountAssets" | "addNonAccruingFlywheel" | "admin" | "adminHasRights" | "borrowAllowed" | "borrowCapForCollateral" | "borrowCaps" | "borrowGuardianPaused" | "borrowWithinLimits" | "borrowingAgainstCollateralBlacklist" | "cTokensByUnderlying" | "checkMembership" | "closeFactorMantissa" | "comptrollerImplementation" | "enforceWhitelist" | "enterMarkets" | "exitMarket" | "getAccountLiquidity" | "getAccruingFlywheels" | "getAllBorrowers" | "getAllMarkets" | "getAssetAsCollateralValueCap" | "getAssetsIn" | "getHypotheticalAccountLiquidity" | "getMaxRedeemOrBorrow" | "getRewardsDistributors" | "getWhitelist" | "getWhitelistedBorrowersBorrows" | "getWhitelistedSuppliersSupply" | "ionicAdmin" | "ionicAdminHasRights" | "isBlacklistBorrowingAgainstCollateralWhitelisted" | "isBorrowCapForCollateralWhitelisted" | "isBorrowCapWhitelisted" | "isDeprecated" | "isSupplyCapWhitelisted" | "isUserOfPool" | "liquidateBorrowAllowed" | "liquidateCalculateSeizeTokens" | "liquidationIncentiveMantissa" | "markets" | "mintAllowed" | "mintGuardianPaused" | "mintVerify" | "oracle" | "pauseGuardian" | "pendingAdmin" | "redeemAllowed" | "redeemVerify" | "repayBorrowAllowed" | "rewardsDistributors" | "seizeAllowed" | "suppliers" | "supplyCaps" | "transferAllowed" | "whitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "_acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "_addRewardsDistributor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_afterNonReentrant", values?: undefined): string;
    encodeFunctionData(functionFragment: "_becomeImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "_beforeNonReentrant", values?: undefined): string;
    encodeFunctionData(functionFragment: "_blacklistBorrowingAgainstCollateral", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_blacklistBorrowingAgainstCollateralWhitelist", values: [AddressLike, AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_borrowCapWhitelist", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_deployMarket", values: [BigNumberish, BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_removeFlywheel", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapForCollateral", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapForCollateralWhitelist", values: [AddressLike, AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapGuardian", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setBorrowPaused", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_setCloseFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setCollateralFactor", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setLiquidationIncentive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setMarketBorrowCaps", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setMarketSupplyCaps", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setMintPaused", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_setPauseGuardian", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setPriceOracle", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setSeizePaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setTransferPaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setWhitelistEnforcement", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setWhitelistStatuses", values: [AddressLike[], boolean[]]): string;
    encodeFunctionData(functionFragment: "_supplyCapWhitelist", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "_toggleAdminRights", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_unsupportMarket", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_upgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "accountAssets", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addNonAccruingFlywheel", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAllowed", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowCapForCollateral", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowCaps", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowGuardianPaused", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowWithinLimits", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowingAgainstCollateralBlacklist", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "cTokensByUnderlying", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "checkMembership", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "closeFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "comptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "enforceWhitelist", values?: undefined): string;
    encodeFunctionData(functionFragment: "enterMarkets", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "exitMarket", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAccountLiquidity", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAccruingFlywheels", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllBorrowers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetAsCollateralValueCap", values: [AddressLike, AddressLike, boolean, AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetsIn", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getHypotheticalAccountLiquidity", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMaxRedeemOrBorrow", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "getRewardsDistributors", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelist", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedBorrowersBorrows", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getWhitelistedSuppliersSupply", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "ionicAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicAdminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "isBlacklistBorrowingAgainstCollateralWhitelisted", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isBorrowCapForCollateralWhitelisted", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isBorrowCapWhitelisted", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isDeprecated", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isSupplyCapWhitelisted", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isUserOfPool", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "liquidateBorrowAllowed", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidateCalculateSeizeTokens", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidationIncentiveMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "markets", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "mintAllowed", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintGuardianPaused", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "mintVerify", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseGuardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemAllowed", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemVerify", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowAllowed", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardsDistributors", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "seizeAllowed", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "suppliers", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "supplyCaps", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "transferAllowed", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "whitelist", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "_acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_addRewardsDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_afterNonReentrant", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_becomeImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_beforeNonReentrant", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_blacklistBorrowingAgainstCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_blacklistBorrowingAgainstCollateralWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_borrowCapWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_deployMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_removeFlywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowCapForCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowCapForCollateralWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowCapGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setBorrowPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCloseFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCollateralFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setLiquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMarketBorrowCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMarketSupplyCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setMintPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPauseGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setSeizePaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setTransferPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setWhitelistEnforcement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setWhitelistStatuses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_supplyCapWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toggleAdminRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_unsupportMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addNonAccruingFlywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminHasRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowCapForCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowWithinLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowingAgainstCollateralBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cTokensByUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkMembership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFactorMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptrollerImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enforceWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruingFlywheels", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllBorrowers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetAsCollateralValueCap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHypotheticalAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxRedeemOrBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsDistributors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedBorrowersBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedSuppliersSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicAdminHasRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBlacklistBorrowingAgainstCollateralWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBorrowCapForCollateralWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBorrowCapWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDeprecated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSupplyCapWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isUserOfPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateCalculateSeizeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationIncentiveMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsDistributors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "suppliers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
}
export interface IonicComptroller extends BaseContract {
    connect(runner?: ContractRunner | null): IonicComptroller;
    waitForDeployment(): Promise<this>;
    interface: IonicComptrollerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _acceptAdmin: TypedContractMethod<[], [bigint], "nonpayable">;
    _addRewardsDistributor: TypedContractMethod<[
        distributor: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    _afterNonReentrant: TypedContractMethod<[], [void], "nonpayable">;
    _becomeImplementation: TypedContractMethod<[], [void], "nonpayable">;
    _beforeNonReentrant: TypedContractMethod<[], [void], "nonpayable">;
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
    _deployMarket: TypedContractMethod<[
        delegateType: BigNumberish,
        constructorData: BytesLike,
        becomeImplData: BytesLike,
        collateralFactorMantissa: BigNumberish
    ], [
        bigint
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
    _setCloseFactor: TypedContractMethod<[
        newCloseFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    _setCollateralFactor: TypedContractMethod<[
        market: AddressLike,
        newCollateralFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    _setLiquidationIncentive: TypedContractMethod<[
        newLiquidationIncentiveMantissa: BigNumberish
    ], [
        bigint
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
    _setPendingAdmin: TypedContractMethod<[
        newPendingAdmin: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    _setPriceOracle: TypedContractMethod<[
        newOracle: AddressLike
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
    _setWhitelistEnforcement: TypedContractMethod<[
        enforce: boolean
    ], [
        bigint
    ], "nonpayable">;
    _setWhitelistStatuses: TypedContractMethod<[
        _suppliers: AddressLike[],
        statuses: boolean[]
    ], [
        bigint
    ], "nonpayable">;
    _supplyCapWhitelist: TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    _toggleAdminRights: TypedContractMethod<[
        hasRights: boolean
    ], [
        bigint
    ], "nonpayable">;
    _unsupportMarket: TypedContractMethod<[
        cToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    _upgrade: TypedContractMethod<[], [void], "nonpayable">;
    accountAssets: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        string
    ], "view">;
    addNonAccruingFlywheel: TypedContractMethod<[
        flywheelAddress: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    admin: TypedContractMethod<[], [string], "view">;
    adminHasRights: TypedContractMethod<[], [boolean], "view">;
    borrowAllowed: TypedContractMethod<[
        cToken: AddressLike,
        borrower: AddressLike,
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    borrowCapForCollateral: TypedContractMethod<[
        borrowed: AddressLike,
        collateral: AddressLike
    ], [
        bigint
    ], "view">;
    borrowCaps: TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    borrowGuardianPaused: TypedContractMethod<[
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
    borrowWithinLimits: TypedContractMethod<[
        cToken: AddressLike,
        accountBorrowsNew: BigNumberish
    ], [
        bigint
    ], "view">;
    borrowingAgainstCollateralBlacklist: TypedContractMethod<[
        borrowed: AddressLike,
        collateral: AddressLike
    ], [
        boolean
    ], "view">;
    cTokensByUnderlying: TypedContractMethod<[
        arg0: AddressLike
    ], [
        string
    ], "view">;
    checkMembership: TypedContractMethod<[
        account: AddressLike,
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
    closeFactorMantissa: TypedContractMethod<[], [bigint], "view">;
    comptrollerImplementation: TypedContractMethod<[], [string], "view">;
    enforceWhitelist: TypedContractMethod<[], [boolean], "view">;
    enterMarkets: TypedContractMethod<[
        cTokens: AddressLike[]
    ], [
        bigint[]
    ], "nonpayable">;
    exitMarket: TypedContractMethod<[
        cToken: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getAccountLiquidity: TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
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
    getAssetsIn: TypedContractMethod<[account: AddressLike], [string[]], "view">;
    getHypotheticalAccountLiquidity: TypedContractMethod<[
        account: AddressLike,
        cTokenModify: AddressLike,
        redeemTokens: BigNumberish,
        borrowAmount: BigNumberish
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
    getMaxRedeemOrBorrow: TypedContractMethod<[
        account: AddressLike,
        cToken: AddressLike,
        isBorrow: boolean
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
    ionicAdmin: TypedContractMethod<[], [string], "view">;
    ionicAdminHasRights: TypedContractMethod<[], [boolean], "view">;
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
    isDeprecated: TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
    isSupplyCapWhitelisted: TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    isUserOfPool: TypedContractMethod<[user: AddressLike], [boolean], "view">;
    liquidateBorrowAllowed: TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    liquidateCalculateSeizeTokens: TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        repayAmount: BigNumberish
    ], [
        [bigint, bigint]
    ], "view">;
    liquidationIncentiveMantissa: TypedContractMethod<[], [bigint], "view">;
    markets: TypedContractMethod<[
        cToken: AddressLike
    ], [
        [boolean, bigint]
    ], "view">;
    mintAllowed: TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        mintAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    mintGuardianPaused: TypedContractMethod<[
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
    mintVerify: TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        actualMintAmount: BigNumberish,
        mintTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    oracle: TypedContractMethod<[], [string], "view">;
    pauseGuardian: TypedContractMethod<[], [string], "view">;
    pendingAdmin: TypedContractMethod<[], [string], "view">;
    redeemAllowed: TypedContractMethod<[
        cToken: AddressLike,
        redeemer: AddressLike,
        redeemTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    redeemVerify: TypedContractMethod<[
        cToken: AddressLike,
        redeemer: AddressLike,
        redeemAmount: BigNumberish,
        redeemTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    repayBorrowAllowed: TypedContractMethod<[
        cToken: AddressLike,
        payer: AddressLike,
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    rewardsDistributors: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        string
    ], "view">;
    seizeAllowed: TypedContractMethod<[
        cTokenCollateral: AddressLike,
        cTokenBorrowed: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    suppliers: TypedContractMethod<[account: AddressLike], [boolean], "view">;
    supplyCaps: TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    transferAllowed: TypedContractMethod<[
        cToken: AddressLike,
        src: AddressLike,
        dst: AddressLike,
        transferTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    whitelist: TypedContractMethod<[account: AddressLike], [boolean], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_acceptAdmin"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_addRewardsDistributor"): TypedContractMethod<[distributor: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_afterNonReentrant"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "_becomeImplementation"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "_beforeNonReentrant"): TypedContractMethod<[], [void], "nonpayable">;
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
    getFunction(nameOrSignature: "_deployMarket"): TypedContractMethod<[
        delegateType: BigNumberish,
        constructorData: BytesLike,
        becomeImplData: BytesLike,
        collateralFactorMantissa: BigNumberish
    ], [
        bigint
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
    getFunction(nameOrSignature: "_setCloseFactor"): TypedContractMethod<[
        newCloseFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setCollateralFactor"): TypedContractMethod<[
        market: AddressLike,
        newCollateralFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setLiquidationIncentive"): TypedContractMethod<[
        newLiquidationIncentiveMantissa: BigNumberish
    ], [
        bigint
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
    getFunction(nameOrSignature: "_setPendingAdmin"): TypedContractMethod<[
        newPendingAdmin: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setPriceOracle"): TypedContractMethod<[newOracle: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_setSeizePaused"): TypedContractMethod<[state: boolean], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "_setTransferPaused"): TypedContractMethod<[state: boolean], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "_setWhitelistEnforcement"): TypedContractMethod<[enforce: boolean], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_setWhitelistStatuses"): TypedContractMethod<[
        _suppliers: AddressLike[],
        statuses: boolean[]
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_supplyCapWhitelist"): TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike,
        whitelisted: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_toggleAdminRights"): TypedContractMethod<[hasRights: boolean], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_unsupportMarket"): TypedContractMethod<[cToken: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_upgrade"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "accountAssets"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "addNonAccruingFlywheel"): TypedContractMethod<[
        flywheelAddress: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "adminHasRights"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "borrowAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        borrower: AddressLike,
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "borrowCapForCollateral"): TypedContractMethod<[
        borrowed: AddressLike,
        collateral: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "borrowCaps"): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "borrowGuardianPaused"): TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "borrowWithinLimits"): TypedContractMethod<[
        cToken: AddressLike,
        accountBorrowsNew: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "borrowingAgainstCollateralBlacklist"): TypedContractMethod<[
        borrowed: AddressLike,
        collateral: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "cTokensByUnderlying"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "checkMembership"): TypedContractMethod<[
        account: AddressLike,
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "closeFactorMantissa"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "comptrollerImplementation"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "enforceWhitelist"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "enterMarkets"): TypedContractMethod<[cTokens: AddressLike[]], [bigint[]], "nonpayable">;
    getFunction(nameOrSignature: "exitMarket"): TypedContractMethod<[cToken: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "getAccountLiquidity"): TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
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
    getFunction(nameOrSignature: "getAssetsIn"): TypedContractMethod<[account: AddressLike], [string[]], "view">;
    getFunction(nameOrSignature: "getHypotheticalAccountLiquidity"): TypedContractMethod<[
        account: AddressLike,
        cTokenModify: AddressLike,
        redeemTokens: BigNumberish,
        borrowAmount: BigNumberish
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "getMaxRedeemOrBorrow"): TypedContractMethod<[
        account: AddressLike,
        cToken: AddressLike,
        isBorrow: boolean
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "getRewardsDistributors"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getWhitelist"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getWhitelistedBorrowersBorrows"): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getWhitelistedSuppliersSupply"): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "ionicAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "ionicAdminHasRights"): TypedContractMethod<[], [boolean], "view">;
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
    getFunction(nameOrSignature: "isDeprecated"): TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "isSupplyCapWhitelisted"): TypedContractMethod<[
        cToken: AddressLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "isUserOfPool"): TypedContractMethod<[user: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "liquidateBorrowAllowed"): TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "liquidateCalculateSeizeTokens"): TypedContractMethod<[
        cTokenBorrowed: AddressLike,
        cTokenCollateral: AddressLike,
        repayAmount: BigNumberish
    ], [
        [bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "liquidationIncentiveMantissa"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "markets"): TypedContractMethod<[cToken: AddressLike], [[boolean, bigint]], "view">;
    getFunction(nameOrSignature: "mintAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        mintAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "mintGuardianPaused"): TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "mintVerify"): TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        actualMintAmount: BigNumberish,
        mintTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "oracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pauseGuardian"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "redeemAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        redeemer: AddressLike,
        redeemTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "redeemVerify"): TypedContractMethod<[
        cToken: AddressLike,
        redeemer: AddressLike,
        redeemAmount: BigNumberish,
        redeemTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "repayBorrowAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        payer: AddressLike,
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "rewardsDistributors"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "seizeAllowed"): TypedContractMethod<[
        cTokenCollateral: AddressLike,
        cTokenBorrowed: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "suppliers"): TypedContractMethod<[account: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "supplyCaps"): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "transferAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        src: AddressLike,
        dst: AddressLike,
        transferTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "whitelist"): TypedContractMethod<[account: AddressLike], [boolean], "view">;
    filters: {};
}
