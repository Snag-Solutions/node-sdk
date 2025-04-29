// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MetadatasAPI from './metadatas';
import {
  MetadataCreateParams,
  MetadataCreateResponse,
  MetadataListParams,
  MetadataListResponse,
  Metadatas,
} from './metadatas';

export class Users extends APIResource {
  metadatas: MetadatasAPI.Metadatas = new MetadatasAPI.Metadatas(this._client);

  /**
   * This endpoint allows you to get users
   */
  list(query?: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/users', { query, ...options });
  }

  /**
   * This endpoint allows you to create a user
   */
  connect(body: UserConnectParams, options?: Core.RequestOptions): Core.APIPromise<UserConnectResponse> {
    return this._client.post('/api/users/connect', { body, ...options });
  }

  /**
   * This endpoint returns the total user count
   */
  count(query: UserCountParams, options?: Core.RequestOptions): Core.APIPromise<UserCountResponse> {
    return this._client.get('/api/users/count', { query, ...options });
  }

  /**
   * This endpoint is used to create user devices for fraud tracking
   */
  createDevice(
    body: UserCreateDeviceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserCreateDeviceResponse> {
    return this._client.post('/api/users/devices', { body, ...options });
  }

  /**
   * This endpoint allows you to disconnect a user from another user
   */
  disconnect(
    body: UserDisconnectParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserDisconnectResponse> {
    return this._client.post('/api/users/disconnect', { body, ...options });
  }

  verify(body: UserVerifyParams, options?: Core.RequestOptions): Core.APIPromise<UserVerifyResponse> {
    return this._client.post('/api/users/verify', { body, ...options });
  }
}

export interface UserListResponse {
  /**
   * Schema for users response
   */
  data: Array<UserListResponse.Data>;
}

export namespace UserListResponse {
  /**
   * Schema for a user response
   */
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

      externalLoyaltyScore?: string | null;

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

/**
 * Schema for a connect users response
 */
export interface UserConnectResponse {
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

/**
 * Schema for counting users response
 */
export interface UserCountResponse {
  /**
   * Total count of users
   */
  totalCount: number;
}

/**
 * Schema for a user device
 */
export interface UserCreateDeviceResponse {
  /**
   * Unique identifier for the user device
   */
  id: string;

  /**
   * Timestamp when the wallet was created
   */
  createdAt: string;

  /**
   * IP address of the user device
   */
  ipAddress: string;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Source of the user device
   */
  source: string;

  /**
   * Unique identifier for the website
   */
  websiteId: string;

  /**
   * Device identifier of the user device
   */
  deviceIdentifier?: string;
}

export interface UserDisconnectResponse {
  /**
   * The message of the disconnect user response
   */
  message: 'Success';
}

export interface UserVerifyResponse {
  message: string;
}

export interface UserListParams {
  /**
   * The address of the user
   */
  address?: string;

  /**
   * Discord username of the user
   */
  discordUser?: string;

  /**
   * External identifier for the user
   */
  externalIdentifier?: string;

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
   * Steam ID of the user
   */
  steamUserId?: string;

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

export interface UserConnectParams {
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
  verificationData?: UserConnectParams.VerificationData;
}

export namespace UserConnectParams {
  /**
   * The verification data of the user walletAddress
   */
  export interface VerificationData {
    accessToken?: string;

    dynamicAuthToken?: string;

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

export interface UserCountParams {
  /**
   * The ID of the organization
   */
  organizationId: string;

  /**
   * The ID of the website
   */
  websiteId: string;
}

export interface UserCreateDeviceParams {
  /**
   * IP address of the user device
   */
  ipAddress: string;

  /**
   * Device identifier of the user device
   */
  deviceIdentifier?: string;

  userId?: string;

  walletAddress?: string;
}

export interface UserDisconnectParams {
  organizationId: string;

  userId: string;

  websiteId: string;
}

export interface UserVerifyParams {
  accountLinkData: string;

  organizationId?: string;

  userId?: string;

  websiteId?: string;
}

Users.Metadatas = Metadatas;

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserConnectResponse as UserConnectResponse,
    type UserCountResponse as UserCountResponse,
    type UserCreateDeviceResponse as UserCreateDeviceResponse,
    type UserDisconnectResponse as UserDisconnectResponse,
    type UserVerifyResponse as UserVerifyResponse,
    type UserListParams as UserListParams,
    type UserConnectParams as UserConnectParams,
    type UserCountParams as UserCountParams,
    type UserCreateDeviceParams as UserCreateDeviceParams,
    type UserDisconnectParams as UserDisconnectParams,
    type UserVerifyParams as UserVerifyParams,
  };

  export {
    Metadatas as Metadatas,
    type MetadataCreateResponse as MetadataCreateResponse,
    type MetadataListResponse as MetadataListResponse,
    type MetadataCreateParams as MetadataCreateParams,
    type MetadataListParams as MetadataListParams,
  };
}
