// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Minting extends APIResource {
  /**
   * Returns minting assets and any relevant context
   */
  getAssets(
    query: MintingGetAssetsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MintingGetAssetsResponse> {
    return this._client.get('/api/minting/assets', { query, ...options });
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
    | 'optimism'
    | 'polygon'
    | 'polygon_mumbai'
    | 'skaleNebula'
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
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli'
    | 'basecamp';

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

export declare namespace Minting {
  export {
    type MintingGetAssetsResponse as MintingGetAssetsResponse,
    type MintingGetAssetsParams as MintingGetAssetsParams,
  };
}
