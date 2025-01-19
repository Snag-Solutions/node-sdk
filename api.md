# Assets

Types:

- <code><a href="./src/resources/assets.ts">AssetCreateResponse</a></code>

Methods:

- <code title="post /api/assets">client.assets.<a href="./src/resources/assets.ts">create</a>({ ...params }) -> AssetCreateResponse</code>

# Users

## Wallets

Types:

- <code><a href="./src/resources/users/wallets.ts">WalletCreateResponse</a></code>
- <code><a href="./src/resources/users/wallets.ts">WalletListResponse</a></code>
- <code><a href="./src/resources/users/wallets.ts">WalletDeleteResponse</a></code>

Methods:

- <code title="post /api/users/wallets">client.users.wallets.<a href="./src/resources/users/wallets.ts">create</a>({ ...params }) -> WalletCreateResponse</code>
- <code title="get /api/users/wallets">client.users.wallets.<a href="./src/resources/users/wallets.ts">list</a>({ ...params }) -> WalletListResponse</code>
- <code title="delete /api/users/wallets/{id}">client.users.wallets.<a href="./src/resources/users/wallets.ts">delete</a>(id) -> WalletDeleteResponse</code>

## Metadatas

Types:

- <code><a href="./src/resources/users/metadatas.ts">MetadataCreateResponse</a></code>

Methods:

- <code title="post /api/users/metadatas">client.users.metadatas.<a href="./src/resources/users/metadatas.ts">create</a>({ ...params }) -> MetadataCreateResponse</code>

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

- <code><a href="./src/resources/loyalty/transaction-entries.ts">TransactionEntryListResponse</a></code>

Methods:

- <code title="get /api/loyalty/transaction_entries">client.loyalty.transactionEntries.<a href="./src/resources/loyalty/transaction-entries.ts">list</a>({ ...params }) -> TransactionEntryListResponse</code>

## RuleEdits

Types:

- <code><a href="./src/resources/loyalty/rule-edits.ts">RuleEditRetrieveResponse</a></code>
- <code><a href="./src/resources/loyalty/rule-edits.ts">RuleEditRestoreResponse</a></code>

Methods:

- <code title="get /api/loyalty/rule_edits">client.loyalty.ruleEdits.<a href="./src/resources/loyalty/rule-edits.ts">retrieve</a>({ ...params }) -> RuleEditRetrieveResponse</code>
- <code title="post /api/api/loyalty/rule_edits/{id}/restore">client.loyalty.ruleEdits.<a href="./src/resources/loyalty/rule-edits.ts">restore</a>(id) -> RuleEditRestoreResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/loyalty/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="get /">client.loyalty.accounts.<a href="./src/resources/loyalty/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>

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
- <code title="delete /api/loyalty/multipliers/{multiplierId}">client.loyalty.multipliers.<a href="./src/resources/loyalty/multipliers.ts">delete</a>(multiplierId) -> MultiplierDeleteResponse</code>

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

- <code title="post /api/auction_bids">client.auctionBids.<a href="./src/resources/auction-bids.ts">create</a>({ ...params }) -> void</code>
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

Types:

- <code><a href="./src/resources/drip/quests.ts">QuestCompleteResponse</a></code>

Methods:

- <code title="post /api/drip/quests/{dripQuestId}/complete">client.drip.quests.<a href="./src/resources/drip/quests.ts">complete</a>(dripQuestId, { ...params }) -> QuestCompleteResponse</code>

## Status

Types:

- <code><a href="./src/resources/drip/status.ts">StatusRetrieveResponse</a></code>

Methods:

- <code title="get /api/drip/status/{verificationId}">client.drip.status.<a href="./src/resources/drip/status.ts">retrieve</a>(verificationId) -> StatusRetrieveResponse</code>
