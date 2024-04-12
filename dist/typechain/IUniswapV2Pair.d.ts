import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface IUniswapV2PairInterface extends Interface {
    getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "MINIMUM_LIQUIDITY" | "PERMIT_TYPEHASH" | "allowance" | "approve" | "balanceOf" | "burn" | "decimals" | "factory" | "getReserves" | "initialize" | "kLast" | "mint" | "name" | "nonces" | "permit" | "price0CumulativeLast" | "price1CumulativeLast" | "skim" | "swap" | "symbol" | "sync" | "token0" | "token1" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Approval" | "Burn" | "Mint" | "Swap" | "Sync" | "Transfer"): EventFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINIMUM_LIQUIDITY", values?: undefined): string;
    encodeFunctionData(functionFragment: "PERMIT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReserves", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "kLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "price0CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "price1CumulativeLast", values?: undefined): string;
    encodeFunctionData(functionFragment: "skim", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "swap", values: [BigNumberish, BigNumberish, AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "sync", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINIMUM_LIQUIDITY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PERMIT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price0CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "price1CumulativeLast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
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
export declare namespace BurnEvent {
    type InputTuple = [
        sender: AddressLike,
        amount0: BigNumberish,
        amount1: BigNumberish,
        to: AddressLike
    ];
    type OutputTuple = [
        sender: string,
        amount0: bigint,
        amount1: bigint,
        to: string
    ];
    interface OutputObject {
        sender: string;
        amount0: bigint;
        amount1: bigint;
        to: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MintEvent {
    type InputTuple = [
        sender: AddressLike,
        amount0: BigNumberish,
        amount1: BigNumberish
    ];
    type OutputTuple = [sender: string, amount0: bigint, amount1: bigint];
    interface OutputObject {
        sender: string;
        amount0: bigint;
        amount1: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SwapEvent {
    type InputTuple = [
        sender: AddressLike,
        amount0In: BigNumberish,
        amount1In: BigNumberish,
        amount0Out: BigNumberish,
        amount1Out: BigNumberish,
        to: AddressLike
    ];
    type OutputTuple = [
        sender: string,
        amount0In: bigint,
        amount1In: bigint,
        amount0Out: bigint,
        amount1Out: bigint,
        to: string
    ];
    interface OutputObject {
        sender: string;
        amount0In: bigint;
        amount1In: bigint;
        amount0Out: bigint;
        amount1Out: bigint;
        to: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SyncEvent {
    type InputTuple = [reserve0: BigNumberish, reserve1: BigNumberish];
    type OutputTuple = [reserve0: bigint, reserve1: bigint];
    interface OutputObject {
        reserve0: bigint;
        reserve1: bigint;
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
export interface IUniswapV2Pair extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV2Pair;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV2PairInterface;
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
    MINIMUM_LIQUIDITY: TypedContractMethod<[], [bigint], "view">;
    PERMIT_TYPEHASH: TypedContractMethod<[], [string], "view">;
    allowance: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    approve: TypedContractMethod<[
        spender: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    burn: TypedContractMethod<[
        to: AddressLike
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    factory: TypedContractMethod<[], [string], "view">;
    getReserves: TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            reserve0: bigint;
            reserve1: bigint;
            blockTimestampLast: bigint;
        }
    ], "view">;
    initialize: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        void
    ], "nonpayable">;
    kLast: TypedContractMethod<[], [bigint], "view">;
    mint: TypedContractMethod<[to: AddressLike], [bigint], "nonpayable">;
    name: TypedContractMethod<[], [string], "view">;
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
    price0CumulativeLast: TypedContractMethod<[], [bigint], "view">;
    price1CumulativeLast: TypedContractMethod<[], [bigint], "view">;
    skim: TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
    swap: TypedContractMethod<[
        amount0Out: BigNumberish,
        amount1Out: BigNumberish,
        to: AddressLike,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    symbol: TypedContractMethod<[], [string], "view">;
    sync: TypedContractMethod<[], [void], "nonpayable">;
    token0: TypedContractMethod<[], [string], "view">;
    token1: TypedContractMethod<[], [string], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MINIMUM_LIQUIDITY"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "PERMIT_TYPEHASH"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        spender: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        to: AddressLike
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "factory"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getReserves"): TypedContractMethod<[
    ], [
        [
            bigint,
            bigint,
            bigint
        ] & {
            reserve0: bigint;
            reserve1: bigint;
            blockTimestampLast: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "kLast"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[to: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "price0CumulativeLast"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "price1CumulativeLast"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "skim"): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        amount0Out: BigNumberish,
        amount1Out: BigNumberish,
        to: AddressLike,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "sync"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "token0"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "token1"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "Burn"): TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
    getEvent(key: "Mint"): TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
    getEvent(key: "Swap"): TypedContractEvent<SwapEvent.InputTuple, SwapEvent.OutputTuple, SwapEvent.OutputObject>;
    getEvent(key: "Sync"): TypedContractEvent<SyncEvent.InputTuple, SyncEvent.OutputTuple, SyncEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    filters: {
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "Burn(address,uint256,uint256,address)": TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        Burn: TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        "Mint(address,uint256,uint256)": TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        Mint: TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        "Swap(address,uint256,uint256,uint256,uint256,address)": TypedContractEvent<SwapEvent.InputTuple, SwapEvent.OutputTuple, SwapEvent.OutputObject>;
        Swap: TypedContractEvent<SwapEvent.InputTuple, SwapEvent.OutputTuple, SwapEvent.OutputObject>;
        "Sync(uint112,uint112)": TypedContractEvent<SyncEvent.InputTuple, SyncEvent.OutputTuple, SyncEvent.OutputObject>;
        Sync: TypedContractEvent<SyncEvent.InputTuple, SyncEvent.OutputTuple, SyncEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    };
}
