// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('createReferralUser: only required params', async () => {
    const responsePromise = client.assets.referral.users.createReferralUser({
      userIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createReferralUser: required and optional params', async () => {
    const response = await client.assets.referral.users.createReferralUser({
      userIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      referralCode: 'referralCode',
      referralCodeId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('getReferrals: only required params', async () => {
    const responsePromise = client.assets.referral.users.getReferrals({ walletAddress: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getReferrals: required and optional params', async () => {
    const response = await client.assets.referral.users.getReferrals({
      walletAddress: 'string',
      includeEligibility: true,
      limit: 1,
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      startingAfter: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
