import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export declare namespace CreditDelegatorStorageBase {
    type DelegatedDebtAssetDataStruct = {
        levatoCurrentBorrowRate: BigNumberish;
        borrowIndex: BigNumberish;
        lastTotalDebt: BigNumberish;
        lastUpdateTimestamp: BigNumberish;
        lpToken: string;
        debtToken: string;
        irm: string;
        accruedToTreasury: BigNumberish;
        reserveFactor: BigNumberish;
    };
    type DelegatedDebtAssetDataStructOutput = [
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
    };
}
export interface ICreditDelegatorInterface extends utils.Interface {
    functions: {
        "_listExtensions()": FunctionFragment;
        "_registerExtension(address,address)": FunctionFragment;
        "_replaceExtensions(address[])": FunctionFragment;
        "borrowAllowance(address,address)": FunctionFragment;
        "borrowAsPosition(address,uint256)": FunctionFragment;
        "borrowBalance(address,address)": FunctionFragment;
        "callLiquidation(address)": FunctionFragment;
        "callPartialLiquidation(address,uint256)": FunctionFragment;
        "changeBorrowAllowance(uint256,uint256,address,address)": FunctionFragment;
        "defaultRateModel()": FunctionFragment;
        "delegatedDebtAssetData(address)": FunctionFragment;
        "depositLevatoFunds(address)": FunctionFragment;
        "getAccruedToTreasury(address)": FunctionFragment;
        "getAssetBorrowRate(address)": FunctionFragment;
        "getAssetPoolLtv(address)": FunctionFragment;
        "getAssetPrice(address)": FunctionFragment;
        "getBorrowingPowerUtilization()": FunctionFragment;
        "getLevatoCurrentBorrowRate(address)": FunctionFragment;
        "getLiquidationThreshold(address,uint256)": FunctionFragment;
        "getPositionDebt(address)": FunctionFragment;
        "getPositionLiquidationThreshold(address)": FunctionFragment;
        "getTotalAvailableBorrows(address)": FunctionFragment;
        "getUserBorrowAllowance(address,address)": FunctionFragment;
        "initializeReserve(address,address)": FunctionFragment;
        "isPoolSupportedAsset(address)": FunctionFragment;
        "isPositionLiquidateable(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "positionBorrowIndex(address,address)": FunctionFragment;
        "positionBorrowIndexLastUpdate(address,address)": FunctionFragment;
        "positionScaledATokens(address,address)": FunctionFragment;
        "repayAsPosition(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_listExtensions" | "_registerExtension" | "_replaceExtensions" | "borrowAllowance" | "borrowAsPosition" | "borrowBalance" | "callLiquidation" | "callPartialLiquidation" | "changeBorrowAllowance" | "defaultRateModel" | "delegatedDebtAssetData" | "depositLevatoFunds" | "getAccruedToTreasury" | "getAssetBorrowRate" | "getAssetPoolLtv" | "getAssetPrice" | "getBorrowingPowerUtilization" | "getLevatoCurrentBorrowRate" | "getLiquidationThreshold" | "getPositionDebt" | "getPositionLiquidationThreshold" | "getTotalAvailableBorrows" | "getUserBorrowAllowance" | "initializeReserve" | "isPoolSupportedAsset" | "isPositionLiquidateable" | "owner" | "positionBorrowIndex" | "positionBorrowIndexLastUpdate" | "positionScaledATokens" | "repayAsPosition"): FunctionFragment;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [string, string]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [string[]]): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "borrowAsPosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowBalance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "callLiquidation", values: [string]): string;
    encodeFunctionData(functionFragment: "callPartialLiquidation", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeBorrowAllowance", values: [BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "defaultRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegatedDebtAssetData", values: [string]): string;
    encodeFunctionData(functionFragment: "depositLevatoFunds", values: [string]): string;
    encodeFunctionData(functionFragment: "getAccruedToTreasury", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPoolLtv", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getBorrowingPowerUtilization", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLevatoCurrentBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionLiquidationThreshold", values: [string]): string;
    encodeFunctionData(functionFragment: "getTotalAvailableBorrows", values: [string]): string;
    encodeFunctionData(functionFragment: "getUserBorrowAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initializeReserve", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isPoolSupportedAsset", values: [string]): string;
    encodeFunctionData(functionFragment: "isPositionLiquidateable", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionBorrowIndex", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positionBorrowIndexLastUpdate", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positionScaledATokens", values: [string, string]): string;
    encodeFunctionData(functionFragment: "repayAsPosition", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAsPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callPartialLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeBorrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedDebtAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositLevatoFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPoolLtv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPowerUtilization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLevatoCurrentBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalAvailableBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserBorrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolSupportedAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPositionLiquidateable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndexLastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionScaledATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayAsPosition", data: BytesLike): Result;
    events: {
        "BorrowAsPosition(address,address,uint256,uint256)": EventFragment;
        "Liquidation(address,address,uint256,uint256,uint256)": EventFragment;
        "RepayAsPosition(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BorrowAsPosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidation"): EventFragment;
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
export interface ICreditDelegator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICreditDelegatorInterface;
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
        _listExtensions(overrides?: CallOverrides): Promise<[string[]]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
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
        delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<[CreditDelegatorStorageBase.DelegatedDebtAssetDataStructOutput]>;
        depositLevatoFunds(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<[BigNumber]>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string
        ] & {
            internalDebt: BigNumber;
            externalDebt: BigNumber;
            borrowedAsset: string;
        }>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            availableBorrowsETH: BigNumber;
        }>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<[boolean]>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<[number]>;
        positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _listExtensions(overrides?: CallOverrides): Promise<string[]>;
    _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _replaceExtensions(extensions: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
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
    delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<CreditDelegatorStorageBase.DelegatedDebtAssetDataStructOutput>;
    depositLevatoFunds(asset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<BigNumber>;
    getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionDebt(position: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        string
    ] & {
        internalDebt: BigNumber;
        externalDebt: BigNumber;
        borrowedAsset: string;
    }>;
    getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
    getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<boolean>;
    isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<number>;
    positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _listExtensions(overrides?: CallOverrides): Promise<string[]>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: CallOverrides): Promise<void>;
        _replaceExtensions(extensions: string[], overrides?: CallOverrides): Promise<void>;
        borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        callLiquidation(position: string, overrides?: CallOverrides): Promise<void>;
        callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        defaultRateModel(overrides?: CallOverrides): Promise<string>;
        delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<CreditDelegatorStorageBase.DelegatedDebtAssetDataStructOutput>;
        depositLevatoFunds(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string
        ] & {
            internalDebt: BigNumber;
            externalDebt: BigNumber;
            borrowedAsset: string;
        }>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: CallOverrides): Promise<void>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<boolean>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<number>;
        positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BorrowAsPosition(address,address,uint256,uint256)"(position?: string | null, asset?: string | null, borrowAmount?: null, scaledATokensMinted?: null): BorrowAsPositionEventFilter;
        BorrowAsPosition(position?: string | null, asset?: string | null, borrowAmount?: null, scaledATokensMinted?: null): BorrowAsPositionEventFilter;
        "Liquidation(address,address,uint256,uint256,uint256)"(liquidator?: string | null, position?: string | null, debtToRepay?: null, actualSeizedStableAmount?: null, collateralSeized?: null): LiquidationEventFilter;
        Liquidation(liquidator?: string | null, position?: string | null, debtToRepay?: null, actualSeizedStableAmount?: null, collateralSeized?: null): LiquidationEventFilter;
        "RepayAsPosition(address,address,uint256,uint256)"(position?: string | null, asset?: string | null, borrowAmount?: null, scaledATokensBurnt?: null): RepayAsPositionEventFilter;
        RepayAsPosition(position?: string | null, asset?: string | null, borrowAmount?: null, scaledATokensBurnt?: null): RepayAsPositionEventFilter;
    };
    estimateGas: {
        _listExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
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
        delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        depositLevatoFunds(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _listExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _registerExtension(extensionToAdd: string, extensionToReplace: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _replaceExtensions(extensions: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositLevatoFunds(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
