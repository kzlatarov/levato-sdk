import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface LeveragedPositionStorageInterface extends Interface {
    getFunction(nameOrSignature: "collateralAsset" | "factory" | "positionOwner" | "stableAsset"): FunctionFragment;
    encodeFunctionData(functionFragment: "collateralAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "stableAsset", values?: undefined): string;
    decodeFunctionResult(functionFragment: "collateralAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stableAsset", data: BytesLike): Result;
}
export interface LeveragedPositionStorage extends BaseContract {
    connect(runner?: ContractRunner | null): LeveragedPositionStorage;
    waitForDeployment(): Promise<this>;
    interface: LeveragedPositionStorageInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    collateralAsset: TypedContractMethod<[], [string], "view">;
    factory: TypedContractMethod<[], [string], "view">;
    positionOwner: TypedContractMethod<[], [string], "view">;
    stableAsset: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "collateralAsset"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "factory"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "positionOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "stableAsset"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
