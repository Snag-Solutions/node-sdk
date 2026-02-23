// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Contracts extends APIResource {
  /**
   * Get minting contracts
   *
   * @example
   * ```ts
   * const contracts = await client.minting.contracts.list();
   * ```
   */
  list(query?: ContractListParams, options?: Core.RequestOptions): Core.APIPromise<ContractListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ContractListResponse>;
  list(
    query: ContractListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/minting/contracts', { query, ...options });
  }

  /**
   * Generates a signature for minting an asset on a given contract
   *
   * @example
   * ```ts
   * const response = await client.minting.contracts.mint({
   *   assetId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   contractId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * });
   * ```
   */
  mint(body: ContractMintParams, options?: Core.RequestOptions): Core.APIPromise<ContractMintResponse> {
    return this._client.post('/api/minting/contracts/mint', { body, ...options });
  }
}

export interface ContractListResponse {
  data: Array<ContractListResponse.Data>;

  hasNextPage: boolean;

  stats: Array<ContractListResponse.Stat>;
}

export namespace ContractListResponse {
  export interface Data {
    id: string;

    _count: Data._Count;

    address: string | null;

    contractKind: 'ONCHAIN' | 'OFFCHAIN';

    description: string | null;

    enableGasless: boolean;

    externalLinkUrl: string | null;

    hasRevealMechanic: boolean;

    hideInactiveListings: boolean;

    imageUrl: string | null;

    isFreeClaimForBadgeHolders: boolean;

    isFreeClaimForTokenHolders: boolean;

    isListed: boolean;

    isPerAssetMintLimit: boolean;

    isSoulbound: boolean;

    mintingContractAssets: Array<Data.MintingContractAsset>;

    mintingContractBadgeAssociation: Array<Data.MintingContractBadgeAssociation>;

    mustOwnCollections: Array<Data.MustOwnCollection>;

    name: string;

    network:
      | 'abstract'
      | 'abstractTestnet'
      | 'apechain'
      | 'arbitrum'
      | 'avalanche'
      | 'avalancheFuji'
      | 'base'
      | 'baseSepolia'
      | 'berachain'
      | 'berachainArtio'
      | 'berachainBepolia'
      | 'binance'
      | 'bscTestnet'
      | 'campTestnet'
      | 'fantom'
      | 'fantomTestnet'
      | 'flowMainnet'
      | 'mainnet'
      | 'nexusTestnet'
      | 'optimism'
      | 'polygon'
      | 'polygon_mumbai'
      | 'skaleNebula'
      | 'skaleEuropa'
      | 'skaleCalypso'
      | 'solana'
      | 'sophon'
      | 'sophonTestnet'
      | 'sui'
      | 'superseed'
      | 'superseedSepolia'
      | 'vanar'
      | 'xai'
      | 'zksync'
      | 'coti'
      | 'cotiTestnet'
      | 'dogeosTestnet'
      | 'morph'
      | 'morphTestnet'
      | 'morphHolesky'
      | 'ultra'
      | 'ultraTestnet'
      | 'nitrograph'
      | 'sepolia'
      | 'optimism_sepolia'
      | 'arbitrumSepolia'
      | 'goerli'
      | 'optimism_goerli'
      | 'arbitrumGoerli'
      | 'basecamp'
      | 'somnia'
      | 'zkverify'
      | 'polkadot'
      | 'kusama'
      | 'horizen'
      | 'horizenTestnet'
      | 'flow_cadence'
      | null;

    organizationId: string;

    preRevealMedia: string | null;

    primarySaleRecipientAddress: string;

    relayerId: string | null;

    requireHoldingAllGatedItems: boolean;

    revealAvailableAt: string | null;

    royaltyFee: unknown;

    royaltyFeeAddress: string;

    shouldCollectEmail: boolean;

    showOnMarketplace: boolean;

    sortId: number | null;

    symbol: string;

    tokenType: 'erc721' | 'erc1155' | 'erc721c';

    websiteId: string;
  }

  export namespace Data {
    export interface _Count {
      mintingContractAssets: number;
    }

    export interface MintingContractAsset {
      id: string;

      animationUrl: string | null;

      assetNr: number;

      auctionItems: Array<MintingContractAsset.AuctionItem>;

      collectInfoType: 'customInput' | 'freeText' | 'shippingDetails' | null;

      currencyAddress: string | null;

