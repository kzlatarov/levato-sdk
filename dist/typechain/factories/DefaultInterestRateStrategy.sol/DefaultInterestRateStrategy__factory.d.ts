import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DefaultInterestRateStrategy, DefaultInterestRateStrategyInterface } from "../../DefaultInterestRateStrategy.sol/DefaultInterestRateStrategy";
type DefaultInterestRateStrategyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DefaultInterestRateStrategy__factory extends ContractFactory {
    constructor(...args: DefaultInterestRateStrategyConstructorParams);
    deploy(optimalUsageRatio: BigNumberish, baseVariableBorrowRate: BigNumberish, variableRateSlope1: BigNumberish, variableRateSlope2: BigNumberish, stableRateSlope1: BigNumberish, stableRateSlope2: BigNumberish, baseStableRateOffset: BigNumberish, stableRateExcessOffset: BigNumberish, optimalStableToTotalDebtRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<DefaultInterestRateStrategy>;
    getDeployTransaction(optimalUsageRatio: BigNumberish, baseVariableBorrowRate: BigNumberish, variableRateSlope1: BigNumberish, variableRateSlope2: BigNumberish, stableRateSlope1: BigNumberish, stableRateSlope2: BigNumberish, baseStableRateOffset: BigNumberish, stableRateExcessOffset: BigNumberish, optimalStableToTotalDebtRatio: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): DefaultInterestRateStrategy;
    connect(signer: Signer): DefaultInterestRateStrategy__factory;
    static readonly bytecode = "0x6101e060405234801561001157600080fd5b50604051610d54380380610d5483398101604081905261003091610135565b886b033b2e3c9fd0803ce8000000101560405180604001604052806002815260200161383360f01b815250906100825760405162461bcd60e51b8152600401610079919061019e565b60405180910390fd5b50806b033b2e3c9fd0803ce80000001015604051806040016040528060028152602001610e0d60f21b815250906100cc5760405162461bcd60e51b8152600401610079919061019e565b5060808990526100e8896b033b2e3c9fd0803ce80000006101f3565b60c05260a0819052610106816b033b2e3c9fd0803ce80000006101f3565b60e0525061010096909652610120949094526101409290925261016052610180526101a0526101c05250610218565b60008060008060008060008060006101208a8c03121561015457600080fd5b8951985060208a0151975060408a0151965060608a0151955060808a0151945060a08a0151935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b600060208083528351808285015260005b818110156101cb578581018301518582016040015282016101af565b818111156101dd576000604083870101525b50601f01601f1916929092016040019392505050565b60008282101561021357634e487b7160e01b600052601160045260246000fd5b500390565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c051610a2b6103296000396000818161020a01526106aa015260006107cb01526000818161010b0152610475015260008181610230015281816104a00152610575015260008181610256015281816104dd015261074c01526000818160d601528181610508015281816105e70152818161077001526107ec01526000818161013101528181610317015261079101526000818161027f01526106540152600081816101de01526104190152600081816101af015281816106230152610675015260008181610188015281816103e80152818161043a0152818161054c01526105c10152610a2b6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806380031e371161008c578063bc62690811610066578063bc62690814610208578063d5cd73911461022e578063f420240914610254578063fe5fd6981461027a57600080fd5b806380031e37146101d1578063a9c622f8146101d9578063acd786861461020057600080fd5b80630b3429a2146100d457806314e32da41461010957806334762ca51461012f5780634b9615001461015557806354c365c6146101835780636fb92589146101aa575b600080fd5b7f00000000000000000000000000000000000000000000000000000000000000005b6040519081526020015b60405180910390f35b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b61016861016336600461093b565b6102a1565b60408051938452602084019290925290820152606001610100565b6100f67f000000000000000000000000000000000000000000000000000000000000000081565b6100f67f000000000000000000000000000000000000000000000000000000000000000081565b6100f6610748565b6100f67f000000000000000000000000000000000000000000000000000000000000000081565b6100f66107c4565b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b6100f67f000000000000000000000000000000000000000000000000000000000000000081565b60008060006102f56040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8460800151856060015161030991906109ef565b6020820152600060808201527f000000000000000000000000000000000000000000000000000000000000000060408201526103436107c4565b60608201526020810151156103e6576020810151606086015161036591610810565b8160e0018181525050846040015185602001518660e00151876000015161038c91906109ef565b61039691906109ef565b6103a09190610a07565b80825260208201516103b1916109ef565b610100820181905260208201516103c791610810565b60a082015261010081015160208201516103e091610810565b60c08201525b7f00000000000000000000000000000000000000000000000000000000000000008160a00151111561054757600061046e7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008460a001516104689190610a07565b90610810565b905061049a7f00000000000000000000000000000000000000000000000000000000000000008261084f565b6104c4907f00000000000000000000000000000000000000000000000000000000000000006109ef565b826060018181516104d591906109ef565b9052506105027f00000000000000000000000000000000000000000000000000000000000000008261084f565b61052c907f00000000000000000000000000000000000000000000000000000000000000006109ef565b8260400181815161053d91906109ef565b9052506106219050565b6105a27f00000000000000000000000000000000000000000000000000000000000000006104688360a001517f000000000000000000000000000000000000000000000000000000000000000061084f90919063ffffffff16565b816060018181516105b391906109ef565b90525060a081015161060c907f000000000000000000000000000000000000000000000000000000000000000090610468907f00000000000000000000000000000000000000000000000000000000000000009061084f565b8160400181815161061d91906109ef565b9052505b7f00000000000000000000000000000000000000000000000000000000000000008160e0015111156106e55760006106a37f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008460e001516104689190610a07565b90506106cf7f00000000000000000000000000000000000000000000000000000000000000008261084f565b826060018181516106e091906109ef565b905250505b61072a8560c001516127106106fa9190610a07565b6107248360c0015161071e89606001518a6080015187604001518c60a00151610893565b9061084f565b906108fa565b60808201819052606082015160409092015190969195509350915050565b60007f00000000000000000000000000000000000000000000000000000000000000006107b57f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006109ef565b6107bf91906109ef565b905090565b60006107bf7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006109ef565b600081156b033b2e3c9fd0803ce80000006002840419048411171561083457600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b600081156b019d971e4fe8401e74000000198390048411151761087157600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6000806108a085876109ef565b9050806108b15760009150506108f2565b60006108c08561071e88610920565b905060006108d18561071e8a610920565b905060006108eb6108e185610920565b61046884866109ef565b9450505050505b949350505050565b60008115611388198390048411151761091257600080fd5b506127109102611388010490565b633b9aca00818102908104821461093657600080fd5b919050565b600061010080838503121561094f57600080fd5b6040519081019067ffffffffffffffff8211818310171561098057634e487b7160e01b600052604160045260246000fd5b81604052833581526020840135602082015260408401356040820152606084013560608201526080840135608082015260a084013560a082015260c084013560c082015260e084013560e0820152809250505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610a0257610a026109d9565b500190565b600082821015610a1957610a196109d9565b50039056fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "optimalUsageRatio";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "baseVariableBorrowRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "variableRateSlope1";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "variableRateSlope2";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "stableRateSlope1";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "stableRateSlope2";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "baseStableRateOffset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "stableRateExcessOffset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "optimalStableToTotalDebtRatio";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MAX_EXCESS_USAGE_RATIO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "OPTIMAL_USAGE_RATIO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "calculateInterestRates";
        readonly inputs: readonly [{
            readonly name: "params";
            readonly type: "tuple";
            readonly internalType: "struct CalculateInterestRatesParams";
            readonly components: readonly [{
                readonly name: "availableLiqudity";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liquidityAdded";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liquidityTaken";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "totalStableDebt";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "totalVariableDebt";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "averageStableBorrowRate";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "reserveFactor";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "reserveLiquidity";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBaseStableBorrowRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBaseVariableBorrowRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getMaxVariableBorrowRate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getStableRateExcessOffset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getStableRateSlope1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getStableRateSlope2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getVariableRateSlope1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getVariableRateSlope2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): DefaultInterestRateStrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DefaultInterestRateStrategy;
}
export {};
