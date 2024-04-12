import { type ContractRunner } from "ethers";
import type { IUniswapV1Factory, IUniswapV1FactoryInterface } from "../IUniswapV1Factory";
export declare class IUniswapV1Factory__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getExchange";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IUniswapV1FactoryInterface;
    static connect(address: string, runner?: ContractRunner | null): IUniswapV1Factory;
}
