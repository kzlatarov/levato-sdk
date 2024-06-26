import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface CTokenFirstExtensionInterfaceInterface extends utils.Interface {
    functions: {
        "_setAdminFee(uint256)": FunctionFragment;
        "_setInterestRateModel(address)": FunctionFragment;
        "_setReserveFactor(uint256)": FunctionFragment;
        "accrueInterest()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfUnderlying(address)": FunctionFragment;
        "borrowBalanceCurrent(address)": FunctionFragment;
        "borrowRatePerBlock()": FunctionFragment;
        "borrowRatePerBlockAfterBorrow(uint256)": FunctionFragment;
        "exchangeRateCurrent()": FunctionFragment;
        "flash(uint256,bytes)": FunctionFragment;
        "getAccountSnapshot(address)": FunctionFragment;
        "getTotalUnderlyingSupplied()": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "supplyRatePerBlock()": FunctionFragment;
        "supplyRatePerBlockAfterDeposit(uint256)": FunctionFragment;
        "supplyRatePerBlockAfterWithdraw(uint256)": FunctionFragment;
        "totalBorrowsCurrent()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_setAdminFee" | "_setInterestRateModel" | "_setReserveFactor" | "accrueInterest" | "allowance" | "approve" | "balanceOf" | "balanceOfUnderlying" | "borrowBalanceCurrent" | "borrowRatePerBlock" | "borrowRatePerBlockAfterBorrow" | "exchangeRateCurrent" | "flash" | "getAccountSnapshot" | "getTotalUnderlyingSupplied" | "multicall" | "supplyRatePerBlock" | "supplyRatePerBlockAfterDeposit" | "supplyRatePerBlockAfterWithdraw" | "totalBorrowsCurrent" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "_setAdminFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setInterestRateModel", values: [string]): string;
    encodeFunctionData(functionFragment: "_setReserveFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOfUnderlying", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowBalanceCurrent", values: [string]): string;
    encodeFunctionData(functionFragment: "borrowRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowRatePerBlockAfterBorrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchangeRateCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "flash", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getAccountSnapshot", values: [string]): string;
    encodeFunctionData(functionFragment: "getTotalUnderlyingSupplied", values?: undefined): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlockAfterDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlockAfterWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalBorrowsCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_setAdminFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setInterestRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setReserveFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accrueInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalanceCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowRatePerBlockAfterBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRateCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountSnapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalUnderlyingSupplied", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyRatePerBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyRatePerBlockAfterDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyRatePerBlockAfterWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBorrowsCurrent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {};
}
export interface CTokenFirstExtensionInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CTokenFirstExtensionInterfaceInterface;
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
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        accrueInterest(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<[BigNumber]>;
        flash(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<[BigNumber]>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    accrueInterest(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
    flash(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<BigNumber>;
    multicall(data: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
    supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: CallOverrides): Promise<BigNumber>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        accrueInterest(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        flash(amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        accrueInterest(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        flash(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _setAdminFee(newAdminFeeMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setInterestRateModel(newInterestRateModel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setReserveFactor(newReserveFactorMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        accrueInterest(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfUnderlying(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowBalanceCurrent(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowRatePerBlockAfterBorrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeRateCurrent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flash(amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAccountSnapshot(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalUnderlyingSupplied(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supplyRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyRatePerBlockAfterDeposit(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supplyRatePerBlockAfterWithdraw(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBorrowsCurrent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(src: string, dst: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
