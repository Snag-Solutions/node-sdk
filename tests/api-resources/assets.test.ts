// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snag/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.assets.create({ fileName: 'example.png' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.assets.create({
      fileName: 'example.png',
      filePath: 'announcements',
      organizationId: '123e4567-e89b-12d3-a456-426614174222',
      userId: '123e4567-e89b-12d3-a456-426614174333',
      websiteId: '123e4567-e89b-12d3-a456-426614174111',
    });
  });
});
