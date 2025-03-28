// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Auctions extends APIResource {
  /**
   * Returns a list of auction bids with optional filtering and pagination.
   */
  listAuctionBids(query?: AuctionListAuctionBidsParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  listAuctionBids(options?: Core.RequestOptions): Core.APIPromise<void>;
  listAuctionBids(
    query: AuctionListAuctionBidsParams | Core.RequestOptions = {},
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
  listAuctions(options?: Core.RequestOptions): Core.APIPromise<AuctionListAuctionsResponse> {
    return this._client.get('/api/auctions', options);
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

export interface AuctionListAuctionBidsParams {
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

export declare namespace Auctions {
  export {
    type AuctionListAuctionsResponse as AuctionListAuctionsResponse,
    type AuctionListAuctionBidsParams as AuctionListAuctionBidsParams,
  };
}
