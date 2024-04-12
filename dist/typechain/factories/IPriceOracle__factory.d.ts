import { type ContractRunner } from "ethers";
import type { IPriceOracle, IPriceOracleInterface } from "../IPriceOracle";
export declare class IPriceOracle__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
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
    static createInterface(): IPriceOracleInterface;
    static connect(address: string, runner?: ContractRunner | null): IPriceOracle;
}
