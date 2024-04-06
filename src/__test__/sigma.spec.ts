import { sigma } from "../sigma";

describe("sigma", () => {
  it("should return the sum of the callback result", () => {
    expect(sigma(1, 5, (i) => i)).toBe(15);
  });

  it("should return the sum of the callback result", () => {
    expect(sigma(1, 5, (i) => i * i)).toBe(55);
  });
});
