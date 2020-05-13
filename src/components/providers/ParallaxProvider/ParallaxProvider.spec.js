import React from "react";
import { render } from "@testing-library/react";

import { ParallaxProvider } from "./ParallaxProvider";

describe("ParallaxProvider", () => {
  it("renders", () => {
    const { queryByText } = render(<ParallaxProvider>test</ParallaxProvider>);
    expect(queryByText("test")).toBeTruthy();
  });
});
