import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface IVariableDebtTokenInterface extends Interface {
    getFunction(nameOrSignature: "UNDERLYING_ASSET_ADDRESS" | "burn" | "getPreviousIndex" | "getScaledUserBalanceAndSupply" | "initialize" | "mint" | "scaledBalanceOf" | "scaledTotalSupply"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Burn" | "Initialized" | "Mint"): EventFragment;
    encodeFunctionData(functionFragment: "UNDERLYING_ASSET_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPreviousIndex", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getScaledUserBalanceAndSupply", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        string,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "scaledBalanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "scaledTotalSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "UNDERLYING_ASSET_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPreviousIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScaledUserBalanceAndSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledTotalSupply", data: BytesLike): Result;
}
export declare namespace BurnEvent {
    type InputTuple = [
        from: AddressLike,
        target: AddressLike,
        value: BigNumberish,
        balanceIncrease: BigNumberish,
        index: BigNumberish
    ];
    type OutputTuple = [
        from: string,
        target: string,
        value: bigint,
        balanceIncrease: bigint,
        index: bigint
    ];
    interface OutputObject {
        from: string;
        target: string;
        value: bigint;
        balanceIncrease: bigint;
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InitializedEvent {
    type InputTuple = [
        underlyingAsset: AddressLike,
        pool: AddressLike,
        incentivesController: AddressLike,
        debtTokenDecimals: BigNumberish,
        debtTokenName: string,
        debtTokenSymbol: string,
        params: BytesLike
    ];
    type OutputTuple = [
        underlyingAsset: string,
        pool: string,
        incentivesController: string,
        debtTokenDecimals: bigint,
        debtTokenName: string,
        debtTokenSymbol: string,
        params: string
    ];
    interface OutputObject {
        underlyingAsset: string;
        pool: string;
        incentivesController: string;
        debtTokenDecimals: bigint;
        debtTokenName: string;
        debtTokenSymbol: string;
        params: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MintEvent {
    type InputTuple = [
        caller: AddressLike,
        onBehalfOf: AddressLike,
        value: BigNumberish,
        balanceIncrease: BigNumberish,
        index: BigNumberish
    ];
    type OutputTuple = [
        caller: string,
        onBehalfOf: string,
        value: bigint,
        balanceIncrease: bigint,
        index: bigint
    ];
    interface OutputObject {
        caller: string;
        onBehalfOf: string;
        value: bigint;
        balanceIncrease: bigint;
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IVariableDebtToken extends BaseContract {
    connect(runner?: ContractRunner | null): IVariableDebtToken;
    waitForDeployment(): Promise<this>;
    interface: IVariableDebtTokenInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    UNDERLYING_ASSET_ADDRESS: TypedContractMethod<[], [string], "view">;
    burn: TypedContractMethod<[
        from: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getPreviousIndex: TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getScaledUserBalanceAndSupply: TypedContractMethod<[
        user: AddressLike
    ], [
        [bigint, bigint]
    ], "view">;
    initialize: TypedContractMethod<[
        pool: AddressLike,
        underlyingAsset: AddressLike,
        incentivesController: AddressLike,
        debtTokenDecimals: BigNumberish,
        debtTokenName: string,
        debtTokenSymbol: string,
        params: BytesLike
    ], [
        void
    ], "nonpayable">;
    mint: TypedContractMethod<[
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        [boolean, bigint]
    ], "nonpayable">;
    scaledBalanceOf: TypedContractMethod<[user: AddressLike], [bigint], "view">;
    scaledTotalSupply: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "UNDERLYING_ASSET_ADDRESS"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        from: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "getPreviousIndex"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getScaledUserBalanceAndSupply"): TypedContractMethod<[user: AddressLike], [[bigint, bigint]], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        pool: AddressLike,
        underlyingAsset: AddressLike,
        incentivesController: AddressLike,
        debtTokenDecimals: BigNumberish,
        debtTokenName: string,
        debtTokenSymbol: string,
        params: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        [boolean, bigint]
    ], "nonpayable">;
    getFunction(nameOrSignature: "scaledBalanceOf"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "scaledTotalSupply"): TypedContractMethod<[], [bigint], "view">;
    getEvent(key: "Burn"): TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Mint"): TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
    filters: {
        "Burn(address,address,uint256,uint256,uint256)": TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        Burn: TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        "Initialized(address,address,address,uint8,string,string,bytes)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Mint(address,address,uint256,uint256,uint256)": TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        Mint: TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
    };
}
