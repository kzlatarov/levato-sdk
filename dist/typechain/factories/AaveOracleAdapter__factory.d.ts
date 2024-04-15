import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AaveOracleAdapter, AaveOracleAdapterInterface } from "../AaveOracleAdapter";
type AaveOracleAdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AaveOracleAdapter__factory extends ContractFactory {
    constructor(...args: AaveOracleAdapterConstructorParams);
    deploy(_aaveOracle: string, _wnative: string, overrides?: Overrides & {
        from?: string;
    }): Promise<AaveOracleAdapter>;
    getDeployTransaction(_aaveOracle: string, _wnative: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): AaveOracleAdapter;
    connect(signer: Signer): AaveOracleAdapter__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161051b38038061051b83398101604081905261002f91610078565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100b2565b6001600160a01b038116811461007557600080fd5b50565b6000806040838503121561008b57600080fd5b825161009681610060565b60208401519092506100a781610060565b809150509250929050565b61045a806100c16000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80636372b28114610046578063aea9107814610076578063b381cf4014610097575b600080fd5b600054610059906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610089610084366004610272565b6100aa565b60405190815260200161006d565b600154610059906001600160a01b031681565b6000805460015460405163b3596f0760e01b81526001600160a01b0391821660048201528392919091169063b3596f0790602401602060405180830381865afa1580156100fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011f91906102a2565b6000805460405163b3596f0760e01b81526001600160a01b0387811660048301529394509192849291169063b3596f0790602401602060405180830381865afa158015610170573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019491906102a2565b6101a690670de0b6b3a76400006102d1565b6101b091906102f0565b90506000846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102169190610312565b905060128160ff1611156102495761022f601282610335565b61023a90600a61043e565b61024490836102f0565b610269565b610254816012610335565b61025f90600a61043e565b61026990836102d1565b95945050505050565b60006020828403121561028457600080fd5b81356001600160a01b038116811461029b57600080fd5b9392505050565b6000602082840312156102b457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156102eb576102eb6102bb565b500290565b60008261030d57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561032457600080fd5b815160ff8116811461029b57600080fd5b600060ff821660ff84168082101561034f5761034f6102bb565b90039392505050565b600181815b80851115610393578160001904821115610379576103796102bb565b8085161561038657918102915b93841c939080029061035d565b509250929050565b6000826103aa57506001610438565b816103b757506000610438565b81600181146103cd57600281146103d7576103f3565b6001915050610438565b60ff8411156103e8576103e86102bb565b50506001821b610438565b5060208310610133831016604e8410600b8410161715610416575081810a610438565b6104208383610358565b8060001904821115610434576104346102bb565b0290505b92915050565b600061029b60ff84168361039b56fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_aaveOracle";
            readonly type: "address";
            readonly internalType: "contract IAaveOracle";
        }, {
            readonly name: "_wnative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "WNATIVE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "aaveOracle";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAaveOracle";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "price";
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
    static createInterface(): AaveOracleAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AaveOracleAdapter;
}
export {};