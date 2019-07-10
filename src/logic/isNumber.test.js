import isNumber from "./isNumber.js";

// integer should validate
test("number integer valid", () => {
  expect(isNumber(21)).toBe(true);
});

// number as string should validate
test("number string valid", () => {
  expect(isNumber("21")).toBe(true);
});

// word should not validate
test("word string valid", () => {
  expect(isNumber("twenty")).toBe(false);
});

// float should validate
test("float valid", () => {
  expect(isNumber(23.5)).toBe(true);
});

// undefined should not validate
test("undefined", () => {
  expect(isNumber(undefined)).toBe(false);
});

// mixed string with integer should not be valid
test("mixed invalid", () => {
  expect(isNumber("21 a")).not.toBe(true);
});
