// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class TokenClaims extends APIResource {
  /**
   * Get a token claim by id
   */
  retrieve(
    pathId: string,
    query: TokenClaimRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenClaimRetrieveResponse> {
    return this._client.get(`/api/token_claims/${pathId}`, { query, ...options });
  }

  /**
   * Get all available token claims for a given website and organization
   */
  list(query?: TokenClaimListParams, options?: Core.RequestOptions): Core.APIPromise<TokenClaimListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TokenClaimListResponse>;
  list(
    query: TokenClaimListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenClaimListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/token_claims', { query, ...options });
  }

  /**
   * Check if a wallet address is eligible for a token claim
   */
  checkEligibility(
    pathId: string,
    query: TokenClaimCheckEligibilityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenClaimCheckEligibilityResponse> {
    return this._client.get(`/api/token_claims/${pathId}/eligibility`, { query, ...options });
  }

  /**
   * Get a token claim proof for a given wallet address
   */
  getProof(
    pathId: string,
    query: TokenClaimGetProofParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenClaimGetProofResponse> {
    return this._client.get(`/api/token_claims/${pathId}/proof`, { query, ...options });
  }

  /**
   * Get all users part of a token claim
   */
  listUsers(
    id: string,
    query?: TokenClaimListUsersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenClaimListUsersResponse>;
  listUsers(id: string, options?: Core.RequestOptions): Core.APIPromise<TokenClaimListUsersResponse>;
  listUsers(
    id: string,
    query: TokenClaimListUsersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenClaimListUsersResponse> {
    if (isRequestOptions(query)) {
      return this.listUsers(id, {}, query);
    }
    return this._client.get(`/api/token_claims/${id}/users`, { query, ...options });
  }

  /**
   * Update a user claim status after a user has claimed
   */
  updateClaim(
    id: string,
    body: TokenClaimUpdateClaimParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenClaimUpdateClaimResponse> {
    return this._client.post(`/api/token_claims/${id}/claim`, { body, ...options });
  }
}

export interface TokenClaimRetrieveResponse {
  tokenClaimId: string;

  totalAllocation: number;

  walletAddress: string;

  proof?: unknown;
}

export interface TokenClaimListResponse {
  data: Array<TokenClaimListResponse.Data>;
}

export namespace TokenClaimListResponse {
  export interface Data {
    id: string;

    claimContractAddress: string | null;

    contract: Data.Contract;

    csvUrl: string | null;

    dataJobId: string | null;

    endTime: string | null;

    geoBlock: Array<string>;

    isDraft: boolean;

    name: string;

    relayerId: string | null;

    stakingContractAddress: string | null;

    startTime: string | null;

    totalAllocatedAmount: number;

    totalClaimedAmount: number;

    totalWalletsAllocated: number;

    updatedAt: string;

    claimAndStake?: boolean;

    isStakingOptional?: boolean;

    maxBonus?: number;

    minLockup?: number;

    minLockupForMultiplier?: number;

    multiplier?: number;

    stakingContractType?: 'linear' | 'timelock' | null;
  }

  export namespace Data {
    export interface Contract {
      id: string;

      address: string;

      chainId: number;

      name: string | null;
    }
  }
}

export interface TokenClaimCheckEligibilityResponse {
  alreadyClaimed: boolean;

  amount: number;

  claimContractAddress: string | null;

  claimedAt: string | null;

  eligible: boolean;

  stakes: Array<TokenClaimCheckEligibilityResponse.Stake>;

  tokenClaimId: string;
}

export namespace TokenClaimCheckEligibilityResponse {
  export interface Stake {
    amount: string;

    claimable: string;

    claimed: string;

    duration: number;

    stakeId: string;

    startTime: string;
  }
}

export interface TokenClaimGetProofResponse {
  tokenClaimId: string;

  totalAllocation: number;

  walletAddress: string;

  proof?: unknown;
}

export interface TokenClaimListUsersResponse {
  data: Array<TokenClaimListUsersResponse.Data>;

  hasNextPage: boolean;
}

export namespace TokenClaimListUsersResponse {
  export interface Data {
    id: string;

    amount: number;

    claimedAt: string | null;

    user: Data.User;
  }

  export namespace Data {
    export interface User {
      id: string;

      walletAddress: string;
    }
  }
}

export interface TokenClaimUpdateClaimResponse {
  data: TokenClaimUpdateClaimResponse.Data;

  message: string;
}

export namespace TokenClaimUpdateClaimResponse {
  export interface Data {
    claimedAt: string;

    tokenClaimId: string;

    totalAllocation: number;

    walletAddress: string;
  }
}

export interface TokenClaimRetrieveParams {
  query_id: string;
}

export interface TokenClaimListParams {
  contractId?: string;

  organizationId?: string;

  websiteId?: string;
}

export interface TokenClaimCheckEligibilityParams {
  query_id: string;

  walletAddress: string;
}

export interface TokenClaimGetProofParams {
  query_id: string;

  walletAddress: string;
}

export interface TokenClaimListUsersParams {
  limit?: number;

  sortBy?: 'claimedAt' | 'amount';

  sortOrder?: 'asc' | 'desc';

  startingAfter?: string;

  walletAddress?: string;
}

export interface TokenClaimUpdateClaimParams {
  txHash: string;

  walletAddress: string;
}

export declare namespace TokenClaims {
  export {
    type TokenClaimRetrieveResponse as TokenClaimRetrieveResponse,
    type TokenClaimListResponse as TokenClaimListResponse,
    type TokenClaimCheckEligibilityResponse as TokenClaimCheckEligibilityResponse,
    type TokenClaimGetProofResponse as TokenClaimGetProofResponse,
    type TokenClaimListUsersResponse as TokenClaimListUsersResponse,
    type TokenClaimUpdateClaimResponse as TokenClaimUpdateClaimResponse,
    type TokenClaimRetrieveParams as TokenClaimRetrieveParams,
    type TokenClaimListParams as TokenClaimListParams,
    type TokenClaimCheckEligibilityParams as TokenClaimCheckEligibilityParams,
    type TokenClaimGetProofParams as TokenClaimGetProofParams,
    type TokenClaimListUsersParams as TokenClaimListUsersParams,
    type TokenClaimUpdateClaimParams as TokenClaimUpdateClaimParams,
  };
}
