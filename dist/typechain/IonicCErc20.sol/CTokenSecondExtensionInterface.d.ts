import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface CTokenSecondExtensionInterfaceInterface extends utils.Interface {
    functions: {
        "_withdrawAdminFees(uint256)": FunctionFragment;
        "_withdrawIonicFees(uint256)": FunctionFragment;
        "borrow(uint256)": FunctionFragment;
        "getCash()": FunctionFragment;
        "liquidateBorrow(address,uint256,address)": FunctionFragment;
        "mint(uint256)": FunctionFragment;
        "redeem(uint256)": FunctionFragment;
        "redeemUnderlying(uint256)": FunctionFragment;
        "repayBorrow(uint256)": FunctionFragment;
        "repayBorrowBehalf(address,uint256)": FunctionFragment;
        "seize(address,address,uint256)": FunctionFragment;
        "selfTransferIn(address,uint256)": FunctionFragment;
        "selfTransferOut(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_withdrawAdminFees" | "_withdrawIonicFees" | "borrow" | "getCash" | "liquidateBorrow" | "mint" | "redeem" | "redeemUnderlying" | "repayBorrow" | "repayBorrowBehalf" | "seize" | "selfTransferIn" | "selfTransferOut"): FunctionFragment;
    encodeFunctionData(functionFragment: "_withdrawAdminFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_withdrawIonicFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCash", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidateBorrow", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemUnderlying", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowBehalf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "seize", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfTransferIn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfTransferOut", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_withdrawAdminFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_withdrawIonicFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayBorrowBehalf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfTransferIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfTransferOut", data: BytesLike): Result;
    events: {};
}
export interface CTokenSecondExtensionInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CTokenSecondExtensionInterfaceInterface;
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
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getCash(overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mint(mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
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
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        selfTransferIn(from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        selfTransferOut(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getCash(overrides?: CallOverrides): Promise<BigNumber>;
    liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mint(mintAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
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
    seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    selfTransferIn(from: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    selfTransferOut(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        borrow(borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: CallOverrides): Promise<BigNumber>;
        mint(mintAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeem(redeemTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        redeemUnderlying(redeemAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrow(repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        repayBorrowBehalf(borrower: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        selfTransferIn(from: string, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        selfTransferOut(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getCash(overrides?: CallOverrides): Promise<BigNumber>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mint(mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
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
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        selfTransferIn(from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        selfTransferOut(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _withdrawAdminFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _withdrawIonicFees(withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrow(borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getCash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidateBorrow(borrower: string, repayAmount: BigNumberish, cTokenCollateral: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mint(mintAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
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
        seize(liquidator: string, borrower: string, seizeTokens: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        selfTransferIn(from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        selfTransferOut(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
