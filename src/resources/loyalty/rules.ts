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
}

export interface RuleCreateResponse {
  id: string;

  amount: unknown | null;

  effectiveEndTime: string | null;

  effectiveStartTime: string | null;

  endTime: string | null;

  frequency: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  loyaltyCurrencyId: string;

  metadata: RuleCreateResponse.Metadata;

  name: string;

  organizationId: string;

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

  websiteId: string;

  backgroundAssetUrl?: string;

  collectionAddress?: string;

  collections?: Array<RuleCreateResponse.Collection> | null;

  customRewardsApiUrl?: string | null;

  customRewardsCsvUrl?: string | null;

  description?: string;

  hideInUi?: boolean;

  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | null;

  isRequired?: boolean;

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

  oauthCredentialsId?: string | null;

  rewardType?: 'points' | 'multiplier';

  subscriptionIdentifier?: string | null;
}

export namespace RuleCreateResponse {
  export interface Metadata {
    buttonText?: string | null;

    checkComment?: boolean | null;

    checkLike?: boolean | null;

    checkRepost?: boolean | null;

    checkText?: string | null;

    collection?: Array<Metadata.Collection>;

    cta?: Metadata.Cta | null;

    customRewardsApiKey?: string;

    discordServersToJoin?: Array<Metadata.DiscordServersToJoin> | null;

    dripQuestsToComplete?: Array<Metadata.DripQuestsToComplete> | null;

    enableJoinDiscordServers?: boolean | null;

    enableStreaks?: boolean | null;

    enableVerifiedMultiplier?: boolean;

    firstReferralReward?: number | null;

    hasNeverSold?: boolean;

    hasPaidFullRoyalty?: boolean;

    hasSaleCurrency?: boolean;

    hasVerifiedTwitter?: boolean;

    imageUrl?: string | null;

    isMultiplierApplied?: boolean;

    isRetroactive?: boolean | null;

    isTokenHoldMultiplier?: boolean;

    link?: string | null;

    maxQty?: number | null;

    minQty?: number | null;

    multiplierLoyaltyCurrencyIds?: Array<string> | null;

    onlyKnownUsers?: boolean;

    onlyNative?: boolean;

    onlyNonListed?: boolean;

    promoCode?: string;

    range?: Array<Metadata.Range>;

    referralRequirements?: Metadata.ReferralRequirements | null;

    referrerReward?: number | null;

    rewardPerImpression?: boolean | null;

    saleCurrency?: string;

    secondReferralReward?: number | null;

    smartContract?: Metadata.SmartContract;

    snapshotProposals?: Array<Metadata.SnapshotProposal> | null;

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

    socialPlatformLogo?: string | null;

    socialPlatformName?: string | null;

    streakArray?: Array<Metadata.StreakArray> | null;

    telegramChannelId?: string | null;

    timeDelayToVerifySeconds?: string | number | null;

    twitterAccountUrl?: string;

    twitterHashtag?: string;

    twitterPostUrl?: string;

    twitterUserId?: string;

    twitterUsername?: string;

    verificationTextMinimumLength?: number | null;

    verifiedMultiplier?: number | null;

    verifyPlaceHolderText?: string | null;

    walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton' | null;
  }

  export namespace Metadata {
    export interface Collection {
      address?: string;

      multiplier?: number;

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

    export interface Cta {
      href?: string | null;

      label?: string | null;
    }

    export interface DiscordServersToJoin {
      id?: string;

      channels?: Array<DiscordServersToJoin.Channel>;

      roles?: Array<DiscordServersToJoin.Role>;
    }

    export namespace DiscordServersToJoin {
      export interface Channel {
        emojis: Array<Channel.Emoji>;

        id?: string;
      }

      export namespace Channel {
        export interface Emoji {
          id?: string;
        }
      }

      export interface Role {
        id: string;
      }
    }

    export interface DripQuestsToComplete {
      id: string;
    }

    export interface Range {
      amount: number;

      endRange: number;

      startRange: number;
    }

    export interface ReferralRequirements {
      achievePoints?: boolean | null;

      completeProfile?: boolean | null;

      connectDiscord?: boolean | null;

      connectEmail?: boolean | null;

