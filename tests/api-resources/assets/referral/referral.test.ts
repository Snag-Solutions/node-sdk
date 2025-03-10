// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource referral', () => {
  test('createReferralCode', async () => {
    const responsePromise = client.assets.referral.createReferralCode();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createReferralCode: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.assets.referral.createReferralCode({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('createReferralCode: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.assets.referral.createReferralCode(
        { userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
