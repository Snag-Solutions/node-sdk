// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AccountsAPI from './accounts';
import {
  AccountGetRankParams,
  AccountGetRankResponse,
  AccountListParams,
  AccountListResponse,
  Accounts,
} from './accounts';
import * as BadgesAPI from './badges';
import {
  BadgeCreateParams,
  BadgeCreateResponse,
  BadgeDeleteResponse,
  BadgeListParams,
  BadgeListResponse,
  BadgeRevokeParams,
  BadgeRevokeResponse,
  BadgeRewardParams,
  BadgeRewardResponse,
  BadgeUpdateParams,
  BadgeUpdateResponse,
  Badges,
} from './badges';
import * as CurrenciesAPI from './currencies';
import {
  Currencies,
  CurrencyCreateParams,
  CurrencyCreateResponse,
  CurrencyListParams,
  CurrencyListResponse,
} from './currencies';
import * as MultipliersAPI from './multipliers';
import {
  MultiplierCreateParams,
  MultiplierCreateResponse,
  MultiplierDeleteByExternalIDParams,
  MultiplierDeleteByExternalIDResponse,
  MultiplierDeleteResponse,
  MultiplierListParams,
  MultiplierListResponse,
  MultiplierUpdateParams,
  MultiplierUpdateResponse,
  Multipliers,
} from './multipliers';
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
import * as RuleEditsAPI from './rule-edits';
import {
  RuleEditListParams,
  RuleEditListResponse,
  RuleEditRestoreParams,
  RuleEditRestoreResponse,
  RuleEdits,
} from './rule-edits';
import * as RulesAPI from './rules';
import {
  RuleCompleteParams,
  RuleCompleteResponse,
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteResponse,
  RuleGetStatusParams,
  RuleGetStatusResponse,
  RuleListParams,
  RuleListResponse,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';

export class Loyalty extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  badges: BadgesAPI.Badges = new BadgesAPI.Badges(this._client);
  currencies: CurrenciesAPI.Currencies = new CurrenciesAPI.Currencies(this._client);
  multipliers: MultipliersAPI.Multipliers = new MultipliersAPI.Multipliers(this._client);
  ruleEdits: RuleEditsAPI.RuleEdits = new RuleEditsAPI.RuleEdits(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  questions: QuestionsAPI.Questions = new QuestionsAPI.Questions(this._client);
  questionsResponses: QuestionsResponsesAPI.QuestionsResponses = new QuestionsResponsesAPI.QuestionsResponses(
    this._client,
  );

  /**
   * Create a loyalty transaction to update account balances.
   */
  createTransaction(
    body: LoyaltyCreateTransactionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoyaltyCreateTransactionResponse> {
    return this._client.post('/api/loyalty/transactions', { body, ...options });
  }

  /**
   * Retrieve configured loyalty rule groups
   */
  getRuleGroups(
    query?: LoyaltyGetRuleGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoyaltyGetRuleGroupsResponse>;
  getRuleGroups(options?: Core.RequestOptions): Core.APIPromise<LoyaltyGetRuleGroupsResponse>;
  getRuleGroups(
    query: LoyaltyGetRuleGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoyaltyGetRuleGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.getRuleGroups({}, query);
    }
    return this._client.get('/api/loyalty/rule_groups', { query, ...options });
  }

  /**
   * Fetch loyalty transaction entries for wallets or users, representing account
   * balance changes.
   */
  listTransactionEntries(
    query?: LoyaltyListTransactionEntriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoyaltyListTransactionEntriesResponse>;
  listTransactionEntries(
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoyaltyListTransactionEntriesResponse>;
  listTransactionEntries(
    query: LoyaltyListTransactionEntriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoyaltyListTransactionEntriesResponse> {
    if (isRequestOptions(query)) {
      return this.listTransactionEntries({}, query);
    }
    return this._client.get('/api/loyalty/transaction_entries', { query, ...options });
  }
}

export interface LoyaltyCreateTransactionResponse {
  id: string;

  createdAt: string;

  description: string;

  entries: Array<LoyaltyCreateTransactionResponse.Entry>;

  updatedAt: string;
}

export namespace LoyaltyCreateTransactionResponse {
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

export interface LoyaltyGetRuleGroupsResponse {
  data: Array<LoyaltyGetRuleGroupsResponse.Data>;

  hasNextPage: boolean;
}

export namespace LoyaltyGetRuleGroupsResponse {
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

export interface LoyaltyListTransactionEntriesResponse {
  data: Array<LoyaltyListTransactionEntriesResponse.Data>;

  hasNextPage: boolean;
}

export namespace LoyaltyListTransactionEntriesResponse {
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

export interface LoyaltyCreateTransactionParams {
  /**
   * Description of the loyalty transaction
   */
  description: string;

  /**
   * Array of transaction entries
   */
  entries: Array<LoyaltyCreateTransactionParams.Entry>;

  /**
   * Unique identifier for the loyalty currency
   */
  loyaltyCurrencyId?: string;
}

export namespace LoyaltyCreateTransactionParams {
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

export interface LoyaltyGetRuleGroupsParams {
  excludeHidden?: string;

  limit?: number;

  organizationId?: string;

  startingAfter?: string;

  websiteId?: string;
}

export interface LoyaltyListTransactionEntriesParams {
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

Loyalty.Accounts = Accounts;
Loyalty.Badges = Badges;
Loyalty.Currencies = Currencies;
Loyalty.Multipliers = Multipliers;
Loyalty.RuleEdits = RuleEdits;
Loyalty.Rules = Rules;
Loyalty.Questions = Questions;
Loyalty.QuestionsResponses = QuestionsResponses;

export declare namespace Loyalty {
  export {
    type LoyaltyCreateTransactionResponse as LoyaltyCreateTransactionResponse,
    type LoyaltyGetRuleGroupsResponse as LoyaltyGetRuleGroupsResponse,
    type LoyaltyListTransactionEntriesResponse as LoyaltyListTransactionEntriesResponse,
    type LoyaltyCreateTransactionParams as LoyaltyCreateTransactionParams,
    type LoyaltyGetRuleGroupsParams as LoyaltyGetRuleGroupsParams,
    type LoyaltyListTransactionEntriesParams as LoyaltyListTransactionEntriesParams,
  };

  export {
    Accounts as Accounts,
    type AccountListResponse as AccountListResponse,
    type AccountGetRankResponse as AccountGetRankResponse,
    type AccountListParams as AccountListParams,
    type AccountGetRankParams as AccountGetRankParams,
  };

  export {
    Badges as Badges,
    type BadgeCreateResponse as BadgeCreateResponse,
    type BadgeUpdateResponse as BadgeUpdateResponse,
    type BadgeListResponse as BadgeListResponse,
    type BadgeDeleteResponse as BadgeDeleteResponse,
    type BadgeRevokeResponse as BadgeRevokeResponse,
    type BadgeRewardResponse as BadgeRewardResponse,
    type BadgeCreateParams as BadgeCreateParams,
    type BadgeUpdateParams as BadgeUpdateParams,
    type BadgeListParams as BadgeListParams,
    type BadgeRevokeParams as BadgeRevokeParams,
    type BadgeRewardParams as BadgeRewardParams,
  };

  export {
    Currencies as Currencies,
    type CurrencyCreateResponse as CurrencyCreateResponse,
    type CurrencyListResponse as CurrencyListResponse,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyListParams as CurrencyListParams,
  };

  export {
    Multipliers as Multipliers,
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

  export {
    RuleEdits as RuleEdits,
    type RuleEditListResponse as RuleEditListResponse,
    type RuleEditRestoreResponse as RuleEditRestoreResponse,
    type RuleEditListParams as RuleEditListParams,
    type RuleEditRestoreParams as RuleEditRestoreParams,
  };

  export {
    Rules as Rules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleCompleteResponse as RuleCompleteResponse,
    type RuleGetStatusResponse as RuleGetStatusResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleCompleteParams as RuleCompleteParams,
    type RuleGetStatusParams as RuleGetStatusParams,
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
