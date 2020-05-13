import React from "react";
import { render } from "@testing-library/react";

import { SkillsEducation } from "./SkillsEducation";
import { SessionProvider, ThemeProvider } from "../../providers";
import language from "../../../resources/language/en.json";
import theme from "../../../resources/theme/theme.json";

describe("SkillsEducation", () => {
  it("should render", () => {
    const { queryByText } = render(
      <SessionProvider language={language}>
        <ThemeProvider theme={theme}>
          <SkillsEducation />
        </ThemeProvider>
      </SessionProvider>
    );
  });
});
