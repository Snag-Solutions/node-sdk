// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource websiteUserRoles', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.websiteUserRoles.list({
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.api.websiteUserRoles.list({
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
      userId: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('assign: only required params', async () => {
    const responsePromise = client.api.websiteUserRoles.assign({
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
      websiteUserRoles: [
        { roleType: 'WEBSITE_SUPER_ADMIN', walletAddress: '0x1234567890abcdef1234567890abcdef12345678' },
      ],
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
  test.skip('assign: required and optional params', async () => {
    const response = await client.api.websiteUserRoles.assign({
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
      websiteUserRoles: [
        {
          roleType: 'WEBSITE_SUPER_ADMIN',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
          deletedAt: '2022-01-01T00:00:00.000Z',
        },
      ],
    });
  });
});
