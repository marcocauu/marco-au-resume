import React from "react";
import { render } from "@testing-library/react";

import { Main } from "./Main";
import { SessionProvider, ThemeProvider } from "../../providers";
import language from "../../../resources/language/en.json";
import theme from "../../../resources/theme/theme.json";

describe("Main", () => {
  it("should render", () => {
    const wrapper = render(
      <SessionProvider language={language} basename={"test"}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </SessionProvider>
    );
  });
});
