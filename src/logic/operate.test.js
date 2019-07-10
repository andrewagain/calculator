import operate from "./operate";

test("test divide by zero", () => {
  expect(operate(0, 0, "÷")).toBe("0");
});

test("test addition", () => {
  expect(operate(1, 1, "+")).toBe("2");
});

test("test subtraction", () => {
  expect(operate(2, 1, "-")).toBe("1");
});

test("test multiplication", () => {
  expect(operate(2, 2, "x")).toBe("4");
});

test("test division", () => {
  expect(operate(5, 2, "÷")).toBe("2.5");
});

test("test incorrect operation", () => {
  expect(operate(2, 4, "/")).toThrow();
});
