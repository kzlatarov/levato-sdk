import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BasePriceOracle, BasePriceOracleInterface } from "../BasePriceOracle";
export declare class BasePriceOracle__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getUnderlyingPrice";
        readonly inputs: readonly [{
            readonly name: "cToken";
            readonly type: "address";
            readonly internalType: "contract IonicCErc20";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
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
    }];
    static createInterface(): BasePriceOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BasePriceOracle;
}
