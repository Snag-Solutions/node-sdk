// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from 'snag-solutions';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource api', () => {
  // skipped: tests are disabled for the time being
  test.skip('connectAuth', async () => {
    const responsePromise = client.api.connectAuth('twitter');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('connectAuth: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.connectAuth('twitter', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('connectAuth: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.connectAuth(
        'twitter',
        {
          redirect: 'https://example.com',
          responseType: 'redirect',
          userId: '123e4567-e89b-12d3-a456-426614174001',
          websiteId: '123e4567-e89b-12d3-a456-426614174000',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('connectUserToGroup: only required params', async () => {
    const responsePromise = client.api.connectUserToGroup({
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
  test.skip('connectUserToGroup: required and optional params', async () => {
    const response = await client.api.connectUserToGroup({
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
  test.skip('createAssetUploadURL: only required params', async () => {
    const responsePromise = client.api.createAssetUploadURL({ fileName: 'example.png' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createAssetUploadURL: required and optional params', async () => {
    const response = await client.api.createAssetUploadURL({
      fileName: 'example.png',
      filePath: 'announcements',
      organizationId: '123e4567-e89b-12d3-a456-426614174222',
      userId: '123e4567-e89b-12d3-a456-426614174333',
      websiteId: '123e4567-e89b-12d3-a456-426614174111',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createUserMetadata', async () => {
    const responsePromise = client.api.createUserMetadata();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createUserMetadata: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.createUserMetadata({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('createUserMetadata: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.createUserMetadata(
        {
          discordUser: 'discordUser',
          discordUserId: 'discordUserId',
          displayName: 'displayName',
          emailAddress: 'emailAddress',
          epicAccountIdentifier: 'epicAccountIdentifier',
          externalIdentifier: 'externalIdentifier',
          isBlocked: true,
          logoUrl: 'logoUrl',
          stardustProfileIdentifier: 'stardustProfileIdentifier',
          stardustWalletIdentifier: 'stardustWalletIdentifier',
          telegramUserId: 'telegramUserId',
          telegramUsername: 'telegramUsername',
          twitterUser: 'twitterUser',
          twitterUserId: 'twitterUserId',
          userGroupExternalIdentifier: 'userGroupExternalIdentifier',
          userGroupId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          walletAddress: 'walletAddress',
          walletGroupIdentifier: 'walletGroupIdentifier',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('disconnectUserFromGroup: only required params', async () => {
    const responsePromise = client.api.disconnectUserFromGroup({
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
  test.skip('disconnectUserFromGroup: required and optional params', async () => {
    const response = await client.api.disconnectUserFromGroup({
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getUserCount: only required params', async () => {
    const responsePromise = client.api.getUserCount({
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
  test.skip('getUserCount: required and optional params', async () => {
    const response = await client.api.getUserCount({
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listAuctionBids', async () => {
    const responsePromise = client.api.listAuctionBids();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAuctionBids: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.listAuctionBids({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('listAuctionBids: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.listAuctionBids(
        {
          id: '123e4567-e89b-12d3-a456-426614174010',
          auctionId: '123e4567-e89b-12d3-a456-426614174004',
          limit: 50,
          organizationId: '123e4567-e89b-12d3-a456-426614174002',
          startingAfter: '123e4567-e89b-12d3-a456-426614174020',
          status: 'submitted',
          userId: '123e4567-e89b-12d3-a456-426614174001',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
          websiteId: '123e4567-e89b-12d3-a456-426614174003',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAuctions', async () => {
    const responsePromise = client.api.listAuctions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listAuctions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.listAuctions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('listUserMetadatas', async () => {
    const responsePromise = client.api.listUserMetadatas();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listUserMetadatas: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.listUserMetadatas({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('listUserMetadatas: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.listUserMetadatas(
        {
          externalIdentifier: 'user-external-id',
          limit: 10,
          organizationId: '123e4567-e89b-12d3-a456-426614174002',
          startingAfter: '123e4567-e89b-12d3-a456-426614174003',
          userId: '123e4567-e89b-12d3-a456-426614174000',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
          websiteId: '123e4567-e89b-12d3-a456-426614174001',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listUsers', async () => {
    const responsePromise = client.api.listUsers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listUsers: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.api.listUsers({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('listUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.listUsers(
        {
          address: '0x1234567890abcdef1234567890abcdef12345678',
          discordUser: 'elonmusk',
          externalIdentifier: '123e4567',
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
