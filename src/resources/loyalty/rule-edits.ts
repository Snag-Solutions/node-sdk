// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class RuleEdits extends APIResource {
  /**
   * Retrieve configured loyalty rule edits with optional pagination and filters
   *
   * @example
   * ```ts
   * const ruleEdits = await client.loyalty.ruleEdits.list({
   *   loyaltyRuleId: true,
   * });
   * ```
   */
  list(query: RuleEditListParams, options?: Core.RequestOptions): Core.APIPromise<RuleEditListResponse> {
    return this._client.get('/api/loyalty/rule_edits', { query, ...options });
  }

  /**
   * Restore a loyalty rule from a rule edit
   *
   * @example
   * ```ts
   * const response = await client.loyalty.ruleEdits.restore(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  restore(
    id: string,
    body?: RuleEditRestoreParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEditRestoreResponse> {
    return this._client.post(`/api/loyalty/rule_edits/${id}/restore`, { body, ...options });
  }
}

export interface RuleEditListResponse {
  data: Array<RuleEditListResponse.Data>;

  hasNextPage: boolean;
}

export namespace RuleEditListResponse {
  export interface Data {
    /**
     * Unique identifier for the rule edit
     */
    id: string;

    /**
     * Type of action that was made on the rule
     */
    action: 'create' | 'update' | 'delete' | 'restore';

    /**
     * Data that was changed on the rule
     */
    data: Data.Data;

    /**
     * Timestamp of when the rule edit was made
     */
    editedAt: string;

    /**
     * User ID of the user who made the edit
     */
    editedByUserId: string;

    /**
     * ID of the loyalty rule
     */
    loyaltyRuleId: string;

    /**
     * Unique identifier for the organization
     */
    organizationId: string;

    /**
     * Unique identifier for the website
     */
    websiteId: string;

    /**
     * Comment that was made on the edit
     */
    comment?: string;

    /**
     * Previous data of the rule before the edit
     */
    previousData?: Data.PreviousData;
  }

  export namespace Data {
    /**
     * Data that was changed on the rule
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
      metadata?: { [key: string]: Data.Metadata };
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
        completeProfileConditions?: { [key: string]: boolean } | null;

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
         * Flag indicating if the rule can also reward badges per range.
         */
        rewardBadgePerRange?: boolean;

        /**
         * Flag indicating if the reward is rewarded by batch.
         */
        rewardByBatch?: boolean | null;

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
        walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton' | 'cosmos' | 'ultra' | 'agw' | null;

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
            | 'optimism'
            | 'polygon'
            | 'polygon_mumbai'
            | 'skaleNebula'
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
            | 'optimism'
            | 'polygon'
            | 'polygon_mumbai'
            | 'skaleNebula'
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
            | 'basecamp';

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

    /**
     * Previous data of the rule before the edit
     */
    export interface PreviousData {
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
      metadata?: { [key: string]: PreviousData.Metadata };
    }

    export namespace PreviousData {
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
        completeProfileConditions?: { [key: string]: boolean } | null;

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
         * Flag indicating if the rule can also reward badges per range.
         */
        rewardBadgePerRange?: boolean;

        /**
         * Flag indicating if the reward is rewarded by batch.
         */
        rewardByBatch?: boolean | null;

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
        walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton' | 'cosmos' | 'ultra' | 'agw' | null;

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
            | 'optimism'
            | 'polygon'
            | 'polygon_mumbai'
            | 'skaleNebula'
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
            | 'optimism'
            | 'polygon'
            | 'polygon_mumbai'
            | 'skaleNebula'
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
            | 'basecamp';

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
}

export interface RuleEditRestoreResponse {
  /**
   * Unique identifier for the rule edit
   */
  id: string;

  /**
   * Type of action that was made on the rule
   */
  action: 'create' | 'update' | 'delete' | 'restore';

  /**
   * Data that was changed on the rule
   */
  data: RuleEditRestoreResponse.Data;

  /**
   * Timestamp of when the rule edit was made
   */
  editedAt: string;

  /**
   * User ID of the user who made the edit
   */
  editedByUserId: string;

  /**
   * ID of the loyalty rule
   */
  loyaltyRuleId: string;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Unique identifier for the website
   */
  websiteId: string;

  /**
   * Comment that was made on the edit
   */
  comment?: string;

  /**
   * Previous data of the rule before the edit
   */
  previousData?: RuleEditRestoreResponse.PreviousData;
}

export namespace RuleEditRestoreResponse {
  /**
   * Data that was changed on the rule
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
    metadata?: { [key: string]: Data.Metadata };
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
      completeProfileConditions?: { [key: string]: boolean } | null;

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
       * Flag indicating if the rule can also reward badges per range.
       */
      rewardBadgePerRange?: boolean;

      /**
       * Flag indicating if the reward is rewarded by batch.
       */
      rewardByBatch?: boolean | null;

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
      walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton' | 'cosmos' | 'ultra' | 'agw' | null;

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
          | 'optimism'
          | 'polygon'
          | 'polygon_mumbai'
          | 'skaleNebula'
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
          | 'optimism'
          | 'polygon'
          | 'polygon_mumbai'
          | 'skaleNebula'
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
          | 'basecamp';

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

  /**
   * Previous data of the rule before the edit
   */
  export interface PreviousData {
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
    metadata?: { [key: string]: PreviousData.Metadata };
  }

  export namespace PreviousData {
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
      completeProfileConditions?: { [key: string]: boolean } | null;

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
       * Flag indicating if the rule can also reward badges per range.
       */
      rewardBadgePerRange?: boolean;

      /**
       * Flag indicating if the reward is rewarded by batch.
       */
      rewardByBatch?: boolean | null;

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
      walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton' | 'cosmos' | 'ultra' | 'agw' | null;

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
          | 'optimism'
          | 'polygon'
          | 'polygon_mumbai'
          | 'skaleNebula'
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
          | 'optimism'
          | 'polygon'
          | 'polygon_mumbai'
          | 'skaleNebula'
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
          | 'basecamp';

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

export interface RuleEditListParams {
  /**
   * ID of the loyalty rule
   */
  loyaltyRuleId: boolean;

  /**
   * Maximum number of edits to return
   */
  limit?: number;

  /**
   * Unique identifier for the organization to filter by
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific rule edit ID
   */
  startingAfter?: string;

  /**
   * Unique identifier for the website to filter by
   */
  websiteId?: string;
}

export interface RuleEditRestoreParams {}

export declare namespace RuleEdits {
  export {
    type RuleEditListResponse as RuleEditListResponse,
    type RuleEditRestoreResponse as RuleEditRestoreResponse,
    type RuleEditListParams as RuleEditListParams,
    type RuleEditRestoreParams as RuleEditRestoreParams,
  };
}
