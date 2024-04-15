import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICreditDelegationTokenInterface extends utils.Interface {
    functions: {
        "approveDelegation(address,uint256)": FunctionFragment;
        "borrowAllowance(address,address)": FunctionFragment;
        "delegationWithSig(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approveDelegation" | "borrowAllowance" | "delegationWithSig"): FunctionFragment;
    encodeFunctionData(functionFragment: "approveDelegation", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "borrowAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "delegationWithSig", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "approveDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegationWithSig", data: BytesLike): Result;
    events: {
        "BorrowAllowanceDelegated(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BorrowAllowanceDelegated"): EventFragment;
}
export interface BorrowAllowanceDelegatedEventObject {
    fromUser: string;
    toUser: string;
    asset: string;
    amount: BigNumber;
}
export type BorrowAllowanceDelegatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], BorrowAllowanceDelegatedEventObject>;
export type BorrowAllowanceDelegatedEventFilter = TypedEventFilter<BorrowAllowanceDelegatedEvent>;
export interface ICreditDelegationToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICreditDelegationTokenInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        approveDelegation(delegatee: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        borrowAllowance(fromUser: string, toUser: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        delegationWithSig(delegator: string, delegatee: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    approveDelegation(delegatee: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    borrowAllowance(fromUser: string, toUser: string, overrides?: CallOverrides): Promise<BigNumber>;
    delegationWithSig(delegator: string, delegatee: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        approveDelegation(delegatee: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        borrowAllowance(fromUser: string, toUser: string, overrides?: CallOverrides): Promise<BigNumber>;
        delegationWithSig(delegator: string, delegatee: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BorrowAllowanceDelegated(address,address,address,uint256)"(fromUser?: string | null, toUser?: string | null, asset?: string | null, amount?: null): BorrowAllowanceDelegatedEventFilter;
        BorrowAllowanceDelegated(fromUser?: string | null, toUser?: string | null, asset?: string | null, amount?: null): BorrowAllowanceDelegatedEventFilter;
    };
    estimateGas: {
        approveDelegation(delegatee: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        borrowAllowance(fromUser: string, toUser: string, overrides?: CallOverrides): Promise<BigNumber>;
        delegationWithSig(delegator: string, delegatee: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approveDelegation(delegatee: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        borrowAllowance(fromUser: string, toUser: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegationWithSig(delegator: string, delegatee: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
