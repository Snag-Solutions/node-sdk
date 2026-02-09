// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource posts', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.loyalty.transactions.posts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.transactions.posts.list(
        {
          cursor: '123e4567-e89b-12d3-a456-426614174003',
          limit: 10,
          loyaltyPostId: '123e4567-e89b-12d3-a456-426614174003',
          organizationId: '123e4567-e89b-12d3-a456-426614174001',
          sortBy: 'rank',
          userGroupId: '123e4567-e89b-12d3-a456-426614174004',
          userId: '123e4567-e89b-12d3-a456-426614174003',
          websiteId: '123e4567-e89b-12d3-a456-426614174000',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('reward: only required params', async () => {
    const responsePromise = client.loyalty.transactions.posts.reward('id', {
      amount: 100,
      loyaltyCurrencyId: '123e4567-e89b-12d3-a456-426614174000',
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
  test.skip('reward: required and optional params', async () => {
    const response = await client.loyalty.transactions.posts.reward('id', {
      amount: 100,
      loyaltyCurrencyId: '123e4567-e89b-12d3-a456-426614174000',
    });
  });
});
