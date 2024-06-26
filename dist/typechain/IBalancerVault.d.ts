import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type ExitPoolRequestStruct = {
    assets: string[];
    minAmountsOut: BigNumberish[];
    userData: BytesLike;
    toInternalBalance: boolean;
};
export type ExitPoolRequestStructOutput = [
    string[],
    BigNumber[],
    string,
    boolean
] & {
    assets: string[];
    minAmountsOut: BigNumber[];
    userData: string;
    toInternalBalance: boolean;
};
export type UserBalanceOpStruct = {
    kind: BigNumberish;
    asset: string;
    amount: BigNumberish;
    sender: string;
    recipient: string;
};
export type UserBalanceOpStructOutput = [
    number,
    string,
    BigNumber,
    string,
    string
] & {
    kind: number;
    asset: string;
    amount: BigNumber;
    sender: string;
    recipient: string;
};
export type SingleSwapStruct = {
    poolId: BytesLike;
    kind: BigNumberish;
    assetIn: string;
    assetOut: string;
    amount: BigNumberish;
    userData: BytesLike;
};
export type SingleSwapStructOutput = [
    string,
    number,
    string,
    string,
    BigNumber,
    string
] & {
    poolId: string;
    kind: number;
    assetIn: string;
    assetOut: string;
    amount: BigNumber;
    userData: string;
};
export type FundManagementStruct = {
    sender: string;
    fromInternalBalance: boolean;
    recipient: string;
    toInternalBalance: boolean;
};
export type FundManagementStructOutput = [string, boolean, string, boolean] & {
    sender: string;
    fromInternalBalance: boolean;
    recipient: string;
    toInternalBalance: boolean;
};
export interface IBalancerVaultInterface extends utils.Interface {
    functions: {
        "exitPool(bytes32,address,address,(address[],uint256[],bytes,bool))": FunctionFragment;
        "getPoolTokens(bytes32)": FunctionFragment;
        "manageUserBalance((uint8,address,uint256,address,address)[])": FunctionFragment;
        "swap((bytes32,uint8,address,address,uint256,bytes),(address,bool,address,bool),uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exitPool" | "getPoolTokens" | "manageUserBalance" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "exitPool", values: [BytesLike, string, string, ExitPoolRequestStruct]): string;
    encodeFunctionData(functionFragment: "getPoolTokens", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "manageUserBalance", values: [UserBalanceOpStruct[]]): string;
    encodeFunctionData(functionFragment: "swap", values: [SingleSwapStruct, FundManagementStruct, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "exitPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manageUserBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    events: {};
}
export interface IBalancerVault extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBalancerVaultInterface;
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
        exitPool(poolId: BytesLike, sender: string, recipient: string, request: ExitPoolRequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber
        ] & {
            tokens: string[];
            balances: BigNumber[];
            lastChangeBlock: BigNumber;
        }>;
        manageUserBalance(ops: UserBalanceOpStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swap(singleSwap: SingleSwapStruct, funds: FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    exitPool(poolId: BytesLike, sender: string, recipient: string, request: ExitPoolRequestStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<[
        string[],
        BigNumber[],
        BigNumber
    ] & {
        tokens: string[];
        balances: BigNumber[];
        lastChangeBlock: BigNumber;
    }>;
    manageUserBalance(ops: UserBalanceOpStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swap(singleSwap: SingleSwapStruct, funds: FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        exitPool(poolId: BytesLike, sender: string, recipient: string, request: ExitPoolRequestStruct, overrides?: CallOverrides): Promise<void>;
        getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[],
            BigNumber
        ] & {
            tokens: string[];
            balances: BigNumber[];
            lastChangeBlock: BigNumber;
        }>;
        manageUserBalance(ops: UserBalanceOpStruct[], overrides?: CallOverrides): Promise<void>;
        swap(singleSwap: SingleSwapStruct, funds: FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        exitPool(poolId: BytesLike, sender: string, recipient: string, request: ExitPoolRequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        manageUserBalance(ops: UserBalanceOpStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        swap(singleSwap: SingleSwapStruct, funds: FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exitPool(poolId: BytesLike, sender: string, recipient: string, request: ExitPoolRequestStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getPoolTokens(poolId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        manageUserBalance(ops: UserBalanceOpStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swap(singleSwap: SingleSwapStruct, funds: FundManagementStruct, limit: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
