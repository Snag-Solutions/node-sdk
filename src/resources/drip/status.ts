// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Status extends APIResource {
  /**
   * Retrieves the current status of a drip quest verification using the verification
   * ID.
   */
  retrieve(verificationId: string, options?: Core.RequestOptions): Core.APIPromise<StatusRetrieveResponse> {
    return this._client.get(`/api/drip/status/${verificationId}`, options);
  }
}

/**
 * Schema for verification status
 */
export interface StatusRetrieveResponse {
  /**
   * Current status of the verification
   */
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

  /**
   * Unique identifier for the verification
   */
  verificationId: string;
}

export declare namespace Status {
  export { type StatusRetrieveResponse as StatusRetrieveResponse };
}
