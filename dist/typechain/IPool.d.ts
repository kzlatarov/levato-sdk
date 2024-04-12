import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export declare namespace DataTypes {
    type EModeCategoryStruct = {
        ltv: BigNumberish;
        liquidationThreshold: BigNumberish;
        liquidationBonus: BigNumberish;
        priceSource: AddressLike;
        label: string;
    };
    type EModeCategoryStructOutput = [
        ltv: bigint,
        liquidationThreshold: bigint,
        liquidationBonus: bigint,
        priceSource: string,
        label: string
    ] & {
        ltv: bigint;
        liquidationThreshold: bigint;
        liquidationBonus: bigint;
        priceSource: string;
        label: string;
    };
    type ReserveConfigurationMapStruct = {
        data: BigNumberish;
    };
    type ReserveConfigurationMapStructOutput = [data: bigint] & {
        data: bigint;
    };
    type ReserveDataStruct = {
        configuration: DataTypes.ReserveConfigurationMapStruct;
        liquidityIndex: BigNumberish;
        currentLiquidityRate: BigNumberish;
        variableBorrowIndex: BigNumberish;
        currentVariableBorrowRate: BigNumberish;
        currentStableBorrowRate: BigNumberish;
        lastUpdateTimestamp: BigNumberish;
        id: BigNumberish;
        aTokenAddress: AddressLike;
        stableDebtTokenAddress: AddressLike;
        variableDebtTokenAddress: AddressLike;
        interestRateStrategyAddress: AddressLike;
        accruedToTreasury: BigNumberish;
        unbacked: BigNumberish;
        isolationModeTotalDebt: BigNumberish;
    };
    type ReserveDataStructOutput = [
        configuration: DataTypes.ReserveConfigurationMapStructOutput,
        liquidityIndex: bigint,
        currentLiquidityRate: bigint,
        variableBorrowIndex: bigint,
        currentVariableBorrowRate: bigint,
        currentStableBorrowRate: bigint,
        lastUpdateTimestamp: bigint,
        id: bigint,
        aTokenAddress: string,
        stableDebtTokenAddress: string,
        variableDebtTokenAddress: string,
        interestRateStrategyAddress: string,
        accruedToTreasury: bigint,
        unbacked: bigint,
        isolationModeTotalDebt: bigint
    ] & {
        configuration: DataTypes.ReserveConfigurationMapStructOutput;
        liquidityIndex: bigint;
        currentLiquidityRate: bigint;
        variableBorrowIndex: bigint;
        currentVariableBorrowRate: bigint;
        currentStableBorrowRate: bigint;
        lastUpdateTimestamp: bigint;
        id: bigint;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        accruedToTreasury: bigint;
        unbacked: bigint;
        isolationModeTotalDebt: bigint;
    };
    type UserConfigurationMapStruct = {
        data: BigNumberish;
    };
    type UserConfigurationMapStructOutput = [data: bigint] & {
        data: bigint;
    };
}
export interface IPoolInterface extends Interface {
    getFunction(nameOrSignature: "ADDRESSES_PROVIDER" | "BRIDGE_PROTOCOL_FEE" | "FLASHLOAN_PREMIUM_TOTAL" | "FLASHLOAN_PREMIUM_TO_PROTOCOL" | "MAX_NUMBER_RESERVES" | "MAX_STABLE_RATE_BORROW_SIZE_PERCENT" | "backUnbacked" | "borrow" | "configureEModeCategory" | "deposit" | "dropReserve" | "finalizeTransfer" | "flashLoan" | "flashLoanSimple" | "getConfiguration" | "getEModeCategoryData" | "getReserveAddressById" | "getReserveData" | "getReserveNormalizedIncome" | "getReserveNormalizedVariableDebt" | "getReservesList" | "getUserAccountData" | "getUserConfiguration" | "getUserEMode" | "initReserve" | "liquidationCall" | "mintToTreasury" | "mintUnbacked" | "rebalanceStableBorrowRate" | "repay" | "repayWithATokens" | "repayWithPermit" | "rescueTokens" | "resetIsolationModeTotalDebt" | "setConfiguration" | "setReserveInterestRateStrategyAddress" | "setUserEMode" | "setUserUseReserveAsCollateral" | "supply" | "supplyWithPermit" | "swapBorrowRateMode" | "updateBridgeProtocolFee" | "updateFlashloanPremiums" | "withdraw"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "BackUnbacked" | "Borrow" | "FlashLoan" | "IsolationModeTotalDebtUpdated" | "LiquidationCall" | "MintUnbacked" | "MintedToTreasury" | "RebalanceStableBorrowRate" | "Repay" | "ReserveDataUpdated" | "ReserveUsedAsCollateralDisabled" | "ReserveUsedAsCollateralEnabled" | "Supply" | "SwapBorrowRateMode" | "UserEModeSet" | "Withdraw"): EventFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "BRIDGE_PROTOCOL_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "FLASHLOAN_PREMIUM_TOTAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "FLASHLOAN_PREMIUM_TO_PROTOCOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_NUMBER_RESERVES", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT", values?: undefined): string;
    encodeFunctionData(functionFragment: "backUnbacked", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrow", values: [AddressLike, BigNumberish, BigNumberish, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "configureEModeCategory", values: [BigNumberish, DataTypes.EModeCategoryStruct]): string;
    encodeFunctionData(functionFragment: "deposit", values: [AddressLike, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "dropReserve", values: [AddressLike]): string;
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
    encodeFunctionData(functionFragment: "flashLoanSimple", values: [AddressLike, AddressLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getConfiguration", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getEModeCategoryData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReserveAddressById", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReserveData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedIncome", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedVariableDebt", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getReservesList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserAccountData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getUserConfiguration", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getUserEMode", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initReserve", values: [AddressLike, AddressLike, AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "liquidationCall", values: [AddressLike, AddressLike, AddressLike, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "mintToTreasury", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "mintUnbacked", values: [AddressLike, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rebalanceStableBorrowRate", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "repay", values: [AddressLike, BigNumberish, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "repayWithATokens", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayWithPermit", values: [
        AddressLike,
        BigNumberish,
        BigNumberish,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "rescueTokens", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "resetIsolationModeTotalDebt", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setConfiguration", values: [AddressLike, DataTypes.ReserveConfigurationMapStruct]): string;
    encodeFunctionData(functionFragment: "setReserveInterestRateStrategyAddress", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setUserEMode", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setUserUseReserveAsCollateral", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "supply", values: [AddressLike, BigNumberish, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supplyWithPermit", values: [
        AddressLike,
        BigNumberish,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "swapBorrowRateMode", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateBridgeProtocolFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateFlashloanPremiums", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [AddressLike, BigNumberish, AddressLike]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BRIDGE_PROTOCOL_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FLASHLOAN_PREMIUM_TOTAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FLASHLOAN_PREMIUM_TO_PROTOCOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_NUMBER_RESERVES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "backUnbacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "configureEModeCategory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dropReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoanSimple", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEModeCategoryData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveAddressById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedIncome", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedVariableDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAccountData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserEMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintUnbacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalanceStableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayWithATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetIsolationModeTotalDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveInterestRateStrategyAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserEMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserUseReserveAsCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapBorrowRateMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridgeProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlashloanPremiums", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export declare namespace BackUnbackedEvent {
    type InputTuple = [
        reserve: AddressLike,
        backer: AddressLike,
        amount: BigNumberish,
        fee: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        backer: string,
        amount: bigint,
        fee: bigint
    ];
    interface OutputObject {
        reserve: string;
        backer: string;
        amount: bigint;
        fee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BorrowEvent {
    type InputTuple = [
        reserve: AddressLike,
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish,
        borrowRate: BigNumberish,
        referralCode: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        user: string,
        onBehalfOf: string,
        amount: bigint,
        interestRateMode: bigint,
        borrowRate: bigint,
        referralCode: bigint
    ];
    interface OutputObject {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: bigint;
        interestRateMode: bigint;
        borrowRate: bigint;
        referralCode: bigint;
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
        interestRateMode: BigNumberish,
        premium: BigNumberish,
        referralCode: BigNumberish
    ];
    type OutputTuple = [
        target: string,
        initiator: string,
        asset: string,
        amount: bigint,
        interestRateMode: bigint,
        premium: bigint,
        referralCode: bigint
    ];
    interface OutputObject {
        target: string;
        initiator: string;
        asset: string;
        amount: bigint;
        interestRateMode: bigint;
        premium: bigint;
        referralCode: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace IsolationModeTotalDebtUpdatedEvent {
    type InputTuple = [asset: AddressLike, totalDebt: BigNumberish];
    type OutputTuple = [asset: string, totalDebt: bigint];
    interface OutputObject {
        asset: string;
        totalDebt: bigint;
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
export declare namespace MintUnbackedEvent {
    type InputTuple = [
        reserve: AddressLike,
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        referralCode: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        user: string,
        onBehalfOf: string,
        amount: bigint,
        referralCode: bigint
    ];
    interface OutputObject {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: bigint;
        referralCode: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MintedToTreasuryEvent {
    type InputTuple = [reserve: AddressLike, amountMinted: BigNumberish];
    type OutputTuple = [reserve: string, amountMinted: bigint];
    interface OutputObject {
        reserve: string;
        amountMinted: bigint;
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
        amount: BigNumberish,
        useATokens: boolean
    ];
    type OutputTuple = [
        reserve: string,
        user: string,
        repayer: string,
        amount: bigint,
        useATokens: boolean
    ];
    interface OutputObject {
        reserve: string;
        user: string;
        repayer: string;
        amount: bigint;
        useATokens: boolean;
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
export declare namespace SupplyEvent {
    type InputTuple = [
        reserve: AddressLike,
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        referralCode: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        user: string,
        onBehalfOf: string,
        amount: bigint,
        referralCode: bigint
    ];
    interface OutputObject {
        reserve: string;
        user: string;
        onBehalfOf: string;
        amount: bigint;
        referralCode: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SwapBorrowRateModeEvent {
    type InputTuple = [
        reserve: AddressLike,
        user: AddressLike,
        interestRateMode: BigNumberish
    ];
    type OutputTuple = [
        reserve: string,
        user: string,
        interestRateMode: bigint
    ];
    interface OutputObject {
        reserve: string;
        user: string;
        interestRateMode: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UserEModeSetEvent {
    type InputTuple = [user: AddressLike, categoryId: BigNumberish];
    type OutputTuple = [user: string, categoryId: bigint];
    interface OutputObject {
        user: string;
        categoryId: bigint;
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
export interface IPool extends BaseContract {
    connect(runner?: ContractRunner | null): IPool;
    waitForDeployment(): Promise<this>;
    interface: IPoolInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ADDRESSES_PROVIDER: TypedContractMethod<[], [string], "view">;
    BRIDGE_PROTOCOL_FEE: TypedContractMethod<[], [bigint], "view">;
    FLASHLOAN_PREMIUM_TOTAL: TypedContractMethod<[], [bigint], "view">;
    FLASHLOAN_PREMIUM_TO_PROTOCOL: TypedContractMethod<[], [bigint], "view">;
    MAX_NUMBER_RESERVES: TypedContractMethod<[], [bigint], "view">;
    MAX_STABLE_RATE_BORROW_SIZE_PERCENT: TypedContractMethod<[
    ], [
        bigint
    ], "view">;
    backUnbacked: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        fee: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    borrow: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish,
        referralCode: BigNumberish,
        onBehalfOf: AddressLike
    ], [
        void
    ], "nonpayable">;
    configureEModeCategory: TypedContractMethod<[
        id: BigNumberish,
        config: DataTypes.EModeCategoryStruct
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
    dropReserve: TypedContractMethod<[asset: AddressLike], [void], "nonpayable">;
    finalizeTransfer: TypedContractMethod<[
        asset: AddressLike,
        from: AddressLike,
        to: AddressLike,
        amount: BigNumberish,
        balanceFromBefore: BigNumberish,
        balanceToBefore: BigNumberish
    ], [
        void
    ], "nonpayable">;
    flashLoan: TypedContractMethod<[
        receiverAddress: AddressLike,
        assets: AddressLike[],
        amounts: BigNumberish[],
        interestRateModes: BigNumberish[],
        onBehalfOf: AddressLike,
        params: BytesLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    flashLoanSimple: TypedContractMethod<[
        receiverAddress: AddressLike,
        asset: AddressLike,
        amount: BigNumberish,
        params: BytesLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getConfiguration: TypedContractMethod<[
        asset: AddressLike
    ], [
        DataTypes.ReserveConfigurationMapStructOutput
    ], "view">;
    getEModeCategoryData: TypedContractMethod<[
        id: BigNumberish
    ], [
        DataTypes.EModeCategoryStructOutput
    ], "view">;
    getReserveAddressById: TypedContractMethod<[
        id: BigNumberish
    ], [
        string
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
            totalCollateralBase: bigint;
            totalDebtBase: bigint;
            availableBorrowsBase: bigint;
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
    getUserEMode: TypedContractMethod<[user: AddressLike], [bigint], "view">;
    initReserve: TypedContractMethod<[
        asset: AddressLike,
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
    mintToTreasury: TypedContractMethod<[
        assets: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    mintUnbacked: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        onBehalfOf: AddressLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    rebalanceStableBorrowRate: TypedContractMethod<[
        asset: AddressLike,
        user: AddressLike
    ], [
        void
    ], "nonpayable">;
    repay: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish,
        onBehalfOf: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    repayWithATokens: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    repayWithPermit: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish,
        onBehalfOf: AddressLike,
        deadline: BigNumberish,
        permitV: BigNumberish,
        permitR: BytesLike,
        permitS: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    rescueTokens: TypedContractMethod<[
        token: AddressLike,
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    resetIsolationModeTotalDebt: TypedContractMethod<[
        asset: AddressLike
    ], [
        void
    ], "nonpayable">;
    setConfiguration: TypedContractMethod<[
        asset: AddressLike,
        configuration: DataTypes.ReserveConfigurationMapStruct
    ], [
        void
    ], "nonpayable">;
    setReserveInterestRateStrategyAddress: TypedContractMethod<[
        asset: AddressLike,
        rateStrategyAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    setUserEMode: TypedContractMethod<[
        categoryId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setUserUseReserveAsCollateral: TypedContractMethod<[
        asset: AddressLike,
        useAsCollateral: boolean
    ], [
        void
    ], "nonpayable">;
    supply: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        onBehalfOf: AddressLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    supplyWithPermit: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        onBehalfOf: AddressLike,
        referralCode: BigNumberish,
        deadline: BigNumberish,
        permitV: BigNumberish,
        permitR: BytesLike,
        permitS: BytesLike
    ], [
        void
    ], "nonpayable">;
    swapBorrowRateMode: TypedContractMethod<[
        asset: AddressLike,
        interestRateMode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateBridgeProtocolFee: TypedContractMethod<[
        bridgeProtocolFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    updateFlashloanPremiums: TypedContractMethod<[
        flashLoanPremiumTotal: BigNumberish,
        flashLoanPremiumToProtocol: BigNumberish
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
    getFunction(nameOrSignature: "ADDRESSES_PROVIDER"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "BRIDGE_PROTOCOL_FEE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "FLASHLOAN_PREMIUM_TOTAL"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "FLASHLOAN_PREMIUM_TO_PROTOCOL"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "MAX_NUMBER_RESERVES"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "backUnbacked"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        fee: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "borrow"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish,
        referralCode: BigNumberish,
        onBehalfOf: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "configureEModeCategory"): TypedContractMethod<[
        id: BigNumberish,
        config: DataTypes.EModeCategoryStruct
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
    getFunction(nameOrSignature: "dropReserve"): TypedContractMethod<[asset: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "finalizeTransfer"): TypedContractMethod<[
        asset: AddressLike,
        from: AddressLike,
        to: AddressLike,
        amount: BigNumberish,
        balanceFromBefore: BigNumberish,
        balanceToBefore: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "flashLoan"): TypedContractMethod<[
        receiverAddress: AddressLike,
        assets: AddressLike[],
        amounts: BigNumberish[],
        interestRateModes: BigNumberish[],
        onBehalfOf: AddressLike,
        params: BytesLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "flashLoanSimple"): TypedContractMethod<[
        receiverAddress: AddressLike,
        asset: AddressLike,
        amount: BigNumberish,
        params: BytesLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getConfiguration"): TypedContractMethod<[
        asset: AddressLike
    ], [
        DataTypes.ReserveConfigurationMapStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getEModeCategoryData"): TypedContractMethod<[
        id: BigNumberish
    ], [
        DataTypes.EModeCategoryStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getReserveAddressById"): TypedContractMethod<[id: BigNumberish], [string], "view">;
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
            totalCollateralBase: bigint;
            totalDebtBase: bigint;
            availableBorrowsBase: bigint;
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
    getFunction(nameOrSignature: "getUserEMode"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "initReserve"): TypedContractMethod<[
        asset: AddressLike,
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
    getFunction(nameOrSignature: "mintToTreasury"): TypedContractMethod<[assets: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "mintUnbacked"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        onBehalfOf: AddressLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "rebalanceStableBorrowRate"): TypedContractMethod<[
        asset: AddressLike,
        user: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "repay"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish,
        onBehalfOf: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "repayWithATokens"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "repayWithPermit"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        interestRateMode: BigNumberish,
        onBehalfOf: AddressLike,
        deadline: BigNumberish,
        permitV: BigNumberish,
        permitR: BytesLike,
        permitS: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "rescueTokens"): TypedContractMethod<[
        token: AddressLike,
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "resetIsolationModeTotalDebt"): TypedContractMethod<[asset: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setConfiguration"): TypedContractMethod<[
        asset: AddressLike,
        configuration: DataTypes.ReserveConfigurationMapStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setReserveInterestRateStrategyAddress"): TypedContractMethod<[
        asset: AddressLike,
        rateStrategyAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setUserEMode"): TypedContractMethod<[categoryId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setUserUseReserveAsCollateral"): TypedContractMethod<[
        asset: AddressLike,
        useAsCollateral: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supply"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        onBehalfOf: AddressLike,
        referralCode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supplyWithPermit"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        onBehalfOf: AddressLike,
        referralCode: BigNumberish,
        deadline: BigNumberish,
        permitV: BigNumberish,
        permitR: BytesLike,
        permitS: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "swapBorrowRateMode"): TypedContractMethod<[
        asset: AddressLike,
        interestRateMode: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateBridgeProtocolFee"): TypedContractMethod<[
        bridgeProtocolFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateFlashloanPremiums"): TypedContractMethod<[
        flashLoanPremiumTotal: BigNumberish,
        flashLoanPremiumToProtocol: BigNumberish
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
    getEvent(key: "BackUnbacked"): TypedContractEvent<BackUnbackedEvent.InputTuple, BackUnbackedEvent.OutputTuple, BackUnbackedEvent.OutputObject>;
    getEvent(key: "Borrow"): TypedContractEvent<BorrowEvent.InputTuple, BorrowEvent.OutputTuple, BorrowEvent.OutputObject>;
    getEvent(key: "FlashLoan"): TypedContractEvent<FlashLoanEvent.InputTuple, FlashLoanEvent.OutputTuple, FlashLoanEvent.OutputObject>;
    getEvent(key: "IsolationModeTotalDebtUpdated"): TypedContractEvent<IsolationModeTotalDebtUpdatedEvent.InputTuple, IsolationModeTotalDebtUpdatedEvent.OutputTuple, IsolationModeTotalDebtUpdatedEvent.OutputObject>;
    getEvent(key: "LiquidationCall"): TypedContractEvent<LiquidationCallEvent.InputTuple, LiquidationCallEvent.OutputTuple, LiquidationCallEvent.OutputObject>;
    getEvent(key: "MintUnbacked"): TypedContractEvent<MintUnbackedEvent.InputTuple, MintUnbackedEvent.OutputTuple, MintUnbackedEvent.OutputObject>;
    getEvent(key: "MintedToTreasury"): TypedContractEvent<MintedToTreasuryEvent.InputTuple, MintedToTreasuryEvent.OutputTuple, MintedToTreasuryEvent.OutputObject>;
    getEvent(key: "RebalanceStableBorrowRate"): TypedContractEvent<RebalanceStableBorrowRateEvent.InputTuple, RebalanceStableBorrowRateEvent.OutputTuple, RebalanceStableBorrowRateEvent.OutputObject>;
    getEvent(key: "Repay"): TypedContractEvent<RepayEvent.InputTuple, RepayEvent.OutputTuple, RepayEvent.OutputObject>;
    getEvent(key: "ReserveDataUpdated"): TypedContractEvent<ReserveDataUpdatedEvent.InputTuple, ReserveDataUpdatedEvent.OutputTuple, ReserveDataUpdatedEvent.OutputObject>;
    getEvent(key: "ReserveUsedAsCollateralDisabled"): TypedContractEvent<ReserveUsedAsCollateralDisabledEvent.InputTuple, ReserveUsedAsCollateralDisabledEvent.OutputTuple, ReserveUsedAsCollateralDisabledEvent.OutputObject>;
    getEvent(key: "ReserveUsedAsCollateralEnabled"): TypedContractEvent<ReserveUsedAsCollateralEnabledEvent.InputTuple, ReserveUsedAsCollateralEnabledEvent.OutputTuple, ReserveUsedAsCollateralEnabledEvent.OutputObject>;
    getEvent(key: "Supply"): TypedContractEvent<SupplyEvent.InputTuple, SupplyEvent.OutputTuple, SupplyEvent.OutputObject>;
    getEvent(key: "SwapBorrowRateMode"): TypedContractEvent<SwapBorrowRateModeEvent.InputTuple, SwapBorrowRateModeEvent.OutputTuple, SwapBorrowRateModeEvent.OutputObject>;
    getEvent(key: "UserEModeSet"): TypedContractEvent<UserEModeSetEvent.InputTuple, UserEModeSetEvent.OutputTuple, UserEModeSetEvent.OutputObject>;
    getEvent(key: "Withdraw"): TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    filters: {
        "BackUnbacked(address,address,uint256,uint256)": TypedContractEvent<BackUnbackedEvent.InputTuple, BackUnbackedEvent.OutputTuple, BackUnbackedEvent.OutputObject>;
        BackUnbacked: TypedContractEvent<BackUnbackedEvent.InputTuple, BackUnbackedEvent.OutputTuple, BackUnbackedEvent.OutputObject>;
        "Borrow(address,address,address,uint256,uint8,uint256,uint16)": TypedContractEvent<BorrowEvent.InputTuple, BorrowEvent.OutputTuple, BorrowEvent.OutputObject>;
        Borrow: TypedContractEvent<BorrowEvent.InputTuple, BorrowEvent.OutputTuple, BorrowEvent.OutputObject>;
        "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)": TypedContractEvent<FlashLoanEvent.InputTuple, FlashLoanEvent.OutputTuple, FlashLoanEvent.OutputObject>;
        FlashLoan: TypedContractEvent<FlashLoanEvent.InputTuple, FlashLoanEvent.OutputTuple, FlashLoanEvent.OutputObject>;
        "IsolationModeTotalDebtUpdated(address,uint256)": TypedContractEvent<IsolationModeTotalDebtUpdatedEvent.InputTuple, IsolationModeTotalDebtUpdatedEvent.OutputTuple, IsolationModeTotalDebtUpdatedEvent.OutputObject>;
        IsolationModeTotalDebtUpdated: TypedContractEvent<IsolationModeTotalDebtUpdatedEvent.InputTuple, IsolationModeTotalDebtUpdatedEvent.OutputTuple, IsolationModeTotalDebtUpdatedEvent.OutputObject>;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)": TypedContractEvent<LiquidationCallEvent.InputTuple, LiquidationCallEvent.OutputTuple, LiquidationCallEvent.OutputObject>;
        LiquidationCall: TypedContractEvent<LiquidationCallEvent.InputTuple, LiquidationCallEvent.OutputTuple, LiquidationCallEvent.OutputObject>;
        "MintUnbacked(address,address,address,uint256,uint16)": TypedContractEvent<MintUnbackedEvent.InputTuple, MintUnbackedEvent.OutputTuple, MintUnbackedEvent.OutputObject>;
        MintUnbacked: TypedContractEvent<MintUnbackedEvent.InputTuple, MintUnbackedEvent.OutputTuple, MintUnbackedEvent.OutputObject>;
        "MintedToTreasury(address,uint256)": TypedContractEvent<MintedToTreasuryEvent.InputTuple, MintedToTreasuryEvent.OutputTuple, MintedToTreasuryEvent.OutputObject>;
        MintedToTreasury: TypedContractEvent<MintedToTreasuryEvent.InputTuple, MintedToTreasuryEvent.OutputTuple, MintedToTreasuryEvent.OutputObject>;
        "RebalanceStableBorrowRate(address,address)": TypedContractEvent<RebalanceStableBorrowRateEvent.InputTuple, RebalanceStableBorrowRateEvent.OutputTuple, RebalanceStableBorrowRateEvent.OutputObject>;
        RebalanceStableBorrowRate: TypedContractEvent<RebalanceStableBorrowRateEvent.InputTuple, RebalanceStableBorrowRateEvent.OutputTuple, RebalanceStableBorrowRateEvent.OutputObject>;
        "Repay(address,address,address,uint256,bool)": TypedContractEvent<RepayEvent.InputTuple, RepayEvent.OutputTuple, RepayEvent.OutputObject>;
        Repay: TypedContractEvent<RepayEvent.InputTuple, RepayEvent.OutputTuple, RepayEvent.OutputObject>;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<ReserveDataUpdatedEvent.InputTuple, ReserveDataUpdatedEvent.OutputTuple, ReserveDataUpdatedEvent.OutputObject>;
        ReserveDataUpdated: TypedContractEvent<ReserveDataUpdatedEvent.InputTuple, ReserveDataUpdatedEvent.OutputTuple, ReserveDataUpdatedEvent.OutputObject>;
        "ReserveUsedAsCollateralDisabled(address,address)": TypedContractEvent<ReserveUsedAsCollateralDisabledEvent.InputTuple, ReserveUsedAsCollateralDisabledEvent.OutputTuple, ReserveUsedAsCollateralDisabledEvent.OutputObject>;
        ReserveUsedAsCollateralDisabled: TypedContractEvent<ReserveUsedAsCollateralDisabledEvent.InputTuple, ReserveUsedAsCollateralDisabledEvent.OutputTuple, ReserveUsedAsCollateralDisabledEvent.OutputObject>;
        "ReserveUsedAsCollateralEnabled(address,address)": TypedContractEvent<ReserveUsedAsCollateralEnabledEvent.InputTuple, ReserveUsedAsCollateralEnabledEvent.OutputTuple, ReserveUsedAsCollateralEnabledEvent.OutputObject>;
        ReserveUsedAsCollateralEnabled: TypedContractEvent<ReserveUsedAsCollateralEnabledEvent.InputTuple, ReserveUsedAsCollateralEnabledEvent.OutputTuple, ReserveUsedAsCollateralEnabledEvent.OutputObject>;
        "Supply(address,address,address,uint256,uint16)": TypedContractEvent<SupplyEvent.InputTuple, SupplyEvent.OutputTuple, SupplyEvent.OutputObject>;
        Supply: TypedContractEvent<SupplyEvent.InputTuple, SupplyEvent.OutputTuple, SupplyEvent.OutputObject>;
        "SwapBorrowRateMode(address,address,uint8)": TypedContractEvent<SwapBorrowRateModeEvent.InputTuple, SwapBorrowRateModeEvent.OutputTuple, SwapBorrowRateModeEvent.OutputObject>;
        SwapBorrowRateMode: TypedContractEvent<SwapBorrowRateModeEvent.InputTuple, SwapBorrowRateModeEvent.OutputTuple, SwapBorrowRateModeEvent.OutputObject>;
        "UserEModeSet(address,uint8)": TypedContractEvent<UserEModeSetEvent.InputTuple, UserEModeSetEvent.OutputTuple, UserEModeSetEvent.OutputObject>;
        UserEModeSet: TypedContractEvent<UserEModeSetEvent.InputTuple, UserEModeSetEvent.OutputTuple, UserEModeSetEvent.OutputObject>;
        "Withdraw(address,address,address,uint256)": TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
        Withdraw: TypedContractEvent<WithdrawEvent.InputTuple, WithdrawEvent.OutputTuple, WithdrawEvent.OutputObject>;
    };
}
