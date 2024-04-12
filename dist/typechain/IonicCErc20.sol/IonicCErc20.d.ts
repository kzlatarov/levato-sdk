import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface IonicCErc20Interface extends Interface {
    getFunction(nameOrSignature: "_becomeImplementation" | "_setAdminFee" | "_setImplementationSafe" | "_setInterestRateModel" | "_setReserveFactor" | "_upgrade" | "_withdrawAdminFees" | "_withdrawIonicFees" | "accrualBlockNumber" | "accrueInterest" | "admin" | "adminFeeMantissa" | "adminHasRights" | "allowance" | "approve" | "balanceOf" | "balanceOfUnderlying" | "borrow" | "borrowBalanceCurrent" | "borrowIndex" | "borrowRatePerBlock" | "borrowRatePerBlockAfterBorrow" | "comptroller" | "contractType" | "decimals" | "delegateType" | "exchangeRateCurrent" | "feeSeizeShareMantissa" | "flash" | "getAccountSnapshot" | "getCash" | "getTotalUnderlyingSupplied" | "implementation" | "interestRateModel" | "ionicAdmin" | "ionicAdminHasRights" | "ionicFeeMantissa" | "liquidateBorrow" | "mint" | "multicall" | "name" | "protocolSeizeShareMantissa" | "redeem" | "redeemUnderlying" | "repayBorrow" | "repayBorrowBehalf" | "reserveFactorMantissa" | "seize" | "selfTransferIn" | "selfTransferOut" | "supplyRatePerBlock" | "supplyRatePerBlockAfterDeposit" | "supplyRatePerBlockAfterWithdraw" | "symbol" | "totalAdminFees" | "totalBorrows" | "totalBorrowsCurrent" | "totalIonicFees" | "totalReserves" | "totalSupply" | "transfer" | "transferFrom" | "underlying"): FunctionFragment;
    encodeFunctionData(functionFragment: "_becomeImplementation", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_setAdminFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_setImplementationSafe", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "_setInterestRateModel", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "_setReserveFactor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_upgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "_withdrawAdminFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_withdrawIonicFees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "accrualBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "accrueInterest", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminFeeMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "balanceOfUnderlying", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "borrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowBalanceCurrent", values: [AddressLike]): string;
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
    encodeFunctionData(functionFragment: "getAccountSnapshot", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getCash", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalUnderlyingSupplied", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "interestRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicAdminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicFeeMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidateBorrow", values: [AddressLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolSeizeShareMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemUnderlying", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrow", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayBorrowBehalf", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "reserveFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "seize", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfTransferIn", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "selfTransferOut", values: [AddressLike, BigNumberish]): string;
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
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
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
}
export interface IonicCErc20 extends BaseContract {
    connect(runner?: ContractRunner | null): IonicCErc20;
    waitForDeployment(): Promise<this>;
    interface: IonicCErc20Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _becomeImplementation: TypedContractMethod<[
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    _setAdminFee: TypedContractMethod<[
        newAdminFeeMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    _setImplementationSafe: TypedContractMethod<[
        implementation_: AddressLike,
        becomeImplementationData: BytesLike
    ], [
        void
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
    _upgrade: TypedContractMethod<[], [void], "nonpayable">;
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
    accrualBlockNumber: TypedContractMethod<[], [bigint], "view">;
    accrueInterest: TypedContractMethod<[], [bigint], "nonpayable">;
    admin: TypedContractMethod<[], [string], "view">;
    adminFeeMantissa: TypedContractMethod<[], [bigint], "view">;
    adminHasRights: TypedContractMethod<[], [boolean], "view">;
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
    borrow: TypedContractMethod<[
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    borrowBalanceCurrent: TypedContractMethod<[
        account: AddressLike
    ], [
        bigint
    ], "view">;
    borrowIndex: TypedContractMethod<[], [bigint], "view">;
    borrowRatePerBlock: TypedContractMethod<[], [bigint], "view">;
    borrowRatePerBlockAfterBorrow: TypedContractMethod<[
        borrowAmount: BigNumberish
    ], [
        bigint
    ], "view">;
    comptroller: TypedContractMethod<[], [string], "view">;
    contractType: TypedContractMethod<[], [string], "view">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    delegateType: TypedContractMethod<[], [bigint], "view">;
    exchangeRateCurrent: TypedContractMethod<[], [bigint], "view">;
    feeSeizeShareMantissa: TypedContractMethod<[], [bigint], "view">;
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
    getCash: TypedContractMethod<[], [bigint], "view">;
    getTotalUnderlyingSupplied: TypedContractMethod<[], [bigint], "view">;
    implementation: TypedContractMethod<[], [string], "view">;
    interestRateModel: TypedContractMethod<[], [string], "view">;
    ionicAdmin: TypedContractMethod<[], [string], "view">;
    ionicAdminHasRights: TypedContractMethod<[], [boolean], "view">;
    ionicFeeMantissa: TypedContractMethod<[], [bigint], "view">;
    liquidateBorrow: TypedContractMethod<[
        borrower: AddressLike,
        repayAmount: BigNumberish,
        cTokenCollateral: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    mint: TypedContractMethod<[mintAmount: BigNumberish], [bigint], "nonpayable">;
    multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "payable">;
    name: TypedContractMethod<[], [string], "view">;
    protocolSeizeShareMantissa: TypedContractMethod<[], [bigint], "view">;
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
    reserveFactorMantissa: TypedContractMethod<[], [bigint], "view">;
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
    symbol: TypedContractMethod<[], [string], "view">;
    totalAdminFees: TypedContractMethod<[], [bigint], "view">;
    totalBorrows: TypedContractMethod<[], [bigint], "view">;
    totalBorrowsCurrent: TypedContractMethod<[], [bigint], "view">;
    totalIonicFees: TypedContractMethod<[], [bigint], "view">;
    totalReserves: TypedContractMethod<[], [bigint], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
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
    underlying: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_becomeImplementation"): TypedContractMethod<[data: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "_setAdminFee"): TypedContractMethod<[
        newAdminFeeMantissa: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "_setImplementationSafe"): TypedContractMethod<[
        implementation_: AddressLike,
        becomeImplementationData: BytesLike
    ], [
        void
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
    getFunction(nameOrSignature: "_upgrade"): TypedContractMethod<[], [void], "nonpayable">;
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
    getFunction(nameOrSignature: "accrualBlockNumber"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "accrueInterest"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "adminFeeMantissa"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "adminHasRights"): TypedContractMethod<[], [boolean], "view">;
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
    getFunction(nameOrSignature: "borrow"): TypedContractMethod<[borrowAmount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "borrowBalanceCurrent"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "borrowIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "borrowRatePerBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "borrowRatePerBlockAfterBorrow"): TypedContractMethod<[borrowAmount: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "comptroller"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "contractType"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "delegateType"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "exchangeRateCurrent"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "feeSeizeShareMantissa"): TypedContractMethod<[], [bigint], "view">;
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
    getFunction(nameOrSignature: "getCash"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTotalUnderlyingSupplied"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "implementation"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "interestRateModel"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "ionicAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "ionicAdminHasRights"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "ionicFeeMantissa"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "liquidateBorrow"): TypedContractMethod<[
        borrower: AddressLike,
        repayAmount: BigNumberish,
        cTokenCollateral: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[mintAmount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "multicall"): TypedContractMethod<[data: BytesLike[]], [string[]], "payable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "protocolSeizeShareMantissa"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "redeem"): TypedContractMethod<[redeemTokens: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "redeemUnderlying"): TypedContractMethod<[redeemAmount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "repayBorrow"): TypedContractMethod<[repayAmount: BigNumberish], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "repayBorrowBehalf"): TypedContractMethod<[
        borrower: AddressLike,
        repayAmount: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "reserveFactorMantissa"): TypedContractMethod<[], [bigint], "view">;
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
    getFunction(nameOrSignature: "supplyRatePerBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "supplyRatePerBlockAfterDeposit"): TypedContractMethod<[mintAmount: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "supplyRatePerBlockAfterWithdraw"): TypedContractMethod<[withdrawAmount: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "totalAdminFees"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalBorrows"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalBorrowsCurrent"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalIonicFees"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalReserves"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
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
    getFunction(nameOrSignature: "underlying"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
