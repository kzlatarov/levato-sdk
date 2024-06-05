import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
export interface ICreditDelegatorStorageInterface extends utils.Interface {
    functions: {
        "borrowAllowance(address,address)": FunctionFragment;
        "borrowBalance(address,address)": FunctionFragment;
        "delegatedDebtAssetData(address)": FunctionFragment;
        "getDefaultRateModel()": FunctionFragment;
        "owner()": FunctionFragment;
        "positionBorrowIndex(address,address)": FunctionFragment;
        "positionBorrowIndexLastUpdate(address,address)": FunctionFragment;
        "positionScaledATokens(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "borrowAllowance" | "borrowBalance" | "delegatedDebtAssetData" | "getDefaultRateModel" | "owner" | "positionBorrowIndex" | "positionBorrowIndexLastUpdate" | "positionScaledATokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "borrowBalance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "delegatedDebtAssetData", values: [string]): string;
    encodeFunctionData(functionFragment: "getDefaultRateModel", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionBorrowIndex", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positionBorrowIndexLastUpdate", values: [string, string]): string;
    encodeFunctionData(functionFragment: "positionScaledATokens", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedDebtAssetData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDefaultRateModel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionBorrowIndexLastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionScaledATokens", data: BytesLike): Result;
    events: {};
}
export interface ICreditDelegatorStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICreditDelegatorStorageInterface;
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
        borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<[CreditDelegatorStorageBase.DelegatedDebtAssetDataStructOutput]>;
        getDefaultRateModel(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<[number]>;
        positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<CreditDelegatorStorageBase.DelegatedDebtAssetDataStructOutput>;
    getDefaultRateModel(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<number>;
    positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<CreditDelegatorStorageBase.DelegatedDebtAssetDataStructOutput>;
        getDefaultRateModel(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<number>;
        positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDefaultRateModel(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        borrowAllowance(position: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        borrowBalance(user: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegatedDebtAssetData(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDefaultRateModel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionBorrowIndex(position: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionBorrowIndexLastUpdate(position: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionScaledATokens(position: string, asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
