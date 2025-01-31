// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MetadatasAPI from './metadatas';
import { MetadataCreateParams, MetadataCreateResponse, Metadatas } from './metadatas';
import * as WalletsAPI from './wallets';
import { Wallets } from './wallets';

export class Users extends APIResource {
  wallets: WalletsAPI.Wallets = new WalletsAPI.Wallets(this._client);
  metadatas: MetadatasAPI.Metadatas = new MetadatasAPI.Metadatas(this._client);
}

Users.Wallets = Wallets;
Users.Metadatas = Metadatas;

export declare namespace Users {
  export { Wallets as Wallets };

  export {
    Metadatas as Metadatas,
    type MetadataCreateResponse as MetadataCreateResponse,
    type MetadataCreateParams as MetadataCreateParams,
  };
}
