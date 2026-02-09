// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SnagSolutions } from '../client';

export abstract class APIResource {
  protected _client: SnagSolutions;

  constructor(client: SnagSolutions) {
    this._client = client;
  }
}
