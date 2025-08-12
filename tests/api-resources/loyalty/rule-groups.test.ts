// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ruleGroups', () => {
  // Prism tests are disabled
  test.skip('createRuleGroup: only required params', async () => {
    const responsePromise = client.loyalty.ruleGroups.createRuleGroup({
      name: 'name',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('createRuleGroup: required and optional params', async () => {
    const response = await client.loyalty.ruleGroups.createRuleGroup({
      name: 'name',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      isCollapsible: true,
      isRequired: true,
      sortId: 0,
      subTitle: 'subTitle',
    });
  });

  // Prism tests are disabled
  test.skip('deleteRuleGroup', async () => {
    const responsePromise = client.loyalty.ruleGroups.deleteRuleGroup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteRuleGroup: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.ruleGroups.deleteRuleGroup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getRuleGroups', async () => {
    const responsePromise = client.loyalty.ruleGroups.getRuleGroups();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getRuleGroups: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.ruleGroups.getRuleGroups({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getRuleGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.ruleGroups.getRuleGroups(
        {
          excludeHidden: 'excludeHidden',
          limit: 1,
          organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          startingAfter: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateRuleGroup', async () => {
    const responsePromise = client.loyalty.ruleGroups.updateRuleGroup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateRuleGroup: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.ruleGroups.updateRuleGroup('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateRuleGroup: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.ruleGroups.updateRuleGroup(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { isCollapsible: true, name: 'name', subtitle: 'subtitle' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
