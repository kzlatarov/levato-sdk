import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export declare namespace DataTypes {
    type ReserveConfigurationMapStruct = {
        data: BigNumberish;
    };
    type ReserveConfigurationMapStructOutput = [data: bigint] & {
        data: bigint;
    };
    type ReserveDataStruct = {
        configuration: DataTypes.ReserveConfigurationMapStruct;
        liquidityIndex: BigNumberish;
        variableBorrowIndex: BigNumberish;
        currentLiquidityRate: BigNumberish;
        currentVariableBorrowRate: BigNumberish;
        currentStableBorrowRate: BigNumberish;
        lastUpdateTimestamp: BigNumberish;
        aTokenAddress: AddressLike;
        stableDebtTokenAddress: AddressLike;
        variableDebtTokenAddress: AddressLike;
        interestRateStrategyAddress: AddressLike;
        id: BigNumberish;
    };
    type ReserveDataStructOutput = [
        configuration: DataTypes.ReserveConfigurationMapStructOutput,
        liquidityIndex: bigint,
        variableBorrowIndex: bigint,
        currentLiquidityRate: bigint,
        currentVariableBorrowRate: bigint,
        currentStableBorrowRate: bigint,
        lastUpdateTimestamp: bigint,
        aTokenAddress: string,
        stableDebtTokenAddress: string,
        variableDebtTokenAddress: string,
        interestRateStrategyAddress: string,
        id: bigint
    ] & {
        configuration: DataTypes.ReserveConfigurationMapStructOutput;
        liquidityIndex: bigint;
        variableBorrowIndex: bigint;
        currentLiquidityRate: bigint;
        currentVariableBorrowRate: bigint;
        currentStableBorrowRate: bigint;
        lastUpdateTimestamp: bigint;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        id: bigint;
    };
    type UserConfigurationMapStruct = {
        data: BigNumberish;
    };
    type UserConfigurationMapStructOutput = [data: bigint] & {
        data: bigint;
    };
}
export interface ILendingPoolInterface extends Interface {
    getFunction(nameOrSignature: "borrow" | "deposit" | "finalizeTransfer" | "flashLoan" | "getAddressesProvider" | "getConfiguration" | "getReserveData" | "getReserveNormalizedIncome" | "getReserveNormalizedVariableDebt" | "getReservesList" | "getUserAccountData" | "getUserConfiguration" | "initReserve" | "liquidationCall" | "paused" | "rebalanceStableBorrowRate" | "repay" | "setConfiguration" | "setPause" | "setReserveInterestRateStrategyAddress" | "setUserUseReserveAsCollateral" | "swapBorrowRateMode" | "withdraw"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Borrow" | "Deposit" | "FlashLoan" | "LiquidationCall" | "Paused" | "RebalanceStableBorrowRate" | "Repay" | "ReserveDataUpdated" | "ReserveUsedAsCollateralDisabled" | "ReserveUsedAsCollateralEnabled" | "Swap" | "Unpaused" | "Withdraw"): EventFragment;
    encodeFunctionData(functionFragment: "borrow", values: [AddressLike, BigNumberish, BigNumberish, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "deposit", values: [AddressLike, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "finalizeTransfer", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "flashLoan", values: [
        AddressLike,
        AddressLike[],
        BigNumberish[],
        BigNumberish[],
        AddressLike,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getAddressesProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "getConfiguration", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReserveData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedIncome", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedVariableDebt", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReservesList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserAccountData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getUserConfiguration", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initReserve", values: [AddressLike, AddressLike, AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "liquidationCall", values: [AddressLike, AddressLike, AddressLike, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalanceStableBorrowRate", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "repay", values: [AddressLike, BigNumberish, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "setConfiguration", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPause", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setReserveInterestRateStrategyAddress", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setUserUseReserveAsCollateral", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "swapBorrowRateMode", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [AddressLike, BigNumberish, AddressLike]): string;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddressesProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedIncome", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedVariableDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAccountData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalanceStableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveInterestRateStrategyAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserUseReserveAsCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapBorrowRateMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export declare namespace BorrowEvent {
    type InputTuple = [
        reserve: AddressLike,
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        borrowRateMode: BigNumberish,
        borrowRate: BigNumberish,
        referral: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        user: string,
        onBehalfOf: string,
        amount: bigint,
        borrowRateMode: bigint,
        borrowRate: bigint,
        referral: bigint
    ];
    interface OutputObject {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: bigint;
        borrowRateMode: bigint;
        borrowRate: bigint;
        referral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DepositEvent {
    type InputTuple = [
        reserve: AddressLike,
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        referral: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        user: string,
        onBehalfOf: string,
        amount: bigint,
        referral: bigint
    ];
    interface OutputObject {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: bigint;
        referral: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FlashLoanEvent {
    type InputTuple = [
        target: AddressLike,
        initiator: AddressLike,
        asset: AddressLike,
        amount: BigNumberish,
        premium: BigNumberish,
        referralCode: BigNumberish
    ];
    type OutputTuple = [
        target: string,
        initiator: string,
        asset: string,
        amount: bigint,
        premium: bigint,
        referralCode: bigint
    ];
    interface OutputObject {
        target: string;
        initiator: string;
        asset: string;
        amount: bigint;
        premium: bigint;
        referralCode: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LiquidationCallEvent {
    type InputTuple = [
        collateralAsset: AddressLike,
        debtAsset: AddressLike,
        user: AddressLike,
        debtToCover: BigNumberish,
        liquidatedCollateralAmount: BigNumberish,
        liquidator: AddressLike,
        receiveAToken: boolean
    ];
    type OutputTuple = [
        collateralAsset: string,
        debtAsset: string,
        user: string,
        debtToCover: bigint,
        liquidatedCollateralAmount: bigint,
        liquidator: string,
        receiveAToken: boolean
    ];
    interface OutputObject {
        collateralAsset: string;
        debtAsset: string;
        user: string;
        debtToCover: bigint;
        liquidatedCollateralAmount: bigint;
        liquidator: string;
        receiveAToken: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PausedEvent {
    type InputTuple = [];
    type OutputTuple = [];
    interface OutputObject {
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RebalanceStableBorrowRateEvent {
    type InputTuple = [reserve: AddressLike, user: AddressLike];
    type OutputTuple = [reserve: string, user: string];
    interface OutputObject {
        reserve: string;
        user: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RepayEvent {
    type InputTuple = [
        reserve: AddressLike,
        user: AddressLike,
        repayer: AddressLike,
        amount: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        user: string,
        repayer: string,
        amount: bigint
    ];
    interface OutputObject {
        reserve: string;
        user: string;
        repayer: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReserveDataUpdatedEvent {
    type InputTuple = [
        reserve: AddressLike,
        liquidityRate: BigNumberish,
        stableBorrowRate: BigNumberish,
        variableBorrowRate: BigNumberish,
        liquidityIndex: BigNumberish,
        variableBorrowIndex: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        liquidityRate: bigint,
        stableBorrowRate: bigint,
        variableBorrowRate: bigint,
        liquidityIndex: bigint,
        variableBorrowIndex: bigint
    ];
    interface OutputObject {
        reserve: string;
        liquidityRate: bigint;
        stableBorrowRate: bigint;
        variableBorrowRate: bigint;
        liquidityIndex: bigint;
        variableBorrowIndex: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReserveUsedAsCollateralDisabledEvent {
    type InputTuple = [reserve: AddressLike, user: AddressLike];
    type OutputTuple = [reserve: string, user: string];
    interface OutputObject {
        reserve: string;
        user: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ReserveUsedAsCollateralEnabledEvent {
    type InputTuple = [reserve: AddressLike, user: AddressLike];
    type OutputTuple = [reserve: string, user: string];
    interface OutputObject {
        reserve: string;
        user: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SwapEvent {
    type InputTuple = [
        reserve: AddressLike,
        user: AddressLike,
        rateMode: BigNumberish
    ];
    type OutputTuple = [reserve: string, user: string, rateMode: bigint];
    interface OutputObject {
        reserve: string;
        user: string;
        rateMode: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [];
    type OutputTuple = [];
    interface OutputObject {
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace WithdrawEvent {
    type InputTuple = [
        reserve: AddressLike,
        user: AddressLike,
        to: AddressLike,
        amount: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        user: string,
        to: string,
        amount: bigint
    ];
    interface OutputObject {
        reserve: string;
        user: string;
        to: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ILendingPool extends BaseContract {
    connect(runner?: ContractRunner | null): ILendingPool;
    waitForDeployment(): Promise<this>;
    interface: ILendingPoolInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    borrow: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish,
        referralCode: BigNumberish,
        onBehalfOf: AddressLike
    ], [
        void
    ], "nonpayable">;
    deposit: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        onBehalfOf: AddressLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    finalizeTransfer: TypedContractMethod<[
        asset: AddressLike,
        from: AddressLike,
        to: AddressLike,
        amount: BigNumberish,
        balanceFromAfter: BigNumberish,
        balanceToBefore: BigNumberish
    ], [
        void
    ], "nonpayable">;
    flashLoan: TypedContractMethod<[
        receiverAddress: AddressLike,
        assets: AddressLike[],
        amounts: BigNumberish[],
        modes: BigNumberish[],
        onBehalfOf: AddressLike,
        params: BytesLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getAddressesProvider: TypedContractMethod<[], [string], "view">;
    getConfiguration: TypedContractMethod<[
        asset: AddressLike
    ], [
        DataTypes.ReserveConfigurationMapStructOutput
    ], "view">;
    getReserveData: TypedContractMethod<[
        asset: AddressLike
    ], [
        DataTypes.ReserveDataStructOutput
    ], "view">;
    getReserveNormalizedIncome: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getReserveNormalizedVariableDebt: TypedContractMethod<[
        asset: AddressLike
    ], [
        bigint
    ], "view">;
    getReservesList: TypedContractMethod<[], [string[]], "view">;
    getUserAccountData: TypedContractMethod<[
        user: AddressLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            totalCollateralETH: bigint;
            totalDebtETH: bigint;
            availableBorrowsETH: bigint;
            currentLiquidationThreshold: bigint;
            ltv: bigint;
            healthFactor: bigint;
        }
    ], "view">;
    getUserConfiguration: TypedContractMethod<[
        user: AddressLike
    ], [
        DataTypes.UserConfigurationMapStructOutput
    ], "view">;
    initReserve: TypedContractMethod<[
        reserve: AddressLike,
        aTokenAddress: AddressLike,
        stableDebtAddress: AddressLike,
        variableDebtAddress: AddressLike,
        interestRateStrategyAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    liquidationCall: TypedContractMethod<[
        collateralAsset: AddressLike,
        debtAsset: AddressLike,
        user: AddressLike,
        debtToCover: BigNumberish,
        receiveAToken: boolean
    ], [
        void
    ], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    rebalanceStableBorrowRate: TypedContractMethod<[
        asset: AddressLike,
        user: AddressLike
    ], [
        void
    ], "nonpayable">;
    repay: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        rateMode: BigNumberish,
        onBehalfOf: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    setConfiguration: TypedContractMethod<[
        reserve: AddressLike,
        configuration: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setPause: TypedContractMethod<[val: boolean], [void], "nonpayable">;
    setReserveInterestRateStrategyAddress: TypedContractMethod<[
        reserve: AddressLike,
        rateStrategyAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    setUserUseReserveAsCollateral: TypedContractMethod<[
        asset: AddressLike,
        useAsCollateral: boolean
    ], [
        void
    ], "nonpayable">;
    swapBorrowRateMode: TypedContractMethod<[
        asset: AddressLike,
        rateMode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    withdraw: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        to: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "borrow"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish,
        referralCode: BigNumberish,
        onBehalfOf: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        onBehalfOf: AddressLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "finalizeTransfer"): TypedContractMethod<[
        asset: AddressLike,
        from: AddressLike,
        to: AddressLike,
        amount: BigNumberish,
        balanceFromAfter: BigNumberish,
        balanceToBefore: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "flashLoan"): TypedContractMethod<[
        receiverAddress: AddressLike,
        assets: AddressLike[],
        amounts: BigNumberish[],
        modes: BigNumberish[],
        onBehalfOf: AddressLike,
        params: BytesLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAddressesProvider"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getConfiguration"): TypedContractMethod<[
        asset: AddressLike
    ], [
        DataTypes.ReserveConfigurationMapStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getReserveData"): TypedContractMethod<[
        asset: AddressLike
    ], [
        DataTypes.ReserveDataStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getReserveNormalizedIncome"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getReserveNormalizedVariableDebt"): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getReservesList"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getUserAccountData"): TypedContractMethod<[
        user: AddressLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            bigint,
            bigint
        ] & {
            totalCollateralETH: bigint;
            totalDebtETH: bigint;
            availableBorrowsETH: bigint;
            currentLiquidationThreshold: bigint;
            ltv: bigint;
            healthFactor: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "getUserConfiguration"): TypedContractMethod<[
        user: AddressLike
    ], [
        DataTypes.UserConfigurationMapStructOutput
    ], "view">;
    getFunction(nameOrSignature: "initReserve"): TypedContractMethod<[
        reserve: AddressLike,
        aTokenAddress: AddressLike,
        stableDebtAddress: AddressLike,
        variableDebtAddress: AddressLike,
        interestRateStrategyAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "liquidationCall"): TypedContractMethod<[
        collateralAsset: AddressLike,
        debtAsset: AddressLike,
        user: AddressLike,
        debtToCover: BigNumberish,
        receiveAToken: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "rebalanceStableBorrowRate"): TypedContractMethod<[
        asset: AddressLike,
        user: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "repay"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        rateMode: BigNumberish,
        onBehalfOf: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "setConfiguration"): TypedContractMethod<[
        reserve: AddressLike,
        configuration: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setPause"): TypedContractMethod<[val: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "setReserveInterestRateStrategyAddress"): TypedContractMethod<[
        reserve: AddressLike,
        rateStrategyAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setUserUseReserveAsCollateral"): TypedContractMethod<[
        asset: AddressLike,
        useAsCollateral: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "swapBorrowRateMode"): TypedContractMethod<[
        asset: AddressLike,
        rateMode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        to: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getEvent(key: "Borrow"): TypedContractEvent<BorrowEvent.InputTuple, BorrowEvent.OutputTuple, BorrowEvent.OutputObject>;
    getEvent(key: "Deposit"): TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
    getEvent(key: "FlashLoan"): TypedContractEvent<FlashLoanEvent.InputTuple, FlashLoanEvent.OutputTuple, FlashLoanEvent.OutputObject>;
    getEvent(key: "LiquidationCall"): TypedContractEvent<LiquidationCallEvent.InputTuple, LiquidationCallEvent.OutputTuple, LiquidationCallEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "RebalanceStableBorrowRate"): TypedContractEvent<RebalanceStableBorrowRateEvent.InputTuple, RebalanceStableBorrowRateEvent.OutputTuple, RebalanceStableBorrowRateEvent.OutputObject>;
    getEvent(key: "Repay"): TypedContractEvent<RepayEvent.InputTuple, RepayEvent.OutputTuple, RepayEvent.OutputObject>;
    getEvent(key: "ReserveDataUpdated"): TypedContractEvent<ReserveDataUpdatedEvent.InputTuple, ReserveDataUpdatedEvent.OutputTuple, ReserveDataUpdatedEvent.OutputObject>;
    getEvent(key: "ReserveUsedAsCollateralDisabled"): TypedContractEvent<ReserveUsedAsCollateralDisabledEvent.InputTuple, ReserveUsedAsCollateralDisabledEvent.OutputTuple, ReserveUsedAsCollateralDisabledEvent.OutputObject>;
    getEvent(key: "ReserveUsedAsCollateralEnabled"): TypedContractEvent<ReserveUsedAsCollateralEnabledEvent.InputTuple, ReserveUsedAsCollateralEnabledEvent.OutputTuple, ReserveUsedAsCollateralEnabledEvent.OutputObject>;
    getEvent(key: "Swap"): TypedContractEvent<SwapEvent.InputTuple, SwapEvent.OutputTuple, SwapEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    filters: {
        "Borrow(address,address,address,uint256,uint256,uint256,uint16)": TypedContractEvent<BorrowEvent.InputTuple, BorrowEvent.OutputTuple, BorrowEvent.OutputObject>;
        Borrow: TypedContractEvent<BorrowEvent.InputTuple, BorrowEvent.OutputTuple, BorrowEvent.OutputObject>;
        "Deposit(address,address,address,uint256,uint16)": TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
        Deposit: TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
        "FlashLoan(address,address,address,uint256,uint256,uint16)": TypedContractEvent<FlashLoanEvent.InputTuple, FlashLoanEvent.OutputTuple, FlashLoanEvent.OutputObject>;
        FlashLoan: TypedContractEvent<FlashLoanEvent.InputTuple, FlashLoanEvent.OutputTuple, FlashLoanEvent.OutputObject>;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)": TypedContractEvent<LiquidationCallEvent.InputTuple, LiquidationCallEvent.OutputTuple, LiquidationCallEvent.OutputObject>;
        LiquidationCall: TypedContractEvent<LiquidationCallEvent.InputTuple, LiquidationCallEvent.OutputTuple, LiquidationCallEvent.OutputObject>;
        "Paused()": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "RebalanceStableBorrowRate(address,address)": TypedContractEvent<RebalanceStableBorrowRateEvent.InputTuple, RebalanceStableBorrowRateEvent.OutputTuple, RebalanceStableBorrowRateEvent.OutputObject>;
        RebalanceStableBorrowRate: TypedContractEvent<RebalanceStableBorrowRateEvent.InputTuple, RebalanceStableBorrowRateEvent.OutputTuple, RebalanceStableBorrowRateEvent.OutputObject>;
        "Repay(address,address,address,uint256)": TypedContractEvent<RepayEvent.InputTuple, RepayEvent.OutputTuple, RepayEvent.OutputObject>;
        Repay: TypedContractEvent<RepayEvent.InputTuple, RepayEvent.OutputTuple, RepayEvent.OutputObject>;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<ReserveDataUpdatedEvent.InputTuple, ReserveDataUpdatedEvent.OutputTuple, ReserveDataUpdatedEvent.OutputObject>;
        ReserveDataUpdated: TypedContractEvent<ReserveDataUpdatedEvent.InputTuple, ReserveDataUpdatedEvent.OutputTuple, ReserveDataUpdatedEvent.OutputObject>;
        "ReserveUsedAsCollateralDisabled(address,address)": TypedContractEvent<ReserveUsedAsCollateralDisabledEvent.InputTuple, ReserveUsedAsCollateralDisabledEvent.OutputTuple, ReserveUsedAsCollateralDisabledEvent.OutputObject>;
        ReserveUsedAsCollateralDisabled: TypedContractEvent<ReserveUsedAsCollateralDisabledEvent.InputTuple, ReserveUsedAsCollateralDisabledEvent.OutputTuple, ReserveUsedAsCollateralDisabledEvent.OutputObject>;
        "ReserveUsedAsCollateralEnabled(address,address)": TypedContractEvent<ReserveUsedAsCollateralEnabledEvent.InputTuple, ReserveUsedAsCollateralEnabledEvent.OutputTuple, ReserveUsedAsCollateralEnabledEvent.OutputObject>;
        ReserveUsedAsCollateralEnabled: TypedContractEvent<ReserveUsedAsCollateralEnabledEvent.InputTuple, ReserveUsedAsCollateralEnabledEvent.OutputTuple, ReserveUsedAsCollateralEnabledEvent.OutputObject>;
        "Swap(address,address,uint256)": TypedContractEvent<SwapEvent.InputTuple, SwapEvent.OutputTuple, SwapEvent.OutputObject>;
        Swap: TypedContractEvent<SwapEvent.InputTuple, SwapEvent.OutputTuple, SwapEvent.OutputObject>;
        "Unpaused()": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "Withdraw(address,address,address,uint256)": TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
        Withdraw: TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    };
}
