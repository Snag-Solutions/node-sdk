// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountStreaks', () => {
  // Prism tests are disabled
  test.skip('getStreaks: only required params', async () => {
    const responsePromise = client.loyalty.accountStreaks.getStreaks({
      loyaltyRuleId:
        'loyaltyRuleId=123e4567-e89b-12d3-a456-426614174001&loyaltyRuleId=123e4567-e89b-12d3-a456-426614174002',
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
  test.skip('getStreaks: required and optional params', async () => {
    const response = await client.loyalty.accountStreaks.getStreaks({
      loyaltyRuleId:
        'loyaltyRuleId=123e4567-e89b-12d3-a456-426614174001&loyaltyRuleId=123e4567-e89b-12d3-a456-426614174002',
      limit: 50,
      organizationId: '123e4567-e89b-12d3-a456-426614174003',
      startingAfter: '123e4567-e89b-12d3-a456-426614174010',
      userGroupId: '123e4567-e89b-12d3-a456-426614174004',
      userId: '123e4567-e89b-12d3-a456-426614174001',
      walletAddress: '0x1234567890123456789012345678901234567890',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
    });
  });
});
