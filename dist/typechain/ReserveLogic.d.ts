import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ReserveLogicInterface extends utils.Interface {
    functions: {};
    events: {
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ReserveDataUpdated"): EventFragment;
}
export interface ReserveDataUpdatedEventObject {
    reserve: string;
    liquidityRate: BigNumber;
    stableBorrowRate: BigNumber;
    variableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
}
export type ReserveDataUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ReserveDataUpdatedEventObject>;
export type ReserveDataUpdatedEventFilter = TypedEventFilter<ReserveDataUpdatedEvent>;
export interface ReserveLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReserveLogicInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)"(reserve?: string | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
        ReserveDataUpdated(reserve?: string | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
