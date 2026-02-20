// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assets', () => {
  // Mock server tests are disabled
  test.skip('createAsset: only required params', async () => {
    const responsePromise = client.assets.createAsset({ fileName: 'example.png', fileSize: 1024 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createAsset: required and optional params', async () => {
    const response = await client.assets.createAsset({
      fileName: 'example.png',
      fileSize: 1024,
      filePath: 'images',
      organizationId: '123e4567-e89b-12d3-a456-426614174222',
      userId: '123e4567-e89b-12d3-a456-426614174333',
      websiteId: '123e4567-e89b-12d3-a456-426614174111',
    });
  });
});
