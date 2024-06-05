import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReserveConfiguration, ReserveConfigurationInterface } from "../ReserveConfiguration";
type ReserveConfigurationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReserveConfiguration__factory extends ContractFactory {
    constructor(...args: ReserveConfigurationConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<ReserveConfiguration>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ReserveConfiguration;
    connect(signer: Signer): ReserveConfiguration__factory;
    static readonly bytecode = "0x6082610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c8063280d5de914604257806331b561ba14605c575b600080fd5b6049600281565b6040519081526020015b60405180910390f35b6063608081565b60405161ffff9091168152602001605356fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "DEBT_CEILING_DECIMALS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MAX_RESERVES_COUNT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ReserveConfigurationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReserveConfiguration;
}
export {};
