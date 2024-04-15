import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IInitializableDebtTokenInterface extends utils.Interface {
    functions: {
        "initialize(address,address,address,uint8,string,string,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initialize"): FunctionFragment;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, BigNumberish, string, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    events: {
        "Initialized(address,address,address,uint8,string,string,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export interface InitializedEventObject {
    underlyingAsset: string;
    pool: string;
    incentivesController: string;
    debtTokenDecimals: number;
    debtTokenName: string;
    debtTokenSymbol: string;
    params: string;
}
export type InitializedEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    string,
    string,
    string
], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface IInitializableDebtToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IInitializableDebtTokenInterface;
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
        initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Initialized(address,address,address,uint8,string,string,bytes)"(underlyingAsset?: string | null, pool?: string | null, incentivesController?: null, debtTokenDecimals?: null, debtTokenName?: null, debtTokenSymbol?: null, params?: null): InitializedEventFilter;
        Initialized(underlyingAsset?: string | null, pool?: string | null, incentivesController?: null, debtTokenDecimals?: null, debtTokenName?: null, debtTokenSymbol?: null, params?: null): InitializedEventFilter;
    };
    estimateGas: {
        initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initialize(pool: string, underlyingAsset: string, incentivesController: string, debtTokenDecimals: BigNumberish, debtTokenName: string, debtTokenSymbol: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
