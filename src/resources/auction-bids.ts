// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class AuctionBids extends APIResource {
  /**
   * Returns a list of auction bids with optional filtering and pagination.
   */
  list(query?: AuctionBidListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    query: AuctionBidListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/auction_bids', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AuctionBidListParams {
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
  limit?: number | null;

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

export declare namespace AuctionBids {
  export { type AuctionBidListParams as AuctionBidListParams };
}
