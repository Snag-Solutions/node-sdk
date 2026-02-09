// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auctions', () => {
  // Prism tests are disabled
  test.skip('getPageSections: only required params', async () => {
    const responsePromise = client.auctions.getPageSections({
      organizationId: '123e4567-e89b-12d3-a456-426614174334',
      placement: 'page',
      websiteId: '123e4567-e89b-12d3-a456-426614174333',
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
  test.skip('getPageSections: required and optional params', async () => {
    const response = await client.auctions.getPageSections({
      organizationId: '123e4567-e89b-12d3-a456-426614174334',
      placement: 'page',
      websiteId: '123e4567-e89b-12d3-a456-426614174333',
      all: '1',
      pageId: '123e4567-e89b-12d3-a456-426614174336',
      pageSectionType: 'all_items',
      websiteCollectionId: '123e4567-e89b-12d3-a456-426614174335',
    });
  });

  // Prism tests are disabled
  test.skip('listAuctionBids', async () => {
    const responsePromise = client.auctions.listAuctionBids();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAuctionBids: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auctions.listAuctionBids(
        {
          id: '123e4567-e89b-12d3-a456-426614174010',
          auctionId: '123e4567-e89b-12d3-a456-426614174004',
          includeCount: true,
          limit: 50,
          orderBy: 'desc',
          organizationId: '123e4567-e89b-12d3-a456-426614174002',
          skip: 1999,
          startingAfter: '123e4567-e89b-12d3-a456-426614174020',
          status: 'submitted',
          statuses: ['accepted', 'fulfilled'],
          userId: '123e4567-e89b-12d3-a456-426614174001',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
          websiteId: '123e4567-e89b-12d3-a456-426614174003',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listAuctions', async () => {
    const responsePromise = client.auctions.listAuctions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
