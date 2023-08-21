import React from "react";
import Settings from "../pages/Settings";
import { render, getByText } from "@testing-library/react";

describe("components", () => {
  it("should exist", () => {
    const { getByText } = render(<Settings />);

    expect(getByText("Hola")).toBeTruthy();
  });
});