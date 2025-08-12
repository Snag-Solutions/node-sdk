// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metadatas', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.users.metadatas.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.metadatas.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.metadatas.create(
        {
          blockStatusReason: 'sybil_and_multi_account',
          discordUser: 'discordUser',
          discordUserId: 'discordUserId',
          displayName: 'displayName',
          emailAddress: 'emailAddress',
          epicAccountIdentifier: 'epicAccountIdentifier',
          externalIdentifier: 'externalIdentifier',
          externalLoyaltyScore: 'externalLoyaltyScore',
          googleUser: 'googleUser',
          googleUserId: 'googleUserId',
          internalNotes: 'internalNotes',
          isBlocked: true,
          logoUrl: 'logoUrl',
          organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          stardustProfileIdentifier: 'stardustProfileIdentifier',
          stardustWalletIdentifier: 'stardustWalletIdentifier',
          steamUserId: 'steamUserId',
          steamUsername: 'steamUsername',
          telegramUserId: 'telegramUserId',
          telegramUsername: 'telegramUsername',
          tiktokUser: 'tiktokUser',
          tiktokUserId: 'tiktokUserId',
          twitterUser: 'twitterUser',
          twitterUserFollowersCount: 0,
          twitterUserId: 'twitterUserId',
          userGroupExternalIdentifier: 'userGroupExternalIdentifier',
          userGroupId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          walletAddress: 'walletAddress',
          walletGroupIdentifier: 'walletGroupIdentifier',
          websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          YTChannelId: 'YTChannelId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.users.metadatas.list();
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
    await expect(client.users.metadatas.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.metadatas.list(
        {
          externalIdentifier: 'user-external-id',
          limit: 10,
          organizationId: '123e4567-e89b-12d3-a456-426614174002',
          startingAfter: '123e4567-e89b-12d3-a456-426614174003',
          userId: '123e4567-e89b-12d3-a456-426614174000',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
          websiteId: '123e4567-e89b-12d3-a456-426614174001',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
