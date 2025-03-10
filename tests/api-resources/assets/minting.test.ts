// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource minting', () => {
  test('getMintingAssets: only required params', async () => {
    const responsePromise = client.assets.minting.getMintingAssets({
      organizationId: '00000000-0000-0000-0000-000000000000',
      websiteId: '00000000-0000-0000-0000-000000000000',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getMintingAssets: required and optional params', async () => {
    const response = await client.assets.minting.getMintingAssets({
      organizationId: '00000000-0000-0000-0000-000000000000',
      websiteId: '00000000-0000-0000-0000-000000000000',
      contractAddress: '0x1234567890123456789012345678901234567890',
      currencyType: 'loyalty',
      includeDeleted: false,
      includeMetadata: true,
      isListed: true,
      mintingContractAssetId: '00000000-0000-0000-0000-000000000000',
      mintingContractIds: '00000000-0000-0000-0000-000000000000',
      network: 'mainnet',
      sortDir: 'asc',
      sortKey: 'price',
      status: 'active',
      tokenId: '0',
      walletAddress: '0x1234567890123456789012345678901234567890',
    });
  });
});
