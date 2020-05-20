import React from "react";
import { render } from "@testing-library/react";

import { AboutMeDescription } from "./AboutMeDescription";
import { SessionProvider, ThemeProvider } from "../../providers";
import language from "../../../resources/language/en.json";
import theme from "../../../resources/theme/theme.json";

describe("Description", () => {
  it("should render", () => {
    const wrapper = render(
      <SessionProvider language={language}>
        <ThemeProvider theme={theme}>
          <AboutMeDescription />
        </ThemeProvider>
      </SessionProvider>
    );
  });
});
