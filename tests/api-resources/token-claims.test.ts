// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokenClaims', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.tokenClaims.retrieve('id', {
      query_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.tokenClaims.retrieve('id', {
      query_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.tokenClaims.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tokenClaims.list(
        {
          contractId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('checkEligibility: only required params', async () => {
    const responsePromise = client.tokenClaims.checkEligibility('id', {
      query_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      walletAddress: 'walletAddress',
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
  test.skip('checkEligibility: required and optional params', async () => {
    const response = await client.tokenClaims.checkEligibility('id', {
      query_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      walletAddress: 'walletAddress',
    });
  });

  // Prism tests are disabled
  test.skip('getProof: only required params', async () => {
    const responsePromise = client.tokenClaims.getProof('id', {
      query_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      walletAddress: 'walletAddress',
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
  test.skip('getProof: required and optional params', async () => {
    const response = await client.tokenClaims.getProof('id', {
      query_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      walletAddress: 'walletAddress',
    });
  });

  // Prism tests are disabled
  test.skip('listUsers', async () => {
    const responsePromise = client.tokenClaims.listUsers('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tokenClaims.listUsers(
        'id',
        {
          limit: 1,
          sortBy: 'claimedAt',
          sortOrder: 'asc',
          startingAfter: 'startingAfter',
          walletAddress: 'walletAddress',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('updateClaim: only required params', async () => {
    const responsePromise = client.tokenClaims.updateClaim('id', {
      txHash: '0xecc2efdd09bd231a9ad9bd2aada37aa7ccc3d38a03cc25beb6c28aa0aaa316be',
      walletAddress: 'walletAddress',
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
  test.skip('updateClaim: required and optional params', async () => {
    const response = await client.tokenClaims.updateClaim('id', {
      txHash: '0xecc2efdd09bd231a9ad9bd2aada37aa7ccc3d38a03cc25beb6c28aa0aaa316be',
      walletAddress: 'walletAddress',
    });
  });
});
