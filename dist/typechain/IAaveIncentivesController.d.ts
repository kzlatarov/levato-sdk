import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IAaveIncentivesControllerInterface extends Interface {
    getFunction(nameOrSignature: "handleAction"): FunctionFragment;
    encodeFunctionData(functionFragment: "handleAction", values: [AddressLike, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "handleAction", data: BytesLike): Result;
}
export interface IAaveIncentivesController extends BaseContract {
    connect(runner?: ContractRunner | null): IAaveIncentivesController;
    waitForDeployment(): Promise<this>;
    interface: IAaveIncentivesControllerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    handleAction: TypedContractMethod<[
        user: AddressLike,
        totalSupply: BigNumberish,
        userBalance: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "handleAction"): TypedContractMethod<[
        user: AddressLike,
        totalSupply: BigNumberish,
        userBalance: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
