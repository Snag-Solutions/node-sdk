# Assets

Types:

- <code><a href="./src/resources/assets.ts">AssetCreateAssetResponse</a></code>

Methods:

- <code title="post /api/assets">client.assets.<a href="./src/resources/assets.ts">createAsset</a>({ ...params }) -> AssetCreateAssetResponse</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthConnectAuthResponse</a></code>

Methods:

- <code title="get /api/{authType}/auth">client.auth.<a href="./src/resources/auth.ts">connectAuth</a>(authType, { ...params }) -> AuthConnectAuthResponse</code>

# Auctions

Types:

- <code><a href="./src/resources/auctions.ts">AuctionListAuctionsResponse</a></code>

Methods:

- <code title="get /api/auction_bids">client.auctions.<a href="./src/resources/auctions.ts">listAuctionBids</a>({ ...params }) -> void</code>
- <code title="get /api/auctions">client.auctions.<a href="./src/resources/auctions.ts">listAuctions</a>() -> AuctionListAuctionsResponse</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserConnectResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserCountResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserDisconnectResponse</a></code>

Methods:

- <code title="get /api/users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="post /api/users/connect">client.users.<a href="./src/resources/users/users.ts">connect</a>({ ...params }) -> UserConnectResponse</code>
- <code title="get /api/users/count">client.users.<a href="./src/resources/users/users.ts">count</a>({ ...params }) -> UserCountResponse</code>
- <code title="post /api/users/disconnect">client.users.<a href="./src/resources/users/users.ts">disconnect</a>({ ...params }) -> unknown</code>

## Metadatas

Types:

- <code><a href="./src/resources/users/metadatas.ts">MetadataCreateResponse</a></code>
- <code><a href="./src/resources/users/metadatas.ts">MetadataListResponse</a></code>

Methods:

- <code title="post /api/users/metadatas">client.users.metadatas.<a href="./src/resources/users/metadatas.ts">create</a>({ ...params }) -> MetadataCreateResponse</code>
- <code title="get /api/users/metadatas">client.users.metadatas.<a href="./src/resources/users/metadatas.ts">list</a>({ ...params }) -> MetadataListResponse</code>

# Loyalty

## RuleChains

Types:

- <code><a href="./src/resources/loyalty/rule-chains.ts">RuleChainGetResponse</a></code>

Methods:

- <code title="get /api/loyalty/rule_chains">client.loyalty.ruleChains.<a href="./src/resources/loyalty/rule-chains.ts">get</a>({ ...params }) -> RuleChainGetResponse</code>

## RuleGroups

Types:

- <code><a href="./src/resources/loyalty/rule-groups.ts">RuleGroupCreateRuleGroupResponse</a></code>
- <code><a href="./src/resources/loyalty/rule-groups.ts">RuleGroupDeleteRuleGroupResponse</a></code>
- <code><a href="./src/resources/loyalty/rule-groups.ts">RuleGroupGetRuleGroupsResponse</a></code>
- <code><a href="./src/resources/loyalty/rule-groups.ts">RuleGroupUpdateRuleGroupResponse</a></code>

Methods:

- <code title="post /api/loyalty/rule_groups/create">client.loyalty.ruleGroups.<a href="./src/resources/loyalty/rule-groups.ts">createRuleGroup</a>({ ...params }) -> RuleGroupCreateRuleGroupResponse</code>
- <code title="delete /api/loyalty/rule_groups/{id}">client.loyalty.ruleGroups.<a href="./src/resources/loyalty/rule-groups.ts">deleteRuleGroup</a>(id) -> unknown</code>
- <code title="get /api/loyalty/rule_groups">client.loyalty.ruleGroups.<a href="./src/resources/loyalty/rule-groups.ts">getRuleGroups</a>({ ...params }) -> RuleGroupGetRuleGroupsResponse</code>
- <code title="post /api/loyalty/rule_groups/{id}">client.loyalty.ruleGroups.<a href="./src/resources/loyalty/rule-groups.ts">updateRuleGroup</a>(id, { ...params }) -> RuleGroupUpdateRuleGroupResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/loyalty/transactions.ts">TransactionCreateTransactionResponse</a></code>
- <code><a href="./src/resources/loyalty/transactions.ts">TransactionGetTransactionEntriesResponse</a></code>

Methods:

- <code title="post /api/loyalty/transactions">client.loyalty.transactions.<a href="./src/resources/loyalty/transactions.ts">createTransaction</a>({ ...params }) -> TransactionCreateTransactionResponse</code>
- <code title="get /api/loyalty/transaction_entries">client.loyalty.transactions.<a href="./src/resources/loyalty/transactions.ts">getTransactionEntries</a>({ ...params }) -> TransactionGetTransactionEntriesResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/loyalty/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/loyalty/accounts.ts">AccountRetrieveRankResponse</a></code>

