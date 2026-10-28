export type FishCurrency = "FI$H_usd" | "FI$H_php" | "FI$H_eur";
export type InstrumentClass = "equity" | "etf" | "crypto";
export type OrderSide = "buy" | "sell";
export type OrderType = "market" | "limit";
export interface Quote { instrumentId: string; price: string; currency: string; source: string; observedAt: string; mode: "live" | "delayed" | "historical" | "demo"; }
export interface OrderIntent { accountId: string; instrumentId: string; side: OrderSide; type: OrderType; quantity: string; limitPrice?: string; idempotencyKey: string; }
