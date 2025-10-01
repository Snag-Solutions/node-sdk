// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ValuesAPI from './values';
import { ValueCreateParams, ValueCreateResponse, Values } from './values';

export class WebsiteUserAttributes extends APIResource {
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);

  /**
   * Create a new website user attribute
   *
   * @example
   * ```ts
   * const websiteUserAttribute =
   *   await client.auctions.websiteUserAttributes.create({
   *     data: [{ label: 'Website User Attribute Label' }],
   *   });
   * ```
   */
  create(
    body: WebsiteUserAttributeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsiteUserAttributeCreateResponse> {
    return this._client.post('/api/website_user_attributes', { body, ...options });
  }

  /**
   * Delete a website user attribute
   *
   * @example
   * ```ts
   * const websiteUserAttribute =
   *   await client.auctions.websiteUserAttributes.delete('id', {
   *     body_id: '123e4567-e89b-12d3-a456-426614174003',
   *     organizationId: '123e4567-e89b-12d3-a456-426614174002',
   *     websiteId: '123e4567-e89b-12d3-a456-426614174001',
   *   });
   * ```
   */
  delete(
    pathId: string,
    body: WebsiteUserAttributeDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebsiteUserAttributeDeleteResponse> {
    return this._client.delete(`/api/website_user_attributes/${pathId}`, { body, ...options });
  }
}

export interface WebsiteUserAttributeCreateResponse {
  data: Array<WebsiteUserAttributeCreateResponse.Data>;
}

export namespace WebsiteUserAttributeCreateResponse {
  export interface Data {
    id: string;

    createdAt: string;

    deletedAt: string | null;

    label: string;

    organizationId: string;

    updatedAt: string;

    websiteId: string;
  }
}

export interface WebsiteUserAttributeDeleteResponse {
  message: string;
}

export interface WebsiteUserAttributeCreateParams {
  data: Array<WebsiteUserAttributeCreateParams.Data>;

  /**
   * Unique identifier for the organization
   */
  organizationId?: string;

  /**
   * Unique identifier for the website
   */
  websiteId?: string;
}

export namespace WebsiteUserAttributeCreateParams {
  export interface Data {
    /**
     * Label for the website user attribute
     */
    label: string;

    /**
     * Unique identifier for the website user attribute
     */
    id?: string;
  }
}

export interface WebsiteUserAttributeDeleteParams {
  /**
   * Unique identifier for the website user attribute
   */
  body_id: string;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Unique identifier for the website
   */
  websiteId: string;
}

WebsiteUserAttributes.Values = Values;

export declare namespace WebsiteUserAttributes {
  export {
    type WebsiteUserAttributeCreateResponse as WebsiteUserAttributeCreateResponse,
    type WebsiteUserAttributeDeleteResponse as WebsiteUserAttributeDeleteResponse,
    type WebsiteUserAttributeCreateParams as WebsiteUserAttributeCreateParams,
    type WebsiteUserAttributeDeleteParams as WebsiteUserAttributeDeleteParams,
  };

  export {
    Values as Values,
    type ValueCreateResponse as ValueCreateResponse,
    type ValueCreateParams as ValueCreateParams,
  };
}
