// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class WebsiteCollections extends APIResource {
  /**
   * Creates a new collection under a website
   *
   * @example
   * ```ts
   * await client.websites.websiteCollections.create({
   *   collectionAddress:
   *     '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
   *   name: 'x',
   *   network: 'abstract',
   *   organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   sortId: 99999,
   *   websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   * ```
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
   *
   * @example
   * ```ts
   * const websiteCollections =
   *   await client.websites.websiteCollections.list({
   *     websiteId: '123e4567-e89b-12d3-a456-426614174000',
   *   });
   * ```
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
