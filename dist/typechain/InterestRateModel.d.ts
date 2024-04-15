import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface InterestRateModelInterface extends utils.Interface {
    functions: {
        "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
        "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getBorrowRate" | "getSupplyRate"): FunctionFragment;
    encodeFunctionData(functionFragment: "getBorrowRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyRate", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyRate", data: BytesLike): Result;
    events: {};
}
export interface InterestRateModel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: InterestRateModelInterface;
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
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getBorrowRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyRate(cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish, reserveFactorMantissa: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
