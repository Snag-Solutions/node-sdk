// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Multipliers extends APIResource {
  /**
   * Create a new loyalty multiplier for a wallet.
   *
   * @example
   * ```ts
   * const multiplier = await client.loyalty.multipliers.create({
   *   multiplier: 0.01,
   *   walletAddress: 'walletAddress',
   * });
   * ```
   */
  create(body: MultiplierCreateParams, options?: RequestOptions): APIPromise<MultiplierCreateResponse> {
    return this._client.post('/api/loyalty/multipliers', { body, ...options });
  }

  /**
   * Update an existing loyalty multiplier.
   *
   * @example
   * ```ts
   * const multiplier = await client.loyalty.multipliers.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(
    multiplierID: string,
    body: MultiplierUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MultiplierUpdateResponse> {
    return this._client.post(path`/api/loyalty/multipliers/${multiplierID}`, { body, ...options });
  }

  /**
   * Get Loyalty Multipliers
   *
   * @example
   * ```ts
   * const multipliers = await client.loyalty.multipliers.list();
   * ```
   */
  list(
    query: MultiplierListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MultiplierListResponse> {
    return this._client.get('/api/loyalty/multipliers', { query, ...options });
  }

  /**
   * Delete a loyalty multiplier by its ID.
   *
   * @example
   * ```ts
   * const multiplier = await client.loyalty.multipliers.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(multiplierID: string, options?: RequestOptions): APIPromise<MultiplierDeleteResponse> {
    return this._client.delete(path`/api/loyalty/multipliers/${multiplierID}`, options);
  }

  /**
   * Delete a loyalty multiplier by its external identifier.
   *
   * @example
   * ```ts
   * const response =
   *   await client.loyalty.multipliers.deleteByExternalID({
   *     externalIdentifier: 'externalIdentifier',
   *   });
   * ```
   */
  deleteByExternalID(
    body: MultiplierDeleteByExternalIDParams,
    options?: RequestOptions,
  ): APIPromise<MultiplierDeleteByExternalIDResponse> {
    return this._client.delete('/api/loyalty/multipliers', { body, ...options });
  }
}

/**
 * Schema for loyalty multiplier
 */
export interface MultiplierCreateResponse {
  id: string;

  createdAt: string;

  deletedAt: string | null;

  description: string | null;

  externalIdentifier: string | null;

  multiplier: number;

  organizationId: string;

  title: string | null;

  updatedAt: string;

  /**
   * Schema for a loyalty multiplier user
   */
  user: MultiplierCreateResponse.User;

  userId: string;

  websiteId: string;

  loyaltyRuleId?: string;
}

export namespace MultiplierCreateResponse {
  /**
   * Schema for a loyalty multiplier user
   */
  export interface User {
    id: string;

    walletAddress: string;
  }
}

/**
 * Schema for loyalty multiplier
 */
export interface MultiplierUpdateResponse {
  id: string;

  createdAt: string;

  deletedAt: string | null;

  description: string | null;

  externalIdentifier: string | null;

  multiplier: number;

  organizationId: string;

  title: string | null;

  updatedAt: string;

  /**
   * Schema for a loyalty multiplier user
   */
  user: MultiplierUpdateResponse.User;

  userId: string;

  websiteId: string;

  loyaltyRuleId?: string;
}

export namespace MultiplierUpdateResponse {
  /**
   * Schema for a loyalty multiplier user
   */
  export interface User {
    id: string;

    walletAddress: string;
  }
}

export interface MultiplierListResponse {
  data: Array<MultiplierListResponse.Data>;

  hasNextPage: boolean;
}

export namespace MultiplierListResponse {
  /**
   * Schema for loyalty multiplier
   */
  export interface Data {
    id: string;

    createdAt: string;

    deletedAt: string | null;

    description: string | null;

    externalIdentifier: string | null;

    multiplier: number;

    organizationId: string;

    title: string | null;

    updatedAt: string;

    /**
     * Schema for a loyalty multiplier user
     */
    user: Data.User;

    userId: string;

    websiteId: string;

    loyaltyRuleId?: string;
  }

  export namespace Data {
    /**
     * Schema for a loyalty multiplier user
     */
    export interface User {
      id: string;

      walletAddress: string;
    }
  }
}

export interface MultiplierDeleteResponse {
  id: string;
}

/**
 * Schema for loyalty multiplier
 */
export interface MultiplierDeleteByExternalIDResponse {
  id: string;

  createdAt: string;

  deletedAt: string | null;

  description: string | null;

  externalIdentifier: string | null;

  multiplier: number;

  organizationId: string;

  title: string | null;

  updatedAt: string;

  /**
   * Schema for a loyalty multiplier user
   */
  user: MultiplierDeleteByExternalIDResponse.User;

  userId: string;

  websiteId: string;

  loyaltyRuleId?: string;
}

export namespace MultiplierDeleteByExternalIDResponse {
  /**
   * Schema for a loyalty multiplier user
   */
  export interface User {
    id: string;

    walletAddress: string;
  }
}

export interface MultiplierCreateParams {
  multiplier: number;

  walletAddress: string;

  description?: string | null;

  externalIdentifier?: string | null;

  title?: string | null;
}

export interface MultiplierUpdateParams {
  description?: string | null;

  multiplier?: number;

  title?: string | null;
}

export interface MultiplierListParams {
  externalIdentifier?: string;

  includeDeleted?: string;

  limit?: number;

  organizationId?: string;

  startingAfter?: string;

  userGroupExternalIdentifier?: string;

  userGroupId?: string;

  userId?: string | Array<string>;

  walletAddress?: string | Array<string>;

  walletGroupIdentifier?: string;

  websiteId?: string;
}

export interface MultiplierDeleteByExternalIDParams {
  externalIdentifier: string;
}

export declare namespace Multipliers {
  export {
    type MultiplierCreateResponse as MultiplierCreateResponse,
    type MultiplierUpdateResponse as MultiplierUpdateResponse,
    type MultiplierListResponse as MultiplierListResponse,
    type MultiplierDeleteResponse as MultiplierDeleteResponse,
    type MultiplierDeleteByExternalIDResponse as MultiplierDeleteByExternalIDResponse,
    type MultiplierCreateParams as MultiplierCreateParams,
    type MultiplierUpdateParams as MultiplierUpdateParams,
    type MultiplierListParams as MultiplierListParams,
    type MultiplierDeleteByExternalIDParams as MultiplierDeleteByExternalIDParams,
  };
}
