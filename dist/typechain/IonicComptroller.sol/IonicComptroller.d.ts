import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IonicComptrollerInterface extends utils.Interface {
    functions: {
        "_acceptAdmin()": FunctionFragment;
        "_addRewardsDistributor(address)": FunctionFragment;
        "_afterNonReentrant()": FunctionFragment;
        "_becomeImplementation()": FunctionFragment;
        "_beforeNonReentrant()": FunctionFragment;
        "_blacklistBorrowingAgainstCollateral(address,address,bool)": FunctionFragment;
        "_blacklistBorrowingAgainstCollateralWhitelist(address,address,address,bool)": FunctionFragment;
        "_borrowCapWhitelist(address,address,bool)": FunctionFragment;
        "_deployMarket(uint8,bytes,bytes,uint256)": FunctionFragment;
        "_removeFlywheel(address)": FunctionFragment;
        "_setBorrowCapForCollateral(address,address,uint256)": FunctionFragment;
        "_setBorrowCapForCollateralWhitelist(address,address,address,bool)": FunctionFragment;
        "_setBorrowCapGuardian(address)": FunctionFragment;
        "_setBorrowPaused(address,bool)": FunctionFragment;
        "_setCloseFactor(uint256)": FunctionFragment;
        "_setCollateralFactor(address,uint256)": FunctionFragment;
        "_setLiquidationIncentive(uint256)": FunctionFragment;
        "_setMarketBorrowCaps(address[],uint256[])": FunctionFragment;
        "_setMarketSupplyCaps(address[],uint256[])": FunctionFragment;
        "_setMintPaused(address,bool)": FunctionFragment;
        "_setPauseGuardian(address)": FunctionFragment;
        "_setPendingAdmin(address)": FunctionFragment;
        "_setPriceOracle(address)": FunctionFragment;
        "_setSeizePaused(bool)": FunctionFragment;
        "_setTransferPaused(bool)": FunctionFragment;
        "_setWhitelistEnforcement(bool)": FunctionFragment;
        "_setWhitelistStatuses(address[],bool[])": FunctionFragment;
        "_supplyCapWhitelist(address,address,bool)": FunctionFragment;
        "_toggleAdminRights(bool)": FunctionFragment;
        "_unsupportMarket(address)": FunctionFragment;
        "_upgrade()": FunctionFragment;
        "accountAssets(address,uint256)": FunctionFragment;
        "addNonAccruingFlywheel(address)": FunctionFragment;
        "admin()": FunctionFragment;
        "adminHasRights()": FunctionFragment;
        "borrowAllowed(address,address,uint256)": FunctionFragment;
        "borrowCapForCollateral(address,address)": FunctionFragment;
        "borrowCaps(address)": FunctionFragment;
        "borrowGuardianPaused(address)": FunctionFragment;
        "borrowWithinLimits(address,uint256)": FunctionFragment;
        "borrowingAgainstCollateralBlacklist(address,address)": FunctionFragment;
        "cTokensByUnderlying(address)": FunctionFragment;
        "checkMembership(address,address)": FunctionFragment;
        "closeFactorMantissa()": FunctionFragment;
        "comptrollerImplementation()": FunctionFragment;
        "enforceWhitelist()": FunctionFragment;
        "enterMarkets(address[])": FunctionFragment;
        "exitMarket(address)": FunctionFragment;
        "getAccountLiquidity(address)": FunctionFragment;
        "getAccruingFlywheels()": FunctionFragment;
        "getAllBorrowers()": FunctionFragment;
        "getAllMarkets()": FunctionFragment;
        "getAssetAsCollateralValueCap(address,address,bool,address)": FunctionFragment;
        "getAssetsIn(address)": FunctionFragment;
        "getHypotheticalAccountLiquidity(address,address,uint256,uint256)": FunctionFragment;
        "getMaxRedeemOrBorrow(address,address,bool)": FunctionFragment;
        "getRewardsDistributors()": FunctionFragment;
        "getWhitelist()": FunctionFragment;
        "getWhitelistedBorrowersBorrows(address)": FunctionFragment;
        "getWhitelistedSuppliersSupply(address)": FunctionFragment;
        "ionicAdmin()": FunctionFragment;
        "ionicAdminHasRights()": FunctionFragment;
        "isBlacklistBorrowingAgainstCollateralWhitelisted(address,address,address)": FunctionFragment;
        "isBorrowCapForCollateralWhitelisted(address,address,address)": FunctionFragment;
        "isBorrowCapWhitelisted(address,address)": FunctionFragment;
        "isDeprecated(address)": FunctionFragment;
        "isSupplyCapWhitelisted(address,address)": FunctionFragment;
        "isUserOfPool(address)": FunctionFragment;
        "liquidateBorrowAllowed(address,address,address,address,uint256)": FunctionFragment;
        "liquidateCalculateSeizeTokens(address,address,uint256)": FunctionFragment;
        "liquidationIncentiveMantissa()": FunctionFragment;
        "markets(address)": FunctionFragment;
        "mintAllowed(address,address,uint256)": FunctionFragment;
        "mintGuardianPaused(address)": FunctionFragment;
        "mintVerify(address,address,uint256,uint256)": FunctionFragment;
        "oracle()": FunctionFragment;
        "pauseGuardian()": FunctionFragment;
        "pendingAdmin()": FunctionFragment;
        "redeemAllowed(address,address,uint256)": FunctionFragment;
        "redeemVerify(address,address,uint256,uint256)": FunctionFragment;
        "repayBorrowAllowed(address,address,address,uint256)": FunctionFragment;
        "rewardsDistributors(uint256)": FunctionFragment;
        "seizeAllowed(address,address,address,address,uint256)": FunctionFragment;
        "suppliers(address)": FunctionFragment;
        "supplyCaps(address)": FunctionFragment;
        "transferAllowed(address,address,address,uint256)": FunctionFragment;
        "whitelist(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_acceptAdmin" | "_addRewardsDistributor" | "_afterNonReentrant" | "_becomeImplementation" | "_beforeNonReentrant" | "_blacklistBorrowingAgainstCollateral" | "_blacklistBorrowingAgainstCollateralWhitelist" | "_borrowCapWhitelist" | "_deployMarket" | "_removeFlywheel" | "_setBorrowCapForCollateral" | "_setBorrowCapForCollateralWhitelist" | "_setBorrowCapGuardian" | "_setBorrowPaused" | "_setCloseFactor" | "_setCollateralFactor" | "_setLiquidationIncentive" | "_setMarketBorrowCaps" | "_setMarketSupplyCaps" | "_setMintPaused" | "_setPauseGuardian" | "_setPendingAdmin" | "_setPriceOracle" | "_setSeizePaused" | "_setTransferPaused" | "_setWhitelistEnforcement" | "_setWhitelistStatuses" | "_supplyCapWhitelist" | "_toggleAdminRights" | "_unsupportMarket" | "_upgrade" | "accountAssets" | "addNonAccruingFlywheel" | "admin" | "adminHasRights" | "borrowAllowed" | "borrowCapForCollateral" | "borrowCaps" | "borrowGuardianPaused" | "borrowWithinLimits" | "borrowingAgainstCollateralBlacklist" | "cTokensByUnderlying" | "checkMembership" | "closeFactorMantissa" | "comptrollerImplementation" | "enforceWhitelist" | "enterMarkets" | "exitMarket" | "getAccountLiquidity" | "getAccruingFlywheels" | "getAllBorrowers" | "getAllMarkets" | "getAssetAsCollateralValueCap" | "getAssetsIn" | "getHypotheticalAccountLiquidity" | "getMaxRedeemOrBorrow" | "getRewardsDistributors" | "getWhitelist" | "getWhitelistedBorrowersBorrows" | "getWhitelistedSuppliersSupply" | "ionicAdmin" | "ionicAdminHasRights" | "isBlacklistBorrowingAgainstCollateralWhitelisted" | "isBorrowCapForCollateralWhitelisted" | "isBorrowCapWhitelisted" | "isDeprecated" | "isSupplyCapWhitelisted" | "isUserOfPool" | "liquidateBorrowAllowed" | "liquidateCalculateSeizeTokens" | "liquidationIncentiveMantissa" | "markets" | "mintAllowed" | "mintGuardianPaused" | "mintVerify" | "oracle" | "pauseGuardian" | "pendingAdmin" | "redeemAllowed" | "redeemVerify" | "repayBorrowAllowed" | "rewardsDistributors" | "seizeAllowed" | "suppliers" | "supplyCaps" | "transferAllowed" | "whitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "_acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "_addRewardsDistributor", values: [string]): string;
    encodeFunctionData(functionFragment: "_afterNonReentrant", values?: undefined): string;
    encodeFunctionData(functionFragment: "_becomeImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "_beforeNonReentrant", values?: undefined): string;
    encodeFunctionData(functionFragment: "_blacklistBorrowingAgainstCollateral", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_blacklistBorrowingAgainstCollateralWhitelist", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_borrowCapWhitelist", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_deployMarket", values: [BigNumberish, BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_removeFlywheel", values: [string]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapForCollateral", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapForCollateralWhitelist", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_setBorrowCapGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "_setBorrowPaused", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "_setCloseFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setCollateralFactor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setLiquidationIncentive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setMarketBorrowCaps", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setMarketSupplyCaps", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "_setMintPaused", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "_setPauseGuardian", values: [string]): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "_setPriceOracle", values: [string]): string;
    encodeFunctionData(functionFragment: "_setSeizePaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setTransferPaused", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setWhitelistEnforcement", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setWhitelistStatuses", values: [string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "_supplyCapWhitelist", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "_toggleAdminRights", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_unsupportMarket", values: [string]): string;
    encodeFunctionData(functionFragment: "_upgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "accountAssets", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addNonAccruingFlywheel", values: [string]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAllowed", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowCapForCollateral", values: [string, string]): string;
    encodeFunctionData(functionFragment: "borrowCaps", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowGuardianPaused", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowWithinLimits", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowingAgainstCollateralBlacklist", values: [string, string]): string;
    encodeFunctionData(functionFragment: "cTokensByUnderlying", values: [string]): string;
    encodeFunctionData(functionFragment: "checkMembership", values: [string, string]): string;
    encodeFunctionData(functionFragment: "closeFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "comptrollerImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "enforceWhitelist", values?: undefined): string;
    encodeFunctionData(functionFragment: "enterMarkets", values: [string[]]): string;
    encodeFunctionData(functionFragment: "exitMarket", values: [string]): string;
    encodeFunctionData(functionFragment: "getAccountLiquidity", values: [string]): string;
    encodeFunctionData(functionFragment: "getAccruingFlywheels", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllBorrowers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetAsCollateralValueCap", values: [string, string, boolean, string]): string;
    encodeFunctionData(functionFragment: "getAssetsIn", values: [string]): string;
    encodeFunctionData(functionFragment: "getHypotheticalAccountLiquidity", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMaxRedeemOrBorrow", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "getRewardsDistributors", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelist", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWhitelistedBorrowersBorrows", values: [string]): string;
    encodeFunctionData(functionFragment: "getWhitelistedSuppliersSupply", values: [string]): string;
    encodeFunctionData(functionFragment: "ionicAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicAdminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "isBlacklistBorrowingAgainstCollateralWhitelisted", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "isBorrowCapForCollateralWhitelisted", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "isBorrowCapWhitelisted", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isDeprecated", values: [string]): string;
    encodeFunctionData(functionFragment: "isSupplyCapWhitelisted", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isUserOfPool", values: [string]): string;
    encodeFunctionData(functionFragment: "liquidateBorrowAllowed", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidateCalculateSeizeTokens", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidationIncentiveMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "markets", values: [string]): string;
    encodeFunctionData(functionFragment: "mintAllowed", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintGuardianPaused", values: [string]): string;
    encodeFunctionData(functionFragment: "mintVerify", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseGuardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemAllowed", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemVerify", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowAllowed", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardsDistributors", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "seizeAllowed", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "suppliers", values: [string]): string;
    encodeFunctionData(functionFragment: "supplyCaps", values: [string]): string;
    encodeFunctionData(functionFragment: "transferAllowed", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "whitelist", values: [string]): string;
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
    events: {};
}
export interface IonicComptroller extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IonicComptrollerInterface;
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
        _acceptAdmin(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _addRewardsDistributor(distributor: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _afterNonReentrant(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _becomeImplementation(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _beforeNonReentrant(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: Overrides & {
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
        _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setCollateralFactor(market: string, newCollateralFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: Overrides & {
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
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setPriceOracle(newOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setSeizePaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setTransferPaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setWhitelistEnforcement(enforce: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _toggleAdminRights(hasRights: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _unsupportMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        addNonAccruingFlywheel(flywheelAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        adminHasRights(overrides?: CallOverrides): Promise<[boolean]>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowCapForCollateral(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowCaps(cToken: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<[boolean]>;
        borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowingAgainstCollateralBlacklist(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<[boolean]>;
        cTokensByUnderlying(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<[boolean]>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
        enforceWhitelist(overrides?: CallOverrides): Promise<[boolean]>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exitMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            error: BigNumber;
            collateralValue: BigNumber;
            liquidity: BigNumber;
            shortfall: BigNumber;
        }>;
        getAccruingFlywheels(overrides?: CallOverrides): Promise<[string[]]>;
        getAllBorrowers(overrides?: CallOverrides): Promise<[string[]]>;
        getAllMarkets(overrides?: CallOverrides): Promise<[string[]]>;
        getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<[string[]]>;
        getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRewardsDistributors(overrides?: CallOverrides): Promise<[string[]]>;
        getWhitelist(overrides?: CallOverrides): Promise<[string[]]>;
        getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            borrowed: BigNumber;
        }>;
        getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            supplied: BigNumber;
        }>;
        ionicAdmin(overrides?: CallOverrides): Promise<[string]>;
        ionicAdminHasRights(overrides?: CallOverrides): Promise<[boolean]>;
        isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isDeprecated(cToken: string, overrides?: CallOverrides): Promise<[boolean]>;
        isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isUserOfPool(user: string, overrides?: CallOverrides): Promise<[boolean]>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        markets(cToken: string, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mintGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<[boolean]>;
        mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        oracle(overrides?: CallOverrides): Promise<[string]>;
        pauseGuardian(overrides?: CallOverrides): Promise<[string]>;
        pendingAdmin(overrides?: CallOverrides): Promise<[string]>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardsDistributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        suppliers(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        supplyCaps(cToken: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        whitelist(account: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    _acceptAdmin(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _addRewardsDistributor(distributor: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _afterNonReentrant(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _becomeImplementation(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _beforeNonReentrant(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: Overrides & {
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
    _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setCollateralFactor(market: string, newCollateralFactorMantissa: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: Overrides & {
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
    _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setPriceOracle(newOracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setSeizePaused(state: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setTransferPaused(state: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setWhitelistEnforcement(enforce: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _toggleAdminRights(hasRights: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _unsupportMarket(cToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _upgrade(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
    addNonAccruingFlywheel(flywheelAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    adminHasRights(overrides?: CallOverrides): Promise<boolean>;
    borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowCapForCollateral(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowCaps(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<boolean>;
    borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    borrowingAgainstCollateralBlacklist(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<boolean>;
    cTokensByUnderlying(arg0: string, overrides?: CallOverrides): Promise<string>;
    checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<boolean>;
    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    enforceWhitelist(overrides?: CallOverrides): Promise<boolean>;
    enterMarkets(cTokens: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exitMarket(cToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        error: BigNumber;
        collateralValue: BigNumber;
        liquidity: BigNumber;
        shortfall: BigNumber;
    }>;
    getAccruingFlywheels(overrides?: CallOverrides): Promise<string[]>;
    getAllBorrowers(overrides?: CallOverrides): Promise<string[]>;
    getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
    getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetsIn(account: string, overrides?: CallOverrides): Promise<string[]>;
    getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getRewardsDistributors(overrides?: CallOverrides): Promise<string[]>;
    getWhitelist(overrides?: CallOverrides): Promise<string[]>;
    getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    ionicAdmin(overrides?: CallOverrides): Promise<string>;
    ionicAdminHasRights(overrides?: CallOverrides): Promise<boolean>;
    isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<boolean>;
    isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<boolean>;
    isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<boolean>;
    isDeprecated(cToken: string, overrides?: CallOverrides): Promise<boolean>;
    isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<boolean>;
    isUserOfPool(user: string, overrides?: CallOverrides): Promise<boolean>;
    liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    markets(cToken: string, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
    mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mintGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<boolean>;
    mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    oracle(overrides?: CallOverrides): Promise<string>;
    pauseGuardian(overrides?: CallOverrides): Promise<string>;
    pendingAdmin(overrides?: CallOverrides): Promise<string>;
    redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardsDistributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    suppliers(account: string, overrides?: CallOverrides): Promise<boolean>;
    supplyCaps(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    whitelist(account: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        _acceptAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        _addRewardsDistributor(distributor: string, overrides?: CallOverrides): Promise<BigNumber>;
        _afterNonReentrant(overrides?: CallOverrides): Promise<void>;
        _becomeImplementation(overrides?: CallOverrides): Promise<void>;
        _beforeNonReentrant(overrides?: CallOverrides): Promise<void>;
        _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: CallOverrides): Promise<void>;
        _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _removeFlywheel(flywheelAddress: string, overrides?: CallOverrides): Promise<boolean>;
        _setBorrowCapForCollateral(cTokenBorrow: string, cTokenCollateral: string, borrowCap: BigNumberish, overrides?: CallOverrides): Promise<void>;
        _setBorrowCapForCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        _setBorrowCapGuardian(newBorrowCapGuardian: string, overrides?: CallOverrides): Promise<void>;
        _setBorrowPaused(cToken: string, state: boolean, overrides?: CallOverrides): Promise<boolean>;
        _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setCollateralFactor(market: string, newCollateralFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setMarketBorrowCaps(cTokens: string[], newBorrowCaps: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        _setMarketSupplyCaps(cTokens: string[], newSupplyCaps: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        _setMintPaused(cToken: string, state: boolean, overrides?: CallOverrides): Promise<boolean>;
        _setPauseGuardian(newPauseGuardian: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setPriceOracle(newOracle: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setSeizePaused(state: boolean, overrides?: CallOverrides): Promise<boolean>;
        _setTransferPaused(state: boolean, overrides?: CallOverrides): Promise<boolean>;
        _setWhitelistEnforcement(enforce: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: CallOverrides): Promise<BigNumber>;
        _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        _toggleAdminRights(hasRights: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        _unsupportMarket(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        _upgrade(overrides?: CallOverrides): Promise<void>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<string>;
        addNonAccruingFlywheel(flywheelAddress: string, overrides?: CallOverrides): Promise<boolean>;
        admin(overrides?: CallOverrides): Promise<string>;
        adminHasRights(overrides?: CallOverrides): Promise<boolean>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrowCapForCollateral(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowCaps(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<boolean>;
        borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrowingAgainstCollateralBlacklist(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<boolean>;
        cTokensByUnderlying(arg0: string, overrides?: CallOverrides): Promise<string>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<boolean>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
        enforceWhitelist(overrides?: CallOverrides): Promise<boolean>;
        enterMarkets(cTokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
        exitMarket(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            error: BigNumber;
            collateralValue: BigNumber;
            liquidity: BigNumber;
            shortfall: BigNumber;
        }>;
        getAccruingFlywheels(overrides?: CallOverrides): Promise<string[]>;
        getAllBorrowers(overrides?: CallOverrides): Promise<string[]>;
        getAllMarkets(overrides?: CallOverrides): Promise<string[]>;
        getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<string[]>;
        getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsDistributors(overrides?: CallOverrides): Promise<string[]>;
        getWhitelist(overrides?: CallOverrides): Promise<string[]>;
        getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        ionicAdmin(overrides?: CallOverrides): Promise<string>;
        ionicAdminHasRights(overrides?: CallOverrides): Promise<boolean>;
        isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<boolean>;
        isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<boolean>;
        isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<boolean>;
        isDeprecated(cToken: string, overrides?: CallOverrides): Promise<boolean>;
        isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<boolean>;
        isUserOfPool(user: string, overrides?: CallOverrides): Promise<boolean>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        markets(cToken: string, overrides?: CallOverrides): Promise<[boolean, BigNumber]>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mintGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<boolean>;
        mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        oracle(overrides?: CallOverrides): Promise<string>;
        pauseGuardian(overrides?: CallOverrides): Promise<string>;
        pendingAdmin(overrides?: CallOverrides): Promise<string>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        rewardsDistributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        suppliers(account: string, overrides?: CallOverrides): Promise<boolean>;
        supplyCaps(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        whitelist(account: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        _acceptAdmin(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _addRewardsDistributor(distributor: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _afterNonReentrant(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _becomeImplementation(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _beforeNonReentrant(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: Overrides & {
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
        _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setCollateralFactor(market: string, newCollateralFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: Overrides & {
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
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setPriceOracle(newOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setSeizePaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setTransferPaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setWhitelistEnforcement(enforce: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _toggleAdminRights(hasRights: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _unsupportMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        addNonAccruingFlywheel(flywheelAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        adminHasRights(overrides?: CallOverrides): Promise<BigNumber>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowCapForCollateral(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowCaps(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrowingAgainstCollateralBlacklist(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<BigNumber>;
        cTokensByUnderlying(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        enforceWhitelist(overrides?: CallOverrides): Promise<BigNumber>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exitMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAccruingFlywheels(overrides?: CallOverrides): Promise<BigNumber>;
        getAllBorrowers(overrides?: CallOverrides): Promise<BigNumber>;
        getAllMarkets(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getRewardsDistributors(overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelist(overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        ionicAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        ionicAdminHasRights(overrides?: CallOverrides): Promise<BigNumber>;
        isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isDeprecated(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isUserOfPool(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        markets(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mintGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        oracle(overrides?: CallOverrides): Promise<BigNumber>;
        pauseGuardian(overrides?: CallOverrides): Promise<BigNumber>;
        pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardsDistributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        suppliers(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        supplyCaps(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        whitelist(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _acceptAdmin(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _addRewardsDistributor(distributor: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _afterNonReentrant(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _becomeImplementation(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _beforeNonReentrant(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _blacklistBorrowingAgainstCollateral(cTokenBorrow: string, cTokenCollateral: string, blacklisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _blacklistBorrowingAgainstCollateralWhitelist(cTokenBorrow: string, cTokenCollateral: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _borrowCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: Overrides & {
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
        _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setCollateralFactor(market: string, newCollateralFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: Overrides & {
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
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setPriceOracle(newOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setSeizePaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setTransferPaused(state: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setWhitelistEnforcement(enforce: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _supplyCapWhitelist(cToken: string, account: string, whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _toggleAdminRights(hasRights: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _unsupportMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        accountAssets(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addNonAccruingFlywheel(flywheelAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adminHasRights(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowCapForCollateral(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowCaps(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowingAgainstCollateralBlacklist(borrowed: string, collateral: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cTokensByUnderlying(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        closeFactorMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enforceWhitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exitMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccruingFlywheels(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllBorrowers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetAsCollateralValueCap(collateral: string, cTokenModify: string, redeeming: boolean, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRewardsDistributors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedBorrowersBorrows(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedSuppliersSupply(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ionicAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ionicAdminHasRights(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBlacklistBorrowingAgainstCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBorrowCapForCollateralWhitelisted(cTokenBorrow: string, cTokenCollateral: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isBorrowCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDeprecated(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSupplyCapWhitelisted(cToken: string, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isUserOfPool(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        markets(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mintGuardianPaused(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardsDistributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        suppliers(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyCaps(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        whitelist(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
