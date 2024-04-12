import { type ContractRunner } from "ethers";
import type { IUniswapV1Exchange, IUniswapV1ExchangeInterface } from "../IUniswapV1Exchange";
export declare class IUniswapV1Exchange__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokens_sold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "min_eth";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "tokenToEthSwapInput";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV1ExchangeInterface;
    static connect(address: string, runner?: ContractRunner | null): IUniswapV1Exchange;
}
