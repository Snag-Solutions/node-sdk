# API

Types:

- <code><a href="./src/resources/api/api.ts">APIConnectAuthResponse</a></code>
- <code><a href="./src/resources/api/api.ts">APICreateAssetResponse</a></code>
- <code><a href="./src/resources/api/api.ts">APIListAuctionsResponse</a></code>

Methods:

- <code title="get /api/{authType}/auth">client.api.<a href="./src/resources/api/api.ts">connectAuth</a>(authType, { ...params }) -> APIConnectAuthResponse</code>
- <code title="post /api/assets">client.api.<a href="./src/resources/api/api.ts">createAsset</a>({ ...params }) -> APICreateAssetResponse</code>
- <code title="get /api/auction_bids">client.api.<a href="./src/resources/api/api.ts">listAuctionBids</a>({ ...params }) -> void</code>
- <code title="get /api/auctions">client.api.<a href="./src/resources/api/api.ts">listAuctions</a>() -> APIListAuctionsResponse</code>

## Users

Types:

- <code><a href="./src/resources/api/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/api/users/users.ts">UserConnectResponse</a></code>
- <code><a href="./src/resources/api/users/users.ts">UserCountResponse</a></code>
- <code><a href="./src/resources/api/users/users.ts">UserDisconnectResponse</a></code>

Methods:

- <code title="get /api/users">client.api.users.<a href="./src/resources/api/users/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="post /api/users/connect">client.api.users.<a href="./src/resources/api/users/users.ts">connect</a>({ ...params }) -> UserConnectResponse</code>
- <code title="get /api/users/count">client.api.users.<a href="./src/resources/api/users/users.ts">count</a>({ ...params }) -> UserCountResponse</code>
- <code title="post /api/users/disconnect">client.api.users.<a href="./src/resources/api/users/users.ts">disconnect</a>({ ...params }) -> unknown</code>

### Metadatas

Types:

- <code><a href="./src/resources/api/users/metadatas.ts">MetadataCreateResponse</a></code>
- <code><a href="./src/resources/api/users/metadatas.ts">MetadataListResponse</a></code>

Methods:

- <code title="post /api/users/metadatas">client.api.users.metadatas.<a href="./src/resources/api/users/metadatas.ts">create</a>({ ...params }) -> MetadataCreateResponse</code>
- <code title="get /api/users/metadatas">client.api.users.metadatas.<a href="./src/resources/api/users/metadatas.ts">list</a>({ ...params }) -> MetadataListResponse</code>

## Loyalty

Types:

- <code><a href="./src/resources/api/loyalty/loyalty.ts">LoyaltyCreateTransactionResponse</a></code>
- <code><a href="./src/resources/api/loyalty/loyalty.ts">LoyaltyGetRuleGroupsResponse</a></code>
- <code><a href="./src/resources/api/loyalty/loyalty.ts">LoyaltyGetTransactionEntriesResponse</a></code>

Methods:

- <code title="post /api/loyalty/transactions">client.api.loyalty.<a href="./src/resources/api/loyalty/loyalty.ts">createTransaction</a>({ ...params }) -> LoyaltyCreateTransactionResponse</code>
- <code title="get /api/loyalty/rule_groups">client.api.loyalty.<a href="./src/resources/api/loyalty/loyalty.ts">getRuleGroups</a>({ ...params }) -> LoyaltyGetRuleGroupsResponse</code>
- <code title="get /api/loyalty/transaction_entries">client.api.loyalty.<a href="./src/resources/api/loyalty/loyalty.ts">getTransactionEntries</a>({ ...params }) -> LoyaltyGetTransactionEntriesResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/api/loyalty/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/api/loyalty/accounts.ts">AccountRetrieveRankResponse</a></code>

Methods:

