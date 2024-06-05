// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { LevatoTypes } from './sources/levato/types';
import * as importedModule$0 from "./sources/levato/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
  Timestamp: any;
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type BorrowAsPosition = {
  id: Scalars['Bytes'];
  position: Scalars['Bytes'];
  asset: Scalars['Bytes'];
  borrowAmount: Scalars['BigInt'];
  scaledATokensMinted: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type BorrowAsPosition_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  position?: InputMaybe<Scalars['Bytes']>;
  position_not?: InputMaybe<Scalars['Bytes']>;
  position_gt?: InputMaybe<Scalars['Bytes']>;
  position_lt?: InputMaybe<Scalars['Bytes']>;
  position_gte?: InputMaybe<Scalars['Bytes']>;
  position_lte?: InputMaybe<Scalars['Bytes']>;
  position_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_contains?: InputMaybe<Scalars['Bytes']>;
  position_not_contains?: InputMaybe<Scalars['Bytes']>;
  asset?: InputMaybe<Scalars['Bytes']>;
  asset_not?: InputMaybe<Scalars['Bytes']>;
  asset_gt?: InputMaybe<Scalars['Bytes']>;
  asset_lt?: InputMaybe<Scalars['Bytes']>;
  asset_gte?: InputMaybe<Scalars['Bytes']>;
  asset_lte?: InputMaybe<Scalars['Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_contains?: InputMaybe<Scalars['Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']>;
  borrowAmount?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_not?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_gt?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_lt?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_gte?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_lte?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaledATokensMinted?: InputMaybe<Scalars['BigInt']>;
  scaledATokensMinted_not?: InputMaybe<Scalars['BigInt']>;
  scaledATokensMinted_gt?: InputMaybe<Scalars['BigInt']>;
  scaledATokensMinted_lt?: InputMaybe<Scalars['BigInt']>;
  scaledATokensMinted_gte?: InputMaybe<Scalars['BigInt']>;
  scaledATokensMinted_lte?: InputMaybe<Scalars['BigInt']>;
  scaledATokensMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaledATokensMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BorrowAsPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BorrowAsPosition_filter>>>;
};

export type BorrowAsPosition_orderBy =
  | 'id'
  | 'position'
  | 'asset'
  | 'borrowAmount'
  | 'scaledATokensMinted'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Liquidation = {
  id: Scalars['Bytes'];
  liquidator: Scalars['Bytes'];
  position: Scalars['Bytes'];
  borrowedAsset: Scalars['Bytes'];
  debtToRepay: Scalars['BigInt'];
  collateralAsset: Scalars['Bytes'];
  actualSeizedStableAmount: Scalars['BigInt'];
  executionPrice: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type Liquidation_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidator?: InputMaybe<Scalars['Bytes']>;
  liquidator_not?: InputMaybe<Scalars['Bytes']>;
  liquidator_gt?: InputMaybe<Scalars['Bytes']>;
  liquidator_lt?: InputMaybe<Scalars['Bytes']>;
  liquidator_gte?: InputMaybe<Scalars['Bytes']>;
  liquidator_lte?: InputMaybe<Scalars['Bytes']>;
  liquidator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidator_contains?: InputMaybe<Scalars['Bytes']>;
  liquidator_not_contains?: InputMaybe<Scalars['Bytes']>;
  position?: InputMaybe<Scalars['Bytes']>;
  position_not?: InputMaybe<Scalars['Bytes']>;
  position_gt?: InputMaybe<Scalars['Bytes']>;
  position_lt?: InputMaybe<Scalars['Bytes']>;
  position_gte?: InputMaybe<Scalars['Bytes']>;
  position_lte?: InputMaybe<Scalars['Bytes']>;
  position_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_contains?: InputMaybe<Scalars['Bytes']>;
  position_not_contains?: InputMaybe<Scalars['Bytes']>;
  borrowedAsset?: InputMaybe<Scalars['Bytes']>;
  borrowedAsset_not?: InputMaybe<Scalars['Bytes']>;
  borrowedAsset_gt?: InputMaybe<Scalars['Bytes']>;
  borrowedAsset_lt?: InputMaybe<Scalars['Bytes']>;
  borrowedAsset_gte?: InputMaybe<Scalars['Bytes']>;
  borrowedAsset_lte?: InputMaybe<Scalars['Bytes']>;
  borrowedAsset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  borrowedAsset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  borrowedAsset_contains?: InputMaybe<Scalars['Bytes']>;
  borrowedAsset_not_contains?: InputMaybe<Scalars['Bytes']>;
  debtToRepay?: InputMaybe<Scalars['BigInt']>;
  debtToRepay_not?: InputMaybe<Scalars['BigInt']>;
  debtToRepay_gt?: InputMaybe<Scalars['BigInt']>;
  debtToRepay_lt?: InputMaybe<Scalars['BigInt']>;
  debtToRepay_gte?: InputMaybe<Scalars['BigInt']>;
  debtToRepay_lte?: InputMaybe<Scalars['BigInt']>;
  debtToRepay_in?: InputMaybe<Array<Scalars['BigInt']>>;
  debtToRepay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralAsset?: InputMaybe<Scalars['Bytes']>;
  collateralAsset_not?: InputMaybe<Scalars['Bytes']>;
  collateralAsset_gt?: InputMaybe<Scalars['Bytes']>;
  collateralAsset_lt?: InputMaybe<Scalars['Bytes']>;
  collateralAsset_gte?: InputMaybe<Scalars['Bytes']>;
  collateralAsset_lte?: InputMaybe<Scalars['Bytes']>;
  collateralAsset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateralAsset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateralAsset_contains?: InputMaybe<Scalars['Bytes']>;
  collateralAsset_not_contains?: InputMaybe<Scalars['Bytes']>;
  actualSeizedStableAmount?: InputMaybe<Scalars['BigInt']>;
  actualSeizedStableAmount_not?: InputMaybe<Scalars['BigInt']>;
  actualSeizedStableAmount_gt?: InputMaybe<Scalars['BigInt']>;
  actualSeizedStableAmount_lt?: InputMaybe<Scalars['BigInt']>;
  actualSeizedStableAmount_gte?: InputMaybe<Scalars['BigInt']>;
  actualSeizedStableAmount_lte?: InputMaybe<Scalars['BigInt']>;
  actualSeizedStableAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actualSeizedStableAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice?: InputMaybe<Scalars['BigInt']>;
  executionPrice_not?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Liquidation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Liquidation_filter>>>;
};

export type Liquidation_orderBy =
  | 'id'
  | 'liquidator'
  | 'position'
  | 'borrowedAsset'
  | 'debtToRepay'
  | 'collateralAsset'
  | 'actualSeizedStableAmount'
  | 'executionPrice'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Position = {
  id: Scalars['Bytes'];
  trader: Scalars['Bytes'];
  collateral: Scalars['Bytes'];
  stable: Scalars['Bytes'];
  lendingProtocol: Scalars['Int'];
  fundedCollateralAmount: Scalars['BigInt'];
};

export type PositionClosed = {
  id: Scalars['Bytes'];
  position: Scalars['Bytes'];
  withdrawAmount: Scalars['BigInt'];
  equityAmountBefore: Scalars['BigInt'];
  executionPrice: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type PositionClosed_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  position?: InputMaybe<Scalars['Bytes']>;
  position_not?: InputMaybe<Scalars['Bytes']>;
  position_gt?: InputMaybe<Scalars['Bytes']>;
  position_lt?: InputMaybe<Scalars['Bytes']>;
  position_gte?: InputMaybe<Scalars['Bytes']>;
  position_lte?: InputMaybe<Scalars['Bytes']>;
  position_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_contains?: InputMaybe<Scalars['Bytes']>;
  position_not_contains?: InputMaybe<Scalars['Bytes']>;
  withdrawAmount?: InputMaybe<Scalars['BigInt']>;
  withdrawAmount_not?: InputMaybe<Scalars['BigInt']>;
  withdrawAmount_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawAmount_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawAmount_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawAmount_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  equityAmountBefore?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_not?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_gt?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_lt?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_gte?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_lte?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_in?: InputMaybe<Array<Scalars['BigInt']>>;
  equityAmountBefore_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice?: InputMaybe<Scalars['BigInt']>;
  executionPrice_not?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionClosed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionClosed_filter>>>;
};

export type PositionClosed_orderBy =
  | 'id'
  | 'position'
  | 'withdrawAmount'
  | 'equityAmountBefore'
  | 'executionPrice'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type PositionCreated = {
  id: Scalars['Bytes'];
  user: Scalars['Bytes'];
  position: Scalars['Bytes'];
  collateral: Scalars['Bytes'];
  stable: Scalars['Bytes'];
  lendingProtocol: Scalars['Int'];
  executionPrice: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type PositionCreated_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_gt?: InputMaybe<Scalars['Bytes']>;
  user_lt?: InputMaybe<Scalars['Bytes']>;
  user_gte?: InputMaybe<Scalars['Bytes']>;
  user_lte?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  position?: InputMaybe<Scalars['Bytes']>;
  position_not?: InputMaybe<Scalars['Bytes']>;
  position_gt?: InputMaybe<Scalars['Bytes']>;
  position_lt?: InputMaybe<Scalars['Bytes']>;
  position_gte?: InputMaybe<Scalars['Bytes']>;
  position_lte?: InputMaybe<Scalars['Bytes']>;
  position_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_contains?: InputMaybe<Scalars['Bytes']>;
  position_not_contains?: InputMaybe<Scalars['Bytes']>;
  collateral?: InputMaybe<Scalars['Bytes']>;
  collateral_not?: InputMaybe<Scalars['Bytes']>;
  collateral_gt?: InputMaybe<Scalars['Bytes']>;
  collateral_lt?: InputMaybe<Scalars['Bytes']>;
  collateral_gte?: InputMaybe<Scalars['Bytes']>;
  collateral_lte?: InputMaybe<Scalars['Bytes']>;
  collateral_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateral_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateral_contains?: InputMaybe<Scalars['Bytes']>;
  collateral_not_contains?: InputMaybe<Scalars['Bytes']>;
  stable?: InputMaybe<Scalars['Bytes']>;
  stable_not?: InputMaybe<Scalars['Bytes']>;
  stable_gt?: InputMaybe<Scalars['Bytes']>;
  stable_lt?: InputMaybe<Scalars['Bytes']>;
  stable_gte?: InputMaybe<Scalars['Bytes']>;
  stable_lte?: InputMaybe<Scalars['Bytes']>;
  stable_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stable_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stable_contains?: InputMaybe<Scalars['Bytes']>;
  stable_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingProtocol?: InputMaybe<Scalars['Int']>;
  lendingProtocol_not?: InputMaybe<Scalars['Int']>;
  lendingProtocol_gt?: InputMaybe<Scalars['Int']>;
  lendingProtocol_lt?: InputMaybe<Scalars['Int']>;
  lendingProtocol_gte?: InputMaybe<Scalars['Int']>;
  lendingProtocol_lte?: InputMaybe<Scalars['Int']>;
  lendingProtocol_in?: InputMaybe<Array<Scalars['Int']>>;
  lendingProtocol_not_in?: InputMaybe<Array<Scalars['Int']>>;
  executionPrice?: InputMaybe<Scalars['BigInt']>;
  executionPrice_not?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionCreated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionCreated_filter>>>;
};

export type PositionCreated_orderBy =
  | 'id'
  | 'user'
  | 'position'
  | 'collateral'
  | 'stable'
  | 'lendingProtocol'
  | 'executionPrice'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type PositionFunded = {
  id: Scalars['Bytes'];
  position: Scalars['Bytes'];
  fundingAsset: Scalars['Bytes'];
  fundingAmount: Scalars['BigInt'];
  totalCollateralAmount: Scalars['BigInt'];
  collateralAmountFunded: Scalars['BigInt'];
  executionPrice: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type PositionFunded_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  position?: InputMaybe<Scalars['Bytes']>;
  position_not?: InputMaybe<Scalars['Bytes']>;
  position_gt?: InputMaybe<Scalars['Bytes']>;
  position_lt?: InputMaybe<Scalars['Bytes']>;
  position_gte?: InputMaybe<Scalars['Bytes']>;
  position_lte?: InputMaybe<Scalars['Bytes']>;
  position_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_contains?: InputMaybe<Scalars['Bytes']>;
  position_not_contains?: InputMaybe<Scalars['Bytes']>;
  fundingAsset?: InputMaybe<Scalars['Bytes']>;
  fundingAsset_not?: InputMaybe<Scalars['Bytes']>;
  fundingAsset_gt?: InputMaybe<Scalars['Bytes']>;
  fundingAsset_lt?: InputMaybe<Scalars['Bytes']>;
  fundingAsset_gte?: InputMaybe<Scalars['Bytes']>;
  fundingAsset_lte?: InputMaybe<Scalars['Bytes']>;
  fundingAsset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fundingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fundingAsset_contains?: InputMaybe<Scalars['Bytes']>;
  fundingAsset_not_contains?: InputMaybe<Scalars['Bytes']>;
  fundingAmount?: InputMaybe<Scalars['BigInt']>;
  fundingAmount_not?: InputMaybe<Scalars['BigInt']>;
  fundingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  fundingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  fundingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  fundingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  fundingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCollateralAmount?: InputMaybe<Scalars['BigInt']>;
  totalCollateralAmount_not?: InputMaybe<Scalars['BigInt']>;
  totalCollateralAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalCollateralAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalCollateralAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalCollateralAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalCollateralAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCollateralAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralAmountFunded?: InputMaybe<Scalars['BigInt']>;
  collateralAmountFunded_not?: InputMaybe<Scalars['BigInt']>;
  collateralAmountFunded_gt?: InputMaybe<Scalars['BigInt']>;
  collateralAmountFunded_lt?: InputMaybe<Scalars['BigInt']>;
  collateralAmountFunded_gte?: InputMaybe<Scalars['BigInt']>;
  collateralAmountFunded_lte?: InputMaybe<Scalars['BigInt']>;
  collateralAmountFunded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralAmountFunded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice?: InputMaybe<Scalars['BigInt']>;
  executionPrice_not?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionFunded_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionFunded_filter>>>;
};

export type PositionFunded_orderBy =
  | 'id'
  | 'position'
  | 'fundingAsset'
  | 'fundingAmount'
  | 'totalCollateralAmount'
  | 'collateralAmountFunded'
  | 'executionPrice'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type PositionRatioAdjusted = {
  id: Scalars['Bytes'];
  position: Scalars['Bytes'];
  targetRatio: Scalars['BigInt'];
  realizedRatio: Scalars['BigInt'];
  equityAmountBefore: Scalars['BigInt'];
  equityAmountAfter: Scalars['BigInt'];
  executionPrice: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type PositionRatioAdjusted_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  position?: InputMaybe<Scalars['Bytes']>;
  position_not?: InputMaybe<Scalars['Bytes']>;
  position_gt?: InputMaybe<Scalars['Bytes']>;
  position_lt?: InputMaybe<Scalars['Bytes']>;
  position_gte?: InputMaybe<Scalars['Bytes']>;
  position_lte?: InputMaybe<Scalars['Bytes']>;
  position_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_contains?: InputMaybe<Scalars['Bytes']>;
  position_not_contains?: InputMaybe<Scalars['Bytes']>;
  targetRatio?: InputMaybe<Scalars['BigInt']>;
  targetRatio_not?: InputMaybe<Scalars['BigInt']>;
  targetRatio_gt?: InputMaybe<Scalars['BigInt']>;
  targetRatio_lt?: InputMaybe<Scalars['BigInt']>;
  targetRatio_gte?: InputMaybe<Scalars['BigInt']>;
  targetRatio_lte?: InputMaybe<Scalars['BigInt']>;
  targetRatio_in?: InputMaybe<Array<Scalars['BigInt']>>;
  targetRatio_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRatio?: InputMaybe<Scalars['BigInt']>;
  realizedRatio_not?: InputMaybe<Scalars['BigInt']>;
  realizedRatio_gt?: InputMaybe<Scalars['BigInt']>;
  realizedRatio_lt?: InputMaybe<Scalars['BigInt']>;
  realizedRatio_gte?: InputMaybe<Scalars['BigInt']>;
  realizedRatio_lte?: InputMaybe<Scalars['BigInt']>;
  realizedRatio_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedRatio_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  equityAmountBefore?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_not?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_gt?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_lt?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_gte?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_lte?: InputMaybe<Scalars['BigInt']>;
  equityAmountBefore_in?: InputMaybe<Array<Scalars['BigInt']>>;
  equityAmountBefore_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  equityAmountAfter?: InputMaybe<Scalars['BigInt']>;
  equityAmountAfter_not?: InputMaybe<Scalars['BigInt']>;
  equityAmountAfter_gt?: InputMaybe<Scalars['BigInt']>;
  equityAmountAfter_lt?: InputMaybe<Scalars['BigInt']>;
  equityAmountAfter_gte?: InputMaybe<Scalars['BigInt']>;
  equityAmountAfter_lte?: InputMaybe<Scalars['BigInt']>;
  equityAmountAfter_in?: InputMaybe<Array<Scalars['BigInt']>>;
  equityAmountAfter_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice?: InputMaybe<Scalars['BigInt']>;
  executionPrice_not?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionRatioAdjusted_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionRatioAdjusted_filter>>>;
};

export type PositionRatioAdjusted_orderBy =
  | 'id'
  | 'position'
  | 'targetRatio'
  | 'realizedRatio'
  | 'equityAmountBefore'
  | 'equityAmountAfter'
  | 'executionPrice'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Position_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader?: InputMaybe<Scalars['Bytes']>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_gt?: InputMaybe<Scalars['Bytes']>;
  trader_lt?: InputMaybe<Scalars['Bytes']>;
  trader_gte?: InputMaybe<Scalars['Bytes']>;
  trader_lte?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  collateral?: InputMaybe<Scalars['Bytes']>;
  collateral_not?: InputMaybe<Scalars['Bytes']>;
  collateral_gt?: InputMaybe<Scalars['Bytes']>;
  collateral_lt?: InputMaybe<Scalars['Bytes']>;
  collateral_gte?: InputMaybe<Scalars['Bytes']>;
  collateral_lte?: InputMaybe<Scalars['Bytes']>;
  collateral_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateral_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateral_contains?: InputMaybe<Scalars['Bytes']>;
  collateral_not_contains?: InputMaybe<Scalars['Bytes']>;
  stable?: InputMaybe<Scalars['Bytes']>;
  stable_not?: InputMaybe<Scalars['Bytes']>;
  stable_gt?: InputMaybe<Scalars['Bytes']>;
  stable_lt?: InputMaybe<Scalars['Bytes']>;
  stable_gte?: InputMaybe<Scalars['Bytes']>;
  stable_lte?: InputMaybe<Scalars['Bytes']>;
  stable_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stable_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stable_contains?: InputMaybe<Scalars['Bytes']>;
  stable_not_contains?: InputMaybe<Scalars['Bytes']>;
  lendingProtocol?: InputMaybe<Scalars['Int']>;
  lendingProtocol_not?: InputMaybe<Scalars['Int']>;
  lendingProtocol_gt?: InputMaybe<Scalars['Int']>;
  lendingProtocol_lt?: InputMaybe<Scalars['Int']>;
  lendingProtocol_gte?: InputMaybe<Scalars['Int']>;
  lendingProtocol_lte?: InputMaybe<Scalars['Int']>;
  lendingProtocol_in?: InputMaybe<Array<Scalars['Int']>>;
  lendingProtocol_not_in?: InputMaybe<Array<Scalars['Int']>>;
  fundedCollateralAmount?: InputMaybe<Scalars['BigInt']>;
  fundedCollateralAmount_not?: InputMaybe<Scalars['BigInt']>;
  fundedCollateralAmount_gt?: InputMaybe<Scalars['BigInt']>;
  fundedCollateralAmount_lt?: InputMaybe<Scalars['BigInt']>;
  fundedCollateralAmount_gte?: InputMaybe<Scalars['BigInt']>;
  fundedCollateralAmount_lte?: InputMaybe<Scalars['BigInt']>;
  fundedCollateralAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundedCollateralAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Position_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Position_filter>>>;
};

