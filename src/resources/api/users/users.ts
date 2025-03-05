// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
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
   * This endpoint allows you to disconnect a user from another user
   */
  disconnect(body: UserDisconnectParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/users/disconnect', { body, ...options });
  }
}

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

export type UserDisconnectResponse = unknown;

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

export interface UserDisconnectParams {
  organizationId: string;

  userId: string;

  websiteId: string;
}

Users.Metadatas = Metadatas;

export declare namespace Users {
  export {
    type UserConnectResponse as UserConnectResponse,
    type UserCountResponse as UserCountResponse,
    type UserDisconnectResponse as UserDisconnectResponse,
    type UserConnectParams as UserConnectParams,
    type UserCountParams as UserCountParams,
    type UserDisconnectParams as UserDisconnectParams,
  };

  export {
    Metadatas as Metadatas,
    type MetadataCreateResponse as MetadataCreateResponse,
    type MetadataListResponse as MetadataListResponse,
    type MetadataCreateParams as MetadataCreateParams,
    type MetadataListParams as MetadataListParams,
  };
}
