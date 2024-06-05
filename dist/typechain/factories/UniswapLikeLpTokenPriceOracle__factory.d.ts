import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UniswapLikeLpTokenPriceOracle, UniswapLikeLpTokenPriceOracleInterface } from "../UniswapLikeLpTokenPriceOracle";
export declare class UniswapLikeLpTokenPriceOracle__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "price";
        readonly inputs: readonly [{
            readonly name: "underlying";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "wtoken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): UniswapLikeLpTokenPriceOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniswapLikeLpTokenPriceOracle;
}
