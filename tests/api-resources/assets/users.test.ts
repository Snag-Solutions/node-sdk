// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('connectUser: only required params', async () => {
    const responsePromise = client.assets.users.connectUser({
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

  test('connectUser: required and optional params', async () => {
    const response = await client.assets.users.connectUser({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      walletType: 'evm',
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
      confirmDisconnect: true,
      userId: '123e4567-e89b-12d3-a456-426614174001',
      verificationData: {
        accessToken: 'accessToken',
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

  test('disconnectUser: only required params', async () => {
    const responsePromise = client.assets.users.disconnectUser({
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

  test('disconnectUser: required and optional params', async () => {
    const response = await client.assets.users.disconnectUser({
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('getUserCount: only required params', async () => {
    const responsePromise = client.assets.users.getUserCount({
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

  test('getUserCount: required and optional params', async () => {
    const response = await client.assets.users.getUserCount({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  test('getUsers', async () => {
    const responsePromise = client.assets.users.getUsers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getUsers: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.assets.users.getUsers({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  test('getUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.assets.users.getUsers(
        {
          address: '0x1234567890abcdef1234567890abcdef12345678',
          discordUser: 'elonmusk',
          includeDelegation: true,
          includeFollow: true,
          limit: 10,
          organizationId: '123e4567-e89b-12d3-a456-426614174001',
          startingAfter: '123e4567-e89b-12d3-a456-426614174020',
          steamUsername: 'elonmusk',
          telegramUserId: '1234567890',
          telegramUsername: 'elonmusk',
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
});
