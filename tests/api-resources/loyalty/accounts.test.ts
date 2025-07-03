// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.loyalty.accounts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.loyalty.accounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.accounts.list(
        {
          discordUser: 'user123#4567',
          externalIdentifier: '123e4567-e89b-12d3-a456-426614174090',
          isMainAccount: 'true',
          limit: 20,
          loyaltyCurrencyId: '123e4567-e89b-12d3-a456-426614174090',
          organizationId: '123e4567-e89b-12d3-a456-426614174001',
          sortDir: 'desc',
          startingAfter: '123e4567-e89b-12d3-a456-426614174100',
          twitterUser: '@user123',
          userGroupExternalIdentifier: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          userGroupId: '123e4567-e89b-12d3-a456-426614174090',
          userId: ['123e4567-e89b-12d3-a456-426614174000'],
          walletAddress: ['0x1234567890abcdef1234567890abcdef12345678'],
          walletGroupIdentifier: 'group123',
          websiteId: '123e4567-e89b-12d3-a456-426614174002',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRank: only required params', async () => {
    const responsePromise = client.loyalty.accounts.retrieveRank('123e4567-e89b-12d3-a456-426614174333', {
      loyaltyCurrencyId: '123e4567-e89b-12d3-a456-426614174333',
      organizationId: '123e4567-e89b-12d3-a456-426614174333',
      websiteId: '123e4567-e89b-12d3-a456-426614174333',
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
  test.skip('retrieveRank: required and optional params', async () => {
    const response = await client.loyalty.accounts.retrieveRank('123e4567-e89b-12d3-a456-426614174333', {
      loyaltyCurrencyId: '123e4567-e89b-12d3-a456-426614174333',
      organizationId: '123e4567-e89b-12d3-a456-426614174333',
      websiteId: '123e4567-e89b-12d3-a456-426614174333',
    });
  });
});
