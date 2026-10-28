# Architecture Decision 001 — Modular Monolith

Status: Accepted for M0.

## Core ownership

The FI$H core owns ledger, accounts, orders, executions, and positions. Balances use exact decimal or integer minor-unit arithmetic. All ledger transactions are atomic, append-only and balanced per currency.

## Feature modules

- FishIntel: explainable analysis; read-only on financial state.
- FishBots: submits intents through the core order service.
- FishFunds: calculates target weights and requests rebalancing orders.
- Fishman: requests loan, interest and collateral postings through the ledger service.

No feature module may write core ledger tables or import another feature module's internal repositories. Communication uses shared versioned contracts and application services.

## Data semantics

FI$H is nonredeemable virtual capital. FI$H_usd is the default reporting denomination. Cash, reserved cash, position market value, liabilities and net equity are distinct metrics.

## Market rules

Crypto trades 24/7; equities follow instrument-specific exchange calendars. Quotes carry provenance, timestamp and freshness. Demo data is clearly marked. No live-money execution.

## Planned packages

- packages/contracts: stable request and event types
- packages/ledger: accounting invariants
- packages/trading-core: deterministic simulation
- packages/market-data: provider adapters
- modules/*: independently testable domain capabilities

## Future deployment

Keep the stack portable. Google AI Studio and Cloudflare are deferred.
