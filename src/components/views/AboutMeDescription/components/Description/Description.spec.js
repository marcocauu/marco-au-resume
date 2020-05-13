import React from "react";
import { render } from "@testing-library/react";

import { Description } from "./Description";
import language from "../../../../../resources/language/en.json";

describe("Description", () => {
  it("should render", () => {
    const { queryByText } = render(
      <Description description={language.description} />
    );
    language.description.map((desc) => {
      expect(queryByText(desc)).toBeTruthy();
    });
  });
});
