// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class RuleChains extends APIResource {
  /**
   * Retrieve configured loyalty rule chains
   */
  get(query: RuleChainGetParams, options?: Core.RequestOptions): Core.APIPromise<RuleChainGetResponse> {
    return this._client.get('/api/loyalty/rule_chains', { query, ...options });
  }
}

export interface RuleChainGetResponse {
  data: Array<unknown>;

  hasNextPage: boolean;
}

export interface RuleChainGetParams {
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

export declare namespace RuleChains {
  export { type RuleChainGetResponse as RuleChainGetResponse, type RuleChainGetParams as RuleChainGetParams };
}
