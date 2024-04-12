import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface CTokenSecondExtensionInterfaceInterface extends Interface {
    getFunction(nameOrSignature: "_withdrawAdminFees" | "_withdrawIonicFees" | "borrow" | "getCash" | "liquidateBorrow" | "mint" | "redeem" | "redeemUnderlying" | "repayBorrow" | "repayBorrowBehalf" | "seize" | "selfTransferIn" | "selfTransferOut"): FunctionFragment;
    encodeFunctionData(functionFragment: "_withdrawAdminFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_withdrawIonicFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCash", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidateBorrow", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemUnderlying", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowBehalf", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "seize", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfTransferIn", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfTransferOut", values: [AddressLike, BigNumberish]): string;
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
}
export interface CTokenSecondExtensionInterface extends BaseContract {
    connect(runner?: ContractRunner | null): CTokenSecondExtensionInterface;
    waitForDeployment(): Promise<this>;
    interface: CTokenSecondExtensionInterfaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _withdrawAdminFees: TypedContractMethod<[
        withdrawAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    _withdrawIonicFees: TypedContractMethod<[
        withdrawAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    borrow: TypedContractMethod<[
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getCash: TypedContractMethod<[], [bigint], "view">;
    liquidateBorrow: TypedContractMethod<[
        borrower: AddressLike,
        repayAmount: BigNumberish,
        cTokenCollateral: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    mint: TypedContractMethod<[mintAmount: BigNumberish], [bigint], "nonpayable">;
    redeem: TypedContractMethod<[
        redeemTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    redeemUnderlying: TypedContractMethod<[
        redeemAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    repayBorrow: TypedContractMethod<[
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    repayBorrowBehalf: TypedContractMethod<[
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    seize: TypedContractMethod<[
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    selfTransferIn: TypedContractMethod<[
        from: AddressLike,
        amount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    selfTransferOut: TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_withdrawAdminFees"): TypedContractMethod<[
        withdrawAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_withdrawIonicFees"): TypedContractMethod<[
        withdrawAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "borrow"): TypedContractMethod<[borrowAmount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "getCash"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "liquidateBorrow"): TypedContractMethod<[
        borrower: AddressLike,
        repayAmount: BigNumberish,
        cTokenCollateral: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[mintAmount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "redeem"): TypedContractMethod<[redeemTokens: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "redeemUnderlying"): TypedContractMethod<[redeemAmount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "repayBorrow"): TypedContractMethod<[repayAmount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "repayBorrowBehalf"): TypedContractMethod<[
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "seize"): TypedContractMethod<[
        liquidator: AddressLike,
        borrower: AddressLike,
        seizeTokens: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "selfTransferIn"): TypedContractMethod<[
        from: AddressLike,
        amount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "selfTransferOut"): TypedContractMethod<[
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
