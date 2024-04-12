import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../common";
export interface IATokenInterface extends Interface {
    getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "RESERVE_TREASURY_ADDRESS" | "UNDERLYING_ASSET_ADDRESS" | "allowance" | "approve" | "balanceOf" | "burn" | "getPreviousIndex" | "getScaledUserBalanceAndSupply" | "handleRepayment" | "initialize" | "mint" | "mintToTreasury" | "nonces" | "permit" | "rescueTokens" | "scaledBalanceOf" | "scaledTotalSupply" | "totalSupply" | "transfer" | "transferFrom" | "transferOnLiquidation" | "transferUnderlyingTo"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Approval" | "BalanceTransfer" | "Burn" | "Initialized" | "Mint" | "Transfer"): EventFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "RESERVE_TREASURY_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "UNDERLYING_ASSET_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPreviousIndex", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getScaledUserBalanceAndSupply", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "handleRepayment", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        string,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike, AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintToTreasury", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "permit", values: [
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "rescueTokens", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "scaledBalanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "scaledTotalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOnLiquidation", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferUnderlyingTo", values: [AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RESERVE_TREASURY_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UNDERLYING_ASSET_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPreviousIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScaledUserBalanceAndSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleRepayment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledBalanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOnLiquidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferUnderlyingTo", data: BytesLike): Result;
}
export declare namespace ApprovalEvent {
    type InputTuple = [
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [owner: string, spender: string, value: bigint];
    interface OutputObject {
        owner: string;
        spender: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BalanceTransferEvent {
    type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish,
        index: BigNumberish
    ];
    type OutputTuple = [
        from: string,
        to: string,
        value: bigint,
        index: bigint
    ];
    interface OutputObject {
        from: string;
        to: string;
        value: bigint;
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
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
        treasury: AddressLike,
        incentivesController: AddressLike,
        aTokenDecimals: BigNumberish,
        aTokenName: string,
        aTokenSymbol: string,
        params: BytesLike
    ];
    type OutputTuple = [
        underlyingAsset: string,
        pool: string,
        treasury: string,
        incentivesController: string,
        aTokenDecimals: bigint,
        aTokenName: string,
        aTokenSymbol: string,
        params: string
    ];
    interface OutputObject {
        underlyingAsset: string;
        pool: string;
        treasury: string;
        incentivesController: string;
        aTokenDecimals: bigint;
        aTokenName: string;
        aTokenSymbol: string;
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
export declare namespace TransferEvent {
    type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [from: string, to: string, value: bigint];
    interface OutputObject {
        from: string;
        to: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
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
    DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;
    RESERVE_TREASURY_ADDRESS: TypedContractMethod<[], [string], "view">;
    UNDERLYING_ASSET_ADDRESS: TypedContractMethod<[], [string], "view">;
    allowance: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    burn: TypedContractMethod<[
        from: AddressLike,
        receiverOfUnderlying: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getPreviousIndex: TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getScaledUserBalanceAndSupply: TypedContractMethod<[
        user: AddressLike
    ], [
        [bigint, bigint]
    ], "view">;
    handleRepayment: TypedContractMethod<[
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    initialize: TypedContractMethod<[
        pool: AddressLike,
        treasury: AddressLike,
        underlyingAsset: AddressLike,
        incentivesController: AddressLike,
        aTokenDecimals: BigNumberish,
        aTokenName: string,
        aTokenSymbol: string,
        params: BytesLike
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
    nonces: TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    permit: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    rescueTokens: TypedContractMethod<[
        token: AddressLike,
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    scaledBalanceOf: TypedContractMethod<[user: AddressLike], [bigint], "view">;
    scaledTotalSupply: TypedContractMethod<[], [bigint], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        sender: AddressLike,
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
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
    getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "RESERVE_TREASURY_ADDRESS"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "UNDERLYING_ASSET_ADDRESS"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        from: AddressLike,
        receiverOfUnderlying: AddressLike,
        amount: BigNumberish,
        index: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getPreviousIndex"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getScaledUserBalanceAndSupply"): TypedContractMethod<[user: AddressLike], [[bigint, bigint]], "view">;
    getFunction(nameOrSignature: "handleRepayment"): TypedContractMethod<[
        user: AddressLike,
        onBehalfOf: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        pool: AddressLike,
        treasury: AddressLike,
        underlyingAsset: AddressLike,
        incentivesController: AddressLike,
        aTokenDecimals: BigNumberish,
        aTokenName: string,
        aTokenSymbol: string,
        params: BytesLike
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
    getFunction(nameOrSignature: "nonces"): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "permit"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "rescueTokens"): TypedContractMethod<[
        token: AddressLike,
        to: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "scaledBalanceOf"): TypedContractMethod<[user: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "scaledTotalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        sender: AddressLike,
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
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
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "BalanceTransfer"): TypedContractEvent<BalanceTransferEvent.InputTuple, BalanceTransferEvent.OutputTuple, BalanceTransferEvent.OutputObject>;
    getEvent(key: "Burn"): TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Mint"): TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    filters: {
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "BalanceTransfer(address,address,uint256,uint256)": TypedContractEvent<BalanceTransferEvent.InputTuple, BalanceTransferEvent.OutputTuple, BalanceTransferEvent.OutputObject>;
        BalanceTransfer: TypedContractEvent<BalanceTransferEvent.InputTuple, BalanceTransferEvent.OutputTuple, BalanceTransferEvent.OutputObject>;
        "Burn(address,address,uint256,uint256,uint256)": TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        Burn: TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        "Initialized(address,address,address,address,uint8,string,string,bytes)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Mint(address,address,uint256,uint256,uint256)": TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        Mint: TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    };
}
