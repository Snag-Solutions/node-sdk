// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Metadatas extends APIResource {
  /**
   * This endpoint allows you to create or edit a user metadata
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

  /**
   * Timestamp when the wallet was last updated
   */
  updatedAt: string;

  /**
   * Validated and formatted wallet address
   */
  walletAddress: string;

  /**
   * Identifier for the user wallet group set via api
   */
  walletGroupIdentifier: string | null;

  /**
   * Unique identifier for the website
   */
  websiteId: string;
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
