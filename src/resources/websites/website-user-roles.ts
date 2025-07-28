// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class WebsiteUserRoles extends APIResource {
  /**
   * Retrieves roles of users for a specific website. If userId is provided,
   * retrieves the role of that specific user for the website.
   *
   * @example
   * ```ts
   * const websiteUserRoles =
   *   await client.websites.websiteUserRoles.list({
   *     websiteId: '123e4567-e89b-12d3-a456-426614174000',
   *   });
   * ```
   */
  list(
    query: WebsiteUserRoleListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsiteUserRoleListResponse> {
    return this._client.get('/api/website_user_roles', { query, ...options });
  }

  /**
   * Assign roles to users for a specific website
   *
   * @example
   * ```ts
   * const response =
   *   await client.websites.websiteUserRoles.assign({
   *     websiteId: '123e4567-e89b-12d3-a456-426614174000',
   *     websiteUserRoles: [
   *       {
   *         roleType: 'WEBSITE_SUPER_ADMIN',
   *         walletAddress:
   *           '0x1234567890abcdef1234567890abcdef12345678',
   *       },
   *     ],
   *   });
   * ```
   */
  assign(
    body: WebsiteUserRoleAssignParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsiteUserRoleAssignResponse> {
    return this._client.post('/api/website_user_roles', { body, ...options });
  }
}

/**
 * Schema for getWebsiteUserRoles response
 */
export interface WebsiteUserRoleListResponse {
  data: Array<WebsiteUserRoleListResponse.Data>;
}

export namespace WebsiteUserRoleListResponse {
  export interface Data {
    /**
     * UUID of the website user role
     */
    id: string;
  }
}

/**
 * Schema for postWebsiteUserRoles response
 */
export interface WebsiteUserRoleAssignResponse {
  data?: unknown;
}

export interface WebsiteUserRoleListParams {
  /**
   * UUID of the website
   */
  websiteId: string;

  /**
   * UUID of the user
   */
  userId?: string;
}

export interface WebsiteUserRoleAssignParams {
  /**
   * UUID of the website
   */
  websiteId: string;

  /**
   * Array of website user roles
   */
  websiteUserRoles: Array<WebsiteUserRoleAssignParams.WebsiteUserRole>;
}

export namespace WebsiteUserRoleAssignParams {
  export interface WebsiteUserRole {
    /**
     * Role type of the user
     */
    roleType:
      | 'WEBSITE_SUPER_ADMIN'
      | 'WEBSITE_ADMIN'
      | 'WEBSITE_MODERATOR'
      | 'WEBSITE_API_KEY'
      | 'STRATUS_API_KEY';

    /**
     * Wallet address of the user
     */
    walletAddress: string;

    /**
     * Deletion date of the user role
     */
    deletedAt?: string;
  }
}

export declare namespace WebsiteUserRoles {
  export {
    type WebsiteUserRoleListResponse as WebsiteUserRoleListResponse,
    type WebsiteUserRoleAssignResponse as WebsiteUserRoleAssignResponse,
    type WebsiteUserRoleListParams as WebsiteUserRoleListParams,
    type WebsiteUserRoleAssignParams as WebsiteUserRoleAssignParams,
  };
}
