# Assets

Types:

- <code><a href="./src/resources/assets/assets.ts">AssetCreateResponse</a></code>
- <code><a href="./src/resources/assets/assets.ts">AssetGetAuctionsResponse</a></code>

Methods:

- <code title="post /api/assets">client.assets.<a href="./src/resources/assets/assets.ts">create</a>({ ...params }) -> AssetCreateResponse</code>
- <code title="get /api/auctions">client.assets.<a href="./src/resources/assets/assets.ts">getAuctions</a>() -> AssetGetAuctionsResponse</code>

## Users

Types:

- <code><a href="./src/resources/assets/users.ts">UserConnectUserResponse</a></code>
- <code><a href="./src/resources/assets/users.ts">UserDisconnectUserResponse</a></code>
- <code><a href="./src/resources/assets/users.ts">UserGetUserCountResponse</a></code>
- <code><a href="./src/resources/assets/users.ts">UserGetUsersResponse</a></code>

Methods:

- <code title="post /api/users/connect">client.assets.users.<a href="./src/resources/assets/users.ts">connectUser</a>({ ...params }) -> UserConnectUserResponse</code>
- <code title="post /api/users/disconnect">client.assets.users.<a href="./src/resources/assets/users.ts">disconnectUser</a>({ ...params }) -> unknown</code>
- <code title="get /api/users/count">client.assets.users.<a href="./src/resources/assets/users.ts">getUserCount</a>({ ...params }) -> UserGetUserCountResponse</code>
- <code title="get /api/users">client.assets.users.<a href="./src/resources/assets/users.ts">getUsers</a>({ ...params }) -> UserGetUsersResponse</code>

## Minting

Types:

- <code><a href="./src/resources/assets/minting.ts">MintingGetMintingAssetsResponse</a></code>

Methods:

- <code title="get /api/minting/assets">client.assets.minting.<a href="./src/resources/assets/minting.ts">getMintingAssets</a>({ ...params }) -> MintingGetMintingAssetsResponse</code>

## Referral

Types:

- <code><a href="./src/resources/assets/referral/referral.ts">ReferralCreateReferralCodeResponse</a></code>

Methods:

- <code title="post /api/referral/codes">client.assets.referral.<a href="./src/resources/assets/referral/referral.ts">createReferralCode</a>({ ...params }) -> ReferralCreateReferralCodeResponse</code>

### Users

Types:

- <code><a href="./src/resources/assets/referral/users.ts">UserCreateReferralUserResponse</a></code>
- <code><a href="./src/resources/assets/referral/users.ts">UserGetReferralsResponse</a></code>

Methods:

- <code title="post /api/referral/users">client.assets.referral.users.<a href="./src/resources/assets/referral/users.ts">createReferralUser</a>({ ...params }) -> UserCreateReferralUserResponse</code>
- <code title="get /api/referral/users">client.assets.referral.users.<a href="./src/resources/assets/referral/users.ts">getReferrals</a>({ ...params }) -> UserGetReferralsResponse</code>

## WebsiteCollections

Types:

- <code><a href="./src/resources/assets/website-collections.ts">WebsiteCollectionGetWebsiteCollectionsResponse</a></code>

Methods:

- <code title="post /api/website_collections">client.assets.websiteCollections.<a href="./src/resources/assets/website-collections.ts">createWebsiteCollection</a>({ ...params }) -> void</code>
- <code title="get /api/website_collections">client.assets.websiteCollections.<a href="./src/resources/assets/website-collections.ts">getWebsiteCollections</a>({ ...params }) -> WebsiteCollectionGetWebsiteCollectionsResponse</code>

## WebsiteUserRoles

Types:

- <code><a href="./src/resources/assets/website-user-roles.ts">WebsiteUserRoleAssignRolesToUsersResponse</a></code>
- <code><a href="./src/resources/assets/website-user-roles.ts">WebsiteUserRoleGetWebsiteUserRolesResponse</a></code>

Methods:

