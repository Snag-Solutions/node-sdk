// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Accounts extends APIResource {
  /**
   * Get loyalty accounts
   *
   * @example
   * ```ts
   * const accounts = await client.loyalty.accounts.list();
   * ```
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
   *
   * @example
   * ```ts
   * const response = await client.loyalty.accounts.retrieveRank(
   *   '123e4567-e89b-12d3-a456-426614174333',
   *   {
   *     loyaltyCurrencyId:
   *       '123e4567-e89b-12d3-a456-426614174333',
   *     organizationId: '123e4567-e89b-12d3-a456-426614174333',
   *     websiteId: '123e4567-e89b-12d3-a456-426614174333',
   *   },
   * );
   * ```
   */
  retrieveRank(
    id: string,
    query: AccountRetrieveRankParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountRetrieveRankResponse> {
    return this._client.get(`/api/loyalty/accounts/${id}/rank`, { query, ...options });
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

      /**
       * Array of website user attribute values for the user
       */
      websiteUserAttributeValues: Array<User.WebsiteUserAttributeValue>;
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

      /**
       * Schema for a website user attribute value
       */
      export interface WebsiteUserAttributeValue {
        /**
         * Value for the website user attribute
         */
        value: string;

        /**
         * Website user attribute details
         */
        websiteUserAttribute: WebsiteUserAttributeValue.WebsiteUserAttribute;
      }

      export namespace WebsiteUserAttributeValue {
        /**
         * Website user attribute details
         */
        export interface WebsiteUserAttribute {
          /**
           * Unique identifier for the website user attribute
           */
          id: string;

          /**
           * Label for the website user attribute
           */
          label: string;
        }
      }
    }
  }
}

/**
 * Schema for a get account rank response
 */
export interface AccountRetrieveRankResponse {
  /**
   * Rank of the user. null means the user has no amount.
   */
  rank: number | null;
}

export interface AccountListParams {
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
   * Unique identifier for the organization to filter by
   */
  organizationId?: string;

  /**
   * Order the accounts in ascending or descending order, sorted by amount
   */
  sortDir?: 'asc' | 'desc';

  /**
   * Pagination cursor to start after a specific account ID
   */
  startingAfter?: string;

  /**
   * External identifier for the user group controlled by you
   */
  userGroupExternalIdentifier?: string;

  /**
   * Unique identifier for the user group
   */
  userGroupId?: string;

  /**
   * User ID(s) to filter accounts by. Pass in null to get a currencys main accounts.
   */
  userId?: string | 'null' | Array<string>;

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

export interface AccountRetrieveRankParams {
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
    type AccountRetrieveRankResponse as AccountRetrieveRankResponse,
    type AccountListParams as AccountListParams,
    type AccountRetrieveRankParams as AccountRetrieveRankParams,
  };
}
