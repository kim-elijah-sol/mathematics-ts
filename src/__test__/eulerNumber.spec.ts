import { eulerNumber } from "../eulerNumber";

test("eulerNumber 테스트", () => {
  expect(eulerNumber(1)).toBeCloseTo(2);
  expect(eulerNumber(10)).toBeCloseTo(2.5937424601000023);
  expect(eulerNumber(100)).toBeCloseTo(2.7048138294215285);
  expect(eulerNumber(1000)).toBeCloseTo(Math.E);

  expect(eulerNumber(10000) - eulerNumber(1000)).toBeCloseTo(0);
  expect(eulerNumber(10000)).toBeCloseTo(Math.E);

  expect(eulerNumber(100000) - eulerNumber(10000)).toBeCloseTo(0);
  expect(eulerNumber(100000)).toBeCloseTo(Math.E);

  expect(eulerNumber(1000000) - eulerNumber(100000)).toBeCloseTo(0);
  expect(eulerNumber(1000000)).toBeCloseTo(Math.E);
});
