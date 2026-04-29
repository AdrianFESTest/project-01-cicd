const { getMessage, createMessage } = require("../src/utils/message");

test("returns the default message", () => {
  expect(getMessage()).toBe("hello");
});

test("creates a personalized message", () => {
  expect(createMessage("Adrian")).toBe("Hello, Adrian!");
});

test("creates a guest message when no name is provided", () => {
  expect(createMessage()).toBe("Hello, guest!");
});
