// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Auth extends APIResource {
  /**
   * This endpoint allows you to connect your auth account to a Snag account
   */
  connectAuth(
    authType:
      | 'twitter'
      | 'discord'
      | 'telegram'
      | 'epic'
      | 'steam'
      | 'ultra'
      | 'google'
      | 'tiktok'
      | 'email'
      | 'reddit'
      | 'instagram',
    query: AuthConnectAuthParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuthConnectAuthResponse> {
    return this._client.get(path`/api/${authType}/auth`, { query, ...options });
  }
}

/**
 * Schema for a connect social auth response schema
 */
export interface AuthConnectAuthResponse {
  /**
   * The URL to redirect to.
   */
  url: string;
}

export interface AuthConnectAuthParams {
  /**
   * The email address of the user, this is only required for email auth
   */
  emailAddress?: string;

  /**
   * The redirect URL where the user will land after completing the auth
   */
  redirect?: string;

  /**
   * The type of response to return, this is not valid for email auth, email auth
   * only supports the redirect flow via verification link.
   */
  responseType?: 'redirect' | 'json';

  /**
   * Whether to skip the YouTube channel check, this is only value for google auth
   */
  skipYTChannelCheck?: string;

  /**
   * The ID of the user
   */
  userId?: string;

  /**
   * The wallet address of the user
   */
  walletAddress?: string;

  /**
   * The ID of the website
   */
  websiteId?: string;
}

export declare namespace Auth {
  export {
    type AuthConnectAuthResponse as AuthConnectAuthResponse,
    type AuthConnectAuthParams as AuthConnectAuthParams,
  };
}
