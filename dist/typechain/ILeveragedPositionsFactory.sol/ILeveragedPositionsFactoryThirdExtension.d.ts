import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface ILeveragedPositionsFactoryThirdExtensionInterface extends utils.Interface {
    functions: {
        "_setPairWhitelisted(address,address,bool)": FunctionFragment;
        "createAndFundDelegatedPosition(address,address,address,address,uint256)": FunctionFragment;
        "createAndFundDelegatedPositionAtRatio(address,address,address,address,uint256,uint256)": FunctionFragment;
        "createAndFundPosition(address,address,address,address,uint256)": FunctionFragment;
        "createAndFundPositionAtRatio(address,address,address,address,uint256,uint256)": FunctionFragment;
        "createDelegatedPosition(address,address,address)": FunctionFragment;
        "createPosition(address,address,address)": FunctionFragment;
        "deregisterVault(address)": FunctionFragment;
        "getAaveMaxLeverageRatio(address,uint256,address)": FunctionFragment;
        "getLeverageRatioAfterBorrow(address,address,uint256,uint256,uint256)": FunctionFragment;
        "getLeverageRatioAfterRepay(address,address,uint256,uint256,uint256)": FunctionFragment;
        "getLiquidationThreshold(address,uint256,address,uint256)": FunctionFragment;
        "getRegisteredVaults()": FunctionFragment;
        "isVaultRegistered(address)": FunctionFragment;
        "registerVault(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_setPairWhitelisted" | "createAndFundDelegatedPosition" | "createAndFundDelegatedPositionAtRatio" | "createAndFundPosition" | "createAndFundPositionAtRatio" | "createDelegatedPosition" | "createPosition" | "deregisterVault" | "getAaveMaxLeverageRatio" | "getLeverageRatioAfterBorrow" | "getLeverageRatioAfterRepay" | "getLiquidationThreshold" | "getRegisteredVaults" | "isVaultRegistered" | "registerVault"): FunctionFragment;
    encodeFunctionData(functionFragment: "_setPairWhitelisted", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPosition", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundDelegatedPositionAtRatio", values: [string, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundPosition", values: [string, string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAndFundPositionAtRatio", values: [string, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createDelegatedPosition", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "createPosition", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "deregisterVault", values: [string]): string;
    encodeFunctionData(functionFragment: "getAaveMaxLeverageRatio", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterBorrow", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLeverageRatioAfterRepay", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLiquidationThreshold", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRegisteredVaults", values?: undefined): string;
    encodeFunctionData(functionFragment: "isVaultRegistered", values: [string]): string;
    encodeFunctionData(functionFragment: "registerVault", values: [string]): string;
    decodeFunctionResult(functionFragment: "_setPairWhitelisted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundDelegatedPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAndFundPositionAtRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDelegatedPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deregisterVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAaveMaxLeverageRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterBorrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLeverageRatioAfterRepay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRegisteredVaults", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isVaultRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerVault", data: BytesLike): Result;
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
export interface ILeveragedPositionsFactoryThirdExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILeveragedPositionsFactoryThirdExtensionInterface;
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
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deregisterVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            maxLeverageRatio: BigNumber;
        }>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            r: BigNumber;
        }>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<[string[]]>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<[boolean]>;
        registerVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deregisterVault(vault: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
    getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getRegisteredVaults(overrides?: CallOverrides): Promise<string[]>;
    isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<boolean>;
    registerVault(vault: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: CallOverrides): Promise<void>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<string>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: CallOverrides): Promise<string>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: CallOverrides): Promise<string>;
        deregisterVault(vault: string, overrides?: CallOverrides): Promise<boolean>;
        getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<string[]>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<boolean>;
        registerVault(vault: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "PositionCreated(address,address,address,address,uint16)"(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
        PositionCreated(user?: string | null, position?: null, collateral?: string | null, stable?: string | null, lendingProtocol?: null): PositionCreatedEventFilter;
    };
    estimateGas: {
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deregisterVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<BigNumber>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<BigNumber>;
        registerVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _setPairWhitelisted(_collateralAsset: string, _stableAsset: string, _whitelisted: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundDelegatedPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAndFundPositionAtRatio(_collateralAsset: string, _collateralVault: string, _stableAsset: string, _fundingAsset: string, _fundingAmount: BigNumberish, _leverageRatio: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createDelegatedPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createPosition(_collateralAsset: string, _collateralVault: string, _stableAsset: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deregisterVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAaveMaxLeverageRatio(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLeverageRatioAfterBorrow(collateralAsset: string, borrowedAsset: string, newBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLeverageRatioAfterRepay(collateralAsset: string, borrowedAsset: string, repaidBorrowsAmount: BigNumberish, positionSupplyAmount: BigNumberish, positionBorrowAmount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidationThreshold(collateralAsset: string, collateralAmount: BigNumberish, borrowedAsset: string, leverageRatio: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRegisteredVaults(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isVaultRegistered(vault: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerVault(vault: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
