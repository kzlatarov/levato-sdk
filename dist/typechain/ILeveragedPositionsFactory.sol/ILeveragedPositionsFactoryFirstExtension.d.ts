import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface ILeveragedPositionsFactoryFirstExtensionInterface extends utils.Interface {
    functions: {
        "_setIonicPairWhitelisted(address,address,bool)": FunctionFragment;
        "createAndFundIonicPosition(address,address,address,uint256)": FunctionFragment;
        "createAndFundIonicPositionAtRatio(address,address,address,uint256,uint256)": FunctionFragment;
        "createIonicPosition(address,address)": FunctionFragment;
        "getAssetBorrowRate(address)": FunctionFragment;
        "getAssetPrice(address)": FunctionFragment;
        "getPositionsByAccount(address)": FunctionFragment;
        "getPositionsTotalCollateralValue()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isFactoryPosition(address)": FunctionFragment;
        "reinitialize(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_setIonicPairWhitelisted" | "createAndFundIonicPosition" | "createAndFundIonicPositionAtRatio" | "createIonicPosition" | "getAssetBorrowRate" | "getAssetPrice" | "getPositionsByAccount" | "getPositionsTotalCollateralValue" | "initialize" | "isFactoryPosition" | "reinitialize"): FunctionFragment;
    encodeFunctionData(functionFragment: "_setIonicPairWhitelisted", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPosition", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundIonicPositionAtRatio", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createIonicPosition", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getAssetBorrowRate", values: [string]): string;
    encodeFunctionData(functionFragment: "getAssetPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionsByAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "getPositionsTotalCollateralValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isFactoryPosition", values: [string]): string;
    encodeFunctionData(functionFragment: "reinitialize", values: [string]): string;
    decodeFunctionResult(functionFragment: "_setIonicPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundIonicPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createIonicPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsByAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositionsTotalCollateralValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFactoryPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reinitialize", data: BytesLike): Result;
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
export interface ILeveragedPositionsFactoryFirstExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILeveragedPositionsFactoryFirstExtensionInterface;
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
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<[string[], boolean[]]>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<[boolean]>;
        reinitialize(_oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<[string[], boolean[]]>;
    getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isFactoryPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
    reinitialize(_oracle: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: CallOverrides): Promise<string>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<[string[], boolean[]]>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_delegator: string, _oracle: string, overrides?: CallOverrides): Promise<void>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<boolean>;
        reinitialize(_oracle: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PositionCreated(address,address,address,address,uint16)"(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
        PositionCreated(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
    };
    estimateGas: {
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<BigNumber>;
        reinitialize(_oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _setIonicPairWhitelisted(_collateralMarket: string, _stableMarket: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundIonicPosition(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundIonicPositionAtRatio(_collateralMarket: string, _stableMarket: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createIonicPosition(_collateralMarket: string, _stableMarket: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAssetBorrowRate(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsByAccount(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositionsTotalCollateralValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_delegator: string, _oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isFactoryPosition(position: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reinitialize(_oracle: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
