import { ContractFactory } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { StdError, StdErrorInterface } from "../../StdError.sol/StdError";
type StdErrorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StdError__factory extends ContractFactory {
    constructor(...args: StdErrorConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<StdError & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): StdError__factory;
    static readonly bytecode = "0x61022d61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061009d5760003560e01c8063986c5f6811610070578063986c5f68146100d8578063b22dc54d146100e0578063b67689da146100e8578063d160e4de146100f0578063fa784a44146100f857600080fd5b806305ee8612146100a257806310332977146100c05780631de45560146100c85780638995290f146100d0575b600080fd5b6100aa610100565b6040516100b791906101cb565b60405180910390f35b6100aa61013b565b6100aa61014d565b6100aa61015f565b6100aa610171565b6100aa610183565b6100aa610195565b6100aa6101a7565b6100aa6101b9565b604051603260248201526044015b60408051601f198184030181529190526020810180516001600160e01b0316634e487b7160e01b17905281565b6040516001602482015260440161010e565b6040516021602482015260440161010e565b6040516011602482015260440161010e565b6040516041602482015260440161010e565b6040516031602482015260440161010e565b6040516051602482015260440161010e565b6040516022602482015260440161010e565b6040516012602482015260440161010e565b600060208083528351808285015260005b818110156101f8578581018301518582016040015282016101dc565b8181111561020a576000604083870101525b50601f01601f191692909201604001939250505056fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "arithmeticError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "assertionError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "divisionError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "encodeStorageError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "enumConversionError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "indexOOBError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "memOverflowError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "popError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "zeroVarError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): StdErrorInterface;
    static connect(address: string, runner?: ContractRunner | null): StdError;
}
export {};
