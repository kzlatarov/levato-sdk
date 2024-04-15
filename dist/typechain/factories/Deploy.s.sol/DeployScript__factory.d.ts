import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DeployScript, DeployScriptInterface } from "../../Deploy.s.sol/DeployScript";
type DeployScriptConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DeployScript__factory extends ContractFactory {
    constructor(...args: DeployScriptConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<DeployScript>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): DeployScript;
    connect(signer: Signer): DeployScript__factory;
    static readonly bytecode = "0x608060405260048054600160ff199182168117909255600c8054909116909117905534801561002d57600080fd5b506101378061003d6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630a9254e41461005c5780632cebdeb214610066578063c040622614610064578063c8744dd81461009b578063f8ccbf47146100b1575b600080fd5b6100646100ce565b005b600c5461007e9061010090046001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100a3608981565b604051908152602001610092565b600c546100be9060ff1681565b6040519015158152602001610092565b608946141561012857600c8054740d500b1d8e8ef31e21c99d1db9a6444d3adf127000610100600160a81b0319909116179055600d80546001600160a01b031916732b9a599e910daeb69dd3b80be180c8d20e5049951790555b56fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "IS_SCRIPT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "POLYGON";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "run";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setUp";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "wnative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): DeployScriptInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DeployScript;
}
export {};
