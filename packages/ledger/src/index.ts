export type Currency = "FI$H_usd" | "FI$H_php" | "FI$H_eur";
export type Posting = Readonly<{ accountId: string; currency: Currency; side: "debit" | "credit"; amountMinor: bigint }>;
/** Validates one currency-balanced journal batch. Persist atomically with immutable postings. */
export function validatePostings(postings: readonly Posting[]): void {
 if (postings.length < 2) throw new Error("At least two postings required");
 const sums = new Map<string,bigint>();
 for (const p of postings) {
  if (p.amountMinor <= 0n) throw new Error("Posting amount must be positive");
  const sign = p.side === "debit" ? 1n : -1n;
  sums.set(p.currency,(sums.get(p.currency)??0n)+sign*p.amountMinor);
 }
 for (const value of sums.values()) if (value !== 0n) throw new Error("Unbalanced journal");
}
