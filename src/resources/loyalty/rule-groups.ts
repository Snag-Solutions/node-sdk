// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class RuleGroups extends APIResource {
  /**
   * Create a new loyalty rule groups
   */
  createRuleGroup(
    body: RuleGroupCreateRuleGroupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGroupCreateRuleGroupResponse> {
    return this._client.post('/api/loyalty/rule_groups/create', { body, ...options });
  }

  /**
   * Delete loyalty rule group by ID
   */
  deleteRuleGroup(id: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/api/loyalty/rule_groups/${id}`, options);
  }

  /**
   * Retrieve configured loyalty rule groups
   */
  getRuleGroups(
    query?: RuleGroupGetRuleGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGroupGetRuleGroupsResponse>;
  getRuleGroups(options?: Core.RequestOptions): Core.APIPromise<RuleGroupGetRuleGroupsResponse>;
  getRuleGroups(
    query: RuleGroupGetRuleGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGroupGetRuleGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.getRuleGroups({}, query);
    }
    return this._client.get('/api/loyalty/rule_groups', { query, ...options });
  }

  /**
   * Update loyalty rule group by ID
   */
  updateRuleGroup(
    id: string,
    body?: RuleGroupUpdateRuleGroupParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGroupUpdateRuleGroupResponse>;
  updateRuleGroup(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGroupUpdateRuleGroupResponse>;
  updateRuleGroup(
    id: string,
    body: RuleGroupUpdateRuleGroupParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGroupUpdateRuleGroupResponse> {
    if (isRequestOptions(body)) {
      return this.updateRuleGroup(id, {}, body);
    }
    return this._client.post(`/api/loyalty/rule_groups/${id}`, { body, ...options });
  }
}

export interface RuleGroupCreateRuleGroupResponse {
  id: string;

  createdAt: string;

  isCollapsible: boolean;

  isRequired: boolean;

  name: string;

  organizationId: string;

  sortId: number;

  subTitle: string | null;

  updatedAt: string;

  websiteId: string;
}

export type RuleGroupDeleteRuleGroupResponse = unknown;

export interface RuleGroupGetRuleGroupsResponse {
  data: Array<RuleGroupGetRuleGroupsResponse.Data>;

  hasNextPage: boolean;
}

export namespace RuleGroupGetRuleGroupsResponse {
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

        loyaltyBadge: LoyaltyRule.LoyaltyBadge;

        loyaltyCurrencyId: string;

        mediaUrl: string | null;

        metadata: LoyaltyRule.Metadata;

        name: string;

        rewardType: 'points' | 'multiplier' | 'badge';

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
          | 'poll'
          | 'steam_wishlist'
          | 'liquidity_uniswap_v2'
          | 'liquidity_uniswap_v3'
          | 'youtube_subscribers'
          | 'youtube_comment';
      }

      export namespace LoyaltyRule {
        export interface LoyaltyBadge {
          id: string;

          description: string | null;

          imageUrl: string | null;

          name: string;
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
  }
}

export interface RuleGroupUpdateRuleGroupResponse {
  isCollapsible?: boolean;

  name?: string;

  subTitle?: string;
}

export interface RuleGroupCreateRuleGroupParams {
  name: string;

  organizationId: string;

  websiteId: string;

  isCollapsible?: boolean;

  isRequired?: boolean;

  sortId?: number;

  subTitle?: string;
}

export interface RuleGroupGetRuleGroupsParams {
  excludeHidden?: string;

  limit?: number;

  organizationId?: string;

  startingAfter?: string;

  websiteId?: string;
}

export interface RuleGroupUpdateRuleGroupParams {
  isCollapsible?: boolean;

  name?: string | null;

  subtitle?: string | null;
}

export declare namespace RuleGroups {
  export {
    type RuleGroupCreateRuleGroupResponse as RuleGroupCreateRuleGroupResponse,
    type RuleGroupDeleteRuleGroupResponse as RuleGroupDeleteRuleGroupResponse,
    type RuleGroupGetRuleGroupsResponse as RuleGroupGetRuleGroupsResponse,
    type RuleGroupUpdateRuleGroupResponse as RuleGroupUpdateRuleGroupResponse,
    type RuleGroupCreateRuleGroupParams as RuleGroupCreateRuleGroupParams,
    type RuleGroupGetRuleGroupsParams as RuleGroupGetRuleGroupsParams,
    type RuleGroupUpdateRuleGroupParams as RuleGroupUpdateRuleGroupParams,
  };
}
