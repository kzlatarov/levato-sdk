import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export type ExitPoolRequestStruct = {
    assets: AddressLike[];
    minAmountsOut: BigNumberish[];
    userData: BytesLike;
    toInternalBalance: boolean;
};
export type ExitPoolRequestStructOutput = [
    assets: string[],
    minAmountsOut: bigint[],
    userData: string,
    toInternalBalance: boolean
] & {
    assets: string[];
    minAmountsOut: bigint[];
    userData: string;
    toInternalBalance: boolean;
};
export type UserBalanceOpStruct = {
    kind: BigNumberish;
    asset: AddressLike;
    amount: BigNumberish;
    sender: AddressLike;
    recipient: AddressLike;
};
export type UserBalanceOpStructOutput = [
    kind: bigint,
    asset: string,
    amount: bigint,
    sender: string,
    recipient: string
] & {
    kind: bigint;
    asset: string;
    amount: bigint;
    sender: string;
    recipient: string;
};
export type SingleSwapStruct = {
    poolId: BytesLike;
    kind: BigNumberish;
    assetIn: AddressLike;
    assetOut: AddressLike;
    amount: BigNumberish;
    userData: BytesLike;
};
export type SingleSwapStructOutput = [
    poolId: string,
    kind: bigint,
    assetIn: string,
    assetOut: string,
    amount: bigint,
    userData: string
] & {
    poolId: string;
    kind: bigint;
    assetIn: string;
    assetOut: string;
    amount: bigint;
    userData: string;
};
export type FundManagementStruct = {
    sender: AddressLike;
    fromInternalBalance: boolean;
    recipient: AddressLike;
    toInternalBalance: boolean;
};
export type FundManagementStructOutput = [
    sender: string,
    fromInternalBalance: boolean,
    recipient: string,
    toInternalBalance: boolean
] & {
    sender: string;
    fromInternalBalance: boolean;
    recipient: string;
    toInternalBalance: boolean;
};
export interface IBalancerVaultInterface extends Interface {
    getFunction(nameOrSignature: "exitPool" | "getPoolTokens" | "manageUserBalance" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "exitPool", values: [BytesLike, AddressLike, AddressLike, ExitPoolRequestStruct]): string;
    encodeFunctionData(functionFragment: "getPoolTokens", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "manageUserBalance", values: [UserBalanceOpStruct[]]): string;
    encodeFunctionData(functionFragment: "swap", values: [SingleSwapStruct, FundManagementStruct, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "exitPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manageUserBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
}
export interface IBalancerVault extends BaseContract {
    connect(runner?: ContractRunner | null): IBalancerVault;
    waitForDeployment(): Promise<this>;
    interface: IBalancerVaultInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    exitPool: TypedContractMethod<[
        poolId: BytesLike,
        sender: AddressLike,
        recipient: AddressLike,
        request: ExitPoolRequestStruct
    ], [
        void
    ], "nonpayable">;
    getPoolTokens: TypedContractMethod<[
        poolId: BytesLike
    ], [
        [
            string[],
            bigint[],
            bigint
        ] & {
            tokens: string[];
            balances: bigint[];
            lastChangeBlock: bigint;
        }
    ], "view">;
    manageUserBalance: TypedContractMethod<[
        ops: UserBalanceOpStruct[]
    ], [
        void
    ], "payable">;
    swap: TypedContractMethod<[
        singleSwap: SingleSwapStruct,
        funds: FundManagementStruct,
        limit: BigNumberish,
        deadline: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "exitPool"): TypedContractMethod<[
        poolId: BytesLike,
        sender: AddressLike,
        recipient: AddressLike,
        request: ExitPoolRequestStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getPoolTokens"): TypedContractMethod<[
        poolId: BytesLike
    ], [
        [
            string[],
            bigint[],
            bigint
        ] & {
            tokens: string[];
            balances: bigint[];
            lastChangeBlock: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "manageUserBalance"): TypedContractMethod<[ops: UserBalanceOpStruct[]], [void], "payable">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        singleSwap: SingleSwapStruct,
        funds: FundManagementStruct,
        limit: BigNumberish,
        deadline: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    filters: {};
}
