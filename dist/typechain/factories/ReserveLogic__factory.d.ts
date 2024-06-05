import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReserveLogic, ReserveLogicInterface } from "../ReserveLogic";
type ReserveLogicConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReserveLogic__factory extends ContractFactory {
    constructor(...args: ReserveLogicConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<ReserveLogic>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ReserveLogic;
    connect(signer: Signer): ReserveLogic__factory;
    static readonly bytecode = "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "ReserveDataUpdated";
        readonly inputs: readonly [{
            readonly name: "reserve";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "liquidityRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "stableBorrowRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "variableBorrowRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidityIndex";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "variableBorrowIndex";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ReserveLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReserveLogic;
}
export {};
