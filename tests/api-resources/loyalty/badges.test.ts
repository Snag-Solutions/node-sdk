// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource badges', () => {
  test('create: only required params', async () => {
    const responsePromise = client.loyalty.badges.create({
      imageUrl: 'https://example.com/image.png',
      name: 'Example Badge',
      organizationId: '123e4567-e89b-12d3-a456-426614174222',
      rules: [{ type: 'rule' }],
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

  test('create: required and optional params', async () => {
    const response = await client.loyalty.badges.create({
      imageUrl: 'https://example.com/image.png',
      name: 'Example Badge',
      organizationId: '123e4567-e89b-12d3-a456-426614174222',
      rules: [
        {
          type: 'rule',
          amount: 10,
          csvUrl: 'https://example.com/csv',
          description: 'Example description',
          loyaltyBadgeIds: ['123e4567-e89b-12d3-a456-426614174333'],
          loyaltyCurrencyIds: ['123e4567-e89b-12d3-a456-426614174333'],
          loyaltyLeaderboardViewIds: ['123e4567-e89b-12d3-a456-426614174222'],
          loyaltyRuleGroupIds: ['123e4567-e89b-12d3-a456-426614174222'],
          loyaltyRuleIds: ['123e4567-e89b-12d3-a456-426614174111'],
          repeatCount: 1,
          requiredCount: 1,
        },
      ],
      websiteId: '123e4567-e89b-12d3-a456-426614174111',
      description: 'Example description',
    });
  });

  test('update', async () => {
    const responsePromise = client.loyalty.badges.update('123e4567-e89b-12d3-a456-426614174333');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.update('123e4567-e89b-12d3-a456-426614174333', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.update(
        '123e4567-e89b-12d3-a456-426614174333',
        {
          description: 'Example description',
          imageUrl: 'https://example.com/image.png',
          name: 'Example Badge',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.loyalty.badges.list();
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
    await expect(client.loyalty.badges.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.list(
        {
          badgeIds: ['123e4567-e89b-12d3-a456-426614174333'],
          includeDeleted: false,
          limit: 10,
          organizationId: '123e4567-e89b-12d3-a456-426614174222',
          startingAfter: '123e4567-e89b-12d3-a456-426614174333',
          userId: '123e4567-e89b-12d3-a456-426614174222',
          websiteId: '123e4567-e89b-12d3-a456-426614174111',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.loyalty.badges.delete('123e4567-e89b-12d3-a456-426614174333');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.delete('123e4567-e89b-12d3-a456-426614174333', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('revoke', async () => {
    const responsePromise = client.loyalty.badges.revoke('123e4567-e89b-12d3-a456-426614174333');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('revoke: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.revoke('123e4567-e89b-12d3-a456-426614174333', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('revoke: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.revoke(
        '123e4567-e89b-12d3-a456-426614174333',
        {
          userId: '123e4567-e89b-12d3-a456-426614174333',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('reward', async () => {
    const responsePromise = client.loyalty.badges.reward('123e4567-e89b-12d3-a456-426614174333');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('reward: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.reward('123e4567-e89b-12d3-a456-426614174333', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('reward: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.badges.reward(
        '123e4567-e89b-12d3-a456-426614174333',
        {
          userId: '123e4567-e89b-12d3-a456-426614174333',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