- <code title="get /api/loyalty/accounts">client.api.loyalty.accounts.<a href="./src/resources/api/loyalty/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="get /api/loyalty/accounts/{id}/rank">client.api.loyalty.accounts.<a href="./src/resources/api/loyalty/accounts.ts">retrieveRank</a>(id, { ...params }) -> AccountRetrieveRankResponse</code>

### Badges

Types:

- <code><a href="./src/resources/api/loyalty/badges.ts">BadgeCreateResponse</a></code>
- <code><a href="./src/resources/api/loyalty/badges.ts">BadgeUpdateResponse</a></code>
- <code><a href="./src/resources/api/loyalty/badges.ts">BadgeListResponse</a></code>
- <code><a href="./src/resources/api/loyalty/badges.ts">BadgeDeleteResponse</a></code>
- <code><a href="./src/resources/api/loyalty/badges.ts">BadgeRevokeResponse</a></code>
- <code><a href="./src/resources/api/loyalty/badges.ts">BadgeRewardResponse</a></code>

Methods:

- <code title="post /api/loyalty/badges">client.api.loyalty.badges.<a href="./src/resources/api/loyalty/badges.ts">create</a>({ ...params }) -> BadgeCreateResponse</code>
- <code title="post /api/loyalty/badges/{id}">client.api.loyalty.badges.<a href="./src/resources/api/loyalty/badges.ts">update</a>(id, { ...params }) -> BadgeUpdateResponse</code>
- <code title="get /api/loyalty/badges">client.api.loyalty.badges.<a href="./src/resources/api/loyalty/badges.ts">list</a>({ ...params }) -> BadgeListResponse</code>
- <code title="delete /api/loyalty/badges/{id}">client.api.loyalty.badges.<a href="./src/resources/api/loyalty/badges.ts">delete</a>(id) -> BadgeDeleteResponse</code>
- <code title="post /api/loyalty/badges/{id}/revoke">client.api.loyalty.badges.<a href="./src/resources/api/loyalty/badges.ts">revoke</a>(id, { ...params }) -> BadgeRevokeResponse</code>
- <code title="post /api/loyalty/badges/{id}/reward">client.api.loyalty.badges.<a href="./src/resources/api/loyalty/badges.ts">reward</a>(id, { ...params }) -> BadgeRewardResponse</code>

### Currencies

Types:

- <code><a href="./src/resources/api/loyalty/currencies.ts">CurrencyCreateResponse</a></code>
- <code><a href="./src/resources/api/loyalty/currencies.ts">CurrencyListResponse</a></code>

Methods:

- <code title="post /api/loyalty/currencies">client.api.loyalty.currencies.<a href="./src/resources/api/loyalty/currencies.ts">create</a>({ ...params }) -> CurrencyCreateResponse</code>
- <code title="get /api/loyalty/currencies">client.api.loyalty.currencies.<a href="./src/resources/api/loyalty/currencies.ts">list</a>({ ...params }) -> CurrencyListResponse</code>

### Multipliers

Types:

- <code><a href="./src/resources/api/loyalty/multipliers.ts">MultiplierCreateResponse</a></code>
- <code><a href="./src/resources/api/loyalty/multipliers.ts">MultiplierUpdateResponse</a></code>
- <code><a href="./src/resources/api/loyalty/multipliers.ts">MultiplierListResponse</a></code>
- <code><a href="./src/resources/api/loyalty/multipliers.ts">MultiplierDeleteResponse</a></code>
- <code><a href="./src/resources/api/loyalty/multipliers.ts">MultiplierDeleteByExternalIDResponse</a></code>

Methods:

