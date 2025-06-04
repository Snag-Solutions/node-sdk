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
  export interface AccountStreakGetStreaksResponseItem {
    id: string;

    createdAt: string;

    expiresAt: string;

    milestone: Array<AccountStreakGetStreaksResponseItem.Milestone>;

    streakCount: number;

    updatedAt: string;

    userId: string;

    walletAddress: string;
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
   * Pagination cursor to start after a specific resource ID
   */
  startingAfter?: string;

  /**
   * User id to filter by
   */
  userId?: string;

  /**
   * Wallet address to filter by
   */
  walletAddress?: string;
}

export declare namespace AccountStreaks {
  export {
    type AccountStreakGetStreaksResponse as AccountStreakGetStreaksResponse,
    type AccountStreakGetStreaksParams as AccountStreakGetStreaksParams,
  };
}
