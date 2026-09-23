import { computeTotal, label, scale } from "./lib.js";

export function summarize(n: number): string {
  return label(scale(n, 2));
}

export function summarizeAll(ns: number[]): string {
  return ns.map(summarize).join(", ");
}

export function baseline(): number {
  return computeTotal(1, 2);
}
