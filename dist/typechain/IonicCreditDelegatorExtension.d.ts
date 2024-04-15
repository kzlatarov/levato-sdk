import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IonicCreditDelegatorExtensionInterface extends utils.Interface {
    functions: {
        "_getExtensionFunctions()": FunctionFragment;
        "_repayForPosition(address,address,uint256)": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "borrowAllowance(address,address)": FunctionFragment;
        "borrowAsPosition(address,uint256)": FunctionFragment;
        "borrowBalance(address,address)": FunctionFragment;
        "callLiquidation(address)": FunctionFragment;
        "callPartialLiquidation(address,uint256)": FunctionFragment;
        "changeBorrowAllowance(uint256,uint256,address,address)": FunctionFragment;
        "defaultRateModel()": FunctionFragment;
        "delegatedDebtAssetData(address)": FunctionFragment;
        "depositLevatoFunds(address)": FunctionFragment;
        "factory()": FunctionFragment;
        "getAccruedToTreasury(address)": FunctionFragment;
        "getAssetBorrowRate(address)": FunctionFragment;
        "getAssetPoolLtv(address)": FunctionFragment;
        "getAssetPrice(address)": FunctionFragment;
        "getBorrowingPowerUtilization()": FunctionFragment;
        "getLevatoCurrentBorrowRate(address)": FunctionFragment;
        "getLiquidationThreshold(address,uint256)": FunctionFragment;
        "getPositionAvailableBorrows(address,address)": FunctionFragment;
        "getPositionDebt(address)": FunctionFragment;
        "getPositionLiquidationThreshold(address)": FunctionFragment;
        "getTotalAvailableBorrows(address)": FunctionFragment;
        "getUserBorrowAllowance(address,address)": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "initializeReserve(address,address)": FunctionFragment;
        "ionicPool()": FunctionFragment;
        "isPoolSupportedAsset(address)": FunctionFragment;
        "isPositionLiquidateable(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOwner()": FunctionFragment;
        "positionBorrowIndex(address,address)": FunctionFragment;
        "positionBorrowIndexLastUpdate(address,address)": FunctionFragment;
        "positionScaledATokens(address,address)": FunctionFragment;
        "reinitialize(address,address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "repayAsPosition(address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_getExtensionFunctions" | "_repayForPosition" | "acceptOwnership" | "borrowAllowance" | "borrowAsPosition" | "borrowBalance" | "callLiquidation" | "callPartialLiquidation" | "changeBorrowAllowance" | "defaultRateModel" | "delegatedDebtAssetData" | "depositLevatoFunds" | "factory" | "getAccruedToTreasury" | "getAssetBorrowRate" | "getAssetPoolLtv" | "getAssetPrice" | "getBorrowingPowerUtilization" | "getLevatoCurrentBorrowRate" | "getLiquidationThreshold" | "getPositionAvailableBorrows" | "getPositionDebt" | "getPositionLiquidationThreshold" | "getTotalAvailableBorrows" | "getUserBorrowAllowance" | "initialize" | "initializeReserve" | "ionicPool" | "isPoolSupportedAsset" | "isPositionLiquidateable" | "owner" | "pendingOwner" | "positionBorrowIndex" | "positionBorrowIndexLastUpdate" | "positionScaledATokens" | "reinitialize" | "renounceOwnership" | "repayAsPosition" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "_getExtensionFunctions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_repayForPosition", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "borrowAsPosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowBalance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "callLiquidation", values: [string]): string;
    encodeFunctionData(functionFragment: "callPartialLiquidation", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeBorrowAllowance", values: [BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "defaultRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegatedDebtAssetData", values: [string]): string;
    encodeFunctionData(functionFragment: "depositLevatoFunds", values: [string]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccruedToTreasury", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPoolLtv", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getBorrowingPowerUtilization", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLevatoCurrentBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionAvailableBorrows", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getPositionDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionLiquidationThreshold", values: [string]): string;
    encodeFunctionData(functionFragment: "getTotalAvailableBorrows", values: [string]): string;
    encodeFunctionData(functionFragment: "getUserBorrowAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "initializeReserve", values: [string, string]): string;
    encodeFunctionData(functionFragment: "ionicPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPoolSupportedAsset", values: [string]): string;
    encodeFunctionData(functionFragment: "isPositionLiquidateable", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionBorrowIndex", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positionBorrowIndexLastUpdate", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positionScaledATokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "repayAsPosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "_getExtensionFunctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_repayForPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAsPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callPartialLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeBorrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedDebtAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositLevatoFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPoolLtv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPowerUtilization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLevatoCurrentBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionAvailableBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalAvailableBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserBorrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolSupportedAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPositionLiquidateable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndexLastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionScaledATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayAsPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "BorrowAsPosition(address,address,uint256,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "Liquidation(address,address,uint256,uint256,uint256)": EventFragment;
        "OwnershipTransferStarted(address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RepayAsPosition(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BorrowAsPosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RepayAsPosition"): EventFragment;
}
export interface BorrowAsPositionEventObject {
    position: string;
    asset: string;
    borrowAmount: BigNumber;
    scaledATokensMinted: BigNumber;
}
export type BorrowAsPositionEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BorrowAsPositionEventObject>;
export type BorrowAsPositionEventFilter = TypedEventFilter<BorrowAsPositionEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface LiquidationEventObject {
    liquidator: string;
    position: string;
    debtToRepay: BigNumber;
    actualSeizedStableAmount: BigNumber;
    collateralSeized: BigNumber;
}
export type LiquidationEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], LiquidationEventObject>;
export type LiquidationEventFilter = TypedEventFilter<LiquidationEvent>;
export interface OwnershipTransferStartedEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<[
    string,
    string
], OwnershipTransferStartedEventObject>;
export type OwnershipTransferStartedEventFilter = TypedEventFilter<OwnershipTransferStartedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RepayAsPositionEventObject {
    position: string;
    asset: string;
    borrowAmount: BigNumber;
    scaledATokensBurnt: BigNumber;
}
export type RepayAsPositionEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], RepayAsPositionEventObject>;
export type RepayAsPositionEventFilter = TypedEventFilter<RepayAsPositionEvent>;
export interface IonicCreditDelegatorExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IonicCreditDelegatorExtensionInterface;
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
        _getExtensionFunctions(overrides?: CallOverrides): Promise<[string[]]>;
        _repayForPosition(position: string, asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        callLiquidation(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        defaultRateModel(overrides?: CallOverrides): Promise<[string]>;
        delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            string,
            string,
            string,
            BigNumber,
            BigNumber
        ] & {
            levatoCurrentBorrowRate: BigNumber;
            borrowIndex: BigNumber;
            lastTotalDebt: BigNumber;
            lastUpdateTimestamp: number;
            lpToken: string;
            debtToken: string;
            irm: string;
            accruedToTreasury: BigNumber;
            reserveFactor: BigNumber;
        }>;
        depositLevatoFunds(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            ltv: BigNumber;
        }>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            levatoCurrentBorrowRate: BigNumber;
        }>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionAvailableBorrows(positionAddress: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, string]>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_ionPool: string, _factory: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ionicPool(overrides?: CallOverrides): Promise<[string]>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<[boolean]>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOwner(overrides?: CallOverrides): Promise<[string]>;
        positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[number]>;
        positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        reinitialize(_ionPool: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
    _repayForPosition(position: string, asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    acceptOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    callLiquidation(position: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    defaultRateModel(overrides?: CallOverrides): Promise<string>;
    delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        levatoCurrentBorrowRate: BigNumber;
        borrowIndex: BigNumber;
        lastTotalDebt: BigNumber;
        lastUpdateTimestamp: number;
        lpToken: string;
        debtToken: string;
        irm: string;
        accruedToTreasury: BigNumber;
        reserveFactor: BigNumber;
    }>;
    depositLevatoFunds(asset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<BigNumber>;
    getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionAvailableBorrows(positionAddress: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionDebt(position: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, string]>;
    getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
    getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_ionPool: string, _factory: string, _irm: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ionicPool(overrides?: CallOverrides): Promise<string>;
    isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<boolean>;
    isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOwner(overrides?: CallOverrides): Promise<string>;
    positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<number>;
    positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    reinitialize(_ionPool: string, _irm: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _getExtensionFunctions(overrides?: CallOverrides): Promise<string[]>;
        _repayForPosition(position: string, asset: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        callLiquidation(position: string, overrides?: CallOverrides): Promise<void>;
        callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        defaultRateModel(overrides?: CallOverrides): Promise<string>;
        delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            string,
            string,
            string,
            BigNumber,
            BigNumber
        ] & {
            levatoCurrentBorrowRate: BigNumber;
            borrowIndex: BigNumber;
            lastTotalDebt: BigNumber;
            lastUpdateTimestamp: number;
            lpToken: string;
            debtToken: string;
            irm: string;
            accruedToTreasury: BigNumber;
            reserveFactor: BigNumber;
        }>;
        depositLevatoFunds(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionAvailableBorrows(positionAddress: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, string]>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_ionPool: string, _factory: string, _irm: string, overrides?: CallOverrides): Promise<void>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: CallOverrides): Promise<void>;
        ionicPool(overrides?: CallOverrides): Promise<string>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<boolean>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOwner(overrides?: CallOverrides): Promise<string>;
        positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<number>;
        positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        reinitialize(_ionPool: string, _irm: string, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BorrowAsPosition(address,address,uint256,uint256)"(position?: string | null, asset?: string | null, borrowAmount?: null, scaledATokensMinted?: null): BorrowAsPositionEventFilter;
        BorrowAsPosition(position?: string | null, asset?: string | null, borrowAmount?: null, scaledATokensMinted?: null): BorrowAsPositionEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "Liquidation(address,address,uint256,uint256,uint256)"(liquidator?: string | null, position?: string | null, debtToRepay?: null, actualSeizedStableAmount?: null, collateralSeized?: null): LiquidationEventFilter;
        Liquidation(liquidator?: string | null, position?: string | null, debtToRepay?: null, actualSeizedStableAmount?: null, collateralSeized?: null): LiquidationEventFilter;
        "OwnershipTransferStarted(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        OwnershipTransferStarted(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferStartedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "RepayAsPosition(address,address,uint256,uint256)"(position?: string | null, asset?: string | null, borrowAmount?: null, scaledATokensBurnt?: null): RepayAsPositionEventFilter;
        RepayAsPosition(position?: string | null, asset?: string | null, borrowAmount?: null, scaledATokensBurnt?: null): RepayAsPositionEventFilter;
    };
    estimateGas: {
        _getExtensionFunctions(overrides?: CallOverrides): Promise<BigNumber>;
        _repayForPosition(position: string, asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        callLiquidation(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        defaultRateModel(overrides?: CallOverrides): Promise<BigNumber>;
        delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        depositLevatoFunds(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionAvailableBorrows(positionAddress: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_ionPool: string, _factory: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ionicPool(overrides?: CallOverrides): Promise<BigNumber>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        reinitialize(_ionPool: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _getExtensionFunctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _repayForPosition(position: string, asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowAllowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowBalance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callLiquidation(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        defaultRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegatedDebtAssetData(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositLevatoFunds(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionAvailableBorrows(positionAddress: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_ionPool: string, _factory: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ionicPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionBorrowIndex(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionBorrowIndexLastUpdate(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionScaledATokens(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reinitialize(_ionPool: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
