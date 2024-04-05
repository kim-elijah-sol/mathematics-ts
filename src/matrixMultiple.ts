type Matrix = number[][];

/*
 * 행렬 데이터 곱셈 함수
 */
export const matrixMultiple = (a: Matrix, b: Matrix): Matrix => {
  const aRow = a.length;
  const aCol = a[0].length;
  const bCol = b[0].length;

  const result: Matrix = Array.from({ length: aRow }, () =>
    Array.from({ length: bCol }, () => 0)
  );

  for (let i = 0; i < aRow; i++) {
    for (let j = 0; j < bCol; j++) {
      for (let k = 0; k < aCol; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return result;
};
