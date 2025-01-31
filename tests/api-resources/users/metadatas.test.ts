// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metadatas', () => {
  test('create', async () => {
    const responsePromise = client.users.metadatas.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.metadatas.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.metadatas.create(
        {
          discordUser: 'discordUser',
          discordUserId: 'discordUserId',
          displayName: 'displayName',
          emailAddress: 'emailAddress',
          epicAccountIdentifier: 'epicAccountIdentifier',
          isBlocked: true,
          logoUrl: 'logoUrl',
          stardustProfileIdentifier: 'stardustProfileIdentifier',
          stardustWalletIdentifier: 'stardustWalletIdentifier',
          telegramUserId: 'telegramUserId',
          telegramUsername: 'telegramUsername',
          twitterUser: 'twitterUser',
          twitterUserId: 'twitterUserId',
          userGroupExternalIdentifier: 'userGroupExternalIdentifier',
          userGroupId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          walletAddress: 'walletAddress',
          walletGroupIdentifier: 'walletGroupIdentifier',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
