import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FakeErc20, FakeErc20Interface } from "../../DevTesting.t.sol/FakeErc20";
export declare class FakeErc20__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FakeErc20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): FakeErc20;
}
