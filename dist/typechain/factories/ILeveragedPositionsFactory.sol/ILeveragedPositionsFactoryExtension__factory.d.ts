import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILeveragedPositionsFactoryExtension, ILeveragedPositionsFactoryExtensionInterface } from "../../ILeveragedPositionsFactory.sol/ILeveragedPositionsFactoryExtension";
export declare class ILeveragedPositionsFactoryExtension__factory {
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "PositionCreated";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "position";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "contract LeveragedPosition";
        }, {
            readonly name: "collateral";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "stable";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "lendingProtocol";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ILeveragedPositionsFactoryExtensionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILeveragedPositionsFactoryExtension;
}
