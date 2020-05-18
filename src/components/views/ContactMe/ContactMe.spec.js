import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { ContactMe } from "./ContactMe";
import { SessionProvider, ThemeProvider } from "../../providers";
import language from "../../../resources/language/en.json";
import theme from "../../../resources/theme/theme.json";

describe("ContactMe", () => {
  it("should render", () => {
    const wrapper = render(
      <SessionProvider language={language}>
        <ThemeProvider theme={theme}>
          <ContactMe />
        </ThemeProvider>
      </SessionProvider>
    );
  });

  it("should call window functions", () => {
    window.open = jest.fn();
    window.scrollTo = jest.fn();
    const { container } = render(
      <SessionProvider language={language}>
        <ThemeProvider theme={theme}>
          <ContactMe />
        </ThemeProvider>
      </SessionProvider>
    );
    fireEvent.click(container.querySelector("#viewOnGithubButton"));
    fireEvent.click(container.querySelector("#viewLinkedinButton"));
    fireEvent.click(container.querySelector("#scrollToTopButton"));
    expect(window.open).toHaveBeenCalledTimes(2);
    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });
});
