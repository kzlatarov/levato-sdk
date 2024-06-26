import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface ComptrollerInterfaceInterface extends utils.Interface {
    functions: {
        "_addRewardsDistributor(address)": FunctionFragment;
        "_afterNonReentrant()": FunctionFragment;
        "_becomeImplementation()": FunctionFragment;
        "_beforeNonReentrant()": FunctionFragment;
        "_deployMarket(uint8,bytes,bytes,uint256)": FunctionFragment;
        "_setCloseFactor(uint256)": FunctionFragment;
        "_setCollateralFactor(address,uint256)": FunctionFragment;
        "_setLiquidationIncentive(uint256)": FunctionFragment;
        "_setPriceOracle(address)": FunctionFragment;
        "_setWhitelistEnforcement(bool)": FunctionFragment;
        "_setWhitelistStatuses(address[],bool[])": FunctionFragment;
        "borrowAllowed(address,address,uint256)": FunctionFragment;
        "borrowWithinLimits(address,uint256)": FunctionFragment;
        "checkMembership(address,address)": FunctionFragment;
        "enterMarkets(address[])": FunctionFragment;
        "exitMarket(address)": FunctionFragment;
        "getAccountLiquidity(address)": FunctionFragment;
        "getAssetsIn(address)": FunctionFragment;
        "getHypotheticalAccountLiquidity(address,address,uint256,uint256)": FunctionFragment;
        "getMaxRedeemOrBorrow(address,address,bool)": FunctionFragment;
        "isDeprecated(address)": FunctionFragment;
        "liquidateBorrowAllowed(address,address,address,address,uint256)": FunctionFragment;
        "liquidateCalculateSeizeTokens(address,address,uint256)": FunctionFragment;
        "mintAllowed(address,address,uint256)": FunctionFragment;
        "mintVerify(address,address,uint256,uint256)": FunctionFragment;
        "redeemAllowed(address,address,uint256)": FunctionFragment;
        "redeemVerify(address,address,uint256,uint256)": FunctionFragment;
        "repayBorrowAllowed(address,address,address,uint256)": FunctionFragment;
        "seizeAllowed(address,address,address,address,uint256)": FunctionFragment;
        "transferAllowed(address,address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_addRewardsDistributor" | "_afterNonReentrant" | "_becomeImplementation" | "_beforeNonReentrant" | "_deployMarket" | "_setCloseFactor" | "_setCollateralFactor" | "_setLiquidationIncentive" | "_setPriceOracle" | "_setWhitelistEnforcement" | "_setWhitelistStatuses" | "borrowAllowed" | "borrowWithinLimits" | "checkMembership" | "enterMarkets" | "exitMarket" | "getAccountLiquidity" | "getAssetsIn" | "getHypotheticalAccountLiquidity" | "getMaxRedeemOrBorrow" | "isDeprecated" | "liquidateBorrowAllowed" | "liquidateCalculateSeizeTokens" | "mintAllowed" | "mintVerify" | "redeemAllowed" | "redeemVerify" | "repayBorrowAllowed" | "seizeAllowed" | "transferAllowed"): FunctionFragment;
    encodeFunctionData(functionFragment: "_addRewardsDistributor", values: [string]): string;
    encodeFunctionData(functionFragment: "_afterNonReentrant", values?: undefined): string;
    encodeFunctionData(functionFragment: "_becomeImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "_beforeNonReentrant", values?: undefined): string;
    encodeFunctionData(functionFragment: "_deployMarket", values: [BigNumberish, BytesLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setCloseFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setCollateralFactor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setLiquidationIncentive", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setPriceOracle", values: [string]): string;
    encodeFunctionData(functionFragment: "_setWhitelistEnforcement", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_setWhitelistStatuses", values: [string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "borrowAllowed", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowWithinLimits", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkMembership", values: [string, string]): string;
    encodeFunctionData(functionFragment: "enterMarkets", values: [string[]]): string;
    encodeFunctionData(functionFragment: "exitMarket", values: [string]): string;
    encodeFunctionData(functionFragment: "getAccountLiquidity", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetsIn", values: [string]): string;
    encodeFunctionData(functionFragment: "getHypotheticalAccountLiquidity", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMaxRedeemOrBorrow", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "isDeprecated", values: [string]): string;
    encodeFunctionData(functionFragment: "liquidateBorrowAllowed", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidateCalculateSeizeTokens", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintAllowed", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintVerify", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemAllowed", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemVerify", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowAllowed", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "seizeAllowed", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferAllowed", values: [string, string, string, BigNumberish]): string;
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
    events: {};
}
export interface ComptrollerInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ComptrollerInterfaceInterface;
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
        _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: Overrides & {
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
        _setPriceOracle(newOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setWhitelistEnforcement(enforce: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<[boolean]>;
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
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<[string[]]>;
        getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        isDeprecated(cToken: string, overrides?: CallOverrides): Promise<[boolean]>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
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
    _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: Overrides & {
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
    _setPriceOracle(newOracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setWhitelistEnforcement(enforce: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<boolean>;
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
    getAssetsIn(account: string, overrides?: CallOverrides): Promise<string[]>;
    getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    isDeprecated(cToken: string, overrides?: CallOverrides): Promise<boolean>;
    liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _addRewardsDistributor(distributor: string, overrides?: CallOverrides): Promise<BigNumber>;
        _afterNonReentrant(overrides?: CallOverrides): Promise<void>;
        _becomeImplementation(overrides?: CallOverrides): Promise<void>;
        _beforeNonReentrant(overrides?: CallOverrides): Promise<void>;
        _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setCloseFactor(newCloseFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setCollateralFactor(market: string, newCollateralFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setLiquidationIncentive(newLiquidationIncentiveMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setPriceOracle(newOracle: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setWhitelistEnforcement(enforce: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: CallOverrides): Promise<BigNumber>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<boolean>;
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
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<string[]>;
        getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        isDeprecated(cToken: string, overrides?: CallOverrides): Promise<boolean>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
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
        _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: Overrides & {
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
        _setPriceOracle(newOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setWhitelistEnforcement(enforce: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exitMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        isDeprecated(cToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
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
        _deployMarket(delegateType: BigNumberish, constructorData: BytesLike, becomeImplData: BytesLike, collateralFactorMantissa: BigNumberish, overrides?: Overrides & {
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
        _setPriceOracle(newOracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setWhitelistEnforcement(enforce: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setWhitelistStatuses(_suppliers: string[], statuses: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowAllowed(cToken: string, borrower: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowWithinLimits(cToken: string, accountBorrowsNew: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkMembership(account: string, cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enterMarkets(cTokens: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exitMarket(cToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAccountLiquidity(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetsIn(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHypotheticalAccountLiquidity(account: string, cTokenModify: string, redeemTokens: BigNumberish, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxRedeemOrBorrow(account: string, cToken: string, isBorrow: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDeprecated(cToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidateBorrowAllowed(cTokenBorrowed: string, cTokenCollateral: string, liquidator: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liquidateCalculateSeizeTokens(cTokenBorrowed: string, cTokenCollateral: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintAllowed(cToken: string, minter: string, mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mintVerify(cToken: string, minter: string, actualMintAmount: BigNumberish, mintTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redeemAllowed(cToken: string, redeemer: string, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redeemVerify(cToken: string, redeemer: string, redeemAmount: BigNumberish, redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayBorrowAllowed(cToken: string, payer: string, borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        seizeAllowed(cTokenCollateral: string, cTokenBorrowed: string, liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferAllowed(cToken: string, src: string, dst: string, transferTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
