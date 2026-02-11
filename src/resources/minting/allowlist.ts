// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Allowlist extends APIResource {
  /**
   * Fetch allowlist entries for a minting contract asset
   *
   * @example
   * ```ts
   * const allowlists = await client.minting.allowlist.list({
   *   mintingContractAssetId:
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   * ```
   */
  list(query: AllowlistListParams, options?: Core.RequestOptions): Core.APIPromise<AllowlistListResponse> {
    return this._client.get('/api/minting/assets/allowlist', { query, ...options });
  }

  /**
   * Create or update allowlist entries for a minting contract asset (max 25 entries
   * per request). If an entry already exists, it will be updated with the new
   * quantity.
   *
   * @example
   * ```ts
   * const response = await client.minting.allowlist.upsert({
   *   entries: [
   *     { quantity: 1, walletAddress: 'walletAddress' },
   *   ],
   *   mintingContractAssetId:
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   * ```
   */
  upsert(
    body: AllowlistUpsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AllowlistUpsertResponse> {
    return this._client.post('/api/minting/assets/allowlist', { body, ...options });
  }
}

/**
 * Response schema for allowlist entries
 */
export interface AllowlistListResponse {
  data: Array<AllowlistListResponse.Data>;

  hasNextPage: boolean;
}

export namespace AllowlistListResponse {
  export interface Data {
    mintingContractAssetId: string;

    quantityMinted: number;

    totalQuantity: number;

    walletAddress: string;
  }
}

/**
 * Response schema for allowlist mutations
 */
export interface AllowlistUpsertResponse {
  createdCount: number;

  mintingContractAssetId: string;
}

export interface AllowlistListParams {
  mintingContractAssetId: string;

  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Cursor for pagination (entry ID)
   */
  startingAfter?: string;

  walletAddress?: string;
}

export interface AllowlistUpsertParams {
  /**
   * Allowlist entries (max 25 per request)
   */
  entries: Array<AllowlistUpsertParams.Entry>;

  mintingContractAssetId: string;
}

export namespace AllowlistUpsertParams {
  export interface Entry {
    quantity: number;

    walletAddress: string;
  }
}

export declare namespace Allowlist {
  export {
    type AllowlistListResponse as AllowlistListResponse,
    type AllowlistUpsertResponse as AllowlistUpsertResponse,
    type AllowlistListParams as AllowlistListParams,
    type AllowlistUpsertParams as AllowlistUpsertParams,
  };
}