- <code title="post /api/website_user_roles">client.assets.websiteUserRoles.<a href="./src/resources/assets/website-user-roles.ts">assignRolesToUsers</a>({ ...params }) -> WebsiteUserRoleAssignRolesToUsersResponse</code>
- <code title="get /api/website_user_roles">client.assets.websiteUserRoles.<a href="./src/resources/assets/website-user-roles.ts">getWebsiteUserRoles</a>({ ...params }) -> WebsiteUserRoleGetWebsiteUserRolesResponse</code>

# Users

## Wallets

## Metadatas

Types:

- <code><a href="./src/resources/users/metadatas.ts">MetadataCreateResponse</a></code>
- <code><a href="./src/resources/users/metadatas.ts">MetadataRetrieveResponse</a></code>

Methods:

- <code title="post /api/users/metadatas">client.users.metadatas.<a href="./src/resources/users/metadatas.ts">create</a>({ ...params }) -> MetadataCreateResponse</code>
- <code title="get /api/users/metadatas">client.users.metadatas.<a href="./src/resources/users/metadatas.ts">retrieve</a>({ ...params }) -> MetadataRetrieveResponse</code>

# Loyalty

## Rules

Types:

- <code><a href="./src/resources/loyalty/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleCompleteResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleStatusResponse</a></code>

Methods:

- <code title="post /api/loyalty/rules">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">create</a>({ ...params }) -> RuleCreateResponse</code>
- <code title="post /api/loyalty/rules/{id}">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">update</a>(id, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /api/loyalty/rules">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">list</a>({ ...params }) -> RuleListResponse</code>
- <code title="delete /api/loyalty/rules/{id}">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">delete</a>(id) -> RuleDeleteResponse</code>
- <code title="post /api/loyalty/rules/{id}/complete">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">complete</a>(id, { ...params }) -> RuleCompleteResponse</code>
- <code title="get /api/loyalty/rules/status">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">status</a>({ ...params }) -> RuleStatusResponse</code>

## Currencies

Types:

- <code><a href="./src/resources/loyalty/currencies.ts">CurrencyCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/currencies.ts">CurrencyListResponse</a></code>

Methods:

- <code title="post /api/loyalty/currencies">client.loyalty.currencies.<a href="./src/resources/loyalty/currencies.ts">create</a>({ ...params }) -> CurrencyCreateResponse</code>
- <code title="get /api/loyalty/currencies">client.loyalty.currencies.<a href="./src/resources/loyalty/currencies.ts">list</a>({ ...params }) -> CurrencyListResponse</code>

## TransactionEntries

Types:

- <code><a href="./src/resources/loyalty/transaction-entries/transaction-entries.ts">TransactionEntryListResponse</a></code>
- <code><a href="./src/resources/loyalty/transaction-entries/transaction-entries.ts">TransactionEntryCreateTransactionResponse</a></code>
- <code><a href="./src/resources/loyalty/transaction-entries/transaction-entries.ts">TransactionEntryListRuleGroupsResponse</a></code>

Methods:

- <code title="get /api/loyalty/transaction_entries">client.loyalty.transactionEntries.<a href="./src/resources/loyalty/transaction-entries/transaction-entries.ts">list</a>({ ...params }) -> TransactionEntryListResponse</code>
- <code title="post /api/loyalty/transactions">client.loyalty.transactionEntries.<a href="./src/resources/loyalty/transaction-entries/transaction-entries.ts">createTransaction</a>({ ...params }) -> TransactionEntryCreateTransactionResponse</code>
- <code title="get /api/loyalty/rule_groups">client.loyalty.transactionEntries.<a href="./src/resources/loyalty/transaction-entries/transaction-entries.ts">listRuleGroups</a>({ ...params }) -> TransactionEntryListRuleGroupsResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/loyalty/transaction-entries/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/loyalty/transaction-entries/accounts.ts">AccountRetrieveRankResponse</a></code>

Methods:

- <code title="get /api/loyalty/accounts">client.loyalty.transactionEntries.accounts.<a href="./src/resources/loyalty/transaction-entries/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="get /api/loyalty/accounts/{id}/rank">client.loyalty.transactionEntries.accounts.<a href="./src/resources/loyalty/transaction-entries/accounts.ts">retrieveRank</a>(pathId, { ...params }) -> AccountRetrieveRankResponse</code>

### Questions

Types:

