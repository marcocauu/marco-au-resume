import React from "react";
import { render } from "@testing-library/react";

import { Description } from "./Description";
import { SessionProvider } from "../../../../providers";
import language from "../../../../../resources/language/en.json";

describe("Description", () => {
  it("should render", () => {
    const { queryByText } = render(
      <SessionProvider language={language}>
        <Description />
      </SessionProvider>
    );
    language.description.map((desc) => {
      expect(queryByText(desc)).toBeTruthy();
    });
  });
});
