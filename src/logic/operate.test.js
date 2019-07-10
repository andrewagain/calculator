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

// test for error thrown
// note: expect() should be passed code in a function for jest to catch error
test("test unknown operation", () => {
  expect(() => operate(2, 4, "/")).toThrowError(/Unknown/);
});

test("test negative addition", () => {
  expect(operate(-1, -1, "+")).toBe("-2");
});

test("negative multiplication pos neg", () => {
  expect(operate(2, -2, "x")).toBe("-4");
});

test("negative multiplication neg neg", () => {
  expect(operate(-2, -2, "x")).toBe("4");
});

// checks for rounding using regex
test("test division rounding", () => {
  expect(operate(22, 7, "÷")).toMatch(/3.142857/);
});
