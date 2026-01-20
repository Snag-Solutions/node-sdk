// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Posts extends APIResource {
  /**
   * Fetch social posts with pagination and filtering options. Note: Rank is
   * calculated for top 20,000 posts only. Posts beyond this threshold will have a
   * null rank.
   *
   * @example
   * ```ts
   * const posts =
   *   await client.loyalty.transactions.posts.list();
   * ```
   */
  list(query?: PostListParams, options?: Core.RequestOptions): Core.APIPromise<PostListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PostListResponse>;
  list(
    query: PostListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/loyalty/posts', { query, ...options });
  }

  /**
   * Reward a user for their social post.
   *
   * @example
   * ```ts
   * const response =
   *   await client.loyalty.transactions.posts.reward('id', {
   *     amount: 100,
   *     loyaltyCurrencyId:
   *       '123e4567-e89b-12d3-a456-426614174000',
   *   });
   * ```
   */
  reward(
    id: string,
    body: PostRewardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostRewardResponse> {
    return this._client.post(`/api/loyalty/posts/${id}/reward`, { body, ...options });
  }
}

/**
 * Response containing social posts with pagination info
 */
export interface PostListResponse {
  data: Array<PostListResponse.Data>;

  hasNextPage: boolean;
}

export namespace PostListResponse {
  /**
   * A social media post
   */
  export interface Data {
    id: string;

    authorId: string;

    createdAt: string;

    isSeen: boolean;

    loyaltyCurrencyId: string;

    loyaltyRuleId: string;

    mediaType: 'image' | 'video';

    platform: 'twitter' | 'tiktok';

    postType: 'post' | 'comment' | 'repost';

    updatedAt: string;

    userId: string;

    userMetadata: Data.UserMetadata;

    commentCount?: number;

    contentQualityScore?: number | null;

    dynamicScore?: number | null;

    externalIdentifier?: string | null;

    latestReward?: number | null;

    likeCount?: number;

    manualRank?: number | null;

    mediaUrl?: string;

    parentPostId?: string;

    postedAt?: string | null;

    previewUrl?: string;

    rank?: number | null;

    repostCount?: number;

    sentimentScore?: number | null;

    text?: string;

    viewCount?: number;
  }

  export namespace Data {
    export interface UserMetadata {
      twitterUser: string;

      twitterUserFollowersCount: number;

      twitterUserId: string;

      twitterVerifiedAccount: boolean;

      userId: string;

      logoUrl?: string;
    }
  }
}

/**
 * Response containing the reward transaction details
 */
export interface PostRewardResponse {
  success: boolean;

  transaction: PostRewardResponse.Transaction;
}

export namespace PostRewardResponse {
  export interface Transaction {
    id: string;

    amount: number;

    loyaltyCurrencyId: string;
  }
}

export interface PostListParams {
  /**
   * Cursor for pagination
   */
  cursor?: string;

  /**
   * Number of posts to fetch per page
   */
  limit?: number;

  /**
   * Optional UUID of the loyalty post to filter posts
   */
  loyaltyPostId?: string | Array<string>;

  /**
   * UUID of the organization to fetch social posts for
   */
  organizationId?: string;

  /**
   * Sort posts by createdAt or rank
   */
  sortBy?: 'rank' | 'createdAt';

  /**
   * Optional UUID of the user group to filter posts
   */
  userGroupId?: string;

  /**
   * Optional UUID of the user to filter posts
   */
  userId?: string | Array<string>;

  /**
   * UUID of the website to fetch social posts for
   */
  websiteId?: string;
}

export interface PostRewardParams {
  /**
   * Amount to reward
   */
  amount: number;

  /**
   * UUID of the loyalty currency to reward with
   */
  loyaltyCurrencyId: string;
}

export declare namespace Posts {
  export {
    type PostListResponse as PostListResponse,
    type PostRewardResponse as PostRewardResponse,
    type PostListParams as PostListParams,
    type PostRewardParams as PostRewardParams,
  };
}
