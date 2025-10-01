// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ruleStatuses', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.loyalty.transactions.ruleStatuses.update({
      loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174030',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.loyalty.transactions.ruleStatuses.update({
      loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174030',
      incProgress: 10,
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      progress: 50,
      userId: '123e4567-e89b-12d3-a456-426614174003',
      walletAddress: '123e4567-e89b-12d3-a456-426614174004',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
    });
  });
});
