// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AccountsAPI from './accounts';
import {
  AccountListParams,
  AccountListResponse,
  AccountRetrieveRankParams,
  AccountRetrieveRankResponse,
  Accounts,
} from './accounts';
import * as QuestionsAPI from './questions';
import {
  QuestionCreateParams,
  QuestionCreateResponse,
  QuestionListParams,
  QuestionListResponse,
  QuestionUpdateParams,
  QuestionUpdateResponse,
  Questions,
} from './questions';
import * as QuestionsResponsesAPI from './questions-responses';
import {
  QuestionsResponseListParams,
  QuestionsResponseListResponse,
  QuestionsResponseSubmitParams,
  QuestionsResponseSubmitResponse,
  QuestionsResponses,
} from './questions-responses';

export class TransactionEntries extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  questions: QuestionsAPI.Questions = new QuestionsAPI.Questions(this._client);
  questionsResponses: QuestionsResponsesAPI.QuestionsResponses = new QuestionsResponsesAPI.QuestionsResponses(
    this._client,
  );

  /**
   * Fetch loyalty transaction entries for wallets or users, representing account
   * balance changes.
   */
  list(
    query?: TransactionEntryListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionEntryListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TransactionEntryListResponse>;
  list(
    query: TransactionEntryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionEntryListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/loyalty/transaction_entries', { query, ...options });
  }

  /**
   * Create a loyalty transaction to update account balances.
   */
  createTransaction(
    body: TransactionEntryCreateTransactionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionEntryCreateTransactionResponse> {
    return this._client.post('/api/loyalty/transactions', { body, ...options });
  }

  /**
   * Retrieve configured loyalty rule groups
   */
  listRuleGroups(
    query?: TransactionEntryListRuleGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionEntryListRuleGroupsResponse>;
  listRuleGroups(options?: Core.RequestOptions): Core.APIPromise<TransactionEntryListRuleGroupsResponse>;
  listRuleGroups(
    query: TransactionEntryListRuleGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionEntryListRuleGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.listRuleGroups({}, query);
    }
    return this._client.get('/api/loyalty/rule_groups', { query, ...options });
  }
}

export interface TransactionEntryListResponse {
  data: Array<TransactionEntryListResponse.Data>;

  hasNextPage: boolean;
}

export namespace TransactionEntryListResponse {
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

export interface TransactionEntryCreateTransactionResponse {
  id: string;

  createdAt: string;

  description: string;

  entries: Array<TransactionEntryCreateTransactionResponse.Entry>;

  updatedAt: string;
}

export namespace TransactionEntryCreateTransactionResponse {
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

export interface TransactionEntryListRuleGroupsResponse {
  data: Array<TransactionEntryListRuleGroupsResponse.Data>;

  hasNextPage: boolean;
}

export namespace TransactionEntryListRuleGroupsResponse {
  export interface Data {
    id: string;

    isCollapsible: boolean;

    isRequired: boolean;

    loyaltyGroupItems: Array<Data.LoyaltyGroupItem>;

    name: string;

    sortId: number;

    subTitle: string | null;
  }

  export namespace Data {
    export interface LoyaltyGroupItem {
      id: string;

      loyaltyRule: LoyaltyGroupItem.LoyaltyRule;

      sortId: number;
    }

    export namespace LoyaltyGroupItem {
      export interface LoyaltyRule {
        id: string;

        amount: number | null;

        description: string | null;

        endTime: string | null;

        hideInUi: boolean;

        isRequired: boolean;

        loyaltyCurrencyId: string;

        name: string;

        rewardType: 'points' | 'multiplier';

        type:
          | 'Bonus'
          | 'BoughtOn'
          | 'BoughtWithRoyalties'
          | 'DiscordMessages'
          | 'Listing'
          | 'Lodging'
          | 'MintOn'
          | 'PoapClaim'
          | 'SnagSocialsConnected'
          | 'SnapshotFullset'
          | 'SnapshotHold'
          | 'SoldOn'
          | 'SoldWithRoyalties'
          | 'TokenHold'
          | 'TwitterBio'
          | 'TwitterHashTagPost'
          | 'Retweet'
          | 'check_in'
          | 'code_entry'
          | 'connect_wallet'
          | 'connected_discord'
          | 'connected_email'
          | 'connected_epic'
          | 'connected_steam'
          | 'connected_telegram'
          | 'connected_twitter'
          | 'create_partner_account'
          | 'discord_member'
          | 'drip_x_follow'
          | 'drip_x_new_tweet'
          | 'drip_x_text_in_bio'
          | 'drip_x_text_in_comment'
          | 'drip_x_text_in_name'
          | 'drip_x_tweet'
          | 'external_rule'
          | 'link_click'
          | 'manual_upload'
          | 'profile_completed'
          | 'referred_user'
          | 'smart_contract_event'
          | 'snapshot_governance'
          | 'telegram_join'
          | 'telegram_messages'
          | 'text_input'
          | 'token_hold_erc20'
          | 'tweet_liked_by_project'
          | 'twitter_comment'
          | 'twitter_follow'
          | 'twitter_followers'
          | 'twitter_like'
          | 'twitter_post_hashtag'
          | 'quiz'
          | 'poll';
      }
    }
  }
}

export interface TransactionEntryListParams {
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

export interface TransactionEntryCreateTransactionParams {
  /**
   * Description of the loyalty transaction
   */
  description: string;

  /**
   * Array of transaction entries
   */
  entries: Array<TransactionEntryCreateTransactionParams.Entry>;

  /**
   * Unique identifier for the loyalty currency
   */
  loyaltyCurrencyId?: string;
}

export namespace TransactionEntryCreateTransactionParams {
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

export interface TransactionEntryListRuleGroupsParams {
  excludeHidden?: string;

  limit?: number;

  organizationId?: string;

  startingAfter?: string;

  websiteId?: string;
}

TransactionEntries.Accounts = Accounts;
TransactionEntries.Questions = Questions;
TransactionEntries.QuestionsResponses = QuestionsResponses;

export declare namespace TransactionEntries {
  export {
    type TransactionEntryListResponse as TransactionEntryListResponse,
    type TransactionEntryCreateTransactionResponse as TransactionEntryCreateTransactionResponse,
    type TransactionEntryListRuleGroupsResponse as TransactionEntryListRuleGroupsResponse,
    type TransactionEntryListParams as TransactionEntryListParams,
    type TransactionEntryCreateTransactionParams as TransactionEntryCreateTransactionParams,
    type TransactionEntryListRuleGroupsParams as TransactionEntryListRuleGroupsParams,
  };

  export {
    Accounts as Accounts,
    type AccountListResponse as AccountListResponse,
    type AccountRetrieveRankResponse as AccountRetrieveRankResponse,
    type AccountListParams as AccountListParams,
    type AccountRetrieveRankParams as AccountRetrieveRankParams,
  };

  export {
    Questions as Questions,
    type QuestionCreateResponse as QuestionCreateResponse,
    type QuestionUpdateResponse as QuestionUpdateResponse,
    type QuestionListResponse as QuestionListResponse,
    type QuestionCreateParams as QuestionCreateParams,
    type QuestionUpdateParams as QuestionUpdateParams,
    type QuestionListParams as QuestionListParams,
  };

  export {
    QuestionsResponses as QuestionsResponses,
    type QuestionsResponseListResponse as QuestionsResponseListResponse,
    type QuestionsResponseSubmitResponse as QuestionsResponseSubmitResponse,
    type QuestionsResponseListParams as QuestionsResponseListParams,
    type QuestionsResponseSubmitParams as QuestionsResponseSubmitParams,
  };
}
