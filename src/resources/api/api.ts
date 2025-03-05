// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MintingAPI from './minting';
import { Minting, MintingGetAssetsParams, MintingGetAssetsResponse } from './minting';
import * as WebsiteCollectionsAPI from './website-collections';
import {
  WebsiteCollectionCreateParams,
  WebsiteCollectionListParams,
  WebsiteCollectionListResponse,
  WebsiteCollections,
} from './website-collections';
import * as WebsiteUserRolesAPI from './website-user-roles';
import {
  WebsiteUserRoleAssignParams,
  WebsiteUserRoleAssignResponse,
  WebsiteUserRoleListParams,
  WebsiteUserRoleListResponse,
  WebsiteUserRoles,
} from './website-user-roles';
import * as WebsitesAPI from './websites';
import {
  WebsiteCreateParams,
  WebsiteCreateResponse,
  WebsiteListParams,
  WebsiteListResponse,
  Websites,
} from './websites';
import * as LoyaltyAPI from './loyalty/loyalty';
import {
  Loyalty,
  LoyaltyCreateTransactionParams,
  LoyaltyCreateTransactionResponse,
  LoyaltyGetRuleGroupsParams,
  LoyaltyGetRuleGroupsResponse,
  LoyaltyListTransactionEntriesParams,
  LoyaltyListTransactionEntriesResponse,
} from './loyalty/loyalty';
import * as ReferralAPI from './referral/referral';
import { Referral, ReferralCreateCodeParams, ReferralCreateCodeResponse } from './referral/referral';
import * as UsersAPI from './users/users';
import {
  UserConnectParams,
  UserConnectResponse,
  UserCountParams,
  UserCountResponse,
  UserDisconnectParams,
  UserDisconnectResponse,
  Users,
} from './users/users';

