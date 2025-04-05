import { add } from "../utils/StringCalculatorUtils";

describe("StringCalculator", () => {
    // Test 1: Empty string should return 0
    test("returns 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    // Test 2: Single number should return the number itself
    test("returns number itself if one number is provided", () => {
        expect(add("1")).toBe(1);
    });

    // Test 3: Two numbers separated by a comma should return their sum
    test("returns the sum of two numbers separated by a comma", () => {
        expect(add("1,5")).toBe(6);
    });

    // Test 4: Supports new line (`\n`) as a separator along with comma
    test("handles newline as a separator", () => {
        expect(add("1\n2,3")).toBe(6); // `1 + 2 + 3 = 6`
    });

    // Test 5: Supports custom delimiter (single-character), defined after `//`
    test("supports custom single-character delimiter", () => {
        expect(add("//;\n1;2")).toBe(3); // Using `;` as delimiter → `1 + 2 = 3`
    });
});