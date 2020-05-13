import React from "react";
import { render } from "@testing-library/react";

import { ThemeProvider } from "./ThemeProvider";
import theme from "../../../resources/theme/theme.json";

describe("ThemeProvider", () => {
  it("renders", () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>test</ThemeProvider>
    );
    expect(queryByText("test")).toBeTruthy();
  });
});
