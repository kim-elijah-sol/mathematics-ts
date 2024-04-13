import { tetration } from "../tetration";

describe("tetration", () => {
  it("tetration 테스트", () => {
    expect(tetration(2, 3)).toBe(16);
    expect(tetration(2, 4)).toBe(65536);
    expect(tetration(2, 5)).toBe(2 ** 65536);
  });
});
