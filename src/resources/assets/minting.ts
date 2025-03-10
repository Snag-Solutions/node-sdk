// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Minting extends APIResource {
  /**
   * Returns minting assets and any relevant context
   */
  getMintingAssets(
    query: MintingGetMintingAssetsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MintingGetMintingAssetsResponse> {
    return this._client.get('/api/minting/assets', { query, ...options });
  }
}

/**
 * Schema for getting minting assets response
 */
export interface MintingGetMintingAssetsResponse {
  /**
   * Array of minting assets
   */
  data: Array<MintingGetMintingAssetsResponse.Data>;

  /**
   * Indicates if more pages are available
   */
  hasNextPage: boolean;
}

export namespace MintingGetMintingAssetsResponse {
  export interface Data {
    /**
     * UUID of the minting asset
     */
    id: string;
  }
}

export interface MintingGetMintingAssetsParams {
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
   * Minting Contract IDs
   */
  mintingContractIds?: string | null;

  /**
   * Network
   */
  network?:
    | 'mainnet'
    | 'polygon'
    | 'polygon_mumbai'
    | 'optimism'
    | 'arbitrum'
    | 'binance'
    | 'bscTestnet'
    | 'avalanche'
    | 'avalancheFuji'
    | 'zksync'
    | 'fantom'
    | 'fantomTestnet'
    | 'base'
    | 'baseSepolia'
    | 'skaleNebula'
    | 'xai'
    | 'berachainArtio'
    | 'solana'
    | 'apechain'
    | 'flowMainnet'
    | 'campTestnet'
    | 'sui'
    | 'vanar'
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli';

  /**
   * Sort Dir
   */
  sortDir?: 'asc' | 'desc' | null;

  /**
   * Sort Key
   */
  sortKey?: 'price' | 'startsAt' | 'assetNr' | null;

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
    type MintingGetMintingAssetsResponse as MintingGetMintingAssetsResponse,
    type MintingGetMintingAssetsParams as MintingGetMintingAssetsParams,
  };
}
