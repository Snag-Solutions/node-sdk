// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { AuctionBidListParams, AuctionBids } from './resources/auction-bids';
import {
  WebsiteCreateParams,
  WebsiteCreateResponse,
  WebsiteListParams,
  WebsiteListResponse,
  Websites,
} from './resources/websites';
import {
  AssetCreateParams,
  AssetCreateResponse,
  AssetGetAuctionsResponse,
  Assets,
} from './resources/assets/assets';
import { Drip } from './resources/drip/drip';
import { Loyalty } from './resources/loyalty/loyalty';
import { Users } from './resources/users/users';

export interface ClientOptions {
  /**
   * API key required to authenticate with the Snag Solutions API.
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['SNAG_SOLUTIONS_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Snag Solutions API.
 */
export class SnagSolutions extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Snag Solutions API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['X_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['SNAG_SOLUTIONS_BASE_URL'] ?? https://admin.snagsolutions.io/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('SNAG_SOLUTIONS_BASE_URL'),
    apiKey = Core.readEnv('X_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.SnagSolutionsError(
        "The X_API_KEY environment variable is missing or empty; either provide it, or instantiate the SnagSolutions client with an apiKey option, like new SnagSolutions({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://admin.snagsolutions.io/`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  assets: API.Assets = new API.Assets(this);
  users: API.Users = new API.Users(this);
  loyalty: API.Loyalty = new API.Loyalty(this);
  auctionBids: API.AuctionBids = new API.AuctionBids(this);
  websites: API.Websites = new API.Websites(this);
  drip: API.Drip = new API.Drip(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-API-KEY': this.apiKey };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static SnagSolutions = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static SnagSolutionsError = Errors.SnagSolutionsError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

SnagSolutions.Assets = Assets;
SnagSolutions.Users = Users;
SnagSolutions.Loyalty = Loyalty;
SnagSolutions.AuctionBids = AuctionBids;
SnagSolutions.Websites = Websites;
SnagSolutions.Drip = Drip;
export declare namespace SnagSolutions {
  export type RequestOptions = Core.RequestOptions;

  export {
    Assets as Assets,
    type AssetCreateResponse as AssetCreateResponse,
    type AssetGetAuctionsResponse as AssetGetAuctionsResponse,
    type AssetCreateParams as AssetCreateParams,
  };

  export { Users as Users };

  export { Loyalty as Loyalty };

  export { AuctionBids as AuctionBids, type AuctionBidListParams as AuctionBidListParams };

  export {
    Websites as Websites,
    type WebsiteCreateResponse as WebsiteCreateResponse,
    type WebsiteListResponse as WebsiteListResponse,
    type WebsiteCreateParams as WebsiteCreateParams,
    type WebsiteListParams as WebsiteListParams,
  };

  export { Drip as Drip };
}

export { toFile, fileFromPath } from './uploads';
export {
  SnagSolutionsError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default SnagSolutions;
