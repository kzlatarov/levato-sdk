import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface ComptrollerInterfaceInterface extends Interface {
    getFunction(nameOrSignature: "_addRewardsDistributor" | "_afterNonReentrant" | "_becomeImplementation" | "_beforeNonReentrant" | "_deployMarket" | "_setCloseFactor" | "_setCollateralFactor" | "_setLiquidationIncentive" | "_setPriceOracle" | "_setWhitelistEnforcement" | "_setWhitelistStatuses" | "borrowAllowed" | "borrowWithinLimits" | "checkMembership" | "enterMarkets" | "exitMarket" | "getAccountLiquidity" | "getAssetsIn" | "getHypotheticalAccountLiquidity" | "getMaxRedeemOrBorrow" | "isDeprecated" | "liquidateBorrowAllowed" | "liquidateCalculateSeizeTokens" | "mintAllowed" | "mintVerify" | "redeemAllowed" | "redeemVerify" | "repayBorrowAllowed" | "seizeAllowed" | "transferAllowed"): FunctionFragment;
    encodeFunctionData(functionFragment: "_addRewardsDistributor", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_afterNonReentrant", values?: undefined): string;
    encodeFunctionData(functionFragment: "_becomeImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "_beforeNonReentrant", values?: undefined): string;
    encodeFunctionData(functionFragment: "_deployMarket", values: [BigNumberish, BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setCloseFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setCollateralFactor", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setLiquidationIncentive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setPriceOracle", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setWhitelistEnforcement", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setWhitelistStatuses", values: [AddressLike[], boolean[]]): string;
    encodeFunctionData(functionFragment: "borrowAllowed", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowWithinLimits", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkMembership", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "enterMarkets", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "exitMarket", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAccountLiquidity", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getAssetsIn", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getHypotheticalAccountLiquidity", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMaxRedeemOrBorrow", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "isDeprecated", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "liquidateBorrowAllowed", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidateCalculateSeizeTokens", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintAllowed", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintVerify", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemAllowed", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemVerify", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowAllowed", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "seizeAllowed", values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferAllowed", values: [AddressLike, AddressLike, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_addRewardsDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_afterNonReentrant", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_becomeImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_beforeNonReentrant", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_deployMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCloseFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setCollateralFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setLiquidationIncentive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setWhitelistEnforcement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setWhitelistStatuses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowWithinLimits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkMembership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHypotheticalAccountLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxRedeemOrBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDeprecated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateCalculateSeizeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemVerify", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAllowed", data: BytesLike): Result;
}
export interface ComptrollerInterface extends BaseContract {
    connect(runner?: ContractRunner | null): ComptrollerInterface;
    waitForDeployment(): Promise<this>;
    interface: ComptrollerInterfaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _addRewardsDistributor: TypedContractMethod<[
        distributor: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    _afterNonReentrant: TypedContractMethod<[], [void], "nonpayable">;
    _becomeImplementation: TypedContractMethod<[], [void], "nonpayable">;
    _beforeNonReentrant: TypedContractMethod<[], [void], "nonpayable">;
    _deployMarket: TypedContractMethod<[
        delegateType: BigNumberish,
        constructorData: BytesLike,
        becomeImplData: BytesLike,
        collateralFactorMantissa: BigNumberish
    ], [
        bigint
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
    _setPriceOracle: TypedContractMethod<[
        newOracle: AddressLike
    ], [
        bigint
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
    borrowAllowed: TypedContractMethod<[
        cToken: AddressLike,
        borrower: AddressLike,
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    borrowWithinLimits: TypedContractMethod<[
        cToken: AddressLike,
        accountBorrowsNew: BigNumberish
    ], [
        bigint
    ], "view">;
    checkMembership: TypedContractMethod<[
        account: AddressLike,
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
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
    isDeprecated: TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
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
    mintAllowed: TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        mintAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    mintVerify: TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        actualMintAmount: BigNumberish,
        mintTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
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
    seizeAllowed: TypedContractMethod<[
        cTokenCollateral: AddressLike,
        cTokenBorrowed: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    transferAllowed: TypedContractMethod<[
        cToken: AddressLike,
        src: AddressLike,
        dst: AddressLike,
        transferTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_addRewardsDistributor"): TypedContractMethod<[distributor: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_afterNonReentrant"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "_becomeImplementation"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "_beforeNonReentrant"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "_deployMarket"): TypedContractMethod<[
        delegateType: BigNumberish,
        constructorData: BytesLike,
        becomeImplData: BytesLike,
        collateralFactorMantissa: BigNumberish
    ], [
        bigint
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
    getFunction(nameOrSignature: "_setPriceOracle"): TypedContractMethod<[newOracle: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_setWhitelistEnforcement"): TypedContractMethod<[enforce: boolean], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "_setWhitelistStatuses"): TypedContractMethod<[
        _suppliers: AddressLike[],
        statuses: boolean[]
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "borrowAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        borrower: AddressLike,
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "borrowWithinLimits"): TypedContractMethod<[
        cToken: AddressLike,
        accountBorrowsNew: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "checkMembership"): TypedContractMethod<[
        account: AddressLike,
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "enterMarkets"): TypedContractMethod<[cTokens: AddressLike[]], [bigint[]], "nonpayable">;
    getFunction(nameOrSignature: "exitMarket"): TypedContractMethod<[cToken: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "getAccountLiquidity"): TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint, bigint, bigint]
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
    getFunction(nameOrSignature: "isDeprecated"): TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
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
    getFunction(nameOrSignature: "mintAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        mintAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "mintVerify"): TypedContractMethod<[
        cToken: AddressLike,
        minter: AddressLike,
        actualMintAmount: BigNumberish,
        mintTokens: BigNumberish
    ], [
        void
    ], "nonpayable">;
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
    getFunction(nameOrSignature: "seizeAllowed"): TypedContractMethod<[
        cTokenCollateral: AddressLike,
        cTokenBorrowed: AddressLike,
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferAllowed"): TypedContractMethod<[
        cToken: AddressLike,
        src: AddressLike,
        dst: AddressLike,
        transferTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    filters: {};
}
