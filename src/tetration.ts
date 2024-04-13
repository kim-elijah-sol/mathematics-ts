/**
 * 테트레이션 함수
 *
 * @param base 밑
 * @param height 높이
 *
 * base 의 base 제곱을 height 만큼 반복하는 함수
 */
export function tetration(base: number, height: number): number {
  if (height === 1) {
    return base;
  }
  return Math.pow(base, tetration(base, height - 1));
}
