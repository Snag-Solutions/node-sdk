// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountStreaksAPI from './account-streaks';
import {
  AccountStreakGetStreaksParams,
  AccountStreakGetStreaksResponse,
  AccountStreaks,
} from './account-streaks';
import * as AccountsAPI from './accounts';
import {
  AccountListParams,
  AccountListResponse,
  AccountRetrieveRankParams,
  AccountRetrieveRankResponse,
  Accounts,
} from './accounts';
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
  MultiplierDeleteByExternalIDParams,
  MultiplierDeleteByExternalIDResponse,
  MultiplierDeleteResponse,
  MultiplierListParams,
  MultiplierListResponse,
  MultiplierUpdateParams,
  MultiplierUpdateResponse,
  Multipliers,
} from './multipliers';
import * as QuestionsAPI from './questions';
import {
  QuestionCreateParams,
  QuestionCreateResponse,
  QuestionListParams,
  QuestionListResponse,
  QuestionUpdateParams,
  QuestionUpdateResponse,
  Questions,
} from './questions';
import * as QuestionsResponsesAPI from './questions-responses';
import {
  QuestionsResponseListParams,
  QuestionsResponseListResponse,
  QuestionsResponseSubmitParams,
  QuestionsResponseSubmitResponse,
  QuestionsResponses,
} from './questions-responses';
import * as RuleEditsAPI from './rule-edits';
import {
  RuleEditListParams,
  RuleEditListResponse,
  RuleEditRestoreParams,
  RuleEditRestoreResponse,
  RuleEdits,
} from './rule-edits';
import * as RuleGroupsAPI from './rule-groups';
import {
  RuleGroupCreateRuleGroupParams,
  RuleGroupCreateRuleGroupResponse,
  RuleGroupDeleteRuleGroupResponse,
  RuleGroupGetRuleGroupsParams,
  RuleGroupGetRuleGroupsResponse,
  RuleGroupUpdateRuleGroupParams,
  RuleGroupUpdateRuleGroupResponse,
  RuleGroups,
} from './rule-groups';
import * as RulesAPI from './rules';
import {
  RuleCompleteParams,
  RuleCompleteResponse,
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleGetStatusParams,
  RuleGetStatusResponse,
  RuleListParams,
  RuleListResponse,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';
import * as TransactionsAPI from './transactions/transactions';
import {
  TransactionCreateTransactionParams,
  TransactionCreateTransactionResponse,
  TransactionGetTransactionEntriesParams,
  TransactionGetTransactionEntriesResponse,
  TransactionListBadgeUsersParams,
  TransactionListBadgeUsersResponse,
  TransactionListRuleChainsParams,
  TransactionListRuleChainsResponse,
  TransactionResetLoyaltyCurrencyParams,
  TransactionResetLoyaltyCurrencyResponse,
  Transactions,
} from './transactions/transactions';

export class Loyalty extends APIResource {
  ruleGroups: RuleGroupsAPI.RuleGroups = new RuleGroupsAPI.RuleGroups(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  accountStreaks: AccountStreaksAPI.AccountStreaks = new AccountStreaksAPI.AccountStreaks(this._client);
  badges: BadgesAPI.Badges = new BadgesAPI.Badges(this._client);
  currencies: CurrenciesAPI.Currencies = new CurrenciesAPI.Currencies(this._client);
  multipliers: MultipliersAPI.Multipliers = new MultipliersAPI.Multipliers(this._client);
  ruleEdits: RuleEditsAPI.RuleEdits = new RuleEditsAPI.RuleEdits(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  questions: QuestionsAPI.Questions = new QuestionsAPI.Questions(this._client);
  questionsResponses: QuestionsResponsesAPI.QuestionsResponses = new QuestionsResponsesAPI.QuestionsResponses(
    this._client,
  );
}

Loyalty.RuleGroups = RuleGroups;
Loyalty.Transactions = Transactions;
Loyalty.Accounts = Accounts;
Loyalty.AccountStreaks = AccountStreaks;
Loyalty.Badges = Badges;
Loyalty.Currencies = Currencies;
Loyalty.Multipliers = Multipliers;
Loyalty.RuleEdits = RuleEdits;
Loyalty.Rules = Rules;
Loyalty.Questions = Questions;
Loyalty.QuestionsResponses = QuestionsResponses;

export declare namespace Loyalty {
  export {
    RuleGroups as RuleGroups,
    type RuleGroupCreateRuleGroupResponse as RuleGroupCreateRuleGroupResponse,
    type RuleGroupDeleteRuleGroupResponse as RuleGroupDeleteRuleGroupResponse,
    type RuleGroupGetRuleGroupsResponse as RuleGroupGetRuleGroupsResponse,
    type RuleGroupUpdateRuleGroupResponse as RuleGroupUpdateRuleGroupResponse,
    type RuleGroupCreateRuleGroupParams as RuleGroupCreateRuleGroupParams,
    type RuleGroupGetRuleGroupsParams as RuleGroupGetRuleGroupsParams,
    type RuleGroupUpdateRuleGroupParams as RuleGroupUpdateRuleGroupParams,
  };

  export {
    Transactions as Transactions,
    type TransactionCreateTransactionResponse as TransactionCreateTransactionResponse,
    type TransactionGetTransactionEntriesResponse as TransactionGetTransactionEntriesResponse,
    type TransactionListBadgeUsersResponse as TransactionListBadgeUsersResponse,
    type TransactionListRuleChainsResponse as TransactionListRuleChainsResponse,
    type TransactionResetLoyaltyCurrencyResponse as TransactionResetLoyaltyCurrencyResponse,
    type TransactionCreateTransactionParams as TransactionCreateTransactionParams,
    type TransactionGetTransactionEntriesParams as TransactionGetTransactionEntriesParams,
    type TransactionListBadgeUsersParams as TransactionListBadgeUsersParams,
    type TransactionListRuleChainsParams as TransactionListRuleChainsParams,
    type TransactionResetLoyaltyCurrencyParams as TransactionResetLoyaltyCurrencyParams,
  };

  export {
    Accounts as Accounts,
    type AccountListResponse as AccountListResponse,
    type AccountRetrieveRankResponse as AccountRetrieveRankResponse,
    type AccountListParams as AccountListParams,
    type AccountRetrieveRankParams as AccountRetrieveRankParams,
  };

  export {
    AccountStreaks as AccountStreaks,
    type AccountStreakGetStreaksResponse as AccountStreakGetStreaksResponse,
    type AccountStreakGetStreaksParams as AccountStreakGetStreaksParams,
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

  export {
    Currencies as Currencies,
    type CurrencyCreateResponse as CurrencyCreateResponse,
    type CurrencyListResponse as CurrencyListResponse,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyListParams as CurrencyListParams,
  };

  export {
    Multipliers as Multipliers,
    type MultiplierCreateResponse as MultiplierCreateResponse,
    type MultiplierUpdateResponse as MultiplierUpdateResponse,
    type MultiplierListResponse as MultiplierListResponse,
    type MultiplierDeleteResponse as MultiplierDeleteResponse,
    type MultiplierDeleteByExternalIDResponse as MultiplierDeleteByExternalIDResponse,
    type MultiplierCreateParams as MultiplierCreateParams,
    type MultiplierUpdateParams as MultiplierUpdateParams,
    type MultiplierListParams as MultiplierListParams,
    type MultiplierDeleteByExternalIDParams as MultiplierDeleteByExternalIDParams,
  };

  export {
    RuleEdits as RuleEdits,
    type RuleEditListResponse as RuleEditListResponse,
    type RuleEditRestoreResponse as RuleEditRestoreResponse,
    type RuleEditListParams as RuleEditListParams,
    type RuleEditRestoreParams as RuleEditRestoreParams,
  };

  export {
    Rules as Rules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleCompleteResponse as RuleCompleteResponse,
    type RuleGetStatusResponse as RuleGetStatusResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleCompleteParams as RuleCompleteParams,
    type RuleGetStatusParams as RuleGetStatusParams,
  };

  export {
    Questions as Questions,
    type QuestionCreateResponse as QuestionCreateResponse,
    type QuestionUpdateResponse as QuestionUpdateResponse,
    type QuestionListResponse as QuestionListResponse,
    type QuestionCreateParams as QuestionCreateParams,
    type QuestionUpdateParams as QuestionUpdateParams,
    type QuestionListParams as QuestionListParams,
  };

  export {
    QuestionsResponses as QuestionsResponses,
    type QuestionsResponseListResponse as QuestionsResponseListResponse,
    type QuestionsResponseSubmitResponse as QuestionsResponseSubmitResponse,
    type QuestionsResponseListParams as QuestionsResponseListParams,
    type QuestionsResponseSubmitParams as QuestionsResponseSubmitParams,
  };
}
