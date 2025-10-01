// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
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

export declare namespace RuleStatuses {
  export {
    type RuleStatusUpdateResponse as RuleStatusUpdateResponse,
    type RuleStatusUpdateParams as RuleStatusUpdateParams,
  };
}
