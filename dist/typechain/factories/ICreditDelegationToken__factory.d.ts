import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICreditDelegationToken, ICreditDelegationTokenInterface } from "../ICreditDelegationToken";
export declare class ICreditDelegationToken__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "approveDelegation";
        readonly inputs: readonly [{
            readonly name: "delegatee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "borrowAllowance";
        readonly inputs: readonly [{
            readonly name: "fromUser";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "toUser";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "delegationWithSig";
        readonly inputs: readonly [{
            readonly name: "delegator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "delegatee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "BorrowAllowanceDelegated";
        readonly inputs: readonly [{
            readonly name: "fromUser";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "toUser";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "asset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ICreditDelegationTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICreditDelegationToken;
}
