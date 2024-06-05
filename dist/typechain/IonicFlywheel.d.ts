import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IonicFlywheelInterface extends utils.Interface {
    functions: {
        "accrue(address,address)": FunctionFragment;
        "addMarketForRewards(address)": FunctionFragment;
        "claimRewards(address)": FunctionFragment;
        "compAccrued(address)": FunctionFragment;
        "flywheelPreBorrowerAction(address,address)": FunctionFragment;
        "flywheelPreSupplierAction(address,address)": FunctionFragment;
        "flywheelPreTransferAction(address,address,address)": FunctionFragment;
        "isFlywheel()": FunctionFragment;
        "isRewardsDistributor()": FunctionFragment;
        "marketState(address)": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "rewardsAccrued(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accrue" | "addMarketForRewards" | "claimRewards" | "compAccrued" | "flywheelPreBorrowerAction" | "flywheelPreSupplierAction" | "flywheelPreTransferAction" | "isFlywheel" | "isRewardsDistributor" | "marketState" | "rewardToken" | "rewardsAccrued"): FunctionFragment;
    encodeFunctionData(functionFragment: "accrue", values: [string, string]): string;
    encodeFunctionData(functionFragment: "addMarketForRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [string]): string;
    encodeFunctionData(functionFragment: "compAccrued", values: [string]): string;
    encodeFunctionData(functionFragment: "flywheelPreBorrowerAction", values: [string, string]): string;
    encodeFunctionData(functionFragment: "flywheelPreSupplierAction", values: [string, string]): string;
    encodeFunctionData(functionFragment: "flywheelPreTransferAction", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "isFlywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "isRewardsDistributor", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketState", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsAccrued", values: [string]): string;
    decodeFunctionResult(functionFragment: "accrue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMarketForRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compAccrued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelPreBorrowerAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelPreSupplierAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flywheelPreTransferAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFlywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRewardsDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsAccrued", data: BytesLike): Result;
    events: {};
}
export interface IonicFlywheel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IonicFlywheelInterface;
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
        accrue(strategy: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addMarketForRewards(strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        compAccrued(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        flywheelPreBorrowerAction(market: string, borrower: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flywheelPreSupplierAction(market: string, supplier: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isFlywheel(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isRewardsDistributor(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        marketState(strategy: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            index: BigNumber;
            lastUpdatedTimestamp: number;
        }>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        rewardsAccrued(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    accrue(strategy: string, user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addMarketForRewards(strategy: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimRewards(user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    compAccrued(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    flywheelPreBorrowerAction(market: string, borrower: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flywheelPreSupplierAction(market: string, supplier: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isFlywheel(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isRewardsDistributor(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    marketState(strategy: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        number
    ] & {
        index: BigNumber;
        lastUpdatedTimestamp: number;
    }>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    rewardsAccrued(user: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        accrue(strategy: string, user: string, overrides?: CallOverrides): Promise<BigNumber>;
        addMarketForRewards(strategy: string, overrides?: CallOverrides): Promise<void>;
        claimRewards(user: string, overrides?: CallOverrides): Promise<void>;
        compAccrued(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        flywheelPreBorrowerAction(market: string, borrower: string, overrides?: CallOverrides): Promise<void>;
        flywheelPreSupplierAction(market: string, supplier: string, overrides?: CallOverrides): Promise<void>;
        flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: CallOverrides): Promise<void>;
        isFlywheel(overrides?: CallOverrides): Promise<boolean>;
        isRewardsDistributor(overrides?: CallOverrides): Promise<boolean>;
        marketState(strategy: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            number
        ] & {
            index: BigNumber;
            lastUpdatedTimestamp: number;
        }>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        rewardsAccrued(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        accrue(strategy: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addMarketForRewards(strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        compAccrued(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        flywheelPreBorrowerAction(market: string, borrower: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flywheelPreSupplierAction(market: string, supplier: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isFlywheel(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isRewardsDistributor(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        marketState(strategy: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardsAccrued(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accrue(strategy: string, user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addMarketForRewards(strategy: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimRewards(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        compAccrued(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flywheelPreBorrowerAction(market: string, borrower: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flywheelPreSupplierAction(market: string, supplier: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        flywheelPreTransferAction(market: string, src: string, dst: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isFlywheel(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isRewardsDistributor(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        marketState(strategy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardsAccrued(user: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
