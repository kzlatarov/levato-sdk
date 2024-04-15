import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Authority, AuthorityInterface } from "../../Auth.sol/Authority";
export declare class Authority__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "canCall";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "functionSig";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): AuthorityInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Authority;
}
