// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountsAPI from './accounts';
import { AccountListParams, AccountListResponse, Accounts } from './accounts';
import * as BadgesAPI from './badges';
import {
  BadgeCreateParams,
  BadgeCreateResponse,
  BadgeDeleteResponse,
  BadgeListParams,
  BadgeListResponse,
  BadgeRevokeParams,
  BadgeRevokeResponse,
  BadgeRewardParams,
  BadgeRewardResponse,
  BadgeUpdateParams,
  BadgeUpdateResponse,
  Badges,
} from './badges';
import * as CurrenciesAPI from './currencies';
import {
  Currencies,
  CurrencyCreateParams,
  CurrencyCreateResponse,
  CurrencyListParams,
  CurrencyListResponse,
} from './currencies';
import * as MultipliersAPI from './multipliers';
import {
  MultiplierCreateParams,
  MultiplierCreateResponse,
  MultiplierDeleteResponse,
  MultiplierListParams,
  MultiplierListResponse,
  MultiplierUpdateParams,
  MultiplierUpdateResponse,
  Multipliers,
} from './multipliers';
import * as RuleEditsAPI from './rule-edits';
import {
  RuleEditRestoreParams,
  RuleEditRestoreResponse,
  RuleEditRetrieveParams,
  RuleEditRetrieveResponse,
  RuleEdits,
} from './rule-edits';
import * as RulesAPI from './rules';
import {
  RuleCompleteParams,
  RuleCompleteResponse,
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteResponse,
  RuleListParams,
  RuleListResponse,
  RuleStatusParams,
  RuleStatusResponse,
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
  ruleEdits: RuleEditsAPI.RuleEdits = new RuleEditsAPI.RuleEdits(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  multipliers: MultipliersAPI.Multipliers = new MultipliersAPI.Multipliers(this._client);
  badges: BadgesAPI.Badges = new BadgesAPI.Badges(this._client);
}

Loyalty.Rules = Rules;
Loyalty.Currencies = Currencies;
Loyalty.TransactionEntries = TransactionEntries;
Loyalty.RuleEdits = RuleEdits;
Loyalty.Accounts = Accounts;
Loyalty.Multipliers = Multipliers;
Loyalty.Badges = Badges;

export declare namespace Loyalty {
  export {
    Rules as Rules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleCompleteResponse as RuleCompleteResponse,
    type RuleStatusResponse as RuleStatusResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleCompleteParams as RuleCompleteParams,
    type RuleStatusParams as RuleStatusParams,
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

  export {
    RuleEdits as RuleEdits,
    type RuleEditRetrieveResponse as RuleEditRetrieveResponse,
    type RuleEditRestoreResponse as RuleEditRestoreResponse,
    type RuleEditRetrieveParams as RuleEditRetrieveParams,
    type RuleEditRestoreParams as RuleEditRestoreParams,
  };

  export {
    Accounts as Accounts,
    type AccountListResponse as AccountListResponse,
    type AccountListParams as AccountListParams,
  };

  export {
    Multipliers as Multipliers,
    type MultiplierCreateResponse as MultiplierCreateResponse,
    type MultiplierUpdateResponse as MultiplierUpdateResponse,
    type MultiplierListResponse as MultiplierListResponse,
    type MultiplierDeleteResponse as MultiplierDeleteResponse,
    type MultiplierCreateParams as MultiplierCreateParams,
    type MultiplierUpdateParams as MultiplierUpdateParams,
    type MultiplierListParams as MultiplierListParams,
  };

  export {
    Badges as Badges,
    type BadgeCreateResponse as BadgeCreateResponse,
    type BadgeUpdateResponse as BadgeUpdateResponse,
    type BadgeListResponse as BadgeListResponse,
    type BadgeDeleteResponse as BadgeDeleteResponse,
    type BadgeRevokeResponse as BadgeRevokeResponse,
    type BadgeRewardResponse as BadgeRewardResponse,
    type BadgeCreateParams as BadgeCreateParams,
    type BadgeUpdateParams as BadgeUpdateParams,
    type BadgeListParams as BadgeListParams,
    type BadgeRevokeParams as BadgeRevokeParams,
    type BadgeRewardParams as BadgeRewardParams,
  };
}
