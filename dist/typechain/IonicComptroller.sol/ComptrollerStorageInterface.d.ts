import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface ComptrollerStorageInterfaceInterface extends Interface {
    getFunction(nameOrSignature: "accountAssets" | "admin" | "adminHasRights" | "borrowCapForCollateral" | "borrowCaps" | "borrowGuardianPaused" | "borrowingAgainstCollateralBlacklist" | "cTokensByUnderlying" | "closeFactorMantissa" | "enforceWhitelist" | "ionicAdmin" | "ionicAdminHasRights" | "isUserOfPool" | "liquidationIncentiveMantissa" | "markets" | "mintGuardianPaused" | "oracle" | "pauseGuardian" | "pendingAdmin" | "rewardsDistributors" | "suppliers" | "supplyCaps" | "whitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "accountAssets", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "adminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "borrowCapForCollateral", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowCaps", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowGuardianPaused", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "borrowingAgainstCollateralBlacklist", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "cTokensByUnderlying", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "closeFactorMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "enforceWhitelist", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "ionicAdminHasRights", values?: undefined): string;
    encodeFunctionData(functionFragment: "isUserOfPool", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "liquidationIncentiveMantissa", values?: undefined): string;
    encodeFunctionData(functionFragment: "markets", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "mintGuardianPaused", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseGuardian", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsDistributors", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "suppliers", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "supplyCaps", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "whitelist", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "accountAssets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminHasRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowCapForCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowingAgainstCollateralBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cTokensByUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFactorMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enforceWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicAdminHasRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isUserOfPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationIncentiveMantissa", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGuardianPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseGuardian", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardsDistributors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "suppliers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyCaps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
}
export interface ComptrollerStorageInterface extends BaseContract {
    connect(runner?: ContractRunner | null): ComptrollerStorageInterface;
    waitForDeployment(): Promise<this>;
    interface: ComptrollerStorageInterfaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    accountAssets: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        string
    ], "view">;
    admin: TypedContractMethod<[], [string], "view">;
    adminHasRights: TypedContractMethod<[], [boolean], "view">;
    borrowCapForCollateral: TypedContractMethod<[
        borrowed: AddressLike,
        collateral: AddressLike
    ], [
        bigint
    ], "view">;
    borrowCaps: TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    borrowGuardianPaused: TypedContractMethod<[
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
    borrowingAgainstCollateralBlacklist: TypedContractMethod<[
        borrowed: AddressLike,
        collateral: AddressLike
    ], [
        boolean
    ], "view">;
    cTokensByUnderlying: TypedContractMethod<[
        arg0: AddressLike
    ], [
        string
    ], "view">;
    closeFactorMantissa: TypedContractMethod<[], [bigint], "view">;
    enforceWhitelist: TypedContractMethod<[], [boolean], "view">;
    ionicAdmin: TypedContractMethod<[], [string], "view">;
    ionicAdminHasRights: TypedContractMethod<[], [boolean], "view">;
    isUserOfPool: TypedContractMethod<[user: AddressLike], [boolean], "view">;
    liquidationIncentiveMantissa: TypedContractMethod<[], [bigint], "view">;
    markets: TypedContractMethod<[
        cToken: AddressLike
    ], [
        [boolean, bigint]
    ], "view">;
    mintGuardianPaused: TypedContractMethod<[
        cToken: AddressLike
    ], [
        boolean
    ], "view">;
    oracle: TypedContractMethod<[], [string], "view">;
    pauseGuardian: TypedContractMethod<[], [string], "view">;
    pendingAdmin: TypedContractMethod<[], [string], "view">;
    rewardsDistributors: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        string
    ], "view">;
    suppliers: TypedContractMethod<[account: AddressLike], [boolean], "view">;
    supplyCaps: TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    whitelist: TypedContractMethod<[account: AddressLike], [boolean], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "accountAssets"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "adminHasRights"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "borrowCapForCollateral"): TypedContractMethod<[
        borrowed: AddressLike,
        collateral: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "borrowCaps"): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "borrowGuardianPaused"): TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "borrowingAgainstCollateralBlacklist"): TypedContractMethod<[
        borrowed: AddressLike,
        collateral: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "cTokensByUnderlying"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "closeFactorMantissa"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "enforceWhitelist"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "ionicAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "ionicAdminHasRights"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "isUserOfPool"): TypedContractMethod<[user: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "liquidationIncentiveMantissa"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "markets"): TypedContractMethod<[cToken: AddressLike], [[boolean, bigint]], "view">;
    getFunction(nameOrSignature: "mintGuardianPaused"): TypedContractMethod<[cToken: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "oracle"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pauseGuardian"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pendingAdmin"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rewardsDistributors"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "suppliers"): TypedContractMethod<[account: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "supplyCaps"): TypedContractMethod<[cToken: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "whitelist"): TypedContractMethod<[account: AddressLike], [boolean], "view">;
    filters: {};
}
