const { add } = require("../src/utils/math");

test("adds two positive numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
  expect(add(-2, -3)).toBe(-5);
});
