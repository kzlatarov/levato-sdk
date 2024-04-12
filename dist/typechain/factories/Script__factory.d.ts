import { type ContractRunner } from "ethers";
import type { Script, ScriptInterface } from "../Script";
export declare class Script__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "IS_SCRIPT";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ScriptInterface;
    static connect(address: string, runner?: ContractRunner | null): Script;
}
