// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Questions extends APIResource {
  /**
   * This endpoint allows you to create a new question.
   *
   * @example
   * ```ts
   * const question = await client.loyalty.questions.create({
   *   loyaltyQuestionAnswers: [
   *     { isCorrect: true, sortIdentifier: 1, text: 'Red' },
   *   ],
   *   loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174000',
   *   questionText: 'What is your favorite color?',
   * });
   * ```
   */
  create(body: QuestionCreateParams, options?: Core.RequestOptions): Core.APIPromise<QuestionCreateResponse> {
    return this._client.post('/api/loyalty/questions', { body, ...options });
  }

  /**
   * This endpoint allows you to update an existing question.
   *
   * @example
   * ```ts
   * const question = await client.loyalty.questions.update(
   *   'id',
   *   {
   *     loyaltyQuestionAnswers: [
   *       { isCorrect: true, sortIdentifier: 1, text: 'Red' },
   *     ],
   *     questionText: 'What is your favorite color?',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: QuestionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuestionUpdateResponse> {
    return this._client.post(`/api/loyalty/questions/${id}`, { body, ...options });
  }

  /**
   * This endpoint allows you to fetch questions for a loyalty rule.
   *
   * @example
   * ```ts
   * const questions = await client.loyalty.questions.list({
   *   loyaltyRuleIds: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  list(query: QuestionListParams, options?: Core.RequestOptions): Core.APIPromise<QuestionListResponse> {
    return this._client.get('/api/loyalty/questions', { query, ...options });
  }
}

/**
 * Response returned for a question
 */
export interface QuestionCreateResponse {
  id: string;

  loyaltyQuestionChoices: Array<QuestionCreateResponse.LoyaltyQuestionChoice>;

  text: string;
}

export namespace QuestionCreateResponse {
  export interface LoyaltyQuestionChoice {
    id: string;

    sortIdentifier: number;

    text: string;
  }
}

/**
 * Response returned for a question
 */
export interface QuestionUpdateResponse {
  id: string;

  loyaltyQuestionChoices: Array<QuestionUpdateResponse.LoyaltyQuestionChoice>;

  text: string;
}

export namespace QuestionUpdateResponse {
  export interface LoyaltyQuestionChoice {
    id: string;

    sortIdentifier: number;

    text: string;
  }
}

export interface QuestionListResponse {
  data: Array<QuestionListResponse.Data>;

  hasNextPage: boolean;
}

export namespace QuestionListResponse {
  /**
   * Response returned for a question
   */
  export interface Data {
    id: string;

    loyaltyQuestionChoices: Array<Data.LoyaltyQuestionChoice>;

    text: string;
  }

  export namespace Data {
    export interface LoyaltyQuestionChoice {
      id: string;

      sortIdentifier: number;

      text: string;
    }
  }
}

export interface QuestionCreateParams {
  /**
   * Array of choices for the question
   */
  loyaltyQuestionAnswers: Array<QuestionCreateParams.LoyaltyQuestionAnswer>;

  /**
   * UUID of the loyalty rule
   */
  loyaltyRuleId: string;

  /**
   * The text of the question
   */
  questionText: string;

  /**
   * Whether the question allows multiple attempts
   */
  allowMultipleAttempts?: boolean;
}

export namespace QuestionCreateParams {
  export interface LoyaltyQuestionAnswer {
    /**
     * Whether this choice is correct
     */
    isCorrect: boolean;

    /**
     * The order in which to display the choice
     */
    sortIdentifier: number;

    /**
     * The text of the choice
     */
    text: string;

    /**
     * UUID of the choice (optional for new choices)
     */
    id?: string;
  }
}

export interface QuestionUpdateParams {
  /**
   * Array of choices for the question
   */
  loyaltyQuestionAnswers: Array<QuestionUpdateParams.LoyaltyQuestionAnswer>;

  /**
   * The text of the question
   */
  questionText: string;
}

export namespace QuestionUpdateParams {
  export interface LoyaltyQuestionAnswer {
    /**
     * Whether this choice is correct
     */
    isCorrect: boolean;

    /**
     * The order in which to display the choice
     */
    sortIdentifier: number;

    /**
     * The text of the choice
     */
    text: string;

    /**
     * UUID of the choice (optional for new choices)
     */
    id?: string;
  }
}

export interface QuestionListParams {
  /**
   * UUID of the loyalty rule to fetch questions for
   */
  loyaltyRuleIds: string | Array<string>;

  /**
   * Maximum number of records to return (max 100)
   */
  limit?: number;

  /**
   * UUID of the organization to fetch questions for
   */
  organizationId?: string;

  /**
   * Pagination cursor to start after a specific resource ID
   */
  startingAfter?: string;

  /**
   * UUID of the user to fetch questions for
   */
  userId?: string;

  /**
   * UUID of the website to fetch questions for
   */
  websiteId?: string;
}

export declare namespace Questions {
  export {
    type QuestionCreateResponse as QuestionCreateResponse,
    type QuestionUpdateResponse as QuestionUpdateResponse,
    type QuestionListResponse as QuestionListResponse,
    type QuestionCreateParams as QuestionCreateParams,
    type QuestionUpdateParams as QuestionUpdateParams,
    type QuestionListParams as QuestionListParams,
  };
}
