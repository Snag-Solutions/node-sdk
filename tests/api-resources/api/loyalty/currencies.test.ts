// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource currencies', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.loyalty.currencies.create({
      decimals: 2,
      name: 'Loyalty Points',
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      symbol: 'LP',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.api.loyalty.currencies.create({
      decimals: 2,
      name: 'Loyalty Points',
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      symbol: 'LP',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
      apiAuthKey: 'apiKey123',
      apiAuthType: 'none',
      apiAuthValue: 'apiValue456',
      apiGetTransactionEntryUrl: 'https://api.example.com/get-loyalty-tx',
      apiGetUrl: 'https://api.example.com/get-loyalty',
      apiPostUrl: 'https://api.example.com/post-loyalty',
      imageUrl: 'https://assets.snagsolutions.io/images/loyalty.png',
      sortId: 1,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.loyalty.currencies.list({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.api.loyalty.currencies.list({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
      includeDeleted: 'false',
      limit: 50,
      startingAfter: '123e4567-e89b-12d3-a456-426614174010',
    });
  });
});
