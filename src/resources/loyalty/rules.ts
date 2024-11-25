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
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<RuleDeleteResponse> {
    return this._client.delete(`/api/loyalty/rules/${id}`, options);
  }

  /**
   * Verify a loyalty rule based on user action and reward them if applicable.
   */
  complete(
    id: string,
    body: RuleCompleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCompleteResponse> {
    return this._client.post(`/api/loyalty/rules/${id}/complete`, { body, ...options });
  }
}

export interface RuleCreateResponse {
  id: string;

  /**
   * Reward amount associated with the rule
   */
  amount: unknown | null;

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
    | 'twitter_follow'
    | 'twitter_like'
    | 'twitter_comment'
    | 'connected_discord'
    | 'connected_twitter'
    | 'connected_email'
    | 'profile_completed'
    | 'referred_user'
    | 'code_entry'
    | 'check_in'
    | 'external_rule'
    | 'link_click'
    | 'tweet_liked_by_project'
    | 'twitter_post_hashtag'
    | 'token_hold_erc20'
    | 'snapshot_governance'
    | 'twitter_followers'
    | 'discord_member'
    | 'text_input'
    | 'telegram_messages'
    | 'drip_x_follow'
    | 'drip_x_tweet'
    | 'drip_x_new_tweet'
    | 'drip_x_text_in_bio'
    | 'drip_x_text_in_name'
    | 'smart_contract_event'
    | 'create_partner_account'
    | 'telegram_join'
    | 'connected_telegram'
    | 'manual_upload'
    | 'connect_wallet'
    | 'connected_steam';

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
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | null;

  /**
   * Whether this rule is mandatory
   */
  isRequired?: boolean;

  /**
   * Blockchain network where the rule will apply
   */
  network?:
    | 'mainnet'
    | 'polygon'
    | 'polygon_mumbai'
    | 'optimism'
    | 'arbitrum'
    | 'binance'
    | 'bscTestnet'
    | 'avalanche'
    | 'avalancheFuji'
    | 'zksync'
    | 'fantom'
    | 'fantomTestnet'
    | 'base'
    | 'baseSepolia'
    | 'skaleNebula'
    | 'xai'
    | 'berachainArtio'
    | 'solana'
    | 'apechain'
    | 'flowMainnet'
    | 'campTestnet'
    | 'sui'
    | 'vanar'
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli';

  /**
   * OAuth credentials associated with the rule
   */
  oauthCredentialsId?: string | null;

  /**
   * Type of reward issued by the rule
   */
  rewardType?: 'points' | 'multiplier';

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
     * Percentage reward given to a user for their first referral.
     */
    firstReferralReward?: number | null;

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
      | 'Twitch'
      | 'TikTok'
      | 'X(Twitter)'
      | 'Instagram'
      | 'EpicGames'
      | 'YouTube'
      | 'Discord'
      | 'Custom'
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
        | 'mainnet'
        | 'polygon'
        | 'polygon_mumbai'
        | 'optimism'
        | 'arbitrum'
        | 'binance'
        | 'bscTestnet'
        | 'avalanche'
        | 'avalancheFuji'
        | 'zksync'
        | 'fantom'
        | 'fantomTestnet'
        | 'base'
        | 'baseSepolia'
        | 'skaleNebula'
        | 'xai'
        | 'berachainArtio'
        | 'solana'
        | 'apechain'
        | 'flowMainnet'
        | 'campTestnet'
        | 'sui'
        | 'vanar'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli';
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
      | 'mainnet'
      | 'polygon'
      | 'polygon_mumbai'
      | 'optimism'
      | 'arbitrum'
      | 'binance'
      | 'bscTestnet'
      | 'avalanche'
      | 'avalancheFuji'
      | 'zksync'
      | 'fantom'
      | 'fantomTestnet'
      | 'base'
      | 'baseSepolia'
      | 'skaleNebula'
      | 'xai'
      | 'berachainArtio'
      | 'solana'
      | 'apechain'
      | 'flowMainnet'
      | 'campTestnet'
      | 'sui'
      | 'vanar'
      | 'sepolia'
      | 'optimism_sepolia'
      | 'arbitrumSepolia'
      | 'goerli'
      | 'optimism_goerli'
      | 'arbitrumGoerli';
  }
}

export interface RuleUpdateResponse {
  id: string;

  /**
   * Reward amount for the loyalty rule
   */
  amount: unknown | null;

  /**
   * Effective end time of the rule
   */
  effectiveEndTime: string | null;

