"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolidlyLpTokenLiquidator__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
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
const _bytecode = "0x608060405234801561001057600080fd5b50610c33806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b57806310badf4e14610083575b600080fd5b604080518082018252601881527f536f6c69646c794c70546f6b656e4c697175696461746f7200000000000000006020820152905161007a9190610929565b60405180910390f35b6100966100913660046109bb565b6100b5565b604080516001600160a01b03909316835260208301919091520161007a565b60008060008590506000816001600160a01b03166322be3de16040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101219190610a6c565b90506000826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610163573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101879190610a95565b90506000836001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ed9190610a95565b60405163a9059cbb60e01b81526001600160a01b03861660048201819052602482018b905291925063a9059cbb906044016020604051808303816000875af115801561023d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102619190610a6c565b5060405163226bf2d160e21b815230600482015260009081906001600160a01b038716906389afcb449060240160408051808303816000875af11580156102ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d09190610ab2565b915091506000808a8060200190518101906102eb9190610ad6565b91509150856001600160a01b0316816001600160a01b031614610399576103138683866104a5565b6040516313dcfc5960e01b81526001600160a01b038316906313dcfc599061034c9087906000908b9087908e9030904290600401610b10565b6000604051808303816000875af115801561036b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103939190810190610b4b565b50610426565b6103a48583856104a5565b6040516313dcfc5960e01b81526001600160a01b038316906313dcfc59906103dd9086906000908a9087908e9030904290600401610b10565b6000604051808303816000875af11580156103fc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104249190810190610b4b565b505b6040516370a0823160e01b815230600482015290995089906001600160a01b038216906370a0823190602401602060405180830381865afa15801561046f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104939190610bf1565b98505050505050505050935093915050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156104f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105199190610bf1565b90508181101561055457801561053e5761053e6001600160a01b03851684600061055a565b6105546001600160a01b0385168460001961055a565b50505050565b8015806105d45750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156105ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d29190610bf1565b155b6106445760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261069690849061069b565b505050565b60006106f0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166107709092919063ffffffff16565b90508051600014806107115750808060200190518101906107119190610a6c565b6106965760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161063b565b606061077f8484600085610787565b949350505050565b6060824710156107e85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161063b565b600080866001600160a01b031685876040516108049190610c0a565b60006040518083038185875af1925050503d8060008114610841576040519150601f19603f3d011682016040523d82523d6000602084013e610846565b606091505b509150915061085787838387610862565b979650505050505050565b606083156108ce5782516108c7576001600160a01b0385163b6108c75760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161063b565b508161077f565b61077f83838151156108e35781518083602001fd5b8060405162461bcd60e51b815260040161063b9190610929565b60005b83811015610918578181015183820152602001610900565b838111156105545750506000910152565b60208152600082518060208401526109488160408501602087016108fd565b601f01601f19169190910160400192915050565b6001600160a01b038116811461097157600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156109b3576109b3610974565b604052919050565b6000806000606084860312156109d057600080fd5b83356109db8161095c565b92506020848101359250604085013567ffffffffffffffff80821115610a0057600080fd5b818701915087601f830112610a1457600080fd5b813581811115610a2657610a26610974565b610a38601f8201601f1916850161098a565b91508082528884828501011115610a4e57600080fd5b80848401858401376000848284010152508093505050509250925092565b600060208284031215610a7e57600080fd5b81518015158114610a8e57600080fd5b9392505050565b600060208284031215610aa757600080fd5b8151610a8e8161095c565b60008060408385031215610ac557600080fd5b505080516020909101519092909150565b60008060408385031215610ae957600080fd5b8251610af48161095c565b6020840151909250610b058161095c565b809150509250929050565b96875260208701959095526001600160a01b0393841660408701529183166060860152151560808501521660a083015260c082015260e00190565b60006020808385031215610b5e57600080fd5b825167ffffffffffffffff80821115610b7657600080fd5b818501915085601f830112610b8a57600080fd5b815181811115610b9c57610b9c610974565b8060051b9150610bad84830161098a565b8181529183018401918481019088841115610bc757600080fd5b938501935b83851015610be557845182529385019390850190610bcc565b98975050505050505050565b600060208284031215610c0357600080fd5b5051919050565b60008251610c1c8184602087016108fd565b919091019291505056fea164736f6c634300080a000a";
const isSuperArgs = (xs) => xs.length > 1;
class SolidlyLpTokenLiquidator__factory extends ethers_1.ContractFactory {
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
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SolidlyLpTokenLiquidator__factory = SolidlyLpTokenLiquidator__factory;
