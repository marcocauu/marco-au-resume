import React from "react";
import { render } from "@testing-library/react";

import { Experience } from "./Experience";
import { ThemeProvider } from "../../providers";
import theme from "../../../resources/theme/theme.json";
import language from "../../../resources/language/en.json";

describe("Experience", () => {
  it("should render", () => {
    const { queryByText, getAllByText } = render(
      <ThemeProvider theme={theme}>
        <Experience experienceList={language.experienceList} />
      </ThemeProvider>
    );
    language.experienceList.map((experience) => {
      expect(getAllByText(experience.company).length).toBeTruthy();
      expect(queryByText(experience.date)).toBeTruthy();
      expect(queryByText(experience.summary)).toBeTruthy();
      expect(getAllByText(experience.location).length).toBeTruthy();
      expect(queryByText(experience.title)).toBeTruthy();
    });
  });
});
