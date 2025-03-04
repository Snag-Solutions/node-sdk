// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Questions extends APIResource {
  /**
   * This endpoint allows you to create a new question.
   */
  create(body: QuestionCreateParams, options?: Core.RequestOptions): Core.APIPromise<QuestionCreateResponse> {
    return this._client.post('/api/loyalty/questions', { body, ...options });
  }

  /**
   * This endpoint allows you to update an existing question.
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

export type QuestionListResponse = Array<QuestionListResponse.QuestionListResponseItem>;

export namespace QuestionListResponse {
  /**
   * Response returned for a question
   */
  export interface QuestionListResponseItem {
    id: string;

    loyaltyQuestionChoices: Array<QuestionListResponseItem.LoyaltyQuestionChoice>;

    text: string;
  }

  export namespace QuestionListResponseItem {
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
   * UUID of the organization to fetch questions for
   */
  organizationId: string;

  /**
   * UUID of the website to fetch questions for
   */
  websiteId: string;
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