- <code title="post /api/loyalty/multipliers">client.api.loyalty.multipliers.<a href="./src/resources/api/loyalty/multipliers.ts">create</a>({ ...params }) -> MultiplierCreateResponse</code>
- <code title="post /api/loyalty/multipliers/{multiplierId}">client.api.loyalty.multipliers.<a href="./src/resources/api/loyalty/multipliers.ts">update</a>(multiplierId, { ...params }) -> MultiplierUpdateResponse</code>
- <code title="get /api/loyalty/multipliers">client.api.loyalty.multipliers.<a href="./src/resources/api/loyalty/multipliers.ts">list</a>({ ...params }) -> MultiplierListResponse</code>
- <code title="delete /api/loyalty/multipliers/{multiplierId}">client.api.loyalty.multipliers.<a href="./src/resources/api/loyalty/multipliers.ts">delete</a>(multiplierId) -> MultiplierDeleteResponse</code>
- <code title="delete /api/loyalty/multipliers">client.api.loyalty.multipliers.<a href="./src/resources/api/loyalty/multipliers.ts">deleteByExternalId</a>({ ...params }) -> MultiplierDeleteByExternalIDResponse</code>

### RuleEdits

Types:

- <code><a href="./src/resources/api/loyalty/rule-edits.ts">RuleEditListResponse</a></code>
- <code><a href="./src/resources/api/loyalty/rule-edits.ts">RuleEditRestoreResponse</a></code>

Methods:

- <code title="get /api/loyalty/rule_edits">client.api.loyalty.ruleEdits.<a href="./src/resources/api/loyalty/rule-edits.ts">list</a>({ ...params }) -> RuleEditListResponse</code>
- <code title="post /api/loyalty/rule_edits/{id}/restore">client.api.loyalty.ruleEdits.<a href="./src/resources/api/loyalty/rule-edits.ts">restore</a>(id) -> RuleEditRestoreResponse</code>

### Rules

Types:

- <code><a href="./src/resources/api/loyalty/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/api/loyalty/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/api/loyalty/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/api/loyalty/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/api/loyalty/rules.ts">RuleCompleteResponse</a></code>
- <code><a href="./src/resources/api/loyalty/rules.ts">RuleGetStatusResponse</a></code>

Methods:

