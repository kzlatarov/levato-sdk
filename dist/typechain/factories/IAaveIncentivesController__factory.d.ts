import { type ContractRunner } from "ethers";
import type { IAaveIncentivesController, IAaveIncentivesControllerInterface } from "../IAaveIncentivesController";
export declare class IAaveIncentivesController__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "userBalance";
            readonly type: "uint256";
        }];
        readonly name: "handleAction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IAaveIncentivesControllerInterface;
    static connect(address: string, runner?: ContractRunner | null): IAaveIncentivesController;
}
