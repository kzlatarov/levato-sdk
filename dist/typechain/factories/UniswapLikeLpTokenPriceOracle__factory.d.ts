import { type ContractRunner } from "ethers";
import type { UniswapLikeLpTokenPriceOracle, UniswapLikeLpTokenPriceOracleInterface } from "../UniswapLikeLpTokenPriceOracle";
export declare class UniswapLikeLpTokenPriceOracle__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "underlying";
            readonly type: "address";
        }];
        readonly name: "price";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wtoken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): UniswapLikeLpTokenPriceOracleInterface;
    static connect(address: string, runner?: ContractRunner | null): UniswapLikeLpTokenPriceOracle;
}
