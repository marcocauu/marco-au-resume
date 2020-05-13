import React from "react";
import { render } from "@testing-library/react";

import { Body } from "./Body";
import { ThemeProvider } from "../../providers";
import theme from "../../../resources/theme/theme.json";

describe("Body", () => {
  it("should render", () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Body>test</Body>
      </ThemeProvider>
    );
    expect(queryByText("test")).toBeTruthy();
  });
});
