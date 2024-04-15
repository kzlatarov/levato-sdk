import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IInitializableDebtToken, IInitializableDebtTokenInterface } from "../IInitializableDebtToken";
export declare class IInitializableDebtToken__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "contract IPool";
        }, {
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "incentivesController";
            readonly type: "address";
            readonly internalType: "contract IAaveIncentivesController";
        }, {
            readonly name: "debtTokenDecimals";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "debtTokenName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "debtTokenSymbol";
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
            readonly name: "incentivesController";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "debtTokenDecimals";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "uint8";
        }, {
            readonly name: "debtTokenName";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "debtTokenSymbol";
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
    static createInterface(): IInitializableDebtTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IInitializableDebtToken;
}
