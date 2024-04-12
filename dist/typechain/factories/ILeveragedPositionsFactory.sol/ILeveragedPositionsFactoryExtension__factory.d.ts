import { type ContractRunner } from "ethers";
import type { ILeveragedPositionsFactoryExtension, ILeveragedPositionsFactoryExtensionInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactoryExtension";
export declare class ILeveragedPositionsFactoryExtension__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "contract LeveragedPosition";
            readonly name: "position";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "collateral";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "stable";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "lendingProtocol";
            readonly type: "uint16";
        }];
        readonly name: "PositionCreated";
        readonly type: "event";
    }];
    static createInterface(): ILeveragedPositionsFactoryExtensionInterface;
    static connect(address: string, runner?: ContractRunner | null): ILeveragedPositionsFactoryExtension;
}
