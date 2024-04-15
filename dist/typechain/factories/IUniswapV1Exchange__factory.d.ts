import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV1Exchange, IUniswapV1ExchangeInterface } from "../IUniswapV1Exchange";
export declare class IUniswapV1Exchange__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "tokenToEthSwapInput";
        readonly inputs: readonly [{
            readonly name: "tokens_sold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "min_eth";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IUniswapV1ExchangeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV1Exchange;
}
