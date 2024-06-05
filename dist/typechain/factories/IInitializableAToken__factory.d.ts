import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IInitializableAToken, IInitializableATokenInterface } from "../IInitializableAToken";
export declare class IInitializableAToken__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "contract IPool";
        }, {
            readonly name: "treasury";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "incentivesController";
            readonly type: "address";
            readonly internalType: "contract IAaveIncentivesController";
        }, {
            readonly name: "aTokenDecimals";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "aTokenName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "aTokenSymbol";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "params";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "pool";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "treasury";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "incentivesController";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "aTokenDecimals";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "uint8";
        }, {
            readonly name: "aTokenName";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "aTokenSymbol";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "params";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): IInitializableATokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IInitializableAToken;
}
