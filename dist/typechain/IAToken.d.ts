import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "./common";
export interface IATokenInterface extends Interface {
    getFunction(nameOrSignature: "POOL" | "UNDERLYING_ASSET_ADDRESS" | "burn" | "getPreviousIndex" | "handleRepayment" | "mint" | "mintToTreasury" | "transferOnLiquidation" | "transferUnderlyingTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNDERLYING_ASSET_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPreviousIndex", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "handleRepayment", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintToTreasury", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOnLiquidation", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferUnderlyingTo", values: [AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNDERLYING_ASSET_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPreviousIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleRepayment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOnLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferUnderlyingTo", data: BytesLike): Result;
}
export interface IAToken extends BaseContract {
    connect(runner?: ContractRunner | null): IAToken;
    waitForDeployment(): Promise<this>;
    interface: IATokenInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    POOL: TypedContractMethod<[], [string], "view">;
    UNDERLYING_ASSET_ADDRESS: TypedContractMethod<[], [string], "view">;
    burn: TypedContractMethod<[
        from: AddressLike,
        receiverOfUnderlying: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getPreviousIndex: TypedContractMethod<[user: AddressLike], [bigint], "view">;
    handleRepayment: TypedContractMethod<[
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    mint: TypedContractMethod<[
        caller: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    mintToTreasury: TypedContractMethod<[
        amount: BigNumberish,
        index: BigNumberish
    ], [
        void
    ], "nonpayable">;
    transferOnLiquidation: TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    transferUnderlyingTo: TypedContractMethod<[
        target: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "POOL"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UNDERLYING_ASSET_ADDRESS"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        from: AddressLike,
        receiverOfUnderlying: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getPreviousIndex"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "handleRepayment"): TypedContractMethod<[
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        caller: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "mintToTreasury"): TypedContractMethod<[
        amount: BigNumberish,
        index: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferOnLiquidation"): TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferUnderlyingTo"): TypedContractMethod<[
        target: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
