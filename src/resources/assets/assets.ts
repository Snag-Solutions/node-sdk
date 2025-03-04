// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MintingAPI from './minting';
import { Minting, MintingGetMintingAssetsParams, MintingGetMintingAssetsResponse } from './minting';
import * as UsersAPI from './users';
import {
  UserConnectUserParams,
  UserConnectUserResponse,
  UserDisconnectUserParams,
  UserDisconnectUserResponse,
  UserGetUserCountParams,
  UserGetUserCountResponse,
  UserGetUsersParams,
  UserGetUsersResponse,
  Users,
} from './users';
import * as WebsiteCollectionsAPI from './website-collections';
import {
  WebsiteCollectionCreateWebsiteCollectionParams,
  WebsiteCollectionGetWebsiteCollectionsParams,
  WebsiteCollectionGetWebsiteCollectionsResponse,
  WebsiteCollections,
} from './website-collections';
import * as WebsiteUserRolesAPI from './website-user-roles';
import {
  WebsiteUserRoleAssignRolesToUsersParams,
  WebsiteUserRoleAssignRolesToUsersResponse,
  WebsiteUserRoleGetWebsiteUserRolesParams,
  WebsiteUserRoleGetWebsiteUserRolesResponse,
  WebsiteUserRoles,
} from './website-user-roles';
import * as ReferralAPI from './referral/referral';
import {
  Referral,
  ReferralCreateReferralCodeParams,
  ReferralCreateReferralCodeResponse,
} from './referral/referral';

export class Assets extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  minting: MintingAPI.Minting = new MintingAPI.Minting(this._client);
  referral: ReferralAPI.Referral = new ReferralAPI.Referral(this._client);
  websiteCollections: WebsiteCollectionsAPI.WebsiteCollections = new WebsiteCollectionsAPI.WebsiteCollections(
    this._client,
  );
  websiteUserRoles: WebsiteUserRolesAPI.WebsiteUserRoles = new WebsiteUserRolesAPI.WebsiteUserRoles(
    this._client,
  );

  /**
   * This endpoint enables you to upload a file to the resource. Returns a presigned
   * URL and the asset's public URL. Call PUT with the file as the body to upload the
   * asset using the presigned URL.
   */
  create(body: AssetCreateParams, options?: Core.RequestOptions): Core.APIPromise<AssetCreateResponse> {
    return this._client.post('/api/assets', { body, ...options });
  }

  /**
   * Returns a list of auctions with optional filtering and pagination.
   */
  getAuctions(options?: Core.RequestOptions): Core.APIPromise<AssetGetAuctionsResponse> {
    return this._client.get('/api/auctions', options);
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

/**
 * Schema for the response when fetching auctions
 */
export interface AssetGetAuctionsResponse {
  data: Array<AssetGetAuctionsResponse.Data>;

  hasNextPage: boolean;
}

export namespace AssetGetAuctionsResponse {
  export interface Data {
    id: string;

    auctionBids: Array<Data.AuctionBid>;

    auctionItems: Array<Data.AuctionItem>;

    biddersOwnCollectionAddresses: Array<string>;

    createdAt: string;

    currencyAddress: string | null;

    currencyDecimals: number;

    deletedAt: string | null;

    description: string;

    endsAt: string;

    extendedDurationInSeconds: number | null;

    hideBids: boolean;

    /**
     * Schema representing a loyalty currency
     */
    loyaltyCurrency: Data.LoyaltyCurrency | null;

    loyaltyCurrencyId: string | null;

    minBidAmount: string;

    minBidIncrement: string | null;

    mintingContractId: string;

    name: string;

    network: 'ethereum' | 'zksync';

    organizationId: string;

    reservePrice: string | null;

    signature: string;

    startsAt: string;

    status: 'in_progress' | 'completed' | 'cancelled';

    type: 'first_price' | 'second_price' | 'english';

    updatedAt: string;

    userId: string;

    websiteId: string;
  }

  export namespace Data {
    /**
     * Schema representing an auction bid
     */
    export interface AuctionBid {
      id: string;

      amount: string;

      createdAt: string;
    }

    export interface AuctionItem {
      id: string;

      /**
       * Schema representing a minting contract asset
       */
      mintingContractAsset: AuctionItem.MintingContractAsset;

      quantity: number;

      sortId: number;
    }

    export namespace AuctionItem {
      /**
       * Schema representing a minting contract asset
       */
      export interface MintingContractAsset {
        id: string;
      }
    }

    /**
     * Schema representing a loyalty currency
     */
    export interface LoyaltyCurrency {
      id: string;

      decimals: number;

      imageUrl: string | null;

      name: string;

      symbol: string;
    }
  }
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

Assets.Users = Users;
Assets.Minting = Minting;
Assets.Referral = Referral;
Assets.WebsiteCollections = WebsiteCollections;
Assets.WebsiteUserRoles = WebsiteUserRoles;

export declare namespace Assets {
  export {
    type AssetCreateResponse as AssetCreateResponse,
    type AssetGetAuctionsResponse as AssetGetAuctionsResponse,
    type AssetCreateParams as AssetCreateParams,
  };

  export {
    Users as Users,
    type UserConnectUserResponse as UserConnectUserResponse,
    type UserDisconnectUserResponse as UserDisconnectUserResponse,
    type UserGetUserCountResponse as UserGetUserCountResponse,
    type UserGetUsersResponse as UserGetUsersResponse,
    type UserConnectUserParams as UserConnectUserParams,
    type UserDisconnectUserParams as UserDisconnectUserParams,
    type UserGetUserCountParams as UserGetUserCountParams,
    type UserGetUsersParams as UserGetUsersParams,
  };

  export {
    Minting as Minting,
    type MintingGetMintingAssetsResponse as MintingGetMintingAssetsResponse,
    type MintingGetMintingAssetsParams as MintingGetMintingAssetsParams,
  };

  export {
    Referral as Referral,
    type ReferralCreateReferralCodeResponse as ReferralCreateReferralCodeResponse,
    type ReferralCreateReferralCodeParams as ReferralCreateReferralCodeParams,
  };

  export {
    WebsiteCollections as WebsiteCollections,
    type WebsiteCollectionGetWebsiteCollectionsResponse as WebsiteCollectionGetWebsiteCollectionsResponse,
    type WebsiteCollectionCreateWebsiteCollectionParams as WebsiteCollectionCreateWebsiteCollectionParams,
    type WebsiteCollectionGetWebsiteCollectionsParams as WebsiteCollectionGetWebsiteCollectionsParams,
  };

  export {
    WebsiteUserRoles as WebsiteUserRoles,
    type WebsiteUserRoleAssignRolesToUsersResponse as WebsiteUserRoleAssignRolesToUsersResponse,
    type WebsiteUserRoleGetWebsiteUserRolesResponse as WebsiteUserRoleGetWebsiteUserRolesResponse,
    type WebsiteUserRoleAssignRolesToUsersParams as WebsiteUserRoleAssignRolesToUsersParams,
    type WebsiteUserRoleGetWebsiteUserRolesParams as WebsiteUserRoleGetWebsiteUserRolesParams,
  };
}
