import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IAaveCreditDelegatorExtensionInterface extends utils.Interface {
    functions: {
        "borrowAsPosition(address,uint256)": FunctionFragment;
        "callLiquidation(address)": FunctionFragment;
        "callPartialLiquidation(address,uint256)": FunctionFragment;
        "changeBorrowAllowance(uint256,uint256,address,address)": FunctionFragment;
        "depositLevatoFunds(address)": FunctionFragment;
        "getAavePool()": FunctionFragment;
        "getAccruedToTreasury(address)": FunctionFragment;
        "getAssetBorrowRate(address)": FunctionFragment;
        "getAssetPoolLtv(address)": FunctionFragment;
        "getAssetPrice(address)": FunctionFragment;
        "getBorrowingPowerUtilization()": FunctionFragment;
        "getDelegatedPositions()": FunctionFragment;
        "getLevatoCurrentBorrowRate(address)": FunctionFragment;
        "getLiquidationThreshold(address,uint256)": FunctionFragment;
        "getPositionDebt(address)": FunctionFragment;
        "getPositionLiquidationThreshold(address)": FunctionFragment;
        "getPositionScaledATokens(address)": FunctionFragment;
        "getTotalAvailableBorrows(address)": FunctionFragment;
        "getUserBorrowAllowance(address,address)": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "initializeReserve(address,address)": FunctionFragment;
        "isDelegatedPosition(address)": FunctionFragment;
        "isPoolSupportedAsset(address)": FunctionFragment;
        "isPositionLiquidateable(address)": FunctionFragment;
        "registerDelegatedPosition(address)": FunctionFragment;
        "reinitialize(address,address,address)": FunctionFragment;
        "repayAsPosition(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "borrowAsPosition" | "callLiquidation" | "callPartialLiquidation" | "changeBorrowAllowance" | "depositLevatoFunds" | "getAavePool" | "getAccruedToTreasury" | "getAssetBorrowRate" | "getAssetPoolLtv" | "getAssetPrice" | "getBorrowingPowerUtilization" | "getDelegatedPositions" | "getLevatoCurrentBorrowRate" | "getLiquidationThreshold" | "getPositionDebt" | "getPositionLiquidationThreshold" | "getPositionScaledATokens" | "getTotalAvailableBorrows" | "getUserBorrowAllowance" | "initialize" | "initializeReserve" | "isDelegatedPosition" | "isPoolSupportedAsset" | "isPositionLiquidateable" | "registerDelegatedPosition" | "reinitialize" | "repayAsPosition"): FunctionFragment;
    encodeFunctionData(functionFragment: "borrowAsPosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "callLiquidation", values: [string]): string;
    encodeFunctionData(functionFragment: "callPartialLiquidation", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeBorrowAllowance", values: [BigNumberish, BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "depositLevatoFunds", values: [string]): string;
    encodeFunctionData(functionFragment: "getAavePool", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccruedToTreasury", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPoolLtv", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getBorrowingPowerUtilization", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDelegatedPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLevatoCurrentBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionDebt", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionLiquidationThreshold", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionScaledATokens", values: [string]): string;
    encodeFunctionData(functionFragment: "getTotalAvailableBorrows", values: [string]): string;
    encodeFunctionData(functionFragment: "getUserBorrowAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "initializeReserve", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isDelegatedPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "isPoolSupportedAsset", values: [string]): string;
    encodeFunctionData(functionFragment: "isPositionLiquidateable", values: [string]): string;
    encodeFunctionData(functionFragment: "registerDelegatedPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "repayAsPosition", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "borrowAsPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callPartialLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeBorrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositLevatoFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAavePool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPoolLtv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowingPowerUtilization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDelegatedPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLevatoCurrentBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionScaledATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalAvailableBorrows", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserBorrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPoolSupportedAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPositionLiquidateable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
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
export interface IAaveCreditDelegatorExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAaveCreditDelegatorExtensionInterface;
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
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        callLiquidation(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositLevatoFunds(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAavePool(overrides?: CallOverrides): Promise<[string]>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<[BigNumber]>;
        getDelegatedPositions(overrides?: CallOverrides): Promise<[string[]]>;
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
        getPositionScaledATokens(position: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            availableBorrowsETH: BigNumber;
        }>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isDelegatedPosition(position: string, overrides?: CallOverrides): Promise<[boolean]>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<[boolean]>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<[boolean]>;
        registerDelegatedPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        reinitialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callLiquidation(position: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositLevatoFunds(asset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAavePool(overrides?: CallOverrides): Promise<string>;
    getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<BigNumber>;
    getDelegatedPositions(overrides?: CallOverrides): Promise<string[]>;
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
    getPositionScaledATokens(position: string, overrides?: CallOverrides): Promise<BigNumber>;
    getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isDelegatedPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
    isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<boolean>;
    isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<boolean>;
    registerDelegatedPosition(position: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    reinitialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        callLiquidation(position: string, overrides?: CallOverrides): Promise<void>;
        callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        depositLevatoFunds(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAavePool(overrides?: CallOverrides): Promise<string>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        getDelegatedPositions(overrides?: CallOverrides): Promise<string[]>;
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
        getPositionScaledATokens(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: CallOverrides): Promise<void>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: CallOverrides): Promise<void>;
        isDelegatedPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<boolean>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<boolean>;
        registerDelegatedPosition(position: string, overrides?: CallOverrides): Promise<void>;
        reinitialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: CallOverrides): Promise<void>;
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
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        callLiquidation(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositLevatoFunds(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAavePool(overrides?: CallOverrides): Promise<BigNumber>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<BigNumber>;
        getDelegatedPositions(overrides?: CallOverrides): Promise<BigNumber>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionScaledATokens(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isDelegatedPosition(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        registerDelegatedPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        reinitialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        borrowAsPosition(asset: string, borrowAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        callLiquidation(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        callPartialLiquidation(position: string, debtToRepay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        changeBorrowAllowance(fromAllowance: BigNumberish, toAllowance: BigNumberish, user: string, asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositLevatoFunds(asset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAavePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccruedToTreasury(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPoolLtv(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowingPowerUtilization(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDelegatedPositions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLevatoCurrentBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationThreshold(collateralAsset: string, delegatedDebtValue: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionDebt(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionScaledATokens(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalAvailableBorrows(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserBorrowAllowance(user: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        initializeReserve(_asset: string, _lpToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isDelegatedPosition(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPoolSupportedAsset(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPositionLiquidateable(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerDelegatedPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        reinitialize(_addressesProvider: string, _factory: string, _irm: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayAsPosition(asset: string, repayAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
