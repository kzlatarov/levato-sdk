import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface ReserveConfigurationInterface extends Interface {
    getFunction(nameOrSignature: "DEBT_CEILING_DECIMALS" | "MAX_RESERVES_COUNT"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEBT_CEILING_DECIMALS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_RESERVES_COUNT", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEBT_CEILING_DECIMALS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_RESERVES_COUNT", data: BytesLike): Result;
}
export interface ReserveConfiguration extends BaseContract {
    connect(runner?: ContractRunner | null): ReserveConfiguration;
    waitForDeployment(): Promise<this>;
    interface: ReserveConfigurationInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    DEBT_CEILING_DECIMALS: TypedContractMethod<[], [bigint], "view">;
    MAX_RESERVES_COUNT: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "DEBT_CEILING_DECIMALS"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "MAX_RESERVES_COUNT"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