      connectTwitter?: boolean | null;

      points?: ReferralRequirements.Points | null;
    }

    export namespace ReferralRequirements {
      export interface Points {
        amount?: number | null;

        loyaltyCurrecyId?: string | null;
      }
    }

    export interface SmartContract {
      abi?: string | null;

      addressMapping?: string | null;

      bonus?: Array<SmartContract.Bonus> | null;

      criteria?: 'everyEvent' | 'byParameter' | null;

      customRange?: SmartContract.CustomRange | null;

      event?: string | null;

      max?: number | null;

      params?: Array<SmartContract.Param> | null;

      withBonus?: boolean | null;

      withCustomRange?: boolean | null;

      withMax?: boolean | null;
    }

    export namespace SmartContract {
      export interface Bonus {
        amount?: number | null;

        count?: number | null;
      }

      export interface CustomRange {
        endsAt?: string | null;

        startsAt?: string | null;
      }

      export interface Param {
        condition?: string | null;

        name?: string | null;

        value?: string | null;
      }
    }

    export interface SnapshotProposal {
      id: string;

      space: string;
    }

    export interface StreakArray {
      streakAmount: number;

      streakMilestone: number;
    }
  }

  export interface Collection {
    address: string;

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

  amount: unknown | null;

  effectiveEndTime: string | null;

  effectiveStartTime: string | null;

  endTime: string | null;

  frequency: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  metadata: RuleUpdateResponse.Metadata;

  name: string;

  startTime: string | null;

  customRewardsApiUrl?: string | null;

  customRewardsCsvUrl?: string | null;

  description?: string;

  hideInUi?: boolean;

  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | null;

  isRequired?: boolean;

  oauthCredentialsId?: string | null;

  rewardType?: 'points' | 'multiplier';

  subscriptionIdentifier?: string | null;
}

export namespace RuleUpdateResponse {
  export interface Metadata {
    buttonText?: string | null;

    checkComment?: boolean | null;

    checkLike?: boolean | null;

    checkRepost?: boolean | null;

    checkText?: string | null;

    collection?: Array<Metadata.Collection>;

    cta?: Metadata.Cta | null;

    customRewardsApiKey?: string;

    discordServersToJoin?: Array<Metadata.DiscordServersToJoin> | null;

    dripQuestsToComplete?: Array<Metadata.DripQuestsToComplete> | null;

    enableJoinDiscordServers?: boolean | null;

    enableStreaks?: boolean | null;

    enableVerifiedMultiplier?: boolean;

    firstReferralReward?: number | null;

    hasNeverSold?: boolean;

    hasPaidFullRoyalty?: boolean;

    hasSaleCurrency?: boolean;

    hasVerifiedTwitter?: boolean;

    imageUrl?: string | null;

    isMultiplierApplied?: boolean;

    isRetroactive?: boolean | null;

    isTokenHoldMultiplier?: boolean;

    link?: string | null;

    maxQty?: number | null;

    minQty?: number | null;

    multiplierLoyaltyCurrencyIds?: Array<string> | null;

    onlyKnownUsers?: boolean;

    onlyNative?: boolean;

    onlyNonListed?: boolean;

    promoCode?: string;

    range?: Array<Metadata.Range>;

    referralRequirements?: Metadata.ReferralRequirements | null;

    referrerReward?: number | null;

    rewardPerImpression?: boolean | null;

    saleCurrency?: string;

    secondReferralReward?: number | null;

    smartContract?: Metadata.SmartContract;

    snapshotProposals?: Array<Metadata.SnapshotProposal> | null;

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

    socialPlatformLogo?: string | null;

    socialPlatformName?: string | null;

    streakArray?: Array<Metadata.StreakArray> | null;

    telegramChannelId?: string | null;

    timeDelayToVerifySeconds?: string | number | null;

    twitterAccountUrl?: string;

    twitterHashtag?: string;

    twitterPostUrl?: string;

    twitterUserId?: string;

    twitterUsername?: string;

    verificationTextMinimumLength?: number | null;

    verifiedMultiplier?: number | null;

    verifyPlaceHolderText?: string | null;

    walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton' | null;
  }

  export namespace Metadata {
    export interface Collection {
      address?: string;

