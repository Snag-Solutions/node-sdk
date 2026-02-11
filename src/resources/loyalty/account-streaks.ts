// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class AccountStreaks extends APIResource {
  /**
   * Get loyalty account streaks
   *
   * @example
   * ```ts
   * const response =
   *   await client.loyalty.accountStreaks.getStreaks({
   *     loyaltyRuleId:
   *       'loyaltyRuleId=123e4567-e89b-12d3-a456-426614174001&loyaltyRuleId=123e4567-e89b-12d3-a456-426614174002',
   *   });
   * ```
   */
  getStreaks(
    query: AccountStreakGetStreaksParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountStreakGetStreaksResponse> {
    return this._client.get('/api/loyalty/account_streaks', { query, ...options });
  }
}

/**
 * Response schema for getting loyalty account streaks, null if no streak
 */
export type AccountStreakGetStreaksResponse =
  Array<AccountStreakGetStreaksResponse.AccountStreakGetStreaksResponseItem>;

export namespace AccountStreakGetStreaksResponse {
  /**
   * Response schema for getting loyalty account streaks, null if no streak
   */
  export interface AccountStreakGetStreaksResponseItem {
    /**
     * Date and time the streak was created, null if no streak yet
     */
    createdAt: string | null;

    /**
     * Date and time the streak expires, null if no streak yet
     */
    expiresAt: string | null;

    loyaltyRuleId: string;

    milestone: Array<AccountStreakGetStreaksResponseItem.Milestone>;

    /**
     * Number of days in the streak, 0 if no streak
     */
    streakCount: number;

    /**
     * Date and time the streak was last updated, null if no streak yet
     */
    updatedAt: string | null;

    userId: string;

    walletAddress: string;

    /**
     * ID of the loyalty account streak, null if no streak yet
     */
    id?: string;
  }

  export namespace AccountStreakGetStreaksResponseItem {
    export interface Milestone {
      streakAmount: number;

      streakMilestone: number;
    }
  }
}

export interface AccountStreakGetStreaksParams {
  /**
   * Loyalty rule id(s) to filter by, array or single id
   */
  loyaltyRuleId: string | Array<string>;

  /**
   * Maximum number of records to return (max 1000)
   */
  limit?: number;

  /**
   * Unique identifier for the organization
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific resource ID
   */
  startingAfter?: string;

  /**
   * Unique identifier for the user group
   */
  userGroupId?: string;

  /**
   * User id to filter by
   */
  userId?: string;

  /**
   * Wallet address to filter by
   */
  walletAddress?: string;

  /**
   * Unique identifier for the website
   */
  websiteId?: string;
}

export declare namespace AccountStreaks {
  export {
    type AccountStreakGetStreaksResponse as AccountStreakGetStreaksResponse,
    type AccountStreakGetStreaksParams as AccountStreakGetStreaksParams,
  };
}
