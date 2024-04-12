import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface CTokenFirstExtensionInterfaceInterface extends Interface {
    getFunction(nameOrSignature: "_setAdminFee" | "_setInterestRateModel" | "_setReserveFactor" | "accrueInterest" | "allowance" | "approve" | "balanceOf" | "balanceOfUnderlying" | "borrowBalanceCurrent" | "borrowRatePerBlock" | "borrowRatePerBlockAfterBorrow" | "exchangeRateCurrent" | "flash" | "getAccountSnapshot" | "getTotalUnderlyingSupplied" | "multicall" | "supplyRatePerBlock" | "supplyRatePerBlockAfterDeposit" | "supplyRatePerBlockAfterWithdraw" | "totalBorrowsCurrent" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "_setAdminFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setInterestRateModel", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setReserveFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "balanceOfUnderlying", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowBalanceCurrent", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowRatePerBlockAfterBorrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchangeRateCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "flash", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getAccountSnapshot", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getTotalUnderlyingSupplied", values?: undefined): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlockAfterDeposit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supplyRatePerBlockAfterWithdraw", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalBorrowsCurrent", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
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
}
export interface CTokenFirstExtensionInterface extends BaseContract {
    connect(runner?: ContractRunner | null): CTokenFirstExtensionInterface;
    waitForDeployment(): Promise<this>;
    interface: CTokenFirstExtensionInterfaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _setAdminFee: TypedContractMethod<[
        newAdminFeeMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    _setInterestRateModel: TypedContractMethod<[
        newInterestRateModel: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    _setReserveFactor: TypedContractMethod<[
        newReserveFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    accrueInterest: TypedContractMethod<[], [bigint], "nonpayable">;
    allowance: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    balanceOfUnderlying: TypedContractMethod<[
        owner: AddressLike
    ], [
        bigint
    ], "view">;
    borrowBalanceCurrent: TypedContractMethod<[
        account: AddressLike
    ], [
        bigint
    ], "view">;
    borrowRatePerBlock: TypedContractMethod<[], [bigint], "view">;
    borrowRatePerBlockAfterBorrow: TypedContractMethod<[
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "view">;
    exchangeRateCurrent: TypedContractMethod<[], [bigint], "view">;
    flash: TypedContractMethod<[
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getAccountSnapshot: TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
    getTotalUnderlyingSupplied: TypedContractMethod<[], [bigint], "view">;
    multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "payable">;
    supplyRatePerBlock: TypedContractMethod<[], [bigint], "view">;
    supplyRatePerBlockAfterDeposit: TypedContractMethod<[
        mintAmount: BigNumberish
    ], [
        bigint
    ], "view">;
    supplyRatePerBlockAfterWithdraw: TypedContractMethod<[
        withdrawAmount: BigNumberish
    ], [
        bigint
    ], "view">;
    totalBorrowsCurrent: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        dst: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_setAdminFee"): TypedContractMethod<[
        newAdminFeeMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setInterestRateModel"): TypedContractMethod<[
        newInterestRateModel: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setReserveFactor"): TypedContractMethod<[
        newReserveFactorMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "accrueInterest"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "balanceOfUnderlying"): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "borrowBalanceCurrent"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "borrowRatePerBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "borrowRatePerBlockAfterBorrow"): TypedContractMethod<[borrowAmount: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "exchangeRateCurrent"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "flash"): TypedContractMethod<[
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAccountSnapshot"): TypedContractMethod<[
        account: AddressLike
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
    getFunction(nameOrSignature: "getTotalUnderlyingSupplied"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "multicall"): TypedContractMethod<[data: BytesLike[]], [string[]], "payable">;
    getFunction(nameOrSignature: "supplyRatePerBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "supplyRatePerBlockAfterDeposit"): TypedContractMethod<[mintAmount: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "supplyRatePerBlockAfterWithdraw"): TypedContractMethod<[withdrawAmount: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "totalBorrowsCurrent"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        dst: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        src: AddressLike,
        dst: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    filters: {};
}
