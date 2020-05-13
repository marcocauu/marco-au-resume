import React from "react";
import { render } from "@testing-library/react";

import { ThemeProvider } from "../../providers";
import { HeaderSeparator } from "./HeaderSeparator";
import theme from "../../../resources/theme/theme.json";

describe("HeaderSeparator", () => {
  it("should render", () => {
    const text = "text";
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <HeaderSeparator headerText={text} />
      </ThemeProvider>
    );
    expect(queryByText(text)).toBeTruthy();
  });
});
