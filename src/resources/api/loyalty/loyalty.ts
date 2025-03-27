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
  getTransactionEntries(
    query?: LoyaltyGetTransactionEntriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoyaltyGetTransactionEntriesResponse>;
  getTransactionEntries(options?: Core.RequestOptions): Core.APIPromise<LoyaltyGetTransactionEntriesResponse>;
  getTransactionEntries(
    query: LoyaltyGetTransactionEntriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoyaltyGetTransactionEntriesResponse> {
    if (isRequestOptions(query)) {
      return this.getTransactionEntries({}, query);
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
  /**
   * Schema for a get loyalty rule groups response
   */
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

        deletedAt: string | null;

        description: string | null;

        endTime: string | null;

        frequency: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately' | null;

        hideInUi: boolean;

        isRequired: boolean;

        loyaltyCurrencyId: string;

        mediaUrl: string | null;

        metadata: LoyaltyRule.Metadata;

        name: string;

        rewardType: 'points' | 'multiplier';

        startTime: string | null;

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

      export namespace LoyaltyRule {
        export interface Metadata {
          /**
           * Text displayed on the action button.
           */
          buttonText?: string | null;

          /**
           * Flag indicating if commenting is required.
           */
          checkComment?: boolean | null;

          /**
           * Flag indicating if liking the post is required.
           */
          checkLike?: boolean | null;

          /**
           * Flag indicating if reposting is required.
           */
          checkRepost?: boolean | null;

          /**
           * Text to check in the Twitter post, username, or bio.
           */
          checkText?: string | null;

          /**
           * Array of collections associated with the rule.
           */
          collection?: Array<Metadata.Collection>;

          /**
           * Conditions for completing the profile.
           */
          completeProfileConditions?: Record<string, boolean> | null;

          /**
           * Object containing details for the call-to-action.
           */
          cta?: Metadata.Cta | null;

          /**
           * API key for custom rewards integration.
           */
          customRewardsApiKey?: string;

          /**
           * Array of Discord servers, channels, and roles to join.
           */
          discordServersToJoin?: Array<Metadata.DiscordServersToJoin> | null;

          /**
           * Array of drip quests required to complete the rule.
           */
          dripQuestsToComplete?: Array<Metadata.DripQuestsToComplete> | null;

          /**
           * Flag indicating whether joining Discord servers is required.
           */
          enableJoinDiscordServers?: boolean | null;

          /**
           * Flag indicating whether streaks are enabled.
           */
          enableStreaks?: boolean | null;

          /**
           * Flag indicating whether the verified multiplier is enabled.
           */
          enableVerifiedMultiplier?: boolean;

          /**
           * Fill source of the order for the token sale
           */
          fillSource?: string;

          /**
           * Percentage reward given to a user for their first referral.
           */
          firstReferralReward?: number | null;

          /**
           * Flag indicating whether the fill source is included.
           */
          hasFillSource?: boolean;

          /**
           * Indicates if the item has never been sold.
           */
          hasNeverSold?: boolean;

          /**
           * Flag indicating whether the order source is included.
           */
          hasOrderSource?: boolean;

          /**
           * Indicates if the full royalty has been paid for items.
           */
          hasPaidFullRoyalty?: boolean;

          /**
           * Flag indicating if the sale currency is included.
           */
          hasSaleCurrency?: boolean;

          /**
           * Indicates if the user has a verified Twitter account.
           */
          hasVerifiedTwitter?: boolean;

          /**
           * URL of the image associated with the rule.
           */
          imageUrl?: string | null;

          /**
           * Indicates if the multiplier has been applied to rewards.
           */
          isMultiplierApplied?: boolean;

          /**
           * Flag indicating if rewards are applied retroactively.
           */
          isRetroactive?: boolean | null;

          /**
           * Flag indicating if the token hold multiplier is applied.
           */
          isTokenHoldMultiplier?: boolean;

          /**
           * Optional link associated with the metadata.
           */
          link?: string | null;

          /**
           * Maximum quantity constraint for token holding.
           */
          maxQty?: number | null;

          /**
           * Minimum quantity constraint for token holding.
           */
          minQty?: number | null;

          /**
           * Array of loyalty currency IDs used for multipliers.
           */
          multiplierLoyaltyCurrencyIds?: Array<string> | null;

          /**
           * Flag indicating whether to include only known users.
           */
          onlyKnownUsers?: boolean;

          /**
           * Flag indicating whether to include only native tokens.
           */
          onlyNative?: boolean;

          /**
           * Flag indicating whether to include only non-listed items.
           */
          onlyNonListed?: boolean;

          /**
           * Indicates if only existing users are rewarded.
           */
          onlyRewardExistingUser?: boolean;

          /**
           * give points for only one token ownership per contract
           */
          onlyRewardSingleTokenOwnership?: boolean | null;

          /**
           * Order source of the order for the token sale
           */
          orderSource?: string;

          /**
           * Promotional code associated with the rule.
           */
          promoCode?: string;

          /**
           * Array defining ranges and corresponding rewards.
           */
          range?: Array<Metadata.Range>;

          /**
           * Object defining referral requirements.
           */
          referralRequirements?: Metadata.ReferralRequirements | null;

          /**
           * Lump sum reward given to a referrer.
           */
          referrerReward?: number | null;

          /**
           * Flag indicating if rewards are given per impression.
           */
          rewardPerImpression?: boolean | null;

          /**
           * Currency associated with sales.
           */
          saleCurrency?: string;

          /**
           * Percentage reward given for a second-level referral.
           */
          secondReferralReward?: number | null;

          /**
           * Flag indicating if the multiplier is skipped.
           */
          skipMultiplier?: boolean | null;

          /**
           * Object containing details of the associated smart contract.
           */
          smartContract?: Metadata.SmartContract;

          /**
           * Array of snapshot proposals for the rule.
           */
          snapshotProposals?: Array<Metadata.SnapshotProposal> | null;

          /**
           * Social media platform associated with the rule.
           */
          socialPlatform?:
            | 'Custom'
            | 'Discord'
            | 'EpicGames'
            | 'Instagram'
            | 'Steam'
            | 'Telegram'
            | 'TikTok'
            | 'Twitch'
            | 'X(Twitter)'
            | 'YouTube'
            | null;

          /**
           * URL of the social platform's logo.
           */
          socialPlatformLogo?: string | null;

          /**
           * Name of the social platform.
           */
          socialPlatformName?: string | null;

          /**
           * Array of streak milestones and corresponding rewards.
           */
          streakArray?: Array<Metadata.StreakArray> | null;

          /**
           * ID of the Telegram channel.
           */
          telegramChannelId?: string | null;

          /**
           * Time delay in seconds to verify actions.
           */
          timeDelayToVerifySeconds?: string | number | null;

          /**
           * Flag indicating if all contracts are tracked.
           */
          trackAllContracts?: boolean | null;

          /**
           * URL of the associated Twitter account.
           */
          twitterAccountUrl?: string;

          /**
           * Hashtag associated with the Twitter post.
           */
          twitterHashtag?: string;

          /**
           * URL of the associated Twitter post.
           */
          twitterPostUrl?: string;

          /**
           * Unique identifier of the Twitter user.
           */
          twitterUserId?: string;

          /**
           * Twitter username of the user.
           */
          twitterUsername?: string;

          /**
           * Minimum length of the verification text.
           */
          verificationTextMinimumLength?: number | null;

          /**
           * Multiplier applied to rewards for verified users.
           */
          verifiedMultiplier?: number | null;

          /**
           * Placeholder text for verification input fields.
           */
          verifyPlaceHolderText?: string | null;

          /**
           * Type of wallet associated with the rule.
           */
          walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton' | null;
        }

        export namespace Metadata {
          export interface Collection {
            /**
             * Blockchain address of the collection.
             */
            address?: string;

            /**
             * Multiplier applied to the rewards for this collection.
             */
            multiplier?: number;

            /**
             * Blockchain network of the collection.
             */
            network?:
              | 'apechain'
              | 'arbitrum'
              | 'avalanche'
              | 'avalancheFuji'
              | 'base'
              | 'baseSepolia'
              | 'berachainArtio'
              | 'binance'
              | 'bscTestnet'
              | 'campTestnet'
              | 'fantom'
              | 'fantomTestnet'
              | 'flowMainnet'
              | 'mainnet'
              | 'optimism'
              | 'polygon'
              | 'polygon_mumbai'
              | 'skaleNebula'
              | 'solana'
              | 'sophon'
              | 'sui'
              | 'superseed'
              | 'superseedSepolia'
              | 'vanar'
              | 'xai'
              | 'zksync'
              | 'sepolia'
              | 'optimism_sepolia'
              | 'arbitrumSepolia'
              | 'goerli'
              | 'optimism_goerli'
              | 'arbitrumGoerli'
              | 'basecamp'
              | 'abstract';
          }

          /**
           * Object containing details for the call-to-action.
           */
          export interface Cta {
            /**
             * Link for the call-to-action.
             */
            href?: string | null;

            /**
             * Label for the call-to-action.
             */
            label?: string | null;
          }

          export interface DiscordServersToJoin {
            /**
             * ID of the Discord server to join.
             */
            id?: string;

            /**
             * Array of Discord channels to join.
             */
            channels?: Array<DiscordServersToJoin.Channel>;

            /**
             * Array of roles to assign in the Discord server.
             */
            roles?: Array<DiscordServersToJoin.Role>;
          }

          export namespace DiscordServersToJoin {
            export interface Channel {
              /**
               * ID of the Discord channel.
               */
              id?: string;

              /**
               * Array of emojis used in the channel.
               */
              emojis?: Array<Channel.Emoji>;

              /**
               * Phrase of text to be present in the discord message
               */
              text?: string;
            }

            export namespace Channel {
              export interface Emoji {
                /**
                 * ID of the emoji used in the channel.
                 */
                id?: string;
              }
            }

            export interface Role {
              /**
               * ID of the role in the Discord server.
               */
              id: string;
            }
          }

          export interface DripQuestsToComplete {
            /**
             * ID of the drip quest to complete.
             */
            id: string;
          }

          export interface Range {
            /**
             * Reward amount for this range.
             */
            amount: number;

            /**
             * End value of the range.
             */
            endRange: number;

            /**
             * Start value of the range.
             */
            startRange: number;
          }

          /**
           * Object defining referral requirements.
           */
          export interface ReferralRequirements {
            /**
             * Flag indicating if achieving points is required.
             */
            achievePoints?: boolean | null;

            /**
             * Flag indicating if completing the profile is required.
             */
            completeProfile?: boolean | null;

            /**
             * Flag indicating if connecting Discord is required.
             */
            connectDiscord?: boolean | null;

            /**
             * Flag indicating if connecting email is required.
             */
            connectEmail?: boolean | null;

            /**
             * Flag indicating if connecting Twitter is required.
             */
            connectTwitter?: boolean | null;

            points?: ReferralRequirements.Points | null;
          }

          export namespace ReferralRequirements {
            export interface Points {
              /**
               * Points required for referral.
               */
              amount?: number | null;

              /**
               * ID of the loyalty currency for referral.
               */
              loyaltyCurrecyId?: string | null;
            }
          }

          /**
           * Object containing details of the associated smart contract.
           */
          export interface SmartContract {
            /**
             * ABI of the smart contract.
             */
            abi?: string | null;

            /**
             * Mapping of addresses for the smart contract.
             */
            addressMapping?: string | null;

            /**
             * Array of bonus details applied to the rule.
             */
            bonus?: Array<SmartContract.Bonus> | null;

            /**
             * ID of the smart contract.
             */
            contractId?: string | null;

            /**
             * Criteria to evaluate the smart contract event.
             */
            criteria?: 'everyEvent' | 'byParameter' | null;

            /**
             * Time range applied to the rule.
             */
            customRange?: SmartContract.CustomRange | null;

            /**
             * Event emitted by the smart contract.
             */
            event?: string | null;

            /**
             * Maximum value allowed for the parameter.
             */
            max?: number | null;

            /**
             * Array of parameters for the smart contract.
             */
            params?: Array<SmartContract.Param> | null;

            /**
             * Flag indicating if a bonus is applied.
             */
            withBonus?: boolean | null;

            /**
             * Flag indicating if a custom range is applied.
             */
            withCustomRange?: boolean | null;

            /**
             * Flag indicating if a maximum limit is applied.
             */
            withMax?: boolean | null;
          }

          export namespace SmartContract {
            export interface Bonus {
              /**
               * Amount of the bonus.
               */
              amount?: number | null;

              /**
               * Number of times the bonus is applied.
               */
              count?: number | null;
            }

            /**
             * Time range applied to the rule.
             */
            export interface CustomRange {
              /**
               * End time of the custom range.
               */
              endsAt?: string | null;

              /**
               * Start time of the custom range.
               */
              startsAt?: string | null;
            }

            export interface Param {
              /**
               * Condition to check for the parameter.
               */
              condition?: string | null;

              /**
               * Name of the smart contract parameter.
               */
              name?: string | null;

              /**
               * Value of the parameter.
               */
              value?: string | null;
            }
          }

          export interface SnapshotProposal {
            /**
             * ID of the snapshot proposal.
             */
            id: string;

            /**
             * Space associated with the snapshot proposal.
             */
            space: string;
          }

          export interface StreakArray {
            /**
             * Reward amount for achieving the streak milestone.
             */
            streakAmount: number;

            /**
             * Milestone required to achieve the streak.
             */
            streakMilestone: number;
          }
        }
      }
    }
  }
}

export interface LoyaltyGetTransactionEntriesResponse {
  data: Array<LoyaltyGetTransactionEntriesResponse.Data>;

  hasNextPage: boolean;
}

export namespace LoyaltyGetTransactionEntriesResponse {
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

export interface LoyaltyGetTransactionEntriesParams {
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
    type LoyaltyGetTransactionEntriesResponse as LoyaltyGetTransactionEntriesResponse,
    type LoyaltyCreateTransactionParams as LoyaltyCreateTransactionParams,
    type LoyaltyGetRuleGroupsParams as LoyaltyGetRuleGroupsParams,
    type LoyaltyGetTransactionEntriesParams as LoyaltyGetTransactionEntriesParams,
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
