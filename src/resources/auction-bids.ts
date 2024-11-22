// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class AuctionBids extends APIResource {
  /**
   * Creates a new bid for an auction.
   */
  create(body: AuctionBidCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/api/auction_bids', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

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

export interface AuctionBidCreateParams {
  amount: unknown | null;

  auctionId: string;

  chainName: string;

  organizationId: string;

  signature: string;

  websiteId: string;
}

export interface AuctionBidListParams {
  /**
   * The bid id
   */
  id?: string;

  auctionId?: string;

  limit?: number | null;

  organizationId?: string;

  startingAfter?: string;

  status?: 'submitted' | 'accepted' | 'rejected' | 'fulfilled';

  userId?: string;

  walletAddress?: string;

  websiteId?: string;
}

export declare namespace AuctionBids {
  export {
    type AuctionBidCreateParams as AuctionBidCreateParams,
    type AuctionBidListParams as AuctionBidListParams,
  };
}
