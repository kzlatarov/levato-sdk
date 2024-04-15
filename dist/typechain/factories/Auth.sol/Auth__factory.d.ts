import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Auth, AuthInterface } from "../../Auth.sol/Auth";
export declare class Auth__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "authority";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setAuthority";
        readonly inputs: readonly [{
            readonly name: "newAuthority";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AuthorityUpdated";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAuthority";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract Authority";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): AuthInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Auth;
}
