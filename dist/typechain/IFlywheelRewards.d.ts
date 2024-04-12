import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IFlywheelRewardsInterface extends Interface {
    getFunction(nameOrSignature: "flywheel" | "getAccruedRewards" | "rewardToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "flywheel", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccruedRewards", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "flywheel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccruedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
}
export interface IFlywheelRewards extends BaseContract {
    connect(runner?: ContractRunner | null): IFlywheelRewards;
    waitForDeployment(): Promise<this>;
    interface: IFlywheelRewardsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    flywheel: TypedContractMethod<[], [string], "view">;
    getAccruedRewards: TypedContractMethod<[
        strategy: AddressLike,
        lastUpdatedTimestamp: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    rewardToken: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "flywheel"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAccruedRewards"): TypedContractMethod<[
        strategy: AddressLike,
        lastUpdatedTimestamp: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "rewardToken"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
