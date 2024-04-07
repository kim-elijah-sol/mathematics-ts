import { log } from "../log";

describe("log 테스트", () => {
  it("밑이 2인 log(8)은 3에 근접한다.", () => {
    expect(log(8, 2)).toBeCloseTo(3);
  });

  it("밑이 3인 log(9)은 2에 근접한다.", () => {
    expect(log(9, 3)).toBeCloseTo(2);
  });

  it("밑이 10인 log(100)은 2에 근접한다.", () => {
    expect(log(100, 10)).toBeCloseTo(2);
  });
});
