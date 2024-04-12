import { type ContractRunner } from "ethers";
import type { BasePriceOracle, BasePriceOracleInterface } from "../BasePriceOracle";
export declare class BasePriceOracle__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IonicCErc20";
            readonly name: "cToken";
            readonly type: "address";
        }];
        readonly name: "getUnderlyingPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
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
    }];
    static createInterface(): BasePriceOracleInterface;
    static connect(address: string, runner?: ContractRunner | null): BasePriceOracle;
}
