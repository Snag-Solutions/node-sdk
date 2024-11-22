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

# Loyalty

## Rules

Types:

- <code><a href="./src/resources/loyalty/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/loyalty/rules.ts">RuleCompleteResponse</a></code>

Methods:

- <code title="post /api/loyalty/rules">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">create</a>({ ...params }) -> RuleCreateResponse</code>
- <code title="post /api/loyalty/rules/{id}">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">update</a>(id, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /api/loyalty/rules">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">list</a>({ ...params }) -> RuleListResponse</code>
- <code title="delete /api/loyalty/rules/{id}">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">delete</a>(id) -> RuleDeleteResponse</code>
- <code title="post /api/loyalty/rules/{id}/complete">client.loyalty.rules.<a href="./src/resources/loyalty/rules.ts">complete</a>(id, { ...params }) -> RuleCompleteResponse</code>

## Currencies

Types:

- <code><a href="./src/resources/loyalty/currencies.ts">CurrencyCreateResponse</a></code>
- <code><a href="./src/resources/loyalty/currencies.ts">CurrencyListResponse</a></code>

Methods:

- <code title="post /api/loyalty/currencies/">client.loyalty.currencies.<a href="./src/resources/loyalty/currencies.ts">create</a>({ ...params }) -> CurrencyCreateResponse</code>
- <code title="get /api/loyalty/currencies/">client.loyalty.currencies.<a href="./src/resources/loyalty/currencies.ts">list</a>({ ...params }) -> CurrencyListResponse</code>

## TransactionEntries

Types:

- <code><a href="./src/resources/loyalty/transaction-entries.ts">TransactionEntryListResponse</a></code>

Methods:

- <code title="get /api/loyalty/transaction_entries">client.loyalty.transactionEntries.<a href="./src/resources/loyalty/transaction-entries.ts">list</a>({ ...params }) -> TransactionEntryListResponse</code>

# AuctionBids

Methods:

- <code title="post /api/auction_bids">client.auctionBids.<a href="./src/resources/auction-bids.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/auction_bids">client.auctionBids.<a href="./src/resources/auction-bids.ts">list</a>({ ...params }) -> void</code>
