// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class WebsiteUserRoles extends APIResource {
  /**
   * Assign roles to users for a specific website
   */
  assignRolesToUsers(
    body: WebsiteUserRoleAssignRolesToUsersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsiteUserRoleAssignRolesToUsersResponse> {
    return this._client.post('/api/website_user_roles', { body, ...options });
  }

  /**
   * Retrieves roles of users for a specific website. If userId is provided,
   * retrieves the role of that specific user for the website.
   */
  getWebsiteUserRoles(
    query: WebsiteUserRoleGetWebsiteUserRolesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsiteUserRoleGetWebsiteUserRolesResponse> {
    return this._client.get('/api/website_user_roles', { query, ...options });
  }
}

/**
 * Schema for postWebsiteUserRoles response
 */
export interface WebsiteUserRoleAssignRolesToUsersResponse {
  data?: unknown;
}

/**
 * Schema for getWebsiteUserRoles response
 */
export interface WebsiteUserRoleGetWebsiteUserRolesResponse {
  data: Array<WebsiteUserRoleGetWebsiteUserRolesResponse.Data>;
}

export namespace WebsiteUserRoleGetWebsiteUserRolesResponse {
  export interface Data {
    /**
     * UUID of the website user role
     */
    id: string;
  }
}

export interface WebsiteUserRoleAssignRolesToUsersParams {
  /**
   * UUID of the website
   */
  websiteId: string;

  /**
   * Array of website user roles
   */
  websiteUserRoles: Array<WebsiteUserRoleAssignRolesToUsersParams.WebsiteUserRole>;
}

export namespace WebsiteUserRoleAssignRolesToUsersParams {
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

export interface WebsiteUserRoleGetWebsiteUserRolesParams {
  /**
   * UUID of the website
   */
  websiteId: string;

  /**
   * UUID of the user
   */
  userId?: string;
}

export declare namespace WebsiteUserRoles {
  export {
    type WebsiteUserRoleAssignRolesToUsersResponse as WebsiteUserRoleAssignRolesToUsersResponse,
    type WebsiteUserRoleGetWebsiteUserRolesResponse as WebsiteUserRoleGetWebsiteUserRolesResponse,
    type WebsiteUserRoleAssignRolesToUsersParams as WebsiteUserRoleAssignRolesToUsersParams,
    type WebsiteUserRoleGetWebsiteUserRolesParams as WebsiteUserRoleGetWebsiteUserRolesParams,
  };
}
