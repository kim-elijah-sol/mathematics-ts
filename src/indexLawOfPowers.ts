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

/**
 * 지수 법칙 2 : 지수의 곱셈
 *
 * @param base 밑
 * @param exponent1 지수1
 * @param exponent2 지수2
 * (a^b)^c = a^(b*c)
 *
 * @example (a^3)^2 = (a*a*a)^2 = a^6
 */
export function lawOfPowers2(
  base: number,
  exponent1: number,
  exponent2: number
): number {
  return base ** (exponent1 * exponent2);
}

/**
 * 지수 법칙 3 : 지수의 뺄셈
 *
 * @param base
 * @param exponent1
 * @param exponent2
 * a^b / a^c = a^(b-c)
 */
export function lawOfPowers3(
  base: number,
  exponent1: number,
  exponent2: number
): number {
  return base ** (exponent1 - exponent2);
}
