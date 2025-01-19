// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as QuestsAPI from './quests';
import { QuestCompleteParams, QuestCompleteResponse, Quests } from './quests';
import * as StatusAPI from './status';
import { Status, StatusRetrieveResponse } from './status';

export class Drip extends APIResource {
  quests: QuestsAPI.Quests = new QuestsAPI.Quests(this._client);
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
}

Drip.Quests = Quests;
Drip.Status = Status;

export declare namespace Drip {
  export {
    Quests as Quests,
    type QuestCompleteResponse as QuestCompleteResponse,
    type QuestCompleteParams as QuestCompleteParams,
  };

  export { Status as Status, type StatusRetrieveResponse as StatusRetrieveResponse };
}
