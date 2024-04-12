import { type ContractRunner } from "ethers";
import type { IPriceOracleGetter, IPriceOracleGetterInterface } from "../IPriceOracleGetter";
export declare class IPriceOracleGetter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "BASE_CURRENCY";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASE_CURRENCY_UNIT";
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
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "getAssetPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IPriceOracleGetterInterface;
    static connect(address: string, runner?: ContractRunner | null): IPriceOracleGetter;
}
