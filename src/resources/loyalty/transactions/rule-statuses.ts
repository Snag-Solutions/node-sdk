// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class RuleStatuses extends APIResource {
  /**
   * Update a loyalty rule status
   *
   * @example
   * ```ts
   * const ruleStatus =
   *   await client.loyalty.transactions.ruleStatuses.update({
   *     loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174030',
   *   });
   * ```
   */
  update(
    body: RuleStatusUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleStatusUpdateResponse> {
    return this._client.post('/api/loyalty/rule_statuses', { body, ...options });
  }

  /**
   * Retrieve loyalty rule statuses
   *
   * @example
   * ```ts
   * const ruleStatuses =
   *   await client.loyalty.transactions.ruleStatuses.list();
   * ```
   */
  list(query?: RuleStatusListParams, options?: Core.RequestOptions): Core.APIPromise<RuleStatusListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RuleStatusListResponse>;
  list(
    query: RuleStatusListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleStatusListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/loyalty/rule_statuses', { query, ...options });
  }
}

export interface RuleStatusUpdateResponse {
  id: string;

  createdAt: string;

  loyaltyRuleId: string;

  organizationId: string;

  progress: number;

  updatedAt: string;

  userId: string;

  websiteId: string;
}

export interface RuleStatusListResponse {
  data: Array<RuleStatusListResponse.Data>;

  hasNextPage: boolean;
}

export namespace RuleStatusListResponse {
  export interface Data {
    id: string;

    createdAt: string;

    loyaltyRuleId: string;

    organizationId: string;

    progress: number;

    updatedAt: string;

    userId: string;

    websiteId: string;
  }
}

export interface RuleStatusUpdateParams {
  /**
   * Unique identifier for the loyalty rule
   */
  loyaltyRuleId: string;

  /**
   * Increment progress of the loyalty rule
   */
  incProgress?: number;

  /**
   * Unique identifier for the organization
   */
  organizationId?: string;

  /**
   * Progress of the loyalty rule
   */
  progress?: number;

  /**
   * Unique identifier for the user, either userId or walletAddress must be provided
   */
  userId?: string;

  /**
   * Unique identifier for the wallet address, either userId or walletAddress must be
   * provided
   */
  walletAddress?: string;

  /**
   * Unique identifier for the website
   */
  websiteId?: string;
}

export interface RuleStatusListParams {
  /**
   * Number of items to return
   */
  limit?: number | null;

  /**
   * Unique identifier(s) for the loyalty rule(s). Accepts a single ID or an array
   * (up to 100); for larger sets, batch requests to avoid URL length limits.
   */
  loyaltyRuleId?: string | Array<string>;

  /**
   * Unique identifier for the organization
   */
  organizationId?: string;

  /**
   * Starting after item
   */
  startingAfter?: string;

  userGroupExternalIdentifier?: string;

  userGroupId?: string;

  /**
   * User ID(s) to filter accounts by
   */
  userId?: string | Array<string>;

  /**
   * Wallet address(es) to filter accounts by
   */
  walletAddress?: string | Array<string>;

  /**
   * Unique identifier for the website
   */
  websiteId?: string;
}

export declare namespace RuleStatuses {
  export {
    type RuleStatusUpdateResponse as RuleStatusUpdateResponse,
    type RuleStatusListResponse as RuleStatusListResponse,
    type RuleStatusUpdateParams as RuleStatusUpdateParams,
    type RuleStatusListParams as RuleStatusListParams,
  };
}
