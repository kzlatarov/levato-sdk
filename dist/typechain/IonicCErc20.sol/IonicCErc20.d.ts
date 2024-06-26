import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IonicCErc20Interface extends utils.Interface {
    functions: {
        "_becomeImplementation(bytes)": FunctionFragment;
        "_setAdminFee(uint256)": FunctionFragment;
        "_setImplementationSafe(address,bytes)": FunctionFragment;
        "_setInterestRateModel(address)": FunctionFragment;
        "_setReserveFactor(uint256)": FunctionFragment;
        "_upgrade()": FunctionFragment;
        "_withdrawAdminFees(uint256)": FunctionFragment;
        "_withdrawIonicFees(uint256)": FunctionFragment;
        "accrualBlockNumber()": FunctionFragment;
        "accrueInterest()": FunctionFragment;
        "admin()": FunctionFragment;
        "adminFeeMantissa()": FunctionFragment;
        "adminHasRights()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfUnderlying(address)": FunctionFragment;
        "borrow(uint256)": FunctionFragment;
        "borrowBalanceCurrent(address)": FunctionFragment;
        "borrowIndex()": FunctionFragment;
        "borrowRatePerBlock()": FunctionFragment;
        "borrowRatePerBlockAfterBorrow(uint256)": FunctionFragment;
        "comptroller()": FunctionFragment;
        "contractType()": FunctionFragment;
        "decimals()": FunctionFragment;
        "delegateType()": FunctionFragment;
        "exchangeRateCurrent()": FunctionFragment;
        "feeSeizeShareMantissa()": FunctionFragment;
        "flash(uint256,bytes)": FunctionFragment;
        "getAccountSnapshot(address)": FunctionFragment;
        "getCash()": FunctionFragment;
        "getTotalUnderlyingSupplied()": FunctionFragment;
        "implementation()": FunctionFragment;
        "interestRateModel()": FunctionFragment;
        "ionicAdmin()": FunctionFragment;
        "ionicAdminHasRights()": FunctionFragment;
        "ionicFeeMantissa()": FunctionFragment;
        "liquidateBorrow(address,uint256,address)": FunctionFragment;
        "mint(uint256)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "name()": FunctionFragment;
        "protocolSeizeShareMantissa()": FunctionFragment;
        "redeem(uint256)": FunctionFragment;
        "redeemUnderlying(uint256)": FunctionFragment;
        "repayBorrow(uint256)": FunctionFragment;
        "repayBorrowBehalf(address,uint256)": FunctionFragment;
        "reserveFactorMantissa()": FunctionFragment;
        "seize(address,address,uint256)": FunctionFragment;
        "selfTransferIn(address,uint256)": FunctionFragment;
        "selfTransferOut(address,uint256)": FunctionFragment;
        "supplyRatePerBlock()": FunctionFragment;
        "supplyRatePerBlockAfterDeposit(uint256)": FunctionFragment;
        "supplyRatePerBlockAfterWithdraw(uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalAdminFees()": FunctionFragment;
        "totalBorrows()": FunctionFragment;
        "totalBorrowsCurrent()": FunctionFragment;
        "totalIonicFees()": FunctionFragment;
        "totalReserves()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "underlying()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_becomeImplementation" | "_setAdminFee" | "_setImplementationSafe" | "_setInterestRateModel" | "_setReserveFactor" | "_upgrade" | "_withdrawAdminFees" | "_withdrawIonicFees" | "accrualBlockNumber" | "accrueInterest" | "admin" | "adminFeeMantissa" | "adminHasRights" | "allowance" | "approve" | "balanceOf" | "balanceOfUnderlying" | "borrow" | "borrowBalanceCurrent" | "borrowIndex" | "borrowRatePerBlock" | "borrowRatePerBlockAfterBorrow" | "comptroller" | "contractType" | "decimals" | "delegateType" | "exchangeRateCurrent" | "feeSeizeShareMantissa" | "flash" | "getAccountSnapshot" | "getCash" | "getTotalUnderlyingSupplied" | "implementation" | "interestRateModel" | "ionicAdmin" | "ionicAdminHasRights" | "ionicFeeMantissa" | "liquidateBorrow" | "mint" | "multicall" | "name" | "protocolSeizeShareMantissa" | "redeem" | "redeemUnderlying" | "repayBorrow" | "repayBorrowBehalf" | "reserveFactorMantissa" | "seize" | "selfTransferIn" | "selfTransferOut" | "supplyRatePerBlock" | "supplyRatePerBlockAfterDeposit" | "supplyRatePerBlockAfterWithdraw" | "symbol" | "totalAdminFees" | "totalBorrows" | "totalBorrowsCurrent" | "totalIonicFees" | "totalReserves" | "totalSupply" | "transfer" | "transferFrom" | "underlying"): FunctionFragment;
    encodeFunctionData(functionFragment: "_becomeImplementation", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_setAdminFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setImplementationSafe", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "_setInterestRateModel", values: [string]): string;
    encodeFunctionData(functionFragment: "_setReserveFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_upgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "_withdrawAdminFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_withdrawIonicFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "accrualBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminFeeMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOfUnderlying", values: [string]): string;
    encodeFunctionData(functionFragment: "borrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowBalanceCurrent", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowRatePerBlockAfterBorrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "comptroller", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegateType", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchangeRateCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeSeizeShareMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "flash", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getAccountSnapshot", values: [string]): string;
    encodeFunctionData(functionFragment: "getCash", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalUnderlyingSupplied", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicAdminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicFeeMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidateBorrow", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolSeizeShareMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemUnderlying", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowBehalf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "reserveFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "seize", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfTransferIn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfTransferOut", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlockAfterDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlockAfterWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalAdminFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBorrows", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalBorrowsCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalIonicFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_becomeImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setAdminFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setImplementationSafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setInterestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setReserveFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_withdrawAdminFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_withdrawIonicFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrualBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminFeeMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminHasRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalanceCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowRatePerBlockAfterBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptroller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRateCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeSeizeShareMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountSnapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalUnderlyingSupplied", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicAdminHasRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicFeeMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolSeizeShareMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowBehalf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserveFactorMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfTransferIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfTransferOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyRatePerBlockAfterDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyRatePerBlockAfterWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalAdminFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrowsCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalIonicFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    events: {};
}
export interface IonicCErc20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IonicCErc20Interface;
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
        _becomeImplementation(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        accrueInterest(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        adminFeeMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        adminHasRights(overrides?: CallOverrides): Promise<[boolean]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        comptroller(overrides?: CallOverrides): Promise<[string]>;
        contractType(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        delegateType(overrides?: CallOverrides): Promise<[number]>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<[BigNumber]>;
        feeSeizeShareMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        flash(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getCash(overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<[BigNumber]>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        interestRateModel(overrides?: CallOverrides): Promise<[string]>;
        ionicAdmin(overrides?: CallOverrides): Promise<[string]>;
        ionicAdminHasRights(overrides?: CallOverrides): Promise<[boolean]>;
        ionicFeeMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mint(mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        redeem(redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redeemUnderlying(redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayBorrow(repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        selfTransferIn(from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        selfTransferOut(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalAdminFees(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrows(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalIonicFees(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalReserves(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
    };
    _becomeImplementation(data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _upgrade(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    accrueInterest(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    adminFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    adminHasRights(overrides?: CallOverrides): Promise<boolean>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    comptroller(overrides?: CallOverrides): Promise<string>;
    contractType(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    delegateType(overrides?: CallOverrides): Promise<number>;
    exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
    feeSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    flash(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    getCash(overrides?: CallOverrides): Promise<BigNumber>;
    getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<BigNumber>;
    implementation(overrides?: CallOverrides): Promise<string>;
    interestRateModel(overrides?: CallOverrides): Promise<string>;
    ionicAdmin(overrides?: CallOverrides): Promise<string>;
    ionicAdminHasRights(overrides?: CallOverrides): Promise<boolean>;
    ionicFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mint(mintAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    multicall(data: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    redeem(redeemTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redeemUnderlying(redeemAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayBorrow(repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
    seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    selfTransferIn(from: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    selfTransferOut(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalAdminFees(overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;
    totalIonicFees(overrides?: CallOverrides): Promise<BigNumber>;
    totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _becomeImplementation(data: BytesLike, overrides?: CallOverrides): Promise<void>;
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: CallOverrides): Promise<void>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _upgrade(overrides?: CallOverrides): Promise<void>;
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: CallOverrides): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<string>;
        adminFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        adminHasRights(overrides?: CallOverrides): Promise<boolean>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        comptroller(overrides?: CallOverrides): Promise<string>;
        contractType(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        delegateType(overrides?: CallOverrides): Promise<number>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        feeSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        flash(amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<string>;
        interestRateModel(overrides?: CallOverrides): Promise<string>;
        ionicAdmin(overrides?: CallOverrides): Promise<string>;
        ionicAdminHasRights(overrides?: CallOverrides): Promise<boolean>;
        ionicFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        name(overrides?: CallOverrides): Promise<string>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemUnderlying(redeemAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrow(repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        selfTransferIn(from: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        selfTransferOut(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalAdminFees(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        totalIonicFees(overrides?: CallOverrides): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        underlying(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        _becomeImplementation(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        adminFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        adminHasRights(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowIndex(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        comptroller(overrides?: CallOverrides): Promise<BigNumber>;
        contractType(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        delegateType(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        feeSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        flash(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        interestRateModel(overrides?: CallOverrides): Promise<BigNumber>;
        ionicAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        ionicAdminHasRights(overrides?: CallOverrides): Promise<BigNumber>;
        ionicFeeMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mint(mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        redeemUnderlying(redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayBorrow(repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        selfTransferIn(from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        selfTransferOut(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalAdminFees(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrows(overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        totalIonicFees(overrides?: CallOverrides): Promise<BigNumber>;
        totalReserves(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _becomeImplementation(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setImplementationSafe(implementation_: string, becomeImplementationData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        accrualBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accrueInterest(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adminFeeMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adminHasRights(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        comptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegateType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        feeSeizeShareMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flash(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        interestRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ionicAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ionicAdminHasRights(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ionicFeeMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mint(mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolSeizeShareMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(redeemTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redeemUnderlying(redeemAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayBorrow(repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        reserveFactorMantissa(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        selfTransferIn(from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        selfTransferOut(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalAdminFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrows(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalIonicFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
