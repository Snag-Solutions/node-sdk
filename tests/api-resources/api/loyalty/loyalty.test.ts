// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource loyalty', () => {
  // skipped: tests are disabled for the time being
  test.skip('createTransaction: only required params', async () => {
    const responsePromise = client.api.loyalty.createTransaction({
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
    const response = await client.api.loyalty.createTransaction({
      description: 'Purchase of item X',
      entries: [
        {
          amount: 5,
          direction: 'credit',
          idempotencyKey: 'example-idempotency-key',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
        },
      ],
      loyaltyCurrencyId: '123e4567-e89b-12d3-a456-426614174090',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getRuleGroups', async () => {
    const responsePromise = client.api.loyalty.getRuleGroups();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getRuleGroups: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.loyalty.getRuleGroups({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('getRuleGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.loyalty.getRuleGroups(
        {
          excludeHidden: 'excludeHidden',
          limit: 1,
          organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          startingAfter: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTransactionEntries', async () => {
    const responsePromise = client.api.loyalty.listTransactionEntries();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTransactionEntries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.loyalty.listTransactionEntries({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTransactionEntries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.loyalty.listTransactionEntries(
        {
          createdAtEnd: '2023-10-01T12:34:56Z',
          createdAtStart: '2023-10-01T12:34:56Z',
          direction: 'credit',
          idempotencyKey: 'idempkey123',
          limit: 50,
          loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174030',
          loyaltyTransactionId: '123e4567-e89b-12d3-a456-426614174020',
          orderBy: 'createdAt',
          organizationId: '123e4567-e89b-12d3-a456-426614174001',
          startingAfter: '123e4567-e89b-12d3-a456-426614174010',
          type: 'auction_bid',
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
});
