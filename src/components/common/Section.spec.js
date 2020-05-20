import React from "react";
import { render } from "@testing-library/react";

import { Section } from "./Section";
import { ThemeProvider } from "../providers";
import theme from "../../resources/theme/theme.json";

describe("Section", () => {
  it("should render", () => {
    const headerText = "sample header";
    const sampleChild = "Sample Child";
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Section headerText={headerText}>{sampleChild}</Section>
      </ThemeProvider>
    );
    expect(queryByText(headerText)).toBeTruthy();
    expect(queryByText(sampleChild)).toBeTruthy();
  });
});