      multiplier?: number;

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

    export interface Cta {
      href?: string | null;

      label?: string | null;
    }

    export interface DiscordServersToJoin {
      id?: string;

      channels?: Array<DiscordServersToJoin.Channel>;

      roles?: Array<DiscordServersToJoin.Role>;
    }

    export namespace DiscordServersToJoin {
      export interface Channel {
        emojis: Array<Channel.Emoji>;

        id?: string;
      }

      export namespace Channel {
        export interface Emoji {
          id?: string;
        }
      }

      export interface Role {
        id: string;
      }
    }

    export interface DripQuestsToComplete {
      id: string;
    }

    export interface Range {
      amount: number;

      endRange: number;

      startRange: number;
    }

    export interface ReferralRequirements {
      achievePoints?: boolean | null;

      completeProfile?: boolean | null;

      connectDiscord?: boolean | null;

      connectEmail?: boolean | null;

      connectTwitter?: boolean | null;

      points?: ReferralRequirements.Points | null;
    }

    export namespace ReferralRequirements {
      export interface Points {
        amount?: number | null;

        loyaltyCurrecyId?: string | null;
      }
    }

    export interface SmartContract {
      abi?: string | null;

      addressMapping?: string | null;

      bonus?: Array<SmartContract.Bonus> | null;

      criteria?: 'everyEvent' | 'byParameter' | null;

      customRange?: SmartContract.CustomRange | null;

      event?: string | null;

      max?: number | null;

      params?: Array<SmartContract.Param> | null;

      withBonus?: boolean | null;

      withCustomRange?: boolean | null;

      withMax?: boolean | null;
    }

    export namespace SmartContract {
      export interface Bonus {
        amount?: number | null;

        count?: number | null;
      }

      export interface CustomRange {
        endsAt?: string | null;

        startsAt?: string | null;
      }

      export interface Param {
        condition?: string | null;

        name?: string | null;

        value?: string | null;
      }
    }

    export interface SnapshotProposal {
      id: string;

      space: string;
    }

    export interface StreakArray {
      streakAmount: number;

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
  amount: unknown | null;

  effectiveEndTime: string | null;

  effectiveStartTime: string | null;

  endTime: string | null;

  frequency: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  loyaltyCurrencyId: string;

  metadata: RuleCreateParams.Metadata;

  name: string;

  organizationId: string;

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

  websiteId: string;

  backgroundAssetUrl?: string;

  collectionAddress?: string;

  collections?: Array<RuleCreateParams.Collection> | null;

  customRewardsApiUrl?: string | null;

  customRewardsCsvUrl?: string | null;

  description?: string;

  hideInUi?: boolean;

  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | null;

  isRequired?: boolean;

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

  oauthCredentialsId?: string | null;

  rewardType?: 'points' | 'multiplier';

  subscriptionIdentifier?: string | null;
}

export namespace RuleCreateParams {
  export interface Metadata {
    buttonText?: string | null;

    checkComment?: boolean | null;

    checkLike?: boolean | null;

    checkRepost?: boolean | null;

    checkText?: string | null;

    collection?: Array<Metadata.Collection>;

    cta?: Metadata.Cta | null;

    customRewardsApiKey?: string;

    discordServersToJoin?: Array<Metadata.DiscordServersToJoin> | null;

    dripQuestsToComplete?: Array<Metadata.DripQuestsToComplete> | null;

    enableJoinDiscordServers?: boolean | null;

    enableStreaks?: boolean | null;

    enableVerifiedMultiplier?: boolean;

    firstReferralReward?: number | null;

    hasNeverSold?: boolean;

    hasPaidFullRoyalty?: boolean;

    hasSaleCurrency?: boolean;

    hasVerifiedTwitter?: boolean;

    imageUrl?: string | null;

    isMultiplierApplied?: boolean;

    isRetroactive?: boolean | null;

    isTokenHoldMultiplier?: boolean;

    link?: string | null;

    maxQty?: number | null;

    minQty?: number | null;

    multiplierLoyaltyCurrencyIds?: Array<string> | null;

    onlyKnownUsers?: boolean;

    onlyNative?: boolean;

    onlyNonListed?: boolean;

    promoCode?: string;

