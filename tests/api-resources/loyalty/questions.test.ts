// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource questions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.loyalty.questions.create({
      loyaltyQuestionAnswers: [{ isCorrect: true, sortIdentifier: 1, text: 'Red' }],
      loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174000',
      questionText: 'What is your favorite color?',
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
    const response = await client.loyalty.questions.create({
      loyaltyQuestionAnswers: [
        { isCorrect: true, sortIdentifier: 1, text: 'Red', id: '123e4567-e89b-12d3-a456-426614174333' },
      ],
      loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174000',
      questionText: 'What is your favorite color?',
      allowMultipleAttempts: false,
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.loyalty.questions.update('id', {
      loyaltyQuestionAnswers: [{ isCorrect: true, sortIdentifier: 1, text: 'Red' }],
      questionText: 'What is your favorite color?',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.loyalty.questions.update('id', {
      loyaltyQuestionAnswers: [
        { isCorrect: true, sortIdentifier: 1, text: 'Red', id: '123e4567-e89b-12d3-a456-426614174333' },
      ],
      questionText: 'What is your favorite color?',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.loyalty.questions.list({
      loyaltyRuleIds: '123e4567-e89b-12d3-a456-426614174000',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.loyalty.questions.list({
      loyaltyRuleIds: '123e4567-e89b-12d3-a456-426614174000',
      limit: 50,
      organizationId: '123e4567-e89b-12d3-a456-426614174002',
      startingAfter: '123e4567-e89b-12d3-a456-426614174010',
      userId: '123e4567-e89b-12d3-a456-426614174003',
      websiteId: '123e4567-e89b-12d3-a456-426614174001',
    });
  });
});
