// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Transactions extends APIResource {
  /**
   * Create a loyalty transaction to update account balances.
   */
  createTransaction(
    body: TransactionCreateTransactionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionCreateTransactionResponse> {
    return this._client.post('/api/loyalty/transactions', { body, ...options });
  }

  /**
   * Fetch loyalty transaction entries for wallets or users, representing account
   * balance changes.
   */
  getTransactionEntries(
    query?: TransactionGetTransactionEntriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionGetTransactionEntriesResponse>;
  getTransactionEntries(
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionGetTransactionEntriesResponse>;
  getTransactionEntries(
    query: TransactionGetTransactionEntriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionGetTransactionEntriesResponse> {
    if (isRequestOptions(query)) {
      return this.getTransactionEntries({}, query);
    }
    return this._client.get('/api/loyalty/transaction_entries', { query, ...options });
  }
}

export interface TransactionCreateTransactionResponse {
  id: string;

  createdAt: string;

  description: string;

  entries: Array<TransactionCreateTransactionResponse.Entry>;

  updatedAt: string;
}

export namespace TransactionCreateTransactionResponse {
  export interface Entry {
    amount: number;

    /**
     * Direction of the transaction entry
     */
    direction: 'credit' | 'debit';

    walletAddress: string;

    idempotencyKey?: string;
  }
}

export interface TransactionGetTransactionEntriesResponse {
  data: Array<TransactionGetTransactionEntriesResponse.Data>;

  hasNextPage: boolean;
}

export namespace TransactionGetTransactionEntriesResponse {
  /**
   * Schema for a loyalty transaction entry
   */
  export interface Data {
    /**
     * Unique identifier for the transaction entry
     */
    id: string;

    /**
     * Amount involved in the transaction
     */
    amount: number;

    /**
     * Timestamp when the transaction entry was created
     */
    createdAt: string;

    /**
     * Direction of the transaction entry
     */
    direction: 'credit' | 'debit';

    /**
     * Unique identifier for the loyalty account
     */
    loyaltyAccountId: string;

    /**
     * Details of the loyalty transaction
     */
    loyaltyTransaction: Data.LoyaltyTransaction;

    /**
     * Unique identifier for the organization
     */
    organizationId: string;

    /**
     * Type of the loyalty transaction
     */
    type: 'auction_bid' | 'direct_mint' | 'loyalty_rule' | 'api_key' | 'order';

    /**
     * Timestamp when the transaction entry was last updated
     */
    updatedAt: string;

    /**
     * Unique identifier for the website
     */
    websiteId: string;

    /**
     * Optional metadata for the transaction entry
     */
    metadata?: Record<string, unknown>;
  }

  export namespace Data {
    /**
     * Details of the loyalty transaction
     */
    export interface LoyaltyTransaction {
      /**
       * Unique identifier for the loyalty transaction
       */
      id: string;

      /**
       * Type of the loyalty transaction
       */
      type: 'auction_bid' | 'direct_mint' | 'loyalty_rule' | 'api_key' | 'order';

      /**
       * Details of the loyalty rule associated with the transaction
       */
      loyaltyRule?: LoyaltyTransaction.LoyaltyRule;
    }

    export namespace LoyaltyTransaction {
      /**
       * Details of the loyalty rule associated with the transaction
       */
      export interface LoyaltyRule {
        /**
         * Unique identifier for the loyalty rule
         */
        id: string;

        /**
         * Type of the loyalty rule
         */
        type: string;

        /**
         * Description of the loyalty rule
         */
        description?: string;

        /**
         * Optional metadata for the loyalty rule
         */
        metadata?: Record<string, unknown>;

        /**
         * Name of the loyalty rule
         */
        name?: string;
      }
    }
  }
}

export interface TransactionCreateTransactionParams {
  /**
   * Description of the loyalty transaction
   */
  description: string;

  /**
   * Array of transaction entries
   */
  entries: Array<TransactionCreateTransactionParams.Entry>;

  /**
   * Unique identifier for the loyalty currency
   */
  loyaltyCurrencyId?: string;
}

export namespace TransactionCreateTransactionParams {
  export interface Entry {
    /**
     * Transaction entry amount.
     */
    amount: number;

    /**
     * Direction of the transaction entry for this wallet address
     */
    direction?: 'credit' | 'debit';

    /**
     * Idempotency key for the transaction entry. Creation will fail if already exists
     * for this wallet address.
     */
    idempotencyKey?: string;

    /**
     * The wallet address of the user
     */
    walletAddress?: string;
  }
}

export interface TransactionGetTransactionEntriesParams {
  /**
   * End date to filter by (exclusive, less than)
   */
  createdAtEnd?: string;

  /**
   * Start date to filter by (inclusive, greater than or equal to)
   */
  createdAtStart?: string;

  /**
   * Direction of the transaction entry to filter by
   */
  direction?: 'credit' | 'debit';

  /**
   * Key to ensure idempotency of the request
   */
  idempotencyKey?: string;

  /**
   * Maximum number of records to return (max 1000)
   */
  limit?: number;

  /**
   * Unique identifier for the loyalty rule to filter by
   */
  loyaltyRuleId?: string;

  /**
   * Unique identifier for the loyalty transaction to filter by
   */
  loyaltyTransactionId?: string;

  /**
   * Field to order the results by
   */
  orderBy?: 'createdAt' | 'updatedAt' | 'loyaltyAccountLockVersion';

  /**
   * Unique identifier for the organization to filter by
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific resource ID
   */
  startingAfter?: string;

  /**
   * Type of the loyalty transaction to filter by
   */
  type?: 'auction_bid' | 'direct_mint' | 'loyalty_rule' | 'api_key' | 'order';

  /**
   * When passed in return the list of fulfilled entries for loyalty rules. If a
   * loyalty rule has a fulfilled entry this means the user cannot currently complete
   * the rule. Must be passed in with userId or walletAddress.
   */
  userCompletedLoyaltyRuleId?: string | Array<string>;

  /**
   * External identifier for the user group controlled by you
   */
  userGroupExternalIdentifier?: string;

  /**
   * Unique identifier for the user group
   */
  userGroupId?: string;

  /**
   * User ID or array of User IDs to filter by
   */
  userId?: string | Array<string>;

  /**
   * Wallet address or array of wallet addresses to filter by
   */
  walletAddress?: string | Array<string>;

  /**
   * Identifier for the wallet group to filter by
   */
  walletGroupIdentifier?: string;

  /**
   * Unique identifier for the website to filter by
   */
  websiteId?: string;
}

export declare namespace Transactions {
  export {
    type TransactionCreateTransactionResponse as TransactionCreateTransactionResponse,
    type TransactionGetTransactionEntriesResponse as TransactionGetTransactionEntriesResponse,
    type TransactionCreateTransactionParams as TransactionCreateTransactionParams,
    type TransactionGetTransactionEntriesParams as TransactionGetTransactionEntriesParams,
  };
}
