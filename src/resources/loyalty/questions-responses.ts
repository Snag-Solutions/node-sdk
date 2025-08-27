// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class QuestionsResponses extends APIResource {
  /**
   * Retrieve responses submitted by the authenticated user, optionally filtered by
   * question IDs
   *
   * @example
   * ```ts
   * const questionsResponses =
   *   await client.loyalty.questionsResponses.list();
   * ```
   */
  list(
    query?: QuestionsResponseListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuestionsResponseListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<QuestionsResponseListResponse>;
  list(
    query: QuestionsResponseListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuestionsResponseListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/loyalty/questions_responses', { query, ...options });
  }

  /**
   * This endpoint allows you to submit a response to a question.
   *
   * @example
   * ```ts
   * const response =
   *   await client.loyalty.questionsResponses.submit({
   *     loyaltyQuestionChoiceId:
   *       '123e4567-e89b-12d3-a456-426614174001',
   *   });
   * ```
   */
  submit(
    body: QuestionsResponseSubmitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuestionsResponseSubmitResponse> {
    return this._client.post('/api/loyalty/questions_responses', { body, ...options });
  }
}

/**
 * List of question responses with details
 */
export interface QuestionsResponseListResponse {
  responses: Array<QuestionsResponseListResponse.Response>;
}

export namespace QuestionsResponseListResponse {
  /**
   * Response details including the question and choice information
   */
  export interface Response {
    id: string;

    createdAt: string;

    isCorrect: boolean;

    loyaltyQuestionChoiceId: string;

    loyaltyQuestionId: string;

    question: Response.Question;

    userId: string;
  }

  export namespace Response {
    export interface Question {
      loyaltyQuestionChoices: Array<Question.LoyaltyQuestionChoice>;

      text: string;
    }

    export namespace Question {
      export interface LoyaltyQuestionChoice {
        id: string;

        isCorrect: boolean;

        text: string;
      }
    }
  }
}

/**
 * Response returned when submitting an answer to a question
 */
export interface QuestionsResponseSubmitResponse {
  /**
   * Whether the user had already submitted an answer to this question
   */
  alreadySubmitted: boolean;

  /**
   * Whether the submitted answer was correct
   */
  isCorrect: boolean;

  response: QuestionsResponseSubmitResponse.Response;
}

export namespace QuestionsResponseSubmitResponse {
  export interface Response {
    /**
     * UUID of the response
     */
    id: string;

    /**
     * UUID of the selected choice
     */
    loyaltyQuestionChoiceId: string;

    /**
     * UUID of the question being answered
     */
    loyaltyQuestionId: string;

    /**
     * UUID of the user who submitted the response
     */
    userId: string;
  }
}

export interface QuestionsResponseListParams {
  /**
   * UUID of the organization to filter responses
   */
  organizationId?: string;

  /**
   * UUID(s) of the questions to filter responses
   */
  questionsId?: string | Array<string>;

  /**
   * UUID of the user to filter responses
   */
  userId?: string;

  /**
   * UUID of the website to filter responses
   */
  websiteId?: string;
}

export interface QuestionsResponseSubmitParams {
  /**
   * UUID of the selected choice
   */
  loyaltyQuestionChoiceId: string;

  /**
   * UUID of the organization to filter responses
   */
  organizationId?: string;

  /**
   * UUID of the user who submitted the response
   */
  userId?: string;

  /**
   * UUID of the website to filter responses
   */
  websiteId?: string;
}

export declare namespace QuestionsResponses {
  export {
    type QuestionsResponseListResponse as QuestionsResponseListResponse,
    type QuestionsResponseSubmitResponse as QuestionsResponseSubmitResponse,
    type QuestionsResponseListParams as QuestionsResponseListParams,
    type QuestionsResponseSubmitParams as QuestionsResponseSubmitParams,
  };
}
