import { lawOfPowers1, lawOfPowers2, lawOfPowers3 } from "../indexLawOfPowers";

describe("지수법칙 1: 지수의 덧셈", () => {
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

describe("지수법칙 2: 지수의 곱셈", () => {
  it("지수법칙 2 : 지수의 곱셈 테스트", () => {
    expect(lawOfPowers2(2, 3, 4)).toBe(4096);
    expect(lawOfPowers2(2, 3, 4)).toBe(2 ** (3 * 4));
  });

  it("지수법칙 2 : 지수의 곱셈 테스트 > 지수가 분수 경우도 예외는 아님", () => {
    expect(lawOfPowers2(2, 4, 1 / 2)).toBe(4);
    expect(lawOfPowers2(2, 4, 1 / 2)).toBe(2 ** (4 * (1 / 2)));
  });

  it("지수법칙 2 : 지수의 곱셈 테스트 > 밑이 음수인 경우도 예외는 아님", () => {
    expect(lawOfPowers2(-2, 3, 3)).toBe(-512);
    expect(lawOfPowers2(-2, 3, 3)).toBe((-2) ** (3 * 3));
  });
});

describe("지수법칙 3 : 지수의 뺄셈", () => {
  it("지수법칙 3 : 지수의 뺄셈 테스트", () => {
    expect(lawOfPowers3(2, 5, 3)).toBe(4);
    expect(lawOfPowers3(2, 5, 3)).toBe(2 ** 5 / 2 ** 3);
  });

  it("지수법칙 3 : 지수의 뺄셈 테스트 > 지수가 음수인 경우도 예외는 아님", () => {
    expect(lawOfPowers3(2, 3, -2)).toBe(2 ** 5);
    expect(lawOfPowers3(2, 3, -2)).toBe(2 ** 3 / 2 ** -2);
  });

  it("지수법칙 3 : 지수의 뺄셈 테스트 > 밑이 음수인 경우도 예외는 아님", () => {
    expect(lawOfPowers3(-2, 5, 2)).toBe(-8);
    expect(lawOfPowers3(-2, 5, 2)).toBe((-2) ** 5 / (-2) ** 2);
  });
});
