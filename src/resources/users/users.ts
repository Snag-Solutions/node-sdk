// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as WalletsAPI from './wallets';
import {
  WalletCreateParams,
  WalletCreateResponse,
  WalletDeleteResponse,
  WalletListParams,
  WalletListResponse,
  Wallets,
} from './wallets';

export class Users extends APIResource {
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);
}

Users.Wallets = Wallets;

export declare namespace Users {
  export {
    Wallets as Wallets,
    type WalletCreateResponse as WalletCreateResponse,
    type WalletListResponse as WalletListResponse,
    type WalletDeleteResponse as WalletDeleteResponse,
    type WalletCreateParams as WalletCreateParams,
    type WalletListParams as WalletListParams,
  };
}
