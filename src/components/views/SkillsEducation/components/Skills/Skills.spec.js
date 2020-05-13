import React from "react";
import { render } from "@testing-library/react";

import { Skills } from "./Skills";
import { SessionProvider, ThemeProvider } from "../../../../providers";
import language from "../../../../../resources/language/en.json";
import theme from "../../../../../resources/theme/theme.json";

describe("Skills", () => {
  it("should render", () => {
    const { queryByText } = render(
      <SessionProvider language={language}>
        <ThemeProvider theme={theme}>
          <Skills />
        </ThemeProvider>
      </SessionProvider>
    );
    expect(queryByText(language.skillTitle.toUpperCase())).toBeTruthy();
    language.skills.map((skill) => {
      expect(queryByText(`${skill.title}:`)).toBeTruthy();
      expect(queryByText(skill.frameworks.join(", "))).toBeTruthy();
    });
  });
});
