// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Metadatas extends APIResource {
  /**
   * This endpoint is used to create user metadata
   */
  create(body?: MetadataCreateParams, options?: Core.RequestOptions): Core.APIPromise<MetadataCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<MetadataCreateResponse>;
  create(
    body: MetadataCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MetadataCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/api/users/metadatas', { body, ...options });
  }
}

export interface MetadataCreateResponse {
  /**
   * Unique identifier for the user metadata
   */
  id: string;

  /**
   * Timestamp when the wallet was created
   */
  createdAt: string;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  user: MetadataCreateResponse.User;

  userGroup: MetadataCreateResponse.UserGroup;

  /**
   * Identifier for the user group set via api
   */
  userGroupId: string | null;

  /**
   * Identifier for the user wallet group set via api
   */
  walletGroupIdentifier: string | null;

  /**
   * Unique identifier for the website
   */
  websiteId: string;
}

export namespace MetadataCreateResponse {
  export interface User {
    /**
     * Id for the user
     */
    id: string;

    /**
     * Wallet address of the user
     */
    walletAddress: string;
  }

  export interface UserGroup {
    /**
     * id for the user group
     */
    id: string;

    /**
     * External identifier for the user group
     */
    externalIdentifier: string | null;
  }
}

export interface MetadataCreateParams {
  discordUser?: string | null;

  discordUserId?: string | null;

  displayName?: string | null;

  emailAddress?: string | null;

  epicAccountIdentifier?: string | null;

  isBlocked?: boolean;

  logoUrl?: string | null;

  stardustProfileIdentifier?: string | null;

  stardustWalletIdentifier?: string | null;

  telegramUserId?: string | null;

  telegramUsername?: string | null;

  twitterUser?: string | null;

  twitterUserId?: string | null;

  userGroupExternalIdentifier?: string | null;

  userGroupId?: string;

  userId?: string;

  walletAddress?: string;

  walletGroupIdentifier?: string | null;
}

export declare namespace Metadatas {
  export {
    type MetadataCreateResponse as MetadataCreateResponse,
    type MetadataCreateParams as MetadataCreateParams,
  };
}
