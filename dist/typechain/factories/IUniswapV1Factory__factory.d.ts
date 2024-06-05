import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV1Factory, IUniswapV1FactoryInterface } from "../IUniswapV1Factory";
export declare class IUniswapV1Factory__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getExchange";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IUniswapV1FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV1Factory;
}
