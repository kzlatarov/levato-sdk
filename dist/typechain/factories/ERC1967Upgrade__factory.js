/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        type: "event",
        name: "AdminChanged",
        inputs: [
            {
                name: "previousAdmin",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "newAdmin",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "BeaconUpgraded",
        inputs: [
            {
                name: "beacon",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Upgraded",
        inputs: [
            {
                name: "implementation",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
];
export class ERC1967Upgrade__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
ERC1967Upgrade__factory.abi = _abi;
