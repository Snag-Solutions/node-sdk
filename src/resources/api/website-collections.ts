// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class WebsiteCollections extends APIResource {
  /**
   * Creates a new collection under a website
   */
  create(body: WebsiteCollectionCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/api/website_collections', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieves collections for a specific website.
   */
  list(
    query: WebsiteCollectionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsiteCollectionListResponse> {
    return this._client.get('/api/website_collections', { query, ...options });
  }
}

/**
 * Response schema for fetching website collections
 */
export interface WebsiteCollectionListResponse {
  /**
   * Array of websites
   */
  data: Array<WebsiteCollectionListResponse.Data>;

  /**
   * Indicates if more pages are available
   */
  hasNextPage: boolean;
}

export namespace WebsiteCollectionListResponse {
  export interface Data {
    /**
     * Website Collection ID
     */
    id: string;
  }
}

export interface WebsiteCollectionCreateParams {
  collectionAddress: string;

  name: string;

  network:
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
    | 'superseed'
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli'
    | 'basecamp';

  organizationId: string;

  sortId: number;

  websiteId: string;

  discordUrl?: string;

  homeUrl?: string;

  imageUrl?: string | null;

  instagramUsername?: string;

  royaltyFee?: number | null;

  royaltyFeeAddress?: string | null;

  stakingAddress?: string;

  telegramUrl?: string;

  themeId?: string;

  twitterUsername?: string;
}

export interface WebsiteCollectionListParams {
  /**
   * Filter by website ID
   */
  websiteId: string;

  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Filter by organization ID
   */
  organizationId?: string;

  /**
   * Pagination cursor, start after this ID
   */
  startingAfter?: string;
}

export declare namespace WebsiteCollections {
  export {
    type WebsiteCollectionListResponse as WebsiteCollectionListResponse,
    type WebsiteCollectionCreateParams as WebsiteCollectionCreateParams,
    type WebsiteCollectionListParams as WebsiteCollectionListParams,
  };
}
