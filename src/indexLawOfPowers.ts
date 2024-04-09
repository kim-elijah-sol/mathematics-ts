/**
 * 지수 법칙 1 : 지수의 덧셈
 *
 * @param base 밑
 * @param exponent1 지수1
 * @param exponent2 지수2
 * a^b * a^c = a^(b+c)
 */
export function lawOfPowers1(
  base: number,
  exponent1: number,
  exponent2: number
): number {
  return base ** (exponent1 + exponent2);
}
