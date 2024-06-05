// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace LevatoTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

  export type QuerySdk = {
      /** null **/
  position: InContextSdkMethod<Query['position'], QuerypositionArgs, MeshContext>,
  /** null **/
  positions: InContextSdkMethod<Query['positions'], QuerypositionsArgs, MeshContext>,
  /** null **/
  positionCreated: InContextSdkMethod<Query['positionCreated'], QuerypositionCreatedArgs, MeshContext>,
  /** null **/
  positionCreateds: InContextSdkMethod<Query['positionCreateds'], QuerypositionCreatedsArgs, MeshContext>,
  /** null **/
  positionFunded: InContextSdkMethod<Query['positionFunded'], QuerypositionFundedArgs, MeshContext>,
  /** null **/
  positionFundeds: InContextSdkMethod<Query['positionFundeds'], QuerypositionFundedsArgs, MeshContext>,
  /** null **/
  positionRatioAdjusted: InContextSdkMethod<Query['positionRatioAdjusted'], QuerypositionRatioAdjustedArgs, MeshContext>,
  /** null **/
  positionRatioAdjusteds: InContextSdkMethod<Query['positionRatioAdjusteds'], QuerypositionRatioAdjustedsArgs, MeshContext>,
  /** null **/
  positionClosed: InContextSdkMethod<Query['positionClosed'], QuerypositionClosedArgs, MeshContext>,
  /** null **/
  positionCloseds: InContextSdkMethod<Query['positionCloseds'], QuerypositionClosedsArgs, MeshContext>,
  /** null **/
  borrowAsPosition: InContextSdkMethod<Query['borrowAsPosition'], QueryborrowAsPositionArgs, MeshContext>,
  /** null **/
  borrowAsPositions: InContextSdkMethod<Query['borrowAsPositions'], QueryborrowAsPositionsArgs, MeshContext>,
  /** null **/
  liquidation: InContextSdkMethod<Query['liquidation'], QueryliquidationArgs, MeshContext>,
  /** null **/
  liquidations: InContextSdkMethod<Query['liquidations'], QueryliquidationsArgs, MeshContext>,
  /** null **/
  repayAsPosition: InContextSdkMethod<Query['repayAsPosition'], QueryrepayAsPositionArgs, MeshContext>,
  /** null **/
  repayAsPositions: InContextSdkMethod<Query['repayAsPositions'], QueryrepayAsPositionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  position: InContextSdkMethod<Subscription['position'], SubscriptionpositionArgs, MeshContext>,
  /** null **/
  positions: InContextSdkMethod<Subscription['positions'], SubscriptionpositionsArgs, MeshContext>,
  /** null **/
  positionCreated: InContextSdkMethod<Subscription['positionCreated'], SubscriptionpositionCreatedArgs, MeshContext>,
  /** null **/
  positionCreateds: InContextSdkMethod<Subscription['positionCreateds'], SubscriptionpositionCreatedsArgs, MeshContext>,
  /** null **/
  positionFunded: InContextSdkMethod<Subscription['positionFunded'], SubscriptionpositionFundedArgs, MeshContext>,
  /** null **/
  positionFundeds: InContextSdkMethod<Subscription['positionFundeds'], SubscriptionpositionFundedsArgs, MeshContext>,
  /** null **/
  positionRatioAdjusted: InContextSdkMethod<Subscription['positionRatioAdjusted'], SubscriptionpositionRatioAdjustedArgs, MeshContext>,
  /** null **/
  positionRatioAdjusteds: InContextSdkMethod<Subscription['positionRatioAdjusteds'], SubscriptionpositionRatioAdjustedsArgs, MeshContext>,
  /** null **/
  positionClosed: InContextSdkMethod<Subscription['positionClosed'], SubscriptionpositionClosedArgs, MeshContext>,
  /** null **/
  positionCloseds: InContextSdkMethod<Subscription['positionCloseds'], SubscriptionpositionClosedsArgs, MeshContext>,
  /** null **/
  borrowAsPosition: InContextSdkMethod<Subscription['borrowAsPosition'], SubscriptionborrowAsPositionArgs, MeshContext>,
  /** null **/
  borrowAsPositions: InContextSdkMethod<Subscription['borrowAsPositions'], SubscriptionborrowAsPositionsArgs, MeshContext>,
  /** null **/
  liquidation: InContextSdkMethod<Subscription['liquidation'], SubscriptionliquidationArgs, MeshContext>,
  /** null **/
  liquidations: InContextSdkMethod<Subscription['liquidations'], SubscriptionliquidationsArgs, MeshContext>,
  /** null **/
  repayAsPosition: InContextSdkMethod<Subscription['repayAsPosition'], SubscriptionrepayAsPositionArgs, MeshContext>,
  /** null **/
  repayAsPositions: InContextSdkMethod<Subscription['repayAsPositions'], SubscriptionrepayAsPositionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["levato"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
