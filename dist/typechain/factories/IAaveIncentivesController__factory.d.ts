import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAaveIncentivesController, IAaveIncentivesControllerInterface } from "../IAaveIncentivesController";
export declare class IAaveIncentivesController__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "handleAction";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "totalSupply";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "userBalance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IAaveIncentivesControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAaveIncentivesController;
}
