import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface IFundersRegistryStorageInterface extends Interface {
    getFunction(nameOrSignature: "WNATIVE" | "balancerPoolForTokens" | "bestSwapPath" | "customUniV3Router" | "defaultOutputToken" | "fundingStrategiesByName" | "fundingStrategiesByTokens" | "owner" | "uniswapV3Fees"): FunctionFragment;
    encodeFunctionData(functionFragment: "WNATIVE", values?: undefined): string;
    encodeFunctionData(functionFragment: "balancerPoolForTokens", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "bestSwapPath", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "customUniV3Router", values?: undefined): string;
    encodeFunctionData(functionFragment: "defaultOutputToken", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByName", values: [string]): string;
    encodeFunctionData(functionFragment: "fundingStrategiesByTokens", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "uniswapV3Fees", values?: undefined): string;
    decodeFunctionResult(functionFragment: "WNATIVE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balancerPoolForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bestSwapPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "customUniV3Router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultOutputToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingStrategiesByName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingStrategiesByTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3Fees", data: BytesLike): Result;
}
export interface IFundersRegistryStorage extends BaseContract {
    connect(runner?: ContractRunner | null): IFundersRegistryStorage;
    waitForDeployment(): Promise<this>;
    interface: IFundersRegistryStorageInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    WNATIVE: TypedContractMethod<[], [string], "view">;
    balancerPoolForTokens: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string
    ], "view">;
    bestSwapPath: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string[]
    ], "nonpayable">;
    customUniV3Router: TypedContractMethod<[], [string], "nonpayable">;
    defaultOutputToken: TypedContractMethod<[
        inputToken: AddressLike
    ], [
        string
    ], "view">;
    fundingStrategiesByName: TypedContractMethod<[
        name: string
    ], [
        string
    ], "view">;
    fundingStrategiesByTokens: TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string
    ], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    uniswapV3Fees: TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "WNATIVE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "balancerPoolForTokens"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "bestSwapPath"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "customUniV3Router"): TypedContractMethod<[], [string], "nonpayable">;
    getFunction(nameOrSignature: "defaultOutputToken"): TypedContractMethod<[inputToken: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "fundingStrategiesByName"): TypedContractMethod<[name: string], [string], "view">;
    getFunction(nameOrSignature: "fundingStrategiesByTokens"): TypedContractMethod<[
        inputToken: AddressLike,
        outputToken: AddressLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "uniswapV3Fees"): TypedContractMethod<[], [bigint], "nonpayable">;
    filters: {};
}