  /**
   * Effective start time of the rule
   */
  effectiveStartTime: string | null;

  /**
   * End time for the loyalty rule
   */
  endTime: string | null;

  /**
   * Frequency of the rule execution
   */
  frequency: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  /**
   * Additional metadata for the loyalty rule
   */
  metadata: RuleUpdateResponse.Metadata;

  /**
   * Name of the loyalty rule
   */
  name: string;

  /**
   * Start time for the loyalty rule
   */
  startTime: string | null;

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
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Time interval for recurring rule execution
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | null;

  /**
   * Whether this rule is required for participation
   */
  isRequired?: boolean;

  /**
   * ID for associated OAuth credentials
   */
  oauthCredentialsId?: string | null;

  /**
   * Type of reward issued by this rule
   */
  rewardType?: 'points' | 'multiplier';

  /**
   * Optional subscription identifier for the rule
   */
  subscriptionIdentifier?: string | null;
}

export namespace RuleUpdateResponse {
  /**
   * Additional metadata for the loyalty rule
   */
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
     * Percentage reward given to a user for their first referral.
     */
    firstReferralReward?: number | null;

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
      | 'Twitch'
      | 'TikTok'
      | 'X(Twitter)'
      | 'Instagram'
      | 'EpicGames'
      | 'YouTube'
      | 'Discord'
      | 'Custom'
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
        | 'mainnet'
        | 'polygon'
        | 'polygon_mumbai'
        | 'optimism'
        | 'arbitrum'
        | 'binance'
        | 'bscTestnet'
        | 'avalanche'
        | 'avalancheFuji'
        | 'zksync'
        | 'fantom'
        | 'fantomTestnet'
        | 'base'
        | 'baseSepolia'
        | 'skaleNebula'
        | 'xai'
        | 'berachainArtio'
        | 'solana'
        | 'apechain'
        | 'flowMainnet'
        | 'campTestnet'
        | 'sui'
        | 'vanar'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli';
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
     * Frequency of the loyalty rule
     */
    frequency: string;

    /**
     * Unique identifier for the organization
     */
    organizationId: string;

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
     * Optional metadata for the loyalty rule
     */
    metadata?: Record<string, unknown>;
  }
}

export interface RuleDeleteResponse {
  id: string;

  deletedAt: string;
}

export interface RuleCompleteResponse {
  message: string;
}

export interface RuleCreateParams {
  /**
   * Reward amount associated with the rule
   */
  amount: unknown | null;

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
    | 'twitter_follow'
    | 'twitter_like'
    | 'twitter_comment'
    | 'connected_discord'
    | 'connected_twitter'
    | 'connected_email'
    | 'profile_completed'
    | 'referred_user'
    | 'code_entry'
    | 'check_in'
    | 'external_rule'
    | 'link_click'
    | 'tweet_liked_by_project'
    | 'twitter_post_hashtag'
    | 'token_hold_erc20'
    | 'snapshot_governance'
    | 'twitter_followers'
    | 'discord_member'
    | 'text_input'
    | 'telegram_messages'
    | 'drip_x_follow'
    | 'drip_x_tweet'
    | 'drip_x_new_tweet'
    | 'drip_x_text_in_bio'
    | 'drip_x_text_in_name'
    | 'smart_contract_event'
    | 'create_partner_account'
    | 'telegram_join'
    | 'connected_telegram'
    | 'manual_upload'
    | 'connect_wallet'
    | 'connected_steam';

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
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | null;

  /**
   * Whether this rule is mandatory
   */
  isRequired?: boolean;

  /**
   * Blockchain network where the rule will apply
   */
  network?:
    | 'mainnet'
    | 'polygon'
    | 'polygon_mumbai'
    | 'optimism'
    | 'arbitrum'
    | 'binance'
    | 'bscTestnet'
    | 'avalanche'
    | 'avalancheFuji'
    | 'zksync'
    | 'fantom'
    | 'fantomTestnet'
    | 'base'
    | 'baseSepolia'
    | 'skaleNebula'
    | 'xai'
    | 'berachainArtio'
    | 'solana'
    | 'apechain'
    | 'flowMainnet'
    | 'campTestnet'
    | 'sui'
    | 'vanar'
    | 'sepolia'
    | 'optimism_sepolia'
    | 'arbitrumSepolia'
    | 'goerli'
    | 'optimism_goerli'
    | 'arbitrumGoerli';

  /**
   * OAuth credentials associated with the rule
   */
  oauthCredentialsId?: string | null;

