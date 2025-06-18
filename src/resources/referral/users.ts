// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Users extends APIResource {
  /**
   * This endpoint allows you to create a referral user
   *
   * @example
   * ```ts
   * const user = await client.referral.users.create({
   *   userIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
   * });
   * ```
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserCreateResponse> {
    return this._client.post('/api/referral/users', { body, ...options });
  }

  /**
   * This endpoint allows you to get referrals
   *
   * @example
   * ```ts
   * const users = await client.referral.users.list({
   *   walletAddress: 'string',
   * });
   * ```
   */
  list(query: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/api/referral/users', { query, ...options });
  }
}

export interface UserCreateResponse {
  message: string;
}

export interface UserListResponse {
  data: Array<UserListResponse.Data>;

  hasNextPage: boolean;
}

export namespace UserListResponse {
  export interface Data {
    id: string;

    referralCode: Data.ReferralCode;

    user: Data.User;
  }

  export namespace Data {
    export interface ReferralCode {
      id: string;

      /**
       * This will only return data for earnings after 2025-04-24
       */
      amount: number;

      createdAt: string;

      deletedAt: string | null;

      referralCode: string;

      /**
       * This will only return data for earnings after 2025-04-24
       */
      tier1Amount: number;

      /**
       * This will only return data for earnings after 2025-04-24
       */
      tier2Amount: number;

      updatedAt: string;

      userId: string;
    }

    export interface User {
      id: string;

      walletAddress: string;
    }
  }
}

export interface UserCreateParams {
  userIds: Array<string>;

  referralCode?: string;

  referralCodeId?: string;
}

export interface UserListParams {
  walletAddress: string | Array<string>;

  limit?: number;

  loyaltyRuleId?: string;

  organizationId?: string;

  startingAfter?: string;

  websiteId?: string;
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserListParams as UserListParams,
  };
}
