// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Mock server tests are disabled
  test.skip('connectAuth', async () => {
    const responsePromise = client.auth.connectAuth('twitter');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('connectAuth: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.auth.connectAuth('twitter', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // Mock server tests are disabled
  test.skip('connectAuth: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.connectAuth(
        'twitter',
        {
          emailAddress: 'elonmusk@example.com',
          redirect: 'https://example.com',
          responseType: 'redirect',
          skipYTChannelCheck: 'skipYTChannelCheck',
          userId: '123e4567-e89b-12d3-a456-426614174001',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
          websiteId: '123e4567-e89b-12d3-a456-426614174000',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('connectAuthVerify: only required params', async () => {
    const responsePromise = client.auth.connectAuthVerify('tiktok', { state: 'state' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('connectAuthVerify: required and optional params', async () => {
    const response = await client.auth.connectAuthVerify('tiktok', {
      state: 'state',
      code: 'code',
      instagramUsernameOrUrl: 'https://www.instagram.com/example/',
      redditProfileUrl: 'https://www.reddit.com/user/example',
      responseType: 'json',
      tiktokProfileUrl: 'https://www.tiktok.com/@example/video/1234567890',
    });
  });
});
