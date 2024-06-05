/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "redeem",
        inputs: [
            {
                name: "inputToken",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "inputAmount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "strategyData",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "outputToken",
                type: "address",
                internalType: "contract IERC20Upgradeable",
            },
            {
                name: "outputAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061115e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b57806310badf4e1461007b575b600080fd5b604080518082018252601581527429b7b634b2363ca6382a37b5b2b72bb930b83832b960591b602082015290516100729190610bde565b60405180910390f35b61008e610089366004610cbb565b6100ad565b604080516001600160a01b039093168352602083019190915201610072565b604080516101408101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e0820181905261010082015261012081018290528190838060200190518101906101129190610e57565b61010085015260e08401526001600160a01b0390811660c0840181905291166040808401919091528051630dfe168160e01b81529051630dfe1681916004808201926020929091908290030181865afa158015610173573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101979190610ee2565b81606001906001600160a01b031690816001600160a01b0316815250508060c001516001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021a9190610ee2565b81608001906001600160a01b031690816001600160a01b0316815250508060c001516001600160a01b03166322be3de16040518163ffffffff1660e01b8152600401602060405180830381865afa158015610279573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029d9190610f06565b151560a08201526102af600286610f37565b602082018190526102c09086610f59565b815260608101516001600160a01b038781169116141561048757600081604001516001600160a01b0316639881fcb483600001518460e001516040518363ffffffff1660e01b8152600401610316929190610fcf565b600060405180830381865afa158015610333573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261035b9190810190610ff0565b8260e00151518151811061037157610371611081565b602002602001015190506000826000015182670de0b6b3a76400006103969190611097565b6103a09190610f37565b6040808501516060860151608087015160a0880151602089015194516326283ecf60e21b81526001600160a01b03938416600482015291831660248301521515604482015260648101939093526084830186905292935060009283929116906398a0fb3c9060a401606060405180830381865afa158015610425573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044991906110b6565b5090925090506104598383611097565b610472826ec097ce7bc90715b34b9f1000000000611097565b61047c9190610f37565b610120860152505050505b856001600160a01b031681608001516001600160a01b0316141561063957600081604001516001600160a01b0316639881fcb483602001518461010001516040518363ffffffff1660e01b81526004016104e2929190610fcf565b600060405180830381865afa1580156104ff573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105279190810190610ff0565b826101000151518151811061053e5761053e611081565b602002602001015190506000826020015182670de0b6b3a76400006105639190611097565b61056d9190610f37565b6040808501516060860151608087015160a0880151885194516326283ecf60e21b81526001600160a01b03938416600482015291831660248301521515604482015260648101879052608481019390935292935060009283929116906398a0fb3c9060a401606060405180830381865afa1580156105ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061391906110b6565b509092509050816106248483611097565b61062e9190610f37565b610120860152505050505b61012081015161065190670de0b6b3a76400006110e4565b61066386670de0b6b3a7640000611097565b61066d9190610f37565b6020820181905261067e9086610f59565b815260608101516001600160a01b038781169116141561079c576040818101518251915163095ea7b360e01b81526001600160a01b039182166004820152602481019290925287169063095ea7b3906044016020604051808303816000875af11580156106ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107139190610f06565b50604080820151825160e08401519251631e82ecdb60e31b81526001600160a01b039092169263f41766d8926107539291600091309042906004016110fc565b6000604051808303816000875af1158015610772573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261079a9190810190610ff0565b505b856001600160a01b031681608001516001600160a01b031614156108c4576040808201516020830151915163095ea7b360e01b81526001600160a01b039182166004820152602481019290925287169063095ea7b3906044016020604051808303816000875af1158015610814573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108389190610f06565b5080604001516001600160a01b031663f41766d88260200151600084610100015130426040518663ffffffff1660e01b815260040161087b9594939291906110fc565b6000604051808303816000875af115801561089a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108c29190810190610ff0565b505b60608101516040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561090f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109339190611138565b60808301516040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610983573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a79190611138565b6060840151604080860151905163095ea7b360e01b81526001600160a01b03918216600482015260248101869052929350169063095ea7b3906044016020604051808303816000875af1158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190610f06565b506080830151604080850151905163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b3906044016020604051808303816000875af1158015610a80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa49190610f06565b506040808401516060850151608086015160a08701519351635a47ddc360e01b81526001600160a01b039283166004820152908216602482015292151560448401526064830185905260848301849052600160a4840181905260c48401523060e4840152426101048401521690635a47ddc390610124016060604051808303816000875af1158015610b3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5e91906110b6565b50505060c08301516040516370a0823160e01b81523060048201529095506001600160a01b038616906370a0823190602401602060405180830381865afa158015610bad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd19190611138565b9350505050935093915050565b600060208083528351808285015260005b81811015610c0b57858101830151858201604001528201610bef565b81811115610c1d576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114610c4857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610c8457610c84610c4b565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610cb357610cb3610c4b565b604052919050565b600080600060608486031215610cd057600080fd5b8335610cdb81610c33565b92506020848101359250604085013567ffffffffffffffff80821115610d0057600080fd5b818701915087601f830112610d1457600080fd5b813581811115610d2657610d26610c4b565b610d38601f8201601f19168501610c8a565b91508082528884828501011115610d4e57600080fd5b80848401858401376000848284010152508093505050509250925092565b600067ffffffffffffffff821115610d8657610d86610c4b565b5060051b60200190565b80518015158114610da057600080fd5b919050565b600082601f830112610db657600080fd5b81516020610dcb610dc683610d6c565b610c8a565b82815260609283028501820192828201919087851115610dea57600080fd5b8387015b85811015610e4a5781818a031215610e065760008081fd5b610e0e610c61565b8151610e1981610c33565b815281860151610e2881610c33565b818701526040610e39838201610d90565b908201528452928401928101610dee565b5090979650505050505050565b60008060008060808587031215610e6d57600080fd5b8451610e7881610c33565b6020860151909450610e8981610c33565b604086015190935067ffffffffffffffff80821115610ea757600080fd5b610eb388838901610da5565b93506060870151915080821115610ec957600080fd5b50610ed687828801610da5565b91505092959194509250565b600060208284031215610ef457600080fd5b8151610eff81610c33565b9392505050565b600060208284031215610f1857600080fd5b610eff82610d90565b634e487b7160e01b600052601160045260246000fd5b600082610f5457634e487b7160e01b600052601260045260246000fd5b500490565b600082821015610f6b57610f6b610f21565b500390565b600081518084526020808501945080840160005b83811015610fc457815180516001600160a01b03908116895284820151168489015260409081015115159088015260609096019590820190600101610f84565b509495945050505050565b828152604060208201526000610fe86040830184610f70565b949350505050565b6000602080838503121561100357600080fd5b825167ffffffffffffffff81111561101a57600080fd5b8301601f8101851361102b57600080fd5b8051611039610dc682610d6c565b81815260059190911b8201830190838101908783111561105857600080fd5b928401925b828410156110765783518252928401929084019061105d565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b60008160001904831182151516156110b1576110b1610f21565b500290565b6000806000606084860312156110cb57600080fd5b8351925060208401519150604084015190509250925092565b600082198211156110f7576110f7610f21565b500190565b85815284602082015260a06040820152600061111b60a0830186610f70565b6001600160a01b0394909416606083015250608001529392505050565b60006020828403121561114a57600080fd5b505191905056fea164736f6c634300080a000a";
const isSuperArgs = (xs) => xs.length > 1;
export class SolidlyLpTokenWrapper__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
SolidlyLpTokenWrapper__factory.bytecode = _bytecode;
SolidlyLpTokenWrapper__factory.abi = _abi;
