import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface IFlashloanRouterExtensionInterface extends Interface {
    getFunction(nameOrSignature: "_setIonicMarketOfAsset" | "flashloan" | "receiveFlashLoan"): FunctionFragment;
    encodeFunctionData(functionFragment: "_setIonicMarketOfAsset", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "flashloan", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "_setIonicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
}
export interface IFlashloanRouterExtension extends BaseContract {
    connect(runner?: ContractRunner | null): IFlashloanRouterExtension;
    waitForDeployment(): Promise<this>;
    interface: IFlashloanRouterExtensionInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _setIonicMarketOfAsset: TypedContractMethod<[
        asset: AddressLike,
        market: AddressLike
    ], [
        void
    ], "nonpayable">;
    flashloan: TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    receiveFlashLoan: TypedContractMethod<[
        borrowedAsset: AddressLike,
        borrowedAmount: BigNumberish,
        premium: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_setIonicMarketOfAsset"): TypedContractMethod<[
        asset: AddressLike,
        market: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "flashloan"): TypedContractMethod<[
        asset: AddressLike,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "receiveFlashLoan"): TypedContractMethod<[
        borrowedAsset: AddressLike,
        borrowedAmount: BigNumberish,
        premium: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
