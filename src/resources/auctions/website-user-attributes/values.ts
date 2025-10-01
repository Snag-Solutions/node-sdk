// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Values extends APIResource {
  /**
   * Create a new website user attribute value
   *
   * @example
   * ```ts
   * const values =
   *   await client.auctions.websiteUserAttributes.values.create(
   *     {
   *       data: [
   *         {
   *           userId: '123e4567-e89b-12d3-a456-426614174005',
   *           value: 'Website User Attribute Value',
   *           websiteUserAttributeId:
   *             '123e4567-e89b-12d3-a456-426614174004',
   *         },
   *       ],
   *       organizationId:
   *         '123e4567-e89b-12d3-a456-426614174002',
   *       websiteId: '123e4567-e89b-12d3-a456-426614174001',
   *     },
   *   );
   * ```
   */
  create(body: ValueCreateParams, options?: Core.RequestOptions): Core.APIPromise<ValueCreateResponse> {
    return this._client.post('/api/website_user_attributes/values', { body, ...options });
  }
}

export type ValueCreateResponse = Array<ValueCreateResponse.ValueCreateResponseItem>;

export namespace ValueCreateResponse {
  export interface ValueCreateResponseItem {
    id: string;

    createdAt: string;

    organizationId: string;

    updatedAt: string;

    userId: string;

    value: string;

    websiteId: string;

    websiteUserAttributeId: string;
  }
}

export interface ValueCreateParams {
  data: Array<ValueCreateParams.Data>;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Unique identifier for the website
   */
  websiteId: string;
}

export namespace ValueCreateParams {
  export interface Data {
    /**
     * Unique identifier for the user
     */
    userId: string;

    /**
     * Value for the website user attribute
     */
    value: string;

    /**
     * Unique identifier for the website user attribute
     */
    websiteUserAttributeId: string;

    /**
     * Unique identifier for the website user attribute value
     */
    id?: string;
  }
}

export declare namespace Values {
  export { type ValueCreateResponse as ValueCreateResponse, type ValueCreateParams as ValueCreateParams };
}
