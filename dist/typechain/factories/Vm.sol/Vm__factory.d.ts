import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Vm, VmInterface } from "../../Vm.sol/Vm";
export declare class Vm__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "accesses";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "readSlots";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "writeSlots";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "activeFork";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "addr";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "allowCheatcodes";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "assume";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "breakpoint";
        readonly inputs: readonly [{
            readonly name: "char";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "breakpoint";
        readonly inputs: readonly [{
            readonly name: "char";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "chainId";
        readonly inputs: readonly [{
            readonly name: "newChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "clearMockedCalls";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "closeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "coinbase";
        readonly inputs: readonly [{
            readonly name: "newCoinbase";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "recursive";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createFork";
        readonly inputs: readonly [{
            readonly name: "urlOrAlias";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createFork";
        readonly inputs: readonly [{
            readonly name: "urlOrAlias";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createFork";
        readonly inputs: readonly [{
            readonly name: "urlOrAlias";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createSelectFork";
        readonly inputs: readonly [{
            readonly name: "urlOrAlias";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createSelectFork";
        readonly inputs: readonly [{
            readonly name: "urlOrAlias";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createSelectFork";
        readonly inputs: readonly [{
            readonly name: "urlOrAlias";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deal";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newBalance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "derivationPath";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "difficulty";
        readonly inputs: readonly [{
            readonly name: "newDifficulty";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envAddress";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envAddress";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBool";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBool";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes32";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes32";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envInt";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envInt";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envString";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envString";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envUint";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envUint";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "etch";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newRuntimeBytecode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectCall";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gas";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectCall";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gas";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "count";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectCall";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "count";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectCall";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectCall";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "count";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectCall";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectCallMinGas";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minGas";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectCallMinGas";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "minGas";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "count";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectEmit";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectEmit";
        readonly inputs: readonly [{
            readonly name: "checkTopic1";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "checkTopic2";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "checkTopic3";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "checkData";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectEmit";
        readonly inputs: readonly [{
            readonly name: "checkTopic1";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "checkTopic2";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "checkTopic3";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "checkData";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "emitter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectEmit";
        readonly inputs: readonly [{
            readonly name: "emitter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectRevert";
        readonly inputs: readonly [{
            readonly name: "revertData";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectRevert";
        readonly inputs: readonly [{
            readonly name: "revertData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectRevert";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectSafeMemory";
        readonly inputs: readonly [{
            readonly name: "min";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "max";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "expectSafeMemoryCall";
        readonly inputs: readonly [{
            readonly name: "min";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "max";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "fee";
        readonly inputs: readonly [{
            readonly name: "newBasefee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ffi";
        readonly inputs: readonly [{
            readonly name: "commandInput";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "fsMetadata";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "metadata";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.FsMetadata";
            readonly components: readonly [{
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "length";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "readOnly";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "modified";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "accessed";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "created";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "creationBytecode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployedCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "runtimeBytecode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLabel";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "currentLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getNonce";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getRecordedLogs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "logs";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.Log[]";
            readonly components: readonly [{
                readonly name: "topics";
                readonly type: "bytes32[]";
                readonly internalType: "bytes32[]";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "emitter";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isPersistent";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "persistent";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "label";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "load";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "makePersistent";
        readonly inputs: readonly [{
            readonly name: "accounts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "makePersistent";
        readonly inputs: readonly [{
            readonly name: "account0";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account1";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "makePersistent";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "makePersistent";
        readonly inputs: readonly [{
            readonly name: "account0";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account1";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "account2";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mockCall";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mockCall";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mockCallRevert";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "msgValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "revertData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mockCallRevert";
        readonly inputs: readonly [{
            readonly name: "callee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "revertData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseAddress";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBool";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBytes";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBytes32";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseInt";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonAddress";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonAddressArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBool";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBoolArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes32";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes32Array";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytesArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonInt";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonIntArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonString";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonStringArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonUint";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonUintArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseUint";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "pauseGasMetering";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "prank";
        readonly inputs: readonly [{
            readonly name: "msgSender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "txOrigin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "prank";
        readonly inputs: readonly [{
            readonly name: "msgSender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "prevrandao";
        readonly inputs: readonly [{
            readonly name: "newPrevrandao";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "projectRoot";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readCallers";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "callerMode";
            readonly type: "uint8";
            readonly internalType: "enum VmSafe.CallerMode";
        }, {
            readonly name: "msgSender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "txOrigin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "maxDepth";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "maxDepth";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "followLinks";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readFileBinary";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readLine";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "line";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readLink";
        readonly inputs: readonly [{
            readonly name: "linkPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "targetPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "record";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "recordLogs";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rememberKey";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "recursive";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "resetNonce";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "resumeGasMetering";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "revertTo";
        readonly inputs: readonly [{
            readonly name: "snapshotId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "revokePersistent";
        readonly inputs: readonly [{
            readonly name: "accounts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "revokePersistent";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "roll";
        readonly inputs: readonly [{
            readonly name: "newHeight";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rollFork";
        readonly inputs: readonly [{
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rollFork";
        readonly inputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rollFork";
        readonly inputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rollFork";
        readonly inputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rpcUrl";
        readonly inputs: readonly [{
            readonly name: "rpcAlias";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rpcUrlStructs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "urls";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.Rpc[]";
            readonly components: readonly [{
                readonly name: "key";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "url";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rpcUrls";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "urls";
            readonly type: "string[2][]";
            readonly internalType: "string[2][]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "selectFork";
        readonly inputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeAddress";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeAddress";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBool";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBool";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes32";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes32";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeInt";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeInt";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeString";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeString";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeUint";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeUint";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setEnv";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setNonce";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newNonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setNonceUnsafe";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newNonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sign";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "skip";
        readonly inputs: readonly [{
            readonly name: "skipTest";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "snapshot";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "snapshotId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startPrank";
        readonly inputs: readonly [{
            readonly name: "msgSender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startPrank";
        readonly inputs: readonly [{
            readonly name: "msgSender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "txOrigin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopBroadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopPrank";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "store";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "transact";
        readonly inputs: readonly [{
            readonly name: "forkId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transact";
        readonly inputs: readonly [{
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "txGasPrice";
        readonly inputs: readonly [{
            readonly name: "newGasPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "warp";
        readonly inputs: readonly [{
            readonly name: "newTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeFileBinary";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeLine";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): VmInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Vm;
}
