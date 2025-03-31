// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource websiteCollections', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.websites.websiteCollections.create({
      collectionAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      name: 'x',
      network: 'abstract',
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.websites.websiteCollections.create({
      collectionAddress: '0x2c02efDd09B3BA1AEaDd3dCAa7aC7A37C1CBDA8A',
      name: 'x',
      network: 'abstract',
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

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.websites.websiteCollections.list({
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
    const response = await client.websites.websiteCollections.list({
      websiteId: '123e4567-e89b-12d3-a456-426614174000',
      limit: 10,
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      startingAfter: '123e4567-e89b-12d3-a456-426614174000',
    });
  });
});
