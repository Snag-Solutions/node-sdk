// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // skipped: tests are disabled for the time being
  test.skip('connect: only required params', async () => {
    const responsePromise = client.api.users.connect({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      walletType: 'evm',
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
  test.skip('connect: required and optional params', async () => {
    const response = await client.api.users.connect({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      walletType: 'evm',
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
      confirmDisconnect: true,
      userId: '123e4567-e89b-12d3-a456-426614174001',
      verificationData: {
        accessToken: 'accessToken',
        dynamicAuthToken: 'dynamicAuthToken',
        message: 'message',
        signature: 'signature',
        tonVerification: {
          account: {
            address: 'address',
            chain: '-239',
            publicKey: 'publicKey',
            walletStateInit: 'walletStateInit',
          },
          proof: {
            domain: { lengthBytes: 0, value: 'value' },
            payload: 'payload',
            signature: 'signature',
            timestamp: 0,
            state_init: 'state_init',
          },
        },
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('count: only required params', async () => {
    const responsePromise = client.api.users.count({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
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
  test.skip('count: required and optional params', async () => {
    const response = await client.api.users.count({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('disconnect: only required params', async () => {
    const responsePromise = client.api.users.disconnect({
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('disconnect: required and optional params', async () => {
    const response = await client.api.users.disconnect({
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
