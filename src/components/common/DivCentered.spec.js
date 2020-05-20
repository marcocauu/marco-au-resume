import React from "react";
import { render } from "@testing-library/react";
import { DivCentered } from "./DivCentered";

import { ThemeProvider } from "../providers";
import theme from "../../resources/theme/theme.json";

describe("DivCentered", () => {
  it("should render", () => {
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <DivCentered />
      </ThemeProvider>
    );
  });
});
