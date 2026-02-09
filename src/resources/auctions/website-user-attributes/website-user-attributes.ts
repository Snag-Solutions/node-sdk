// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ValuesAPI from './values';
import { ValueCreateParams, ValueCreateResponse, ValueListParams, ValueListResponse, Values } from './values';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
    options?: RequestOptions,
  ): APIPromise<WebsiteUserAttributeCreateResponse> {
    return this._client.post('/api/website_user_attributes', { body, ...options });
  }

  /**
   * Get all website user attributes
   *
   * @example
   * ```ts
   * const websiteUserAttributes =
   *   await client.auctions.websiteUserAttributes.list();
   * ```
   */
  list(
    query: WebsiteUserAttributeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebsiteUserAttributeListResponse> {
    return this._client.get('/api/website_user_attributes', { query, ...options });
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
    pathID: string,
    body: WebsiteUserAttributeDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WebsiteUserAttributeDeleteResponse> {
    return this._client.delete(path`/api/website_user_attributes/${pathID}`, { body, ...options });
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

export interface WebsiteUserAttributeListResponse {
  data: Array<WebsiteUserAttributeListResponse.Data>;

  hasNextPage: boolean;
}

export namespace WebsiteUserAttributeListResponse {
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

export interface WebsiteUserAttributeListParams {
  /**
   * Maximum number of records to return (max 100)
   */
  limit?: number;

  /**
   * Unique identifier for the organization
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific resource ID
   */
  startingAfter?: string;

  /**
   * Unique identifier for the website
   */
  websiteId?: string;
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
    type WebsiteUserAttributeListResponse as WebsiteUserAttributeListResponse,
    type WebsiteUserAttributeDeleteResponse as WebsiteUserAttributeDeleteResponse,
    type WebsiteUserAttributeCreateParams as WebsiteUserAttributeCreateParams,
    type WebsiteUserAttributeListParams as WebsiteUserAttributeListParams,
    type WebsiteUserAttributeDeleteParams as WebsiteUserAttributeDeleteParams,
  };

  export {
    Values as Values,
    type ValueCreateResponse as ValueCreateResponse,
    type ValueListResponse as ValueListResponse,
    type ValueCreateParams as ValueCreateParams,
    type ValueListParams as ValueListParams,
  };
}
