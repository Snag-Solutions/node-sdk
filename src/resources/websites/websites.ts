// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as WebsiteCollectionsAPI from './website-collections';
import { WebsiteCollections } from './website-collections';
import * as WebsiteUserRolesAPI from './website-user-roles';
import {
  WebsiteUserRoleAssignParams,
  WebsiteUserRoleAssignResponse,
  WebsiteUserRoleListParams,
  WebsiteUserRoleListResponse,
  WebsiteUserRoles,
} from './website-user-roles';

export class Websites extends APIResource {
  websiteCollections: WebsiteCollectionsAPI.WebsiteCollections = new WebsiteCollectionsAPI.WebsiteCollections(
    this._client,
  );
  websiteUserRoles: WebsiteUserRolesAPI.WebsiteUserRoles = new WebsiteUserRolesAPI.WebsiteUserRoles(
    this._client,
  );

  /**
   * Returns a list of websites. Includes optional query parameters for filtering and
   * pagination.
   *
   * @example
   * ```ts
   * const websites = await client.websites.list();
   * ```
   */
  list(query?: WebsiteListParams, options?: Core.RequestOptions): Core.APIPromise<WebsiteListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<WebsiteListResponse>;
  list(
    query: WebsiteListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsiteListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/websites', { query, ...options });
  }
}

/**
 * Response schema for fetching websites
 */
export interface WebsiteListResponse {
  /**
   * Array of websites
   */
  data: Array<WebsiteListResponse.Data>;

  /**
   * Indicates if more pages are available
   */
  hasNextPage: boolean;
}

export namespace WebsiteListResponse {
  /**
   * Schema representing a website
   */
  export interface Data {
    /**
     * Website ID
     */
    id: string;

    /**
     * Counts of related entities
     */
    _count: Data._Count;

    /**
     * Collections associated with the website
     */
    collections: Array<Data.Collection>;

    /**
     * Website name
     */
    name: string;

    /**
     * Date when terms were signed
     */
    termsSignedAt: string | null;
  }

  export namespace Data {
    /**
     * Counts of related entities
     */
    export interface _Count {
      /**
       * Count of minting contract assets
       */
      mintingContractAssets: number;
    }

    /**
     * Schema representing a collection
     */
    export interface Collection {
      /**
       * Collection ID
       */
      id: string;

      /**
       * URL of the collection image
       */
      imageUrl: string | null;

      /**
       * Collection name
       */
      name: string;

      /**
       * Royalty fee percentage
       */
      royaltyFee: number;

      /**
       * Address to receive royalty fees
       */
      royaltyFeeAddress: string;
    }
  }
}

export interface WebsiteListParams {
  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Filter by name
   */
  name?: string;

  /**
   * Filter by organization ID
   */
  organizationId?: string;

  /**
   * Pagination cursor, start after this ID
   */
  startingAfter?: string;
}

Websites.WebsiteCollections = WebsiteCollections;
Websites.WebsiteUserRoles = WebsiteUserRoles;

export declare namespace Websites {
  export { type WebsiteListResponse as WebsiteListResponse, type WebsiteListParams as WebsiteListParams };

  export { WebsiteCollections as WebsiteCollections };

  export {
    WebsiteUserRoles as WebsiteUserRoles,
    type WebsiteUserRoleListResponse as WebsiteUserRoleListResponse,
    type WebsiteUserRoleAssignResponse as WebsiteUserRoleAssignResponse,
    type WebsiteUserRoleListParams as WebsiteUserRoleListParams,
    type WebsiteUserRoleAssignParams as WebsiteUserRoleAssignParams,
  };
}
