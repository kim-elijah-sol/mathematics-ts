/**
 * 밑이 자연상수 e인 로그함수를 구하는 함수
 */
export function logN(n: number) {
  if (n <= 0) {
    throw new Error("logFunction은 0보다 큰 수에 대해서만 정의되어 있습니다.");
  }

  /**
   * epsilon은 무한대로 수렴하는 수열의 합을 구할 때 사용하는 값이다.
   */
  const epsilon = 0.0000000001;

  let result = 0;
  let term = 1;
  let i = 1;
  while (term > epsilon) {
    /**
     * 수열의 합을 구하는 공식
     */
    term = Math.pow((n - 1) / (n + 1), i) / i;
    result += term;
    i += 2;
  }

  return 2 * result;
}
