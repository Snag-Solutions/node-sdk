// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Quests extends APIResource {
  /**
   * Completes a specified quest for a user and updates their loyalty account balance
   * if applicable. Run asynchronously; use the verification endpoint to check
   * status.
   */
  complete(
    dripQuestId: string,
    body: QuestCompleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuestCompleteResponse> {
    return this._client.post(`/api/drip/quests/${dripQuestId}/complete`, { body, ...options });
  }
}

export type QuestCompleteResponse = QuestCompleteResponse.Quest | QuestCompleteResponse.UnionMember1;

export namespace QuestCompleteResponse {
  export interface Quest {
    /**
     * Schema for a drip quest
     */
    quest: Quest.Quest;
  }

  export namespace Quest {
    /**
     * Schema for a drip quest
     */
    export interface Quest {
      /**
       * Unique identifier for the drip quest
       */
      id: string;

      /**
       * Amount of reward for completing the quest
       */
      amount: number;

      /**
       * Text to display on the action button
       */
      buttonText: string;

      /**
       * Timestamp when the quest was claimed, if applicable
       */
      claimedAt: string | null;

      /**
       * Indicates if the quest has been completed
       */
      completed: boolean;

      /**
       * Description of the drip quest
       */
      description: string;

      /**
       * Indicates if the quest has expired
       */
      expired: boolean;

      /**
       * Expiration timestamp of the quest
       */
      expiresAt: string;

      /**
       * Message associated with the quest
       */
      message: string;

      /**
       * Array of requirements for the drip quest
       */
      requirements: Array<Quest.Requirement>;

      /**
       * Title of the drip quest
       */
      title: string;
    }

    export namespace Quest {
      /**
       * A requirement for completing the drip quest
       */
      export interface Requirement {
        /**
         * Array of conditions for the requirement
         */
        conditions: Array<Requirement.Condition>;

        /**
         * Link associated with the requirement
         */
        link: string;

        /**
         * Type of the requirement
         */
        type: string;
      }

      export namespace Requirement {
        /**
         * A condition for the requirement
         */
        export interface Condition {
          /**
           * Condition that checks if a user has commented in X
           */
          hasCommentedInX?: Condition.HasCommentedInX;

          /**
           * Condition that checks if a user has followed X
           */
          hasFollowedX?: Condition.HasFollowedX;

          /**
           * Condition that checks if a user has liked in X
           */
          hasLikedInX?: Condition.HasLikedInX;

          /**
           * Condition that checks if a user has reposted in X
           */
          hasRepostedInX?: Condition.HasRepostedInX;
        }

        export namespace Condition {
          /**
           * Condition that checks if a user has commented in X
           */
          export interface HasCommentedInX {
            /**
             * Value for the condition
             */
            value: string;
          }

          /**
           * Condition that checks if a user has followed X
           */
          export interface HasFollowedX {
            /**
             * Value for the condition
             */
            value: string;
          }

          /**
           * Condition that checks if a user has liked in X
           */
          export interface HasLikedInX {
            /**
             * Value for the condition
             */
            value: string;
          }

          /**
           * Condition that checks if a user has reposted in X
           */
          export interface HasRepostedInX {
            /**
             * Value for the condition
             */
            value: string;
          }
        }
      }
    }
  }

  export interface UnionMember1 {
    data: UnionMember1.Data;

    message: string;
  }

  export namespace UnionMember1 {
    export interface Data {
      verificationId: string;
    }
  }
}

export interface QuestCompleteParams {
  organizationId: string;

  websiteId: string;

  userId?: string;
}

export declare namespace Quests {
  export {
    type QuestCompleteResponse as QuestCompleteResponse,
    type QuestCompleteParams as QuestCompleteParams,
  };
}
