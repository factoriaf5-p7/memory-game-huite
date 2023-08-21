import React from "react";
import Settings from "../pages/Settings";
import Game  from "../pages/Game";
import Intro from "../pages/Intro";
import { render } from "@testing-library/react";

describe("components", () => {
  it("should exist", () => {
    const { getByText } = render(<Settings />);

    expect(getByText("Settings")).toBeTruthy();
  });
  it("should exist", () => {
    const { getByText } = render(<Game />);

    expect(getByText("Game")).toBeTruthy();
  });
  it("should exist", () => {
    const { getByText } = render(<Intro />);

    expect(getByText("Intro")).toBeTruthy();
  });
});