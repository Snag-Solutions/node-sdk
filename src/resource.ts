// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SnagSolutions } from './index';

export abstract class APIResource {
  protected _client: SnagSolutions;

  constructor(client: SnagSolutions) {
    this._client = client;
  }
}