  /**
   * Type of reward issued by the rule
   */
  rewardType?: 'points' | 'multiplier';

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
     * Percentage reward given to a user for their first referral.
     */
    firstReferralReward?: number | null;

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
      | 'Twitch'
      | 'TikTok'
      | 'X(Twitter)'
      | 'Instagram'
      | 'EpicGames'
      | 'YouTube'
      | 'Discord'
      | 'Custom'
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
        | 'mainnet'
        | 'polygon'
        | 'polygon_mumbai'
        | 'optimism'
        | 'arbitrum'
        | 'binance'
        | 'bscTestnet'
        | 'avalanche'
        | 'avalancheFuji'
        | 'zksync'
        | 'fantom'
        | 'fantomTestnet'
        | 'base'
        | 'baseSepolia'
        | 'skaleNebula'
        | 'xai'
        | 'berachainArtio'
        | 'solana'
        | 'apechain'
        | 'flowMainnet'
        | 'campTestnet'
        | 'sui'
        | 'vanar'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli';
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
      | 'mainnet'
      | 'polygon'
      | 'polygon_mumbai'
      | 'optimism'
      | 'arbitrum'
      | 'binance'
      | 'bscTestnet'
      | 'avalanche'
      | 'avalancheFuji'
      | 'zksync'
      | 'fantom'
      | 'fantomTestnet'
      | 'base'
      | 'baseSepolia'
      | 'skaleNebula'
      | 'xai'
      | 'berachainArtio'
      | 'solana'
      | 'apechain'
      | 'flowMainnet'
      | 'campTestnet'
      | 'sui'
      | 'vanar'
      | 'sepolia'
      | 'optimism_sepolia'
      | 'arbitrumSepolia'
      | 'goerli'
      | 'optimism_goerli'
      | 'arbitrumGoerli';
  }
}

export interface RuleUpdateParams {
  /**
   * Reward amount for the loyalty rule
   */
  amount: unknown | null;

  /**
   * Effective end time of the rule
   */
  effectiveEndTime: string | null;

  /**
   * Effective start time of the rule
   */
  effectiveStartTime: string | null;

  /**
   * End time for the loyalty rule
   */
  endTime: string | null;

  /**
   * Frequency of the rule execution
   */
  frequency: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  /**
   * Additional metadata for the loyalty rule
   */
  metadata: RuleUpdateParams.Metadata;

  /**
   * Name of the loyalty rule
   */
  name: string;

  /**
   * Start time for the loyalty rule
   */
  startTime: string | null;

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
   * Whether to hide this rule in the user interface
   */
  hideInUi?: boolean;

  /**
   * Time interval for recurring rule execution
   */
  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | null;

  /**
   * Whether this rule is required for participation
   */
  isRequired?: boolean;

  /**
   * ID for associated OAuth credentials
   */
  oauthCredentialsId?: string | null;

  /**
   * Type of reward issued by this rule
   */
  rewardType?: 'points' | 'multiplier';

  /**
   * Optional subscription identifier for the rule
   */
  subscriptionIdentifier?: string | null;
}

export namespace RuleUpdateParams {
  /**
   * Additional metadata for the loyalty rule
   */
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
     * Percentage reward given to a user for their first referral.
     */
    firstReferralReward?: number | null;

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
      | 'Twitch'
      | 'TikTok'
      | 'X(Twitter)'
      | 'Instagram'
      | 'EpicGames'
      | 'YouTube'
      | 'Discord'
      | 'Custom'
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
        | 'mainnet'
        | 'polygon'
        | 'polygon_mumbai'
        | 'optimism'
        | 'arbitrum'
        | 'binance'
        | 'bscTestnet'
        | 'avalanche'
        | 'avalancheFuji'
        | 'zksync'
        | 'fantom'
        | 'fantomTestnet'
        | 'base'
        | 'baseSepolia'
        | 'skaleNebula'
        | 'xai'
        | 'berachainArtio'
        | 'solana'
        | 'apechain'
        | 'flowMainnet'
        | 'campTestnet'
        | 'sui'
        | 'vanar'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli';
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
   * Maximum number of records to return (max 1000)
   */
  limit?: number;

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

export interface RuleCompleteParams {
  /**
   * Wallet address of the user can only be used if userId is not provided
   */
  walletAddress: string;

  /**
   * Unique identifier for the user
   */
  userId?: string;

  /**
   * Optional verification code for completing the loyalty rule
   */
  verificationCode?: string;
}

export declare namespace Rules {
  export {
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleCompleteResponse as RuleCompleteResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleCompleteParams as RuleCompleteParams,
  };
}
