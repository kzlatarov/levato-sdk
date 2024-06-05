var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LevatoSDK_signer, _LevatoSDK_lensContract, _LevatoSDK_factoryContract, _LevatoSDK_creditDelegatorContract, _LevatoSDK_flashLoanRouterContract;
import { BigNumber, ethers } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import { getBuiltGraphSDK } from '../.graphclient';
import { FlashloanRouter__factory, ICreditDelegator__factory, ILeveragedPositionsFactory__factory, LeveragedPosition__factory, LeveragedPositionsLens__factory } from '../typechain';
class LevatoSDK {
    constructor({ signer, lensContractAddress, factoryContractAddress, creditDelegatorContractAddress, flashLoanRouterContractAddress }) {
        // Private variables
        _LevatoSDK_signer.set(this, void 0);
        _LevatoSDK_lensContract.set(this, void 0);
        _LevatoSDK_factoryContract.set(this, void 0);
        _LevatoSDK_creditDelegatorContract.set(this, void 0);
        _LevatoSDK_flashLoanRouterContract.set(this, void 0);
        __classPrivateFieldSet(this, _LevatoSDK_signer, signer, "f");
        __classPrivateFieldSet(this, _LevatoSDK_lensContract, LeveragedPositionsLens__factory.connect(lensContractAddress, signer), "f");
        __classPrivateFieldSet(this, _LevatoSDK_factoryContract, ILeveragedPositionsFactory__factory.connect(factoryContractAddress, signer), "f");
        __classPrivateFieldSet(this, _LevatoSDK_creditDelegatorContract, ICreditDelegator__factory.connect(creditDelegatorContractAddress, signer), "f");
        __classPrivateFieldSet(this, _LevatoSDK_flashLoanRouterContract, FlashloanRouter__factory.connect(flashLoanRouterContractAddress, signer), "f");
    }
    // Getters
    get signer() {
        return __classPrivateFieldGet(this, _LevatoSDK_signer, "f");
    }
    get factoryContract() {
        return __classPrivateFieldGet(this, _LevatoSDK_factoryContract, "f");
    }
    get lensContract() {
        return __classPrivateFieldGet(this, _LevatoSDK_lensContract, "f");
    }
    get creditDelegatorContract() {
        return __classPrivateFieldGet(this, _LevatoSDK_creditDelegatorContract, "f");
    }
    get flashLoanRouterContract() {
        return __classPrivateFieldGet(this, _LevatoSDK_flashLoanRouterContract, "f");
    }
    // Public get methods
    /**
     * Get borrow rates for underlying assets
     * @param assetsUnderlying
     * @returns A map with addresses as keys and percentages as values
     */
    getAssetsBorrowRates(assetsUnderlying) {
        return __awaiter(this, void 0, void 0, function* () {
            const rates = yield __classPrivateFieldGet(this, _LevatoSDK_lensContract, "f").getAssetsBorrowRates(assetsUnderlying);
            const ratesMap = new Map();
            if (rates && rates.length) {
                for (let i = 0; i < rates.length; i++) {
                    ratesMap.set(assetsUnderlying[i], `${Number(formatEther(rates[i].mul(BigNumber.from(100)))).toFixed(3)}%`);
                }
            }
            return ratesMap;
        });
    }
    /**
     * Get the max leverage ratio
     * for a given collateral
     * @param { string } collateralUnderlying
     * @param { string } collateralAmount
     * @param { string } borrowAssetUnderlying
     * @returns BigNumber representing the max leverage value
     */
    getMaxLeverageRatio(collateralUnderlying, collateralAmount, borrowAssetUnderlying) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield __classPrivateFieldGet(this, _LevatoSDK_lensContract, "f").getMaxLeverageRatio(collateralUnderlying, collateralAmount, borrowAssetUnderlying);
            return result;
        });
    }
    /**
     * Get liquidation threshold
     * @param collateralAsset
     * @param collateralAmount
     * @param borrowedAsset
     * @param leverageRatio
     * @returns BigNumber representing the liquidation threshold
     */
    getLiquidationThreshold(collateralAsset, collateralAmount, borrowedAsset, leverageRatio) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield __classPrivateFieldGet(this, _LevatoSDK_lensContract, "f").getLiquidationThreshold(collateralAsset, collateralAmount.toString(), borrowedAsset, leverageRatio.toString());
            return result;
        });
    }
    /**
     * Get positions info
     * @param { string } address
     * @returns Opened and closed positions info in descending order
     */
    getPositionsInfo(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const [positions] = yield __classPrivateFieldGet(this, _LevatoSDK_factoryContract, "f").getPositionsByAccount(address);
            const apys = positions.map(() => '0');
            const positionsData = yield __classPrivateFieldGet(this, _LevatoSDK_lensContract, "f").callStatic.getPositionsInfo(JSON.parse(JSON.stringify(positions)), apys);
            const openPositions = [];
            const closedPositions = [];
            for (let i = 0; i < positionsData.length; i++) {
                positionsData[i].closed
                    ? closedPositions.push(positionsData[i])
                    : openPositions.push(positionsData[i]);
            }
            // Reverse to sort them in descending order
            return [openPositions.reverse(), closedPositions.reverse()];
        });
    }
    /**
     * Get positions PnL
     * @param { string } address
     * @returns A map with positions addresses as keys and PnL data
     */
    getPositionsPnl(account) {
        return __awaiter(this, void 0, void 0, function* () {
            const sdk = getBuiltGraphSDK();
            const query = sdk.PnlQuery({ trader: account });
            if (!query) {
                console.log(`TODO fix the queries`);
            }
            else {
                const result = yield query;
                console.log(`result is ${JSON.stringify(result)}`);
                const pnlData = result === null || result === void 0 ? void 0 : result.positions;
                if (pnlData) {
                    const newMap = new Map();
                    for (let i = 0; i < pnlData.length; i++) {
                        const positionPnLData = pnlData[i];
                        positionPnLData.id = ethers.utils.getAddress(positionPnLData.id);
                        newMap.set(positionPnLData.id, positionPnLData);
                    }
                    return newMap;
                }
                else {
                    console.error(`missing PnL data for ${account} ${pnlData}`);
                }
            }
            return null;
        });
    }
    // Public mutations
    /**
     * Open a position
     * @param { string } collateralUnderlying
     * @param { string } stableTokenUnderlying
     * @param { BigNumber } amount
     * @param { string } fundingTokenUnderlying
     * @param { string } leverage
     * @param { type }
     * @returns The transaction hash
     */
    openPosition(collateralUnderlying, stableTokenUnderlying, amount, fundingTokenUnderlying, leverage, isShort) {
        return __awaiter(this, void 0, void 0, function* () {
            const tx = yield __classPrivateFieldGet(this, _LevatoSDK_factoryContract, "f").createAndFundPositionAtRatio(collateralUnderlying, ethers.constants.AddressZero, stableTokenUnderlying, isShort, fundingTokenUnderlying, amount, leverage !== null && leverage !== void 0 ? leverage : '1');
            return tx;
        });
    }
    /**
     * Close a position
     * @param { string } contractAddress
     * @returns The transaction hash
     */
    closePosition(contractAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const leveragedPositionContract = LeveragedPosition__factory.connect(contractAddress, __classPrivateFieldGet(this, _LevatoSDK_signer, "f"));
            const tx = yield leveragedPositionContract['closePosition()']();
            return tx;
        });
    }
}
_LevatoSDK_signer = new WeakMap(), _LevatoSDK_lensContract = new WeakMap(), _LevatoSDK_factoryContract = new WeakMap(), _LevatoSDK_creditDelegatorContract = new WeakMap(), _LevatoSDK_flashLoanRouterContract = new WeakMap();
export default LevatoSDK;
