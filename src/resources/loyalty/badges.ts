// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Badges extends APIResource {
  /**
   * This endpoint allows you to configure a new badge.
   */
  create(body: BadgeCreateParams, options?: Core.RequestOptions): Core.APIPromise<BadgeCreateResponse> {
    return this._client.post('/api/loyalty/badges', { body, ...options });
  }

  /**
   * This endpoint allows you to update an existing badge.
   */
  update(
    id: string,
    body?: BadgeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BadgeUpdateResponse>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<BadgeUpdateResponse>;
  update(
    id: string,
    body: BadgeUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BadgeUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.post(`/api/loyalty/badges/${id}`, { body, ...options });
  }

  /**
   * This endpoint allows you to fetch badge(s) data.
   */
  list(query?: BadgeListParams, options?: Core.RequestOptions): Core.APIPromise<BadgeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BadgeListResponse>;
  list(
    query: BadgeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BadgeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/loyalty/badges', { query, ...options });
  }

  /**
   * This endpoint allows you to delete a badge.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<BadgeDeleteResponse> {
    return this._client.delete(`/api/loyalty/badges/${id}`, options);
  }

  /**
   * This endpoint allows you to revoke a badge from an account
   */
  revoke(
    id: string,
    body?: BadgeRevokeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BadgeRevokeResponse>;
  revoke(id: string, options?: Core.RequestOptions): Core.APIPromise<BadgeRevokeResponse>;
  revoke(
    id: string,
    body: BadgeRevokeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BadgeRevokeResponse> {
    if (isRequestOptions(body)) {
      return this.revoke(id, {}, body);
    }
    return this._client.post(`/api/loyalty/badges/${id}/revoke`, { body, ...options });
  }

  /**
   * This endpoint allows you to reward a badge for an account
   */
  reward(
    id: string,
    body?: BadgeRewardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BadgeRewardResponse>;
  reward(id: string, options?: Core.RequestOptions): Core.APIPromise<BadgeRewardResponse>;
  reward(
    id: string,
    body: BadgeRewardParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BadgeRewardResponse> {
    if (isRequestOptions(body)) {
      return this.reward(id, {}, body);
    }
    return this._client.post(`/api/loyalty/badges/${id}/reward`, { body, ...options });
  }
}

/**
 * Response returned upon successful creation of the badge.
 */
export interface BadgeCreateResponse {
  /**
   * UUID of the badge (converted to lowercase)
   */
  id: string;

  /**
   * The description of the badge
   */
  description: string | null;

  /**
   * The URL of the badge image
   */
  imageUrl: string | null;

  /**
   * Array of conditions of the badge
   */
  loyaltyConditions: Array<BadgeCreateResponse.LoyaltyCondition>;

  /**
   * The name of the badge
   */
  name: string;

  /**
   * Array of user badges
   */
  loyaltyBadgeUsers?: Array<BadgeCreateResponse.LoyaltyBadgeUser>;
}

export namespace BadgeCreateResponse {
  /**
   * Schema for a loyalty condition rule.
   */
  export interface LoyaltyCondition {
    /**
     * UUID of the condition (converted to lowercase)
     */
    id: string;

    /**
     * The amount of the condition
     */
    amount: number | null;

    association: Array<LoyaltyCondition.Association>;

    /**
     * The URL of the CSV file
     */
    csvUrl: string | null;

    /**
     * The description of the condition
     */
    description: string | null;

    /**
     * UUID of the currency (converted to lowercase)
     */
    loyaltyCurrencyId: string | null;

    /**
     * UUID of the rule group (converted to lowercase)
     */
    loyaltyRuleGroupId: string | null;

    /**
     * The repeat count of the condition
     */
    repeatCount: number | null;

    /**
     * The required count of the condition
     */
    requiredCount: number | null;

    /**
     * The type of the condition
     */
    type: 'rule' | 'rules' | 'points' | 'section' | 'level' | 'api' | 'badge' | 'badges' | 'csv';
  }

  export namespace LoyaltyCondition {
    export interface Association {
      loyaltyBadge: Association.LoyaltyBadge | null;

      loyaltyCurrency: Association.LoyaltyCurrency | null;

      loyaltyLeaderboardView: Association.LoyaltyLeaderboardView | null;

      loyaltyRule: Association.LoyaltyRule | null;

      loyaltyRuleGroup: Association.LoyaltyRuleGroup | null;
    }

    export namespace Association {
      export interface LoyaltyBadge {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyCurrency {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyLeaderboardView {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyRule {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyRuleGroup {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }
    }
  }

  export interface LoyaltyBadgeUser {
    /**
     * UUID of the user badge (converted to lowercase)
     */
    id: string;

    /**
     * UUID of the badge (converted to lowercase)
     */
    loyaltyBadgeId: string;

    /**
     * UUID of the organization (converted to lowercase)
     */
    organizationId: string;

    /**
     * The status of the badge
     */
    status: 'active' | 'inactive' | 'revoked';

    /**
     * UUID of the user (converted to lowercase)
     */
    userId: string;

    /**
     * UUID of the website (converted to lowercase)
     */
    websiteId: string;

    /**
     * Array of progress for the badge
     */
    progress?: unknown;
  }
}

/**
 * Response returned upon successful update of the badge.
 */
export interface BadgeUpdateResponse {
  /**
   * UUID of the badge (converted to lowercase)
   */
  id: string;

  /**
   * The description of the badge
   */
  description: string | null;

  /**
   * The URL of the badge image
   */
  imageUrl: string | null;

  /**
   * Array of conditions of the badge
   */
  loyaltyConditions: Array<BadgeUpdateResponse.LoyaltyCondition>;

  /**
   * The name of the badge
   */
  name: string;

  /**
   * Array of user badges
   */
  loyaltyBadgeUsers?: Array<BadgeUpdateResponse.LoyaltyBadgeUser>;
}

export namespace BadgeUpdateResponse {
  /**
   * Schema for a loyalty condition rule.
   */
  export interface LoyaltyCondition {
    /**
     * UUID of the condition (converted to lowercase)
     */
    id: string;

    /**
     * The amount of the condition
     */
    amount: number | null;

    association: Array<LoyaltyCondition.Association>;

    /**
     * The URL of the CSV file
     */
    csvUrl: string | null;

    /**
     * The description of the condition
     */
    description: string | null;

    /**
     * UUID of the currency (converted to lowercase)
     */
    loyaltyCurrencyId: string | null;

    /**
     * UUID of the rule group (converted to lowercase)
     */
    loyaltyRuleGroupId: string | null;

    /**
     * The repeat count of the condition
     */
    repeatCount: number | null;

    /**
     * The required count of the condition
     */
    requiredCount: number | null;

    /**
     * The type of the condition
     */
    type: 'rule' | 'rules' | 'points' | 'section' | 'level' | 'api' | 'badge' | 'badges' | 'csv';
  }

  export namespace LoyaltyCondition {
    export interface Association {
      loyaltyBadge: Association.LoyaltyBadge | null;

      loyaltyCurrency: Association.LoyaltyCurrency | null;

      loyaltyLeaderboardView: Association.LoyaltyLeaderboardView | null;

      loyaltyRule: Association.LoyaltyRule | null;

      loyaltyRuleGroup: Association.LoyaltyRuleGroup | null;
    }

    export namespace Association {
      export interface LoyaltyBadge {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyCurrency {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyLeaderboardView {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyRule {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyRuleGroup {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }
    }
  }

  export interface LoyaltyBadgeUser {
    /**
     * UUID of the user badge (converted to lowercase)
     */
    id: string;

    /**
     * UUID of the badge (converted to lowercase)
     */
    loyaltyBadgeId: string;

    /**
     * UUID of the organization (converted to lowercase)
     */
    organizationId: string;

    /**
     * The status of the badge
     */
    status: 'active' | 'inactive' | 'revoked';

    /**
     * UUID of the user (converted to lowercase)
     */
    userId: string;

    /**
     * UUID of the website (converted to lowercase)
     */
    websiteId: string;

    /**
     * Array of progress for the badge
     */
    progress?: unknown;
  }
}

/**
 * Response returned upon successful fetching of the badges.
 */
export interface BadgeListResponse {
  /**
   * UUID of the badge (converted to lowercase)
   */
  id: string;

  /**
   * The description of the badge
   */
  description: string | null;

  /**
   * The URL of the badge image
   */
  imageUrl: string | null;

  /**
   * Array of conditions of the badge
   */
  loyaltyConditions: Array<BadgeListResponse.LoyaltyCondition>;

  /**
   * The name of the badge
   */
  name: string;

  /**
   * Array of user badges
   */
  loyaltyBadgeUsers?: Array<BadgeListResponse.LoyaltyBadgeUser>;
}

export namespace BadgeListResponse {
  /**
   * Schema for a loyalty condition rule.
   */
  export interface LoyaltyCondition {
    /**
     * UUID of the condition (converted to lowercase)
     */
    id: string;

    /**
     * The amount of the condition
     */
    amount: number | null;

    association: Array<LoyaltyCondition.Association>;

    /**
     * The URL of the CSV file
     */
    csvUrl: string | null;

    /**
     * The description of the condition
     */
    description: string | null;

    /**
     * UUID of the currency (converted to lowercase)
     */
    loyaltyCurrencyId: string | null;

    /**
     * UUID of the rule group (converted to lowercase)
     */
    loyaltyRuleGroupId: string | null;

    /**
     * The repeat count of the condition
     */
    repeatCount: number | null;

    /**
     * The required count of the condition
     */
    requiredCount: number | null;

    /**
     * The type of the condition
     */
    type: 'rule' | 'rules' | 'points' | 'section' | 'level' | 'api' | 'badge' | 'badges' | 'csv';
  }

  export namespace LoyaltyCondition {
    export interface Association {
      loyaltyBadge: Association.LoyaltyBadge | null;

      loyaltyCurrency: Association.LoyaltyCurrency | null;

      loyaltyLeaderboardView: Association.LoyaltyLeaderboardView | null;

      loyaltyRule: Association.LoyaltyRule | null;

      loyaltyRuleGroup: Association.LoyaltyRuleGroup | null;
    }

    export namespace Association {
      export interface LoyaltyBadge {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyCurrency {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyLeaderboardView {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyRule {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyRuleGroup {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }
    }
  }

  export interface LoyaltyBadgeUser {
    /**
     * UUID of the user badge (converted to lowercase)
     */
    id: string;

    /**
     * UUID of the badge (converted to lowercase)
     */
    loyaltyBadgeId: string;

    /**
     * UUID of the organization (converted to lowercase)
     */
    organizationId: string;

    /**
     * The status of the badge
     */
    status: 'active' | 'inactive' | 'revoked';

    /**
     * UUID of the user (converted to lowercase)
     */
    userId: string;

    /**
     * UUID of the website (converted to lowercase)
     */
    websiteId: string;

    /**
     * Array of progress for the badge
     */
    progress?: unknown;
  }
}

/**
 * Response returned upon successful deletion of the badge.
 */
export interface BadgeDeleteResponse {
  /**
   * UUID of the badge (converted to lowercase)
   */
  id: string;

  /**
   * The description of the badge
   */
  description: string | null;

  /**
   * The URL of the badge image
   */
  imageUrl: string | null;

  /**
   * Array of conditions of the badge
   */
  loyaltyConditions: Array<BadgeDeleteResponse.LoyaltyCondition>;

  /**
   * The name of the badge
   */
  name: string;

  /**
   * Array of user badges
   */
  loyaltyBadgeUsers?: Array<BadgeDeleteResponse.LoyaltyBadgeUser>;
}

export namespace BadgeDeleteResponse {
  /**
   * Schema for a loyalty condition rule.
   */
  export interface LoyaltyCondition {
    /**
     * UUID of the condition (converted to lowercase)
     */
    id: string;

    /**
     * The amount of the condition
     */
    amount: number | null;

    association: Array<LoyaltyCondition.Association>;

    /**
     * The URL of the CSV file
     */
    csvUrl: string | null;

    /**
     * The description of the condition
     */
    description: string | null;

    /**
     * UUID of the currency (converted to lowercase)
     */
    loyaltyCurrencyId: string | null;

    /**
     * UUID of the rule group (converted to lowercase)
     */
    loyaltyRuleGroupId: string | null;

    /**
     * The repeat count of the condition
     */
    repeatCount: number | null;

    /**
     * The required count of the condition
     */
    requiredCount: number | null;

    /**
     * The type of the condition
     */
    type: 'rule' | 'rules' | 'points' | 'section' | 'level' | 'api' | 'badge' | 'badges' | 'csv';
  }

  export namespace LoyaltyCondition {
    export interface Association {
      loyaltyBadge: Association.LoyaltyBadge | null;

      loyaltyCurrency: Association.LoyaltyCurrency | null;

      loyaltyLeaderboardView: Association.LoyaltyLeaderboardView | null;

      loyaltyRule: Association.LoyaltyRule | null;

      loyaltyRuleGroup: Association.LoyaltyRuleGroup | null;
    }

    export namespace Association {
      export interface LoyaltyBadge {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyCurrency {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyLeaderboardView {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyRule {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }

      export interface LoyaltyRuleGroup {
        /**
         * UUID of the association (converted to lowercase)
         */
        id: string;

        /**
         * The name of the association
         */
        name: string;
      }
    }
  }

  export interface LoyaltyBadgeUser {
    /**
     * UUID of the user badge (converted to lowercase)
     */
    id: string;

    /**
     * UUID of the badge (converted to lowercase)
     */
    loyaltyBadgeId: string;

    /**
     * UUID of the organization (converted to lowercase)
     */
    organizationId: string;

    /**
     * The status of the badge
     */
    status: 'active' | 'inactive' | 'revoked';

    /**
     * UUID of the user (converted to lowercase)
     */
    userId: string;

    /**
     * UUID of the website (converted to lowercase)
     */
    websiteId: string;

    /**
     * Array of progress for the badge
     */
    progress?: unknown;
  }
}

/**
 * Response returned upon successful update of the user badge
 */
export interface BadgeRevokeResponse {
  data: BadgeRevokeResponse.Data;

  /**
   * The message returned upon update of the badge
   */
  message: string;
}

export namespace BadgeRevokeResponse {
  export interface Data {
    id: string;

    loyaltyBadgeId: string;

    status: 'active' | 'inactive' | 'revoked';

    userId: string;
  }
}

/**
 * Response returned upon successful update of the user badge
 */
export interface BadgeRewardResponse {
  data: BadgeRewardResponse.Data;

  /**
   * The message returned upon update of the badge
   */
  message: string;
}

export namespace BadgeRewardResponse {
  export interface Data {
    id: string;

    loyaltyBadgeId: string;

    status: 'active' | 'inactive' | 'revoked';

    userId: string;
  }
}

export interface BadgeCreateParams {
  /**
   * The URL of the badge image
   */
  imageUrl: string;

  /**
   * The name of the badge
   */
  name: string;

  /**
   * UUID of the organization (optional, converted to lowercase)
   */
  organizationId: string;

  /**
   * Array of rules for the badge
   */
  rules: Array<BadgeCreateParams.Rule>;

  /**
   * UUID of the website (optional, converted to lowercase)
   */
  websiteId: string;

  /**
   * The description of the badge
   */
  description?: string;
}

export namespace BadgeCreateParams {
  export interface Rule {
    /**
     * The type of rule
     */
    type: 'rule' | 'rules' | 'points' | 'section' | 'level' | 'api' | 'badge' | 'badges' | 'csv';

    /**
     * The amount of the rule
     */
    amount?: number | null;

    /**
     * URL of the CSV file (optional)
     */
    csvUrl?: string | null;

    /**
     * The description of the rule
     */
    description?: string | null;

    /**
     * Array of UUIDs of the badge (optional, converted to lowercase)
     */
    loyaltyBadgeIds?: Array<string>;

    /**
     * Array of UUIDs of the currency (optional, converted to lowercase)
     */
    loyaltyCurrencyIds?: Array<string>;

    /**
     * Array of UUIDs of the Loyalty Leaderboard (optional, converted to lowercase)
     */
    loyaltyLeaderboardViewIds?: Array<string>;

    /**
     * UUID of the loyalty rule chain (optional, converted to lowercase)
     */
    loyaltyRuleChainId?: string;

    /**
     * Array of UUIDs of the rule group (optional, converted to lowercase)
     */
    loyaltyRuleGroupIds?: Array<string>;

    /**
     * Array of UUIDs of the rules (optional, converted to lowercase)
     */
    loyaltyRuleIds?: Array<string>;

    /**
     * The number of times the rule should be repeated to fulfill the condition
     */
    repeatCount?: number | null;

    /**
     * The number of rules that need to be fulfilled to satisfy the condition
     */
    requiredCount?: number | null;
  }
}

export interface BadgeUpdateParams {
  /**
   * The description of the badge
   */
  description?: string;

  /**
   * The URL of the badge image
   */
  imageUrl?: string;

  /**
   * The name of the badge
   */
  name?: string;
}

export interface BadgeListParams {
  /**
   * Array of badge IDs (converted to lowercase) to fetch
   */
  badgeIds?: Array<string>;

  /**
   * Include deleted badges in the response
   */
  includeDeleted?: boolean | null;

  /**
   * Number of badges to fetch
   */
  limit?: number;

  /**
   * UUID of the organization (optional, converted to lowercase)
   */
  organizationId?: string;

  /**
   * UUID of the badge to start after (converted to lowercase)
   */
  startingAfter?: string;

  /**
   * UUID of the user, or array of UUID.
   */
  userId?: string | Array<string>;

  /**
   * Wallet Address of the user, or array of wallet addresses.
   */
  walletAddress?: string | Array<string>;

  /**
   * UUID of the website (optional, converted to lowercase)
   */
  websiteId?: string;
}

export interface BadgeRevokeParams {
  /**
   * UUID of the user (converted to lowercase)
   */
  userId?: string;

  /**
   * Validated and formatted wallet address
   */
  walletAddress?: string;
}

export interface BadgeRewardParams {
  /**
   * UUID of the user (converted to lowercase)
   */
  userId?: string;

  /**
   * Validated and formatted wallet address
   */
  walletAddress?: string;
}

export declare namespace Badges {
  export {
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
}
