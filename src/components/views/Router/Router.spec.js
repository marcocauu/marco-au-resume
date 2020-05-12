import React from "react";
import { render } from "@testing-library/react";

import { Router } from "./Router";
import { SessionProvider } from "../../providers";
import language from "../../../resources/language/en.json";
import theme from "../../../resources/theme/theme.json";

describe("Router", () => {
  it("should render", () => {
    const wrapper = render(
      <SessionProvider basename={""} language={language} theme={theme}>
        <Router />
      </SessionProvider>
    );
  });
});
