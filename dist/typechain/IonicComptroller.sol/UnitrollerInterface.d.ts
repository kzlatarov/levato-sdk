import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface UnitrollerInterfaceInterface extends utils.Interface {
    functions: {
        "_acceptAdmin()": FunctionFragment;
        "_setPendingAdmin(address)": FunctionFragment;
        "_toggleAdminRights(bool)": FunctionFragment;
        "_upgrade()": FunctionFragment;
        "comptrollerImplementation()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_acceptAdmin" | "_setPendingAdmin" | "_toggleAdminRights" | "_upgrade" | "comptrollerImplementation"): FunctionFragment;
    encodeFunctionData(functionFragment: "_acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setPendingAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "_toggleAdminRights", values: [boolean]): string;
    encodeFunctionData(functionFragment: "_upgrade", values?: undefined): string;
    encodeFunctionData(functionFragment: "comptrollerImplementation", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setPendingAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_toggleAdminRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_upgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "comptrollerImplementation", data: BytesLike): Result;
    events: {};
}
export interface UnitrollerInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UnitrollerInterfaceInterface;
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
        _acceptAdmin(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _toggleAdminRights(hasRights: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;
    };
    _acceptAdmin(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _toggleAdminRights(hasRights: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _upgrade(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _acceptAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: CallOverrides): Promise<BigNumber>;
        _toggleAdminRights(hasRights: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        _upgrade(overrides?: CallOverrides): Promise<void>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        _acceptAdmin(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _toggleAdminRights(hasRights: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _acceptAdmin(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _setPendingAdmin(newPendingAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _toggleAdminRights(hasRights: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _upgrade(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        comptrollerImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
