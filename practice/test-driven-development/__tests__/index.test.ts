import { describe, it, expect } from "vitest";
import { wordWrap } from "../index";

// If the row-length is 60, and the input string is 30, the result is just the input string
describe("wordWrap", () => {
  it("should return the input string when row-length >= input string", () => {
    const rowLength = 60;
    const inputStr = "hello";
    const actual = wordWrap(rowLength, inputStr);
    const expected = [inputStr];
    expect(actual).toStrictEqual(expected);
  });
  // If the row-length is 3, and the input string is "abc def" the result is "abc", "def"
  it("should split the input string when row-length < input string", () => {
    const rowLength = 3;
    const inputStr = "abc def";
    const actual = wordWrap(rowLength, inputStr);
    const expected = inputStr.split(" ");
    expect(actual).toStrictEqual(expected);
  });
  // If the row-length is 3, and the input string is "abcdef" the result is "abc", "def"
  it("should split long strings", () => {
    const rowLength = 3;
    const inputStr = "abcdef";
    const actual = wordWrap(rowLength, inputStr);
    const expected = ["abc", "def"];
    expect(actual).toStrictEqual(expected);
  });
  // If the row-length is 3, and the input string is "abcdef abc" the result is "abc", "def", "abc"
  it("should split long strings with other strings", () => {
    const rowLength = 3;
    const inputStr = "abcdef abc";
    const actual = wordWrap(rowLength, inputStr);
    const expected = ["abc", "def", "abc"];
    expect(actual).toStrictEqual(expected);
  });
  // With row length 3 and "a b c d e f" the result is "a b", "c d", "e f"
  it("should account for spaces between strings", () => {
    const rowLength = 3;
    const inputStr = "a b c d e f";
    const actual = wordWrap(rowLength, inputStr);
    const expected = ["a b", "c d", "e f"];
    expect(actual).toStrictEqual(expected);
  });
});