    range?: Array<Metadata.Range>;

    referralRequirements?: Metadata.ReferralRequirements | null;

    referrerReward?: number | null;

    rewardPerImpression?: boolean | null;

    saleCurrency?: string;

    secondReferralReward?: number | null;

    smartContract?: Metadata.SmartContract;

    snapshotProposals?: Array<Metadata.SnapshotProposal> | null;

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

    socialPlatformLogo?: string | null;

    socialPlatformName?: string | null;

    streakArray?: Array<Metadata.StreakArray> | null;

    telegramChannelId?: string | null;

    timeDelayToVerifySeconds?: string | number | null;

    twitterAccountUrl?: string;

    twitterHashtag?: string;

    twitterPostUrl?: string;

    twitterUserId?: string;

    twitterUsername?: string;

    verificationTextMinimumLength?: number | null;

    verifiedMultiplier?: number | null;

    verifyPlaceHolderText?: string | null;

    walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton' | null;
  }

  export namespace Metadata {
    export interface Collection {
      address?: string;

      multiplier?: number;

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

    export interface Cta {
      href?: string | null;

      label?: string | null;
    }

    export interface DiscordServersToJoin {
      id?: string;

      channels?: Array<DiscordServersToJoin.Channel>;

      roles?: Array<DiscordServersToJoin.Role>;
    }

    export namespace DiscordServersToJoin {
      export interface Channel {
        emojis: Array<Channel.Emoji>;

        id?: string;
      }

      export namespace Channel {
        export interface Emoji {
          id?: string;
        }
      }

      export interface Role {
        id: string;
      }
    }

    export interface DripQuestsToComplete {
      id: string;
    }

    export interface Range {
      amount: number;

      endRange: number;

      startRange: number;
    }

    export interface ReferralRequirements {
      achievePoints?: boolean | null;

      completeProfile?: boolean | null;

      connectDiscord?: boolean | null;

      connectEmail?: boolean | null;

      connectTwitter?: boolean | null;

      points?: ReferralRequirements.Points | null;
    }

    export namespace ReferralRequirements {
      export interface Points {
        amount?: number | null;

        loyaltyCurrecyId?: string | null;
      }
    }

    export interface SmartContract {
      abi?: string | null;

      addressMapping?: string | null;

      bonus?: Array<SmartContract.Bonus> | null;

      criteria?: 'everyEvent' | 'byParameter' | null;

      customRange?: SmartContract.CustomRange | null;

      event?: string | null;

      max?: number | null;

      params?: Array<SmartContract.Param> | null;

      withBonus?: boolean | null;

      withCustomRange?: boolean | null;

      withMax?: boolean | null;
    }

    export namespace SmartContract {
      export interface Bonus {
        amount?: number | null;

        count?: number | null;
      }

      export interface CustomRange {
        endsAt?: string | null;

        startsAt?: string | null;
      }

      export interface Param {
        condition?: string | null;

        name?: string | null;

        value?: string | null;
      }
    }

    export interface SnapshotProposal {
      id: string;

      space: string;
    }

    export interface StreakArray {
      streakAmount: number;

      streakMilestone: number;
    }
  }

  export interface Collection {
    address: string;

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
  amount: unknown | null;

  effectiveEndTime: string | null;

  effectiveStartTime: string | null;

  endTime: string | null;

  frequency: 'none' | 'once' | 'daily' | 'weekly' | 'monthly' | 'immediately';

  metadata: RuleUpdateParams.Metadata;

  name: string;

  startTime: string | null;

  customRewardsApiUrl?: string | null;

  customRewardsCsvUrl?: string | null;

  description?: string;

  hideInUi?: boolean;

  interval?: 'daily' | 'weekly' | 'monthly' | 'once' | null;

  isRequired?: boolean;

  oauthCredentialsId?: string | null;

  rewardType?: 'points' | 'multiplier';

  subscriptionIdentifier?: string | null;
}

export namespace RuleUpdateParams {
  export interface Metadata {
    buttonText?: string | null;

    checkComment?: boolean | null;

    checkLike?: boolean | null;

    checkRepost?: boolean | null;

    checkText?: string | null;

    collection?: Array<Metadata.Collection>;

