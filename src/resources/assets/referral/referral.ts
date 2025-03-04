// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UsersAPI from './users';
import {
  UserCreateReferralUserParams,
  UserCreateReferralUserResponse,
  UserGetReferralsParams,
  UserGetReferralsResponse,
  Users,
} from './users';

export class Referral extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * This endpoint allows you to create a referral code
   */
  createReferralCode(
    body?: ReferralCreateReferralCodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferralCreateReferralCodeResponse>;
  createReferralCode(options?: Core.RequestOptions): Core.APIPromise<ReferralCreateReferralCodeResponse>;
  createReferralCode(
    body: ReferralCreateReferralCodeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferralCreateReferralCodeResponse> {
    if (isRequestOptions(body)) {
      return this.createReferralCode({}, body);
    }
    return this._client.post('/api/referral/codes', { body, ...options });
  }
}

export interface ReferralCreateReferralCodeResponse {
  id: string;

  createdAt: string;

  deletedAt: string | null;

  organizationId: string;

  referralCode: string;

  updatedAt: string;

  userId: string;

  websiteId: string;
}

export interface ReferralCreateReferralCodeParams {
  userId?: string;
}

Referral.Users = Users;

export declare namespace Referral {
  export {
    type ReferralCreateReferralCodeResponse as ReferralCreateReferralCodeResponse,
    type ReferralCreateReferralCodeParams as ReferralCreateReferralCodeParams,
  };

  export {
    Users as Users,
    type UserCreateReferralUserResponse as UserCreateReferralUserResponse,
    type UserGetReferralsResponse as UserGetReferralsResponse,
    type UserCreateReferralUserParams as UserCreateReferralUserParams,
    type UserGetReferralsParams as UserGetReferralsParams,
  };
}
