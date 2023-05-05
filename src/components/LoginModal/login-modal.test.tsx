import { render, fireEvent } from "@testing-library/react";
import LoginModal from "./login-modal";
import * as React from "react";

describe("LoginModal", () => {
  it("validates password input", () => {
    const { getByPlaceholderText, getByText } = render(<LoginModal />);
    const passwordInput = getByPlaceholderText("Password");
    const submitBtn = getByText("Login");

    fireEvent.change(passwordInput, { target: { value: "Password1@" } });
    fireEvent.click(submitBtn);
  });
});
