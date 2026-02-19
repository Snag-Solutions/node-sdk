// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.users.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.users.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.list(
        {
          address: '0x1234567890abcdef1234567890abcdef12345678',
          discordUser: 'elonmusk',
          emailAddress: 'elonmusk@example.com',
          externalIdentifier: '123e4567',
          includeDelegation: true,
          limit: 10,
          organizationId: '123e4567-e89b-12d3-a456-426614174001',
          redditUser: 'elonmusk',
          redditUserId: '1234567890',
          startingAfter: '123e4567-e89b-12d3-a456-426614174020',
          steamUserId: '1234567890',
          steamUsername: 'elonmusk',
          telegramUserId: '1234567890',
          telegramUsername: 'elonmusk',
          tiktokUser: 'elonmusk',
          twitterUser: 'elonmusk',
          userGroupExternalIdentifier: 'userGroupExternalIdentifier',
          userGroupId: '123e4567-e89b-12d3-a456-426614174002',
          userId: '123e4567-e89b-12d3-a456-426614174001',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
          websiteId: '123e4567-e89b-12d3-a456-426614174000',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('connect: only required params', async () => {
    const responsePromise = client.users.connect({
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

  // Prism tests are disabled
  test.skip('connect: required and optional params', async () => {
    const response = await client.users.connect({
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
        verifiedLocally: true,
      },
    });
  });

  // Prism tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.users.count({
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

  // Prism tests are disabled
  test.skip('count: required and optional params', async () => {
    const response = await client.users.count({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  // Prism tests are disabled
  test.skip('createDevice: only required params', async () => {
    const responsePromise = client.users.createDevice({ ipAddress: '123.456.789.012' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createDevice: required and optional params', async () => {
    const response = await client.users.createDevice({
      ipAddress: '123.456.789.012',
      deviceIdentifier: 'deviceIdentifier',
      userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      walletAddress: 'walletAddress',
    });
  });

  // Prism tests are disabled
  test.skip('disconnect: only required params', async () => {
    const responsePromise = client.users.disconnect({
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

  // Prism tests are disabled
  test.skip('disconnect: required and optional params', async () => {
    const response = await client.users.disconnect({
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.users.verify({ accountLinkData: 'accountLinkData' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verify: required and optional params', async () => {
    const response = await client.users.verify({
      accountLinkData: 'accountLinkData',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
