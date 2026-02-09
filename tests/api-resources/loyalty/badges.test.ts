// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource badges', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.loyalty.badges.create({
      conditions: [{}],
      imageUrl: 'https://example.com/image.png',
      name: 'Example Badge',
      organizationId: '123e4567-e89b-12d3-a456-426614174222',
      websiteId: '123e4567-e89b-12d3-a456-426614174111',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.loyalty.badges.create({
      conditions: [
        {
          amount: 10,
          csvUrl: 'https://example.com/csv',
          description: 'Example description',
          loyaltyBadgeIds: ['123e4567-e89b-12d3-a456-426614174333'],
          loyaltyCurrencyIds: ['123e4567-e89b-12d3-a456-426614174333'],
          loyaltyLeaderboardViewIds: ['123e4567-e89b-12d3-a456-426614174222'],
          loyaltyRuleChainId: '123e4567-e89b-12d3-a456-426614174333',
          loyaltyRuleGroupIds: ['123e4567-e89b-12d3-a456-426614174222'],
          loyaltyRuleIds: ['123e4567-e89b-12d3-a456-426614174111'],
          repeatCount: 1,
          requiredCount: 1,
          type: 'rule',
        },
      ],
      imageUrl: 'https://example.com/image.png',
      name: 'Example Badge',
      organizationId: '123e4567-e89b-12d3-a456-426614174222',
      websiteId: '123e4567-e89b-12d3-a456-426614174111',
      csvFiles: [
        {
          src: 'https://example.com',
          description: 'description',
          name: 'name',
        },
      ],
      description: 'Example description',
      hideInUi: false,
    });
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.loyalty.badges.update('123e4567-e89b-12d3-a456-426614174333');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.update(
        '123e4567-e89b-12d3-a456-426614174333',
        {
          csvFiles: [
            {
              src: 'https://example.com',
              description: 'description',
              name: 'name',
            },
          ],
          description: 'Example description',
          hideInUi: false,
          imageUrl: 'https://example.com/image.png',
          name: 'Example Badge',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.loyalty.badges.list();
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
      client.loyalty.badges.list(
        {
          badgeIds: ['123e4567-e89b-12d3-a456-426614174333'],
          includeDeleted: false,
          limit: 10,
          organizationId: '123e4567-e89b-12d3-a456-426614174222',
          startingAfter: '123e4567-e89b-12d3-a456-426614174333',
          userGroupExternalIdentifier: '123e4567-e89b-12d3-a456-426614174222',
          userGroupId: '123e4567-e89b-12d3-a456-426614174222',
          userId: '123e4567-e89b-12d3-a456-426614174222',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
          websiteId: '123e4567-e89b-12d3-a456-426614174111',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.loyalty.badges.delete('123e4567-e89b-12d3-a456-426614174333');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('revoke', async () => {
    const responsePromise = client.loyalty.badges.revoke('123e4567-e89b-12d3-a456-426614174333');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('revoke: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.revoke(
        '123e4567-e89b-12d3-a456-426614174333',
        {
          status: 'revoked',
          userId: '123e4567-e89b-12d3-a456-426614174333',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('reward', async () => {
    const responsePromise = client.loyalty.badges.reward('123e4567-e89b-12d3-a456-426614174333');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reward: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.reward(
        '123e4567-e89b-12d3-a456-426614174333',
        {
          status: 'revoked',
          userId: '123e4567-e89b-12d3-a456-426614174333',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
