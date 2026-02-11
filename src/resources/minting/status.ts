// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Status extends APIResource {
  /**
   * Get the status of a mint
   *
   * @example
   * ```ts
   * const status = await client.minting.status.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<StatusRetrieveResponse> {
    return this._client.get(`/api/minting/status/${id}`, options);
  }

  /**
   * Update the status of a mint
   *
   * @example
   * ```ts
   * const status = await client.minting.status.update('id', {
   *   status: 'failed',
   * });
   * ```
   */
  update(
    id: string,
    body: StatusUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusUpdateResponse> {
    return this._client.post(`/api/minting/status/${id}`, { body, ...options });
  }
}

export interface StatusRetrieveResponse {
  errorCode: number | null;

  errorMessage: string | null;

  price: number | null;

  relayerTxId: string | null;

  status: 'minted' | 'minting' | 'failed' | 'generatingSignature';

  txHash: string | null;

  signature?: unknown;
}

export interface StatusUpdateResponse {
  message: string;
}

export interface StatusUpdateParams {
  status: 'failed' | 'minted';

  txHash?: string;
}

export declare namespace Status {
  export {
    type StatusRetrieveResponse as StatusRetrieveResponse,
    type StatusUpdateResponse as StatusUpdateResponse,
    type StatusUpdateParams as StatusUpdateParams,
  };
}
