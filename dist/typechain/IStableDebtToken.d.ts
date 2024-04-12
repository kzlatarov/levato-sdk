import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface IStableDebtTokenInterface extends Interface {
    getFunction(nameOrSignature: "UNDERLYING_ASSET_ADDRESS" | "burn" | "getAverageStableRate" | "getSupplyData" | "getTotalSupplyAndAvgRate" | "getTotalSupplyLastUpdated" | "getUserLastUpdated" | "getUserStableRate" | "initialize" | "mint" | "principalBalanceOf"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Burn" | "Initialized" | "Mint"): EventFragment;
    encodeFunctionData(functionFragment: "UNDERLYING_ASSET_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAverageStableRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSupplyData", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSupplyAndAvgRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSupplyLastUpdated", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserLastUpdated", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getUserStableRate", values: [AddressLike]): string;
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
    encodeFunctionData(functionFragment: "principalBalanceOf", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "UNDERLYING_ASSET_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAverageStableRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSupplyAndAvgRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSupplyLastUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserLastUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserStableRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "principalBalanceOf", data: BytesLike): Result;
}
export declare namespace BurnEvent {
    type InputTuple = [
        from: AddressLike,
        amount: BigNumberish,
        currentBalance: BigNumberish,
        balanceIncrease: BigNumberish,
        avgStableRate: BigNumberish,
        newTotalSupply: BigNumberish
    ];
    type OutputTuple = [
        from: string,
        amount: bigint,
        currentBalance: bigint,
        balanceIncrease: bigint,
        avgStableRate: bigint,
        newTotalSupply: bigint
    ];
    interface OutputObject {
        from: string;
        amount: bigint;
        currentBalance: bigint;
        balanceIncrease: bigint;
        avgStableRate: bigint;
        newTotalSupply: bigint;
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
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish,
        currentBalance: BigNumberish,
        balanceIncrease: BigNumberish,
        newRate: BigNumberish,
        avgStableRate: BigNumberish,
        newTotalSupply: BigNumberish
    ];
    type OutputTuple = [
        user: string,
        onBehalfOf: string,
        amount: bigint,
        currentBalance: bigint,
        balanceIncrease: bigint,
        newRate: bigint,
        avgStableRate: bigint,
        newTotalSupply: bigint
    ];
    interface OutputObject {
        user: string;
        onBehalfOf: string;
        amount: bigint;
        currentBalance: bigint;
        balanceIncrease: bigint;
        newRate: bigint;
        avgStableRate: bigint;
        newTotalSupply: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IStableDebtToken extends BaseContract {
    connect(runner?: ContractRunner | null): IStableDebtToken;
    waitForDeployment(): Promise<this>;
    interface: IStableDebtTokenInterface;
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
        amount: BigNumberish
    ], [
        [bigint, bigint]
    ], "nonpayable">;
    getAverageStableRate: TypedContractMethod<[], [bigint], "view">;
    getSupplyData: TypedContractMethod<[
    ], [
        [bigint, bigint, bigint, bigint]
    ], "view">;
    getTotalSupplyAndAvgRate: TypedContractMethod<[], [[bigint, bigint]], "view">;
    getTotalSupplyLastUpdated: TypedContractMethod<[], [bigint], "view">;
    getUserLastUpdated: TypedContractMethod<[
        user: AddressLike
    ], [
        bigint
    ], "view">;
    getUserStableRate: TypedContractMethod<[user: AddressLike], [bigint], "view">;
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
        rate: BigNumberish
    ], [
        [boolean, bigint, bigint]
    ], "nonpayable">;
    principalBalanceOf: TypedContractMethod<[
        user: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "UNDERLYING_ASSET_ADDRESS"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        from: AddressLike,
        amount: BigNumberish
    ], [
        [bigint, bigint]
    ], "nonpayable">;
    getFunction(nameOrSignature: "getAverageStableRate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getSupplyData"): TypedContractMethod<[], [[bigint, bigint, bigint, bigint]], "view">;
    getFunction(nameOrSignature: "getTotalSupplyAndAvgRate"): TypedContractMethod<[], [[bigint, bigint]], "view">;
    getFunction(nameOrSignature: "getTotalSupplyLastUpdated"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getUserLastUpdated"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getUserStableRate"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
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
        rate: BigNumberish
    ], [
        [boolean, bigint, bigint]
    ], "nonpayable">;
    getFunction(nameOrSignature: "principalBalanceOf"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getEvent(key: "Burn"): TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Mint"): TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
    filters: {
        "Burn(address,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        Burn: TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        "Initialized(address,address,address,uint8,string,string,bytes)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Mint(address,address,uint256,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        Mint: TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
    };
}
