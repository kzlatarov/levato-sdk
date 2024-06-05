import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface ILeveragedPositionsFactorySecondExtensionInterface extends utils.Interface {
    functions: {
        "closeAndRemoveUserPosition(address)": FunctionFragment;
        "createAavePosition(address,address,address,bool)": FunctionFragment;
        "fundPosition(address,address,uint256)": FunctionFragment;
        "getAccountsWithOpenPositions()": FunctionFragment;
        "getBorrowableMarketsByCollateral(address)": FunctionFragment;
        "getMinBorrowNative()": FunctionFragment;
        "getPositionsExtension(bytes4)": FunctionFragment;
        "getWhitelistedCollateralMarkets()": FunctionFragment;
        "removeClosedPosition(address)": FunctionFragment;
        "swap(address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "closeAndRemoveUserPosition" | "createAavePosition" | "fundPosition" | "getAccountsWithOpenPositions" | "getBorrowableMarketsByCollateral" | "getMinBorrowNative" | "getPositionsExtension" | "getWhitelistedCollateralMarkets" | "removeClosedPosition" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "closeAndRemoveUserPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "createAavePosition", values: [string, string, string, boolean]): string;
    encodeFunctionData(functionFragment: "fundPosition", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAccountsWithOpenPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBorrowableMarketsByCollateral", values: [string]): string;
    encodeFunctionData(functionFragment: "getMinBorrowNative", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositionsExtension", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getWhitelistedCollateralMarkets", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeClosedPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "swap", values: [string, BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "closeAndRemoveUserPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAavePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountsWithOpenPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowableMarketsByCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinBorrowNative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWhitelistedCollateralMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeClosedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {
        "PositionCreated(address,address,address,address,uint16)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment;
}
export interface PositionCreatedEventObject {
    user: string;
    position: string;
    collateral: string;
    stable: string;
    lendingProtocol: number;
}
export type PositionCreatedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    number
], PositionCreatedEventObject>;
export type PositionCreatedEventFilter = TypedEventFilter<PositionCreatedEvent>;
export interface ILeveragedPositionsFactorySecondExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILeveragedPositionsFactorySecondExtensionInterface;
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
        closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<[string[]]>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<[string[]]>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<[string[]]>;
        removeClosedPosition(closedPosition: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<string[]>;
    getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<string[]>;
    getMinBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
    getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<string>;
    getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<string[]>;
    removeClosedPosition(closedPosition: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        closeAndRemoveUserPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: CallOverrides): Promise<string>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<string[]>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<string[]>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<string>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<string[]>;
        removeClosedPosition(closedPosition: string, overrides?: CallOverrides): Promise<boolean>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "PositionCreated(address,address,address,address,uint16)"(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
        PositionCreated(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
    };
    estimateGas: {
        closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<BigNumber>;
        removeClosedPosition(closedPosition: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        closeAndRemoveUserPosition(position: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAavePosition(user: string, _collateralAsset: string, _stableAsset: string, _isShort: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fundPosition(position: string, fundingAsset: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAccountsWithOpenPositions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowableMarketsByCollateral(_collateralAsset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinBorrowNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsExtension(msgSig: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWhitelistedCollateralMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeClosedPosition(closedPosition: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swap(inputToken: string, inputAmount: BigNumberish, outputToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
