import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IFlashloanRouterStorageInterface extends utils.Interface {
    functions: {
        "ionicMarketOfAsset(address)": FunctionFragment;
        "owner()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ionicMarketOfAsset" | "owner"): FunctionFragment;
    encodeFunctionData(functionFragment: "ionicMarketOfAsset", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ionicMarketOfAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    events: {};
}
export interface IFlashloanRouterStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IFlashloanRouterStorageInterface;
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
        ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
    };
    ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ionicMarketOfAsset(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
