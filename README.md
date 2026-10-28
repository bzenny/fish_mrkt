# fishmrkt

**Fake Internet Cash Market** — an auditable market simulation and experimentation platform.

Virtual currency: **FI$H**; default denomination: **FI$H_usd**. No real-money trades or redeemable tokens.

## Architecture

TypeScript-first modular monolith. The FI$H core owns accounts, double-entry ledger, orders, executions and positions. Independent modules FishIntel, FishBots, FishFunds and Fishman communicate through versioned contracts and core services; they cannot mutate balances directly.

## Roadmap

- M0: Repository foundation, workspace, documentation, CI.
- M1: FI$H accounts and auditable ledger.
- M2: Stocks/ETFs and 24/7 crypto market adapters.
- M3: Deterministic spot trading and portfolio valuation.
- M4: Responsive PWA and experiments.
- M5: Tests, security and pilot.

## Development

Install Node.js 22+ and pnpm 10+. Run `pnpm install`, then `pnpm typecheck` and `pnpm test`. This initial M0 scaffold does not yet implement trading or persistence.

See [architecture](docs/ARCHITECTURE.md) and [milestones](docs/ROADMAP.md).
