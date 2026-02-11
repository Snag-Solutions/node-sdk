// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

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
      | 'instagram'
      | 'github',
    query?: AuthConnectAuthParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthConnectAuthResponse>;
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
      | 'instagram'
      | 'github',
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthConnectAuthResponse>;
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
      | 'instagram'
      | 'github',
    query: AuthConnectAuthParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthConnectAuthResponse> {
    if (isRequestOptions(query)) {
      return this.connectAuth(authType, {}, query);
    }
    return this._client.get(`/api/${authType}/auth`, { query, ...options });
  }

  /**
   * endpoint to verify and complete connecting an auth account to a Snag account
   */
  connectAuthVerify(
    authType: 'tiktok' | 'reddit' | 'instagram',
    query: AuthConnectAuthVerifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthConnectAuthVerifyResponse> {
    return this._client.get(`/api/${authType}/auth/connect`, { query, ...options });
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

/**
 * 200 response for GET /api/{authType}/auth/connect. Success, conflict (account
 * already linked), or verification error.
 */
export interface AuthConnectAuthVerifyResponse {
  /**
   * Whether the account was linked successfully
   */
  success: boolean;

  /**
   * The error message if the account was not linked successfully
   */
  error?: string;

  /**
   * The JWT state
   */
  jwtState?: string;

  /**
   * The message of the response
   */
  message?: string;
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

export interface AuthConnectAuthVerifyParams {
  state: string;

  code?: string;

  /**
   * The username or URL of the Instagram profile
   */
  instagramUsernameOrUrl?: string;

  /**
   * The URL of the Reddit profile
   */
  redditProfileUrl?: string;

  /**
   * The type of response to return, this is not valid for email auth, email auth
   * only supports the redirect flow via verification link.
   */
  responseType?: 'redirect' | 'json';

  /**
   * The URL of the TikTok profile
   */
  tiktokProfileUrl?: string;
}

export declare namespace Auth {
  export {
    type AuthConnectAuthResponse as AuthConnectAuthResponse,
    type AuthConnectAuthVerifyResponse as AuthConnectAuthVerifyResponse,
    type AuthConnectAuthParams as AuthConnectAuthParams,
    type AuthConnectAuthVerifyParams as AuthConnectAuthVerifyParams,
  };
}