Methods:

- <code title="get /api/loyalty/accounts">client.loyalty.accounts.<a href="./src/resources/loyalty/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="get /api/loyalty/accounts/{id}/rank">client.loyalty.accounts.<a href="./src/resources/loyalty/accounts.ts">retrieveRank</a>(id, { ...params }) -> AccountRetrieveRankResponse</code>

## Badges

Types:

- <code><a href="./src/resources/loyalty/badges.ts">BadgeCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/badges.ts">BadgeUpdateResponse</a></code>
- <code><a href="./src/resources/loyalty/badges.ts">BadgeListResponse</a></code>
- <code><a href="./src/resources/loyalty/badges.ts">BadgeDeleteResponse</a></code>
- <code><a href="./src/resources/loyalty/badges.ts">BadgeRevokeResponse</a></code>
- <code><a href="./src/resources/loyalty/badges.ts">BadgeRewardResponse</a></code>

Methods:

- <code title="post /api/loyalty/badges">client.loyalty.badges.<a href="./src/resources/loyalty/badges.ts">create</a>({ ...params }) -> BadgeCreateResponse</code>
- <code title="post /api/loyalty/badges/{id}">client.loyalty.badges.<a href="./src/resources/loyalty/badges.ts">update</a>(id, { ...params }) -> BadgeUpdateResponse</code>
- <code title="get /api/loyalty/badges">client.loyalty.badges.<a href="./src/resources/loyalty/badges.ts">list</a>({ ...params }) -> BadgeListResponse</code>
- <code title="delete /api/loyalty/badges/{id}">client.loyalty.badges.<a href="./src/resources/loyalty/badges.ts">delete</a>(id) -> BadgeDeleteResponse</code>
- <code title="post /api/loyalty/badges/{id}/revoke">client.loyalty.badges.<a href="./src/resources/loyalty/badges.ts">revoke</a>(id, { ...params }) -> BadgeRevokeResponse</code>
- <code title="post /api/loyalty/badges/{id}/reward">client.loyalty.badges.<a href="./src/resources/loyalty/badges.ts">reward</a>(id, { ...params }) -> BadgeRewardResponse</code>

## Currencies

Types:

- <code><a href="./src/resources/loyalty/currencies.ts">CurrencyCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/currencies.ts">CurrencyListResponse</a></code>

Methods:

- <code title="post /api/loyalty/currencies">client.loyalty.currencies.<a href="./src/resources/loyalty/currencies.ts">create</a>({ ...params }) -> CurrencyCreateResponse</code>
- <code title="get /api/loyalty/currencies">client.loyalty.currencies.<a href="./src/resources/loyalty/currencies.ts">list</a>({ ...params }) -> CurrencyListResponse</code>

## Multipliers

Types:

- <code><a href="./src/resources/loyalty/multipliers.ts">MultiplierCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/multipliers.ts">MultiplierUpdateResponse</a></code>
- <code><a href="./src/resources/loyalty/multipliers.ts">MultiplierListResponse</a></code>
- <code><a href="./src/resources/loyalty/multipliers.ts">MultiplierDeleteResponse</a></code>
- <code><a href="./src/resources/loyalty/multipliers.ts">MultiplierDeleteByExternalIDResponse</a></code>

Methods:

- <code title="post /api/loyalty/multipliers">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">create</a>({ ...params }) -> MultiplierCreateResponse</code>
- <code title="post /api/loyalty/multipliers/{multiplierId}">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">update</a>(multiplierId, { ...params }) -> MultiplierUpdateResponse</code>
- <code title="get /api/loyalty/multipliers">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">list</a>({ ...params }) -> MultiplierListResponse</code>
- <code title="delete /api/loyalty/multipliers/{multiplierId}">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">delete</a>(multiplierId) -> MultiplierDeleteResponse</code>
- <code title="delete /api/loyalty/multipliers">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">deleteByExternalId</a>({ ...params }) -> MultiplierDeleteByExternalIDResponse</code>

## RuleEdits

Types:

- <code><a href="./src/resources/loyalty/rule-edits.ts">RuleEditListResponse</a></code>
- <code><a href="./src/resources/loyalty/rule-edits.ts">RuleEditRestoreResponse</a></code>

Methods:

- <code title="get /api/loyalty/rule_edits">client.loyalty.ruleEdits.<a href="./src/resources/loyalty/rule-edits.ts">list</a>({ ...params }) -> RuleEditListResponse</code>
- <code title="post /api/loyalty/rule_edits/{id}/restore">client.loyalty.ruleEdits.<a href="./src/resources/loyalty/rule-edits.ts">restore</a>(id) -> RuleEditRestoreResponse</code>

## Rules

Types:

- <code><a href="./src/resources/loyalty/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleCompleteResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleGetStatusResponse</a></code>

Methods:

