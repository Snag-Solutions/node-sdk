// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Users extends APIResource {
  /**
   * This endpoint allows you to create a referral user
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserCreateResponse> {
    return this._client.post('/api/referral/users', { body, ...options });
  }

  /**
   * This endpoint allows you to get referrals
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

      createdAt: string;

      deletedAt: string | null;

      referralCode: string;

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

  includeEligibility?: boolean | null;

  limit?: number;

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
