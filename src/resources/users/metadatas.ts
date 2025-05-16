// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Metadatas extends APIResource {
  /**
   * This endpoint is used to create user metadata
   *
   * @example
   * ```ts
   * const metadata = await client.users.metadatas.create();
   * ```
   */
  create(body?: MetadataCreateParams, options?: Core.RequestOptions): Core.APIPromise<MetadataCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<MetadataCreateResponse>;
  create(
    body: MetadataCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetadataCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/api/users/metadatas', { body, ...options });
  }

  /**
   * This endpoint is used to get user metadata
   *
   * @example
   * ```ts
   * const metadatas = await client.users.metadatas.list();
   * ```
   */
  list(query?: MetadataListParams, options?: Core.RequestOptions): Core.APIPromise<MetadataListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MetadataListResponse>;
  list(
    query: MetadataListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetadataListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/users/metadatas', { query, ...options });
  }
}

/**
 * Schema for a user metadata
 */
export interface MetadataCreateResponse {
  /**
   * Unique identifier for the user metadata
   */
  id: string;

  /**
   * Timestamp when the wallet was created
   */
  createdAt: string;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  user: MetadataCreateResponse.User;

  userGroup: MetadataCreateResponse.UserGroup;

  /**
   * Identifier for the user group set via api
   */
  userGroupId: string | null;

  /**
   * Identifier for the user wallet group set via api
   */
  walletGroupIdentifier: string | null;

  /**
   * Unique identifier for the website
   */
  websiteId: string;
}

export namespace MetadataCreateResponse {
  export interface User {
    /**
     * Id for the user
     */
    id: string;

    /**
     * Wallet address of the user
     */
    walletAddress: string;
  }

  export interface UserGroup {
    /**
     * id for the user group
     */
    id: string;

    /**
     * External identifier for the user group
     */
    externalIdentifier: string | null;
  }
}

/**
 * Response schema for fetching user metadata
 */
export interface MetadataListResponse {
  data: Array<MetadataListResponse.Data>;

  /**
   * Indicates if there are more records available
   */
  hasNextPage: boolean;
}

export namespace MetadataListResponse {
  export interface Data {
    /**
     * Unique identifier for the user metadata
     */
    id: string;
  }
}

export interface MetadataCreateParams {
  discordUser?: string | null;

  discordUserId?: string | null;

  displayName?: string | null;

  emailAddress?: string | null;

  epicAccountIdentifier?: string | null;

  externalIdentifier?: string | null;

  externalLoyaltyScore?: string | null;

  googleUser?: string | null;

  googleUserId?: string | null;

  isBlocked?: boolean;

  logoUrl?: string | null;

  organizationId?: string;

  stardustProfileIdentifier?: string | null;

  stardustWalletIdentifier?: string | null;

  steamUserId?: string | null;

  steamUsername?: string | null;

  telegramUserId?: string | null;

  telegramUsername?: string | null;

  twitterUser?: string | null;

  twitterUserFollowersCount?: number | null;

  twitterUserId?: string | null;

  userGroupExternalIdentifier?: string | null;

  userGroupId?: string;

  userId?: string;

  walletAddress?: string;

  walletGroupIdentifier?: string | null;

  websiteId?: string;

  YTChannelId?: string | null;
}

export interface MetadataListParams {
  /**
   * External identifier for the user
   */
  externalIdentifier?: string | null;

  /**
   * Number of records to fetch
   */
  limit?: number;

  /**
   * UUID of the organization
   */
  organizationId?: string;

  /**
   * Fetch records starting after this ID
   */
  startingAfter?: string;

  /**
   * UUID of the user
   */
  userId?: string;

  /**
   * Wallet address of the user
   */
  walletAddress?: string;

  /**
   * UUID of the website
   */
  websiteId?: string;
}

export declare namespace Metadatas {
  export {
    type MetadataCreateResponse as MetadataCreateResponse,
    type MetadataListResponse as MetadataListResponse,
    type MetadataCreateParams as MetadataCreateParams,
    type MetadataListParams as MetadataListParams,
  };
}
