// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Websites extends APIResource {
  /**
   * Creates a new website
   */
  create(body: WebsiteCreateParams, options?: Core.RequestOptions): Core.APIPromise<WebsiteCreateResponse> {
    return this._client.post('/api/websites', { body, ...options });
  }

  /**
   * Returns a list of websites. Includes optional query parameters for filtering and
   * pagination.
   */
  list(query?: WebsiteListParams, options?: Core.RequestOptions): Core.APIPromise<WebsiteListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<WebsiteListResponse>;
  list(
    query: WebsiteListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsiteListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/websites', { query, ...options });
  }
}

/**
 * Schema representing a website
 */
export interface WebsiteCreateResponse {
  /**
   * Website ID
   */
  id: string;

  /**
   * Counts of related entities
   */
  _count: WebsiteCreateResponse._Count;

  /**
   * Collections associated with the website
   */
  collections: Array<WebsiteCreateResponse.Collection>;

  /**
   * Website name
   */
  name: string;

  /**
   * Date when terms were signed
   */
  termsSignedAt: string | null;
}

export namespace WebsiteCreateResponse {
  /**
   * Counts of related entities
   */
  export interface _Count {
    /**
     * Count of minting contract assets
     */
    mintingContractAssets: number;
  }

  /**
   * Schema representing a collection
   */
  export interface Collection {
    /**
     * Collection ID
     */
    id: string;

    /**
     * URL of the collection image
     */
    imageUrl: string | null;

    /**
     * Collection name
     */
    name: string;

    /**
     * Royalty fee percentage
     */
    royaltyFee: number;

    /**
     * Address to receive royalty fees
     */
    royaltyFeeAddress: string;
  }
}

/**
 * Response schema for fetching websites
 */
export interface WebsiteListResponse {
  /**
   * Array of websites
   */
  data: Array<WebsiteListResponse.Data>;

  /**
   * Indicates if more pages are available
   */
  hasNextPage: boolean;
}

export namespace WebsiteListResponse {
  /**
   * Schema representing a website
   */
  export interface Data {
    /**
     * Website ID
     */
    id: string;

    /**
     * Counts of related entities
     */
    _count: Data._Count;

    /**
     * Collections associated with the website
     */
    collections: Array<Data.Collection>;

    /**
     * Website name
     */
    name: string;

    /**
     * Date when terms were signed
     */
    termsSignedAt: string | null;
  }

  export namespace Data {
    /**
     * Counts of related entities
     */
    export interface _Count {
      /**
       * Count of minting contract assets
       */
      mintingContractAssets: number;
    }

    /**
     * Schema representing a collection
     */
    export interface Collection {
      /**
       * Collection ID
       */
      id: string;

      /**
       * URL of the collection image
       */
      imageUrl: string | null;

      /**
       * Collection name
       */
      name: string;

      /**
       * Royalty fee percentage
       */
      royaltyFee: number;

      /**
       * Address to receive royalty fees
       */
      royaltyFeeAddress: string;
    }
  }
}

export interface WebsiteCreateParams {
  /**
   * Name of the website
   */
  name: string;

  /**
   * Discord URL of the website account
   */
  discordUrl?: string;

  /**
   * Home URL of the official website
   */
  homeUrl?: string;

  /**
   * Instagram username of the website account
   */
  instagramUsername?: string;

  /**
   * Organization ID for which this website is being created
   */
  organizationId?: string;

  /**
   * Telegram URL of the website account
   */
  telegramUrl?: string;

  /**
   * Twitter username of the website account
   */
  twitterUsername?: string;
}

export interface WebsiteListParams {
  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Filter by name
   */
  name?: string;

  /**
   * Filter by organization ID
   */
  organizationId?: string;

  /**
   * Pagination cursor, start after this ID
   */
  startingAfter?: string;
}

export declare namespace Websites {
  export {
    type WebsiteCreateResponse as WebsiteCreateResponse,
    type WebsiteListResponse as WebsiteListResponse,
    type WebsiteCreateParams as WebsiteCreateParams,
    type WebsiteListParams as WebsiteListParams,
  };
}
