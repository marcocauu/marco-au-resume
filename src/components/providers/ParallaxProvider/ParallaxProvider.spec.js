import React from "react";
import { render } from "@testing-library/react";

import { ParallaxProvider } from "./ParallaxProvider";

describe("ParallaxProvider", () => {
  it("renders", () => {
    const wrapper = render(
      <ParallaxProvider>
        <React.Fragment />
      </ParallaxProvider>
    );
  });

  it("renders children", () => {
    const { queryByText } = render(
      <ParallaxProvider>
        <p>Test</p>
      </ParallaxProvider>
    );
    expect(queryByText("Test")).toBeTruthy();
  });
});
