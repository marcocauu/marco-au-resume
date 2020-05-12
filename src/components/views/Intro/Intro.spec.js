import React from "react";
import { render } from "@testing-library/react";

import { Intro } from "./Intro";
import { SessionProvider, ThemeProvider } from "../../providers";
import language from "../../../resources/language/en.json";
import theme from "../../../resources/theme/theme.json";

describe("Intro", () => {
  it("should render", () => {
    const { queryByText } = render(
      <SessionProvider language={language}>
        <ThemeProvider theme={theme}>
          <Intro />
        </ThemeProvider>
      </SessionProvider>
    );
    expect(queryByText(language.hello)).toBeTruthy();
    expect(queryByText(language.name)).toBeTruthy();
  });
});
