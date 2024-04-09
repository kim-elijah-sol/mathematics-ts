import { lawOfPowers1 } from "../indexLawOfPowers";

describe("지수법칙", () => {
  it("지수법칙 1 : 지수의 덧셈 테스트", () => {
    expect(lawOfPowers1(2, 3, 4)).toBe(128);
    expect(lawOfPowers1(2, 3, 4)).toBe(2 ** 3 * 2 ** 4);
  });

  it("지수법칙 1 : 지수의 덧셈 테스트 > 지수가 음수인 경우도 예외는 아님", () => {
    expect(lawOfPowers1(2, 5, -2)).toBe(8);
    expect(lawOfPowers1(2, 5, -2)).toBe(2 ** 5 * 2 ** -2);
  });

  it("지수법칙 1 : 지수의 덧셈 테스트 > 밑이 음수인 경우도 예외는 아님", () => {
    expect(lawOfPowers1(-2, 3, 4)).toBe(-128);
    expect(lawOfPowers1(-2, 3, 4)).toBe((-2) ** 3 * (-2) ** 4);
  });
});
