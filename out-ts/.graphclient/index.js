"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.PnlQueryDocument = exports.PositionClosedQueryDocument = exports.PositionCreatedQueryDocument = exports.AdjustedRatioQueryDocument = exports.FundingQueryDocument = exports.getBuiltGraphSDK = exports.subscribe = exports.execute = exports.getBuiltGraphClient = exports.createBuiltMeshHTTPHandler = exports.getMeshOptions = exports.rawServeConfig = void 0;
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const utils_3 = require("@graphql-mesh/utils");
const cache_localforage_1 = __importDefault(require("@graphql-mesh/cache-localforage"));
const fetch_1 = require("@whatwg-node/fetch");
const graphql_1 = __importDefault(require("@graphql-mesh/graphql"));
const merger_bare_1 = __importDefault(require("@graphql-mesh/merger-bare"));
const utils_4 = require("@graphql-mesh/utils");
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const importedModule$0 = __importStar(require("./sources/levato/introspectionSchema"));
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/levato/introspectionSchema":
            return Promise.resolve(importedModule$0);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.graphclient', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = undefined;
async function getMeshOptions() {
    const pubsub = new utils_2.PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new utils_3.DefaultLogger("GraphClient");
    const cache = new cache_localforage_1.default({
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
    const levatoHandler = new graphql_1.default({
        name: "levato",
        config: { "endpoint": "https://gateway-arbitrum.network.thegraph.com/api/b70fcc64ad255db024f4b2017947c661/subgraphs/id/9VFBtBBMzX4K7xZcdyzKEAU5xF8mq3dekmFWuYAhX3CY" },
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
    const merger = new merger_bare_1.default({
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
                    document: exports.FundingQueryDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.FundingQueryDocument);
                    },
                    location: 'FundingQueryDocument.graphql'
                }, {
                    document: exports.AdjustedRatioQueryDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.AdjustedRatioQueryDocument);
                    },
                    location: 'AdjustedRatioQueryDocument.graphql'
                }, {
                    document: exports.PositionCreatedQueryDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.PositionCreatedQueryDocument);
                    },
                    location: 'PositionCreatedQueryDocument.graphql'
                }, {
                    document: exports.PositionClosedQueryDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.PositionClosedQueryDocument);
                    },
                    location: 'PositionClosedQueryDocument.graphql'
                }, {
                    document: exports.PnlQueryDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.PnlQueryDocument);
                    },
                    location: 'PnlQueryDocument.graphql'
                }
            ];
        },
        fetchFn: fetch_1.fetch,
    };
}
exports.getMeshOptions = getMeshOptions;
function createBuiltMeshHTTPHandler() {
    return (0, http_1.createMeshHTTPHandler)({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
exports.createBuiltMeshHTTPHandler = createBuiltMeshHTTPHandler;
let meshInstance$;
function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => (0, runtime_1.getMesh)(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
exports.getBuiltGraphClient = getBuiltGraphClient;
const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
exports.execute = execute;
const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
exports.subscribe = subscribe;
function getBuiltGraphSDK(globalContext) {
    const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
exports.getBuiltGraphSDK = getBuiltGraphSDK;
exports.FundingQueryDocument = (0, utils_1.gql) `
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
exports.AdjustedRatioQueryDocument = (0, utils_1.gql) `
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
exports.PositionCreatedQueryDocument = (0, utils_1.gql) `
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
  }
}
    `;
exports.PositionClosedQueryDocument = (0, utils_1.gql) `
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
exports.PnlQueryDocument = (0, utils_1.gql) `
    query PnlQuery($trader: Bytes) {
  positions(where: {trader: $trader}) {
    id
    collateral
    fundedCollateralAmount
  }
}
    `;
function getSdk(requester) {
    return {
        FundingQuery(variables, options) {
            return requester(exports.FundingQueryDocument, variables, options);
        },
        AdjustedRatioQuery(variables, options) {
            return requester(exports.AdjustedRatioQueryDocument, variables, options);
        },
        PositionCreatedQuery(variables, options) {
            return requester(exports.PositionCreatedQueryDocument, variables, options);
        },
        PositionClosedQuery(variables, options) {
            return requester(exports.PositionClosedQueryDocument, variables, options);
        },
        PnlQuery(variables, options) {
            return requester(exports.PnlQueryDocument, variables, options);
        }
    };
}
exports.getSdk = getSdk;
