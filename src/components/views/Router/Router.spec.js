import React from "react";
import { render } from "@testing-library/react";

import { Router } from "./Router";
import { SessionProvider, ThemeProvider } from "../../providers";
import language from "../../../resources/language/en.json";
import theme from "../../../resources/theme/theme.json";

describe("Router", () => {
  it("should render", () => {
    const wrapper = render(
      <SessionProvider basename={""} language={language}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </SessionProvider>
    );
  });
});
