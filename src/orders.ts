import { clamp, computeTotalV2 } from "./lib.js";

const lineFee = 1;

export function orderTotal(items: number[]): number {
  let total = 0;
  for (const it of items) {
    total = computeTotalV2(total, it) + lineFee;
  }
  return clamp(total, 0, 10);
}
