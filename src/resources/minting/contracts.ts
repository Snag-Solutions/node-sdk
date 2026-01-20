// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Contracts extends APIResource {
  /**
   * Generates a signature for minting an asset on a given contract
   *
   * @example
   * ```ts
   * const response = await client.minting.contracts.mint({
   *   assetId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   contractId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   * ```
   */
  mint(body: ContractMintParams, options?: Core.RequestOptions): Core.APIPromise<ContractMintResponse> {
    return this._client.post('/api/minting/contracts/mint', { body, ...options });
  }
}

/**
 * Use the id returned here to fetch the status and signature of the mint from the
 * `/api/minting/status/:id` endpoint
 */
export interface ContractMintResponse {
  mintingContractAssetMintStatusId: string;
}

export interface ContractMintParams {
  assetId: string;

  contractId: string;

  agreedToSendW9?: boolean | null;

  customInputValue?: string | null;

  emailAddress?: string;

  quantity?: number;

  shippingId?: string;

  shippingOrderType?:
    | 'stripe'
    | 'shipstation'
    | 'drip'
    | 'twitter_bearer'
    | 'epic_games'
    | 'stardust'
    | 'twitter_clientsecret'
    | 'immutable_passport'
    | 'sequence'
    | 'google'
    | 'walletConnect'
    | 'auth0'
    | 'privy'
    | 'thirdweb'
    | 'steam'
    | 'discord'
    | 'google_api'
    | 'shopify'
    | 'ultra'
    | 'github';

  walletAddress?: string;
}

export declare namespace Contracts {
  export { type ContractMintResponse as ContractMintResponse, type ContractMintParams as ContractMintParams };
}
