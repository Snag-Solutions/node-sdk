// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from 'snag-solutions';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auctionBids', () => {
  test('create: only required params', async () => {
    const responsePromise = client.auctionBids.create({
      amount: {},
      auctionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      chainName: 'chainName',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      signature: 'signature',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.auctionBids.create({
      amount: {},
      auctionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      chainName: 'chainName',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      signature: 'signature',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('list', async () => {
    const responsePromise = client.auctionBids.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.auctionBids.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auctionBids.list(
        {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          auctionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 0,
          organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          startingAfter: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          status: 'submitted',
          userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          walletAddress: 'walletAddress',
          websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
