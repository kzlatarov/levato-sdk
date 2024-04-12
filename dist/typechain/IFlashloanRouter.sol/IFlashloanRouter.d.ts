import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export interface IFlashloanRouterInterface extends Interface {
    getFunction(nameOrSignature: "_listExtensions" | "_registerExtension" | "_replaceExtensions" | "_setIonicMarketOfAsset" | "flashloan" | "ionicMarketOfAsset" | "owner" | "receiveFlashLoan"): FunctionFragment;
    encodeFunctionData(functionFragment: "_listExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "_registerExtension", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "_replaceExtensions", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "_setIonicMarketOfAsset", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "flashloan", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "ionicMarketOfAsset", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveFlashLoan", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "_listExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_registerExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_replaceExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setIonicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashloan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ionicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFlashLoan", data: BytesLike): Result;
}
export interface IFlashloanRouter extends BaseContract {
    connect(runner?: ContractRunner | null): IFlashloanRouter;
    waitForDeployment(): Promise<this>;
    interface: IFlashloanRouterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    _listExtensions: TypedContractMethod<[], [string[]], "view">;
    _registerExtension: TypedContractMethod<[
        extensionToAdd: AddressLike,
        extensionToReplace: AddressLike
    ], [
        void
    ], "nonpayable">;
    _replaceExtensions: TypedContractMethod<[
        extensions: AddressLike[]
    ], [
        void
    ], "nonpayable">;
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
    ionicMarketOfAsset: TypedContractMethod<[
        asset: AddressLike
    ], [
        string
    ], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    receiveFlashLoan: TypedContractMethod<[
        borrowedAsset: AddressLike,
        borrowedAmount: BigNumberish,
        premium: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "_listExtensions"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "_registerExtension"): TypedContractMethod<[
        extensionToAdd: AddressLike,
        extensionToReplace: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "_replaceExtensions"): TypedContractMethod<[extensions: AddressLike[]], [void], "nonpayable">;
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
    getFunction(nameOrSignature: "ionicMarketOfAsset"): TypedContractMethod<[asset: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
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
