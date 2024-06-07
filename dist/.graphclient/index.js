import { gql } from '@graphql-mesh/utils';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';
import GraphqlHandler from "@graphql-mesh/graphql";
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import * as importedModule$0 from "./sources/levato/introspectionSchema";
const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/levato/introspectionSchema":
            return Promise.resolve(importedModule$0);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
}), {
    readonly: true,
    validate: false
});
export const rawServeConfig = undefined;
export async function getMeshOptions() {
    const pubsub = new PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new DefaultLogger("GraphClient");
    const cache = new MeshCache({
        ...{},
        importFn,
        store: rootStore.child('cache'),
        pubsub,
        logger,
    });
    const sources = [];
    const transforms = [];
    const additionalEnvelopPlugins = [];
    const levatoTransforms = [];
    const additionalTypeDefs = [];
    const levatoHandler = new GraphqlHandler({
        name: "levato",
        config: { "endpoint": "https://api.studio.thegraph.com/query/38975/levato-mode/version/latest" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("levato"),
        logger: logger.child("levato"),
        importFn,
    });
    sources[0] = {
        name: 'levato',
        handler: levatoHandler,
        transforms: levatoTransforms
    };
    const additionalResolvers = [];
    const merger = new BareMerger({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
    });
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        additionalEnvelopPlugins,
        get documents() {
            return [
                {
                    document: FundingQueryDocument,
                    get rawSDL() {
                        return printWithCache(FundingQueryDocument);
                    },
                    location: 'FundingQueryDocument.graphql'
                }, {
                    document: AdjustedRatioQueryDocument,
                    get rawSDL() {
                        return printWithCache(AdjustedRatioQueryDocument);
                    },
                    location: 'AdjustedRatioQueryDocument.graphql'
                }, {
                    document: PositionCreatedQueryDocument,
                    get rawSDL() {
                        return printWithCache(PositionCreatedQueryDocument);
                    },
                    location: 'PositionCreatedQueryDocument.graphql'
                }, {
                    document: PositionClosedQueryDocument,
                    get rawSDL() {
                        return printWithCache(PositionClosedQueryDocument);
                    },
                    location: 'PositionClosedQueryDocument.graphql'
                }, {
                    document: PnlQueryDocument,
                    get rawSDL() {
                        return printWithCache(PnlQueryDocument);
                    },
                    location: 'PnlQueryDocument.graphql'
                }
            ];
        },
        fetchFn,
    };
}
export function createBuiltMeshHTTPHandler() {
    return createMeshHTTPHandler({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
let meshInstance$;
export function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
export const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
export const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK(globalContext) {
    const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export const FundingQueryDocument = gql `
    query FundingQuery($positionAddresses: [Bytes!]) {
  positionFundeds(where: {position_in: $positionAddresses}) {
    position
    fundingAmount
    fundingAsset
    collateralAmountFunded
    totalCollateralAmount
    executionPrice
    blockTimestamp
    blockNumber
    transactionHash
    id
  }
}
    `;
export const AdjustedRatioQueryDocument = gql `
    query AdjustedRatioQuery($positionAddresses: [Bytes!]) {
  positionRatioAdjusteds(where: {position_in: $positionAddresses}) {
    position
    realizedRatio
    equityAmountBefore
    equityAmountAfter
    executionPrice
    blockTimestamp
    blockNumber
    transactionHash
    id
  }
}
    `;
export const PositionCreatedQueryDocument = gql `
    query PositionCreatedQuery($positionAddresses: [Bytes!]) {
  positionCreateds(where: {position_in: $positionAddresses}) {
    position
    collateral
    stable
    user
    lendingProtocol
    executionPrice
    blockTimestamp
    blockNumber
    transactionHash
    id
    usdcPriceOnCreation
  }
}
    `;
export const PositionClosedQueryDocument = gql `
    query PositionClosedQuery($positionAddresses: [Bytes!]) {
  positionCloseds(where: {position_in: $positionAddresses}) {
    position
    withdrawAmount
    equityAmountBefore
    executionPrice
    blockTimestamp
    blockNumber
    transactionHash
    id
  }
}
    `;
export const PnlQueryDocument = gql `
    query PnlQuery($trader: Bytes) {
  positions(where: {trader: $trader}) {
    id
    collateral
    fundedCollateralAmount
  }
}
    `;
export function getSdk(requester) {
    return {
        FundingQuery(variables, options) {
            return requester(FundingQueryDocument, variables, options);
        },
        AdjustedRatioQuery(variables, options) {
            return requester(AdjustedRatioQueryDocument, variables, options);
        },
        PositionCreatedQuery(variables, options) {
            return requester(PositionCreatedQueryDocument, variables, options);
        },
        PositionClosedQuery(variables, options) {
            return requester(PositionClosedQueryDocument, variables, options);
        },
        PnlQuery(variables, options) {
            return requester(PnlQueryDocument, variables, options);
        }
    };
}
