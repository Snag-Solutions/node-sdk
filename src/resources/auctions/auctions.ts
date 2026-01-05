// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as WebsiteUserAttributesAPI from './website-user-attributes/website-user-attributes';
import {
  WebsiteUserAttributeCreateParams,
  WebsiteUserAttributeCreateResponse,
  WebsiteUserAttributeDeleteParams,
  WebsiteUserAttributeDeleteResponse,
  WebsiteUserAttributeListParams,
  WebsiteUserAttributeListResponse,
  WebsiteUserAttributes,
} from './website-user-attributes/website-user-attributes';

export class Auctions extends APIResource {
  websiteUserAttributes: WebsiteUserAttributesAPI.WebsiteUserAttributes =
    new WebsiteUserAttributesAPI.WebsiteUserAttributes(this._client);

  /**
   * This endpoint allows you to fetch page sections
   *
   * @example
   * ```ts
   * const response = await client.auctions.getPageSections({
   *   organizationId: '123e4567-e89b-12d3-a456-426614174334',
   *   placement: 'page',
   *   websiteId: '123e4567-e89b-12d3-a456-426614174333',
   * });
   * ```
   */
  getPageSections(
    query: AuctionGetPageSectionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuctionGetPageSectionsResponse> {
    return this._client.get('/api/page_sections', { query, ...options });
  }

  /**
   * Returns a list of auction bids with optional filtering and pagination.
   *
   * @example
   * ```ts
   * const response = await client.auctions.listAuctionBids();
   * ```
   */
  listAuctionBids(
    query?: AuctionListAuctionBidsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuctionListAuctionBidsResponse>;
  listAuctionBids(options?: Core.RequestOptions): Core.APIPromise<AuctionListAuctionBidsResponse>;
  listAuctionBids(
    query: AuctionListAuctionBidsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuctionListAuctionBidsResponse> {
    if (isRequestOptions(query)) {
      return this.listAuctionBids({}, query);
    }
    return this._client.get('/api/auction_bids', { query, ...options });
  }

  /**
   * Returns a list of auctions with optional filtering and pagination.
   *
   * @example
   * ```ts
   * const response = await client.auctions.listAuctions();
   * ```
   */
  listAuctions(options?: Core.RequestOptions): Core.APIPromise<AuctionListAuctionsResponse> {
    return this._client.get('/api/auctions', options);
  }
}

export interface AuctionGetPageSectionsResponse {
  /**
   * Unique identifier for the page section
   */
  id: string;

  /**
   * Start time of the page section visibility
   */
  durationStart: string;

  /**
   * Unique identifier for the organization
   */
  organizationId: string;

  /**
   * Placement of the page section
   */
  placement: 'global' | 'page';

  /**
   * Unique identifier for the website
   */
  websiteId: string;

  banner?: AuctionGetPageSectionsResponse.Banner | null;

  discoveryItems?: Array<AuctionGetPageSectionsResponse.DiscoveryItem>;

  /**
   * End time of the page section visibility
   */
  durationEnd?: string | null;

  itemsGrids?: Array<AuctionGetPageSectionsResponse.ItemsGrid>;

  /**
   * ID of the page this section belongs to
   */
  pageId?: string;

  /**
   * Type of the page section
   */
  pageSectionType?: 'all_items' | 'discovery_item' | 'discovery_items_grid' | null;

  /**
   * Order of the page section
   */
  sortId?: number;

  /**
   * Title of the page section
   */
  title?: string | null;
}

export namespace AuctionGetPageSectionsResponse {
  export interface Banner {
    id: string;

    websiteCollectionBanners: Array<Banner.WebsiteCollectionBanner>;

    carousel?: Banner.Carousel | null;
  }

  export namespace Banner {
    export interface WebsiteCollectionBanner {
      id: string;

      websiteCollectionId: string;
    }

    export interface Carousel {
      id: string;

      carouselItems: Array<Carousel.CarouselItem>;
    }

    export namespace Carousel {
      export interface CarouselItem {
        id: string;

        sortId: number;
      }
    }
  }

  export interface DiscoveryItem {
    id: string;

    title: string;

    buttonText?: string | null;

    description?: string | null;

    externalLink?: string | null;

    hideQuestInfo?: boolean;

    layout?: 'container_style' | 'full_width_hero' | null;

    loyaltyRuleGroupId?: string | null;

    loyaltySection?: string | null;

    mediaLink?: string | null;

    pageMediaLink?: string | null;

    sortId?: number;

    twitter?: string | null;

    website?: string | null;
  }

  export interface ItemsGrid {
    id: string;

    websiteCollection: ItemsGrid.WebsiteCollection;
  }

  export namespace ItemsGrid {
    export interface WebsiteCollection {
      id: string;

      mintingContractId?: string | null;
    }
  }
}

export interface AuctionListAuctionBidsResponse {
  data: Array<AuctionListAuctionBidsResponse.Data>;

  /**
   * Indicates if there is a next page of results
   */
  hasNextPage: boolean;

  /**
   * Total count of matching bids (only present when includeCount=true)
   */
  count?: number;
}

export namespace AuctionListAuctionBidsResponse {
  /**
   * Schema for a get auction bids response
   */
  export interface Data {
    id: string;

    auction: Data.Auction | null;

    auctionId: string;

    auctionItem: Data.AuctionItem | null;

    auctionItemId: string | null;

    currencyAddress: string | null;

    currencyDecimals: number;

    loyaltyCurrency: Data.LoyaltyCurrency | null;

    status: 'submitted' | 'accepted' | 'rejected' | 'fulfilled';

    updatedAt: string;

    user: Data.User;

    amount?: unknown;
  }

  export namespace Data {
    export interface Auction {
      id: string;

      name: string;
    }

    export interface AuctionItem {
      id: string;

      mintingContractAsset: AuctionItem.MintingContractAsset | null;

      quantity: number;
    }

    export namespace AuctionItem {
      export interface MintingContractAsset {
        id: string;

        isPhygitalItem: boolean;

        revealedAt: string | null;

        tokenId: number | null;

        shippingPrice?: unknown;
      }
    }

    export interface LoyaltyCurrency {
      id: string;

      apiAuthKey: string | null;

      apiAuthType: 'none' | 'basic' | 'bearer' | 'api_key' | null;

      apiAuthValue: string | null;

      apiGetTransactionEntryUrl: string | null;

      apiGetUrl: string | null;

      apiPostUrl: string | null;

      decimals: number;

      imageUrl: string | null;

      name: string;

      symbol: string;
    }

    export interface User {
      id: string;

      walletAddress: string;
    }
  }
}

/**
 * Schema for the response when fetching auctions
 */
export interface AuctionListAuctionsResponse {
  data: Array<AuctionListAuctionsResponse.Data>;

  hasNextPage: boolean;
}

export namespace AuctionListAuctionsResponse {
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

export interface AuctionGetPageSectionsParams {
  /**
   * Unique identifier for the organization to filter by
   */
  organizationId: string;

  /**
   * Placement of the page section
   */
  placement: 'global' | 'page';

  /**
   * Unique identifier for the website to filter by
   */
  websiteId: string;

  /**
   * Whether to get all sections regardless of duration
   */
  all?: '1';

  /**
   * Unique identifier for the page to filter by
   */
  pageId?: string;

  /**
   * Type of the page section to filter by
   */
  pageSectionType?: 'all_items' | 'discovery_item' | 'discovery_items_grid' | null;

  /**
   * Unique identifier for the website collection to filter by
   */
  websiteCollectionId?: string;
}

export interface AuctionListAuctionBidsParams {
  /**
   * The bid ID(s) - accepts a single ID or an array of IDs
   */
  id?: string | Array<string> | unknown;

  /**
   * ID of the auction
   */
  auctionId?: string;

  /**
   * Include total count of matching bids in response
   */
  includeCount?: boolean | null;

  /**
   * Maximum number of bids to return
   */
  limit?: number;

  /**
   * Order bids by amount (ascending or descending). Defaults to desc.
   */
  orderBy?: 'asc' | 'desc';

  /**
   * ID of the organization
   */
  organizationId?: string;

  /**
   * Number of bids to skip (for offset-based pagination)
   */
  skip?: number | null;

  /**
   * Pagination cursor to start after a specific bid ID
   */
  startingAfter?: string;

  /**
   * Status of the bid
   */
  status?: 'submitted' | 'accepted' | 'rejected' | 'fulfilled';

  /**
   * Filter by multiple bid statuses (OR condition)
   */
  statuses?: Array<'submitted' | 'accepted' | 'rejected' | 'fulfilled'>;

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

Auctions.WebsiteUserAttributes = WebsiteUserAttributes;

export declare namespace Auctions {
  export {
    type AuctionGetPageSectionsResponse as AuctionGetPageSectionsResponse,
    type AuctionListAuctionBidsResponse as AuctionListAuctionBidsResponse,
    type AuctionListAuctionsResponse as AuctionListAuctionsResponse,
    type AuctionGetPageSectionsParams as AuctionGetPageSectionsParams,
    type AuctionListAuctionBidsParams as AuctionListAuctionBidsParams,
  };

  export {
    WebsiteUserAttributes as WebsiteUserAttributes,
    type WebsiteUserAttributeCreateResponse as WebsiteUserAttributeCreateResponse,
    type WebsiteUserAttributeListResponse as WebsiteUserAttributeListResponse,
    type WebsiteUserAttributeDeleteResponse as WebsiteUserAttributeDeleteResponse,
    type WebsiteUserAttributeCreateParams as WebsiteUserAttributeCreateParams,
    type WebsiteUserAttributeListParams as WebsiteUserAttributeListParams,
    type WebsiteUserAttributeDeleteParams as WebsiteUserAttributeDeleteParams,
  };
}
