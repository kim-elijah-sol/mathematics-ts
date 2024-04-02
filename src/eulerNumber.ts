/**
 * {lim (t -> ∞)}(1 + 1/t)^t = e
 *
 * t 가 커질수록 e에 수렴한다.
 */
export function eulerNumber(t: number): number {
  return Math.pow(1 + 1 / t, t);
}
