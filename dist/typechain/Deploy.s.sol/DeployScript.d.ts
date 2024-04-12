import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface DeployScriptInterface extends Interface {
    getFunction(nameOrSignature: "IS_SCRIPT" | "POLYGON" | "run" | "setUp" | "wnative"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
    encodeFunctionData(functionFragment: "POLYGON", values?: undefined): string;
    encodeFunctionData(functionFragment: "run", values?: undefined): string;
    encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
    encodeFunctionData(functionFragment: "wnative", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POLYGON", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wnative", data: BytesLike): Result;
}
export interface DeployScript extends BaseContract {
    connect(runner?: ContractRunner | null): DeployScript;
    waitForDeployment(): Promise<this>;
    interface: DeployScriptInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    IS_SCRIPT: TypedContractMethod<[], [boolean], "view">;
    POLYGON: TypedContractMethod<[], [bigint], "view">;
    run: TypedContractMethod<[], [void], "nonpayable">;
    setUp: TypedContractMethod<[], [void], "nonpayable">;
    wnative: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "IS_SCRIPT"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "POLYGON"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "run"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "setUp"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "wnative"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
