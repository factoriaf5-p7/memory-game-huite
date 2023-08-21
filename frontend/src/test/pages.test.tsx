import React from "react";
import Settings from "../pages/Settings";
import Game  from "../pages/Game";
import Intro from "../pages/Intro";
import { render } from "@testing-library/react";

describe("components", () => {
  it(" Settings exist", () => {
    const { queryByText } = render(<Settings />);

    expect(queryByText("Settings")).toBeTruthy();
  });
  it("Game exist", () => {
    const { getByText } = render(<Game />);

    expect(getByText("Game")).toBeTruthy();
  });
  it("Intro exist", () => {
    const { getByText } = render(<Intro />);

    expect(getByText("Intro")).toBeTruthy();
  });
});