- <code title="post /api/loyalty/rules">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">create</a>({ ...params }) -> RuleCreateResponse</code>
- <code title="post /api/loyalty/rules/{id}">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">update</a>(id, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /api/loyalty/rules">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">list</a>({ ...params }) -> RuleListResponse</code>
- <code title="delete /api/loyalty/rules/{id}">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">delete</a>(id) -> RuleDeleteResponse</code>
- <code title="post /api/loyalty/rules/{id}/complete">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">complete</a>(id, { ...params }) -> RuleCompleteResponse</code>
- <code title="get /api/loyalty/rules/status">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">getStatus</a>({ ...params }) -> RuleGetStatusResponse</code>

## Questions

Types:

- <code><a href="./src/resources/loyalty/questions.ts">QuestionCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/questions.ts">QuestionUpdateResponse</a></code>
- <code><a href="./src/resources/loyalty/questions.ts">QuestionListResponse</a></code>

Methods:

- <code title="post /api/loyalty/questions">client.loyalty.questions.<a href="./src/resources/loyalty/questions.ts">create</a>({ ...params }) -> QuestionCreateResponse</code>
- <code title="post /api/loyalty/questions/{id}">client.loyalty.questions.<a href="./src/resources/loyalty/questions.ts">update</a>(id, { ...params }) -> QuestionUpdateResponse</code>
- <code title="get /api/loyalty/questions">client.loyalty.questions.<a href="./src/resources/loyalty/questions.ts">list</a>({ ...params }) -> QuestionListResponse</code>

## QuestionsResponses

Types:

- <code><a href="./src/resources/loyalty/questions-responses.ts">QuestionsResponseListResponse</a></code>
- <code><a href="./src/resources/loyalty/questions-responses.ts">QuestionsResponseSubmitResponse</a></code>

Methods:

- <code title="get /api/loyalty/questions_responses">client.loyalty.questionsResponses.<a href="./src/resources/loyalty/questions-responses.ts">list</a>({ ...params }) -> QuestionsResponseListResponse</code>
- <code title="post /api/loyalty/questions_responses">client.loyalty.questionsResponses.<a href="./src/resources/loyalty/questions-responses.ts">submit</a>({ ...params }) -> QuestionsResponseSubmitResponse</code>

# Minting

Types:

- <code><a href="./src/resources/minting.ts">MintingGetAssetsResponse</a></code>

Methods:

- <code title="get /api/minting/assets">client.minting.<a href="./src/resources/minting.ts">getAssets</a>({ ...params }) -> MintingGetAssetsResponse</code>

# Referral

Types:

- <code><a href="./src/resources/referral/referral.ts">ReferralCreateCodeResponse</a></code>

Methods:

- <code title="post /api/referral/codes">client.referral.<a href="./src/resources/referral/referral.ts">createCode</a>({ ...params }) -> ReferralCreateCodeResponse</code>

## Users

Types:

- <code><a href="./src/resources/referral/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/referral/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /api/referral/users">client.referral.users.<a href="./src/resources/referral/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /api/referral/users">client.referral.users.<a href="./src/resources/referral/users.ts">list</a>({ ...params }) -> UserListResponse</code>

# Websites

Types:

- <code><a href="./src/resources/websites/websites.ts">WebsiteCreateResponse</a></code>
- <code><a href="./src/resources/websites/websites.ts">WebsiteListResponse</a></code>

Methods:

- <code title="post /api/websites">client.websites.<a href="./src/resources/websites/websites.ts">create</a>({ ...params }) -> WebsiteCreateResponse</code>
- <code title="get /api/websites">client.websites.<a href="./src/resources/websites/websites.ts">list</a>({ ...params }) -> WebsiteListResponse</code>

## WebsiteCollections

Types:

- <code><a href="./src/resources/websites/website-collections.ts">WebsiteCollectionListResponse</a></code>

Methods:

- <code title="post /api/website_collections">client.websites.websiteCollections.<a href="./src/resources/websites/website-collections.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/website_collections">client.websites.websiteCollections.<a href="./src/resources/websites/website-collections.ts">list</a>({ ...params }) -> WebsiteCollectionListResponse</code>

## WebsiteUserRoles

Types:

- <code><a href="./src/resources/websites/website-user-roles.ts">WebsiteUserRoleListResponse</a></code>
- <code><a href="./src/resources/websites/website-user-roles.ts">WebsiteUserRoleAssignResponse</a></code>

Methods:

- <code title="get /api/website_user_roles">client.websites.websiteUserRoles.<a href="./src/resources/websites/website-user-roles.ts">list</a>({ ...params }) -> WebsiteUserRoleListResponse</code>
- <code title="post /api/website_user_roles">client.websites.websiteUserRoles.<a href="./src/resources/websites/website-user-roles.ts">assign</a>({ ...params }) -> WebsiteUserRoleAssignResponse</code>
