// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ruleEdits', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.loyalty.ruleEdits.retrieve({ loyaltyRuleId: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.loyalty.ruleEdits.retrieve({
      loyaltyRuleId: true,
      limit: 20,
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      startingAfter: '123e4567-e89b-12d3-a456-426614174100',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
    });
  });
});
