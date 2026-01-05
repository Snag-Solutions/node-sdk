// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Currencies extends APIResource {
  /**
   * Create a loyalty currency
   *
   * @example
   * ```ts
   * const currency = await client.loyalty.currencies.create({
   *   decimals: 2,
   *   name: 'Loyalty Points',
   *   organizationId: '123e4567-e89b-12d3-a456-426614174001',
   *   symbol: 'LP',
   *   websiteId: '123e4567-e89b-12d3-a456-426614174002',
   * });
   * ```
   */
  create(body: CurrencyCreateParams, options?: Core.RequestOptions): Core.APIPromise<CurrencyCreateResponse> {
    return this._client.post('/api/loyalty/currencies', { body, ...options });
  }

  /**
   * Get loyalty currencies
   *
   * @example
   * ```ts
   * const currencies = await client.loyalty.currencies.list({
   *   organizationId: '123e4567-e89b-12d3-a456-426614174001',
   *   websiteId: '123e4567-e89b-12d3-a456-426614174002',
   * });
   * ```
   */
  list(query: CurrencyListParams, options?: Core.RequestOptions): Core.APIPromise<CurrencyListResponse> {
    return this._client.get('/api/loyalty/currencies', { query, ...options });
  }
}

/**
 * Schema for a loyalty currency
 */
export interface CurrencyCreateResponse {
  /**
   * Unique identifier for the loyalty currency
   */
  id: string;

  /**
   * Authentication key for API
   */
  apiAuthKey: string | null;

  /**
   * Type of authentication used for API
   */
  apiAuthType: 'none' | 'basic' | 'bearer' | 'api_key' | null;

  /**
   * Authentication value for API
   */
  apiAuthValue: string | null;

  /**
   * API GET URL for fetching transaction entry data
   */
  apiGetTransactionEntryUrl: string | null;

  /**
   * API GET URL for fetching data
   */
  apiGetUrl: string | null;

  /**
   * API POST URL for sending data
   */
  apiPostUrl: string | null;

  /**
   * Timestamp when the currency was created
   */
  createdAt: string;

  /**
   * ID of the user who created the currency
   */
  createdById: string | null;

  /**
   * Number of decimal places for the currency
   */
  decimals: number;

  /**
   * Timestamp when the currency was deleted, if applicable
   */
  deletedAt: string | null;

  /**
   * URL of the image
   */
  imageUrl: string | null;

  /**
   * Name of the loyalty currency
   */
  name: string;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Sorting identifier
   */
  sortId: number | null;

  /**
   * Symbol representing the loyalty currency
   */
  symbol: string;

  /**
   * Timestamp when the currency was last updated
   */
  updatedAt: string;

  /**
   * Unique identifier for the website
   */
  websiteId: string;
}

export interface CurrencyListResponse {
  data: Array<CurrencyListResponse.Data>;

  hasNextPage: boolean;
}

export namespace CurrencyListResponse {
  /**
   * Schema for a loyalty currency
   */
  export interface Data {
    /**
     * Unique identifier for the loyalty currency
     */
    id: string;

    /**
     * Authentication key for API
     */
    apiAuthKey: string | null;

    /**
     * Type of authentication used for API
     */
    apiAuthType: 'none' | 'basic' | 'bearer' | 'api_key' | null;

    /**
     * Authentication value for API
     */
    apiAuthValue: string | null;

    /**
     * API GET URL for fetching transaction entry data
     */
    apiGetTransactionEntryUrl: string | null;

    /**
     * API GET URL for fetching data
     */
    apiGetUrl: string | null;

    /**
     * API POST URL for sending data
     */
    apiPostUrl: string | null;

    /**
     * Timestamp when the currency was created
     */
    createdAt: string;

    /**
     * ID of the user who created the currency
     */
    createdById: string | null;

    /**
     * Number of decimal places for the currency
     */
    decimals: number;

    /**
     * Timestamp when the currency was deleted, if applicable
     */
    deletedAt: string | null;

    /**
     * URL of the image
     */
    imageUrl: string | null;

    /**
     * Name of the loyalty currency
     */
    name: string;

    /**
     * Unique identifier for the organization
     */
    organizationId: string;

    /**
     * Sorting identifier
     */
    sortId: number | null;

    /**
     * Symbol representing the loyalty currency
     */
    symbol: string;

    /**
     * Timestamp when the currency was last updated
     */
    updatedAt: string;

    /**
     * Unique identifier for the website
     */
    websiteId: string;
  }
}

export interface CurrencyCreateParams {
  /**
   * Number of decimal places for the currency
   */
  decimals: number;

  /**
   * Name of the loyalty currency
   */
  name: string;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Symbol representing the loyalty currency
   */
  symbol: string;

  /**
   * Unique identifier for the website
   */
  websiteId: string;

  /**
   * Authentication key for API
   */
  apiAuthKey?: string | null;

  /**
   * Type of authentication used for API
   */
  apiAuthType?: 'none' | 'basic' | 'bearer' | 'api_key' | null;

  /**
   * Authentication value for API
   */
  apiAuthValue?: string | null;

  /**
   * Optional API GET URL for fetching transaction entry data
   */
  apiGetTransactionEntryUrl?: string | null;

  /**
   * Optional API GET URL for fetching data
   */
  apiGetUrl?: string | null;

  /**
   * Optional API POST URL for sending data
   */
  apiPostUrl?: string | null;

  /**
   * URL of the image; must start with AWS S3 asset URL base
   */
  imageUrl?: string | null;

  /**
   * Optional sorting identifier
   */
  sortId?: number;
}

export interface CurrencyListParams {
  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Unique identifier for the website
   */
  websiteId: string;

  /**
   * Whether to include deleted currencies
   */
  includeDeleted?: string;

  /**
   * Maximum number of records to return
   */
  limit?: number;

  /**
   * Cursor for pagination; start after this ID
   */
  startingAfter?: string;
}

export declare namespace Currencies {
  export {
    type CurrencyCreateResponse as CurrencyCreateResponse,
    type CurrencyListResponse as CurrencyListResponse,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyListParams as CurrencyListParams,
  };
}
