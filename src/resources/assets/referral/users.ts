// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Users extends APIResource {
  /**
   * This endpoint allows you to create a referral user
   */
  createReferralUser(
    body: UserCreateReferralUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserCreateReferralUserResponse> {
    return this._client.post('/api/referral/users', { body, ...options });
  }

  /**
   * This endpoint allows you to get referrals
   */
  getReferrals(
    query: UserGetReferralsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetReferralsResponse> {
    return this._client.get('/api/referral/users', { query, ...options });
  }
}

export interface UserCreateReferralUserResponse {
  message: string;
}

export interface UserGetReferralsResponse {
  data: Array<UserGetReferralsResponse.Data>;

  hasNextPage: boolean;
}

export namespace UserGetReferralsResponse {
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

export interface UserCreateReferralUserParams {
  userIds: Array<string>;

  referralCode?: string;

  referralCodeId?: string;
}

export interface UserGetReferralsParams {
  walletAddress: string | Array<string>;

  includeEligibility?: boolean | null;

  limit?: number;

  organizationId?: string;

  startingAfter?: string;

  websiteId?: string;
}

export declare namespace Users {
  export {
    type UserCreateReferralUserResponse as UserCreateReferralUserResponse,
    type UserGetReferralsResponse as UserGetReferralsResponse,
    type UserCreateReferralUserParams as UserCreateReferralUserParams,
    type UserGetReferralsParams as UserGetReferralsParams,
  };
}
