// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class RuleEdits extends APIResource {
  /**
   * Retrieve configured loyalty rule edits with optional pagination and filters
   */
  list(query: RuleEditListParams, options?: Core.RequestOptions): Core.APIPromise<RuleEditListResponse> {
    return this._client.get('/api/loyalty/rule_edits', { query, ...options });
  }

  /**
   * Restore a loyalty rule from a rule edit
   */
  restore(
    id: string,
    body?: RuleEditRestoreParams | null | undefined,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEditRestoreResponse> {
    return this._client.post(`/api/loyalty/rule_edits/${id}/restore`, { body, ...options });
  }
}

export interface RuleEditListResponse {
  data: Array<RuleEditListResponse.Data>;

  hasNextPage: boolean;
}

export namespace RuleEditListResponse {
  export interface Data {
    /**
     * Unique identifier for the rule edit
     */
    id: string;

    /**
     * Type of action that was made on the rule
     */
    action: 'create' | 'update' | 'delete' | 'restore';

    /**
     * Data that was changed on the rule
     */
    data: Data.Data;

    /**
     * Timestamp of when the rule edit was made
     */
    editedAt: string;

    /**
     * User ID of the user who made the edit
     */
    editedByUserId: string;

    /**
     * ID of the loyalty rule
     */
    loyaltyRuleId: string;

    /**
     * Unique identifier for the organization
     */
    organizationId: string;

    /**
     * Unique identifier for the website
     */
    websiteId: string;

    /**
     * Comment that was made on the edit
     */
    comment?: string;

    /**
     * Previous data of the rule before the edit
     */
    previousData?: Data.PreviousData;
  }

  export namespace Data {
    /**
     * Data that was changed on the rule
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

    /**
     * Previous data of the rule before the edit
     */
    export interface PreviousData {
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
}

export interface RuleEditRestoreResponse {
  /**
   * Unique identifier for the rule edit
   */
  id: string;

  /**
   * Type of action that was made on the rule
   */
  action: 'create' | 'update' | 'delete' | 'restore';

  /**
   * Data that was changed on the rule
   */
  data: RuleEditRestoreResponse.Data;

  /**
   * Timestamp of when the rule edit was made
   */
  editedAt: string;

  /**
   * User ID of the user who made the edit
   */
  editedByUserId: string;

  /**
   * ID of the loyalty rule
   */
  loyaltyRuleId: string;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Unique identifier for the website
   */
  websiteId: string;

  /**
   * Comment that was made on the edit
   */
  comment?: string;

  /**
   * Previous data of the rule before the edit
   */
  previousData?: RuleEditRestoreResponse.PreviousData;
}

export namespace RuleEditRestoreResponse {
  /**
   * Data that was changed on the rule
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

  /**
   * Previous data of the rule before the edit
   */
  export interface PreviousData {
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

export interface RuleEditListParams {
  /**
   * ID of the loyalty rule
   */
  loyaltyRuleId: boolean;

  /**
   * Maximum number of edits to return
   */
  limit?: number;

  /**
   * Unique identifier for the organization to filter by
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific rule edit ID
   */
  startingAfter?: string;

  /**
   * Unique identifier for the website to filter by
   */
  websiteId?: string;
}

export interface RuleEditRestoreParams {}

export declare namespace RuleEdits {
  export {
    type RuleEditListResponse as RuleEditListResponse,
    type RuleEditRestoreResponse as RuleEditRestoreResponse,
    type RuleEditListParams as RuleEditListParams,
    type RuleEditRestoreParams as RuleEditRestoreParams,
  };
}
