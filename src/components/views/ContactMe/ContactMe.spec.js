import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { ContactMe } from "./ContactMe";
import { SessionProvider } from "../../providers";
import language from "../../../resources/language/en.json";

describe("ContactMe", () => {
  it("should render", () => {
    const wrapper = render(
      <SessionProvider language={language}>
        <ContactMe />
      </SessionProvider>
    );
  });

  it("should call window open function", () => {
    window.open = jest.fn();
    const { container } = render(
      <SessionProvider language={language}>
        <ContactMe />
      </SessionProvider>
    );
    fireEvent.click(container.querySelector("#viewOnGithubButton"));
    expect(window.open).toHaveBeenCalled();
  });
});
