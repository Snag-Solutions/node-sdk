// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CurrenciesAPI from './currencies';
import {
  Currencies,
  CurrencyCreateParams,
  CurrencyCreateResponse,
  CurrencyListParams,
  CurrencyListResponse,
} from './currencies';
import * as RulesAPI from './rules';
import {
  RuleCompleteParams,
  RuleCompleteResponse,
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteResponse,
  RuleListParams,
  RuleListResponse,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';
import * as TransactionEntriesAPI from './transaction-entries';
import {
  TransactionEntries,
  TransactionEntryListParams,
  TransactionEntryListResponse,
} from './transaction-entries';

export class Loyalty extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  currencies: CurrenciesAPI.Currencies = new CurrenciesAPI.Currencies(this._client);
  transactionEntries: TransactionEntriesAPI.TransactionEntries = new TransactionEntriesAPI.TransactionEntries(
    this._client,
  );
}

Loyalty.Rules = Rules;
Loyalty.Currencies = Currencies;
Loyalty.TransactionEntries = TransactionEntries;

export declare namespace Loyalty {
  export {
    Rules as Rules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleCompleteResponse as RuleCompleteResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleCompleteParams as RuleCompleteParams,
  };

  export {
    Currencies as Currencies,
    type CurrencyCreateResponse as CurrencyCreateResponse,
    type CurrencyListResponse as CurrencyListResponse,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyListParams as CurrencyListParams,
  };

  export {
    TransactionEntries as TransactionEntries,
    type TransactionEntryListResponse as TransactionEntryListResponse,
    type TransactionEntryListParams as TransactionEntryListParams,
  };
}