- <code><a href="./src/resources/loyalty/transaction-entries/questions.ts">QuestionCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/transaction-entries/questions.ts">QuestionUpdateResponse</a></code>
- <code><a href="./src/resources/loyalty/transaction-entries/questions.ts">QuestionListResponse</a></code>

Methods:

- <code title="post /api/loyalty/questions">client.loyalty.transactionEntries.questions.<a href="./src/resources/loyalty/transaction-entries/questions.ts">create</a>({ ...params }) -> QuestionCreateResponse</code>
- <code title="post /api/loyalty/questions/{id}">client.loyalty.transactionEntries.questions.<a href="./src/resources/loyalty/transaction-entries/questions.ts">update</a>(id, { ...params }) -> QuestionUpdateResponse</code>
- <code title="get /api/loyalty/questions">client.loyalty.transactionEntries.questions.<a href="./src/resources/loyalty/transaction-entries/questions.ts">list</a>({ ...params }) -> QuestionListResponse</code>

### QuestionsResponses

Types:

- <code><a href="./src/resources/loyalty/transaction-entries/questions-responses.ts">QuestionsResponseListResponse</a></code>
- <code><a href="./src/resources/loyalty/transaction-entries/questions-responses.ts">QuestionsResponseSubmitResponse</a></code>

Methods:

- <code title="get /api/loyalty/questions_responses">client.loyalty.transactionEntries.questionsResponses.<a href="./src/resources/loyalty/transaction-entries/questions-responses.ts">list</a>({ ...params }) -> QuestionsResponseListResponse</code>
- <code title="post /api/loyalty/questions_responses">client.loyalty.transactionEntries.questionsResponses.<a href="./src/resources/loyalty/transaction-entries/questions-responses.ts">submit</a>({ ...params }) -> QuestionsResponseSubmitResponse</code>

## RuleEdits

Types:

- <code><a href="./src/resources/loyalty/rule-edits.ts">RuleEditRetrieveResponse</a></code>
- <code><a href="./src/resources/loyalty/rule-edits.ts">RuleEditRestoreResponse</a></code>

Methods:

- <code title="get /api/loyalty/rule_edits">client.loyalty.ruleEdits.<a href="./src/resources/loyalty/rule-edits.ts">retrieve</a>({ ...params }) -> RuleEditRetrieveResponse</code>
- <code title="post /api/loyalty/rule_edits/{id}/restore">client.loyalty.ruleEdits.<a href="./src/resources/loyalty/rule-edits.ts">restore</a>(id) -> RuleEditRestoreResponse</code>

## Accounts

## Multipliers

Types:

- <code><a href="./src/resources/loyalty/multipliers.ts">MultiplierCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/multipliers.ts">MultiplierUpdateResponse</a></code>
- <code><a href="./src/resources/loyalty/multipliers.ts">MultiplierListResponse</a></code>
- <code><a href="./src/resources/loyalty/multipliers.ts">MultiplierDeleteResponse</a></code>

Methods:

- <code title="post /api/loyalty/multipliers">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">create</a>({ ...params }) -> MultiplierCreateResponse</code>
- <code title="post /api/loyalty/multipliers/{multiplierId}">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">update</a>(multiplierId, { ...params }) -> MultiplierUpdateResponse</code>
- <code title="get /api/loyalty/multipliers">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">list</a>({ ...params }) -> MultiplierListResponse</code>
- <code title="delete /api/loyalty/multipliers">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">delete</a>({ ...params }) -> MultiplierDeleteResponse</code>

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

# AuctionBids

Methods:

- <code title="get /api/auction_bids">client.auctionBids.<a href="./src/resources/auction-bids.ts">list</a>({ ...params }) -> void</code>

# Websites

Types:

- <code><a href="./src/resources/websites.ts">WebsiteCreateResponse</a></code>
- <code><a href="./src/resources/websites.ts">WebsiteListResponse</a></code>

Methods:

- <code title="post /api/websites">client.websites.<a href="./src/resources/websites.ts">create</a>({ ...params }) -> WebsiteCreateResponse</code>
- <code title="get /api/websites">client.websites.<a href="./src/resources/websites.ts">list</a>({ ...params }) -> WebsiteListResponse</code>

# Drip

## Quests

## Status
