import { logN } from "../logN";

describe("logN 테스트", () => {
  it("logN(1)은 0을 반환한다.", () => {
    expect(logN(1)).toBe(0);
  });

  it("logN(2)은 Math.log(2)와 같다.", () => {
    expect(logN(2)).toBeCloseTo(Math.log(2));
    expect(logN(2)).toBeCloseTo(0.6931471805599453);
  });

  it("logN(3)은 Math.log(3)와 같다.", () => {
    expect(logN(3)).toBeCloseTo(Math.log(3));
    expect(logN(3)).toBeCloseTo(1.0986122886681098);
  });
});
