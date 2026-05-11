import { describe, expect, it } from "vitest";
import { formatFileSize } from "./App";

describe("formatFileSize", () => {
  it("formats bytes into megabytes", () => {
    expect(formatFileSize(1048576)).toBe("1.00 MB");
  });

  it("handles missing values", () => {
    expect(formatFileSize(0)).toBe("Unknown size");
  });
});