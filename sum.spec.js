import { sum } from "./sum";

describe("function a", () => {
  it("should return expected value", () => {
    expect(sum(1, 5)).toBe(3);
  });
});