      currencyDecimals: number | null;

      description: string | null;

      imageUrl: string | null;

      isHidden: boolean;

      isListed: boolean;

      isPhygitalItem: boolean;

      listingEndsAt: string | null;

      listingStartsAt: string | null;

      loyaltyCurrencyId: string | null;

      name: string;

      organizationId: string;

      price: unknown;

      quantity: number;

      quantityMinted: number;

      revealedAt: string | null;

      shouldCollectUserInfo: boolean;

      tokenId: number | null;

      unlimitedQty: boolean;

      websiteId: string;
    }

    export namespace MintingContractAsset {
      export interface AuctionItem {
        id: string;
      }
    }

    export interface MintingContractBadgeAssociation {
      loyaltyBadge: MintingContractBadgeAssociation.LoyaltyBadge;
    }

    export namespace MintingContractBadgeAssociation {
      export interface LoyaltyBadge {
        id: string;

        imageUrl: string | null;

        name: string;
      }
    }

    export interface MustOwnCollection {
      address: string;

      network:
        | 'abstract'
        | 'abstractTestnet'
        | 'apechain'
        | 'arbitrum'
        | 'avalanche'
        | 'avalancheFuji'
        | 'base'
        | 'baseSepolia'
        | 'berachain'
        | 'berachainArtio'
        | 'berachainBepolia'
        | 'binance'
        | 'bscTestnet'
        | 'campTestnet'
        | 'fantom'
        | 'fantomTestnet'
        | 'flowMainnet'
        | 'mainnet'
        | 'nexusTestnet'
        | 'optimism'
        | 'polygon'
        | 'polygon_mumbai'
        | 'skaleNebula'
        | 'skaleEuropa'
        | 'skaleCalypso'
        | 'solana'
        | 'sophon'
        | 'sophonTestnet'
        | 'sui'
        | 'superseed'
        | 'superseedSepolia'
        | 'vanar'
        | 'xai'
        | 'zksync'
        | 'coti'
        | 'cotiTestnet'
        | 'dogeosTestnet'
        | 'morph'
        | 'morphTestnet'
        | 'morphHolesky'
        | 'ultra'
        | 'ultraTestnet'
        | 'nitrograph'
        | 'sepolia'
        | 'optimism_sepolia'
        | 'arbitrumSepolia'
        | 'goerli'
        | 'optimism_goerli'
        | 'arbitrumGoerli'
        | 'basecamp'
        | 'somnia'
        | 'zkverify'
        | 'polkadot'
        | 'kusama'
        | 'horizen'
        | 'horizenTestnet'
        | 'flow_cadence';
    }
  }

  export interface Stat {
    _count: Stat._Count;

    _sum: Stat._Sum;

    mintingContractId: string;
  }

  export namespace Stat {
    export interface _Count {
      isListed: number;
    }

    export interface _Sum {
      quantity: number | null;

      quantityMinted: number | null;
    }
  }
}

/**
 * Use the id returned here to fetch the status and signature of the mint from the
 * `/api/minting/status/:id` endpoint
 */
export interface ContractMintResponse {
  mintingContractAssetMintStatusId: string;
}

export interface ContractListParams {
  includeDeleted?: boolean | null;

  limit?: number;

  organizationId?: string;

  showOnMarketplace?: boolean | null;

  startingAfter?: string;

  websiteId?: string;
}

export interface ContractMintParams {
  assetId: string;

  contractId: string;

  agreedToSendW9?: boolean | null;

  customInputValue?: string | null;

  emailAddress?: string;

  quantity?: number;

  shippingId?: string;

  shippingOrderType?:
    | 'stripe'
    | 'shipstation'
    | 'drip'
    | 'twitter_bearer'
    | 'epic_games'
    | 'stardust'
    | 'twitter_clientsecret'
    | 'immutable_passport'
    | 'sequence'
    | 'google'
    | 'walletConnect'
    | 'auth0'
    | 'privy'
    | 'thirdweb'
    | 'steam'
    | 'discord'
    | 'google_api'
    | 'shopify'
    | 'ultra'
    | 'github'
    | 'twilio';

  walletAddress?: string;
}

export declare namespace Contracts {
  export {
    type ContractListResponse as ContractListResponse,
    type ContractMintResponse as ContractMintResponse,
    type ContractListParams as ContractListParams,
    type ContractMintParams as ContractMintParams,
  };
}
