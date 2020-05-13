import React from "react";
import { render } from "@testing-library/react";

import { Skills } from "./Skills";
import { ThemeProvider } from "../../../../providers";
import language from "../../../../../resources/language/en.json";
import theme from "../../../../../resources/theme/theme.json";

describe("Skills", () => {
  it("should render", () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Skills title={language.skillTitle} skills={language.skills} />
      </ThemeProvider>
    );
    expect(queryByText(language.skillTitle.toUpperCase())).toBeTruthy();
    language.skills.map((skill) => {
      expect(queryByText(`${skill.title}:`)).toBeTruthy();
      expect(queryByText(skill.frameworks.join(", "))).toBeTruthy();
    });
  });
});
