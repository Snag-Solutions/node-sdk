// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from 'snag-solutions';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource questions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.loyalty.questions.create({
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.api.loyalty.questions.create({
      loyaltyQuestionAnswers: [
        { isCorrect: true, sortIdentifier: 1, text: 'Red', id: '123e4567-e89b-12d3-a456-426614174333' },
      ],
      loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174000',
      questionText: 'What is your favorite color?',
      allowMultipleAttempts: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.loyalty.questions.update('id', {
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.api.loyalty.questions.update('id', {
      loyaltyQuestionAnswers: [
        { isCorrect: true, sortIdentifier: 1, text: 'Red', id: '123e4567-e89b-12d3-a456-426614174333' },
      ],
      questionText: 'What is your favorite color?',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.loyalty.questions.list({
      loyaltyRuleIds: '123e4567-e89b-12d3-a456-426614174000',
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.api.loyalty.questions.list({
      loyaltyRuleIds: '123e4567-e89b-12d3-a456-426614174000',
      organizationId: '123e4567-e89b-12d3-a456-426614174002',
      websiteId: '123e4567-e89b-12d3-a456-426614174001',
    });
  });
});
