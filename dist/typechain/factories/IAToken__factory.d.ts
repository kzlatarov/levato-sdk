import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAToken, IATokenInterface } from "../IAToken";
export declare class IAToken__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "POOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ILendingPool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "UNDERLYING_ASSET_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "burn";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiverOfUnderlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getPreviousIndex";
        readonly inputs: readonly [{
            readonly name: "user";
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
        readonly name: "handleRepayment";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mint";
        readonly inputs: readonly [{
            readonly name: "caller";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "onBehalfOf";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mintToTreasury";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOnLiquidation";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferUnderlyingTo";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IATokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAToken;
}
