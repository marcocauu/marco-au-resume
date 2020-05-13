import React from "react";
import { render } from "@testing-library/react";

import { Education } from "./Education";
import { SessionProvider, ThemeProvider } from "../../../../providers";
import language from "../../../../../resources/language/en.json";
import theme from "../../../../../resources/theme/theme.json";

describe("Education", () => {
  it("should render", () => {
    const { queryByText } = render(
      <SessionProvider language={language}>
        <ThemeProvider theme={theme}>
          <Education />
        </ThemeProvider>
      </SessionProvider>
    );
    expect(queryByText(language.educationTitle.toUpperCase())).toBeTruthy();
    language.schools.map((school) => {
      expect(queryByText(school.name)).toBeTruthy();
      expect(queryByText(`${language.major} ${school.major}`)).toBeTruthy();
      expect(
        queryByText(`${language.concentration} ${school.concentration}`)
      ).toBeTruthy();
      expect(queryByText(school.yearAttended)).toBeTruthy();
    });
  });
});
