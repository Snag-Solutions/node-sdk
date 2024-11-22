// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Wallets extends APIResource {
  /**
   * This endpoint allows you to create a user wallet
   */
  create(body: WalletCreateParams, options?: Core.RequestOptions): Core.APIPromise<WalletCreateResponse> {
    return this._client.post('/api/users/wallets', { body, ...options });
  }

  /**
   * This endpoint allows you to get users wallet
   */
  list(query?: WalletListParams, options?: Core.RequestOptions): Core.APIPromise<WalletListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<WalletListResponse>;
  list(
    query: WalletListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WalletListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/users/wallets', { query, ...options });
  }

  /**
   * This endpoint allows you to delete a user wallet
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<WalletDeleteResponse> {
    return this._client.delete(`/api/users/wallets/${id}`, options);
  }
}

/**
 * Schema for user wallet response
 */
export interface WalletCreateResponse {
  /**
   * Unique identifier for the user wallet
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
   * Type of the wallet
   */
  walletType: 'evm' | 'solana' | 'imx' | 'sui' | 'ton';

  /**
   * Unique identifier for the website
   */
  websiteId: string;

  /**
   * Optional identifier for the wallet
   */
  walletIdentifier?: string | null;
}

/**
 * Schema for a list of user wallets
 */
export interface WalletListResponse {
  /**
   * Array of user wallets
   */
  data: Array<WalletListResponse.Data>;
}

export namespace WalletListResponse {
  /**
   * Schema for user wallet response
   */
  export interface Data {
    /**
     * Unique identifier for the user wallet
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
     * Type of the wallet
     */
    walletType: 'evm' | 'solana' | 'imx' | 'sui' | 'ton';

    /**
     * Unique identifier for the website
     */
    websiteId: string;

    /**
     * Optional identifier for the wallet
     */
    walletIdentifier?: string | null;
  }
}

/**
 * Schema for user wallet response
 */
export interface WalletDeleteResponse {
  /**
   * Unique identifier for the user wallet
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
   * Type of the wallet
   */
  walletType: 'evm' | 'solana' | 'imx' | 'sui' | 'ton';

  /**
   * Unique identifier for the website
   */
  websiteId: string;

  /**
   * Optional identifier for the wallet
   */
  walletIdentifier?: string | null;
}

export interface WalletCreateParams {
  walletAddress: string;

  walletType: 'evm' | 'solana' | 'imx' | 'sui' | 'ton';

  userId?: string;

  verificationData?: WalletCreateParams.VerificationData;

  walletIdentifier?: string;
}

export namespace WalletCreateParams {
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

export interface WalletListParams {
  limit?: number | null;

  startingAfter?: string;

  userId?: string;

  walletAddress?: string;

  walletType?: 'evm' | 'solana' | 'imx' | 'sui' | 'ton';
}

export declare namespace Wallets {
  export {
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletDeleteResponse as WalletDeleteResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletListParams as WalletListParams,
  };
}
