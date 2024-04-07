import { logN } from "./logN";

/**
 * log 함수
 */
export function log(x: number, base: number = Math.E): number {
  return logN(x) / logN(base);
}
