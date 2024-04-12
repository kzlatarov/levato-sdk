import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface IBeefyStrategyInterface extends Interface {
    getFunction(nameOrSignature: "harvestOnDeposit" | "keeper" | "owner" | "setHarvestOnDeposit"): FunctionFragment;
    encodeFunctionData(functionFragment: "harvestOnDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "keeper", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setHarvestOnDeposit", values: [boolean]): string;
    decodeFunctionResult(functionFragment: "harvestOnDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHarvestOnDeposit", data: BytesLike): Result;
}
export interface IBeefyStrategy extends BaseContract {
    connect(runner?: ContractRunner | null): IBeefyStrategy;
    waitForDeployment(): Promise<this>;
    interface: IBeefyStrategyInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    harvestOnDeposit: TypedContractMethod<[], [boolean], "view">;
    keeper: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    setHarvestOnDeposit: TypedContractMethod<[
        arg0: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "harvestOnDeposit"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "keeper"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setHarvestOnDeposit"): TypedContractMethod<[arg0: boolean], [void], "nonpayable">;
    filters: {};
}
