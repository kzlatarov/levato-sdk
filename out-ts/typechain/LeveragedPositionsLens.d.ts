import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace LeveragedPositionsLens {
    type PositionInfoStruct = {
        positionAddress: string;
        closed: boolean;
        collateralAssetPrice: BigNumberish;
        borrowedAssetPrice: BigNumberish;
        positionSupplyAmount: BigNumberish;
        positionValue: BigNumberish;
        debtAmount: BigNumberish;
        debtValue: BigNumberish;
        equityAmount: BigNumberish;
        equityValue: BigNumberish;
        netApy: BigNumberish;
        rewardsApy: BigNumberish;
        debtRatio: BigNumberish;
        collateralLiquidationThreshold: BigNumberish;
        borrowedLiquidationThreshold: BigNumberish;
        collateralLiquidationPrice: BigNumberish;
        borrowedLiquidationPrice: BigNumberish;
        leverageRatio: BigNumberish;
        maxLeverageRatio: BigNumberish;
        positionCollateralAllowance: BigNumberish;
        healthRatio: BigNumberish;
        collateralAsset: string;
        stableAsset: string;
        isShort: boolean;
        collateralPriceOnCreation: BigNumberish;
        borrowedPriceOnCreation: BigNumberish;
    };
    type PositionInfoStructOutput = [
        string,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        positionAddress: string;
        closed: boolean;
        collateralAssetPrice: BigNumber;
        borrowedAssetPrice: BigNumber;
        positionSupplyAmount: BigNumber;
        positionValue: BigNumber;
        debtAmount: BigNumber;
        debtValue: BigNumber;
        equityAmount: BigNumber;
        equityValue: BigNumber;
        netApy: BigNumber;
        rewardsApy: BigNumber;
        debtRatio: BigNumber;
        collateralLiquidationThreshold: BigNumber;
        borrowedLiquidationThreshold: BigNumber;
        collateralLiquidationPrice: BigNumber;
        borrowedLiquidationPrice: BigNumber;
        leverageRatio: BigNumber;
        maxLeverageRatio: BigNumber;
        positionCollateralAllowance: BigNumber;
        healthRatio: BigNumber;
        collateralAsset: string;
        stableAsset: string;
        isShort: boolean;
        collateralPriceOnCreation: BigNumber;
        borrowedPriceOnCreation: BigNumber;
    };
}
export interface LeveragedPositionsLensInterface extends utils.Interface {
    functions: {
        "factory()": FunctionFragment;
        "getAssetBorrowRate(address)": FunctionFragment;
        "getAssetPrice(address)": FunctionFragment;
        "getAssetsBorrowRates(address[])": FunctionFragment;
        "getErc20Balances(address,address[])": FunctionFragment;
        "getErc20BalancesAndAllowances(address,address,address[])": FunctionFragment;
        "getLiquidationThreshold(address,uint256,address,uint256)": FunctionFragment;
        "getMaxLeverageRatio(address,uint256,address)": FunctionFragment;
        "getNetAPY(uint256,uint256,address,address,uint256)": FunctionFragment;
        "getPositionInfo(address,uint256)": FunctionFragment;
        "getPositionLiquidationThreshold(address)": FunctionFragment;
        "getPositionNetAPY(uint256,address)": FunctionFragment;
        "getPositionRewardsSpeedPerSecond(address)": FunctionFragment;
        "getPositionsInfo(address[],uint256[])": FunctionFragment;
        "getRewardsAprForPosition(address)": FunctionFragment;
        "getStablecoinAssets()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "isAssetStablecoin(address)": FunctionFragment;
        "stablecoins(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "factory" | "getAssetBorrowRate" | "getAssetPrice" | "getAssetsBorrowRates" | "getErc20Balances" | "getErc20BalancesAndAllowances" | "getLiquidationThreshold" | "getMaxLeverageRatio" | "getNetAPY" | "getPositionInfo" | "getPositionLiquidationThreshold" | "getPositionNetAPY" | "getPositionRewardsSpeedPerSecond" | "getPositionsInfo" | "getRewardsAprForPosition" | "getStablecoinAssets" | "initialize" | "isAssetStablecoin" | "stablecoins"): FunctionFragment;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetsBorrowRates", values: [string[]]): string;
    encodeFunctionData(functionFragment: "getErc20Balances", values: [string, string[]]): string;
    encodeFunctionData(functionFragment: "getErc20BalancesAndAllowances", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMaxLeverageRatio", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getNetAPY", values: [BigNumberish, BigNumberish, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPositionLiquidationThreshold", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionNetAPY", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getPositionRewardsSpeedPerSecond", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionsInfo", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getRewardsAprForPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "getStablecoinAssets", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "isAssetStablecoin", values: [string]): string;
    encodeFunctionData(functionFragment: "stablecoins", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetsBorrowRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getErc20Balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getErc20BalancesAndAllowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetAPY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionNetAPY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionRewardsSpeedPerSecond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardsAprForPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStablecoinAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAssetStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoins", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface LeveragedPositionsLens extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LeveragedPositionsLensInterface;
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
        factory(overrides?: CallOverrides): Promise<[string]>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetsBorrowRates(assets: string[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            rates: BigNumber[];
        }>;
        getErc20Balances(user: string, tokens: string[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            balances: BigNumber[];
        }>;
        getErc20BalancesAndAllowances(user: string, spender: string, tokens: string[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            balances: BigNumber[];
            allowances: BigNumber[];
        }>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            maxLeverageRatio: BigNumber;
        }>;
        getNetAPY(_supplyAPY: BigNumberish, _supplyAmount: BigNumberish, _collateralAsset: string, _stableAsset: string, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            netAPY: BigNumber;
        }>;
        getPositionInfo(pos: string, supplyApy: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionNetAPY(_supplyAPY: BigNumberish, position: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionRewardsSpeedPerSecond(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getPositionsInfo(positions: string[], supplyApys: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getRewardsAprForPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getStablecoinAssets(overrides?: CallOverrides): Promise<[string[]]>;
        initialize(_factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isAssetStablecoin(asset: string, overrides?: CallOverrides): Promise<[boolean]>;
        stablecoins(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    factory(overrides?: CallOverrides): Promise<string>;
    getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetsBorrowRates(assets: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getErc20Balances(user: string, tokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getErc20BalancesAndAllowances(user: string, spender: string, tokens: string[], overrides?: CallOverrides): Promise<[
        BigNumber[],
        BigNumber[]
    ] & {
        balances: BigNumber[];
        allowances: BigNumber[];
    }>;
    getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getNetAPY(_supplyAPY: BigNumberish, _supplyAmount: BigNumberish, _collateralAsset: string, _stableAsset: string, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionInfo(pos: string, supplyApy: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionNetAPY(_supplyAPY: BigNumberish, position: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionRewardsSpeedPerSecond(position: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getPositionsInfo(positions: string[], supplyApys: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getRewardsAprForPosition(position: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getStablecoinAssets(overrides?: CallOverrides): Promise<string[]>;
    initialize(_factory: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isAssetStablecoin(asset: string, overrides?: CallOverrides): Promise<boolean>;
    stablecoins(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        factory(overrides?: CallOverrides): Promise<string>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsBorrowRates(assets: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getErc20Balances(user: string, tokens: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getErc20BalancesAndAllowances(user: string, spender: string, tokens: string[], overrides?: CallOverrides): Promise<[
            BigNumber[],
            BigNumber[]
        ] & {
            balances: BigNumber[];
            allowances: BigNumber[];
        }>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getNetAPY(_supplyAPY: BigNumberish, _supplyAmount: BigNumberish, _collateralAsset: string, _stableAsset: string, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionInfo(pos: string, supplyApy: BigNumberish, overrides?: CallOverrides): Promise<LeveragedPositionsLens.PositionInfoStructOutput>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionNetAPY(_supplyAPY: BigNumberish, position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionRewardsSpeedPerSecond(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsInfo(positions: string[], supplyApys: BigNumberish[], overrides?: CallOverrides): Promise<LeveragedPositionsLens.PositionInfoStructOutput[]>;
        getRewardsAprForPosition(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getStablecoinAssets(overrides?: CallOverrides): Promise<string[]>;
        initialize(_factory: string, overrides?: CallOverrides): Promise<void>;
        isAssetStablecoin(asset: string, overrides?: CallOverrides): Promise<boolean>;
        stablecoins(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
    };
    estimateGas: {
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetsBorrowRates(assets: string[], overrides?: CallOverrides): Promise<BigNumber>;
        getErc20Balances(user: string, tokens: string[], overrides?: CallOverrides): Promise<BigNumber>;
        getErc20BalancesAndAllowances(user: string, spender: string, tokens: string[], overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getNetAPY(_supplyAPY: BigNumberish, _supplyAmount: BigNumberish, _collateralAsset: string, _stableAsset: string, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionInfo(pos: string, supplyApy: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionNetAPY(_supplyAPY: BigNumberish, position: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionRewardsSpeedPerSecond(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getPositionsInfo(positions: string[], supplyApys: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getRewardsAprForPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getStablecoinAssets(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isAssetStablecoin(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        stablecoins(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetsBorrowRates(assets: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getErc20Balances(user: string, tokens: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getErc20BalancesAndAllowances(user: string, spender: string, tokens: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNetAPY(_supplyAPY: BigNumberish, _supplyAmount: BigNumberish, _collateralAsset: string, _stableAsset: string, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionInfo(pos: string, supplyApy: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getPositionLiquidationThreshold(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionNetAPY(_supplyAPY: BigNumberish, position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionRewardsSpeedPerSecond(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getPositionsInfo(positions: string[], supplyApys: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getRewardsAprForPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getStablecoinAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_factory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isAssetStablecoin(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stablecoins(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
