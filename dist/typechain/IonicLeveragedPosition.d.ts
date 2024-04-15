import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IonicLeveragedPositionInterface extends utils.Interface {
    functions: {
        "SUPPLY_DELTA_ERROR()": FunctionFragment;
        "SUPPLY_DELTA_NO_ERROR()": FunctionFragment;
        "adjustLeverageRatio(uint256)": FunctionFragment;
        "claimRewards()": FunctionFragment;
        "claimRewards(address)": FunctionFragment;
        "closePosition(address)": FunctionFragment;
        "closePosition()": FunctionFragment;
        "collateralAsset()": FunctionFragment;
        "collateralMarket()": FunctionFragment;
        "factory()": FunctionFragment;
        "fundPosition(address,uint256)": FunctionFragment;
        "getAccruedRewards()": FunctionFragment;
        "getBorrowRate(address)": FunctionFragment;
        "getCurrentLeverageRatio()": FunctionFragment;
        "getEquityAmount()": FunctionFragment;
        "getEquityValue()": FunctionFragment;
        "getMaxLeverageRatio()": FunctionFragment;
        "getMinLeverageRatio()": FunctionFragment;
        "getPositionBorrowAmount()": FunctionFragment;
        "getPositionSupplyAmount()": FunctionFragment;
        "getPrice(address)": FunctionFragment;
        "getSupplyAmountDelta(uint256)": FunctionFragment;
        "getSupplyRate(address)": FunctionFragment;
        "isPositionClosed()": FunctionFragment;
        "pool()": FunctionFragment;
        "positionOwner()": FunctionFragment;
        "receiveFlashLoan(address,uint256,uint256,bytes)": FunctionFragment;
        "seizeOnLiquidation(uint256)": FunctionFragment;
        "stableAsset()": FunctionFragment;
        "stableMarket()": FunctionFragment;
        "withdrawStableLeftovers(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "SUPPLY_DELTA_ERROR" | "SUPPLY_DELTA_NO_ERROR" | "adjustLeverageRatio" | "claimRewards()" | "claimRewards(address)" | "closePosition(address)" | "closePosition()" | "collateralAsset" | "collateralMarket" | "factory" | "fundPosition" | "getAccruedRewards" | "getBorrowRate" | "getCurrentLeverageRatio" | "getEquityAmount" | "getEquityValue" | "getMaxLeverageRatio" | "getMinLeverageRatio" | "getPositionBorrowAmount" | "getPositionSupplyAmount" | "getPrice" | "getSupplyAmountDelta" | "getSupplyRate" | "isPositionClosed" | "pool" | "positionOwner" | "receiveFlashLoan" | "seizeOnLiquidation" | "stableAsset" | "stableMarket" | "withdrawStableLeftovers"): FunctionFragment;
    encodeFunctionData(functionFragment: "SUPPLY_DELTA_ERROR", values?: undefined): string;
    encodeFunctionData(functionFragment: "SUPPLY_DELTA_NO_ERROR", values?: undefined): string;
    encodeFunctionData(functionFragment: "adjustLeverageRatio", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimRewards()", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimRewards(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "closePosition(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "closePosition()", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralMarket", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundPosition", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAccruedRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getCurrentLeverageRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEquityAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEquityValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMaxLeverageRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinLeverageRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionBorrowAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionSupplyAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getSupplyAmountDelta", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyRate", values: [string]): string;
    encodeFunctionData(functionFragment: "isPositionClosed", values?: undefined): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "seizeOnLiquidation", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stableAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableMarket", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawStableLeftovers", values: [string]): string;
    decodeFunctionResult(functionFragment: "SUPPLY_DELTA_ERROR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SUPPLY_DELTA_NO_ERROR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adjustLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEquityAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEquityValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionBorrowAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionSupplyAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyAmountDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPositionClosed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seizeOnLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStableLeftovers", data: BytesLike): Result;
    events: {
        "PositionClosed(address,uint256,uint256)": EventFragment;
        "PositionFunded(address,address,uint256,uint256,uint256)": EventFragment;
        "PositionRatioAdjusted(address,uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PositionClosed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionFunded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionRatioAdjusted"): EventFragment;
}
export interface PositionClosedEventObject {
    position: string;
    withdrawAmount: BigNumber;
    equityAmountBefore: BigNumber;
}
export type PositionClosedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PositionClosedEventObject>;
export type PositionClosedEventFilter = TypedEventFilter<PositionClosedEvent>;
export interface PositionFundedEventObject {
    position: string;
    fundingAsset: string;
    fundingAmount: BigNumber;
    totalCollateralAmountAfter: BigNumber;
    collateralAmountFunded: BigNumber;
}
export type PositionFundedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], PositionFundedEventObject>;
export type PositionFundedEventFilter = TypedEventFilter<PositionFundedEvent>;
export interface PositionRatioAdjustedEventObject {
    position: string;
    targetRatio: BigNumber;
    realizedRatio: BigNumber;
    ratioBefore: BigNumber;
    equityAmountBefore: BigNumber;
}
export type PositionRatioAdjustedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PositionRatioAdjustedEventObject>;
export type PositionRatioAdjustedEventFilter = TypedEventFilter<PositionRatioAdjustedEvent>;
export interface IonicLeveragedPosition extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IonicLeveragedPositionInterface;
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
        SUPPLY_DELTA_ERROR(overrides?: CallOverrides): Promise<[number]>;
        SUPPLY_DELTA_NO_ERROR(overrides?: CallOverrides): Promise<[number]>;
        adjustLeverageRatio(targetRatioMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "claimRewards()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "claimRewards(address)"(withdrawTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "closePosition(address)"(withdrawTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "closePosition()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        collateralAsset(overrides?: CallOverrides): Promise<[string]>;
        collateralMarket(overrides?: CallOverrides): Promise<[string]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        fundPosition(fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAccruedRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentLeverageRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        getEquityAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getEquityValue(overrides?: CallOverrides): Promise<[BigNumber] & {
            equityValue: BigNumber;
        }>;
        getMaxLeverageRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        getMinLeverageRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionBorrowAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionSupplyAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSupplyAmountDelta(targetRatio: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getSupplyRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        isPositionClosed(overrides?: CallOverrides): Promise<[boolean]>;
        pool(overrides?: CallOverrides): Promise<[string]>;
        positionOwner(overrides?: CallOverrides): Promise<[string]>;
        receiveFlashLoan(assetAddress: string, flashBorrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        seizeOnLiquidation(stablesToSeize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stableAsset(overrides?: CallOverrides): Promise<[string]>;
        stableMarket(overrides?: CallOverrides): Promise<[string]>;
        withdrawStableLeftovers(withdrawTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    SUPPLY_DELTA_ERROR(overrides?: CallOverrides): Promise<number>;
    SUPPLY_DELTA_NO_ERROR(overrides?: CallOverrides): Promise<number>;
    adjustLeverageRatio(targetRatioMantissa: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "claimRewards()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "claimRewards(address)"(withdrawTo: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "closePosition(address)"(withdrawTo: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "closePosition()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    collateralAsset(overrides?: CallOverrides): Promise<string>;
    collateralMarket(overrides?: CallOverrides): Promise<string>;
    factory(overrides?: CallOverrides): Promise<string>;
    fundPosition(fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAccruedRewards(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;
    getEquityAmount(overrides?: CallOverrides): Promise<BigNumber>;
    getEquityValue(overrides?: CallOverrides): Promise<BigNumber>;
    getMaxLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;
    getMinLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;
    getPositionBorrowAmount(overrides?: CallOverrides): Promise<BigNumber>;
    getPositionSupplyAmount(overrides?: CallOverrides): Promise<BigNumber>;
    getPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getSupplyAmountDelta(targetRatio: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getSupplyRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    isPositionClosed(overrides?: CallOverrides): Promise<boolean>;
    pool(overrides?: CallOverrides): Promise<string>;
    positionOwner(overrides?: CallOverrides): Promise<string>;
    receiveFlashLoan(assetAddress: string, flashBorrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    seizeOnLiquidation(stablesToSeize: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stableAsset(overrides?: CallOverrides): Promise<string>;
    stableMarket(overrides?: CallOverrides): Promise<string>;
    withdrawStableLeftovers(withdrawTo: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        SUPPLY_DELTA_ERROR(overrides?: CallOverrides): Promise<number>;
        SUPPLY_DELTA_NO_ERROR(overrides?: CallOverrides): Promise<number>;
        adjustLeverageRatio(targetRatioMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "claimRewards()"(overrides?: CallOverrides): Promise<void>;
        "claimRewards(address)"(withdrawTo: string, overrides?: CallOverrides): Promise<void>;
        "closePosition(address)"(withdrawTo: string, overrides?: CallOverrides): Promise<BigNumber>;
        "closePosition()"(overrides?: CallOverrides): Promise<BigNumber>;
        collateralAsset(overrides?: CallOverrides): Promise<string>;
        collateralMarket(overrides?: CallOverrides): Promise<string>;
        factory(overrides?: CallOverrides): Promise<string>;
        fundPosition(fundingAsset: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getAccruedRewards(overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            rewardTokens: string[];
            amounts: BigNumber[];
        }>;
        getBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;
        getEquityAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getEquityValue(overrides?: CallOverrides): Promise<BigNumber>;
        getMaxLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;
        getMinLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionBorrowAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionSupplyAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyAmountDelta(targetRatio: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getSupplyRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPositionClosed(overrides?: CallOverrides): Promise<boolean>;
        pool(overrides?: CallOverrides): Promise<string>;
        positionOwner(overrides?: CallOverrides): Promise<string>;
        receiveFlashLoan(assetAddress: string, flashBorrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        seizeOnLiquidation(stablesToSeize: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        stableAsset(overrides?: CallOverrides): Promise<string>;
        stableMarket(overrides?: CallOverrides): Promise<string>;
        withdrawStableLeftovers(withdrawTo: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "PositionClosed(address,uint256,uint256)"(position?: string | null, withdrawAmount?: null, equityAmountBefore?: null): PositionClosedEventFilter;
        PositionClosed(position?: string | null, withdrawAmount?: null, equityAmountBefore?: null): PositionClosedEventFilter;
        "PositionFunded(address,address,uint256,uint256,uint256)"(position?: string | null, fundingAsset?: string | null, fundingAmount?: null, totalCollateralAmountAfter?: null, collateralAmountFunded?: null): PositionFundedEventFilter;
        PositionFunded(position?: string | null, fundingAsset?: string | null, fundingAmount?: null, totalCollateralAmountAfter?: null, collateralAmountFunded?: null): PositionFundedEventFilter;
        "PositionRatioAdjusted(address,uint256,uint256,uint256,uint256)"(position?: string | null, targetRatio?: null, realizedRatio?: null, ratioBefore?: null, equityAmountBefore?: null): PositionRatioAdjustedEventFilter;
        PositionRatioAdjusted(position?: string | null, targetRatio?: null, realizedRatio?: null, ratioBefore?: null, equityAmountBefore?: null): PositionRatioAdjustedEventFilter;
    };
    estimateGas: {
        SUPPLY_DELTA_ERROR(overrides?: CallOverrides): Promise<BigNumber>;
        SUPPLY_DELTA_NO_ERROR(overrides?: CallOverrides): Promise<BigNumber>;
        adjustLeverageRatio(targetRatioMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "claimRewards()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "claimRewards(address)"(withdrawTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "closePosition(address)"(withdrawTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "closePosition()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        collateralAsset(overrides?: CallOverrides): Promise<BigNumber>;
        collateralMarket(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        fundPosition(fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAccruedRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;
        getEquityAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getEquityValue(overrides?: CallOverrides): Promise<BigNumber>;
        getMaxLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;
        getMinLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionBorrowAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionSupplyAmount(overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyAmountDelta(targetRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPositionClosed(overrides?: CallOverrides): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<BigNumber>;
        positionOwner(overrides?: CallOverrides): Promise<BigNumber>;
        receiveFlashLoan(assetAddress: string, flashBorrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        seizeOnLiquidation(stablesToSeize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stableAsset(overrides?: CallOverrides): Promise<BigNumber>;
        stableMarket(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawStableLeftovers(withdrawTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        SUPPLY_DELTA_ERROR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SUPPLY_DELTA_NO_ERROR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        adjustLeverageRatio(targetRatioMantissa: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "claimRewards()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "claimRewards(address)"(withdrawTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "closePosition(address)"(withdrawTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "closePosition()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        collateralAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundPosition(fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAccruedRewards(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentLeverageRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEquityAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEquityValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxLeverageRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinLeverageRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionBorrowAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionSupplyAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyAmountDelta(targetRatio: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPositionClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveFlashLoan(assetAddress: string, flashBorrowedAmount: BigNumberish, premium: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        seizeOnLiquidation(stablesToSeize: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stableAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stableMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawStableLeftovers(withdrawTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