    cta?: Metadata.Cta | null;

    customRewardsApiKey?: string;

    discordServersToJoin?: Array<Metadata.DiscordServersToJoin> | null;

    dripQuestsToComplete?: Array<Metadata.DripQuestsToComplete> | null;

    enableJoinDiscordServers?: boolean | null;

    enableStreaks?: boolean | null;

    enableVerifiedMultiplier?: boolean;

    firstReferralReward?: number | null;

    hasNeverSold?: boolean;

    hasPaidFullRoyalty?: boolean;

    hasSaleCurrency?: boolean;

    hasVerifiedTwitter?: boolean;

    imageUrl?: string | null;

    isMultiplierApplied?: boolean;

    isRetroactive?: boolean | null;

    isTokenHoldMultiplier?: boolean;

    link?: string | null;

    maxQty?: number | null;

    minQty?: number | null;

    multiplierLoyaltyCurrencyIds?: Array<string> | null;

    onlyKnownUsers?: boolean;

    onlyNative?: boolean;

    onlyNonListed?: boolean;

    promoCode?: string;

    range?: Array<Metadata.Range>;

    referralRequirements?: Metadata.ReferralRequirements | null;

    referrerReward?: number | null;

    rewardPerImpression?: boolean | null;

    saleCurrency?: string;

    secondReferralReward?: number | null;

    smartContract?: Metadata.SmartContract;

    snapshotProposals?: Array<Metadata.SnapshotProposal> | null;

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

    socialPlatformLogo?: string | null;

    socialPlatformName?: string | null;

    streakArray?: Array<Metadata.StreakArray> | null;

    telegramChannelId?: string | null;

    timeDelayToVerifySeconds?: string | number | null;

    twitterAccountUrl?: string;

    twitterHashtag?: string;

    twitterPostUrl?: string;

    twitterUserId?: string;

    twitterUsername?: string;

    verificationTextMinimumLength?: number | null;

    verifiedMultiplier?: number | null;

    verifyPlaceHolderText?: string | null;

    walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton' | null;
  }

  export namespace Metadata {
    export interface Collection {
      address?: string;

      multiplier?: number;

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

    export interface Cta {
      href?: string | null;

      label?: string | null;
    }

    export interface DiscordServersToJoin {
      id?: string;

      channels?: Array<DiscordServersToJoin.Channel>;

      roles?: Array<DiscordServersToJoin.Role>;
    }

    export namespace DiscordServersToJoin {
      export interface Channel {
        emojis: Array<Channel.Emoji>;

        id?: string;
      }

      export namespace Channel {
        export interface Emoji {
          id?: string;
        }
      }

      export interface Role {
        id: string;
      }
    }

    export interface DripQuestsToComplete {
      id: string;
    }

    export interface Range {
      amount: number;

      endRange: number;

      startRange: number;
    }

    export interface ReferralRequirements {
      achievePoints?: boolean | null;

      completeProfile?: boolean | null;

      connectDiscord?: boolean | null;

      connectEmail?: boolean | null;

      connectTwitter?: boolean | null;

      points?: ReferralRequirements.Points | null;
    }

    export namespace ReferralRequirements {
      export interface Points {
        amount?: number | null;

        loyaltyCurrecyId?: string | null;
      }
    }

    export interface SmartContract {
      abi?: string | null;

      addressMapping?: string | null;

      bonus?: Array<SmartContract.Bonus> | null;

      criteria?: 'everyEvent' | 'byParameter' | null;

      customRange?: SmartContract.CustomRange | null;

      event?: string | null;

      max?: number | null;

      params?: Array<SmartContract.Param> | null;

      withBonus?: boolean | null;

      withCustomRange?: boolean | null;

      withMax?: boolean | null;
    }

    export namespace SmartContract {
      export interface Bonus {
        amount?: number | null;

        count?: number | null;
      }

      export interface CustomRange {
        endsAt?: string | null;

        startsAt?: string | null;
      }

      export interface Param {
        condition?: string | null;

        name?: string | null;

        value?: string | null;
      }
    }

    export interface SnapshotProposal {
      id: string;

      space: string;
    }

    export interface StreakArray {
      streakAmount: number;

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
