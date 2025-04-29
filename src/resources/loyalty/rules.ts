// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Rules extends APIResource {
  /**
   * Create a new Loyalty Rule
   */
  create(body: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<RuleCreateResponse> {
    return this._client.post('/api/loyalty/rules', { body, ...options });
  }

  /**
   * Update an existing Loyalty Rule
   */
  update(
    id: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return this._client.post(`/api/loyalty/rules/${id}`, { body, ...options });
  }

  /**
   * Retrieve configured loyalty rules with optional pagination and filters
   */
  list(query?: RuleListParams, options?: Core.RequestOptions): Core.APIPromise<RuleListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RuleListResponse>;
  list(
    query: RuleListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/loyalty/rules', { query, ...options });
  }

  /**
   * Delete an existing Loyalty Rule
   */
  delete(
    id: string,
    params?: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<RuleDeleteResponse>;
  delete(
    id: string,
    params: RuleDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { debitLoyaltyPoints } = params;
    return this._client.delete(`/api/loyalty/rules/${id}`, { query: { debitLoyaltyPoints }, ...options });
  }

  /**
   * Verify a loyalty rule based on user action and reward them if applicable. This
   * endpoint currently only supports following rule types code_entry, text_input,
   * link_click, discord_member, connect_wallet, check_in, external_rule,
   * drip_x_follow, drip_x_new_tweet, drip_x_text_in_bio, drip_x_text_in_name,
   * drip_x_text_in_comment, drip_x_tweet, telegram_join, DiscordMessages
   */
  complete(
    id: string,
    body?: RuleCompleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCompleteResponse>;
  complete(id: string, options?: Core.RequestOptions): Core.APIPromise<RuleCompleteResponse>;
  complete(
    id: string,
    body: RuleCompleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCompleteResponse> {
    if (isRequestOptions(body)) {
      return this.complete(id, {}, body);
    }
    return this._client.post(`/api/loyalty/rules/${id}/complete`, { body, ...options });
  }

  /**
   * This will return the processing status of quests for a specific user
   */
  getStatus(
    query?: RuleGetStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGetStatusResponse>;
  getStatus(options?: Core.RequestOptions): Core.APIPromise<RuleGetStatusResponse>;
  getStatus(
    query: RuleGetStatusParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGetStatusResponse> {
    if (isRequestOptions(query)) {
      return this.getStatus({}, query);
    }
    return this._client.get('/api/loyalty/rules/status', { query, ...options });
  }
}

export interface RuleCreateResponse {
  id: string;

  /**
   * Reward amount associated with the rule
   */
  amount: unknown;

  /**
   * The effective end time of the rule
   */
  effectiveEndTime: string | null;

  /**
   * The effective start time of the rule
   */
  effectiveStartTime: string | null;

  /**
   * When the rule becomes inactive
   */
  endTime: string | null;

  /**
   * Execution frequency of the loyalty rule
   */
  frequency: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  /**
   * Unique identifier for the loyalty currency
   */
  loyaltyCurrencyId: string;

  /**
   * Additional metadata for the loyalty rule
   */
  metadata: RuleCreateResponse.Metadata;

  /**
   * Name of the loyalty rule
   */
  name: string;

  /**
   * Unique identifier for the organization creating the rule
   */
  organizationId: string;

  /**
   * When the rule becomes active
   */
  startTime: string | null;

  /**
   * Type of loyalty rule being created
   */
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
    | 'poll'
    | 'steam_wishlist'
    | 'liquidity_uniswap_v2'
    | 'liquidity_uniswap_v3'
    | 'youtube_subscribers'
    | 'youtube_comment';

  /**
   * Unique identifier for the associated website
   */
  websiteId: string;

  /**
   * URL of the background asset to be displayed
   */
  backgroundAssetUrl?: string;

  /**
   * Blockchain address of the associated collection
   */
  collectionAddress?: string;

  /**
   * List of associated collections
   */
  collections?: Array<RuleCreateResponse.Collection> | null;

  /**
   * URL for fetching custom rewards
   */
  customRewardsApiUrl?: string | null;

  /**
   * URL for uploading custom rewards via CSV
   */
  customRewardsCsvUrl?: string | null;

  /**
   * Optional detailed description of the rule
   */
  description?: string;

  /**
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Interval between rule executions
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | 'custom' | 'every_message' | null;

  /**
   * Whether this rule is mandatory
   */
  isRequired?: boolean;

  /**
   * Unique identifier for the loyalty badge
   */
  loyaltyBadgeId?: string | null;

  /**
   * Unique identifier for the loyalty rule group
   */
  loyaltyRuleGroupId?: 'no-section' | (string & {}) | null;

  /**
   * URL of the media to be displayed
   */
  mediaUrl?: string | null;

  /**
   * Blockchain network where the rule will apply
   */
  network?:
    | 'abstract'
    | 'abstractTestnet'
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
    | 'basecamp';

  /**
   * OAuth credentials associated with the rule
   */
  oauthCredentialsId?: string | null;

  /**
   * Type of reward issued by the rule
   */
  rewardType?: 'points' | 'multiplier' | 'badge';

  /**
   * Identifier for associated subscriptions
   */
  subscriptionIdentifier?: string | null;
}

export namespace RuleCreateResponse {
  /**
   * Additional metadata for the loyalty rule
   */
  export interface Metadata {
    /**
     * Number of tokens per batch.
     */
    batchSize?: number | null;

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
     * If enabled, the first transaction done on the platform will complete this rule
     */
    isCheckInOnEveryTxn?: boolean;

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
     * Liquidity pool details.
     */
    liquidity?: Metadata.Liquidity;

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
     * Flag indicating if the reward is rewarded by batch.
     */
    rewardByBatch?: boolean | null;

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
      | 'Google'
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
     * ID of the Steam app.
     */
    steamAppId?: string | null;

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
     * Flag indicating if the progress is tracked. If enabled, the rule can only be
     * completed once the progress is 100%.
     */
    trackProgress?: boolean | null;

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

    /**
     * ID of the Youtube channel.
     */
    youtubeChannelId?: string | null;

    /**
     * ID of the Youtube video.
     */
    youtubeVideoId?: string | null;
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
        | 'abstract'
        | 'abstractTestnet'
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
        | 'basecamp';
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

    /**
     * Liquidity pool details.
     */
    export interface Liquidity {
      /**
       * Calculation type of the liquidity pool.
       */
      calculationType?: 'fixed' | 'custom';

      /**
       * Blockchain network of the liquidity pool.
       */
      chain?:
        | 'abstract'
        | 'abstractTestnet'
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
        | 'basecamp';

      /**
       * Custom function to calculate the liquidity provided per hour
       */
      customFunction?: string;

      /**
       * Liquidity provided per hour
       */
      liquidityPerHour?: number;

      /**
       * Indicates if only in-range liquidity is rewarded.
       */
      onlyRewardInRangeLiquidity?: boolean;

      /**
       * Array of liquidity pools associated with the rule.
       */
      pools?: Array<Liquidity.Pool>;

      /**
       * Protocol of the liquidity pool.
       */
      protocol?: string;
    }

    export namespace Liquidity {
      export interface Pool {
        /**
         * Unique identifier of the liquidity pool.
         */
        id?: string;
      }
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

  export interface Collection {
    /**
     * Blockchain address of the collection
     */
    address: string;

    /**
     * Blockchain network for the collection
     */
    network:
      | 'abstract'
      | 'abstractTestnet'
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
      | 'basecamp';
  }
}

export interface RuleUpdateResponse {
  id: string;

  /**
   * Reward amount for the loyalty rule
   */
  amount: unknown;

  /**
   * End time for the loyalty rule
   */
  endTime: string | null;

  /**
   * Name of the loyalty rule
   */
  name: string;

  /**
   * Blockchain address of the associated collection
   */
  collectionAddress?: string;

  /**
   * List of associated collections
   */
  collections?: Array<RuleUpdateResponse.Collection> | null;

  /**
   * API URL for custom rewards integration
   */
  customRewardsApiUrl?: string | null;

  /**
   * URL for uploading custom rewards via CSV
   */
  customRewardsCsvUrl?: string | null;

  /**
   * Optional description of the loyalty rule
   */
  description?: string;

  /**
   * Effective end time of the rule
   */
  effectiveEndTime?: string | null;

  /**
   * Effective start time of the rule
   */
  effectiveStartTime?: string | null;

  /**
   * Frequency of the rule execution
   */
  frequency?: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  /**
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Time interval for recurring rule execution
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | 'custom' | 'every_message' | null;

  /**
   * Whether this rule is required for participation
   */
  isRequired?: boolean;

  /**
   * ID of the rule group section to associate with the rule
   */
  loyaltyRuleGroupId?: (string & {}) | 'no-section' | null;

  /**
   * URL of the media to be displayed
   */
  mediaUrl?: string | null;

  /**
   * Additional metadata for the loyalty rule
   */
  metadata?: RuleUpdateResponse.Metadata;

  /**
   * Blockchain network where the rule will apply
   */
  network?:
    | 'abstract'
    | 'abstractTestnet'
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
    | 'basecamp';

  /**
   * ID for associated OAuth credentials
   */
  oauthCredentialsId?: string | null;

  /**
   * Type of reward issued by this rule
   */
  rewardType?: 'points' | 'multiplier' | 'badge';

  /**
   * Start time for the loyalty rule
   */
  startTime?: string | null;

  /**
   * Optional subscription identifier for the rule
   */
  subscriptionIdentifier?: string | null;
}

export namespace RuleUpdateResponse {
  export interface Collection {
    /**
     * Blockchain address of the collection
     */
    address: string;

    /**
     * Blockchain network for the collection
     */
    network:
      | 'abstract'
      | 'abstractTestnet'
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
      | 'basecamp';
  }

  /**
   * Additional metadata for the loyalty rule
   */
  export interface Metadata {
    /**
     * Number of tokens per batch.
     */
    batchSize?: number | null;

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
     * If enabled, the first transaction done on the platform will complete this rule
     */
    isCheckInOnEveryTxn?: boolean;

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
     * Liquidity pool details.
     */
    liquidity?: Metadata.Liquidity;

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
     * Flag indicating if the reward is rewarded by batch.
     */
    rewardByBatch?: boolean | null;

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
      | 'Google'
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
     * ID of the Steam app.
     */
    steamAppId?: string | null;

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
     * Flag indicating if the progress is tracked. If enabled, the rule can only be
     * completed once the progress is 100%.
     */
    trackProgress?: boolean | null;

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

    /**
     * ID of the Youtube channel.
     */
    youtubeChannelId?: string | null;

    /**
     * ID of the Youtube video.
     */
    youtubeVideoId?: string | null;
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
        | 'abstract'
        | 'abstractTestnet'
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
        | 'basecamp';
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

    /**
     * Liquidity pool details.
     */
    export interface Liquidity {
      /**
       * Calculation type of the liquidity pool.
       */
      calculationType?: 'fixed' | 'custom';

      /**
       * Blockchain network of the liquidity pool.
       */
      chain?:
        | 'abstract'
        | 'abstractTestnet'
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
        | 'basecamp';

      /**
       * Custom function to calculate the liquidity provided per hour
       */
      customFunction?: string;

      /**
       * Liquidity provided per hour
       */
      liquidityPerHour?: number;

      /**
       * Indicates if only in-range liquidity is rewarded.
       */
      onlyRewardInRangeLiquidity?: boolean;

      /**
       * Array of liquidity pools associated with the rule.
       */
      pools?: Array<Liquidity.Pool>;

      /**
       * Protocol of the liquidity pool.
       */
      protocol?: string;
    }

    export namespace Liquidity {
      export interface Pool {
        /**
         * Unique identifier of the liquidity pool.
         */
        id?: string;
      }
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

export interface RuleListResponse {
  data: Array<RuleListResponse.Data>;

  hasNextPage: boolean;
}

export namespace RuleListResponse {
  /**
   * Schema for a loyalty rule
   */
  export interface Data {
    /**
     * Unique identifier for the loyalty rule
     */
    id: string;

    /**
     * Amount associated with the loyalty rule
     */
    amount: number;

    /**
     * Timestamp when the loyalty rule was created
     */
    createdAt: string;

    /**
     * Timestamp when the loyalty rule was deleted (if applicable)
     */
    deletedAt: string | null;

    /**
     * Description of the loyalty rule
     */
    description: string;

    /**
     * End time of the loyalty rule
     */
    endTime: string;

    /**
     * Frequency of the loyalty rule
     */
    frequency: string;

    /**
     * Name of the loyalty rule
     */
    name: string;

    /**
     * Unique identifier for the organization
     */
    organizationId: string;

    /**
     * Type of the reward
     */
    rewardType: 'points' | 'multiplier' | 'badge';

    /**
     * Start time of the loyalty rule
     */
    startTime: string;

    /**
     * Type of the loyalty rule
     */
    type: string;

    /**
     * Timestamp when the loyalty rule was last updated
     */
    updatedAt: string;

    /**
     * Unique identifier for the website
     */
    websiteId: string;

    /**
     * Optional address of the collection
     */
    collectionAddress?: string;

    /**
     * URL of the media associated with the loyalty rule
     */
    mediaUrl?: string | null;

    /**
     * Optional metadata for the loyalty rule
     */
    metadata?: Record<string, Data.Metadata>;
  }

  export namespace Data {
    export interface Metadata {
      /**
       * Number of tokens per batch.
       */
      batchSize?: number | null;

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
       * If enabled, the first transaction done on the platform will complete this rule
       */
      isCheckInOnEveryTxn?: boolean;

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
       * Liquidity pool details.
       */
      liquidity?: Metadata.Liquidity;

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
       * Flag indicating if the reward is rewarded by batch.
       */
      rewardByBatch?: boolean | null;

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
        | 'Google'
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
       * ID of the Steam app.
       */
      steamAppId?: string | null;

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
       * Flag indicating if the progress is tracked. If enabled, the rule can only be
       * completed once the progress is 100%.
       */
      trackProgress?: boolean | null;

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

      /**
       * ID of the Youtube channel.
       */
      youtubeChannelId?: string | null;

      /**
       * ID of the Youtube video.
       */
      youtubeVideoId?: string | null;
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
          | 'abstract'
          | 'abstractTestnet'
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
          | 'basecamp';
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

      /**
       * Liquidity pool details.
       */
      export interface Liquidity {
        /**
         * Calculation type of the liquidity pool.
         */
        calculationType?: 'fixed' | 'custom';

        /**
         * Blockchain network of the liquidity pool.
         */
        chain?:
          | 'abstract'
          | 'abstractTestnet'
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
          | 'basecamp';

        /**
         * Custom function to calculate the liquidity provided per hour
         */
        customFunction?: string;

        /**
         * Liquidity provided per hour
         */
        liquidityPerHour?: number;

        /**
         * Indicates if only in-range liquidity is rewarded.
         */
        onlyRewardInRangeLiquidity?: boolean;

        /**
         * Array of liquidity pools associated with the rule.
         */
        pools?: Array<Liquidity.Pool>;

        /**
         * Protocol of the liquidity pool.
         */
        protocol?: string;
      }

      export namespace Liquidity {
        export interface Pool {
          /**
           * Unique identifier of the liquidity pool.
           */
          id?: string;
        }
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

export interface RuleDeleteResponse {
  id: string;

  deletedAt: string;
}

export interface RuleCompleteResponse {
  message: string;
}

export interface RuleGetStatusResponse {
  data: Array<RuleGetStatusResponse.Data>;
}

export namespace RuleGetStatusResponse {
  export interface Data {
    loyaltyRuleId: string;

    status: 'pending' | 'processing' | 'completed' | 'failed';

    userId: string;

    message?: string;
  }
}

export interface RuleCreateParams {
  /**
   * Reward amount associated with the rule
   */
  amount: unknown;

  /**
   * The effective end time of the rule
   */
  effectiveEndTime: string | null;

  /**
   * The effective start time of the rule
   */
  effectiveStartTime: string | null;

  /**
   * When the rule becomes inactive
   */
  endTime: string | null;

  /**
   * Execution frequency of the loyalty rule
   */
  frequency: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  /**
   * Unique identifier for the loyalty currency
   */
  loyaltyCurrencyId: string;

  /**
   * Additional metadata for the loyalty rule
   */
  metadata: RuleCreateParams.Metadata;

  /**
   * Name of the loyalty rule
   */
  name: string;

  /**
   * Unique identifier for the organization creating the rule
   */
  organizationId: string;

  /**
   * When the rule becomes active
   */
  startTime: string | null;

  /**
   * Type of loyalty rule being created
   */
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
    | 'poll'
    | 'steam_wishlist'
    | 'liquidity_uniswap_v2'
    | 'liquidity_uniswap_v3'
    | 'youtube_subscribers'
    | 'youtube_comment';

  /**
   * Unique identifier for the associated website
   */
  websiteId: string;

  /**
   * URL of the background asset to be displayed
   */
  backgroundAssetUrl?: string;

  /**
   * Blockchain address of the associated collection
   */
  collectionAddress?: string;

  /**
   * List of associated collections
   */
  collections?: Array<RuleCreateParams.Collection> | null;

  /**
   * URL for fetching custom rewards
   */
  customRewardsApiUrl?: string | null;

  /**
   * URL for uploading custom rewards via CSV
   */
  customRewardsCsvUrl?: string | null;

  /**
   * Optional detailed description of the rule
   */
  description?: string;

  /**
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Interval between rule executions
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | 'custom' | 'every_message' | null;

  /**
   * Whether this rule is mandatory
   */
  isRequired?: boolean;

  /**
   * Unique identifier for the loyalty badge
   */
  loyaltyBadgeId?: string | null;

  /**
   * Unique identifier for the loyalty rule group
   */
  loyaltyRuleGroupId?: 'no-section' | (string & {}) | null;

  /**
   * URL of the media to be displayed
   */
  mediaUrl?: string | null;

  /**
   * Blockchain network where the rule will apply
   */
  network?:
    | 'abstract'
    | 'abstractTestnet'
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
    | 'basecamp';

  /**
   * OAuth credentials associated with the rule
   */
  oauthCredentialsId?: string | null;

  /**
   * Type of reward issued by the rule
   */
  rewardType?: 'points' | 'multiplier' | 'badge';

  /**
   * Identifier for associated subscriptions
   */
  subscriptionIdentifier?: string | null;
}

export namespace RuleCreateParams {
  /**
   * Additional metadata for the loyalty rule
   */
  export interface Metadata {
    /**
     * Number of tokens per batch.
     */
    batchSize?: number | null;

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
     * If enabled, the first transaction done on the platform will complete this rule
     */
    isCheckInOnEveryTxn?: boolean;

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
     * Liquidity pool details.
     */
    liquidity?: Metadata.Liquidity;

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
     * Flag indicating if the reward is rewarded by batch.
     */
    rewardByBatch?: boolean | null;

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
      | 'Google'
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
     * ID of the Steam app.
     */
    steamAppId?: string | null;

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
     * Flag indicating if the progress is tracked. If enabled, the rule can only be
     * completed once the progress is 100%.
     */
    trackProgress?: boolean | null;

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

    /**
     * ID of the Youtube channel.
     */
    youtubeChannelId?: string | null;

    /**
     * ID of the Youtube video.
     */
    youtubeVideoId?: string | null;
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
        | 'abstract'
        | 'abstractTestnet'
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
        | 'basecamp';
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

    /**
     * Liquidity pool details.
     */
    export interface Liquidity {
      /**
       * Calculation type of the liquidity pool.
       */
      calculationType?: 'fixed' | 'custom';

      /**
       * Blockchain network of the liquidity pool.
       */
      chain?:
        | 'abstract'
        | 'abstractTestnet'
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
        | 'basecamp';

      /**
       * Custom function to calculate the liquidity provided per hour
       */
      customFunction?: string;

      /**
       * Liquidity provided per hour
       */
      liquidityPerHour?: number;

      /**
       * Indicates if only in-range liquidity is rewarded.
       */
      onlyRewardInRangeLiquidity?: boolean;

      /**
       * Array of liquidity pools associated with the rule.
       */
      pools?: Array<Liquidity.Pool>;

      /**
       * Protocol of the liquidity pool.
       */
      protocol?: string;
    }

    export namespace Liquidity {
      export interface Pool {
        /**
         * Unique identifier of the liquidity pool.
         */
        id?: string;
      }
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

  export interface Collection {
    /**
     * Blockchain address of the collection
     */
    address: string;

    /**
     * Blockchain network for the collection
     */
    network:
      | 'abstract'
      | 'abstractTestnet'
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
      | 'basecamp';
  }
}

export interface RuleUpdateParams {
  /**
   * Reward amount for the loyalty rule
   */
  amount: unknown;

  /**
   * End time for the loyalty rule
   */
  endTime: string | null;

  /**
   * Name of the loyalty rule
   */
  name: string;

  /**
   * Blockchain address of the associated collection
   */
  collectionAddress?: string;

  /**
   * List of associated collections
   */
  collections?: Array<RuleUpdateParams.Collection> | null;

  /**
   * API URL for custom rewards integration
   */
  customRewardsApiUrl?: string | null;

  /**
   * URL for uploading custom rewards via CSV
   */
  customRewardsCsvUrl?: string | null;

  /**
   * Optional description of the loyalty rule
   */
  description?: string;

  /**
   * Effective end time of the rule
   */
  effectiveEndTime?: string | null;

  /**
   * Effective start time of the rule
   */
  effectiveStartTime?: string | null;

  /**
   * Frequency of the rule execution
   */
  frequency?: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  /**
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Time interval for recurring rule execution
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | 'custom' | 'every_message' | null;

  /**
   * Whether this rule is required for participation
   */
  isRequired?: boolean;

  /**
   * ID of the rule group section to associate with the rule
   */
  loyaltyRuleGroupId?: (string & {}) | 'no-section' | null;

  /**
   * URL of the media to be displayed
   */
  mediaUrl?: string | null;

  /**
   * Additional metadata for the loyalty rule
   */
  metadata?: RuleUpdateParams.Metadata;

  /**
   * Blockchain network where the rule will apply
   */
  network?:
    | 'abstract'
    | 'abstractTestnet'
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
    | 'basecamp';

  /**
   * ID for associated OAuth credentials
   */
  oauthCredentialsId?: string | null;

  /**
   * Type of reward issued by this rule
   */
  rewardType?: 'points' | 'multiplier' | 'badge';

  /**
   * Start time for the loyalty rule
   */
  startTime?: string | null;

  /**
   * Optional subscription identifier for the rule
   */
  subscriptionIdentifier?: string | null;
}

export namespace RuleUpdateParams {
  export interface Collection {
    /**
     * Blockchain address of the collection
     */
    address: string;

    /**
     * Blockchain network for the collection
     */
    network:
      | 'abstract'
      | 'abstractTestnet'
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
      | 'basecamp';
  }

  /**
   * Additional metadata for the loyalty rule
   */
  export interface Metadata {
    /**
     * Number of tokens per batch.
     */
    batchSize?: number | null;

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
     * If enabled, the first transaction done on the platform will complete this rule
     */
    isCheckInOnEveryTxn?: boolean;

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
     * Liquidity pool details.
     */
    liquidity?: Metadata.Liquidity;

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
     * Flag indicating if the reward is rewarded by batch.
     */
    rewardByBatch?: boolean | null;

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
      | 'Google'
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
     * ID of the Steam app.
     */
    steamAppId?: string | null;

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
     * Flag indicating if the progress is tracked. If enabled, the rule can only be
     * completed once the progress is 100%.
     */
    trackProgress?: boolean | null;

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

    /**
     * ID of the Youtube channel.
     */
    youtubeChannelId?: string | null;

    /**
     * ID of the Youtube video.
     */
    youtubeVideoId?: string | null;
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
        | 'abstract'
        | 'abstractTestnet'
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
        | 'basecamp';
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

    /**
     * Liquidity pool details.
     */
    export interface Liquidity {
      /**
       * Calculation type of the liquidity pool.
       */
      calculationType?: 'fixed' | 'custom';

      /**
       * Blockchain network of the liquidity pool.
       */
      chain?:
        | 'abstract'
        | 'abstractTestnet'
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
        | 'basecamp';

      /**
       * Custom function to calculate the liquidity provided per hour
       */
      customFunction?: string;

      /**
       * Liquidity provided per hour
       */
      liquidityPerHour?: number;

      /**
       * Indicates if only in-range liquidity is rewarded.
       */
      onlyRewardInRangeLiquidity?: boolean;

      /**
       * Array of liquidity pools associated with the rule.
       */
      pools?: Array<Liquidity.Pool>;

      /**
       * Protocol of the liquidity pool.
       */
      protocol?: string;
    }

    export namespace Liquidity {
      export interface Pool {
        /**
         * Unique identifier of the liquidity pool.
         */
        id?: string;
      }
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

export interface RuleListParams {
  /**
   * Address of the collection to filter by
   */
  collectionAddress?: string;

  /**
   * If true this will only return active rules, the rules for which the startTime is
   * in the past and the endTime is in the future
   */
  isActive?: 'true' | 'false';

  /**
   * Maximum number of records to return (max 1000)
   */
  limit?: number;

  /**
   * ID of the loyalty rule group to filter results
   */
  loyaltyRuleGroupId?: string;

  /**
   * The IDs of the loyalty rule
   */
  loyaltyRuleId?: string | Array<string>;

  /**
   * Unique identifier for the organization to filter by
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific resource ID
   */
  startingAfter?: string;

  /**
   * Unique identifier for the website to filter by
   */
  websiteId?: string;
}

export interface RuleDeleteParams {
  /**
   * Whether to debit loyalty points
   */
  debitLoyaltyPoints?: string;
}

export interface RuleCompleteParams {
  /**
   * Override amount for the reward (rounded to nearest whole number). This will
   * override the rule amount and reward the integer passed.
   */
  amount?: number | null;

  /**
   * Link to the comment made by user
   */
  commentLink?: string;

  /**
   * Unique key to ensure idempotent requests
   */
  idempotencyKey?: string;

  /**
   * ID of the choice selected by the user
   */
  loyaltyQuestionChoiceId?: string;

  /**
   * Unique identifier for the user
   */
  userId?: string;

  /**
   * Optional verification code for completing the loyalty rule
   */
  verificationCode?: string;

  /**
   * Flag indicating if only verification is required, this will not create a
   * transaction and reward the user
   */
  verifyOnly?: string;

  /**
   * Wallet address of the user can only be used if userId is not provided
   */
  walletAddress?: string;
}

export interface RuleGetStatusParams {
  organizationId?: string;

  userId?: string;

  walletAddress?: string;

  websiteId?: string;
}

export declare namespace Rules {
  export {
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleCompleteResponse as RuleCompleteResponse,
    type RuleGetStatusResponse as RuleGetStatusResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleCompleteParams as RuleCompleteParams,
    type RuleGetStatusParams as RuleGetStatusParams,
  };
}
