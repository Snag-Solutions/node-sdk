// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.minting.contracts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.minting.contracts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.minting.contracts.list(
        {
          includeDeleted: true,
          limit: 1,
          organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          showOnMarketplace: true,
          startingAfter: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('mint: only required params', async () => {
    const responsePromise = client.minting.contracts.mint({
      assetId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      contractId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('mint: required and optional params', async () => {
    const response = await client.minting.contracts.mint({
      assetId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      contractId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      agreedToSendW9: true,
      customInputValue: 'customInputValue',
      emailAddress: 'emailAddress',
      quantity: 0,
      shippingId: 'shippingId',
      shippingOrderType: 'stripe',
      walletAddress: 'walletAddress',
    });
  });
});
