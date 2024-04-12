import { ContractFactory } from "ethers";
import type { Signer, BigNumberish, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { DefaultReserveInterestRateStrategy, DefaultReserveInterestRateStrategyInterface } from "../../DefaultInterestRateStrategy.sol/DefaultReserveInterestRateStrategy";
type DefaultReserveInterestRateStrategyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DefaultReserveInterestRateStrategy__factory extends ContractFactory {
    constructor(...args: DefaultReserveInterestRateStrategyConstructorParams);
    getDeployTransaction(optimalUsageRatio: BigNumberish, baseVariableBorrowRate: BigNumberish, variableRateSlope1: BigNumberish, variableRateSlope2: BigNumberish, stableRateSlope1: BigNumberish, stableRateSlope2: BigNumberish, baseStableRateOffset: BigNumberish, stableRateExcessOffset: BigNumberish, optimalStableToTotalDebtRatio: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(optimalUsageRatio: BigNumberish, baseVariableBorrowRate: BigNumberish, variableRateSlope1: BigNumberish, variableRateSlope2: BigNumberish, stableRateSlope1: BigNumberish, stableRateSlope2: BigNumberish, baseStableRateOffset: BigNumberish, stableRateExcessOffset: BigNumberish, optimalStableToTotalDebtRatio: BigNumberish, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<DefaultReserveInterestRateStrategy & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): DefaultReserveInterestRateStrategy__factory;
    static readonly bytecode = "0x6101e060405234801561001157600080fd5b50604051610e11380380610e1183398101604081905261003091610135565b886b033b2e3c9fd0803ce8000000101560405180604001604052806002815260200161383360f01b815250906100825760405162461bcd60e51b8152600401610079919061019e565b60405180910390fd5b50806b033b2e3c9fd0803ce80000001015604051806040016040528060028152602001610e0d60f21b815250906100cc5760405162461bcd60e51b8152600401610079919061019e565b5060808990526100e8896b033b2e3c9fd0803ce80000006101f3565b60c05260a0819052610106816b033b2e3c9fd0803ce80000006101f3565b60e0525061010096909652610120949094526101409290925261016052610180526101a0526101c05250610218565b60008060008060008060008060006101208a8c03121561015457600080fd5b8951985060208a0151975060408a0151965060608a0151955060808a0151945060a08a0151935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b600060208083528351808285015260005b818110156101cb578581018301518582016040015282016101af565b818111156101dd576000604083870101525b50601f01601f1916929092016040019392505050565b60008282101561021357634e487b7160e01b600052601160045260246000fd5b500390565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c051610ae86103296000396000818161020a01526107940152600061083901526000818161010b015261055f0152600081816102300152818161058a015261065f015260008181610256015281816102a501526105c701526000818160d6015281816102c9015281816105f2015281816106d1015261085a015260008181610131015281816102ea015261039301526000818161027f015261073e0152600081816101de01526105030152600081816101810152818161070d015261075f01526000818161015a015281816104d2015281816105240152818161063601526106ab0152610ae86000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063a58987091161008c578063bc62690811610066578063bc62690814610208578063d5cd73911461022e578063f420240914610254578063fe5fd6981461027a57600080fd5b8063a5898709146101ab578063a9c622f8146101d9578063acd786861461020057600080fd5b80630b3429a2146100d457806314e32da41461010957806334762ca51461012f57806354c365c6146101555780636fb925891461017c57806380031e37146101a3575b600080fd5b7f00000000000000000000000000000000000000000000000000000000000000005b6040519081526020015b60405180910390f35b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b6100f67f000000000000000000000000000000000000000000000000000000000000000081565b6100f67f000000000000000000000000000000000000000000000000000000000000000081565b6100f66102a1565b6101be6101b93660046109f8565b61031d565b60408051938452602084019290925290820152606001610100565b6100f67f000000000000000000000000000000000000000000000000000000000000000081565b6100f6610832565b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b7f00000000000000000000000000000000000000000000000000000000000000006100f6565b6100f67f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000061030e7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610a93565b6103189190610a93565b905090565b60008060006103716040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b846080015185606001516103859190610a93565b6020820152600060808201527f000000000000000000000000000000000000000000000000000000000000000060408201526103bf610832565b60608201526020810151156104d057602081015160608601516103e19161087e565b60e08083019190915260408087015160208801519288015161010089015192516370a0823160e01b81526001600160a01b03938416600482015291939216906370a0823190602401602060405180830381865afa158015610446573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046a9190610aab565b6104749190610a93565b61047e9190610ac4565b808252602082015161048f91610a93565b610100820181905260208201516104a59161087e565b60a082015284516101008201516104ca916104bf91610a93565b60208301519061087e565b60c08201525b7f00000000000000000000000000000000000000000000000000000000000000008160a0015111156106315760006105587f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008460a001516105529190610ac4565b9061087e565b90506105847f0000000000000000000000000000000000000000000000000000000000000000826108bd565b6105ae907f0000000000000000000000000000000000000000000000000000000000000000610a93565b826060018181516105bf9190610a93565b9052506105ec7f0000000000000000000000000000000000000000000000000000000000000000826108bd565b610616907f0000000000000000000000000000000000000000000000000000000000000000610a93565b826040018181516106279190610a93565b90525061070b9050565b61068c7f00000000000000000000000000000000000000000000000000000000000000006105528360a001517f00000000000000000000000000000000000000000000000000000000000000006108bd90919063ffffffff16565b8160600181815161069d9190610a93565b90525060a08101516106f6907f000000000000000000000000000000000000000000000000000000000000000090610552907f0000000000000000000000000000000000000000000000000000000000000000906108bd565b816040018181516107079190610a93565b9052505b7f00000000000000000000000000000000000000000000000000000000000000008160e0015111156107cf57600061078d7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008460e001516105529190610ac4565b90506107b97f0000000000000000000000000000000000000000000000000000000000000000826108bd565b826060018181516107ca9190610a93565b905250505b6108148560c001516127106107e49190610ac4565b61080e8360c0015161080889606001518a6080015187604001518c60a00151610901565b906108bd565b90610968565b60808201819052606082015160409092015190969195509350915050565b60006103187f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610a93565b600081156b033b2e3c9fd0803ce8000000600284041904841117156108a257600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b600081156b019d971e4fe8401e7400000019839004841115176108df57600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b60008061090e8587610a93565b90508061091f576000915050610960565b600061092e856108088861098e565b9050600061093f856108088a61098e565b9050600061095961094f8561098e565b6105528486610a93565b9450505050505b949350505050565b60008115611388198390048411151761098057600080fd5b506127109102611388010490565b633b9aca0081810290810482146109a457600080fd5b919050565b604051610120810167ffffffffffffffff811182821017156109db57634e487b7160e01b600052604160045260246000fd5b60405290565b80356001600160a01b03811681146109a457600080fd5b60006101208284031215610a0b57600080fd5b610a136109a9565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c0820152610a5f60e084016109e1565b60e0820152610100610a728185016109e1565b908201529392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610aa657610aa6610a7d565b500190565b600060208284031215610abd57600080fd5b5051919050565b600082821015610ad657610ad6610a7d565b50039056fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "optimalUsageRatio";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "baseVariableBorrowRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "variableRateSlope1";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "variableRateSlope2";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stableRateSlope1";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stableRateSlope2";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "baseStableRateOffset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "stableRateExcessOffset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "optimalStableToTotalDebtRatio";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_EXCESS_USAGE_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OPTIMAL_USAGE_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "unbacked";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidityAdded";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liquidityTaken";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalStableDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalVariableDebt";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "averageStableBorrowRate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "reserveFactor";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "reserve";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "aToken";
                readonly type: "address";
            }];
            readonly internalType: "struct IDefaultInterestRateStrategy.CalculateInterestRatesParams";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "calculateInterestRates";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBaseStableBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBaseVariableBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMaxVariableBorrowRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStableRateExcessOffset";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStableRateSlope1";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStableRateSlope2";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVariableRateSlope1";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVariableRateSlope2";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DefaultReserveInterestRateStrategyInterface;
    static connect(address: string, runner?: ContractRunner | null): DefaultReserveInterestRateStrategy;
}
export {};
