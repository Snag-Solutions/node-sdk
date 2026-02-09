// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import { UserCreateParams, UserCreateResponse, UserListParams, UserListResponse, Users } from './users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Referral extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * This endpoint allows you to create a referral code
   *
   * @example
   * ```ts
   * const response = await client.referral.createCode({
   *   loyaltyRuleId: '558bcf56-24f1-4ef4-9787-043086295780',
   * });
   * ```
   */
  createCode(
    body: ReferralCreateCodeParams,
    options?: RequestOptions,
  ): APIPromise<ReferralCreateCodeResponse> {
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

  customReferralCode?: string;

  organizationId?: string;

  userId?: string;

  websiteId?: string;
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
