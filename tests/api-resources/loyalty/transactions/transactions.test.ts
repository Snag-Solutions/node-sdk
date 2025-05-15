// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  // skipped: tests are disabled for the time being
  test.skip('createTransaction: only required params', async () => {
    const responsePromise = client.loyalty.transactions.createTransaction({
      description: 'Purchase of item X',
      entries: [{ amount: 5 }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createTransaction: required and optional params', async () => {
    const response = await client.loyalty.transactions.createTransaction({
      description: 'Purchase of item X',
      entries: [
        {
          amount: 5,
          direction: 'credit',
          idempotencyKey: 'example-idempotency-key',
          loyaltyCurrencyId: '123e4567-e89b-12d3-a456-426614174090',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
        },
      ],
      loyaltyCurrencyId: '123e4567-e89b-12d3-a456-426614174090',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getTransactionEntries', async () => {
    const responsePromise = client.loyalty.transactions.getTransactionEntries();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTransactionEntries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.transactions.getTransactionEntries({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTransactionEntries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.transactions.getTransactionEntries(
        {
          createdAtEnd: '2023-10-01T12:34:56Z',
          createdAtStart: '2023-10-01T12:34:56Z',
          direction: 'credit',
          excludeDeletedCurrency: 'true',
          idempotencyKey: 'idempkey123',
          limit: 50,
          loyaltyRuleGroupId: '123e4567-e89b-12d3-a456-426614174333',
          loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174030',
          loyaltyRuleType: 'Bonus',
          loyaltyTransactionId: '123e4567-e89b-12d3-a456-426614174020',
          organizationId: '123e4567-e89b-12d3-a456-426614174001',
          sortBy: 'createdAt',
          sortDir: 'desc',
          startingAfter: '123e4567-e89b-12d3-a456-426614174010',
          type: 'loyalty_rule',
          userCompletedLoyaltyRuleId: '123e4567-e89b-12d3-a456-426614174030',
          userGroupExternalIdentifier: 'userGroupExternalIdentifier',
          userGroupId: '123e4567-e89b-12d3-a456-426614174090',
          userId: ['123e4567-e89b-12d3-a456-426614174000'],
          walletAddress: ['0x1234567890abcdef1234567890abcdef12345678'],
          walletGroupIdentifier: 'group123',
          websiteId: '123e4567-e89b-12d3-a456-426614174002',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listRuleChains: only required params', async () => {
    const responsePromise = client.loyalty.transactions.listRuleChains({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listRuleChains: required and optional params', async () => {
    const response = await client.loyalty.transactions.listRuleChains({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
      limit: 10,
      startingAfter: '123e4567-e89b-12d3-a456-426614174002',
    });
  });
});
