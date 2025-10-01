// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource websiteUserAttributes', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.auctions.websiteUserAttributes.create({
      data: [{ label: 'Website User Attribute Label' }],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.auctions.websiteUserAttributes.create({
      data: [{ label: 'Website User Attribute Label', id: '123e4567-e89b-12d3-a456-426614174003' }],
      organizationId: '123e4567-e89b-12d3-a456-426614174002',
      websiteId: '123e4567-e89b-12d3-a456-426614174001',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.auctions.websiteUserAttributes.delete('id', {
      body_id: '123e4567-e89b-12d3-a456-426614174003',
      organizationId: '123e4567-e89b-12d3-a456-426614174002',
      websiteId: '123e4567-e89b-12d3-a456-426614174001',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.auctions.websiteUserAttributes.delete('id', {
      body_id: '123e4567-e89b-12d3-a456-426614174003',
      organizationId: '123e4567-e89b-12d3-a456-426614174002',
      websiteId: '123e4567-e89b-12d3-a456-426614174001',
    });
  });
});
