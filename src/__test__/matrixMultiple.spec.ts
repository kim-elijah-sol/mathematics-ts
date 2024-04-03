import { matrixMultiple } from "../matrixMultiple";

test("matrixMultiple 테스트", () => {
  const a = [
    [1, 2],
    [3, 4],
  ];
  const b = [
    [5, 6],
    [7, 8],
  ];
  const result = [
    [19, 22],
    [43, 50],
  ];

  expect(matrixMultiple(a, b)).toEqual(result);

  const c = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const d = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];

  const result2 = [
    [58, 64],
    [139, 154],
  ];

  expect(matrixMultiple(c, d)).toEqual(result2);
});
