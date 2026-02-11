// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AllowlistAPI from './allowlist';
import {
  Allowlist,
  AllowlistListParams,
  AllowlistListResponse,
  AllowlistUpsertParams,
  AllowlistUpsertResponse,
} from './allowlist';
import * as ContractsAPI from './contracts';
import {
  ContractListParams,
  ContractListResponse,
  ContractMintParams,
  ContractMintResponse,
  Contracts,
} from './contracts';
import * as StatusAPI from './status';
import { Status, StatusRetrieveResponse, StatusUpdateParams, StatusUpdateResponse } from './status';

export class Minting extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  allowlist: AllowlistAPI.Allowlist = new AllowlistAPI.Allowlist(this._client);
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);

  /**
   * Returns minting assets and any relevant context
   *
   * @example
   * ```ts
   * const response = await client.minting.getAssets({
   *   organizationId: '00000000-0000-0000-0000-000000000000',
   *   websiteId: '00000000-0000-0000-0000-000000000000',
   * });
   * ```
   */
  getAssets(
    query: MintingGetAssetsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MintingGetAssetsResponse> {
    return this._client.get('/api/minting/assets', { query, ...options });
  }

  /**
   * Pass in to see if a token is eligible for minting
   *
   * @example
   * ```ts
   * const response = await client.minting.getTokenGateStatus({
   *   collectionAddress: 'collectionAddress',
   *   mintingContractAssetId:
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   mintingContractId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   network: 'network',
   *   tokenId: 'tokenId',
   * });
   * ```
   */
  getTokenGateStatus(
    query: MintingGetTokenGateStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MintingGetTokenGateStatusResponse> {
    return this._client.get('/api/minting/token_gate', { query, ...options });
  }
}

/**
 * Schema for getting minting assets response
 */
export interface MintingGetAssetsResponse {
  /**
   * Array of minting assets
   */
  data: Array<MintingGetAssetsResponse.Data>;

  /**
   * Indicates if more pages are available
   */
  hasNextPage: boolean;
}

export namespace MintingGetAssetsResponse {
  export interface Data {
    /**
     * UUID of the minting asset
     */
    id: string;
  }
}

export interface MintingGetTokenGateStatusResponse {
  eligible: boolean;

  message: string;
}

export interface MintingGetAssetsParams {
  /**
   * Organization ID
   */
  organizationId: string;

  /**
   * Website ID
   */
  websiteId: string;

  /**
   * Contract Address
   */
  contractAddress?: string;

  /**
   * Currency Type
   */
  currencyType?: 'loyalty' | 'native' | null;

  /**
   * Whether to include deleted assets in the response
   */
  includeDeleted?: boolean | null;

  /**
   * Whether to include metadata in the response
   */
  includeMetadata?: boolean | null;

  /**
   * Whether to include listed assets in the response
   */
  isListed?: boolean | null;

  /**
   * Minting Contract Asset ID
   */
  mintingContractAssetId?: string | null;

  /**
   * Comma-separated list of Minting Contract UUIDs
   */
  mintingContractIds?: string | null;

  /**
   * Network
   */
  network?:
    | 'abstract'
    | 'abstractTestnet'
    | 'apechain'
    | 'arbitrum'
    | 'avalanche'
    | 'avalancheFuji'
    | 'base'
    | 'baseSepolia'
    | 'berachain'
    | 'berachainArtio'
    | 'berachainBepolia'
    | 'binance'
    | 'bscTestnet'
    | 'campTestnet'
    | 'fantom'
    | 'fantomTestnet'
    | 'flowMainnet'
    | 'mainnet'
    | 'nexusTestnet'
    | 'optimism'
    | 'polygon'
    | 'polygon_mumbai'
    | 'skaleNebula'
    | 'skaleEuropa'
    | 'skaleCalypso'
    | 'solana'
    | 'sophon'
    | 'sophonTestnet'
    | 'sui'
    | 'superseed'
    | 'superseedSepolia'
    | 'vanar'
    | 'xai'
    | 'zksync'
    | 'coti'
    | 'cotiTestnet'
    | 'morph'
    | 'morphTestnet'
    | 'morphHolesky'
    | 'ultra'
    | 'ultraTestnet'
    | 'nitrograph'
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli'
    | 'basecamp'
    | 'somnia'
    | 'zkverify'
    | 'polkadot'
    | 'kusama'
    | 'flow_cadence';

  /**
   * Sort Key
   */
  sortBy?: 'price' | 'startsAt' | 'assetNr' | null;

  /**
   * Sort Dir
   */
  sortDir?: 'asc' | 'desc' | null;

  /**
   * Status
   */
  status?: 'active' | 'past' | null;

  /**
   * Token ID
   */
  tokenId?: string | Array<number> | null;

  /**
   * Wallet Address
   */
  walletAddress?: string | Array<string>;
}

export interface MintingGetTokenGateStatusParams {
  collectionAddress: string;

  mintingContractAssetId: string;

  mintingContractId: string;

  network: string;

  tokenId: string;
}

Minting.Status = Status;
Minting.Allowlist = Allowlist;
Minting.Contracts = Contracts;

export declare namespace Minting {
  export {
    type MintingGetAssetsResponse as MintingGetAssetsResponse,
    type MintingGetTokenGateStatusResponse as MintingGetTokenGateStatusResponse,
    type MintingGetAssetsParams as MintingGetAssetsParams,
    type MintingGetTokenGateStatusParams as MintingGetTokenGateStatusParams,
  };

  export {
    Status as Status,
    type StatusRetrieveResponse as StatusRetrieveResponse,
    type StatusUpdateResponse as StatusUpdateResponse,
    type StatusUpdateParams as StatusUpdateParams,
  };

  export {
    Allowlist as Allowlist,
    type AllowlistListResponse as AllowlistListResponse,
    type AllowlistUpsertResponse as AllowlistUpsertResponse,
    type AllowlistListParams as AllowlistListParams,
    type AllowlistUpsertParams as AllowlistUpsertParams,
  };

  export {
    Contracts as Contracts,
    type ContractListResponse as ContractListResponse,
    type ContractMintResponse as ContractMintResponse,
    type ContractListParams as ContractListParams,
    type ContractMintParams as ContractMintParams,
  };
}
