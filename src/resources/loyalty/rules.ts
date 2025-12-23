// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Rules extends APIResource {
  /**
   * Create a new Loyalty Rule
   *
   * @example
   * ```ts
   * const rule = await client.loyalty.rules.create({
   *   amount: '10.5',
   *   effectiveEndTime: '2024-12-31T23:59:00Z',
   *   effectiveStartTime: '2024-01-01T00:00:00Z',
   *   endTime: '2024-12-31T23:59:00Z',
   *   frequency: 'daily',
   *   loyaltyCurrencyId: '456e1234-e89b-12d3-a456-426614174003',
   *   metadata: {},
   *   name: 'Referral Bonus Rule',
   *   organizationId: '123e4567-e89b-12d3-a456-426614174001',
   *   startTime: '2024-01-01T00:00:00Z',
   *   type: 'Bonus',
   *   websiteId: '123e4567-e89b-12d3-a456-426614174002',
   * });
   * ```
   */
  create(body: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<RuleCreateResponse> {
    return this._client.post('/api/loyalty/rules', { body, ...options });
  }

  /**
   * Update an existing Loyalty Rule
   *
   * @example
   * ```ts
   * const rule = await client.loyalty.rules.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     amount: '10.5',
   *     endTime: '2024-12-31T23:59:00Z',
   *     name: 'Daily Rewards Program',
   *   },
   * );
   * ```
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
   *
   * @example
   * ```ts
   * const rules = await client.loyalty.rules.list();
   * ```
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
   *
   * @example
   * ```ts
   * const rule = await client.loyalty.rules.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
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
   * drip_x_text_in_comment, drip_x_tweet, telegram_join, DiscordMessages,
   * youtube_subscribers, youtube_comment, steam_wishlist, discord_role_grant
   *
   * @example
   * ```ts
   * const response = await client.loyalty.rules.complete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
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
   * This will return the processing status of quests for a specific user and also
   * the progress of the loyalty rule
   *
   * @example
   * ```ts
   * const response = await client.loyalty.rules.getStatus();
   * ```
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
    | 'connected_github'
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
    | 'points_airdrop'
    | 'youtube_subscribers'
    | 'youtube_comment'
    | 'shopify_spend'
    | 'swap'
    | 'tiktok_post'
    | 'post_impressions'
    | 'discord_join'
    | 'connected_youtube'
    | 'stratus_function'
    | 'connected_tiktok'
    | 'tiktok_follow'
    | 'github_repo_star'
    | 'discord_role_grant';

  /**
   * Unique identifier for the associated website
   */
  websiteId: string;

  /**
   * URL of the background asset to be displayed
   */
  backgroundAssetUrl?: string;

  /**
   * The type of claim for the reward
   */
  claimType?: 'manual' | 'auto' | null;

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

  duplicatedFromId?: string | null;

  /**
   * ID of the external integration
   */
  externalIntegrationId?: string | null;

  /**
   * Optional stratus function id for the rule
   */
  functionId?: string | null;

  /**
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Interval between rule executions
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | 'custom' | 'every_message' | 'unlimited' | null;

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
   * URL for uploading loyalty user allotment via CSV
   */
  loyaltyUserAllotmentCsvUrl?: string;

  /**
   * The interval for the max amount. Available for the smart contract and external
   * rules.
   */
  maxAmountInterval?: 'daily' | 'weekly' | 'monthly' | 'lifetime' | null;

  /**
   * The maximum amount of points a user can earn per interval. Available for the
   * smart contract and external rules.
   */
  maxAmountPerInterval?: number | null;

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
    | 'berachain'
    | 'berachainArtio'
    | 'berachainBepolia'
    | 'binance'
    | 'bscTestnet'
    | 'campTestnet'
    | 'fantom'
    | 'fantomTestnet'
    | 'flowMainnet'
    | 'mainnet'
    | 'nexusTestnet'
    | 'optimism'
    | 'polygon'
    | 'polygon_mumbai'
    | 'skaleNebula'
    | 'skaleEuropa'
    | 'skaleCalypso'
    | 'solana'
    | 'sophon'
    | 'sophonTestnet'
    | 'sui'
    | 'superseed'
    | 'superseedSepolia'
    | 'vanar'
    | 'xai'
    | 'zksync'
    | 'coti'
    | 'cotiTestnet'
    | 'morph'
    | 'morphTestnet'
    | 'morphHolesky'
    | 'ultra'
    | 'ultraTestnet'
    | 'nitrograph'
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli'
    | 'basecamp'
    | 'somnia'
    | 'zkverify'
    | 'polkadot'
    | 'kusama'
    | 'flow_cadence';

  /**
   * OAuth credentials associated with the rule
   */
  oauthCredentialsId?: string | null;

  /**
   * The lifetime of the reward
   */
  rewardLifetime?: 'permanent' | 'dynamic' | null;

  /**
   * Type of reward issued by the rule
   */
  rewardType?: 'points' | 'multiplier' | 'badge';

  /**
   * URL of the Shopify store
   */
  shopifyStoreUrl?: string | null;

  /**
   * Whether to show this rule before the start time
   */
  showBeforeStart?: boolean;

  /**
   * Optional stratus subscription id for the rule
   */
  subscriptionId?: string | null;
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
    checkText?: string | Array<string> | null;

    /**
     * Array of collections associated with the rule.
     */
    collection?: Array<Metadata.Collection>;

    /**
     * Conditions for completing the profile.
     */
    completeProfileConditions?: { [key: string]: boolean } | null;

    /**
     * Description of the external rule condition (only for external rules)
     */
    conditionDescription?: string;

    /**
     * Object containing details for the call-to-action.
     */
    cta?: Metadata.Cta | null;

    /**
     * API key for custom rewards integration.
     */
    customRewardsApiKey?: string;

    /**
     * Flag indicating if the rule should use direct RPC to get the balance of tokens.
     */
    directRpc?: boolean;

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
     * Type of ERC20 token for the loyalty rule.
     */
    erc20Type?: 'erc20' | 'native';

    /**
     * Fill source of the order for the token sale
     */
    fillSource?: string;

    /**
     * Percentage reward given to a user for their first referral.
     */
    firstReferralReward?: number | null;

    /**
     * URL of the GitHub repository to check for star.
     */
    githubRepoUrl?: string | null;

    /**
     * Flag indicating whether the fill source is included.
     */
    hasFillSource?: boolean;

    /**
     * Indicates if the item has never been sold.
     */
    hasNeverSold?: boolean;

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
     * Flag indicating if the rule is restricted to new users.
     */
    isRestrictedToNewUsers?: boolean;

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
     * Promotional code associated with the rule.
     */
    promoCode?: string;

    /**
     * URL of the CSV file containing promo codes.
     */
    promoCodeCsvUrl?: string;

    /**
     * Numbers of the promotional code to be generated.
     */
    promoCodeLength?: number | null;

    /**
     * Type of the promotional code.
     */
    promoCodeType?: 'code' | 'csv' | 'generate';

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
     * Loyalty currency ID of the referrer reward.
     */
    referrerRewardLoyaltyCurrencyId?: string | null;

    /**
     * Flag indicating if the post link is required.
     */
    requirePostLink?: boolean | null;

    /**
     * Flag indicating if media metadata is required.
     */
    requirePostMediaLink?: boolean | null;

    /**
     * Flag indicating if the rule can also reward badges per range.
     */
    rewardBadgePerRange?: boolean;

    /**
     * Flag indicating if the reward is rewarded by batch.
     */
    rewardByBatch?: boolean | null;

    /**
     * Criteria to evaluate the reward.
     */
    rewardCriteria?: 'IMPRESSIONS_COUNT' | 'ELIGIBLE_POST' | null;

    /**
     * Flag indicating if the reward is rewarded per action.
     */
    rewardPerAction?: boolean | null;

    /**
     * Flag indicating if rewards are given per impression.
     */
    rewardPerImpression?: boolean | null;

    /**
     * Flag indicating if the rule should reward based on value of traded tokens
     * instead of count.
     */
    rewardPerValue?: boolean;

    /**
     * Wallet address of the user can only be used if userId is not provided
     */
    royaltyAddress?: string;

    /**
     * Royalty percentage of the item.
     */
    royaltyPercentage?: number;

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
      | 'GitHub'
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
     * Metadata for swap loyalty rules
     */
    swap?: Metadata.Swap;

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
    walletType?:
      | 'evm'
      | 'solana'
      | 'imx'
      | 'sui'
      | 'ton'
      | 'cosmos'
      | 'ultra'
      | 'agw'
      | 'flow_cadence'
      | 'substrate'
      | null;

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
        | 'berachain'
        | 'berachainArtio'
        | 'berachainBepolia'
        | 'binance'
        | 'bscTestnet'
        | 'campTestnet'
        | 'fantom'
        | 'fantomTestnet'
        | 'flowMainnet'
        | 'mainnet'
        | 'nexusTestnet'
        | 'optimism'
        | 'polygon'
        | 'polygon_mumbai'
        | 'skaleNebula'
        | 'skaleEuropa'
        | 'skaleCalypso'
        | 'solana'
        | 'sophon'
        | 'sophonTestnet'
        | 'sui'
        | 'superseed'
        | 'superseedSepolia'
        | 'vanar'
        | 'xai'
        | 'zksync'
        | 'coti'
        | 'cotiTestnet'
        | 'morph'
        | 'morphTestnet'
        | 'morphHolesky'
        | 'ultra'
        | 'ultraTestnet'
        | 'nitrograph'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli'
        | 'basecamp'
        | 'somnia'
        | 'zkverify'
        | 'polkadot'
        | 'kusama'
        | 'flow_cadence';
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
       * Custom function to calculate the the reward amount based on the liquidity
       * provided per day. X is the reward amount, Y is the liquidity provided per day in
       * USD.
       */
      customFunction?: string;

      /**
       * Liquidity provided per day in USD
       */
      liquidityPerDay?: number;

      /**
       * Blockchain network of the liquidity pool.
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
        | 'berachain'
        | 'berachainArtio'
        | 'berachainBepolia'
        | 'binance'
        | 'bscTestnet'
        | 'campTestnet'
        | 'fantom'
        | 'fantomTestnet'
        | 'flowMainnet'
        | 'mainnet'
        | 'nexusTestnet'
        | 'optimism'
        | 'polygon'
        | 'polygon_mumbai'
        | 'skaleNebula'
        | 'skaleEuropa'
        | 'skaleCalypso'
        | 'solana'
        | 'sophon'
        | 'sophonTestnet'
        | 'sui'
        | 'superseed'
        | 'superseedSepolia'
        | 'vanar'
        | 'xai'
        | 'zksync'
        | 'coti'
        | 'cotiTestnet'
        | 'morph'
        | 'morphTestnet'
        | 'morphHolesky'
        | 'ultra'
        | 'ultraTestnet'
        | 'nitrograph'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli'
        | 'basecamp'
        | 'somnia'
        | 'zkverify'
        | 'polkadot'
        | 'kusama'
        | 'flow_cadence';

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
        id: string;
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

      /**
       * ID of the loyalty badge for this range.
       */
      loyaltyBadgeId?: string;

      /**
       * Amount of the loyalty multiplier for this range.
       */
      loyaltyMultiplierAmount?: number;
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
       * Mapping of addresses for the smart contract.
       */
      addressMapping?: string | null;

      /**
       * Object containing details of the amount multiplier from the event.
       */
      amountMultiplier?: SmartContract.AmountMultiplier | null;

      /**
       * ID of the smart contract.
       */
      contractId?: string | null;

      /**
       * Criteria to evaluate the smart contract event.
       */
      criteria?: 'everyEvent' | 'byParameter' | null;

      /**
       * Event emitted by the smart contract.
       */
      event?: string | null;

      /**
       * Array of parameters for the smart contract.
       */
      params?: Array<SmartContract.Param> | null;

      /**
       * Type of the smart contract interaction.
       */
      type?: 'function' | 'event' | null;
    }

    export namespace SmartContract {
      /**
       * Object containing details of the amount multiplier from the event.
       */
      export interface AmountMultiplier {
        /**
         * Mapping of the value for the smart contract.
         */
        valueMapping?: string | null;
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

    /**
     * Metadata for swap loyalty rules
     */
    export interface Swap {
      provider?: 'any' | 'relay' | 'lifi';

      relayReferrerId?: string;

      requireCrossChainSwap?: boolean;

      swappedToChain?: 'any' | number | string;

      swappedToTokens?: Array<Swap.SwappedToToken>;

      tokenMode?: 'any' | 'specific';

      trackTokenAmount?: boolean;
    }

    export namespace Swap {
      export interface SwappedToToken {
        address: string;

        chainId: string;
      }
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
      | 'berachain'
      | 'berachainArtio'
      | 'berachainBepolia'
      | 'binance'
      | 'bscTestnet'
      | 'campTestnet'
      | 'fantom'
      | 'fantomTestnet'
      | 'flowMainnet'
      | 'mainnet'
      | 'nexusTestnet'
      | 'optimism'
      | 'polygon'
      | 'polygon_mumbai'
      | 'skaleNebula'
      | 'skaleEuropa'
      | 'skaleCalypso'
      | 'solana'
      | 'sophon'
      | 'sophonTestnet'
      | 'sui'
      | 'superseed'
      | 'superseedSepolia'
      | 'vanar'
      | 'xai'
      | 'zksync'
      | 'coti'
      | 'cotiTestnet'
      | 'morph'
      | 'morphTestnet'
      | 'morphHolesky'
      | 'ultra'
      | 'ultraTestnet'
      | 'nitrograph'
      | 'sepolia'
      | 'optimism_sepolia'
      | 'arbitrumSepolia'
      | 'goerli'
      | 'optimism_goerli'
      | 'arbitrumGoerli'
      | 'basecamp'
      | 'somnia'
      | 'zkverify'
      | 'polkadot'
      | 'kusama'
      | 'flow_cadence';

    /**
     * Symbol of the collection.
     */
    symbol?: string;
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
   * The type of claim for the reward
   */
  claimType?: 'manual' | 'auto' | null;

  /**
   * Blockchain address of the associated collection
   */
  collectionAddress?: string | null;

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
   * ID of the external integration
   */
  externalIntegrationId?: string | null;

  /**
   * Frequency of the rule execution
   */
  frequency?: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  /**
   * Optional stratus function id for the rule
   */
  functionId?: string | null;

  /**
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Time interval for recurring rule execution
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | 'custom' | 'every_message' | 'unlimited' | null;

  /**
   * Whether this rule is required for participation
   */
  isRequired?: boolean;

  /**
   * ID of the rule group section to associate with the rule
   */
  loyaltyRuleGroupId?: (string & {}) | 'no-section' | null;

  /**
   * The interval for the max amount. Available for the smart contract and external
   * rules.
   */
  maxAmountInterval?: 'daily' | 'weekly' | 'monthly' | 'lifetime' | null;

  /**
   * The maximum amount of points a user can earn per interval. Available for the
   * smart contract and external rules.
   */
  maxAmountPerInterval?: number | null;

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
    | 'berachain'
    | 'berachainArtio'
    | 'berachainBepolia'
    | 'binance'
    | 'bscTestnet'
    | 'campTestnet'
    | 'fantom'
    | 'fantomTestnet'
    | 'flowMainnet'
    | 'mainnet'
    | 'nexusTestnet'
    | 'optimism'
    | 'polygon'
    | 'polygon_mumbai'
    | 'skaleNebula'
    | 'skaleEuropa'
    | 'skaleCalypso'
    | 'solana'
    | 'sophon'
    | 'sophonTestnet'
    | 'sui'
    | 'superseed'
    | 'superseedSepolia'
    | 'vanar'
    | 'xai'
    | 'zksync'
    | 'coti'
    | 'cotiTestnet'
    | 'morph'
    | 'morphTestnet'
    | 'morphHolesky'
    | 'ultra'
    | 'ultraTestnet'
    | 'nitrograph'
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli'
    | 'basecamp'
    | 'somnia'
    | 'zkverify'
    | 'polkadot'
    | 'kusama'
    | 'flow_cadence';

  /**
   * ID for associated OAuth credentials
   */
  oauthCredentialsId?: string | null;

  /**
   * The lifetime of the reward
   */
  rewardLifetime?: 'permanent' | 'dynamic' | null;

  /**
   * Type of reward issued by this rule
   */
  rewardType?: 'points' | 'multiplier' | 'badge';

  /**
   * URL of the Shopify store
   */
  shopifyStoreUrl?: string | null;

  /**
   * Whether to show this rule before the start time
   */
  showBeforeStart?: boolean;

  /**
   * Start time for the loyalty rule
   */
  startTime?: string | null;

  /**
   * Optional stratus subscription id for the rule
   */
  subscriptionId?: string | null;
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
      | 'berachain'
      | 'berachainArtio'
      | 'berachainBepolia'
      | 'binance'
      | 'bscTestnet'
      | 'campTestnet'
      | 'fantom'
      | 'fantomTestnet'
      | 'flowMainnet'
      | 'mainnet'
      | 'nexusTestnet'
      | 'optimism'
      | 'polygon'
      | 'polygon_mumbai'
      | 'skaleNebula'
      | 'skaleEuropa'
      | 'skaleCalypso'
      | 'solana'
      | 'sophon'
      | 'sophonTestnet'
      | 'sui'
      | 'superseed'
      | 'superseedSepolia'
      | 'vanar'
      | 'xai'
      | 'zksync'
      | 'coti'
      | 'cotiTestnet'
      | 'morph'
      | 'morphTestnet'
      | 'morphHolesky'
      | 'ultra'
      | 'ultraTestnet'
      | 'nitrograph'
      | 'sepolia'
      | 'optimism_sepolia'
      | 'arbitrumSepolia'
      | 'goerli'
      | 'optimism_goerli'
      | 'arbitrumGoerli'
      | 'basecamp'
      | 'somnia'
      | 'zkverify'
      | 'polkadot'
      | 'kusama'
      | 'flow_cadence';

    /**
     * Symbol of the collection.
     */
    symbol?: string;
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
    checkText?: string | Array<string> | null;

    /**
     * Array of collections associated with the rule.
     */
    collection?: Array<Metadata.Collection>;

    /**
     * Conditions for completing the profile.
     */
    completeProfileConditions?: { [key: string]: boolean } | null;

    /**
     * Description of the external rule condition (only for external rules)
     */
    conditionDescription?: string;

    /**
     * Object containing details for the call-to-action.
     */
    cta?: Metadata.Cta | null;

    /**
     * API key for custom rewards integration.
     */
    customRewardsApiKey?: string;

    /**
     * Flag indicating if the rule should use direct RPC to get the balance of tokens.
     */
    directRpc?: boolean;

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
     * Type of ERC20 token for the loyalty rule.
     */
    erc20Type?: 'erc20' | 'native';

    /**
     * Fill source of the order for the token sale
     */
    fillSource?: string;

    /**
     * Percentage reward given to a user for their first referral.
     */
    firstReferralReward?: number | null;

    /**
     * URL of the GitHub repository to check for star.
     */
    githubRepoUrl?: string | null;

    /**
     * Flag indicating whether the fill source is included.
     */
    hasFillSource?: boolean;

    /**
     * Indicates if the item has never been sold.
     */
    hasNeverSold?: boolean;

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
     * Flag indicating if the rule is restricted to new users.
     */
    isRestrictedToNewUsers?: boolean;

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
     * Promotional code associated with the rule.
     */
    promoCode?: string;

    /**
     * URL of the CSV file containing promo codes.
     */
    promoCodeCsvUrl?: string;

    /**
     * Numbers of the promotional code to be generated.
     */
    promoCodeLength?: number | null;

    /**
     * Type of the promotional code.
     */
    promoCodeType?: 'code' | 'csv' | 'generate';

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
     * Loyalty currency ID of the referrer reward.
     */
    referrerRewardLoyaltyCurrencyId?: string | null;

    /**
     * Flag indicating if the post link is required.
     */
    requirePostLink?: boolean | null;

    /**
     * Flag indicating if media metadata is required.
     */
    requirePostMediaLink?: boolean | null;

    /**
     * Flag indicating if the rule can also reward badges per range.
     */
    rewardBadgePerRange?: boolean;

    /**
     * Flag indicating if the reward is rewarded by batch.
     */
    rewardByBatch?: boolean | null;

    /**
     * Criteria to evaluate the reward.
     */
    rewardCriteria?: 'IMPRESSIONS_COUNT' | 'ELIGIBLE_POST' | null;

    /**
     * Flag indicating if the reward is rewarded per action.
     */
    rewardPerAction?: boolean | null;

    /**
     * Flag indicating if rewards are given per impression.
     */
    rewardPerImpression?: boolean | null;

    /**
     * Flag indicating if the rule should reward based on value of traded tokens
     * instead of count.
     */
    rewardPerValue?: boolean;

    /**
     * Wallet address of the user can only be used if userId is not provided
     */
    royaltyAddress?: string;

    /**
     * Royalty percentage of the item.
     */
    royaltyPercentage?: number;

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
      | 'GitHub'
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
     * Metadata for swap loyalty rules
     */
    swap?: Metadata.Swap;

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
    walletType?:
      | 'evm'
      | 'solana'
      | 'imx'
      | 'sui'
      | 'ton'
      | 'cosmos'
      | 'ultra'
      | 'agw'
      | 'flow_cadence'
      | 'substrate'
      | null;

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
        | 'berachain'
        | 'berachainArtio'
        | 'berachainBepolia'
        | 'binance'
        | 'bscTestnet'
        | 'campTestnet'
        | 'fantom'
        | 'fantomTestnet'
        | 'flowMainnet'
        | 'mainnet'
        | 'nexusTestnet'
        | 'optimism'
        | 'polygon'
        | 'polygon_mumbai'
        | 'skaleNebula'
        | 'skaleEuropa'
        | 'skaleCalypso'
        | 'solana'
        | 'sophon'
        | 'sophonTestnet'
        | 'sui'
        | 'superseed'
        | 'superseedSepolia'
        | 'vanar'
        | 'xai'
        | 'zksync'
        | 'coti'
        | 'cotiTestnet'
        | 'morph'
        | 'morphTestnet'
        | 'morphHolesky'
        | 'ultra'
        | 'ultraTestnet'
        | 'nitrograph'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli'
        | 'basecamp'
        | 'somnia'
        | 'zkverify'
        | 'polkadot'
        | 'kusama'
        | 'flow_cadence';
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
       * Custom function to calculate the the reward amount based on the liquidity
       * provided per day. X is the reward amount, Y is the liquidity provided per day in
       * USD.
       */
      customFunction?: string;

      /**
       * Liquidity provided per day in USD
       */
      liquidityPerDay?: number;

      /**
       * Blockchain network of the liquidity pool.
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
        | 'berachain'
        | 'berachainArtio'
        | 'berachainBepolia'
        | 'binance'
        | 'bscTestnet'
        | 'campTestnet'
        | 'fantom'
        | 'fantomTestnet'
        | 'flowMainnet'
        | 'mainnet'
        | 'nexusTestnet'
        | 'optimism'
        | 'polygon'
        | 'polygon_mumbai'
        | 'skaleNebula'
        | 'skaleEuropa'
        | 'skaleCalypso'
        | 'solana'
        | 'sophon'
        | 'sophonTestnet'
        | 'sui'
        | 'superseed'
        | 'superseedSepolia'
        | 'vanar'
        | 'xai'
        | 'zksync'
        | 'coti'
        | 'cotiTestnet'
        | 'morph'
        | 'morphTestnet'
        | 'morphHolesky'
        | 'ultra'
        | 'ultraTestnet'
        | 'nitrograph'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli'
        | 'basecamp'
        | 'somnia'
        | 'zkverify'
        | 'polkadot'
        | 'kusama'
        | 'flow_cadence';

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
        id: string;
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

      /**
       * ID of the loyalty badge for this range.
       */
      loyaltyBadgeId?: string;

      /**
       * Amount of the loyalty multiplier for this range.
       */
      loyaltyMultiplierAmount?: number;
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
       * Mapping of addresses for the smart contract.
       */
      addressMapping?: string | null;

      /**
       * Object containing details of the amount multiplier from the event.
       */
      amountMultiplier?: SmartContract.AmountMultiplier | null;

      /**
       * ID of the smart contract.
       */
      contractId?: string | null;

      /**
       * Criteria to evaluate the smart contract event.
       */
      criteria?: 'everyEvent' | 'byParameter' | null;

      /**
       * Event emitted by the smart contract.
       */
      event?: string | null;

      /**
       * Array of parameters for the smart contract.
       */
      params?: Array<SmartContract.Param> | null;

      /**
       * Type of the smart contract interaction.
       */
      type?: 'function' | 'event' | null;
    }

    export namespace SmartContract {
      /**
       * Object containing details of the amount multiplier from the event.
       */
      export interface AmountMultiplier {
        /**
         * Mapping of the value for the smart contract.
         */
        valueMapping?: string | null;
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

    /**
     * Metadata for swap loyalty rules
     */
    export interface Swap {
      provider?: 'any' | 'relay' | 'lifi';

      relayReferrerId?: string;

      requireCrossChainSwap?: boolean;

      swappedToChain?: 'any' | number | string;

      swappedToTokens?: Array<Swap.SwappedToToken>;

      tokenMode?: 'any' | 'specific';

      trackTokenAmount?: boolean;
    }

    export namespace Swap {
      export interface SwappedToToken {
        address: string;

        chainId: string;
      }
    }
  }
}

export interface RuleListResponse {
  data: Array<RuleListResponse.Data>;

  hasNextPage: boolean;
}

export namespace RuleListResponse {
  export interface Data {
    /**
     * Unique identifier for the loyalty rule
     */
    id: string;

    /**
     * Amount associated with the loyalty rule
     */
    amount: number | null;

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
    endTime: string | null;

    /**
     * Frequency of the loyalty rule
     */
    frequency: string;

    /**
     * Chains attached to the loyalty rule
     */
    loyaltyRuleChain: Array<Data.LoyaltyRuleChain>;

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
    startTime: string | null;

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
    metadata?: { [key: string]: Data.Metadata };
  }

  export namespace Data {
    export interface LoyaltyRuleChain {
      /**
       * Unique identifier for the rule chain
       */
      id: string;

      loyaltyConditions: Array<LoyaltyRuleChain.LoyaltyCondition>;

      /**
       * Unique identifier for the loyalty rule
       */
      loyaltyRuleId: string;

      /**
       * Name of the rule chain
       */
      name: string;
    }

    export namespace LoyaltyRuleChain {
      export interface LoyaltyCondition {
        /**
         * Unique identifier for the condition
         */
        id: string;

        /**
         * Amount of the condition
         */
        amount: number | null;

        association: Array<LoyaltyCondition.Association>;

        /**
         * URL of the CSV file
         */
        csvUrl: string | null;

        /**
         * Description of the condition
         */
        description: string | null;

        /**
         * Number of times the condition must be met
         */
        repeatCount: number | null;

        /**
         * Number of times the condition must be met
         */
        requiredCount: number | null;

        /**
         * Type of the condition
         */
        type: 'rule' | 'rules' | 'points' | 'section' | 'level' | 'api' | 'badge' | 'badges' | 'csv';
      }

      export namespace LoyaltyCondition {
        export interface Association {
          /**
           * Unique identifier for the association
           */
          id: string;

          /**
           * Unique identifier for the loyalty badge
           */
          loyaltyBadgeId: string | null;

          /**
           * Unique identifier for the loyalty currency
           */
          loyaltyCurrencyId: string | null;

          loyaltyRule: Association.LoyaltyRule | null;

          /**
           * Unique identifier for the loyalty rule group
           */
          loyaltyRuleGroupId: string | null;

          /**
           * Unique identifier for the loyalty rule
           */
          loyaltyRuleId: string | null;
        }

        export namespace Association {
          export interface LoyaltyRule {
            /**
             * Name of the loyalty rule
             */
            name: string;
          }
        }
      }
    }

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
      checkText?: string | Array<string> | null;

      /**
       * Array of collections associated with the rule.
       */
      collection?: Array<Metadata.Collection>;

      /**
       * Conditions for completing the profile.
       */
      completeProfileConditions?: { [key: string]: boolean } | null;

      /**
       * Description of the external rule condition (only for external rules)
       */
      conditionDescription?: string;

      /**
       * Object containing details for the call-to-action.
       */
      cta?: Metadata.Cta | null;

      /**
       * API key for custom rewards integration.
       */
      customRewardsApiKey?: string;

      /**
       * Flag indicating if the rule should use direct RPC to get the balance of tokens.
       */
      directRpc?: boolean;

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
       * Type of ERC20 token for the loyalty rule.
       */
      erc20Type?: 'erc20' | 'native';

      /**
       * Fill source of the order for the token sale
       */
      fillSource?: string;

      /**
       * Percentage reward given to a user for their first referral.
       */
      firstReferralReward?: number | null;

      /**
       * URL of the GitHub repository to check for star.
       */
      githubRepoUrl?: string | null;

      /**
       * Flag indicating whether the fill source is included.
       */
      hasFillSource?: boolean;

      /**
       * Indicates if the item has never been sold.
       */
      hasNeverSold?: boolean;

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
       * Flag indicating if the rule is restricted to new users.
       */
      isRestrictedToNewUsers?: boolean;

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
       * Promotional code associated with the rule.
       */
      promoCode?: string;

      /**
       * URL of the CSV file containing promo codes.
       */
      promoCodeCsvUrl?: string;

      /**
       * Numbers of the promotional code to be generated.
       */
      promoCodeLength?: number | null;

      /**
       * Type of the promotional code.
       */
      promoCodeType?: 'code' | 'csv' | 'generate';

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
       * Loyalty currency ID of the referrer reward.
       */
      referrerRewardLoyaltyCurrencyId?: string | null;

      /**
       * Flag indicating if the post link is required.
       */
      requirePostLink?: boolean | null;

      /**
       * Flag indicating if media metadata is required.
       */
      requirePostMediaLink?: boolean | null;

      /**
       * Flag indicating if the rule can also reward badges per range.
       */
      rewardBadgePerRange?: boolean;

      /**
       * Flag indicating if the reward is rewarded by batch.
       */
      rewardByBatch?: boolean | null;

      /**
       * Criteria to evaluate the reward.
       */
      rewardCriteria?: 'IMPRESSIONS_COUNT' | 'ELIGIBLE_POST' | null;

      /**
       * Flag indicating if the reward is rewarded per action.
       */
      rewardPerAction?: boolean | null;

      /**
       * Flag indicating if rewards are given per impression.
       */
      rewardPerImpression?: boolean | null;

      /**
       * Flag indicating if the rule should reward based on value of traded tokens
       * instead of count.
       */
      rewardPerValue?: boolean;

      /**
       * Wallet address of the user can only be used if userId is not provided
       */
      royaltyAddress?: string;

      /**
       * Royalty percentage of the item.
       */
      royaltyPercentage?: number;

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
        | 'GitHub'
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
       * Metadata for swap loyalty rules
       */
      swap?: Metadata.Swap;

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
      walletType?:
        | 'evm'
        | 'solana'
        | 'imx'
        | 'sui'
        | 'ton'
        | 'cosmos'
        | 'ultra'
        | 'agw'
        | 'flow_cadence'
        | 'substrate'
        | null;

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
          | 'berachain'
          | 'berachainArtio'
          | 'berachainBepolia'
          | 'binance'
          | 'bscTestnet'
          | 'campTestnet'
          | 'fantom'
          | 'fantomTestnet'
          | 'flowMainnet'
          | 'mainnet'
          | 'nexusTestnet'
          | 'optimism'
          | 'polygon'
          | 'polygon_mumbai'
          | 'skaleNebula'
          | 'skaleEuropa'
          | 'skaleCalypso'
          | 'solana'
          | 'sophon'
          | 'sophonTestnet'
          | 'sui'
          | 'superseed'
          | 'superseedSepolia'
          | 'vanar'
          | 'xai'
          | 'zksync'
          | 'coti'
          | 'cotiTestnet'
          | 'morph'
          | 'morphTestnet'
          | 'morphHolesky'
          | 'ultra'
          | 'ultraTestnet'
          | 'nitrograph'
          | 'sepolia'
          | 'optimism_sepolia'
          | 'arbitrumSepolia'
          | 'goerli'
          | 'optimism_goerli'
          | 'arbitrumGoerli'
          | 'basecamp'
          | 'somnia'
          | 'zkverify'
          | 'polkadot'
          | 'kusama'
          | 'flow_cadence';
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
         * Custom function to calculate the the reward amount based on the liquidity
         * provided per day. X is the reward amount, Y is the liquidity provided per day in
         * USD.
         */
        customFunction?: string;

        /**
         * Liquidity provided per day in USD
         */
        liquidityPerDay?: number;

        /**
         * Blockchain network of the liquidity pool.
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
          | 'berachain'
          | 'berachainArtio'
          | 'berachainBepolia'
          | 'binance'
          | 'bscTestnet'
          | 'campTestnet'
          | 'fantom'
          | 'fantomTestnet'
          | 'flowMainnet'
          | 'mainnet'
          | 'nexusTestnet'
          | 'optimism'
          | 'polygon'
          | 'polygon_mumbai'
          | 'skaleNebula'
          | 'skaleEuropa'
          | 'skaleCalypso'
          | 'solana'
          | 'sophon'
          | 'sophonTestnet'
          | 'sui'
          | 'superseed'
          | 'superseedSepolia'
          | 'vanar'
          | 'xai'
          | 'zksync'
          | 'coti'
          | 'cotiTestnet'
          | 'morph'
          | 'morphTestnet'
          | 'morphHolesky'
          | 'ultra'
          | 'ultraTestnet'
          | 'nitrograph'
          | 'sepolia'
          | 'optimism_sepolia'
          | 'arbitrumSepolia'
          | 'goerli'
          | 'optimism_goerli'
          | 'arbitrumGoerli'
          | 'basecamp'
          | 'somnia'
          | 'zkverify'
          | 'polkadot'
          | 'kusama'
          | 'flow_cadence';

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
          id: string;
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

        /**
         * ID of the loyalty badge for this range.
         */
        loyaltyBadgeId?: string;

        /**
         * Amount of the loyalty multiplier for this range.
         */
        loyaltyMultiplierAmount?: number;
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
         * Mapping of addresses for the smart contract.
         */
        addressMapping?: string | null;

        /**
         * Object containing details of the amount multiplier from the event.
         */
        amountMultiplier?: SmartContract.AmountMultiplier | null;

        /**
         * ID of the smart contract.
         */
        contractId?: string | null;

        /**
         * Criteria to evaluate the smart contract event.
         */
        criteria?: 'everyEvent' | 'byParameter' | null;

        /**
         * Event emitted by the smart contract.
         */
        event?: string | null;

        /**
         * Array of parameters for the smart contract.
         */
        params?: Array<SmartContract.Param> | null;

        /**
         * Type of the smart contract interaction.
         */
        type?: 'function' | 'event' | null;
      }

      export namespace SmartContract {
        /**
         * Object containing details of the amount multiplier from the event.
         */
        export interface AmountMultiplier {
          /**
           * Mapping of the value for the smart contract.
           */
          valueMapping?: string | null;
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

      /**
       * Metadata for swap loyalty rules
       */
      export interface Swap {
        provider?: 'any' | 'relay' | 'lifi';

        relayReferrerId?: string;

        requireCrossChainSwap?: boolean;

        swappedToChain?: 'any' | number | string;

        swappedToTokens?: Array<Swap.SwappedToToken>;

        tokenMode?: 'any' | 'specific';

        trackTokenAmount?: boolean;
      }

      export namespace Swap {
        export interface SwappedToToken {
          address: string;

          chainId: string;
        }
      }
    }
  }
}

export interface RuleDeleteResponse {
  id: string;

  deletedAt: string;
}

export interface RuleCompleteResponse {
  message:
    | 'Completion request added to queue'
    | 'Link click being verified, come back later to check the status';
}

export interface RuleGetStatusResponse {
  data: Array<RuleGetStatusResponse.Data>;
}

export namespace RuleGetStatusResponse {
  export interface Data {
    loyaltyRuleId: string;

    userId: string;

    /**
     * The ID of the loyalty rule status for the Progress object
     */
    id?: string;

    createdAt?: string;

    fulfilledAt?: string | null;

    /**
     * Categorized examples of messages that may be returned for a loyalty rule's
     * processing result.
     *
     * User Onboarding
     *
     * - Check In: "Streak successful"
     * - Complete Profile Details: "Profile not complete"
     *
     * Connect Accounts
     *
     * - Connect TikTok: "TikTok not connected"
     * - Connect Discord: "Discord not connected", "Discord request timeout"
     * - Connect X: "Twitter not connected", "Twitter not connected or content url is
     *   required"
     * - Connect Email: "Email address not connected"
     * - Connect Telegram: "Telegram not connected", "user has not setup telegram (no
     *   telegramUsername), please setup username in telegram and reconnect.",
     *   "Telegram request rate-limited"
     * - Connect Steam: "Steam not connected"
     * - Connect Youtube: "Youtube not connected"
     *
     *       Social Quests
     *
     * - Join Telegram Group: "Telegram Channel not joined", "Telegram Channel joined
     *   successfully"
     * - Post on TikTok: "TikTok post not verified"
     * - Comment on an X Post: "Quest Completed: You have commented on the tweet",
     *   "Quest Not Completed: Comment not found for the specified tweet"
     * - Repost an X Post: "Quest Completed: You have retweeted the tweet", "Quest Not
     *   Completed: Retweet not found for the specified tweet", "Quest Completed: You
     *   have retweeted and commented on the tweet", "Quest Not Completed: You have not
     *   retweeted or commented on the tweet"
     * - Follow an X Account: "Missing required parameters: twitterUserId,
     *   targetUsername", "Quest Completed: You are a follower of
     *   @${targetUsername}", "Quest Not Completed: Please follow @${targetUsername}
     *   and try again in few minutes"
     * - React to an X Post: "Missing required parameters: texts, twitterUserId,
     *   userTweetId", "No text provided", "Quest Completed: You have posted {tweetId}
     *   a tweet with the text {text}", "Quest Not Completed: Your all previous {COUNT}
     *   posts are already claimed. Please post a new tweet and try again in a few
     *   minutes.", "Tweet is already claimed", "Tweet does not belong to the user",
     *   "Text not found in tweet", "Tweet is before the quest start time", "Tweet does
     *   not have media", "Text found in tweet"
     * - Add Text to X Bio: "Missing required parameters: texts, twitterUserId", "User
     *   not found", "Text found in bio", "Text not found in bio"
     * - Add Text to X Username: "Missing required parameters: texts, twitterUserId",
     *   "User not found", "Text found in username", "Text not found in username"
     * - Comment on an X Post with Text: "Missing required parameters: texts,
     *   twitterUserId", "Comment is already claimed", "Text found in comment", "Text
     *   not found in comment", "Tweet not found or could not be retrieved"
     * - Comment on a YouTube Video: "Youtube comment added", "Youtube comment not
     *   added"
     * - Subscribe to a YouTube Channel: "Youtube channel subscribed", "Quest failed,
     *   please make sure you have made your subscriptions public in youtube"
     * - Get X post impressions: "You've already claimed the reward for this impression
     *   range."
     * - Add an Item to Steam Wishlist: "Steam Wishlist item added", "Steam Wishlist
     *   item not added"
     *
     * Complex Onchain Logic
     *
     * - Token Swap: "Swap rewards calculated successfully", "Swap rule failed"
     *
     * Other
     *
     * - Answer a Quiz: "Quiz question not configured", "No question response found",
     *   "Incorrect answer", "Correct answer"
     * - Answer a Poll: "Poll question not configured", "Poll response recorded"
     * - Spend in Shopify Store: "Shopify not connected"
     * - Points Airdrop: "Seems like you're not eligible for this points airdrop."
     *
     *       General
     *
     * - "Quest already completed"
     * - "Quest already completed using the same social account (${socialAccountName}),
     *   with the different user."
     * - "You've already claimed the reward for this quest."
     * - "Quest not achieved, please try again."
     * - "Rule is not setup"
     * - "Request aborted due to timeout"
     * - "Google account not connected"
     * - "Claim failed: Multiplier is already active"
     */
    message?: string;

    organizationId?: string;

    /**
     * The progress of the loyalty rule from 0 to 100
     */
    progress?: number;

    /**
     * Status of the queued job, this is only returned if the job is queued and being
     * processed, this wil be retained for 10 minutes after the job is completed
     */
    status?: 'pending' | 'processing' | 'completed' | 'failed';

    updatedAt?: string;

    websiteId?: string;
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
    | 'connected_github'
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
    | 'points_airdrop'
    | 'youtube_subscribers'
    | 'youtube_comment'
    | 'shopify_spend'
    | 'swap'
    | 'tiktok_post'
    | 'post_impressions'
    | 'discord_join'
    | 'connected_youtube'
    | 'stratus_function'
    | 'connected_tiktok'
    | 'tiktok_follow'
    | 'github_repo_star'
    | 'discord_role_grant';

  /**
   * Unique identifier for the associated website
   */
  websiteId: string;

  /**
   * URL of the background asset to be displayed
   */
  backgroundAssetUrl?: string;

  /**
   * The type of claim for the reward
   */
  claimType?: 'manual' | 'auto' | null;

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

  duplicatedFromId?: string | null;

  /**
   * ID of the external integration
   */
  externalIntegrationId?: string | null;

  /**
   * Optional stratus function id for the rule
   */
  functionId?: string | null;

  /**
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Interval between rule executions
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | 'custom' | 'every_message' | 'unlimited' | null;

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
   * URL for uploading loyalty user allotment via CSV
   */
  loyaltyUserAllotmentCsvUrl?: string;

  /**
   * The interval for the max amount. Available for the smart contract and external
   * rules.
   */
  maxAmountInterval?: 'daily' | 'weekly' | 'monthly' | 'lifetime' | null;

  /**
   * The maximum amount of points a user can earn per interval. Available for the
   * smart contract and external rules.
   */
  maxAmountPerInterval?: number | null;

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
    | 'berachain'
    | 'berachainArtio'
    | 'berachainBepolia'
    | 'binance'
    | 'bscTestnet'
    | 'campTestnet'
    | 'fantom'
    | 'fantomTestnet'
    | 'flowMainnet'
    | 'mainnet'
    | 'nexusTestnet'
    | 'optimism'
    | 'polygon'
    | 'polygon_mumbai'
    | 'skaleNebula'
    | 'skaleEuropa'
    | 'skaleCalypso'
    | 'solana'
    | 'sophon'
    | 'sophonTestnet'
    | 'sui'
    | 'superseed'
    | 'superseedSepolia'
    | 'vanar'
    | 'xai'
    | 'zksync'
    | 'coti'
    | 'cotiTestnet'
    | 'morph'
    | 'morphTestnet'
    | 'morphHolesky'
    | 'ultra'
    | 'ultraTestnet'
    | 'nitrograph'
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli'
    | 'basecamp'
    | 'somnia'
    | 'zkverify'
    | 'polkadot'
    | 'kusama'
    | 'flow_cadence';

  /**
   * OAuth credentials associated with the rule
   */
  oauthCredentialsId?: string | null;

  /**
   * The lifetime of the reward
   */
  rewardLifetime?: 'permanent' | 'dynamic' | null;

  /**
   * Type of reward issued by the rule
   */
  rewardType?: 'points' | 'multiplier' | 'badge';

  /**
   * URL of the Shopify store
   */
  shopifyStoreUrl?: string | null;

  /**
   * Whether to show this rule before the start time
   */
  showBeforeStart?: boolean;

  /**
   * Optional stratus subscription id for the rule
   */
  subscriptionId?: string | null;
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
    checkText?: string | Array<string> | null;

    /**
     * Array of collections associated with the rule.
     */
    collection?: Array<Metadata.Collection>;

    /**
     * Conditions for completing the profile.
     */
    completeProfileConditions?: { [key: string]: boolean } | null;

    /**
     * Description of the external rule condition (only for external rules)
     */
    conditionDescription?: string;

    /**
     * Object containing details for the call-to-action.
     */
    cta?: Metadata.Cta | null;

    /**
     * API key for custom rewards integration.
     */
    customRewardsApiKey?: string;

    /**
     * Flag indicating if the rule should use direct RPC to get the balance of tokens.
     */
    directRpc?: boolean;

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
     * Type of ERC20 token for the loyalty rule.
     */
    erc20Type?: 'erc20' | 'native';

    /**
     * Fill source of the order for the token sale
     */
    fillSource?: string;

    /**
     * Percentage reward given to a user for their first referral.
     */
    firstReferralReward?: number | null;

    /**
     * URL of the GitHub repository to check for star.
     */
    githubRepoUrl?: string | null;

    /**
     * Flag indicating whether the fill source is included.
     */
    hasFillSource?: boolean;

    /**
     * Indicates if the item has never been sold.
     */
    hasNeverSold?: boolean;

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
     * Flag indicating if the rule is restricted to new users.
     */
    isRestrictedToNewUsers?: boolean;

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
     * Promotional code associated with the rule.
     */
    promoCode?: string;

    /**
     * URL of the CSV file containing promo codes.
     */
    promoCodeCsvUrl?: string;

    /**
     * Numbers of the promotional code to be generated.
     */
    promoCodeLength?: number | null;

    /**
     * Type of the promotional code.
     */
    promoCodeType?: 'code' | 'csv' | 'generate';

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
     * Loyalty currency ID of the referrer reward.
     */
    referrerRewardLoyaltyCurrencyId?: string | null;

    /**
     * Flag indicating if the post link is required.
     */
    requirePostLink?: boolean | null;

    /**
     * Flag indicating if media metadata is required.
     */
    requirePostMediaLink?: boolean | null;

    /**
     * Flag indicating if the rule can also reward badges per range.
     */
    rewardBadgePerRange?: boolean;

    /**
     * Flag indicating if the reward is rewarded by batch.
     */
    rewardByBatch?: boolean | null;

    /**
     * Criteria to evaluate the reward.
     */
    rewardCriteria?: 'IMPRESSIONS_COUNT' | 'ELIGIBLE_POST' | null;

    /**
     * Flag indicating if the reward is rewarded per action.
     */
    rewardPerAction?: boolean | null;

    /**
     * Flag indicating if rewards are given per impression.
     */
    rewardPerImpression?: boolean | null;

    /**
     * Flag indicating if the rule should reward based on value of traded tokens
     * instead of count.
     */
    rewardPerValue?: boolean;

    /**
     * Wallet address of the user can only be used if userId is not provided
     */
    royaltyAddress?: string;

    /**
     * Royalty percentage of the item.
     */
    royaltyPercentage?: number;

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
      | 'GitHub'
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
     * Metadata for swap loyalty rules
     */
    swap?: Metadata.Swap;

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
    walletType?:
      | 'evm'
      | 'solana'
      | 'imx'
      | 'sui'
      | 'ton'
      | 'cosmos'
      | 'ultra'
      | 'agw'
      | 'flow_cadence'
      | 'substrate'
      | null;

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
        | 'berachain'
        | 'berachainArtio'
        | 'berachainBepolia'
        | 'binance'
        | 'bscTestnet'
        | 'campTestnet'
        | 'fantom'
        | 'fantomTestnet'
        | 'flowMainnet'
        | 'mainnet'
        | 'nexusTestnet'
        | 'optimism'
        | 'polygon'
        | 'polygon_mumbai'
        | 'skaleNebula'
        | 'skaleEuropa'
        | 'skaleCalypso'
        | 'solana'
        | 'sophon'
        | 'sophonTestnet'
        | 'sui'
        | 'superseed'
        | 'superseedSepolia'
        | 'vanar'
        | 'xai'
        | 'zksync'
        | 'coti'
        | 'cotiTestnet'
        | 'morph'
        | 'morphTestnet'
        | 'morphHolesky'
        | 'ultra'
        | 'ultraTestnet'
        | 'nitrograph'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli'
        | 'basecamp'
        | 'somnia'
        | 'zkverify'
        | 'polkadot'
        | 'kusama'
        | 'flow_cadence';
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
       * Custom function to calculate the the reward amount based on the liquidity
       * provided per day. X is the reward amount, Y is the liquidity provided per day in
       * USD.
       */
      customFunction?: string;

      /**
       * Liquidity provided per day in USD
       */
      liquidityPerDay?: number;

      /**
       * Blockchain network of the liquidity pool.
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
        | 'berachain'
        | 'berachainArtio'
        | 'berachainBepolia'
        | 'binance'
        | 'bscTestnet'
        | 'campTestnet'
        | 'fantom'
        | 'fantomTestnet'
        | 'flowMainnet'
        | 'mainnet'
        | 'nexusTestnet'
        | 'optimism'
        | 'polygon'
        | 'polygon_mumbai'
        | 'skaleNebula'
        | 'skaleEuropa'
        | 'skaleCalypso'
        | 'solana'
        | 'sophon'
        | 'sophonTestnet'
        | 'sui'
        | 'superseed'
        | 'superseedSepolia'
        | 'vanar'
        | 'xai'
        | 'zksync'
        | 'coti'
        | 'cotiTestnet'
        | 'morph'
        | 'morphTestnet'
        | 'morphHolesky'
        | 'ultra'
        | 'ultraTestnet'
        | 'nitrograph'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli'
        | 'basecamp'
        | 'somnia'
        | 'zkverify'
        | 'polkadot'
        | 'kusama'
        | 'flow_cadence';

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
        id: string;
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

      /**
       * ID of the loyalty badge for this range.
       */
      loyaltyBadgeId?: string;

      /**
       * Amount of the loyalty multiplier for this range.
       */
      loyaltyMultiplierAmount?: number;
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
       * Mapping of addresses for the smart contract.
       */
      addressMapping?: string | null;

      /**
       * Object containing details of the amount multiplier from the event.
       */
      amountMultiplier?: SmartContract.AmountMultiplier | null;

      /**
       * ID of the smart contract.
       */
      contractId?: string | null;

      /**
       * Criteria to evaluate the smart contract event.
       */
      criteria?: 'everyEvent' | 'byParameter' | null;

      /**
       * Event emitted by the smart contract.
       */
      event?: string | null;

      /**
       * Array of parameters for the smart contract.
       */
      params?: Array<SmartContract.Param> | null;

      /**
       * Type of the smart contract interaction.
       */
      type?: 'function' | 'event' | null;
    }

    export namespace SmartContract {
      /**
       * Object containing details of the amount multiplier from the event.
       */
      export interface AmountMultiplier {
        /**
         * Mapping of the value for the smart contract.
         */
        valueMapping?: string | null;
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

    /**
     * Metadata for swap loyalty rules
     */
    export interface Swap {
      provider?: 'any' | 'relay' | 'lifi';

      relayReferrerId?: string;

      requireCrossChainSwap?: boolean;

      swappedToChain?: 'any' | number | string;

      swappedToTokens?: Array<Swap.SwappedToToken>;

      tokenMode?: 'any' | 'specific';

      trackTokenAmount?: boolean;
    }

    export namespace Swap {
      export interface SwappedToToken {
        address: string;

        chainId: string;
      }
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
      | 'berachain'
      | 'berachainArtio'
      | 'berachainBepolia'
      | 'binance'
      | 'bscTestnet'
      | 'campTestnet'
      | 'fantom'
      | 'fantomTestnet'
      | 'flowMainnet'
      | 'mainnet'
      | 'nexusTestnet'
      | 'optimism'
      | 'polygon'
      | 'polygon_mumbai'
      | 'skaleNebula'
      | 'skaleEuropa'
      | 'skaleCalypso'
      | 'solana'
      | 'sophon'
      | 'sophonTestnet'
      | 'sui'
      | 'superseed'
      | 'superseedSepolia'
      | 'vanar'
      | 'xai'
      | 'zksync'
      | 'coti'
      | 'cotiTestnet'
      | 'morph'
      | 'morphTestnet'
      | 'morphHolesky'
      | 'ultra'
      | 'ultraTestnet'
      | 'nitrograph'
      | 'sepolia'
      | 'optimism_sepolia'
      | 'arbitrumSepolia'
      | 'goerli'
      | 'optimism_goerli'
      | 'arbitrumGoerli'
      | 'basecamp'
      | 'somnia'
      | 'zkverify'
      | 'polkadot'
      | 'kusama'
      | 'flow_cadence';

    /**
     * Symbol of the collection.
     */
    symbol?: string;
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
   * The type of claim for the reward
   */
  claimType?: 'manual' | 'auto' | null;

  /**
   * Blockchain address of the associated collection
   */
  collectionAddress?: string | null;

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
   * ID of the external integration
   */
  externalIntegrationId?: string | null;

  /**
   * Frequency of the rule execution
   */
  frequency?: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  /**
   * Optional stratus function id for the rule
   */
  functionId?: string | null;

  /**
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Time interval for recurring rule execution
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | 'custom' | 'every_message' | 'unlimited' | null;

  /**
   * Whether this rule is required for participation
   */
  isRequired?: boolean;

  /**
   * ID of the rule group section to associate with the rule
   */
  loyaltyRuleGroupId?: (string & {}) | 'no-section' | null;

  /**
   * The interval for the max amount. Available for the smart contract and external
   * rules.
   */
  maxAmountInterval?: 'daily' | 'weekly' | 'monthly' | 'lifetime' | null;

  /**
   * The maximum amount of points a user can earn per interval. Available for the
   * smart contract and external rules.
   */
  maxAmountPerInterval?: number | null;

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
    | 'berachain'
    | 'berachainArtio'
    | 'berachainBepolia'
    | 'binance'
    | 'bscTestnet'
    | 'campTestnet'
    | 'fantom'
    | 'fantomTestnet'
    | 'flowMainnet'
    | 'mainnet'
    | 'nexusTestnet'
    | 'optimism'
    | 'polygon'
    | 'polygon_mumbai'
    | 'skaleNebula'
    | 'skaleEuropa'
    | 'skaleCalypso'
    | 'solana'
    | 'sophon'
    | 'sophonTestnet'
    | 'sui'
    | 'superseed'
    | 'superseedSepolia'
    | 'vanar'
    | 'xai'
    | 'zksync'
    | 'coti'
    | 'cotiTestnet'
    | 'morph'
    | 'morphTestnet'
    | 'morphHolesky'
    | 'ultra'
    | 'ultraTestnet'
    | 'nitrograph'
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli'
    | 'basecamp'
    | 'somnia'
    | 'zkverify'
    | 'polkadot'
    | 'kusama'
    | 'flow_cadence';

  /**
   * ID for associated OAuth credentials
   */
  oauthCredentialsId?: string | null;

  /**
   * The lifetime of the reward
   */
  rewardLifetime?: 'permanent' | 'dynamic' | null;

  /**
   * Type of reward issued by this rule
   */
  rewardType?: 'points' | 'multiplier' | 'badge';

  /**
   * URL of the Shopify store
   */
  shopifyStoreUrl?: string | null;

  /**
   * Whether to show this rule before the start time
   */
  showBeforeStart?: boolean;

  /**
   * Start time for the loyalty rule
   */
  startTime?: string | null;

  /**
   * Optional stratus subscription id for the rule
   */
  subscriptionId?: string | null;
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
      | 'berachain'
      | 'berachainArtio'
      | 'berachainBepolia'
      | 'binance'
      | 'bscTestnet'
      | 'campTestnet'
      | 'fantom'
      | 'fantomTestnet'
      | 'flowMainnet'
      | 'mainnet'
      | 'nexusTestnet'
      | 'optimism'
      | 'polygon'
      | 'polygon_mumbai'
      | 'skaleNebula'
      | 'skaleEuropa'
      | 'skaleCalypso'
      | 'solana'
      | 'sophon'
      | 'sophonTestnet'
      | 'sui'
      | 'superseed'
      | 'superseedSepolia'
      | 'vanar'
      | 'xai'
      | 'zksync'
      | 'coti'
      | 'cotiTestnet'
      | 'morph'
      | 'morphTestnet'
      | 'morphHolesky'
      | 'ultra'
      | 'ultraTestnet'
      | 'nitrograph'
      | 'sepolia'
      | 'optimism_sepolia'
      | 'arbitrumSepolia'
      | 'goerli'
      | 'optimism_goerli'
      | 'arbitrumGoerli'
      | 'basecamp'
      | 'somnia'
      | 'zkverify'
      | 'polkadot'
      | 'kusama'
      | 'flow_cadence';

    /**
     * Symbol of the collection.
     */
    symbol?: string;
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
    checkText?: string | Array<string> | null;

    /**
     * Array of collections associated with the rule.
     */
    collection?: Array<Metadata.Collection>;

    /**
     * Conditions for completing the profile.
     */
    completeProfileConditions?: { [key: string]: boolean } | null;

    /**
     * Description of the external rule condition (only for external rules)
     */
    conditionDescription?: string;

    /**
     * Object containing details for the call-to-action.
     */
    cta?: Metadata.Cta | null;

    /**
     * API key for custom rewards integration.
     */
    customRewardsApiKey?: string;

    /**
     * Flag indicating if the rule should use direct RPC to get the balance of tokens.
     */
    directRpc?: boolean;

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
     * Type of ERC20 token for the loyalty rule.
     */
    erc20Type?: 'erc20' | 'native';

    /**
     * Fill source of the order for the token sale
     */
    fillSource?: string;

    /**
     * Percentage reward given to a user for their first referral.
     */
    firstReferralReward?: number | null;

    /**
     * URL of the GitHub repository to check for star.
     */
    githubRepoUrl?: string | null;

    /**
     * Flag indicating whether the fill source is included.
     */
    hasFillSource?: boolean;

    /**
     * Indicates if the item has never been sold.
     */
    hasNeverSold?: boolean;

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
     * Flag indicating if the rule is restricted to new users.
     */
    isRestrictedToNewUsers?: boolean;

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
     * Promotional code associated with the rule.
     */
    promoCode?: string;

    /**
     * URL of the CSV file containing promo codes.
     */
    promoCodeCsvUrl?: string;

    /**
     * Numbers of the promotional code to be generated.
     */
    promoCodeLength?: number | null;

    /**
     * Type of the promotional code.
     */
    promoCodeType?: 'code' | 'csv' | 'generate';

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
     * Loyalty currency ID of the referrer reward.
     */
    referrerRewardLoyaltyCurrencyId?: string | null;

    /**
     * Flag indicating if the post link is required.
     */
    requirePostLink?: boolean | null;

    /**
     * Flag indicating if media metadata is required.
     */
    requirePostMediaLink?: boolean | null;

    /**
     * Flag indicating if the rule can also reward badges per range.
     */
    rewardBadgePerRange?: boolean;

    /**
     * Flag indicating if the reward is rewarded by batch.
     */
    rewardByBatch?: boolean | null;

    /**
     * Criteria to evaluate the reward.
     */
    rewardCriteria?: 'IMPRESSIONS_COUNT' | 'ELIGIBLE_POST' | null;

    /**
     * Flag indicating if the reward is rewarded per action.
     */
    rewardPerAction?: boolean | null;

    /**
     * Flag indicating if rewards are given per impression.
     */
    rewardPerImpression?: boolean | null;

    /**
     * Flag indicating if the rule should reward based on value of traded tokens
     * instead of count.
     */
    rewardPerValue?: boolean;

    /**
     * Wallet address of the user can only be used if userId is not provided
     */
    royaltyAddress?: string;

    /**
     * Royalty percentage of the item.
     */
    royaltyPercentage?: number;

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
      | 'GitHub'
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
     * Metadata for swap loyalty rules
     */
    swap?: Metadata.Swap;

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
    walletType?:
      | 'evm'
      | 'solana'
      | 'imx'
      | 'sui'
      | 'ton'
      | 'cosmos'
      | 'ultra'
      | 'agw'
      | 'flow_cadence'
      | 'substrate'
      | null;

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
        | 'berachain'
        | 'berachainArtio'
        | 'berachainBepolia'
        | 'binance'
        | 'bscTestnet'
        | 'campTestnet'
        | 'fantom'
        | 'fantomTestnet'
        | 'flowMainnet'
        | 'mainnet'
        | 'nexusTestnet'
        | 'optimism'
        | 'polygon'
        | 'polygon_mumbai'
        | 'skaleNebula'
        | 'skaleEuropa'
        | 'skaleCalypso'
        | 'solana'
        | 'sophon'
        | 'sophonTestnet'
        | 'sui'
        | 'superseed'
        | 'superseedSepolia'
        | 'vanar'
        | 'xai'
        | 'zksync'
        | 'coti'
        | 'cotiTestnet'
        | 'morph'
        | 'morphTestnet'
        | 'morphHolesky'
        | 'ultra'
        | 'ultraTestnet'
        | 'nitrograph'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli'
        | 'basecamp'
        | 'somnia'
        | 'zkverify'
        | 'polkadot'
        | 'kusama'
        | 'flow_cadence';
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
       * Custom function to calculate the the reward amount based on the liquidity
       * provided per day. X is the reward amount, Y is the liquidity provided per day in
       * USD.
       */
      customFunction?: string;

      /**
       * Liquidity provided per day in USD
       */
      liquidityPerDay?: number;

      /**
       * Blockchain network of the liquidity pool.
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
        | 'berachain'
        | 'berachainArtio'
        | 'berachainBepolia'
        | 'binance'
        | 'bscTestnet'
        | 'campTestnet'
        | 'fantom'
        | 'fantomTestnet'
        | 'flowMainnet'
        | 'mainnet'
        | 'nexusTestnet'
        | 'optimism'
        | 'polygon'
        | 'polygon_mumbai'
        | 'skaleNebula'
        | 'skaleEuropa'
        | 'skaleCalypso'
        | 'solana'
        | 'sophon'
        | 'sophonTestnet'
        | 'sui'
        | 'superseed'
        | 'superseedSepolia'
        | 'vanar'
        | 'xai'
        | 'zksync'
        | 'coti'
        | 'cotiTestnet'
        | 'morph'
        | 'morphTestnet'
        | 'morphHolesky'
        | 'ultra'
        | 'ultraTestnet'
        | 'nitrograph'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli'
        | 'basecamp'
        | 'somnia'
        | 'zkverify'
        | 'polkadot'
        | 'kusama'
        | 'flow_cadence';

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
        id: string;
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

      /**
       * ID of the loyalty badge for this range.
       */
      loyaltyBadgeId?: string;

      /**
       * Amount of the loyalty multiplier for this range.
       */
      loyaltyMultiplierAmount?: number;
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
       * Mapping of addresses for the smart contract.
       */
      addressMapping?: string | null;

      /**
       * Object containing details of the amount multiplier from the event.
       */
      amountMultiplier?: SmartContract.AmountMultiplier | null;

      /**
       * ID of the smart contract.
       */
      contractId?: string | null;

      /**
       * Criteria to evaluate the smart contract event.
       */
      criteria?: 'everyEvent' | 'byParameter' | null;

      /**
       * Event emitted by the smart contract.
       */
      event?: string | null;

      /**
       * Array of parameters for the smart contract.
       */
      params?: Array<SmartContract.Param> | null;

      /**
       * Type of the smart contract interaction.
       */
      type?: 'function' | 'event' | null;
    }

    export namespace SmartContract {
      /**
       * Object containing details of the amount multiplier from the event.
       */
      export interface AmountMultiplier {
        /**
         * Mapping of the value for the smart contract.
         */
        valueMapping?: string | null;
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

    /**
     * Metadata for swap loyalty rules
     */
    export interface Swap {
      provider?: 'any' | 'relay' | 'lifi';

      relayReferrerId?: string;

      requireCrossChainSwap?: boolean;

      swappedToChain?: 'any' | number | string;

      swappedToTokens?: Array<Swap.SwappedToToken>;

      tokenMode?: 'any' | 'specific';

      trackTokenAmount?: boolean;
    }

    export namespace Swap {
      export interface SwappedToToken {
        address: string;

        chainId: string;
      }
    }
  }
}

export interface RuleListParams {
  /**
   * IDs of the users to filter results by
   */
  allotedToUserId?: string | Array<string>;

  /**
   * ID of the user group to filter results by
   */
  allotedUserGroupId?: string;

  /**
   * Address of the collection to filter by
   */
  collectionAddress?: string;

  /**
   * Whether to include deleted/archived records
   */
  includeDeleted?: boolean | null;

  /**
   * If true this will only return active rules, the rules for which the startTime is
   * in the past and the endTime is in the future
   */
  isActive?: 'true' | 'false';

  /**
   * If true this will only return special rules, special rules are the rules that
   * are used for anti sybil as honey pot
   */
  isSpecial?: 'true' | 'false';

  /**
   * Maximum number of records to return (max 100)
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
   * Link to the post/comment made by user
   */
  contentUrl?: string;

  /**
   * Unique key to ensure idempotent requests.
   */
  idempotencyKey?: string;

  /**
   * ID of the choice selected by the user
   */
  loyaltyQuestionChoiceId?: string;

  /**
   * Value to compare with the range
   */
  rangeValue?: number | null;

  /**
   * Flag indicating if the chain or required check should be skipped.
   */
  skipChainOrRequiredCheck?: boolean;

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
   * transaction and reward the user.
   */
  verifyOnly?: string;

  /**
   * Wallet address of the user can only be used if userId is not provided
   */
  walletAddress?: string;
}

export interface RuleGetStatusParams {
  /**
   * Number of items to return
   */
  limit?: number | null;

  /**
   * Unique identifier for the loyalty rule[s]
   */
  loyaltyRuleId?: string | Array<string>;

  organizationId?: string;

  /**
   * Starting after item
   */
  startingAfter?: string;

  userGroupId?: string;

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