export class API extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  loyalty: LoyaltyAPI.Loyalty = new LoyaltyAPI.Loyalty(this._client);
  minting: MintingAPI.Minting = new MintingAPI.Minting(this._client);
  referral: ReferralAPI.Referral = new ReferralAPI.Referral(this._client);
  websites: WebsitesAPI.Websites = new WebsitesAPI.Websites(this._client);
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
  createAssetUploadURL(
    body: APICreateAssetUploadURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APICreateAssetUploadURLResponse> {
    return this._client.post('/api/assets', { body, ...options });
  }

  /**
   * Returns a list of auction bids with optional filtering and pagination.
   */
  listAuctionBids(query?: APIListAuctionBidsParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  listAuctionBids(options?: Core.RequestOptions): Core.APIPromise<void>;
  listAuctionBids(
    query: APIListAuctionBidsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.listAuctionBids({}, query);
    }
    return this._client.get('/api/auction_bids', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of auctions with optional filtering and pagination.
   */
  listAuctions(options?: Core.RequestOptions): Core.APIPromise<APIListAuctionsResponse> {
    return this._client.get('/api/auctions', options);
  }

  /**
   * This endpoint allows you to get users
   */
  listUsers(query?: APIListUsersParams, options?: Core.RequestOptions): Core.APIPromise<APIListUsersResponse>;
  listUsers(options?: Core.RequestOptions): Core.APIPromise<APIListUsersResponse>;
  listUsers(
    query: APIListUsersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIListUsersResponse> {
    if (isRequestOptions(query)) {
      return this.listUsers({}, query);
    }
    return this._client.get('/api/users', { query, ...options });
  }
}

/**
 * Response returned upon successful generation of the signed URL for uploading the
 * file.
 */
export interface APICreateAssetUploadURLResponse {
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
export interface APIListAuctionsResponse {
  data: Array<APIListAuctionsResponse.Data>;

  hasNextPage: boolean;
}

export namespace APIListAuctionsResponse {
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

export interface APIListUsersResponse {
  /**
   * Schema for users response
   */
  data: Array<APIListUsersResponse.Data>;
}

export namespace APIListUsersResponse {
  export interface Data {
    id: string;

    isSnagSuperAdmin: boolean;

    walletAddress: string;

    /**
     * The followers of the user, only returned if includeFollow is true
     */
    _count?: Data._Count | null;

    /**
     * The delegations from the user, only returned if includeDelegation is true
     */
    delegationsFrom?: Array<Data.DelegationsFrom> | null;

    /**
     * The followers of the user, only returned if includeFollow is true and the user
     * is querying their own user
     */
    followers?: Array<Data.Follower> | null;

    /**
     * Whether the user has notifications enabled, only returned if
     * includeNotifications is true
     */
    notifications?: boolean;

    privyUserId?: string | null;

    stardustProfileId?: string | null;

    temporaryLoyaltyUser?: boolean | null;

    userMetadata?: Array<Data.UserMetadata> | null;
  }

  export namespace Data {
    /**
     * The followers of the user, only returned if includeFollow is true
     */
    export interface _Count {
      select: _Count.Select;
    }

    export namespace _Count {
      export interface Select {
        followers: number;

        follows: number;
      }
    }

    export interface DelegationsFrom {
      walletAddress: string;
    }

    export interface Follower {
      userId: string;
    }

    export interface UserMetadata {
      bio?: string | null;

      discordUser?: string | null;

      discordVerifiedAt?: string | null;

      displayName?: string | null;

      /**
       * The email address of the user, only returned if the user is querying their own
       * user
       */
      emailAddress?: string | null;

      emailVerifiedAt?: string | null;

      epicAccountIdentifier?: string | null;

      epicUsername?: string | null;

      instagramUser?: string | null;

      instagramVerifiedAt?: string | null;

      isBlocked?: boolean | null;

      location?: string | null;

      logoUrl?: string | null;

      meta?: string | null;

      portfolioUrl?: string | null;

      steamUserId?: string | null;

      steamUsername?: string | null;

      telegramUserId?: string | null;

      telegramUsername?: string | null;

      telegramVerifiedAt?: string | null;

      twitterUser?: string | null;

      twitterUserFollowersCount?: number | null;

      twitterVerifiedAt?: string | null;

      userGroupId?: string | null;

      walletGroupIdentifier?: string | null;
    }
  }
}

export interface APICreateAssetUploadURLParams {
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

export interface APIListAuctionBidsParams {
  /**
   * The bid ID
   */
  id?: string;

  /**
   * ID of the auction
   */
  auctionId?: string;

  /**
   * Maximum number of bids to return
   */
  limit?: number;

  /**
   * ID of the organization
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific bid ID
   */
  startingAfter?: string;

  /**
   * Status of the bid
   */
  status?: 'submitted' | 'accepted' | 'rejected' | 'fulfilled';

  /**
   * ID of the user who made the bid
   */
  userId?: string;

  /**
   * Wallet address of the bidder
   */
  walletAddress?: string;

  /**
   * ID of the website
   */
  websiteId?: string;
}

export interface APIListUsersParams {
  /**
   * The address of the user
   */
  address?: string;

  /**
   * Discord username of the user
   */
  discordUser?: string;

  /**
   * Whether to include delegations in the response
   */
  includeDelegation?: boolean | null;

  /**
   * Whether to include followers in the response
   */
  includeFollow?: boolean | null;

  /**
   * Number of users to return
   */
  limit?: number;

  /**
   * The ID of the organization
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific user ID
   */
  startingAfter?: string;

  /**
   * Steam username of the user
   */
  steamUsername?: string;

  /**
   * Telegram ID of the user
   */
  telegramUserId?: string;

  /**
   * Telegram username of the user
   */
  telegramUsername?: string;

  /**
   * Twitter username of the user
   */
  twitterUser?: string;

  /**
   * External identifier for the user group controlled by you
   */
  userGroupExternalIdentifier?: string;

  /**
   * The ID of the user group
   */
  userGroupId?: string;

  /**
   * The ID of the user
   */
  userId?: string | Array<string>;

  /**
   * The wallet address of the user
   */
  walletAddress?: string;

  /**
   * The ID of the website
   */
  websiteId?: string;
}

API.Users = Users;
API.Loyalty = Loyalty;
API.Minting = Minting;
API.Referral = Referral;
API.Websites = Websites;
API.WebsiteCollections = WebsiteCollections;
API.WebsiteUserRoles = WebsiteUserRoles;

export declare namespace API {
  export {
    type APICreateAssetUploadURLResponse as APICreateAssetUploadURLResponse,
    type APIListAuctionsResponse as APIListAuctionsResponse,
    type APIListUsersResponse as APIListUsersResponse,
    type APICreateAssetUploadURLParams as APICreateAssetUploadURLParams,
    type APIListAuctionBidsParams as APIListAuctionBidsParams,
    type APIListUsersParams as APIListUsersParams,
  };

  export {
    Users as Users,
    type UserConnectResponse as UserConnectResponse,
    type UserCountResponse as UserCountResponse,
    type UserDisconnectResponse as UserDisconnectResponse,
    type UserConnectParams as UserConnectParams,
    type UserCountParams as UserCountParams,
    type UserDisconnectParams as UserDisconnectParams,
  };

  export {
    Loyalty as Loyalty,
    type LoyaltyCreateTransactionResponse as LoyaltyCreateTransactionResponse,
    type LoyaltyGetRuleGroupsResponse as LoyaltyGetRuleGroupsResponse,
    type LoyaltyListTransactionEntriesResponse as LoyaltyListTransactionEntriesResponse,
    type LoyaltyCreateTransactionParams as LoyaltyCreateTransactionParams,
    type LoyaltyGetRuleGroupsParams as LoyaltyGetRuleGroupsParams,
    type LoyaltyListTransactionEntriesParams as LoyaltyListTransactionEntriesParams,
  };

  export {
    Minting as Minting,
    type MintingGetAssetsResponse as MintingGetAssetsResponse,
    type MintingGetAssetsParams as MintingGetAssetsParams,
  };

  export {
    Referral as Referral,
    type ReferralCreateCodeResponse as ReferralCreateCodeResponse,
    type ReferralCreateCodeParams as ReferralCreateCodeParams,
  };

  export {
    Websites as Websites,
    type WebsiteCreateResponse as WebsiteCreateResponse,
    type WebsiteListResponse as WebsiteListResponse,
    type WebsiteCreateParams as WebsiteCreateParams,
    type WebsiteListParams as WebsiteListParams,
  };

  export {
    WebsiteCollections as WebsiteCollections,
    type WebsiteCollectionListResponse as WebsiteCollectionListResponse,
    type WebsiteCollectionCreateParams as WebsiteCollectionCreateParams,
    type WebsiteCollectionListParams as WebsiteCollectionListParams,
  };

  export {
    WebsiteUserRoles as WebsiteUserRoles,
    type WebsiteUserRoleListResponse as WebsiteUserRoleListResponse,
    type WebsiteUserRoleAssignResponse as WebsiteUserRoleAssignResponse,
    type WebsiteUserRoleListParams as WebsiteUserRoleListParams,
    type WebsiteUserRoleAssignParams as WebsiteUserRoleAssignParams,
  };
}
