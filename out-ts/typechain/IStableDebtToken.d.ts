import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IStableDebtTokenInterface extends utils.Interface {
    functions: {
        "UNDERLYING_ASSET_ADDRESS()": FunctionFragment;
        "burn(address,uint256)": FunctionFragment;
        "getAverageStableRate()": FunctionFragment;
        "getSupplyData()": FunctionFragment;
        "getTotalSupplyAndAvgRate()": FunctionFragment;
        "getTotalSupplyLastUpdated()": FunctionFragment;
        "getUserLastUpdated(address)": FunctionFragment;
        "getUserStableRate(address)": FunctionFragment;
        "initialize(address,address,address,uint8,string,string,bytes)": FunctionFragment;
        "mint(address,address,uint256,uint256)": FunctionFragment;
        "principalBalanceOf(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "UNDERLYING_ASSET_ADDRESS" | "burn" | "getAverageStableRate" | "getSupplyData" | "getTotalSupplyAndAvgRate" | "getTotalSupplyLastUpdated" | "getUserLastUpdated" | "getUserStableRate" | "initialize" | "mint" | "principalBalanceOf"): FunctionFragment;
    encodeFunctionData(functionFragment: "UNDERLYING_ASSET_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAverageStableRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSupplyData", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSupplyAndAvgRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSupplyLastUpdated", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserLastUpdated", values: [string]): string;
    encodeFunctionData(functionFragment: "getUserStableRate", values: [string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, BigNumberish, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "principalBalanceOf", values: [string]): string;
    decodeFunctionResult(functionFragment: "UNDERLYING_ASSET_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAverageStableRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSupplyAndAvgRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSupplyLastUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserLastUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserStableRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "principalBalanceOf", data: BytesLike): Result;
    events: {
        "Burn(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "Initialized(address,address,address,uint8,string,string,bytes)": EventFragment;
        "Mint(address,address,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
}
export interface BurnEventObject {
    from: string;
    amount: BigNumber;
    currentBalance: BigNumber;
    balanceIncrease: BigNumber;
    avgStableRate: BigNumber;
    newTotalSupply: BigNumber;
}
export type BurnEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], BurnEventObject>;
export type BurnEventFilter = TypedEventFilter<BurnEvent>;
export interface InitializedEventObject {
    underlyingAsset: string;
    pool: string;
    incentivesController: string;
    debtTokenDecimals: number;
    debtTokenName: string;
    debtTokenSymbol: string;
    params: string;
}
export type InitializedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    string,
    string,
    string
], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface MintEventObject {
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    currentBalance: BigNumber;
    balanceIncrease: BigNumber;
    newRate: BigNumber;
    avgStableRate: BigNumber;
    newTotalSupply: BigNumber;
}
export type MintEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], MintEventObject>;
export type MintEventFilter = TypedEventFilter<MintEvent>;
export interface IStableDebtToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStableDebtTokenInterface;
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
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        burn(from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAverageStableRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        getSupplyData(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, number]>;
        getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<[number]>;
        getUserLastUpdated(user: string, overrides?: CallOverrides): Promise<[number]>;
        getUserStableRate(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mint(user: string, onBehalfOf: string, amount: BigNumberish, rate: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        principalBalanceOf(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
    burn(from: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAverageStableRate(overrides?: CallOverrides): Promise<BigNumber>;
    getSupplyData(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, number]>;
    getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<number>;
    getUserLastUpdated(user: string, overrides?: CallOverrides): Promise<number>;
    getUserStableRate(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mint(user: string, onBehalfOf: string, amount: BigNumberish, rate: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    principalBalanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<string>;
        burn(from: string, amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getAverageStableRate(overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyData(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, number]>;
        getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<number>;
        getUserLastUpdated(user: string, overrides?: CallOverrides): Promise<number>;
        getUserStableRate(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: CallOverrides): Promise<void>;
        mint(user: string, onBehalfOf: string, amount: BigNumberish, rate: BigNumberish, overrides?: CallOverrides): Promise<[boolean, BigNumber, BigNumber]>;
        principalBalanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Burn(address,uint256,uint256,uint256,uint256,uint256)"(from?: string | null, amount?: null, currentBalance?: null, balanceIncrease?: null, avgStableRate?: null, newTotalSupply?: null): BurnEventFilter;
        Burn(from?: string | null, amount?: null, currentBalance?: null, balanceIncrease?: null, avgStableRate?: null, newTotalSupply?: null): BurnEventFilter;
        "Initialized(address,address,address,uint8,string,string,bytes)"(underlyingAsset?: string | null, pool?: string | null, incentivesController?: null, debtTokenDecimals?: null, debtTokenName?: null, debtTokenSymbol?: null, params?: null): InitializedEventFilter;
        Initialized(underlyingAsset?: string | null, pool?: string | null, incentivesController?: null, debtTokenDecimals?: null, debtTokenName?: null, debtTokenSymbol?: null, params?: null): InitializedEventFilter;
        "Mint(address,address,uint256,uint256,uint256,uint256,uint256,uint256)"(user?: string | null, onBehalfOf?: string | null, amount?: null, currentBalance?: null, balanceIncrease?: null, newRate?: null, avgStableRate?: null, newTotalSupply?: null): MintEventFilter;
        Mint(user?: string | null, onBehalfOf?: string | null, amount?: null, currentBalance?: null, balanceIncrease?: null, newRate?: null, avgStableRate?: null, newTotalSupply?: null): MintEventFilter;
    };
    estimateGas: {
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        burn(from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAverageStableRate(overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyData(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<BigNumber>;
        getUserLastUpdated(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        getUserStableRate(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mint(user: string, onBehalfOf: string, amount: BigNumberish, rate: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        principalBalanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        UNDERLYING_ASSET_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(from: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAverageStableRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSupplyAndAvgRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSupplyLastUpdated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserLastUpdated(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserStableRate(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mint(user: string, onBehalfOf: string, amount: BigNumberish, rate: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        principalBalanceOf(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