export type Position_orderBy =
  | 'id'
  | 'trader'
  | 'collateral'
  | 'stable'
  | 'lendingProtocol'
  | 'fundedCollateralAmount';

export type Query = {
  position?: Maybe<Position>;
  positions: Array<Position>;
  positionCreated?: Maybe<PositionCreated>;
  positionCreateds: Array<PositionCreated>;
  positionFunded?: Maybe<PositionFunded>;
  positionFundeds: Array<PositionFunded>;
  positionRatioAdjusted?: Maybe<PositionRatioAdjusted>;
  positionRatioAdjusteds: Array<PositionRatioAdjusted>;
  positionClosed?: Maybe<PositionClosed>;
  positionCloseds: Array<PositionClosed>;
  borrowAsPosition?: Maybe<BorrowAsPosition>;
  borrowAsPositions: Array<BorrowAsPosition>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  repayAsPosition?: Maybe<RepayAsPosition>;
  repayAsPositions: Array<RepayAsPosition>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerypositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionFundedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionFundedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionFunded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionFunded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionRatioAdjustedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionRatioAdjustedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionRatioAdjusted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionRatioAdjusted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionClosedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionClosedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionClosed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionClosed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowAsPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowAsPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BorrowAsPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BorrowAsPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepayAsPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepayAsPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RepayAsPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RepayAsPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RepayAsPosition = {
  id: Scalars['Bytes'];
  position: Scalars['Bytes'];
  asset: Scalars['Bytes'];
  borrowAmount: Scalars['BigInt'];
  scaledATokensBurnt: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type RepayAsPosition_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  position?: InputMaybe<Scalars['Bytes']>;
  position_not?: InputMaybe<Scalars['Bytes']>;
  position_gt?: InputMaybe<Scalars['Bytes']>;
  position_lt?: InputMaybe<Scalars['Bytes']>;
  position_gte?: InputMaybe<Scalars['Bytes']>;
  position_lte?: InputMaybe<Scalars['Bytes']>;
  position_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  position_contains?: InputMaybe<Scalars['Bytes']>;
  position_not_contains?: InputMaybe<Scalars['Bytes']>;
  asset?: InputMaybe<Scalars['Bytes']>;
  asset_not?: InputMaybe<Scalars['Bytes']>;
  asset_gt?: InputMaybe<Scalars['Bytes']>;
  asset_lt?: InputMaybe<Scalars['Bytes']>;
  asset_gte?: InputMaybe<Scalars['Bytes']>;
  asset_lte?: InputMaybe<Scalars['Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  asset_contains?: InputMaybe<Scalars['Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']>;
  borrowAmount?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_not?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_gt?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_lt?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_gte?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_lte?: InputMaybe<Scalars['BigInt']>;
  borrowAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaledATokensBurnt?: InputMaybe<Scalars['BigInt']>;
  scaledATokensBurnt_not?: InputMaybe<Scalars['BigInt']>;
  scaledATokensBurnt_gt?: InputMaybe<Scalars['BigInt']>;
  scaledATokensBurnt_lt?: InputMaybe<Scalars['BigInt']>;
  scaledATokensBurnt_gte?: InputMaybe<Scalars['BigInt']>;
  scaledATokensBurnt_lte?: InputMaybe<Scalars['BigInt']>;
  scaledATokensBurnt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scaledATokensBurnt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RepayAsPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RepayAsPosition_filter>>>;
};

export type RepayAsPosition_orderBy =
  | 'id'
  | 'position'
  | 'asset'
  | 'borrowAmount'
  | 'scaledATokensBurnt'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type Subscription = {
  position?: Maybe<Position>;
  positions: Array<Position>;
  positionCreated?: Maybe<PositionCreated>;
  positionCreateds: Array<PositionCreated>;
  positionFunded?: Maybe<PositionFunded>;
  positionFundeds: Array<PositionFunded>;
  positionRatioAdjusted?: Maybe<PositionRatioAdjusted>;
  positionRatioAdjusteds: Array<PositionRatioAdjusted>;
  positionClosed?: Maybe<PositionClosed>;
  positionCloseds: Array<PositionClosed>;
  borrowAsPosition?: Maybe<BorrowAsPosition>;
  borrowAsPositions: Array<BorrowAsPosition>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  repayAsPosition?: Maybe<RepayAsPosition>;
  repayAsPositions: Array<RepayAsPosition>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionpositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionCreatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionFundedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionFundedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionFunded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionFunded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionRatioAdjustedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionRatioAdjustedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionRatioAdjusted_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionRatioAdjusted_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionClosedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionClosedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionClosed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionClosed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowAsPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowAsPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BorrowAsPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BorrowAsPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepayAsPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepayAsPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RepayAsPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RepayAsPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Aggregation_interval: Aggregation_interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BorrowAsPosition: ResolverTypeWrapper<BorrowAsPosition>;
  BorrowAsPosition_filter: BorrowAsPosition_filter;
  BorrowAsPosition_orderBy: BorrowAsPosition_orderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  Liquidation: ResolverTypeWrapper<Liquidation>;
  Liquidation_filter: Liquidation_filter;
  Liquidation_orderBy: Liquidation_orderBy;
  OrderDirection: OrderDirection;
  Position: ResolverTypeWrapper<Position>;
  PositionClosed: ResolverTypeWrapper<PositionClosed>;
  PositionClosed_filter: PositionClosed_filter;
  PositionClosed_orderBy: PositionClosed_orderBy;
  PositionCreated: ResolverTypeWrapper<PositionCreated>;
  PositionCreated_filter: PositionCreated_filter;
  PositionCreated_orderBy: PositionCreated_orderBy;
  PositionFunded: ResolverTypeWrapper<PositionFunded>;
  PositionFunded_filter: PositionFunded_filter;
  PositionFunded_orderBy: PositionFunded_orderBy;
  PositionRatioAdjusted: ResolverTypeWrapper<PositionRatioAdjusted>;
  PositionRatioAdjusted_filter: PositionRatioAdjusted_filter;
  PositionRatioAdjusted_orderBy: PositionRatioAdjusted_orderBy;
  Position_filter: Position_filter;
  Position_orderBy: Position_orderBy;
  Query: ResolverTypeWrapper<{}>;
  RepayAsPosition: ResolverTypeWrapper<RepayAsPosition>;
  RepayAsPosition_filter: RepayAsPosition_filter;
  RepayAsPosition_orderBy: RepayAsPosition_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  BorrowAsPosition: BorrowAsPosition;
  BorrowAsPosition_filter: BorrowAsPosition_filter;
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  Liquidation: Liquidation;
  Liquidation_filter: Liquidation_filter;
  Position: Position;
  PositionClosed: PositionClosed;
  PositionClosed_filter: PositionClosed_filter;
  PositionCreated: PositionCreated;
  PositionCreated_filter: PositionCreated_filter;
  PositionFunded: PositionFunded;
  PositionFunded_filter: PositionFunded_filter;
  PositionRatioAdjusted: PositionRatioAdjusted;
  PositionRatioAdjusted_filter: PositionRatioAdjusted_filter;
  Position_filter: Position_filter;
  Query: {};
  RepayAsPosition: RepayAsPosition;
  RepayAsPosition_filter: RepayAsPosition_filter;
  String: Scalars['String'];
  Subscription: {};
  Timestamp: Scalars['Timestamp'];
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BorrowAsPositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BorrowAsPosition'] = ResolversParentTypes['BorrowAsPosition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  borrowAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  scaledATokensMinted?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type LiquidationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Liquidation'] = ResolversParentTypes['Liquidation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  borrowedAsset?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  debtToRepay?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralAsset?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  actualSeizedStableAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  executionPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collateral?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  stable?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  lendingProtocol?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fundedCollateralAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionClosedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionClosed'] = ResolversParentTypes['PositionClosed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  withdrawAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  equityAmountBefore?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  executionPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionCreatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionCreated'] = ResolversParentTypes['PositionCreated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collateral?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  stable?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  lendingProtocol?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  executionPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionFundedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionFunded'] = ResolversParentTypes['PositionFunded']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fundingAsset?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fundingAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalCollateralAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralAmountFunded?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  executionPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionRatioAdjustedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionRatioAdjusted'] = ResolversParentTypes['PositionRatioAdjusted']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  targetRatio?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  realizedRatio?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  equityAmountBefore?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  equityAmountAfter?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  executionPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionArgs, 'id' | 'subgraphError'>>;
  positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionCreated?: Resolver<Maybe<ResolversTypes['PositionCreated']>, ParentType, ContextType, RequireFields<QuerypositionCreatedArgs, 'id' | 'subgraphError'>>;
  positionCreateds?: Resolver<Array<ResolversTypes['PositionCreated']>, ParentType, ContextType, RequireFields<QuerypositionCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionFunded?: Resolver<Maybe<ResolversTypes['PositionFunded']>, ParentType, ContextType, RequireFields<QuerypositionFundedArgs, 'id' | 'subgraphError'>>;
  positionFundeds?: Resolver<Array<ResolversTypes['PositionFunded']>, ParentType, ContextType, RequireFields<QuerypositionFundedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionRatioAdjusted?: Resolver<Maybe<ResolversTypes['PositionRatioAdjusted']>, ParentType, ContextType, RequireFields<QuerypositionRatioAdjustedArgs, 'id' | 'subgraphError'>>;
  positionRatioAdjusteds?: Resolver<Array<ResolversTypes['PositionRatioAdjusted']>, ParentType, ContextType, RequireFields<QuerypositionRatioAdjustedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionClosed?: Resolver<Maybe<ResolversTypes['PositionClosed']>, ParentType, ContextType, RequireFields<QuerypositionClosedArgs, 'id' | 'subgraphError'>>;
  positionCloseds?: Resolver<Array<ResolversTypes['PositionClosed']>, ParentType, ContextType, RequireFields<QuerypositionClosedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  borrowAsPosition?: Resolver<Maybe<ResolversTypes['BorrowAsPosition']>, ParentType, ContextType, RequireFields<QueryborrowAsPositionArgs, 'id' | 'subgraphError'>>;
  borrowAsPositions?: Resolver<Array<ResolversTypes['BorrowAsPosition']>, ParentType, ContextType, RequireFields<QueryborrowAsPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidation?: Resolver<Maybe<ResolversTypes['Liquidation']>, ParentType, ContextType, RequireFields<QueryliquidationArgs, 'id' | 'subgraphError'>>;
  liquidations?: Resolver<Array<ResolversTypes['Liquidation']>, ParentType, ContextType, RequireFields<QueryliquidationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  repayAsPosition?: Resolver<Maybe<ResolversTypes['RepayAsPosition']>, ParentType, ContextType, RequireFields<QueryrepayAsPositionArgs, 'id' | 'subgraphError'>>;
  repayAsPositions?: Resolver<Array<ResolversTypes['RepayAsPosition']>, ParentType, ContextType, RequireFields<QueryrepayAsPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RepayAsPositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RepayAsPosition'] = ResolversParentTypes['RepayAsPosition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  borrowAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  scaledATokensBurnt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  position?: SubscriptionResolver<Maybe<ResolversTypes['Position']>, "position", ParentType, ContextType, RequireFields<SubscriptionpositionArgs, 'id' | 'subgraphError'>>;
  positions?: SubscriptionResolver<Array<ResolversTypes['Position']>, "positions", ParentType, ContextType, RequireFields<SubscriptionpositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionCreated?: SubscriptionResolver<Maybe<ResolversTypes['PositionCreated']>, "positionCreated", ParentType, ContextType, RequireFields<SubscriptionpositionCreatedArgs, 'id' | 'subgraphError'>>;
  positionCreateds?: SubscriptionResolver<Array<ResolversTypes['PositionCreated']>, "positionCreateds", ParentType, ContextType, RequireFields<SubscriptionpositionCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionFunded?: SubscriptionResolver<Maybe<ResolversTypes['PositionFunded']>, "positionFunded", ParentType, ContextType, RequireFields<SubscriptionpositionFundedArgs, 'id' | 'subgraphError'>>;
  positionFundeds?: SubscriptionResolver<Array<ResolversTypes['PositionFunded']>, "positionFundeds", ParentType, ContextType, RequireFields<SubscriptionpositionFundedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionRatioAdjusted?: SubscriptionResolver<Maybe<ResolversTypes['PositionRatioAdjusted']>, "positionRatioAdjusted", ParentType, ContextType, RequireFields<SubscriptionpositionRatioAdjustedArgs, 'id' | 'subgraphError'>>;
  positionRatioAdjusteds?: SubscriptionResolver<Array<ResolversTypes['PositionRatioAdjusted']>, "positionRatioAdjusteds", ParentType, ContextType, RequireFields<SubscriptionpositionRatioAdjustedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionClosed?: SubscriptionResolver<Maybe<ResolversTypes['PositionClosed']>, "positionClosed", ParentType, ContextType, RequireFields<SubscriptionpositionClosedArgs, 'id' | 'subgraphError'>>;
  positionCloseds?: SubscriptionResolver<Array<ResolversTypes['PositionClosed']>, "positionCloseds", ParentType, ContextType, RequireFields<SubscriptionpositionClosedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  borrowAsPosition?: SubscriptionResolver<Maybe<ResolversTypes['BorrowAsPosition']>, "borrowAsPosition", ParentType, ContextType, RequireFields<SubscriptionborrowAsPositionArgs, 'id' | 'subgraphError'>>;
  borrowAsPositions?: SubscriptionResolver<Array<ResolversTypes['BorrowAsPosition']>, "borrowAsPositions", ParentType, ContextType, RequireFields<SubscriptionborrowAsPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidation?: SubscriptionResolver<Maybe<ResolversTypes['Liquidation']>, "liquidation", ParentType, ContextType, RequireFields<SubscriptionliquidationArgs, 'id' | 'subgraphError'>>;
  liquidations?: SubscriptionResolver<Array<ResolversTypes['Liquidation']>, "liquidations", ParentType, ContextType, RequireFields<SubscriptionliquidationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  repayAsPosition?: SubscriptionResolver<Maybe<ResolversTypes['RepayAsPosition']>, "repayAsPosition", ParentType, ContextType, RequireFields<SubscriptionrepayAsPositionArgs, 'id' | 'subgraphError'>>;
  repayAsPositions?: SubscriptionResolver<Array<ResolversTypes['RepayAsPosition']>, "repayAsPositions", ParentType, ContextType, RequireFields<SubscriptionrepayAsPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  BorrowAsPosition?: BorrowAsPositionResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  Int8?: GraphQLScalarType;
  Liquidation?: LiquidationResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  PositionClosed?: PositionClosedResolvers<ContextType>;
  PositionCreated?: PositionCreatedResolvers<ContextType>;
  PositionFunded?: PositionFundedResolvers<ContextType>;
  PositionRatioAdjusted?: PositionRatioAdjustedResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RepayAsPosition?: RepayAsPositionResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = LevatoTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/levato/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
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

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const levatoTransforms = [];
const additionalTypeDefs = [] as any[];
const levatoHandler = new GraphqlHandler({
              name: "levato",
              config: {"endpoint":"https://gateway-arbitrum.network.thegraph.com/api/b70fcc64ad255db024f4b2017947c661/subgraphs/id/9VFBtBBMzX4K7xZcdyzKEAU5xF8mq3dekmFWuYAhX3CY"},
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
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

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
      },{
        document: AdjustedRatioQueryDocument,
        get rawSDL() {
          return printWithCache(AdjustedRatioQueryDocument);
        },
        location: 'AdjustedRatioQueryDocument.graphql'
      },{
        document: PositionCreatedQueryDocument,
        get rawSDL() {
          return printWithCache(PositionCreatedQueryDocument);
        },
        location: 'PositionCreatedQueryDocument.graphql'
      },{
        document: PositionClosedQueryDocument,
        get rawSDL() {
          return printWithCache(PositionClosedQueryDocument);
        },
        location: 'PositionClosedQueryDocument.graphql'
      },{
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

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
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

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type FundingQueryQueryVariables = Exact<{
  positionAddresses?: InputMaybe<Array<Scalars['Bytes']> | Scalars['Bytes']>;
}>;


export type FundingQueryQuery = { positionFundeds: Array<Pick<PositionFunded, 'position' | 'fundingAmount' | 'fundingAsset' | 'collateralAmountFunded' | 'totalCollateralAmount' | 'executionPrice' | 'blockTimestamp' | 'blockNumber' | 'transactionHash' | 'id'>> };

export type AdjustedRatioQueryQueryVariables = Exact<{
  positionAddresses?: InputMaybe<Array<Scalars['Bytes']> | Scalars['Bytes']>;
}>;


export type AdjustedRatioQueryQuery = { positionRatioAdjusteds: Array<Pick<PositionRatioAdjusted, 'position' | 'realizedRatio' | 'equityAmountBefore' | 'equityAmountAfter' | 'executionPrice' | 'blockTimestamp' | 'blockNumber' | 'transactionHash' | 'id'>> };

export type PositionCreatedQueryQueryVariables = Exact<{
  positionAddresses?: InputMaybe<Array<Scalars['Bytes']> | Scalars['Bytes']>;
}>;


export type PositionCreatedQueryQuery = { positionCreateds: Array<Pick<PositionCreated, 'position' | 'collateral' | 'stable' | 'user' | 'lendingProtocol' | 'executionPrice' | 'blockTimestamp' | 'blockNumber' | 'transactionHash' | 'id'>> };

export type PositionClosedQueryQueryVariables = Exact<{
  positionAddresses?: InputMaybe<Array<Scalars['Bytes']> | Scalars['Bytes']>;
}>;


export type PositionClosedQueryQuery = { positionCloseds: Array<Pick<PositionClosed, 'position' | 'withdrawAmount' | 'equityAmountBefore' | 'executionPrice' | 'blockTimestamp' | 'blockNumber' | 'transactionHash' | 'id'>> };

export type PnlQueryQueryVariables = Exact<{
  trader?: InputMaybe<Scalars['Bytes']>;
}>;


export type PnlQueryQuery = { positions: Array<Pick<Position, 'id' | 'collateral' | 'fundedCollateralAmount'>> };


export const FundingQueryDocument = gql`
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
    ` as unknown as DocumentNode<FundingQueryQuery, FundingQueryQueryVariables>;
export const AdjustedRatioQueryDocument = gql`
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
    ` as unknown as DocumentNode<AdjustedRatioQueryQuery, AdjustedRatioQueryQueryVariables>;
export const PositionCreatedQueryDocument = gql`
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
    ` as unknown as DocumentNode<PositionCreatedQueryQuery, PositionCreatedQueryQueryVariables>;
export const PositionClosedQueryDocument = gql`
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
    ` as unknown as DocumentNode<PositionClosedQueryQuery, PositionClosedQueryQueryVariables>;
export const PnlQueryDocument = gql`
    query PnlQuery($trader: Bytes) {
  positions(where: {trader: $trader}) {
    id
    collateral
    fundedCollateralAmount
  }
}
    ` as unknown as DocumentNode<PnlQueryQuery, PnlQueryQueryVariables>;






export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    FundingQuery(variables?: FundingQueryQueryVariables, options?: C): Promise<FundingQueryQuery> {
      return requester<FundingQueryQuery, FundingQueryQueryVariables>(FundingQueryDocument, variables, options) as Promise<FundingQueryQuery>;
    },
    AdjustedRatioQuery(variables?: AdjustedRatioQueryQueryVariables, options?: C): Promise<AdjustedRatioQueryQuery> {
      return requester<AdjustedRatioQueryQuery, AdjustedRatioQueryQueryVariables>(AdjustedRatioQueryDocument, variables, options) as Promise<AdjustedRatioQueryQuery>;
    },
    PositionCreatedQuery(variables?: PositionCreatedQueryQueryVariables, options?: C): Promise<PositionCreatedQueryQuery> {
      return requester<PositionCreatedQueryQuery, PositionCreatedQueryQueryVariables>(PositionCreatedQueryDocument, variables, options) as Promise<PositionCreatedQueryQuery>;
    },
    PositionClosedQuery(variables?: PositionClosedQueryQueryVariables, options?: C): Promise<PositionClosedQueryQuery> {
      return requester<PositionClosedQueryQuery, PositionClosedQueryQueryVariables>(PositionClosedQueryDocument, variables, options) as Promise<PositionClosedQueryQuery>;
    },
    PnlQuery(variables?: PnlQueryQueryVariables, options?: C): Promise<PnlQueryQuery> {
      return requester<PnlQueryQuery, PnlQueryQueryVariables>(PnlQueryDocument, variables, options) as Promise<PnlQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;