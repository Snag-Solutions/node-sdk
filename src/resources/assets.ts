// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Assets extends APIResource {
  /**
   * This endpoint allows you to upload a file to the resource. returns a presigned
   * URL and the asset's public URL call put with the file as the body to upload the
   * asst
   */
  create(body: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<AssetCreateResponse> {
    return this._client.post('/api/assets', { body, ...options });
  }
}

/**
 * Response returned upon successful generation of the signed URL for uploading the
 * file.
 */
export interface AssetCreateResponse {
  /**
   * The pre-signed URL to be used for uploading the file.
   */
  signedUrl: string;

  /**
   * The URL of the uploaded file.
   */
  url: string;
}

export interface AssetCreateParams {
  /**
   * The name of the file, must match the regex pattern (converted to lowercase)
   */
  fileName: string;

  /**
   * The file path, must be a valid enum value.
   */
  filePath?:
    | 'announcements'
    | 'images'
    | 'videos'
    | 'banners'
    | 'fonts'
    | 'posts'
    | 'profiles'
    | 'minting'
    | 'loyalty';

  /**
   * UUID of the organization (optional, converted to lowercase)
   */
  organizationId?: string;

  /**
   * UUID of the user (optional, converted to lowercase)
   */
  userId?: string;

  /**
   * UUID of the website (optional, converted to lowercase)
   */
  websiteId?: string;
}

export declare namespace Assets {
  export { type AssetCreateResponse as AssetCreateResponse, type AssetCreateParams as AssetCreateParams };
}
