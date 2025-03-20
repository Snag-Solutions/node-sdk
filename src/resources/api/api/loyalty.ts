// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Loyalty extends APIResource {
  /**
   * Retrieve configured loyalty rule chains
   */
  getRuleChains(
    query: LoyaltyGetRuleChainsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LoyaltyGetRuleChainsResponse> {
    return this._client.get('/api/api/loyalty/rule_chains', { query, ...options });
  }
}

export interface LoyaltyGetRuleChainsResponse {
  data: Array<unknown>;

  hasNextPage: boolean;
}

export interface LoyaltyGetRuleChainsParams {
  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Unique identifier for the website
   */
  websiteId: string;

  /**
   * Number of rule chains to return
   */
  limit?: number | null;

  /**
   * Starting after the given rule chain ID
   */
  startingAfter?: string;
}

export declare namespace Loyalty {
  export {
    type LoyaltyGetRuleChainsResponse as LoyaltyGetRuleChainsResponse,
    type LoyaltyGetRuleChainsParams as LoyaltyGetRuleChainsParams,
  };
}
