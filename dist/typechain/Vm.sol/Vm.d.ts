import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../common";
export declare namespace VmSafe {
    type FsMetadataStruct = {
        isDir: boolean;
        isSymlink: boolean;
        length: BigNumberish;
        readOnly: boolean;
        modified: BigNumberish;
        accessed: BigNumberish;
        created: BigNumberish;
    };
    type FsMetadataStructOutput = [
        isDir: boolean,
        isSymlink: boolean,
        length: bigint,
        readOnly: boolean,
        modified: bigint,
        accessed: bigint,
        created: bigint
    ] & {
        isDir: boolean;
        isSymlink: boolean;
        length: bigint;
        readOnly: boolean;
        modified: bigint;
        accessed: bigint;
        created: bigint;
    };
    type LogStruct = {
        topics: BytesLike[];
        data: BytesLike;
        emitter: AddressLike;
    };
    type LogStructOutput = [
        topics: string[],
        data: string,
        emitter: string
    ] & {
        topics: string[];
        data: string;
        emitter: string;
    };
    type DirEntryStruct = {
        errorMessage: string;
        path: string;
        depth: BigNumberish;
        isDir: boolean;
        isSymlink: boolean;
    };
    type DirEntryStructOutput = [
        errorMessage: string,
        path: string,
        depth: bigint,
        isDir: boolean,
        isSymlink: boolean
    ] & {
        errorMessage: string;
        path: string;
        depth: bigint;
        isDir: boolean;
        isSymlink: boolean;
    };
    type RpcStruct = {
        key: string;
        url: string;
    };
    type RpcStructOutput = [key: string, url: string] & {
        key: string;
        url: string;
    };
}
export interface VmInterface extends Interface {
    getFunction(nameOrSignature: "accesses" | "activeFork" | "addr" | "allowCheatcodes" | "assume" | "breakpoint(string)" | "breakpoint(string,bool)" | "broadcast()" | "broadcast(address)" | "broadcast(uint256)" | "chainId" | "clearMockedCalls" | "closeFile" | "coinbase" | "createDir" | "createFork(string)" | "createFork(string,uint256)" | "createFork(string,bytes32)" | "createSelectFork(string,uint256)" | "createSelectFork(string,bytes32)" | "createSelectFork(string)" | "deal" | "deriveKey(string,uint32)" | "deriveKey(string,string,uint32)" | "difficulty" | "envAddress(string)" | "envAddress(string,string)" | "envBool(string)" | "envBool(string,string)" | "envBytes(string)" | "envBytes(string,string)" | "envBytes32(string,string)" | "envBytes32(string)" | "envInt(string,string)" | "envInt(string)" | "envOr(string,string,bytes32[])" | "envOr(string,string,int256[])" | "envOr(string,bool)" | "envOr(string,address)" | "envOr(string,uint256)" | "envOr(string,string,bytes[])" | "envOr(string,string,uint256[])" | "envOr(string,string,string[])" | "envOr(string,bytes)" | "envOr(string,bytes32)" | "envOr(string,int256)" | "envOr(string,string,address[])" | "envOr(string,string)" | "envOr(string,string,bool[])" | "envString(string,string)" | "envString(string)" | "envUint(string)" | "envUint(string,string)" | "etch" | "expectCall(address,uint256,uint64,bytes)" | "expectCall(address,uint256,uint64,bytes,uint64)" | "expectCall(address,uint256,bytes,uint64)" | "expectCall(address,bytes)" | "expectCall(address,bytes,uint64)" | "expectCall(address,uint256,bytes)" | "expectCallMinGas(address,uint256,uint64,bytes)" | "expectCallMinGas(address,uint256,uint64,bytes,uint64)" | "expectEmit()" | "expectEmit(bool,bool,bool,bool)" | "expectEmit(bool,bool,bool,bool,address)" | "expectEmit(address)" | "expectRevert(bytes4)" | "expectRevert(bytes)" | "expectRevert()" | "expectSafeMemory" | "expectSafeMemoryCall" | "fee" | "ffi" | "fsMetadata" | "getCode" | "getDeployedCode" | "getLabel" | "getNonce" | "getRecordedLogs" | "isPersistent" | "label" | "load" | "makePersistent(address[])" | "makePersistent(address,address)" | "makePersistent(address)" | "makePersistent(address,address,address)" | "mockCall(address,uint256,bytes,bytes)" | "mockCall(address,bytes,bytes)" | "mockCallRevert(address,uint256,bytes,bytes)" | "mockCallRevert(address,bytes,bytes)" | "parseAddress" | "parseBool" | "parseBytes" | "parseBytes32" | "parseInt" | "parseJson(string)" | "parseJson(string,string)" | "parseJsonAddress" | "parseJsonAddressArray" | "parseJsonBool" | "parseJsonBoolArray" | "parseJsonBytes" | "parseJsonBytes32" | "parseJsonBytes32Array" | "parseJsonBytesArray" | "parseJsonInt" | "parseJsonIntArray" | "parseJsonString" | "parseJsonStringArray" | "parseJsonUint" | "parseJsonUintArray" | "parseUint" | "pauseGasMetering" | "prank(address,address)" | "prank(address)" | "prevrandao" | "projectRoot" | "readCallers" | "readDir(string,uint64)" | "readDir(string,uint64,bool)" | "readDir(string)" | "readFile" | "readFileBinary" | "readLine" | "readLink" | "record" | "recordLogs" | "rememberKey" | "removeDir" | "removeFile" | "resetNonce" | "resumeGasMetering" | "revertTo" | "revokePersistent(address[])" | "revokePersistent(address)" | "roll" | "rollFork(bytes32)" | "rollFork(uint256,uint256)" | "rollFork(uint256)" | "rollFork(uint256,bytes32)" | "rpcUrl" | "rpcUrlStructs" | "rpcUrls" | "selectFork" | "serializeAddress(string,string,address[])" | "serializeAddress(string,string,address)" | "serializeBool(string,string,bool[])" | "serializeBool(string,string,bool)" | "serializeBytes(string,string,bytes[])" | "serializeBytes(string,string,bytes)" | "serializeBytes32(string,string,bytes32[])" | "serializeBytes32(string,string,bytes32)" | "serializeInt(string,string,int256)" | "serializeInt(string,string,int256[])" | "serializeString(string,string,string[])" | "serializeString(string,string,string)" | "serializeUint(string,string,uint256)" | "serializeUint(string,string,uint256[])" | "setEnv" | "setNonce" | "setNonceUnsafe" | "sign" | "skip" | "snapshot" | "startBroadcast()" | "startBroadcast(address)" | "startBroadcast(uint256)" | "startPrank(address)" | "startPrank(address,address)" | "stopBroadcast" | "stopPrank" | "store" | "toString(address)" | "toString(uint256)" | "toString(bytes)" | "toString(bool)" | "toString(int256)" | "toString(bytes32)" | "transact(uint256,bytes32)" | "transact(bytes32)" | "txGasPrice" | "warp" | "writeFile" | "writeFileBinary" | "writeJson(string,string,string)" | "writeJson(string,string)" | "writeLine"): FunctionFragment;
    encodeFunctionData(functionFragment: "accesses", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "activeFork", values?: undefined): string;
    encodeFunctionData(functionFragment: "addr", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowCheatcodes", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "assume", values: [boolean]): string;
    encodeFunctionData(functionFragment: "breakpoint(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "breakpoint(string,bool)", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "broadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "broadcast(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "broadcast(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "chainId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "clearMockedCalls", values?: undefined): string;
    encodeFunctionData(functionFragment: "closeFile", values: [string]): string;
    encodeFunctionData(functionFragment: "coinbase", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "createDir", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "createFork(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "createFork(string,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createFork(string,bytes32)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "createSelectFork(string,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createSelectFork(string,bytes32)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "createSelectFork(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "deal", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,uint32)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,string,uint32)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "difficulty", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "envAddress(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envAddress(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envBool(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envBool(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envBytes(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envBytes(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envBytes32(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envBytes32(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envInt(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envInt(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,bytes32[])", values: [string, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,int256[])", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,bool)", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "envOr(string,address)", values: [string, AddressLike]): string;
    encodeFunctionData(functionFragment: "envOr(string,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,bytes[])", values: [string, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,uint256[])", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,string[])", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,bytes)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "envOr(string,bytes32)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "envOr(string,int256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,address[])", values: [string, string, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,bool[])", values: [string, string, boolean[]]): string;
    encodeFunctionData(functionFragment: "envString(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envString(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envUint(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envUint(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "etch", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "expectCall(address,uint256,uint64,bytes)", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "expectCall(address,uint256,uint64,bytes,uint64)", values: [AddressLike, BigNumberish, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectCall(address,uint256,bytes,uint64)", values: [AddressLike, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectCall(address,bytes)", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "expectCall(address,bytes,uint64)", values: [AddressLike, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectCall(address,uint256,bytes)", values: [AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "expectCallMinGas(address,uint256,uint64,bytes)", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "expectCallMinGas(address,uint256,uint64,bytes,uint64)", values: [AddressLike, BigNumberish, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectEmit()", values?: undefined): string;
    encodeFunctionData(functionFragment: "expectEmit(bool,bool,bool,bool)", values: [boolean, boolean, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "expectEmit(bool,bool,bool,bool,address)", values: [boolean, boolean, boolean, boolean, AddressLike]): string;
    encodeFunctionData(functionFragment: "expectEmit(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes4)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "expectRevert()", values?: undefined): string;
    encodeFunctionData(functionFragment: "expectSafeMemory", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectSafeMemoryCall", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "ffi", values: [string[]]): string;
    encodeFunctionData(functionFragment: "fsMetadata", values: [string]): string;
    encodeFunctionData(functionFragment: "getCode", values: [string]): string;
    encodeFunctionData(functionFragment: "getDeployedCode", values: [string]): string;
    encodeFunctionData(functionFragment: "getLabel", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getNonce", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getRecordedLogs", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPersistent", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "label", values: [AddressLike, string]): string;
    encodeFunctionData(functionFragment: "load", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "makePersistent(address[])", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "makePersistent(address,address)", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "makePersistent(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "makePersistent(address,address,address)", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "mockCall(address,uint256,bytes,bytes)", values: [AddressLike, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCall(address,bytes,bytes)", values: [AddressLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCallRevert(address,uint256,bytes,bytes)", values: [AddressLike, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCallRevert(address,bytes,bytes)", values: [AddressLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "parseAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "parseBool", values: [string]): string;
    encodeFunctionData(functionFragment: "parseBytes", values: [string]): string;
    encodeFunctionData(functionFragment: "parseBytes32", values: [string]): string;
    encodeFunctionData(functionFragment: "parseInt", values: [string]): string;
    encodeFunctionData(functionFragment: "parseJson(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "parseJson(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonAddress", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonAddressArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBool", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBoolArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBytes", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBytes32", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBytes32Array", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBytesArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonInt", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonIntArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonString", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonStringArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonUint", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonUintArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseUint", values: [string]): string;
    encodeFunctionData(functionFragment: "pauseGasMetering", values?: undefined): string;
    encodeFunctionData(functionFragment: "prank(address,address)", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "prank(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "prevrandao", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "projectRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "readCallers", values?: undefined): string;
    encodeFunctionData(functionFragment: "readDir(string,uint64)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "readDir(string,uint64,bool)", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "readDir(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "readFile", values: [string]): string;
    encodeFunctionData(functionFragment: "readFileBinary", values: [string]): string;
    encodeFunctionData(functionFragment: "readLine", values: [string]): string;
    encodeFunctionData(functionFragment: "readLink", values: [string]): string;
    encodeFunctionData(functionFragment: "record", values?: undefined): string;
    encodeFunctionData(functionFragment: "recordLogs", values?: undefined): string;
    encodeFunctionData(functionFragment: "rememberKey", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeDir", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "removeFile", values: [string]): string;
    encodeFunctionData(functionFragment: "resetNonce", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "resumeGasMetering", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertTo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "revokePersistent(address[])", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "revokePersistent(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "roll", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rollFork(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "rollFork(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rollFork(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rollFork(uint256,bytes32)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "rpcUrl", values: [string]): string;
    encodeFunctionData(functionFragment: "rpcUrlStructs", values?: undefined): string;
    encodeFunctionData(functionFragment: "rpcUrls", values?: undefined): string;
    encodeFunctionData(functionFragment: "selectFork", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "serializeAddress(string,string,address[])", values: [string, string, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "serializeAddress(string,string,address)", values: [string, string, AddressLike]): string;
    encodeFunctionData(functionFragment: "serializeBool(string,string,bool[])", values: [string, string, boolean[]]): string;
    encodeFunctionData(functionFragment: "serializeBool(string,string,bool)", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "serializeBytes(string,string,bytes[])", values: [string, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "serializeBytes(string,string,bytes)", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "serializeBytes32(string,string,bytes32[])", values: [string, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "serializeBytes32(string,string,bytes32)", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "serializeInt(string,string,int256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "serializeInt(string,string,int256[])", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "serializeString(string,string,string[])", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "serializeString(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "serializeUint(string,string,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "serializeUint(string,string,uint256[])", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "setEnv", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setNonce", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setNonceUnsafe", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sign", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "skip", values: [boolean]): string;
    encodeFunctionData(functionFragment: "snapshot", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBroadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBroadcast(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "startBroadcast(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "startPrank(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "startPrank(address,address)", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "stopBroadcast", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopPrank", values?: undefined): string;
    encodeFunctionData(functionFragment: "store", values: [AddressLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "toString(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "toString(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "toString(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "toString(bool)", values: [boolean]): string;
    encodeFunctionData(functionFragment: "toString(int256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "toString(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "transact(uint256,bytes32)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "transact(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "txGasPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "warp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "writeFile", values: [string, string]): string;
    encodeFunctionData(functionFragment: "writeFileBinary", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "writeJson(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "writeJson(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "writeLine", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "accesses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activeFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowCheatcodes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breakpoint(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breakpoint(string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearMockedCalls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coinbase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDir", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFork(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFork(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFork(string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSelectFork(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSelectFork(string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSelectFork(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "difficulty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envAddress(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envAddress(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBool(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBool(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes32(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes32(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envInt(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envInt(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,int256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,uint256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,string[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,bool[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envString(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envString(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envUint(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envUint(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "etch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,uint256,uint64,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,uint256,uint64,bytes,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,uint256,bytes,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,bytes,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCallMinGas(address,uint256,uint64,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCallMinGas(address,uint256,uint64,bytes,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(bool,bool,bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(bool,bool,bool,bool,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes4)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectSafeMemory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectSafeMemoryCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ffi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fsMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeployedCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLabel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecordedLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPersistent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "label", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "load", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCall(address,uint256,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCall(address,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCallRevert(address,uint256,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCallRevert(address,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJson(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJson(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonAddressArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBoolArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytes32Array", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytesArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonIntArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonStringArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonUintArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseGasMetering", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prank(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prank(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prevrandao", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "projectRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readCallers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readDir(string,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readDir(string,uint64,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readDir(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readFileBinary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readLine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readLink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "record", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rememberKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeDir", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resumeGasMetering", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePersistent(address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePersistent(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrlStructs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selectFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeAddress(string,string,address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeAddress(string,string,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBool(string,string,bool[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBool(string,string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes(string,string,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes(string,string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes32(string,string,bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes32(string,string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeInt(string,string,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeInt(string,string,int256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeString(string,string,string[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeString(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeUint(string,string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeUint(string,string,uint256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEnv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNonceUnsafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPrank(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPrank(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopBroadcast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopPrank", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transact(uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transact(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "warp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFileBinary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeJson(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeJson(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeLine", data: BytesLike): Result;
}
export interface Vm extends BaseContract {
    connect(runner?: ContractRunner | null): Vm;
    waitForDeployment(): Promise<this>;
    interface: VmInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    accesses: TypedContractMethod<[
        target: AddressLike
    ], [
        [string[], string[]] & {
            readSlots: string[];
            writeSlots: string[];
        }
    ], "nonpayable">;
    activeFork: TypedContractMethod<[], [bigint], "view">;
    addr: TypedContractMethod<[privateKey: BigNumberish], [string], "view">;
    allowCheatcodes: TypedContractMethod<[
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    assume: TypedContractMethod<[condition: boolean], [void], "view">;
    "breakpoint(string)": TypedContractMethod<[
        char: string
    ], [
        void
    ], "nonpayable">;
    "breakpoint(string,bool)": TypedContractMethod<[
        char: string,
        value: boolean
    ], [
        void
    ], "nonpayable">;
    "broadcast()": TypedContractMethod<[], [void], "nonpayable">;
    "broadcast(address)": TypedContractMethod<[
        signer: AddressLike
    ], [
        void
    ], "nonpayable">;
    "broadcast(uint256)": TypedContractMethod<[
        privateKey: BigNumberish
    ], [
        void
    ], "nonpayable">;
    chainId: TypedContractMethod<[
        newChainId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    clearMockedCalls: TypedContractMethod<[], [void], "nonpayable">;
    closeFile: TypedContractMethod<[path: string], [void], "nonpayable">;
    coinbase: TypedContractMethod<[
        newCoinbase: AddressLike
    ], [
        void
    ], "nonpayable">;
    createDir: TypedContractMethod<[
        path: string,
        recursive: boolean
    ], [
        void
    ], "nonpayable">;
    "createFork(string)": TypedContractMethod<[
        urlOrAlias: string
    ], [
        bigint
    ], "nonpayable">;
    "createFork(string,uint256)": TypedContractMethod<[
        urlOrAlias: string,
        blockNumber: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    "createFork(string,bytes32)": TypedContractMethod<[
        urlOrAlias: string,
        txHash: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    "createSelectFork(string,uint256)": TypedContractMethod<[
        urlOrAlias: string,
        blockNumber: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    "createSelectFork(string,bytes32)": TypedContractMethod<[
        urlOrAlias: string,
        txHash: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    "createSelectFork(string)": TypedContractMethod<[
        urlOrAlias: string
    ], [
        bigint
    ], "nonpayable">;
    deal: TypedContractMethod<[
        account: AddressLike,
        newBalance: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "deriveKey(string,uint32)": TypedContractMethod<[
        mnemonic: string,
        index: BigNumberish
    ], [
        bigint
    ], "view">;
    "deriveKey(string,string,uint32)": TypedContractMethod<[
        mnemonic: string,
        derivationPath: string,
        index: BigNumberish
    ], [
        bigint
    ], "view">;
    difficulty: TypedContractMethod<[
        newDifficulty: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "envAddress(string)": TypedContractMethod<[name: string], [string], "view">;
    "envAddress(string,string)": TypedContractMethod<[
        name: string,
        delim: string
    ], [
        string[]
    ], "view">;
    "envBool(string)": TypedContractMethod<[name: string], [boolean], "view">;
    "envBool(string,string)": TypedContractMethod<[
        name: string,
        delim: string
    ], [
        boolean[]
    ], "view">;
    "envBytes(string)": TypedContractMethod<[name: string], [string], "view">;
    "envBytes(string,string)": TypedContractMethod<[
        name: string,
        delim: string
    ], [
        string[]
    ], "view">;
    "envBytes32(string,string)": TypedContractMethod<[
        name: string,
        delim: string
    ], [
        string[]
    ], "view">;
    "envBytes32(string)": TypedContractMethod<[name: string], [string], "view">;
    "envInt(string,string)": TypedContractMethod<[
        name: string,
        delim: string
    ], [
        bigint[]
    ], "view">;
    "envInt(string)": TypedContractMethod<[name: string], [bigint], "view">;
    "envOr(string,string,bytes32[])": TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: BytesLike[]
    ], [
        string[]
    ], "nonpayable">;
    "envOr(string,string,int256[])": TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: BigNumberish[]
    ], [
        bigint[]
    ], "nonpayable">;
    "envOr(string,bool)": TypedContractMethod<[
        name: string,
        defaultValue: boolean
    ], [
        boolean
    ], "nonpayable">;
    "envOr(string,address)": TypedContractMethod<[
        name: string,
        defaultValue: AddressLike
    ], [
        string
    ], "nonpayable">;
    "envOr(string,uint256)": TypedContractMethod<[
        name: string,
        defaultValue: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    "envOr(string,string,bytes[])": TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: BytesLike[]
    ], [
        string[]
    ], "nonpayable">;
    "envOr(string,string,uint256[])": TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: BigNumberish[]
    ], [
        bigint[]
    ], "nonpayable">;
    "envOr(string,string,string[])": TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: string[]
    ], [
        string[]
    ], "nonpayable">;
    "envOr(string,bytes)": TypedContractMethod<[
        name: string,
        defaultValue: BytesLike
    ], [
        string
    ], "nonpayable">;
    "envOr(string,bytes32)": TypedContractMethod<[
        name: string,
        defaultValue: BytesLike
    ], [
        string
    ], "nonpayable">;
    "envOr(string,int256)": TypedContractMethod<[
        name: string,
        defaultValue: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    "envOr(string,string,address[])": TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: AddressLike[]
    ], [
        string[]
    ], "nonpayable">;
    "envOr(string,string)": TypedContractMethod<[
        name: string,
        defaultValue: string
    ], [
        string
    ], "nonpayable">;
    "envOr(string,string,bool[])": TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: boolean[]
    ], [
        boolean[]
    ], "nonpayable">;
    "envString(string,string)": TypedContractMethod<[
        name: string,
        delim: string
    ], [
        string[]
    ], "view">;
    "envString(string)": TypedContractMethod<[name: string], [string], "view">;
    "envUint(string)": TypedContractMethod<[name: string], [bigint], "view">;
    "envUint(string,string)": TypedContractMethod<[
        name: string,
        delim: string
    ], [
        bigint[]
    ], "view">;
    etch: TypedContractMethod<[
        target: AddressLike,
        newRuntimeBytecode: BytesLike
    ], [
        void
    ], "nonpayable">;
    "expectCall(address,uint256,uint64,bytes)": TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        gas: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    "expectCall(address,uint256,uint64,bytes,uint64)": TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        gas: BigNumberish,
        data: BytesLike,
        count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "expectCall(address,uint256,bytes,uint64)": TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        data: BytesLike,
        count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "expectCall(address,bytes)": TypedContractMethod<[
        callee: AddressLike,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    "expectCall(address,bytes,uint64)": TypedContractMethod<[
        callee: AddressLike,
        data: BytesLike,
        count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "expectCall(address,uint256,bytes)": TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    "expectCallMinGas(address,uint256,uint64,bytes)": TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        minGas: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    "expectCallMinGas(address,uint256,uint64,bytes,uint64)": TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        minGas: BigNumberish,
        data: BytesLike,
        count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "expectEmit()": TypedContractMethod<[], [void], "nonpayable">;
    "expectEmit(bool,bool,bool,bool)": TypedContractMethod<[
        checkTopic1: boolean,
        checkTopic2: boolean,
        checkTopic3: boolean,
        checkData: boolean
    ], [
        void
    ], "nonpayable">;
    "expectEmit(bool,bool,bool,bool,address)": TypedContractMethod<[
        checkTopic1: boolean,
        checkTopic2: boolean,
        checkTopic3: boolean,
        checkData: boolean,
        emitter: AddressLike
    ], [
        void
    ], "nonpayable">;
    "expectEmit(address)": TypedContractMethod<[
        emitter: AddressLike
    ], [
        void
    ], "nonpayable">;
    "expectRevert(bytes4)": TypedContractMethod<[
        revertData: BytesLike
    ], [
        void
    ], "nonpayable">;
    "expectRevert(bytes)": TypedContractMethod<[
        revertData: BytesLike
    ], [
        void
    ], "nonpayable">;
    "expectRevert()": TypedContractMethod<[], [void], "nonpayable">;
    expectSafeMemory: TypedContractMethod<[
        min: BigNumberish,
        max: BigNumberish
    ], [
        void
    ], "nonpayable">;
    expectSafeMemoryCall: TypedContractMethod<[
        min: BigNumberish,
        max: BigNumberish
    ], [
        void
    ], "nonpayable">;
    fee: TypedContractMethod<[newBasefee: BigNumberish], [void], "nonpayable">;
    ffi: TypedContractMethod<[commandInput: string[]], [string], "nonpayable">;
    fsMetadata: TypedContractMethod<[
        path: string
    ], [
        VmSafe.FsMetadataStructOutput
    ], "view">;
    getCode: TypedContractMethod<[artifactPath: string], [string], "view">;
    getDeployedCode: TypedContractMethod<[
        artifactPath: string
    ], [
        string
    ], "view">;
    getLabel: TypedContractMethod<[account: AddressLike], [string], "nonpayable">;
    getNonce: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getRecordedLogs: TypedContractMethod<[
    ], [
        VmSafe.LogStructOutput[]
    ], "nonpayable">;
    isPersistent: TypedContractMethod<[account: AddressLike], [boolean], "view">;
    label: TypedContractMethod<[
        account: AddressLike,
        newLabel: string
    ], [
        void
    ], "nonpayable">;
    load: TypedContractMethod<[
        target: AddressLike,
        slot: BytesLike
    ], [
        string
    ], "view">;
    "makePersistent(address[])": TypedContractMethod<[
        accounts: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    "makePersistent(address,address)": TypedContractMethod<[
        account0: AddressLike,
        account1: AddressLike
    ], [
        void
    ], "nonpayable">;
    "makePersistent(address)": TypedContractMethod<[
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    "makePersistent(address,address,address)": TypedContractMethod<[
        account0: AddressLike,
        account1: AddressLike,
        account2: AddressLike
    ], [
        void
    ], "nonpayable">;
    "mockCall(address,uint256,bytes,bytes)": TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        data: BytesLike,
        returnData: BytesLike
    ], [
        void
    ], "nonpayable">;
    "mockCall(address,bytes,bytes)": TypedContractMethod<[
        callee: AddressLike,
        data: BytesLike,
        returnData: BytesLike
    ], [
        void
    ], "nonpayable">;
    "mockCallRevert(address,uint256,bytes,bytes)": TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        data: BytesLike,
        revertData: BytesLike
    ], [
        void
    ], "nonpayable">;
    "mockCallRevert(address,bytes,bytes)": TypedContractMethod<[
        callee: AddressLike,
        data: BytesLike,
        revertData: BytesLike
    ], [
        void
    ], "nonpayable">;
    parseAddress: TypedContractMethod<[
        stringifiedValue: string
    ], [
        string
    ], "view">;
    parseBool: TypedContractMethod<[stringifiedValue: string], [boolean], "view">;
    parseBytes: TypedContractMethod<[stringifiedValue: string], [string], "view">;
    parseBytes32: TypedContractMethod<[
        stringifiedValue: string
    ], [
        string
    ], "view">;
    parseInt: TypedContractMethod<[stringifiedValue: string], [bigint], "view">;
    "parseJson(string)": TypedContractMethod<[json: string], [string], "view">;
    "parseJson(string,string)": TypedContractMethod<[
        json: string,
        key: string
    ], [
        string
    ], "view">;
    parseJsonAddress: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string
    ], "nonpayable">;
    parseJsonAddressArray: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string[]
    ], "nonpayable">;
    parseJsonBool: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        boolean
    ], "nonpayable">;
    parseJsonBoolArray: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        boolean[]
    ], "nonpayable">;
    parseJsonBytes: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string
    ], "nonpayable">;
    parseJsonBytes32: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string
    ], "nonpayable">;
    parseJsonBytes32Array: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string[]
    ], "nonpayable">;
    parseJsonBytesArray: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string[]
    ], "nonpayable">;
    parseJsonInt: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        bigint
    ], "nonpayable">;
    parseJsonIntArray: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        bigint[]
    ], "nonpayable">;
    parseJsonString: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string
    ], "nonpayable">;
    parseJsonStringArray: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string[]
    ], "nonpayable">;
    parseJsonUint: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        bigint
    ], "nonpayable">;
    parseJsonUintArray: TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        bigint[]
    ], "nonpayable">;
    parseUint: TypedContractMethod<[stringifiedValue: string], [bigint], "view">;
    pauseGasMetering: TypedContractMethod<[], [void], "nonpayable">;
    "prank(address,address)": TypedContractMethod<[
        msgSender: AddressLike,
        txOrigin: AddressLike
    ], [
        void
    ], "nonpayable">;
    "prank(address)": TypedContractMethod<[
        msgSender: AddressLike
    ], [
        void
    ], "nonpayable">;
    prevrandao: TypedContractMethod<[
        newPrevrandao: BytesLike
    ], [
        void
    ], "nonpayable">;
    projectRoot: TypedContractMethod<[], [string], "view">;
    readCallers: TypedContractMethod<[
    ], [
        [
            bigint,
            string,
            string
        ] & {
            callerMode: bigint;
            msgSender: string;
            txOrigin: string;
        }
    ], "nonpayable">;
    "readDir(string,uint64)": TypedContractMethod<[
        path: string,
        maxDepth: BigNumberish
    ], [
        VmSafe.DirEntryStructOutput[]
    ], "view">;
    "readDir(string,uint64,bool)": TypedContractMethod<[
        path: string,
        maxDepth: BigNumberish,
        followLinks: boolean
    ], [
        VmSafe.DirEntryStructOutput[]
    ], "view">;
    "readDir(string)": TypedContractMethod<[
        path: string
    ], [
        VmSafe.DirEntryStructOutput[]
    ], "view">;
    readFile: TypedContractMethod<[path: string], [string], "view">;
    readFileBinary: TypedContractMethod<[path: string], [string], "view">;
    readLine: TypedContractMethod<[path: string], [string], "view">;
    readLink: TypedContractMethod<[linkPath: string], [string], "view">;
    record: TypedContractMethod<[], [void], "nonpayable">;
    recordLogs: TypedContractMethod<[], [void], "nonpayable">;
    rememberKey: TypedContractMethod<[
        privateKey: BigNumberish
    ], [
        string
    ], "nonpayable">;
    removeDir: TypedContractMethod<[
        path: string,
        recursive: boolean
    ], [
        void
    ], "nonpayable">;
    removeFile: TypedContractMethod<[path: string], [void], "nonpayable">;
    resetNonce: TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    resumeGasMetering: TypedContractMethod<[], [void], "nonpayable">;
    revertTo: TypedContractMethod<[
        snapshotId: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    "revokePersistent(address[])": TypedContractMethod<[
        accounts: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    "revokePersistent(address)": TypedContractMethod<[
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    roll: TypedContractMethod<[newHeight: BigNumberish], [void], "nonpayable">;
    "rollFork(bytes32)": TypedContractMethod<[
        txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    "rollFork(uint256,uint256)": TypedContractMethod<[
        forkId: BigNumberish,
        blockNumber: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "rollFork(uint256)": TypedContractMethod<[
        blockNumber: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "rollFork(uint256,bytes32)": TypedContractMethod<[
        forkId: BigNumberish,
        txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    rpcUrl: TypedContractMethod<[rpcAlias: string], [string], "view">;
    rpcUrlStructs: TypedContractMethod<[], [VmSafe.RpcStructOutput[]], "view">;
    rpcUrls: TypedContractMethod<[], [[string, string][]], "view">;
    selectFork: TypedContractMethod<[forkId: BigNumberish], [void], "nonpayable">;
    "serializeAddress(string,string,address[])": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: AddressLike[]
    ], [
        string
    ], "nonpayable">;
    "serializeAddress(string,string,address)": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: AddressLike
    ], [
        string
    ], "nonpayable">;
    "serializeBool(string,string,bool[])": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: boolean[]
    ], [
        string
    ], "nonpayable">;
    "serializeBool(string,string,bool)": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: boolean
    ], [
        string
    ], "nonpayable">;
    "serializeBytes(string,string,bytes[])": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: BytesLike[]
    ], [
        string
    ], "nonpayable">;
    "serializeBytes(string,string,bytes)": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: BytesLike
    ], [
        string
    ], "nonpayable">;
    "serializeBytes32(string,string,bytes32[])": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: BytesLike[]
    ], [
        string
    ], "nonpayable">;
    "serializeBytes32(string,string,bytes32)": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: BytesLike
    ], [
        string
    ], "nonpayable">;
    "serializeInt(string,string,int256)": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: BigNumberish
    ], [
        string
    ], "nonpayable">;
    "serializeInt(string,string,int256[])": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: BigNumberish[]
    ], [
        string
    ], "nonpayable">;
    "serializeString(string,string,string[])": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: string[]
    ], [
        string
    ], "nonpayable">;
    "serializeString(string,string,string)": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: string
    ], [
        string
    ], "nonpayable">;
    "serializeUint(string,string,uint256)": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: BigNumberish
    ], [
        string
    ], "nonpayable">;
    "serializeUint(string,string,uint256[])": TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: BigNumberish[]
    ], [
        string
    ], "nonpayable">;
    setEnv: TypedContractMethod<[
        name: string,
        value: string
    ], [
        void
    ], "nonpayable">;
    setNonce: TypedContractMethod<[
        account: AddressLike,
        newNonce: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setNonceUnsafe: TypedContractMethod<[
        account: AddressLike,
        newNonce: BigNumberish
    ], [
        void
    ], "nonpayable">;
    sign: TypedContractMethod<[
        privateKey: BigNumberish,
        digest: BytesLike
    ], [
        [bigint, string, string] & {
            v: bigint;
            r: string;
            s: string;
        }
    ], "view">;
    skip: TypedContractMethod<[skipTest: boolean], [void], "nonpayable">;
    snapshot: TypedContractMethod<[], [bigint], "nonpayable">;
    "startBroadcast()": TypedContractMethod<[], [void], "nonpayable">;
    "startBroadcast(address)": TypedContractMethod<[
        signer: AddressLike
    ], [
        void
    ], "nonpayable">;
    "startBroadcast(uint256)": TypedContractMethod<[
        privateKey: BigNumberish
    ], [
        void
    ], "nonpayable">;
    "startPrank(address)": TypedContractMethod<[
        msgSender: AddressLike
    ], [
        void
    ], "nonpayable">;
    "startPrank(address,address)": TypedContractMethod<[
        msgSender: AddressLike,
        txOrigin: AddressLike
    ], [
        void
    ], "nonpayable">;
    stopBroadcast: TypedContractMethod<[], [void], "nonpayable">;
    stopPrank: TypedContractMethod<[], [void], "nonpayable">;
    store: TypedContractMethod<[
        target: AddressLike,
        slot: BytesLike,
        value: BytesLike
    ], [
        void
    ], "nonpayable">;
    "toString(address)": TypedContractMethod<[
        value: AddressLike
    ], [
        string
    ], "view">;
    "toString(uint256)": TypedContractMethod<[
        value: BigNumberish
    ], [
        string
    ], "view">;
    "toString(bytes)": TypedContractMethod<[value: BytesLike], [string], "view">;
    "toString(bool)": TypedContractMethod<[value: boolean], [string], "view">;
    "toString(int256)": TypedContractMethod<[
        value: BigNumberish
    ], [
        string
    ], "view">;
    "toString(bytes32)": TypedContractMethod<[
        value: BytesLike
    ], [
        string
    ], "view">;
    "transact(uint256,bytes32)": TypedContractMethod<[
        forkId: BigNumberish,
        txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    "transact(bytes32)": TypedContractMethod<[
        txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    txGasPrice: TypedContractMethod<[
        newGasPrice: BigNumberish
    ], [
        void
    ], "nonpayable">;
    warp: TypedContractMethod<[newTimestamp: BigNumberish], [void], "nonpayable">;
    writeFile: TypedContractMethod<[
        path: string,
        data: string
    ], [
        void
    ], "nonpayable">;
    writeFileBinary: TypedContractMethod<[
        path: string,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    "writeJson(string,string,string)": TypedContractMethod<[
        json: string,
        path: string,
        valueKey: string
    ], [
        void
    ], "nonpayable">;
    "writeJson(string,string)": TypedContractMethod<[
        json: string,
        path: string
    ], [
        void
    ], "nonpayable">;
    writeLine: TypedContractMethod<[
        path: string,
        data: string
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "accesses"): TypedContractMethod<[
        target: AddressLike
    ], [
        [string[], string[]] & {
            readSlots: string[];
            writeSlots: string[];
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "activeFork"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "addr"): TypedContractMethod<[privateKey: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "allowCheatcodes"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "assume"): TypedContractMethod<[condition: boolean], [void], "view">;
    getFunction(nameOrSignature: "breakpoint(string)"): TypedContractMethod<[char: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "breakpoint(string,bool)"): TypedContractMethod<[char: string, value: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "broadcast()"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "broadcast(address)"): TypedContractMethod<[signer: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "broadcast(uint256)"): TypedContractMethod<[privateKey: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "chainId"): TypedContractMethod<[newChainId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "clearMockedCalls"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "closeFile"): TypedContractMethod<[path: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "coinbase"): TypedContractMethod<[newCoinbase: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "createDir"): TypedContractMethod<[
        path: string,
        recursive: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "createFork(string)"): TypedContractMethod<[urlOrAlias: string], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "createFork(string,uint256)"): TypedContractMethod<[
        urlOrAlias: string,
        blockNumber: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "createFork(string,bytes32)"): TypedContractMethod<[
        urlOrAlias: string,
        txHash: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "createSelectFork(string,uint256)"): TypedContractMethod<[
        urlOrAlias: string,
        blockNumber: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "createSelectFork(string,bytes32)"): TypedContractMethod<[
        urlOrAlias: string,
        txHash: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "createSelectFork(string)"): TypedContractMethod<[urlOrAlias: string], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "deal"): TypedContractMethod<[
        account: AddressLike,
        newBalance: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "deriveKey(string,uint32)"): TypedContractMethod<[
        mnemonic: string,
        index: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "deriveKey(string,string,uint32)"): TypedContractMethod<[
        mnemonic: string,
        derivationPath: string,
        index: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "difficulty"): TypedContractMethod<[newDifficulty: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "envAddress(string)"): TypedContractMethod<[name: string], [string], "view">;
    getFunction(nameOrSignature: "envAddress(string,string)"): TypedContractMethod<[name: string, delim: string], [string[]], "view">;
    getFunction(nameOrSignature: "envBool(string)"): TypedContractMethod<[name: string], [boolean], "view">;
    getFunction(nameOrSignature: "envBool(string,string)"): TypedContractMethod<[name: string, delim: string], [boolean[]], "view">;
    getFunction(nameOrSignature: "envBytes(string)"): TypedContractMethod<[name: string], [string], "view">;
    getFunction(nameOrSignature: "envBytes(string,string)"): TypedContractMethod<[name: string, delim: string], [string[]], "view">;
    getFunction(nameOrSignature: "envBytes32(string,string)"): TypedContractMethod<[name: string, delim: string], [string[]], "view">;
    getFunction(nameOrSignature: "envBytes32(string)"): TypedContractMethod<[name: string], [string], "view">;
    getFunction(nameOrSignature: "envInt(string,string)"): TypedContractMethod<[name: string, delim: string], [bigint[]], "view">;
    getFunction(nameOrSignature: "envInt(string)"): TypedContractMethod<[name: string], [bigint], "view">;
    getFunction(nameOrSignature: "envOr(string,string,bytes32[])"): TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: BytesLike[]
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,string,int256[])"): TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: BigNumberish[]
    ], [
        bigint[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,bool)"): TypedContractMethod<[
        name: string,
        defaultValue: boolean
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,address)"): TypedContractMethod<[
        name: string,
        defaultValue: AddressLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,uint256)"): TypedContractMethod<[
        name: string,
        defaultValue: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,string,bytes[])"): TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: BytesLike[]
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,string,uint256[])"): TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: BigNumberish[]
    ], [
        bigint[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,string,string[])"): TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: string[]
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,bytes)"): TypedContractMethod<[
        name: string,
        defaultValue: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,bytes32)"): TypedContractMethod<[
        name: string,
        defaultValue: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,int256)"): TypedContractMethod<[
        name: string,
        defaultValue: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,string,address[])"): TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: AddressLike[]
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,string)"): TypedContractMethod<[
        name: string,
        defaultValue: string
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "envOr(string,string,bool[])"): TypedContractMethod<[
        name: string,
        delim: string,
        defaultValue: boolean[]
    ], [
        boolean[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "envString(string,string)"): TypedContractMethod<[name: string, delim: string], [string[]], "view">;
    getFunction(nameOrSignature: "envString(string)"): TypedContractMethod<[name: string], [string], "view">;
    getFunction(nameOrSignature: "envUint(string)"): TypedContractMethod<[name: string], [bigint], "view">;
    getFunction(nameOrSignature: "envUint(string,string)"): TypedContractMethod<[name: string, delim: string], [bigint[]], "view">;
    getFunction(nameOrSignature: "etch"): TypedContractMethod<[
        target: AddressLike,
        newRuntimeBytecode: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectCall(address,uint256,uint64,bytes)"): TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        gas: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectCall(address,uint256,uint64,bytes,uint64)"): TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        gas: BigNumberish,
        data: BytesLike,
        count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectCall(address,uint256,bytes,uint64)"): TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        data: BytesLike,
        count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectCall(address,bytes)"): TypedContractMethod<[
        callee: AddressLike,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectCall(address,bytes,uint64)"): TypedContractMethod<[
        callee: AddressLike,
        data: BytesLike,
        count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectCall(address,uint256,bytes)"): TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectCallMinGas(address,uint256,uint64,bytes)"): TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        minGas: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectCallMinGas(address,uint256,uint64,bytes,uint64)"): TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        minGas: BigNumberish,
        data: BytesLike,
        count: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectEmit()"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "expectEmit(bool,bool,bool,bool)"): TypedContractMethod<[
        checkTopic1: boolean,
        checkTopic2: boolean,
        checkTopic3: boolean,
        checkData: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectEmit(bool,bool,bool,bool,address)"): TypedContractMethod<[
        checkTopic1: boolean,
        checkTopic2: boolean,
        checkTopic3: boolean,
        checkData: boolean,
        emitter: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectEmit(address)"): TypedContractMethod<[emitter: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "expectRevert(bytes4)"): TypedContractMethod<[revertData: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "expectRevert(bytes)"): TypedContractMethod<[revertData: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "expectRevert()"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "expectSafeMemory"): TypedContractMethod<[
        min: BigNumberish,
        max: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "expectSafeMemoryCall"): TypedContractMethod<[
        min: BigNumberish,
        max: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "fee"): TypedContractMethod<[newBasefee: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "ffi"): TypedContractMethod<[commandInput: string[]], [string], "nonpayable">;
    getFunction(nameOrSignature: "fsMetadata"): TypedContractMethod<[
        path: string
    ], [
        VmSafe.FsMetadataStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getCode"): TypedContractMethod<[artifactPath: string], [string], "view">;
    getFunction(nameOrSignature: "getDeployedCode"): TypedContractMethod<[artifactPath: string], [string], "view">;
    getFunction(nameOrSignature: "getLabel"): TypedContractMethod<[account: AddressLike], [string], "nonpayable">;
    getFunction(nameOrSignature: "getNonce"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRecordedLogs"): TypedContractMethod<[], [VmSafe.LogStructOutput[]], "nonpayable">;
    getFunction(nameOrSignature: "isPersistent"): TypedContractMethod<[account: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "label"): TypedContractMethod<[
        account: AddressLike,
        newLabel: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "load"): TypedContractMethod<[
        target: AddressLike,
        slot: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "makePersistent(address[])"): TypedContractMethod<[accounts: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "makePersistent(address,address)"): TypedContractMethod<[
        account0: AddressLike,
        account1: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "makePersistent(address)"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "makePersistent(address,address,address)"): TypedContractMethod<[
        account0: AddressLike,
        account1: AddressLike,
        account2: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mockCall(address,uint256,bytes,bytes)"): TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        data: BytesLike,
        returnData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mockCall(address,bytes,bytes)"): TypedContractMethod<[
        callee: AddressLike,
        data: BytesLike,
        returnData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mockCallRevert(address,uint256,bytes,bytes)"): TypedContractMethod<[
        callee: AddressLike,
        msgValue: BigNumberish,
        data: BytesLike,
        revertData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mockCallRevert(address,bytes,bytes)"): TypedContractMethod<[
        callee: AddressLike,
        data: BytesLike,
        revertData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "parseAddress"): TypedContractMethod<[stringifiedValue: string], [string], "view">;
    getFunction(nameOrSignature: "parseBool"): TypedContractMethod<[stringifiedValue: string], [boolean], "view">;
    getFunction(nameOrSignature: "parseBytes"): TypedContractMethod<[stringifiedValue: string], [string], "view">;
    getFunction(nameOrSignature: "parseBytes32"): TypedContractMethod<[stringifiedValue: string], [string], "view">;
    getFunction(nameOrSignature: "parseInt"): TypedContractMethod<[stringifiedValue: string], [bigint], "view">;
    getFunction(nameOrSignature: "parseJson(string)"): TypedContractMethod<[json: string], [string], "view">;
    getFunction(nameOrSignature: "parseJson(string,string)"): TypedContractMethod<[json: string, key: string], [string], "view">;
    getFunction(nameOrSignature: "parseJsonAddress"): TypedContractMethod<[arg0: string, arg1: string], [string], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonAddressArray"): TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonBool"): TypedContractMethod<[arg0: string, arg1: string], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonBoolArray"): TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        boolean[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonBytes"): TypedContractMethod<[arg0: string, arg1: string], [string], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonBytes32"): TypedContractMethod<[arg0: string, arg1: string], [string], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonBytes32Array"): TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonBytesArray"): TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonInt"): TypedContractMethod<[arg0: string, arg1: string], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonIntArray"): TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        bigint[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonString"): TypedContractMethod<[arg0: string, arg1: string], [string], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonStringArray"): TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        string[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonUint"): TypedContractMethod<[arg0: string, arg1: string], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "parseJsonUintArray"): TypedContractMethod<[
        arg0: string,
        arg1: string
    ], [
        bigint[]
    ], "nonpayable">;
    getFunction(nameOrSignature: "parseUint"): TypedContractMethod<[stringifiedValue: string], [bigint], "view">;
    getFunction(nameOrSignature: "pauseGasMetering"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "prank(address,address)"): TypedContractMethod<[
        msgSender: AddressLike,
        txOrigin: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "prank(address)"): TypedContractMethod<[msgSender: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "prevrandao"): TypedContractMethod<[newPrevrandao: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "projectRoot"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "readCallers"): TypedContractMethod<[
    ], [
        [
            bigint,
            string,
            string
        ] & {
            callerMode: bigint;
            msgSender: string;
            txOrigin: string;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "readDir(string,uint64)"): TypedContractMethod<[
        path: string,
        maxDepth: BigNumberish
    ], [
        VmSafe.DirEntryStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "readDir(string,uint64,bool)"): TypedContractMethod<[
        path: string,
        maxDepth: BigNumberish,
        followLinks: boolean
    ], [
        VmSafe.DirEntryStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "readDir(string)"): TypedContractMethod<[
        path: string
    ], [
        VmSafe.DirEntryStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "readFile"): TypedContractMethod<[path: string], [string], "view">;
    getFunction(nameOrSignature: "readFileBinary"): TypedContractMethod<[path: string], [string], "view">;
    getFunction(nameOrSignature: "readLine"): TypedContractMethod<[path: string], [string], "view">;
    getFunction(nameOrSignature: "readLink"): TypedContractMethod<[linkPath: string], [string], "view">;
    getFunction(nameOrSignature: "record"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "recordLogs"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "rememberKey"): TypedContractMethod<[privateKey: BigNumberish], [string], "nonpayable">;
    getFunction(nameOrSignature: "removeDir"): TypedContractMethod<[
        path: string,
        recursive: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "removeFile"): TypedContractMethod<[path: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "resetNonce"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "resumeGasMetering"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "revertTo"): TypedContractMethod<[snapshotId: BigNumberish], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "revokePersistent(address[])"): TypedContractMethod<[accounts: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "revokePersistent(address)"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "roll"): TypedContractMethod<[newHeight: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "rollFork(bytes32)"): TypedContractMethod<[txHash: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "rollFork(uint256,uint256)"): TypedContractMethod<[
        forkId: BigNumberish,
        blockNumber: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "rollFork(uint256)"): TypedContractMethod<[blockNumber: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "rollFork(uint256,bytes32)"): TypedContractMethod<[
        forkId: BigNumberish,
        txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "rpcUrl"): TypedContractMethod<[rpcAlias: string], [string], "view">;
    getFunction(nameOrSignature: "rpcUrlStructs"): TypedContractMethod<[], [VmSafe.RpcStructOutput[]], "view">;
    getFunction(nameOrSignature: "rpcUrls"): TypedContractMethod<[], [[string, string][]], "view">;
    getFunction(nameOrSignature: "selectFork"): TypedContractMethod<[forkId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "serializeAddress(string,string,address[])"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: AddressLike[]
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeAddress(string,string,address)"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: AddressLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeBool(string,string,bool[])"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: boolean[]
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeBool(string,string,bool)"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: boolean
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeBytes(string,string,bytes[])"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: BytesLike[]
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeBytes(string,string,bytes)"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeBytes32(string,string,bytes32[])"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: BytesLike[]
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeBytes32(string,string,bytes32)"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeInt(string,string,int256)"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeInt(string,string,int256[])"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: BigNumberish[]
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeString(string,string,string[])"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: string[]
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeString(string,string,string)"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: string
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeUint(string,string,uint256)"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        value: BigNumberish
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "serializeUint(string,string,uint256[])"): TypedContractMethod<[
        objectKey: string,
        valueKey: string,
        values: BigNumberish[]
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "setEnv"): TypedContractMethod<[name: string, value: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "setNonce"): TypedContractMethod<[
        account: AddressLike,
        newNonce: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setNonceUnsafe"): TypedContractMethod<[
        account: AddressLike,
        newNonce: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "sign"): TypedContractMethod<[
        privateKey: BigNumberish,
        digest: BytesLike
    ], [
        [bigint, string, string] & {
            v: bigint;
            r: string;
            s: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "skip"): TypedContractMethod<[skipTest: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "snapshot"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "startBroadcast()"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "startBroadcast(address)"): TypedContractMethod<[signer: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "startBroadcast(uint256)"): TypedContractMethod<[privateKey: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "startPrank(address)"): TypedContractMethod<[msgSender: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "startPrank(address,address)"): TypedContractMethod<[
        msgSender: AddressLike,
        txOrigin: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "stopBroadcast"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "stopPrank"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "store"): TypedContractMethod<[
        target: AddressLike,
        slot: BytesLike,
        value: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "toString(address)"): TypedContractMethod<[value: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "toString(uint256)"): TypedContractMethod<[value: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "toString(bytes)"): TypedContractMethod<[value: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "toString(bool)"): TypedContractMethod<[value: boolean], [string], "view">;
    getFunction(nameOrSignature: "toString(int256)"): TypedContractMethod<[value: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "toString(bytes32)"): TypedContractMethod<[value: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "transact(uint256,bytes32)"): TypedContractMethod<[
        forkId: BigNumberish,
        txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "transact(bytes32)"): TypedContractMethod<[txHash: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "txGasPrice"): TypedContractMethod<[newGasPrice: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "warp"): TypedContractMethod<[newTimestamp: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "writeFile"): TypedContractMethod<[path: string, data: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "writeFileBinary"): TypedContractMethod<[path: string, data: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "writeJson(string,string,string)"): TypedContractMethod<[
        json: string,
        path: string,
        valueKey: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "writeJson(string,string)"): TypedContractMethod<[json: string, path: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "writeLine"): TypedContractMethod<[path: string, data: string], [void], "nonpayable">;
    filters: {};
}
