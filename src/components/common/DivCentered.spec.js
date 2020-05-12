import React from "react";
import { render } from "@testing-library/react";
import { DivCentered } from "./DivCentered";

describe("DivCentered", () => {
  it("should render", () => {
    const wrapper = render(<DivCentered />);
  });
});
