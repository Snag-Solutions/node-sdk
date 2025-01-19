// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from 'snag-sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auctionBids', () => {
  test('create: only required params', async () => {
    const responsePromise = client.auctionBids.create({
      amount: '1.5',
      auctionId: '123e4567-e89b-12d3-a456-426614174004',
      chainName: 'Ethereum',
      organizationId: '123e4567-e89b-12d3-a456-426614174002',
      signature: '0xabcdef...',
      websiteId: '123e4567-e89b-12d3-a456-426614174003',
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
      amount: '1.5',
      auctionId: '123e4567-e89b-12d3-a456-426614174004',
      chainName: 'Ethereum',
      organizationId: '123e4567-e89b-12d3-a456-426614174002',
      signature: '0xabcdef...',
      websiteId: '123e4567-e89b-12d3-a456-426614174003',
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
          id: '123e4567-e89b-12d3-a456-426614174010',
          auctionId: '123e4567-e89b-12d3-a456-426614174004',
          limit: 50,
          organizationId: '123e4567-e89b-12d3-a456-426614174002',
          startingAfter: '123e4567-e89b-12d3-a456-426614174020',
          status: 'submitted',
          userId: '123e4567-e89b-12d3-a456-426614174001',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
          websiteId: '123e4567-e89b-12d3-a456-426614174003',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
