// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Assets extends APIResource {
  /**
   * This endpoint enables you to upload a file to the resource. Returns a presigned
   * URL and the asset's public URL. Call PUT with the file as the body to upload the
   * asset using the presigned URL.
   */
  createAsset(
    body: AssetCreateAssetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetCreateAssetResponse> {
    return this._client.post('/api/assets', { body, ...options });
  }
}

/**
 * Response returned upon successful generation of the signed URL for uploading the
 * file.
 */
export interface AssetCreateAssetResponse {
  /**
   * The pre-signed URL to be used for uploading the file.
   */
  signedUrl: string;

  /**
   * The URL of the uploaded file.
   */
  url: string;
}

export interface AssetCreateAssetParams {
  /**
   * The name of the file, must match the regex pattern (converted to lowercase) and
   * have a valid extension.
   */
  fileName: string;

  /**
   * Size of the file in bytes. Uploaded file must match this file size. 1mb for
   * images and 10mb for videos.
   */
  fileSize: number;

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
  export {
    type AssetCreateAssetResponse as AssetCreateAssetResponse,
    type AssetCreateAssetParams as AssetCreateAssetParams,
  };
}
