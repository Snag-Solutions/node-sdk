// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Accounts extends APIResource {
  /**
   * Get loyalty accounts
   */
  list(query?: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<AccountListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AccountListResponse>;
  list(
    query: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/loyalty/accounts', { query, ...options });
  }

  /**
   * Returns the user's rank determined by their loyalty points for the specified
   * loyalty currency. This can be a slow operation for large organizations. We
   * recommend caching when possible.
   */
  getRank(
    pathId: string,
    query: AccountGetRankParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountGetRankResponse> {
    return this._client.get(`/api/loyalty/accounts/${pathId}/rank`, { query, ...options });
  }
}

/**
 * Schema for the response of getting loyalty accounts
 */
export interface AccountListResponse {
  /**
   * Array of loyalty accounts
   */
  data: Array<AccountListResponse.Data>;

  /**
   * Indicates if there is a next page of results
   */
  hasNextPage: boolean;

  /**
   * Optional message
   */
  message?: string;
}

export namespace AccountListResponse {
  /**
   * Schema for a loyalty account
   */
  export interface Data {
    /**
     * Unique identifier for the loyalty account
     */
    id: string;

    /**
     * Unique identifier for the loyalty currency
     */
    loyaltyCurrencyId: string;

    /**
     * User associated with the loyalty account
     */
    user: Data.User | null;

    /**
     * Unique identifier for the user
     */
    userId: string | null;

    /**
     * Balance amount in the loyalty account
     */
    amount?: unknown;

    /**
     * Version number used for optimistic locking
     */
    lockVersion?: unknown;
  }

  export namespace Data {
    /**
     * Schema for a user
     */
    export interface User {
      /**
       * Unique identifier for the user
       */
      id: string;

      /**
       * Array of metadata associated with the user
       */
      userMetadata: Array<User.UserMetadata>;

      /**
       * Ethereum wallet address of the user
       */
      walletAddress: string | null;
    }

    export namespace User {
      /**
       * Schema for user metadata
       */
      export interface UserMetadata {
        /**
         * Discord username associated with the user
         */
        discordUser: string | null;

        /**
         * Display name of the user
         */
        displayName: string | null;

        /**
         * URL of the user's logo
         */
        logoUrl: string | null;

        /**
         * Twitter username associated with the user
         */
        twitterUser: string | null;

        /**
         * Identifier for the wallet group
         */
        walletGroupIdentifier: string | null;
      }
    }
  }
}

/**
 * Schema for a get account rank response
 */
export interface AccountGetRankResponse {
  /**
   * Rank of the user
   */
  rank: number;
}

export interface AccountListParams {
  /**
   * Discord username to filter accounts by
   */
  discordUser?: string;

  /**
   * External identifier for the user
   */
  externalIdentifier?: string;

  /**
   * Maximum number of accounts to return
   */
  limit?: number;

  /**
   * Unique identifier for the loyalty currency
   */
  loyaltyCurrencyId?: string;

  /**
   * Order the accounts by amount in ascending or descending order
   */
  'orderBy[amount]'?: 'asc' | 'desc';

  /**
   * Unique identifier for the organization to filter by
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific account ID
   */
  startingAfter?: string;

  /**
   * Twitter username to filter accounts by
   */
  twitterUser?: string;

  /**
   * External identifier for the user group controlled by you
   */
  userGroupExternalIdentifier?: string;

  /**
   * Unique identifier for the user group
   */
  userGroupId?: string;

  /**
   * User ID(s) to filter accounts by
   */
  userId?: string | Array<string>;

  /**
   * Wallet address(es) to filter accounts by
   */
  walletAddress?: string | Array<string>;

  /**
   * Wallet group identifier to filter accounts by
   */
  walletGroupIdentifier?: string;

  /**
   * Unique identifier for the website to filter by
   */
  websiteId?: string;
}

export interface AccountGetRankParams {
  /**
   * UUID of the account
   */
  query_id: string;

  /**
   * UUID of the loyalty currency
   */
  loyaltyCurrencyId: string;

  /**
   * UUID of the organization
   */
  organizationId: string;

  /**
   * UUID of the website
   */
  websiteId: string;
}

export declare namespace Accounts {
  export {
    type AccountListResponse as AccountListResponse,
    type AccountGetRankResponse as AccountGetRankResponse,
    type AccountListParams as AccountListParams,
    type AccountGetRankParams as AccountGetRankParams,
  };
}
