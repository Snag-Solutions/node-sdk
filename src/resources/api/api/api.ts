// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as LoyaltyAPI from './loyalty';
import { Loyalty, LoyaltyGetRuleChainsParams, LoyaltyGetRuleChainsResponse } from './loyalty';

export class API extends APIResource {
  loyalty: LoyaltyAPI.Loyalty = new LoyaltyAPI.Loyalty(this._client);
}

API.Loyalty = Loyalty;

export declare namespace API {
  export {
    Loyalty as Loyalty,
    type LoyaltyGetRuleChainsResponse as LoyaltyGetRuleChainsResponse,
    type LoyaltyGetRuleChainsParams as LoyaltyGetRuleChainsParams,
  };
}
