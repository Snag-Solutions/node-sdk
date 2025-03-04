// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Multipliers extends APIResource {
  /**
   * Create a new loyalty multiplier for a wallet.
   */
  create(
    body: MultiplierCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MultiplierCreateResponse> {
    return this._client.post('/api/loyalty/multipliers', { body, ...options });
  }

  /**
   * Update an existing loyalty multiplier.
   */
  update(
    multiplierId: string,
    body?: MultiplierUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MultiplierUpdateResponse>;
  update(multiplierId: string, options?: Core.RequestOptions): Core.APIPromise<MultiplierUpdateResponse>;
  update(
    multiplierId: string,
    body: MultiplierUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MultiplierUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(multiplierId, {}, body);
    }
    return this._client.post(`/api/loyalty/multipliers/${multiplierId}`, { body, ...options });
  }

  /**
   * Get Loyalty Multipliers
   */
  list(query?: MultiplierListParams, options?: Core.RequestOptions): Core.APIPromise<MultiplierListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MultiplierListResponse>;
  list(
    query: MultiplierListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MultiplierListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/loyalty/multipliers', { query, ...options });
  }

  /**
   * Delete a loyalty multiplier by its external identifier.
   */
  delete(
    body: MultiplierDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MultiplierDeleteResponse> {
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

  user: MultiplierCreateResponse.User;

  userId: string;

  websiteId: string;
}

export namespace MultiplierCreateResponse {
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

  user: MultiplierUpdateResponse.User;

  userId: string;

  websiteId: string;
}

export namespace MultiplierUpdateResponse {
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

    user: Data.User;

    userId: string;

    websiteId: string;
  }

  export namespace Data {
    export interface User {
      id: string;

      walletAddress: string;
    }
  }
}

/**
 * Schema for loyalty multiplier
 */
export interface MultiplierDeleteResponse {
  id: string;

  createdAt: string;

  deletedAt: string | null;

  description: string | null;

  externalIdentifier: string | null;

  multiplier: number;

  organizationId: string;

  title: string | null;

  updatedAt: string;

  user: MultiplierDeleteResponse.User;

  userId: string;

  websiteId: string;
}

export namespace MultiplierDeleteResponse {
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
  discordUser?: string;

  externalIdentifier?: string;

  includeDeleted?: string;

  limit?: number;

  organizationId?: string;

  startingAfter?: string;

  twitterUser?: string;

  userGroupExternalIdentifier?: string;

  userGroupId?: string;

  userId?: string | Array<string>;

  walletAddress?: string | Array<string>;

  walletGroupIdentifier?: string;

  websiteId?: string;
}

export interface MultiplierDeleteParams {
  externalIdentifier: string;
}

export declare namespace Multipliers {
  export {
    type MultiplierCreateResponse as MultiplierCreateResponse,
    type MultiplierUpdateResponse as MultiplierUpdateResponse,
    type MultiplierListResponse as MultiplierListResponse,
    type MultiplierDeleteResponse as MultiplierDeleteResponse,
    type MultiplierCreateParams as MultiplierCreateParams,
    type MultiplierUpdateParams as MultiplierUpdateParams,
    type MultiplierListParams as MultiplierListParams,
    type MultiplierDeleteParams as MultiplierDeleteParams,
  };
}
