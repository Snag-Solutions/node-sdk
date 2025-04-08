// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsersAPI from './users';
import { UserCreateParams, UserCreateResponse, UserListParams, UserListResponse, Users } from './users';

export class Referral extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * This endpoint allows you to create a referral code
   */
  createCode(
    body: ReferralCreateCodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferralCreateCodeResponse> {
    return this._client.post('/api/referral/codes', { body, ...options });
  }
}

export interface ReferralCreateCodeResponse {
  id: string;

  createdAt: string;

  deletedAt: string | null;

  organizationId: string;

  referralCode: string;

  updatedAt: string;

  userId: string;

  websiteId: string;
}

export interface ReferralCreateCodeParams {
  loyaltyRuleId: string;

  userId?: string;
}

Referral.Users = Users;

export declare namespace Referral {
  export {
    type ReferralCreateCodeResponse as ReferralCreateCodeResponse,
    type ReferralCreateCodeParams as ReferralCreateCodeParams,
  };

  export {
    Users as Users,
    type UserCreateResponse as UserCreateResponse,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserListParams as UserListParams,
  };
}
