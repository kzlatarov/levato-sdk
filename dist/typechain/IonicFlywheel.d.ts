import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IonicFlywheelInterface extends Interface {
    getFunction(nameOrSignature: "accrue" | "addMarketForRewards" | "claimRewards" | "compAccrued" | "flywheelPreBorrowerAction" | "flywheelPreSupplierAction" | "flywheelPreTransferAction" | "isFlywheel" | "isRewardsDistributor" | "marketState" | "rewardToken" | "rewardsAccrued"): FunctionFragment;
    encodeFunctionData(functionFragment: "accrue", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "addMarketForRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "claimRewards", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "compAccrued", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "flywheelPreBorrowerAction", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "flywheelPreSupplierAction", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "flywheelPreTransferAction", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isFlywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "isRewardsDistributor", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketState", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardsAccrued", values: [AddressLike]): string;
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
}
export interface IonicFlywheel extends BaseContract {
    connect(runner?: ContractRunner | null): IonicFlywheel;
    waitForDeployment(): Promise<this>;
    interface: IonicFlywheelInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    accrue: TypedContractMethod<[
        strategy: AddressLike,
        user: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    addMarketForRewards: TypedContractMethod<[
        strategy: AddressLike
    ], [
        void
    ], "nonpayable">;
    claimRewards: TypedContractMethod<[user: AddressLike], [void], "nonpayable">;
    compAccrued: TypedContractMethod<[user: AddressLike], [bigint], "view">;
    flywheelPreBorrowerAction: TypedContractMethod<[
        market: AddressLike,
        borrower: AddressLike
    ], [
        void
    ], "nonpayable">;
    flywheelPreSupplierAction: TypedContractMethod<[
        market: AddressLike,
        supplier: AddressLike
    ], [
        void
    ], "nonpayable">;
    flywheelPreTransferAction: TypedContractMethod<[
        market: AddressLike,
        src: AddressLike,
        dst: AddressLike
    ], [
        void
    ], "nonpayable">;
    isFlywheel: TypedContractMethod<[], [boolean], "nonpayable">;
    isRewardsDistributor: TypedContractMethod<[], [boolean], "nonpayable">;
    marketState: TypedContractMethod<[
        strategy: AddressLike
    ], [
        [bigint, bigint] & {
            index: bigint;
            lastUpdatedTimestamp: bigint;
        }
    ], "view">;
    rewardToken: TypedContractMethod<[], [string], "view">;
    rewardsAccrued: TypedContractMethod<[
        user: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "accrue"): TypedContractMethod<[
        strategy: AddressLike,
        user: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "addMarketForRewards"): TypedContractMethod<[strategy: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "claimRewards"): TypedContractMethod<[user: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "compAccrued"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "flywheelPreBorrowerAction"): TypedContractMethod<[
        market: AddressLike,
        borrower: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "flywheelPreSupplierAction"): TypedContractMethod<[
        market: AddressLike,
        supplier: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "flywheelPreTransferAction"): TypedContractMethod<[
        market: AddressLike,
        src: AddressLike,
        dst: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "isFlywheel"): TypedContractMethod<[], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "isRewardsDistributor"): TypedContractMethod<[], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "marketState"): TypedContractMethod<[
        strategy: AddressLike
    ], [
        [bigint, bigint] & {
            index: bigint;
            lastUpdatedTimestamp: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "rewardsAccrued"): TypedContractMethod<[user: AddressLike], [bigint], "nonpayable">;
    filters: {};
}
