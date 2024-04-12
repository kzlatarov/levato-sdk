import { ContractFactory } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Errors, ErrorsInterface } from "../Errors";
type ErrorsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Errors__factory extends ContractFactory {
    constructor(...args: ErrorsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Errors & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Errors__factory;
    static readonly bytecode = "0x61110661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106104f85760003560e01c80638aa3ca4c11610298578063bad8308c11610171578063dd1dd95f116100e3578063f07f67851161009c578063f07f678514610fde578063f10727db14610fff578063f479ea1114611020578063fa163a8314611041578063fae8279114611062578063fd1828ff1461108357600080fd5b8063dd1dd95f14610f19578063de24948c14610f3a578063e02f07ee14610f5b578063e3fa20f514610f7b578063e4dd8b7414610f9c578063e981483a14610fbd57600080fd5b8063d14bb17a11610135578063d14bb17a14610e53578063d1cd8b1d14610e74578063d6f9fcde14610e95578063d9adda8514610eb6578063dc191bd914610ed7578063dcc56db614610ef857600080fd5b8063bad8308c14610dae578063c08a114614610dcf578063c863808214610df0578063c899301a14610e11578063cd23367c14610e3257600080fd5b8063a4868dca1161020a578063b0510054116101ce578063b051005414610ce9578063b4a4573014610d0a578063b5e7936614610d2b578063b68774e914610d4b578063b7f5e22414610d6c578063b87041c214610d8d57600080fd5b8063a4868dca14610c45578063a8c9785314610c66578063ab883ca014610c87578063abd351b114610ca8578063ac75323614610cc957600080fd5b8063952633c51161025c578063952633c514610b7f5780639527e9d914610ba057806399ce53f314610bc1578063a2797c8014610be2578063a2e976c614610c03578063a3402a3814610c2457600080fd5b80638aa3ca4c14610ada5780638b8b98d714610afb5780638eda46bd14610b1c5780638f7722b214610b3d57806394f9fd8a14610b5e57600080fd5b80634e3aed37116103d55780636cd3cfbc116103475780637aa0767e116103005780637aa0767e14610a145780637fea6f3614610a355780638596aad514610a56578063895f7dc814610a7757806389c5d45f14610a985780638a34400014610ab957600080fd5b80636cd3cfbc1461094e578063712f536a1461096f57806373dea5e31461099057806374459b14146109b1578063747fa556146109d257806376ae8fca146109f357600080fd5b80635d9c76c0116103995780635d9c76c01461088957806360c3de80146108aa57806361c111d2146108ca57806365a83bab146108eb57806365e7ef4c1461090c5780636b3f7cc71461092d57600080fd5b80634e3aed37146107e55780634ef999ff146108065780634f77647b14610827578063512674501461084757806352ba9dbe1461086857600080fd5b80632eed17e81161046e57806347ba93d81161043257806347ba93d81461072057806347cf152314610741578063480702ae14610762578063485c8ff6146107835780634d86f393146107a35780634e01e3c1146107c457600080fd5b80632eed17e81461067b578063335763de1461069c578063366eb54d146106bd57806337930782146106de578063471df685146106ff57600080fd5b80631abbb001116104c05780631abbb001146105b757806322a73446146105d857806326bbd053146105f957806326e7b3121461061a5780632926c9711461063a5780632c8e3b4c1461065b57600080fd5b8063084dfa0d146104fd57806311d7b0061461053457806312dcade81461055457806314dcfbbc14610575578063198d6a6b14610596575b600080fd5b61051e60405180604001604052806002815260200161062760f31b81525081565b60405161052b91906110a4565b60405180910390f35b61051e604051806040016040528060018152602001603960f81b81525081565b61051e604051806040016040528060028152602001610c4d60f21b81525081565b61051e604051806040016040528060028152602001611c1b60f11b81525081565b61051e60405180604001604052806002815260200161070760f31b81525081565b61051e60405180604001604052806002815260200161383760f01b81525081565b61051e60405180604001604052806002815260200161343760f01b81525081565b61051e60405180604001604052806002815260200161363960f01b81525081565b61051e604051806040016040528060018152602001603360f81b81525081565b61051e604051806040016040528060028152602001610d0d60f21b81525081565b61051e604051806040016040528060018152602001603560f81b81525081565b61051e60405180604001604052806002815260200161035360f41b81525081565b61051e60405180604001604052806002815260200161032360f41b81525081565b61051e60405180604001604052806002815260200161333560f01b81525081565b61051e60405180604001604052806002815260200161189960f11b81525081565b61051e60405180604001604052806002815260200161323360f01b81525081565b61051e604051806040016040528060028152602001611b9960f11b81525081565b61051e60405180604001604052806002815260200161323160f01b81525081565b61051e604051806040016040528060028152602001611b1960f11b81525081565b61051e604051806040016040528060018152602001601960f91b81525081565b61051e60405180604001604052806002815260200161333160f01b81525081565b61051e604051806040016040528060028152602001610ccd60f21b81525081565b61051e60405180604001604052806002815260200161383360f01b81525081565b61051e60405180604001604052806002815260200161033360f41b81525081565b61051e604051806040016040528060018152602001601b60f91b81525081565b61051e60405180604001604052806002815260200161323560f01b81525081565b61051e60405180604001604052806002815260200161323760f01b81525081565b61051e60405180604001604052806002815260200161313760f01b81525081565b61051e604051806040016040528060018152602001600760fb1b81525081565b61051e60405180604001604052806002815260200161031360f41b81525081565b61051e60405180604001604052806002815260200161353360f01b81525081565b61051e60405180604001604052806002815260200161353560f01b81525081565b61051e604051806040016040528060028152602001611a9960f11b81525081565b61051e60405180604001604052806002815260200161064760f31b81525081565b61051e60405180604001604052806002815260200161034360f41b81525081565b61051e60405180604001604052806002815260200161343960f01b81525081565b61051e60405180604001604052806002815260200161343160f01b81525081565b61051e60405180604001604052806002815260200161313960f01b81525081565b61051e60405180604001604052806002815260200161313560f01b81525081565b61051e60405180604001604052806002815260200161191960f11b81525081565b61051e60405180604001604052806002815260200161313360f01b81525081565b61051e60405180604001604052806002815260200161036360f41b81525081565b61051e604051806040016040528060028152602001611a1b60f11b81525081565b61051e60405180604001604052806002815260200161333360f01b81525081565b61051e60405180604001604052806002815260200161333760f01b81525081565b61051e60405180604001604052806002815260200161393160f01b81525081565b61051e60405180604001604052806002815260200161038360f41b81525081565b61051e60405180604001604052806002815260200161037360f41b81525081565b61051e6040518060400160405280600281526020016106a760f31b81525081565b61051e604051806040016040528060028152602001610d4d60f21b81525081565b61051e60405180604001604052806002815260200161343560f01b81525081565b61051e60405180604001604052806002815260200161363560f01b81525081565b61051e60405180604001604052806002815260200161363360f01b81525081565b61051e60405180604001604052806002815260200161343360f01b81525081565b61051e60405180604001604052806002815260200161313160f01b81525081565b61051e60405180604001604052806002815260200161373960f01b81525081565b61051e60405180604001604052806002815260200161363760f01b81525081565b61051e60405180604001604052806002815260200161373160f01b81525081565b61051e60405180604001604052806002815260200161383560f01b81525081565b61051e604051806040016040528060028152602001610c8d60f21b81525081565b61051e604051806040016040528060018152602001603160f81b81525081565b61051e60405180604001604052806002815260200161353160f01b81525081565b61051e604051806040016040528060028152602001611a1960f11b81525081565b61051e604051806040016040528060018152602001600d60fa1b81525081565b61051e60405180604001604052806002815260200161323960f01b81525081565b61051e60405180604001604052806002815260200161199960f11b81525081565b61051e60405180604001604052806002815260200161353760f01b81525081565b61051e604051806040016040528060028152602001611b9b60f11b81525081565b61051e6040518060400160405280600281526020016106e760f31b81525081565b61051e60405180604001604052806002815260200161353960f01b81525081565b61051e604051806040016040528060028152602001610e0d60f21b81525081565b61051e604051806040016040528060028152602001611c1960f11b81525081565b61051e60405180604001604052806002815260200161373760f01b81525081565b61051e604051806040016040528060028152602001610dcd60f21b81525081565b61051e6040518060400160405280600281526020016106c760f31b81525081565b61051e60405180604001604052806002815260200161363160f01b81525081565b61051e60405180604001604052806002815260200161333960f01b81525081565b61051e60405180604001604052806002815260200161373360f01b81525081565b61051e604051806040016040528060028152602001610d8d60f21b81525081565b61051e60405180604001604052806002815260200161383960f01b81525081565b61051e604051806040016040528060018152602001603760f81b81525081565b61051e60405180604001604052806002815260200161199b60f11b81525081565b61051e60405180604001604052806002815260200161383160f01b81525081565b61051e60405180604001604052806002815260200161039360f41b81525081565b61051e60405180604001604052806002815260200161066760f31b81525081565b61051e604051806040016040528060028152602001611a9b60f11b81525081565b61051e60405180604001604052806002815260200161189b60f11b81525081565b61051e604051806040016040528060028152602001611b1b60f11b81525081565b61051e60405180604001604052806002815260200161191b60f11b81525081565b61051e60405180604001604052806002815260200161373560f01b81525081565b600060208083528351808285015260005b818110156110d1578581018301518582016040015282016110b5565b818111156110e3576000604083870101525b50601f01601f191692909201604001939250505056fea164736f6c634300080a000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ACL_ADMIN_CANNOT_BE_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ADDRESSES_PROVIDER_ALREADY_ADDED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ADDRESSES_PROVIDER_NOT_REGISTERED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "AMOUNT_BIGGER_THAN_MAX_LOAN_SIZE_STABLE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ASSET_NOT_BORROWABLE_IN_ISOLATION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ASSET_NOT_LISTED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "BORROWING_NOT_ENABLED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "BORROW_CAP_EXCEEDED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "BRIDGE_PROTOCOL_FEE_INVALID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_MUST_BE_POOL";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_ASSET_LISTING_OR_POOL_ADMIN";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_ATOKEN";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_BRIDGE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_EMERGENCY_ADMIN";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_POOL_ADMIN";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_POOL_CONFIGURATOR";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_POOL_OR_EMERGENCY_ADMIN";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "CALLER_NOT_RISK_OR_POOL_ADMIN";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "COLLATERAL_BALANCE_IS_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "COLLATERAL_CANNOT_BE_LIQUIDATED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "COLLATERAL_CANNOT_COVER_NEW_BORROW";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "COLLATERAL_SAME_AS_BORROWING_CURRENCY";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEBT_CEILING_EXCEEDED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEBT_CEILING_NOT_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "EMODE_CATEGORY_RESERVED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FLASHLOAN_DISABLED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FLASHLOAN_PREMIUM_INVALID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "HEALTH_FACTOR_LOWER_THAN_LIQUIDATION_THRESHOLD";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "HEALTH_FACTOR_NOT_BELOW_THRESHOLD";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INCONSISTENT_EMODE_CATEGORY";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INCONSISTENT_FLASHLOAN_PARAMS";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INCONSISTENT_PARAMS_LENGTH";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INTEREST_RATE_REBALANCE_CONDITIONS_NOT_MET";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_ADDRESSES_PROVIDER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_ADDRESSES_PROVIDER_ID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_AMOUNT";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_BORROW_CAP";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_BURN_AMOUNT";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_DEBT_CEILING";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_DECIMALS";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_EMODE_CATEGORY";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_EMODE_CATEGORY_ASSIGNMENT";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_EMODE_CATEGORY_PARAMS";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_EXPIRATION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_FLASHLOAN_EXECUTOR_RETURN";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_INTEREST_RATE_MODE_SELECTED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_LIQUIDATION_PROTOCOL_FEE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_LIQ_BONUS";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_LIQ_THRESHOLD";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_LTV";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_MINT_AMOUNT";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_OPTIMAL_USAGE_RATIO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_RESERVE_FACTOR";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_RESERVE_INDEX";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_RESERVE_PARAMS";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_SIGNATURE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_SUPPLY_CAP";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "INVALID_UNBACKED_MINT_CAP";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "LTV_VALIDATION_FAILED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NOT_CONTRACT";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NOT_ENOUGH_AVAILABLE_USER_BALANCE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NO_DEBT_OF_SELECTED_TYPE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NO_EXPLICIT_AMOUNT_TO_REPAY_ON_BEHALF";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NO_MORE_RESERVES_ALLOWED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NO_OUTSTANDING_STABLE_DEBT";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "NO_OUTSTANDING_VARIABLE_DEBT";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "OPERATION_NOT_SUPPORTED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "POOL_ADDRESSES_DO_NOT_MATCH";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PRICE_ORACLE_SENTINEL_CHECK_FAILED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESERVE_ALREADY_ADDED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESERVE_ALREADY_INITIALIZED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESERVE_DEBT_NOT_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESERVE_FROZEN";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESERVE_INACTIVE";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESERVE_LIQUIDITY_NOT_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RESERVE_PAUSED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SILOED_BORROWING_VIOLATION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SPECIFIED_CURRENCY_NOT_BORROWED_BY_USER";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "STABLE_BORROWING_ENABLED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "STABLE_BORROWING_NOT_ENABLED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "STABLE_DEBT_NOT_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SUPPLY_CAP_EXCEEDED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "UNBACKED_MINT_CAP_EXCEEDED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "UNDERLYING_BALANCE_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "UNDERLYING_CANNOT_BE_RESCUED";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "UNDERLYING_CLAIMABLE_RIGHTS_NOT_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "USER_IN_ISOLATION_MODE_OR_LTV_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VARIABLE_DEBT_SUPPLY_NOT_ZERO";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZERO_ADDRESS_NOT_VALID";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ErrorsInterface;
    static connect(address: string, runner?: ContractRunner | null): Errors;
}
export {};