- <code title="post /api/loyalty/rules">client.api.loyalty.rules.<a href="./src/resources/api/loyalty/rules.ts">create</a>({ ...params }) -> RuleCreateResponse</code>
- <code title="post /api/loyalty/rules/{id}">client.api.loyalty.rules.<a href="./src/resources/api/loyalty/rules.ts">update</a>(id, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /api/loyalty/rules">client.api.loyalty.rules.<a href="./src/resources/api/loyalty/rules.ts">list</a>({ ...params }) -> RuleListResponse</code>
- <code title="delete /api/loyalty/rules/{id}">client.api.loyalty.rules.<a href="./src/resources/api/loyalty/rules.ts">delete</a>(id) -> RuleDeleteResponse</code>
- <code title="post /api/loyalty/rules/{id}/complete">client.api.loyalty.rules.<a href="./src/resources/api/loyalty/rules.ts">complete</a>(id, { ...params }) -> RuleCompleteResponse</code>
- <code title="get /api/loyalty/rules/status">client.api.loyalty.rules.<a href="./src/resources/api/loyalty/rules.ts">getStatus</a>({ ...params }) -> RuleGetStatusResponse</code>

### Questions

Types:

- <code><a href="./src/resources/api/loyalty/questions.ts">QuestionCreateResponse</a></code>
- <code><a href="./src/resources/api/loyalty/questions.ts">QuestionUpdateResponse</a></code>
- <code><a href="./src/resources/api/loyalty/questions.ts">QuestionListResponse</a></code>

Methods:

- <code title="post /api/loyalty/questions">client.api.loyalty.questions.<a href="./src/resources/api/loyalty/questions.ts">create</a>({ ...params }) -> QuestionCreateResponse</code>
- <code title="post /api/loyalty/questions/{id}">client.api.loyalty.questions.<a href="./src/resources/api/loyalty/questions.ts">update</a>(id, { ...params }) -> QuestionUpdateResponse</code>
- <code title="get /api/loyalty/questions">client.api.loyalty.questions.<a href="./src/resources/api/loyalty/questions.ts">list</a>({ ...params }) -> QuestionListResponse</code>

### QuestionsResponses

Types:

- <code><a href="./src/resources/api/loyalty/questions-responses.ts">QuestionsResponseListResponse</a></code>
- <code><a href="./src/resources/api/loyalty/questions-responses.ts">QuestionsResponseSubmitResponse</a></code>

Methods:

- <code title="get /api/loyalty/questions_responses">client.api.loyalty.questionsResponses.<a href="./src/resources/api/loyalty/questions-responses.ts">list</a>({ ...params }) -> QuestionsResponseListResponse</code>
- <code title="post /api/loyalty/questions_responses">client.api.loyalty.questionsResponses.<a href="./src/resources/api/loyalty/questions-responses.ts">submit</a>({ ...params }) -> QuestionsResponseSubmitResponse</code>

## API

### Loyalty

Types:

- <code><a href="./src/resources/api/api/loyalty.ts">LoyaltyGetRuleChainsResponse</a></code>

Methods:

- <code title="get /api/api/loyalty/rule_chains">client.api.api.loyalty.<a href="./src/resources/api/api/loyalty.ts">getRuleChains</a>({ ...params }) -> LoyaltyGetRuleChainsResponse</code>

## Minting

Types:

- <code><a href="./src/resources/api/minting.ts">MintingGetAssetsResponse</a></code>

Methods:

- <code title="get /api/minting/assets">client.api.minting.<a href="./src/resources/api/minting.ts">getAssets</a>({ ...params }) -> MintingGetAssetsResponse</code>

## Referral

Types:

- <code><a href="./src/resources/api/referral/referral.ts">ReferralCreateCodeResponse</a></code>

Methods:

- <code title="post /api/referral/codes">client.api.referral.<a href="./src/resources/api/referral/referral.ts">createCode</a>({ ...params }) -> ReferralCreateCodeResponse</code>

### Users

Types:

- <code><a href="./src/resources/api/referral/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/api/referral/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /api/referral/users">client.api.referral.users.<a href="./src/resources/api/referral/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /api/referral/users">client.api.referral.users.<a href="./src/resources/api/referral/users.ts">list</a>({ ...params }) -> UserListResponse</code>

## Websites

Types:

- <code><a href="./src/resources/api/websites.ts">WebsiteCreateResponse</a></code>
- <code><a href="./src/resources/api/websites.ts">WebsiteListResponse</a></code>

Methods:

- <code title="post /api/websites">client.api.websites.<a href="./src/resources/api/websites.ts">create</a>({ ...params }) -> WebsiteCreateResponse</code>
- <code title="get /api/websites">client.api.websites.<a href="./src/resources/api/websites.ts">list</a>({ ...params }) -> WebsiteListResponse</code>

## WebsiteCollections

Types:

- <code><a href="./src/resources/api/website-collections.ts">WebsiteCollectionListResponse</a></code>

Methods:

- <code title="post /api/website_collections">client.api.websiteCollections.<a href="./src/resources/api/website-collections.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/website_collections">client.api.websiteCollections.<a href="./src/resources/api/website-collections.ts">list</a>({ ...params }) -> WebsiteCollectionListResponse</code>

## WebsiteUserRoles

Types:

- <code><a href="./src/resources/api/website-user-roles.ts">WebsiteUserRoleListResponse</a></code>
- <code><a href="./src/resources/api/website-user-roles.ts">WebsiteUserRoleAssignResponse</a></code>

Methods:

- <code title="get /api/website_user_roles">client.api.websiteUserRoles.<a href="./src/resources/api/website-user-roles.ts">list</a>({ ...params }) -> WebsiteUserRoleListResponse</code>
- <code title="post /api/website_user_roles">client.api.websiteUserRoles.<a href="./src/resources/api/website-user-roles.ts">assign</a>({ ...params }) -> WebsiteUserRoleAssignResponse</code>
