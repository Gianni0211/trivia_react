import { validatePassword } from "./utils";

describe("validatePassword", () => {
  it("should return true for a valid password", () => {
    const validPassword = "MyP@ssw0rd";
    expect(validatePassword(validPassword)).toBe(true);
  });

  it("should return false for a password with no uppercase letter", () => {
    const invalidPassword = "myp@ssw0rd";
    expect(validatePassword(invalidPassword)).toBe(false);
  });

  it("should return false for a password with no number", () => {
    const invalidPassword = "MyPassword";
    expect(validatePassword(invalidPassword)).toBe(false);
  });

  it("should return false for a password with no special character", () => {
    const invalidPassword = "MyPassword1";
    expect(validatePassword(invalidPassword)).toBe(false);
  });

  it("should return false for a password with less than 8 characters", () => {
    const invalidPassword = "Myp@ss1";
    expect(validatePassword(invalidPassword)).toBe(false);
  });
});
