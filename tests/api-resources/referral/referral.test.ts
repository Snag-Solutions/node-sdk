// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource referral', () => {
  // Prism tests are disabled
  test.skip('createCode: only required params', async () => {
    const responsePromise = client.referral.createCode({
      loyaltyRuleId: '558bcf56-24f1-4ef4-9787-043086295780',
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
  test.skip('createCode: required and optional params', async () => {
    const response = await client.referral.createCode({
      loyaltyRuleId: '558bcf56-24f1-4ef4-9787-043086295780',
      customReferralCode: 'pro',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
