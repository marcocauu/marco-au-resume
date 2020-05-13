import React from "react";
import { render } from "@testing-library/react";

import { Description } from "./Description";
import language from "../../resources/language/en.json";

describe("Description", () => {
  it("should render", () => {
    const { queryByText } = render(
      <Description description={language.description} />
    );
    language.description.map((desc) => {
      expect(queryByText(desc)).toBeTruthy();
    });
  });

  it("pretext should not render if not passed in", () => {
    const pretext = "sample text";
    const { queryByText } = render(
      <Description description={language.description} />
    );
    expect(queryByText(pretext)).toBeNull();
  });

  it("pretext should render if passed in", () => {
    const pretext = "sample text";
    const { queryByText } = render(
      <Description description={language.description} pretext={pretext} />
    );
    expect(queryByText(pretext)).toBeTruthy();
  });
});
