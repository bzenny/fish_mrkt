import { describe, expect, it } from "vitest";
import { validatePostings } from "./index";
describe("FI$H journal invariants",()=>{
 it("accepts a balanced funding transaction",()=>expect(()=>validatePostings([{accountId:"cash",currency:"FI$H_usd",side:"debit",amountMinor:10000000n},{accountId:"equity",currency:"FI$H_usd",side:"credit",amountMinor:10000000n}])).not.toThrow());
 it("rejects unbalanced postings",()=>expect(()=>validatePostings([{accountId:"cash",currency:"FI$H_usd",side:"debit",amountMinor:100n},{accountId:"equity",currency:"FI$H_usd",side:"credit",amountMinor:99n}])).toThrow("Unbalanced"));
 it("rejects zero amount",()=>expect(()=>validatePostings([{accountId:"cash",currency:"FI$H_usd",side:"debit",amountMinor:0n},{accountId:"equity",currency:"FI$H_usd",side:"credit",amountMinor:0n}])).toThrow());
});
