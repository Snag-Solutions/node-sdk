// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Auth extends APIResource {
  /**
   * This endpoint allows you to connect your auth account to a Snag account
   */
  connectAuth(
    authType: 'twitter' | 'discord' | 'telegram' | 'epic' | 'steam',
    query?: AuthConnectAuthParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthConnectAuthResponse>;
  connectAuth(
    authType: 'twitter' | 'discord' | 'telegram' | 'epic' | 'steam',
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthConnectAuthResponse>;
  connectAuth(
    authType: 'twitter' | 'discord' | 'telegram' | 'epic' | 'steam',
    query: AuthConnectAuthParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthConnectAuthResponse> {
    if (isRequestOptions(query)) {
      return this.connectAuth(authType, {}, query);
    }
    return this._client.get(`/api/${authType}/auth`, { query, ...options });
  }
}

/**
 * Schema for a connect social auth response schema
 */
export interface AuthConnectAuthResponse {
  /**
   * The URL to redirect to
   */
  url: string;
}

export interface AuthConnectAuthParams {
  /**
   * The redirect URL where the user will land after completing the auth
   */
  redirect?: string;

  /**
   * The type of response to return
   */
  responseType?: 'redirect' | 'json';

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
