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
export interface VmSafeInterface extends Interface {
    getFunction(nameOrSignature: "accesses" | "addr" | "assume" | "breakpoint(string)" | "breakpoint(string,bool)" | "broadcast()" | "broadcast(address)" | "broadcast(uint256)" | "closeFile" | "createDir" | "deriveKey(string,uint32)" | "deriveKey(string,string,uint32)" | "envAddress(string)" | "envAddress(string,string)" | "envBool(string)" | "envBool(string,string)" | "envBytes(string)" | "envBytes(string,string)" | "envBytes32(string,string)" | "envBytes32(string)" | "envInt(string,string)" | "envInt(string)" | "envOr(string,string,bytes32[])" | "envOr(string,string,int256[])" | "envOr(string,bool)" | "envOr(string,address)" | "envOr(string,uint256)" | "envOr(string,string,bytes[])" | "envOr(string,string,uint256[])" | "envOr(string,string,string[])" | "envOr(string,bytes)" | "envOr(string,bytes32)" | "envOr(string,int256)" | "envOr(string,string,address[])" | "envOr(string,string)" | "envOr(string,string,bool[])" | "envString(string,string)" | "envString(string)" | "envUint(string)" | "envUint(string,string)" | "ffi" | "fsMetadata" | "getCode" | "getDeployedCode" | "getLabel" | "getNonce" | "getRecordedLogs" | "label" | "load" | "parseAddress" | "parseBool" | "parseBytes" | "parseBytes32" | "parseInt" | "parseJson(string)" | "parseJson(string,string)" | "parseJsonAddress" | "parseJsonAddressArray" | "parseJsonBool" | "parseJsonBoolArray" | "parseJsonBytes" | "parseJsonBytes32" | "parseJsonBytes32Array" | "parseJsonBytesArray" | "parseJsonInt" | "parseJsonIntArray" | "parseJsonString" | "parseJsonStringArray" | "parseJsonUint" | "parseJsonUintArray" | "parseUint" | "pauseGasMetering" | "projectRoot" | "readDir(string,uint64)" | "readDir(string,uint64,bool)" | "readDir(string)" | "readFile" | "readFileBinary" | "readLine" | "readLink" | "record" | "recordLogs" | "rememberKey" | "removeDir" | "removeFile" | "resumeGasMetering" | "rpcUrl" | "rpcUrlStructs" | "rpcUrls" | "serializeAddress(string,string,address[])" | "serializeAddress(string,string,address)" | "serializeBool(string,string,bool[])" | "serializeBool(string,string,bool)" | "serializeBytes(string,string,bytes[])" | "serializeBytes(string,string,bytes)" | "serializeBytes32(string,string,bytes32[])" | "serializeBytes32(string,string,bytes32)" | "serializeInt(string,string,int256)" | "serializeInt(string,string,int256[])" | "serializeString(string,string,string[])" | "serializeString(string,string,string)" | "serializeUint(string,string,uint256)" | "serializeUint(string,string,uint256[])" | "setEnv" | "sign" | "startBroadcast()" | "startBroadcast(address)" | "startBroadcast(uint256)" | "stopBroadcast" | "toString(address)" | "toString(uint256)" | "toString(bytes)" | "toString(bool)" | "toString(int256)" | "toString(bytes32)" | "writeFile" | "writeFileBinary" | "writeJson(string,string,string)" | "writeJson(string,string)" | "writeLine"): FunctionFragment;
    encodeFunctionData(functionFragment: "accesses", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "addr", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "assume", values: [boolean]): string;
    encodeFunctionData(functionFragment: "breakpoint(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "breakpoint(string,bool)", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "broadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "broadcast(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "broadcast(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "closeFile", values: [string]): string;
    encodeFunctionData(functionFragment: "createDir", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,uint32)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,string,uint32)", values: [string, string, BigNumberish]): string;
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
    encodeFunctionData(functionFragment: "ffi", values: [string[]]): string;
    encodeFunctionData(functionFragment: "fsMetadata", values: [string]): string;
    encodeFunctionData(functionFragment: "getCode", values: [string]): string;
    encodeFunctionData(functionFragment: "getDeployedCode", values: [string]): string;
    encodeFunctionData(functionFragment: "getLabel", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getNonce", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getRecordedLogs", values?: undefined): string;
    encodeFunctionData(functionFragment: "label", values: [AddressLike, string]): string;
    encodeFunctionData(functionFragment: "load", values: [AddressLike, BytesLike]): string;
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
    encodeFunctionData(functionFragment: "projectRoot", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "resumeGasMetering", values?: undefined): string;
    encodeFunctionData(functionFragment: "rpcUrl", values: [string]): string;
    encodeFunctionData(functionFragment: "rpcUrlStructs", values?: undefined): string;
    encodeFunctionData(functionFragment: "rpcUrls", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "sign", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "startBroadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBroadcast(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "startBroadcast(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "stopBroadcast", values?: undefined): string;
    encodeFunctionData(functionFragment: "toString(address)", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "toString(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "toString(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "toString(bool)", values: [boolean]): string;
    encodeFunctionData(functionFragment: "toString(int256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "toString(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "writeFile", values: [string, string]): string;
    encodeFunctionData(functionFragment: "writeFileBinary", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "writeJson(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "writeJson(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "writeLine", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "accesses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breakpoint(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breakpoint(string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDir", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,string,uint32)", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "ffi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fsMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeployedCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLabel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecordedLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "label", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "load", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "projectRoot", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "resumeGasMetering", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrlStructs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrls", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "sign", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopBroadcast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFileBinary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeJson(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeJson(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeLine", data: BytesLike): Result;
}
export interface VmSafe extends BaseContract {
    connect(runner?: ContractRunner | null): VmSafe;
    waitForDeployment(): Promise<this>;
    interface: VmSafeInterface;
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
    addr: TypedContractMethod<[privateKey: BigNumberish], [string], "view">;
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
    closeFile: TypedContractMethod<[path: string], [void], "nonpayable">;
    createDir: TypedContractMethod<[
        path: string,
        recursive: boolean
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
    projectRoot: TypedContractMethod<[], [string], "view">;
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
    resumeGasMetering: TypedContractMethod<[], [void], "nonpayable">;
    rpcUrl: TypedContractMethod<[rpcAlias: string], [string], "view">;
    rpcUrlStructs: TypedContractMethod<[], [VmSafe.RpcStructOutput[]], "view">;
    rpcUrls: TypedContractMethod<[], [[string, string][]], "view">;
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
    stopBroadcast: TypedContractMethod<[], [void], "nonpayable">;
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
    getFunction(nameOrSignature: "addr"): TypedContractMethod<[privateKey: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "assume"): TypedContractMethod<[condition: boolean], [void], "view">;
    getFunction(nameOrSignature: "breakpoint(string)"): TypedContractMethod<[char: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "breakpoint(string,bool)"): TypedContractMethod<[char: string, value: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "broadcast()"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "broadcast(address)"): TypedContractMethod<[signer: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "broadcast(uint256)"): TypedContractMethod<[privateKey: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "closeFile"): TypedContractMethod<[path: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "createDir"): TypedContractMethod<[
        path: string,
        recursive: boolean
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
    getFunction(nameOrSignature: "projectRoot"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "resumeGasMetering"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "rpcUrl"): TypedContractMethod<[rpcAlias: string], [string], "view">;
    getFunction(nameOrSignature: "rpcUrlStructs"): TypedContractMethod<[], [VmSafe.RpcStructOutput[]], "view">;
    getFunction(nameOrSignature: "rpcUrls"): TypedContractMethod<[], [[string, string][]], "view">;
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
    getFunction(nameOrSignature: "startBroadcast()"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "startBroadcast(address)"): TypedContractMethod<[signer: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "startBroadcast(uint256)"): TypedContractMethod<[privateKey: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "stopBroadcast"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "toString(address)"): TypedContractMethod<[value: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "toString(uint256)"): TypedContractMethod<[value: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "toString(bytes)"): TypedContractMethod<[value: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "toString(bool)"): TypedContractMethod<[value: boolean], [string], "view">;
    getFunction(nameOrSignature: "toString(int256)"): TypedContractMethod<[value: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "toString(bytes32)"): TypedContractMethod<[value: BytesLike], [string], "view">;
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
