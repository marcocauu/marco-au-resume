import React from "react";
import { render } from "@testing-library/react";
import { H1Centered } from "./H1Centered";

describe("H1Centered", () => {
  it("should render", () => {
    const wrapper = render(<H1Centered />);
  });
});
