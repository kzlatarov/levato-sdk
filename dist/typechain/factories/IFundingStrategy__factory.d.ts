import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFundingStrategy, IFundingStrategyInterface } from "../IFundingStrategy";
export declare class IFundingStrategy__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "redeem";
        readonly inputs: readonly [{
            readonly name: "inputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "strategyData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "outputToken";
            readonly type: "address";
            readonly internalType: "contract IERC20Upgradeable";
        }, {
            readonly name: "outputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IFundingStrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFundingStrategy;
}
