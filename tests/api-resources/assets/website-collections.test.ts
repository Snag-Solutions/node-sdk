// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource websiteCollections', () => {
  test('createWebsiteCollection: only required params', async () => {
    const responsePromise = client.assets.websiteCollections.createWebsiteCollection({
      collectionAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      name: 'x',
      network: 'mainnet',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      sortId: 0,
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

  test('createWebsiteCollection: required and optional params', async () => {
    const response = await client.assets.websiteCollections.createWebsiteCollection({
      collectionAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      name: 'x',
      network: 'mainnet',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      sortId: 0,
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      discordUrl: 'discordUrl',
      homeUrl: 'homeUrl',
      imageUrl: 'imageUrl',
      instagramUsername: 'instagramUsername',
      royaltyFee: 0,
      royaltyFeeAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      stakingAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      telegramUrl: 'telegramUrl',
      themeId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      twitterUsername: 'twitterUsername',
    });
  });

  test('getWebsiteCollections: only required params', async () => {
    const responsePromise = client.assets.websiteCollections.getWebsiteCollections({
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

  test('getWebsiteCollections: required and optional params', async () => {
    const response = await client.assets.websiteCollections.getWebsiteCollections({
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
      limit: 10,
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      startingAfter: '123e4567-e89b-12d3-a456-426614174000',
    });
  });
});
