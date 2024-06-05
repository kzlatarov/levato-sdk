import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPriceOracleGetter, IPriceOracleGetterInterface } from "../IPriceOracleGetter";
export declare class IPriceOracleGetter__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "BASE_CURRENCY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "BASE_CURRENCY_UNIT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAssetPrice";
        readonly inputs: readonly [{
            readonly name: "asset";
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
    static createInterface(): IPriceOracleGetterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPriceOracleGetter;
}
