// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Users extends APIResource {
  /**
   * This endpoint allows you to create a user
   */
  connectUser(
    body: UserConnectUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserConnectUserResponse> {
    return this._client.post('/api/users/connect', { body, ...options });
  }

  /**
   * This endpoint allows you to disconnect a user from another user
   */
  disconnectUser(body: UserDisconnectUserParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/users/disconnect', { body, ...options });
  }

  /**
   * This endpoint returns the total user count
   */
  getUserCount(
    query: UserGetUserCountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetUserCountResponse> {
    return this._client.get('/api/users/count', { query, ...options });
  }

  /**
   * This endpoint allows you to get users
   */
  getUsers(query?: UserGetUsersParams, options?: Core.RequestOptions): Core.APIPromise<UserGetUsersResponse>;
  getUsers(options?: Core.RequestOptions): Core.APIPromise<UserGetUsersResponse>;
  getUsers(
    query: UserGetUsersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetUsersResponse> {
    if (isRequestOptions(query)) {
      return this.getUsers({}, query);
    }
    return this._client.get('/api/users', { query, ...options });
  }
}

export interface UserConnectUserResponse {
  /**
   * The ID of the user
   */
  id: string;

  /**
   * Timestamp when the user was created
   */
  createdAt: string;

  /**
   * Timestamp when the user was last updated
   */
  updatedAt: string;

  /**
   * The wallet address of the user
   */
  walletAddress: string;
}

export type UserDisconnectUserResponse = unknown;

/**
 * Schema for counting users response
 */
export interface UserGetUserCountResponse {
  /**
   * Total count of users
   */
  totalCount: number;
}

export interface UserGetUsersResponse {
  /**
   * Schema for users response
   */
  data: Array<UserGetUsersResponse.Data>;
}

export namespace UserGetUsersResponse {
  export interface Data {
    id: string;

    isSnagSuperAdmin: boolean;

    walletAddress: string;

    /**
     * The followers of the user, only returned if includeFollow is true
     */
    _count?: Data._Count | null;

    /**
     * The delegations from the user, only returned if includeDelegation is true
     */
    delegationsFrom?: Array<Data.DelegationsFrom> | null;

    /**
     * The followers of the user, only returned if includeFollow is true and the user
     * is querying their own user
     */
    followers?: Array<Data.Follower> | null;

    /**
     * Whether the user has notifications enabled, only returned if
     * includeNotifications is true
     */
    notifications?: boolean;

    privyUserId?: string | null;

    stardustProfileId?: string | null;

    temporaryLoyaltyUser?: boolean | null;

    userMetadata?: Array<Data.UserMetadata> | null;
  }

  export namespace Data {
    /**
     * The followers of the user, only returned if includeFollow is true
     */
    export interface _Count {
      select: _Count.Select;
    }

    export namespace _Count {
      export interface Select {
        followers: number;

        follows: number;
      }
    }

    export interface DelegationsFrom {
      walletAddress: string;
    }

    export interface Follower {
      userId: string;
    }

    export interface UserMetadata {
      bio?: string | null;

      discordUser?: string | null;

      discordVerifiedAt?: string | null;

      displayName?: string | null;

      /**
       * The email address of the user, only returned if the user is querying their own
       * user
       */
      emailAddress?: string | null;

      emailVerifiedAt?: string | null;

      epicAccountIdentifier?: string | null;

      epicUsername?: string | null;

      instagramUser?: string | null;

      instagramVerifiedAt?: string | null;

      isBlocked?: boolean | null;

      location?: string | null;

      logoUrl?: string | null;

      meta?: string | null;

      portfolioUrl?: string | null;

      steamUserId?: string | null;

      steamUsername?: string | null;

      telegramUserId?: string | null;

      telegramUsername?: string | null;

      telegramVerifiedAt?: string | null;

      twitterUser?: string | null;

      twitterUserFollowersCount?: number | null;

      twitterVerifiedAt?: string | null;

      userGroupId?: string | null;

      walletGroupIdentifier?: string | null;
    }
  }
}

export interface UserConnectUserParams {
  /**
   * The ID of the organization
   */
  organizationId: string;

  /**
   * The wallet address of the user
   */
  walletAddress: string;

  walletType: 'evm' | 'solana' | 'imx' | 'sui' | 'ton';

  /**
   * The ID of the website
   */
  websiteId: string;

  /**
   * Whether to confirm the disconnect
   */
  confirmDisconnect?: boolean;

  /**
   * The ID of the user to whome this wallet is being connected
   */
  userId?: string;

  /**
   * The verification data of the user walletAddress
   */
  verificationData?: UserConnectUserParams.VerificationData;
}

export namespace UserConnectUserParams {
  /**
   * The verification data of the user walletAddress
   */
  export interface VerificationData {
    accessToken?: string;

    message?: string;

    signature?: string;

    tonVerification?: VerificationData.TonVerification;
  }

  export namespace VerificationData {
    export interface TonVerification {
      account: TonVerification.Account;

      proof: TonVerification.Proof;
    }

    export namespace TonVerification {
      export interface Account {
        address: string;

        chain: '-239' | '-3';

        publicKey: string;

        walletStateInit?: string;
      }

      export interface Proof {
        domain: Proof.Domain;

        payload: string;

        signature: string;

        timestamp: number;

        state_init?: string;
      }

      export namespace Proof {
        export interface Domain {
          lengthBytes: number;

          value: string;
        }
      }
    }
  }
}

export interface UserDisconnectUserParams {
  organizationId: string;

  userId: string;

  websiteId: string;
}

export interface UserGetUserCountParams {
  /**
   * The ID of the organization
   */
  organizationId: string;

  /**
   * The ID of the website
   */
  websiteId: string;
}

export interface UserGetUsersParams {
  /**
   * The address of the user
   */
  address?: string;

  /**
   * Discord username of the user
   */
  discordUser?: string;

  /**
   * Whether to include delegations in the response
   */
  includeDelegation?: boolean | null;

  /**
   * Whether to include followers in the response
   */
  includeFollow?: boolean | null;

  /**
   * Number of users to return
   */
  limit?: number;

  /**
   * The ID of the organization
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific user ID
   */
  startingAfter?: string;

  /**
   * Steam username of the user
   */
  steamUsername?: string;

  /**
   * Telegram ID of the user
   */
  telegramUserId?: string;

  /**
   * Telegram username of the user
   */
  telegramUsername?: string;

  /**
   * Twitter username of the user
   */
  twitterUser?: string;

  /**
   * External identifier for the user group controlled by you
   */
  userGroupExternalIdentifier?: string;

  /**
   * The ID of the user group
   */
  userGroupId?: string;

  /**
   * The ID of the user
   */
  userId?: string | Array<string>;

  /**
   * The wallet address of the user
   */
  walletAddress?: string;

  /**
   * The ID of the website
   */
  websiteId?: string;
}

export declare namespace Users {
  export {
    type UserConnectUserResponse as UserConnectUserResponse,
    type UserDisconnectUserResponse as UserDisconnectUserResponse,
    type UserGetUserCountResponse as UserGetUserCountResponse,
    type UserGetUsersResponse as UserGetUsersResponse,
    type UserConnectUserParams as UserConnectUserParams,
    type UserDisconnectUserParams as UserDisconnectUserParams,
    type UserGetUserCountParams as UserGetUserCountParams,
    type UserGetUsersParams as UserGetUsersParams,
  };
}
