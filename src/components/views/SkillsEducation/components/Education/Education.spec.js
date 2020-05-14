import React from "react";
import { render } from "@testing-library/react";

import { Education } from "./Education";
import { ThemeProvider } from "../../../../providers";
import language from "../../../../../resources/language/en.json";
import theme from "../../../../../resources/theme/theme.json";

describe("Education", () => {
  it("should render", () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Education
          title={language.educationTitle}
          major={language.majorTitle}
          concentration={language.concentrationTitle}
          education={language.schools}
        />
      </ThemeProvider>
    );
    expect(queryByText(language.educationTitle.toUpperCase())).toBeTruthy();
    language.schools.map((school) => {
      expect(queryByText(school.name)).toBeTruthy();
      expect(
        queryByText(`${language.majorTitle} ${school.major}`)
      ).toBeTruthy();
      expect(
        queryByText(`${language.concentrationTitle} ${school.concentration}`)
      ).toBeTruthy();
      expect(queryByText(school.yearAttended)).toBeTruthy();
    });
  });
});
