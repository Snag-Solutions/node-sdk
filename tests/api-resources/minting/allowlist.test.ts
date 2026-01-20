// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource allowlist', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.minting.allowlist.list({
      mintingContractAssetId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.minting.allowlist.list({
      mintingContractAssetId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      limit: 10,
      startingAfter: '00000000-0000-0000-0000-000000000000',
      walletAddress: 'walletAddress',
    });
  });

  // Prism tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.minting.allowlist.upsert({
      entries: [{ quantity: 1, walletAddress: 'walletAddress' }],
      mintingContractAssetId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.minting.allowlist.upsert({
      entries: [{ quantity: 1, walletAddress: 'walletAddress' }],
      mintingContractAssetId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
