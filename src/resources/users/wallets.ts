// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Wallets extends APIResource {
  /**
   * This endpoint allows you to create a user wallet
   *
   * Here is the message structure that you will need to use.
   *
   * Possible values for <b>chainType</b> are <b>evm,solana,sui,ton</b> <pre> {
   * "domain": "your-website-domain.com", "chainType": "evm", "address":
   * "0xFe4ddc4Bc5E3506542B42cAcC48DB141aF69de3b", "statement": "Sign in to the app.
   * Powered by Snag Solutions.", "uri": "https://snag-web.onrender.com", "version":
   * "1", "chainId": 137, "nonce":
   * "e04cfb63b2ce6ee2fe237e81fc5dfe148640ad5edde9d4475a73ecd7954142d7", "issuedAt":
   * "2024-11-12T11:47:55.598Z" } </pre>
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

export interface WalletCreateResponse {
  id: string;

  createdAt: string;

  organizationId: string;

  updatedAt: string;

  walletAddress: string;

  walletType: 'evm' | 'solana' | 'imx' | 'sui' | 'ton';

  websiteId: string;

  walletIdentifier?: string | null;
}

export interface WalletListResponse {
  data: Array<WalletListResponse.Data>;
}

export namespace WalletListResponse {
  export interface Data {
    id: string;

    createdAt: string;

    organizationId: string;

    updatedAt: string;

    walletAddress: string;

    walletType: 'evm' | 'solana' | 'imx' | 'sui' | 'ton';

    websiteId: string;

    walletIdentifier?: string | null;
  }
}

export interface WalletDeleteResponse {
  id: string;

  createdAt: string;

  organizationId: string;

  updatedAt: string;

  walletAddress: string;

  walletType: 'evm' | 'solana' | 'imx' | 'sui' | 'ton';

  websiteId: string;

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
