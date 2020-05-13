import React from "react";
import { render } from "@testing-library/react";

import { ThemeProvider } from "./ThemeProvider";
import theme from "../../../resources/theme/theme.json";

describe("ThemeProvider", () => {
  it("renders", () => {
    const wrapper = render(<ThemeProvider theme={theme} />);
  });

  it("renders children", () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <p>Test</p>
      </ThemeProvider>
    );
    expect(queryByText("Test")).toBeTruthy();
  });
});
